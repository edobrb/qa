// xlsx.jsx — "Esporta framework (Excel)".
// Produces a styled, customer-facing .xlsx of the active framework:
//   Introduzione · one sheet per journey (one row per question) · Standard di riferimento.
// Everything is generated in the browser by a minimal SpreadsheetML writer and a tiny
// ZIP packer below: no library, no network call (AGENTS.md rule 7).
// Internal details are left out on purpose: tag, chiavi tecniche, id del framework,
// suggerimenti di remediation e risposte dell'audit.

(function () {
  const XLSX_MIME = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

  // ======================================================================
  // ZIP — entries are deflated when the browser has CompressionStream,
  // stored otherwise (both are valid for Excel / Numbers / Sheets).
  // ======================================================================
  const CRC_TABLE = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  function deflateRaw(bytes) {
    if (typeof CompressionStream === "undefined") return Promise.resolve(null);
    try {
      const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("deflate-raw"));
      return new Response(stream).arrayBuffer().then((b) => new Uint8Array(b), () => null);
    } catch (_) {
      return Promise.resolve(null);
    }
  }
  // files: [{ name, data: string }] → Promise<Blob>
  function zip(files) {
    const enc = new TextEncoder();
    const now = new Date();
    const dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    const dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    return Promise.all(files.map((f) => {
      const raw = enc.encode(f.data);
      return deflateRaw(raw).then((d) => {
        const deflated = !!d && d.length < raw.length;
        return { name: enc.encode(f.name), raw, body: deflated ? d : raw, method: deflated ? 8 : 0, crc: crc32(raw) };
      });
    })).then((entries) => {
      const parts = [], central = [];
      let offset = 0;
      for (const e of entries) {
        const local = new DataView(new ArrayBuffer(30));
        local.setUint32(0, 0x04034b50, true);
        local.setUint16(4, 20, true);
        local.setUint16(8, e.method, true);
        local.setUint16(10, dosTime, true);
        local.setUint16(12, dosDate, true);
        local.setUint32(14, e.crc, true);
        local.setUint32(18, e.body.length, true);
        local.setUint32(22, e.raw.length, true);
        local.setUint16(26, e.name.length, true);
        parts.push(new Uint8Array(local.buffer), e.name, e.body);

        const cd = new DataView(new ArrayBuffer(46));
        cd.setUint32(0, 0x02014b50, true);
        cd.setUint16(4, 20, true);
        cd.setUint16(6, 20, true);
        cd.setUint16(10, e.method, true);
        cd.setUint16(12, dosTime, true);
        cd.setUint16(14, dosDate, true);
        cd.setUint32(16, e.crc, true);
        cd.setUint32(20, e.body.length, true);
        cd.setUint32(24, e.raw.length, true);
        cd.setUint16(28, e.name.length, true);
        cd.setUint32(42, offset, true);
        central.push(new Uint8Array(cd.buffer), e.name);
        offset += 30 + e.name.length + e.body.length;
      }
      const cdSize = central.reduce((s, c) => s + c.length, 0);
      const end = new DataView(new ArrayBuffer(22));
      end.setUint32(0, 0x06054b50, true);
      end.setUint16(8, entries.length, true);
      end.setUint16(10, entries.length, true);
      end.setUint32(12, cdSize, true);
      end.setUint32(16, offset, true);
      return new Blob([...parts, ...central, new Uint8Array(end.buffer)], { type: XLSX_MIME });
    });
  }

  // ======================================================================
  // SpreadsheetML writer
  // A style is a flat spec: { bold, italic, underline, size, color, fill,
  // h, v, wrap, indent, border: { l, r, t, b } } — a border side is a hex
  // color (thin) or [style, color]. Colors are "RRGGBB".
  // A cell value is a string, a number, null (styled blank) or an array of
  // rich-text runs [{ text, bold, color, size, … }].
  // ======================================================================
  const FONT = "Arial";
  const MDW = 7; // max digit width in px of Arial 10, i.e. Excel's column-width unit

  const NS_MAIN = "http://schemas.openxmlformats.org/spreadsheetml/2006/main";
  const NS_REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
  const NS_PKG_REL = "http://schemas.openxmlformats.org/package/2006/relationships";
  const XML_HEAD = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';

  const esc = (s) => String(s)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g, "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const colName = (c) => {
    let s = "";
    for (let n = c + 1; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + ((n - 1) % 26)) + s;
    return s;
  };
  const ref = (r, c) => colName(c) + (r + 1);
  const quoteSheet = (name) => `'${name.replace(/'/g, "''")}'`;
  const absRange = (r1, c1, r2, c2) => `$${colName(c1)}$${r1 + 1}:$${colName(c2)}$${r2 + 1}`;

  // Row heights: there is no auto-fit that Excel, Numbers and Sheets all honour on
  // open, so estimate the wrapped line count from Arial metrics and write explicit
  // heights. Widths are deliberately generous (~10%) so text is never clipped.
  function lineCount(text, widthChars, size = 10, bold = false) {
    const usablePx = widthChars * MDW - 6;
    const charPx = size * (96 / 72) * (bold ? 0.52 : 0.48);
    const perLine = Math.max(1, Math.floor(usablePx / charPx));
    let lines = 0;
    for (const para of String(text == null ? "" : text).split("\n")) {
      let len = 0;
      lines++;
      for (const word of para.split(/\s+/)) {
        if (!word) continue;
        len = len ? len + 1 + word.length : word.length;
        if (len > perLine) {
          if (len - word.length - 1 > 0) { lines++; len = word.length; }
          while (len > perLine) { lines++; len -= perLine; }
        }
      }
    }
    return lines;
  }
  const heightFor = (lines, size = 10, pad = 6) => Math.min(409, Math.ceil(lines * size * 1.28 + pad));

  function fontXml(s, tag) {
    const inner = `${s.bold ? "<b/>" : ""}${s.italic ? "<i/>" : ""}${s.underline ? "<u/>" : ""}`
      + `<sz val="${s.size || 10}"/><color rgb="FF${s.color || "000000"}"/>`
      + (tag === "rPr" ? `<rFont val="${FONT}"/>` : `<name val="${FONT}"/>`) + '<family val="2"/>';
    return `<${tag}>${inner}</${tag}>`;
  }
  function borderXml(b) {
    const side = (tag, v) => {
      if (!v) return `<${tag}/>`;
      const [style, color] = Array.isArray(v) ? v : ["thin", v];
      return `<${tag} style="${style}"><color rgb="FF${color}"/></${tag}>`;
    };
    return `<border>${side("left", b.l)}${side("right", b.r)}${side("top", b.t)}${side("bottom", b.b)}<diagonal/></border>`;
  }
  function alignXml(s) {
    const a = [];
    if (s.h) a.push(`horizontal="${s.h}"`);
    if (s.v) a.push(`vertical="${s.v}"`);
    if (s.wrap) a.push('wrapText="1"');
    if (s.indent) a.push(`indent="${s.indent}"`);
    return a.length ? `<alignment ${a.join(" ")}/>` : "";
  }

  function createStyles() {
    const fonts = [`<font><sz val="10"/><name val="${FONT}"/><family val="2"/></font>`];
    const fills = ['<fill><patternFill patternType="none"/></fill>', '<fill><patternFill patternType="gray125"/></fill>'];
    const borders = ["<border><left/><right/><top/><bottom/><diagonal/></border>"];
    const xfs = ['<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'];
    const intern = (list, xml) => { const i = list.indexOf(xml); return i >= 0 ? i : list.push(xml) - 1; };
    const cache = new Map();
    return {
      id(spec) {
        if (!spec) return 0;
        const key = JSON.stringify(spec);
        if (cache.has(key)) return cache.get(key);
        const fontId = intern(fonts, fontXml(spec, "font"));
        const fillId = spec.fill
          ? intern(fills, `<fill><patternFill patternType="solid"><fgColor rgb="FF${spec.fill}"/><bgColor indexed="64"/></patternFill></fill>`)
          : 0;
        const borderId = spec.border ? intern(borders, borderXml(spec.border)) : 0;
        const align = alignXml(spec);
        const xf = `<xf numFmtId="0" fontId="${fontId}" fillId="${fillId}" borderId="${borderId}" xfId="0" applyFont="1"`
          + (fillId ? ' applyFill="1"' : "") + (borderId ? ' applyBorder="1"' : "")
          + (align ? ` applyAlignment="1">${align}</xf>` : "/>");
        const id = intern(xfs, xf);
        cache.set(key, id);
        return id;
      },
      xml() {
        return XML_HEAD + `<styleSheet xmlns="${NS_MAIN}">`
          + `<fonts count="${fonts.length}">${fonts.join("")}</fonts>`
          + `<fills count="${fills.length}">${fills.join("")}</fills>`
          + `<borders count="${borders.length}">${borders.join("")}</borders>`
          + '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
          + `<cellXfs count="${xfs.length}">${xfs.join("")}</cellXfs>`
          + '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'
          + "</styleSheet>";
      },
    };
  }

  // opts: { cols: [widths], tabColor, freezeRows, landscape, footer,
  //         autoFilter: [r1, c1, r2, c2], printTitles: [r1, r2] }  (0-based)
  function createSheet(name, opts) {
    const rows = new Map();
    const row = (r) => {
      let x = rows.get(r);
      if (!x) rows.set(r, (x = { cells: new Map() }));
      return x;
    };
    const sh = {
      name, opts, rows, merges: [], links: [],
      set(r, c, v, s) { row(r).cells.set(c, { v, s }); return sh; },
      // Styled blanks, so fills and borders run across the whole range.
      fill(r, c1, c2, s) {
        for (let c = c1; c <= c2; c++) if (!row(r).cells.has(c)) row(r).cells.set(c, { v: null, s });
        return sh;
      },
      putMerged(r, c1, c2, v, s) {
        sh.set(r, c1, v, s).fill(r, c1 + 1, c2, s);
        if (c2 > c1) sh.merges.push([r, c1, r, c2]);
        return sh;
      },
      height(r, ht) { row(r).ht = ht; return sh; },
      link(r, c, url) { sh.links.push({ r, c, url }); return sh; },
    };
    return sh;
  }

  function createWorkbook() {
    const sheets = [];
    const styles = createStyles();
    const strings = [];
    const stringIndex = new Map();

    function sharedString(v, cellSpec) {
      const rich = Array.isArray(v);
      const key = rich ? "r" + JSON.stringify([v, cellSpec]) : "s" + v;
      let i = stringIndex.get(key);
      if (i === undefined) {
        const xml = rich
          ? v.map((run) => `<r>${fontXml({ ...cellSpec, ...run }, "rPr")}<t xml:space="preserve">${esc(run.text)}</t></r>`).join("")
          : `<t xml:space="preserve">${esc(v)}</t>`;
        i = strings.push(`<si>${xml}</si>`) - 1;
        stringIndex.set(key, i);
      }
      return i;
    }

    function cellXml(r, c, cell) {
      const sid = styles.id(cell.s);
      const s = sid ? ` s="${sid}"` : "";
      let v = cell.v;
      if (Array.isArray(v)) {
        v = v.filter((run) => run && run.text);
        if (!v.length) v = null;
      }
      if (v == null || v === "") return `<c r="${ref(r, c)}"${s}/>`;
      if (typeof v === "number") return `<c r="${ref(r, c)}"${s}><v>${v}</v></c>`;
      return `<c r="${ref(r, c)}"${s} t="s"><v>${sharedString(v, cell.s || {})}</v></c>`;
    }

    function sheetXml(sh, index) {
      const o = sh.opts;
      let maxR = 0, maxC = 0, data = "";
      for (const r of [...sh.rows.keys()].sort((a, b) => a - b)) {
        const row = sh.rows.get(r);
        let cells = "";
        for (const c of [...row.cells.keys()].sort((a, b) => a - b)) {
          cells += cellXml(r, c, row.cells.get(c));
          maxC = Math.max(maxC, c);
        }
        maxR = Math.max(maxR, r);
        const ht = row.ht ? ` ht="${Math.round(row.ht * 100) / 100}" customHeight="1"` : "";
        data += `<row r="${r + 1}"${ht}>${cells}</row>`;
      }
      const pane = o.freezeRows
        ? `<pane ySplit="${o.freezeRows}" topLeftCell="A${o.freezeRows + 1}" activePane="bottomLeft" state="frozen"/>`
          + `<selection pane="bottomLeft" activeCell="A${o.freezeRows + 1}" sqref="A${o.freezeRows + 1}"/>`
        : '<selection activeCell="A1" sqref="A1"/>';
      const links = sh.links.filter((l) => /^https?:\/\//i.test(l.url || ""));
      const xml = XML_HEAD + `<worksheet xmlns="${NS_MAIN}" xmlns:r="${NS_REL}">`
        + "<sheetPr>" + (o.tabColor ? `<tabColor rgb="FF${o.tabColor}"/>` : "") + '<pageSetUpPr fitToPage="1"/></sheetPr>'
        + `<dimension ref="A1:${ref(maxR, maxC)}"/>`
        + `<sheetViews><sheetView showGridLines="0"${index === 0 ? ' tabSelected="1"' : ""} workbookViewId="0">${pane}</sheetView></sheetViews>`
        + '<sheetFormatPr defaultRowHeight="12.75"/>'
        + (o.cols && o.cols.length
          ? "<cols>" + o.cols.map((w, i) => `<col min="${i + 1}" max="${i + 1}" width="${w}" customWidth="1"/>`).join("") + "</cols>"
          : "")
        + `<sheetData>${data}</sheetData>`
        + (o.autoFilter ? `<autoFilter ref="${ref(o.autoFilter[0], o.autoFilter[1])}:${ref(o.autoFilter[2], o.autoFilter[3])}"/>` : "")
        + (sh.merges.length
          ? `<mergeCells count="${sh.merges.length}">`
            + sh.merges.map(([r1, c1, r2, c2]) => `<mergeCell ref="${ref(r1, c1)}:${ref(r2, c2)}"/>`).join("") + "</mergeCells>"
          : "")
        + (links.length
          ? "<hyperlinks>" + links.map((l, i) => `<hyperlink ref="${ref(l.r, l.c)}" r:id="rId${i + 1}"/>`).join("") + "</hyperlinks>"
          : "")
        + '<pageMargins left="0.4" right="0.4" top="0.5" bottom="0.6" header="0.3" footer="0.3"/>'
        + `<pageSetup paperSize="9" orientation="${o.landscape ? "landscape" : "portrait"}" fitToWidth="1" fitToHeight="0"/>`
        + (o.footer ? `<headerFooter><oddFooter>${esc(o.footer)}</oddFooter></headerFooter>` : "")
        + "</worksheet>";
      const rels = links.length
        ? XML_HEAD + `<Relationships xmlns="${NS_PKG_REL}">`
          + links.map((l, i) => `<Relationship Id="rId${i + 1}" Type="${NS_REL}/hyperlink" Target="${esc(l.url)}" TargetMode="External"/>`).join("")
          + "</Relationships>"
        : null;
      return { xml, rels };
    }

    return {
      addSheet(name, opts = {}) {
        const sh = createSheet(name, opts);
        sheets.push(sh);
        return sh;
      },
      toBlob({ title } = {}) {
        // Sheets first: rendering them is what registers styles and shared strings.
        const rendered = sheets.map(sheetXml);
        const n = sheets.length;
        const definedNames = [];
        sheets.forEach((sh, i) => {
          const q = quoteSheet(sh.name);
          const af = sh.opts.autoFilter;
          if (af) definedNames.push(`<definedName name="_xlnm._FilterDatabase" localSheetId="${i}" hidden="1">${esc(q)}!${absRange(...af)}</definedName>`);
          const pt = sh.opts.printTitles;
          if (pt) definedNames.push(`<definedName name="_xlnm.Print_Titles" localSheetId="${i}">${esc(q)}!$${pt[0] + 1}:$${pt[1] + 1}</definedName>`);
        });
        const stamp = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
        const files = [
          {
            name: "[Content_Types].xml",
            data: XML_HEAD + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
              + '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
              + '<Default Extension="xml" ContentType="application/xml"/>'
              + '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
              + sheets.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")
              + '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
              + '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'
              + '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>'
              + "</Types>",
          },
          {
            name: "_rels/.rels",
            data: XML_HEAD + `<Relationships xmlns="${NS_PKG_REL}">`
              + `<Relationship Id="rId1" Type="${NS_REL}/officeDocument" Target="xl/workbook.xml"/>`
              + '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>'
              + "</Relationships>",
          },
          {
            name: "docProps/core.xml",
            data: XML_HEAD + '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
              + (title ? `<dc:title>${esc(title)}</dc:title>` : "")
              + "<dc:language>it-IT</dc:language>"
              + `<dcterms:created xsi:type="dcterms:W3CDTF">${stamp}</dcterms:created>`
              + `<dcterms:modified xsi:type="dcterms:W3CDTF">${stamp}</dcterms:modified>`
              + "</cp:coreProperties>",
          },
          {
            name: "xl/workbook.xml",
            data: XML_HEAD + `<workbook xmlns="${NS_MAIN}" xmlns:r="${NS_REL}">`
              + '<bookViews><workbookView activeTab="0"/></bookViews>'
              + "<sheets>" + sheets.map((sh, i) => `<sheet name="${esc(sh.name)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join("") + "</sheets>"
              + (definedNames.length ? `<definedNames>${definedNames.join("")}</definedNames>` : "")
              + "</workbook>",
          },
          {
            name: "xl/_rels/workbook.xml.rels",
            data: XML_HEAD + `<Relationships xmlns="${NS_PKG_REL}">`
              + sheets.map((_, i) => `<Relationship Id="rId${i + 1}" Type="${NS_REL}/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join("")
              + `<Relationship Id="rId${n + 1}" Type="${NS_REL}/styles" Target="styles.xml"/>`
              + `<Relationship Id="rId${n + 2}" Type="${NS_REL}/sharedStrings" Target="sharedStrings.xml"/>`
              + "</Relationships>",
          },
        ];
        rendered.forEach((s, i) => {
          files.push({ name: `xl/worksheets/sheet${i + 1}.xml`, data: s.xml });
          if (s.rels) files.push({ name: `xl/worksheets/_rels/sheet${i + 1}.xml.rels`, data: s.rels });
        });
        files.push({ name: "xl/styles.xml", data: styles.xml() });
        files.push({
          name: "xl/sharedStrings.xml",
          data: XML_HEAD + `<sst xmlns="${NS_MAIN}" count="${strings.length}" uniqueCount="${strings.length}">${strings.join("")}</sst>`,
        });
        return zip(files);
      },
    };
  }

  // ======================================================================
  // Framework layout
  // ======================================================================

  // BCC palette — mirrors the [data-theme="bcc"] tokens in polar.css. SpreadsheetML
  // needs literal colors, so they are repeated here: keep the two in sync.
  const PAL = {
    blue: "003594",     // --primary (Blu BCC)
    navy: "001E62",     // --foreground (Blu Scuro BCC)
    green: "00843D",    // --success (Verde BCC)
    orange: "CC4E00",   // --warning
    red: "C8102E",      // --destructive
    link: "007DBA",     // --info
    muted: "5A6470",    // --muted-foreground
    line: "D7DADD",     // --border
    soft: "F2F4F7",     // --muted
    blueTint: "E6EEF7", // --accent
    greenTint: "E8F4EC", // --success-surface
    white: "FFFFFF",
  };
  // Conformity columns: header color + a light tint for the criteria cells,
  // keyed on CONF_LEVELS[*].color so the levels stay defined in data.jsx only.
  const LEVEL_COLORS = {
    success: { solid: PAL.green, tint: "F3F9F5" },
    warning: { solid: PAL.orange, tint: "FEF6EF" },
    destructive: { solid: PAL.red, tint: "FDF1F3" },
  };
  const CRITERIA_LEVELS = ["full_compliance", "partial_barrier", "critical_ko"];

  const JOURNEYS = [
    { id: "current_account", label: "Conto corrente", accent: PAL.blue, tint: PAL.blueTint },
    { id: "mortgage", label: "Mutuo prima casa", accent: PAL.green, tint: PAL.greenTint },
  ];

  const GRID = { l: PAL.line, r: PAL.line, t: PAL.line, b: PAL.line };
  const ST = {
    kicker: { bold: true, size: 9, color: PAL.green, v: "bottom" },
    title: { bold: true, size: 18, color: PAL.blue, v: "center" },
    subtitle: { size: 10, color: PAL.muted, v: "center" },
    head: { bold: true, size: 10, color: PAL.white, fill: PAL.navy, v: "center", wrap: true, border: { l: PAL.white, r: PAL.white } },
    groupHead: { bold: true, size: 9, color: PAL.white, fill: PAL.navy, h: "center", v: "center", border: { l: PAL.white, r: PAL.white, b: PAL.white } },
    band: { size: 10, color: PAL.navy, v: "center", border: { t: PAL.line, b: PAL.line } },
    cell: { size: 10, color: PAL.navy, v: "top", wrap: true, border: GRID },
    link: { size: 10, color: PAL.link, underline: true, v: "top", border: GRID },
    lead: { size: 11, color: PAL.navy, v: "top", wrap: true },
    meta: { size: 9, color: PAL.muted, v: "center" },
    tileNum: { bold: true, size: 22, color: PAL.blue, fill: PAL.soft, v: "bottom", h: "left", indent: 1, border: { l: ["thick", PAL.white], r: ["thick", PAL.white] } },
    tileLabel: { size: 9, color: PAL.muted, fill: PAL.soft, v: "top", indent: 1, border: { l: ["thick", PAL.white], r: ["thick", PAL.white] } },
    section: { bold: true, size: 13, color: PAL.blue, v: "bottom", border: { b: ["medium", PAL.blue] } },
    bullet: { size: 10, color: PAL.navy, v: "top", wrap: true },
    itemLabel: { bold: true, size: 10, color: PAL.navy, v: "center", wrap: true, border: { b: PAL.line } },
    itemDesc: { size: 10, color: PAL.navy, v: "center", wrap: true, border: { b: PAL.line } },
    itemCount: { size: 10, color: PAL.muted, h: "right", v: "center", border: { b: PAL.line } },
    subhead: { bold: true, size: 11, v: "center", indent: 1 },
  };

  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  const qCount = (n) => plural(n, "domanda", "domande");
  const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");
  const fileSlug = (s) =>
    String(s || "").toLowerCase().normalize("NFD")
      .replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 60);
  const fmtDate = (v) => {
    const d = v instanceof Date ? v : new Date(/^\d{4}-\d{2}-\d{2}$/.test(v || "") ? `${v}T00:00:00` : v);
    return Number.isNaN(d.getTime())
      ? String(v || "—")
      : d.toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
  };
  // Header/footer codes start with "&": a literal ampersand must be doubled.
  const hfText = (s) => String(s).replace(/&/g, "&&");

  function buildContext() {
    const D = /** @type {any} */ (window).AUDIT_DATA;
    const F = D.FRAMEWORK;
    const meta = F.metadata || {};
    const legends = F.legends || {};
    const fwName = meta.name_it || meta.title_it || "Framework";
    const version = meta.version || "—";
    const tpOrder = Object.keys(legends.touchpoints_it || {});
    const chRank = (tp) => { const i = (D.CHANNEL_ORDER || []).indexOf((D.TOUCHPOINT_CHANNEL || {})[tp]); return i < 0 ? 99 : i; };
    const tpRank = (tp) => { const i = tpOrder.indexOf(tp); return i < 0 ? 999 : i; };
    // Same row order as the heatmap: Digitale → Fisico → Umano, then legend order.
    const sortQuestions = (list) => list.map((q, i) => [q, i])
      .sort((a, b) => chRank(a[0].touchpoint) - chRank(b[0].touchpoint)
        || tpRank(a[0].touchpoint) - tpRank(b[0].touchpoint) || a[1] - b[1])
      .map((x) => x[0]);
    return {
      D, F, meta, legends, fwName, version, tpOrder, sortQuestions,
      // The UI chip abbreviates this one; the customer document spells it out.
      userCat: (c) => (c === "elderly_temporary_situational" ? "Anziani e limitazioni temporanee" : (D.USER_CAT_LABEL[c] || c)),
      tpLabel: (tp) => D.TOUCHPOINT_LABELS[tp] || tp,
      channelLabel: (tp) => (D.CHANNEL_LABEL || {})[(D.TOUCHPOINT_CHANNEL || {})[tp]] || "",
      footer: `&L${hfText(`${fwName} · versione ${version}`)}&RPagina &P di &N`,
    };
  }

  // ---------- Sheet 1: Introduzione ----------
  function buildIntroSheet(wb, ctx) {
    const { D, meta, legends } = ctx;
    const sh = wb.addSheet("Introduzione", { cols: [2, 26, 26, 26, 26, 2], tabColor: PAL.navy, footer: ctx.footer });
    const B = 1, E = 4;
    const W_FULL = 104, W_DESC = 78, W_MID = 52, W_LABEL = 26;
    let r = 0;

    const gap = (h) => sh.height(r++, h);
    const para = (text, style, minH = 0) => {
      sh.putMerged(r, B, E, text, style);
      sh.height(r++, Math.max(minH, heightFor(lineCount(text, W_FULL, style.size, style.bold), style.size)));
    };
    const section = (title) => {
      gap(22);
      sh.set(r, B, title, ST.section).fill(r, B + 1, E, ST.section).height(r++, 24);
    };
    // label | description (| count) — the description spans the count column when there is none
    const item = (label, desc, count, labelStyle = ST.itemLabel) => {
      const withCount = count != null;
      sh.set(r, B, label, labelStyle);
      sh.putMerged(r, B + 1, withCount ? E - 1 : E, desc || "", ST.itemDesc);
      if (withCount) sh.set(r, E, qCount(count), ST.itemCount);
      const lines = Math.max(lineCount(label, W_LABEL - 2, 10, true), lineCount(desc, withCount ? W_MID : W_DESC));
      sh.height(r++, Math.max(24, heightFor(lines, 10, 8)));
    };
    const subhead = (label, right, accent, tint) => {
      gap(8);
      const s = { ...ST.subhead, color: accent, fill: tint };
      sh.set(r, B, label, s).fill(r, B + 1, E - 1, s);
      sh.set(r, E, right, { ...s, bold: false, size: 10, color: PAL.muted, h: "right", indent: 0 });
      sh.height(r++, 24);
    };

    const questions = D.QUESTIONS;
    const steps = JOURNEYS.flatMap((j) => D.MACRO_STEPS[j.id] || []);
    const usedTps = new Set(questions.map((q) => q.touchpoint));

    gap(18);
    sh.set(r, B, "FRAMEWORK DI AUDIT DELL’ACCESSIBILITÀ", ST.kicker).height(r++, 18);
    para(ctx.fwName, { ...ST.title, size: 20, wrap: true }, 32);
    gap(6);
    if (meta.description_it) para(meta.description_it, ST.lead);
    gap(16);

    const tiles = [
      [questions.length, "domande"],
      [JOURNEYS.length, "journey"],
      [steps.length, "fasi"],
      [usedTps.size, "touchpoint"],
    ];
    tiles.forEach(([n, label], i) => {
      sh.set(r, B + i, n, ST.tileNum);
      sh.set(r + 1, B + i, label, ST.tileLabel);
    });
    sh.height(r++, 36);
    sh.height(r++, 20);
    gap(10);
    para(`Versione ${ctx.version}   ·   Rilascio: ${fmtDate(meta.date)}   ·   Esportato: ${fmtDate(new Date())}`, ST.meta, 16);

    section("Come leggere il framework");
    [
      `Il framework copre i journey ${JOURNEYS.map((j) => j.label).join(" e ")}. Ogni journey è suddiviso in fasi e ogni domanda verifica un requisito di accessibilità in uno specifico touchpoint dei canali digitale, fisico e umano.`,
      "Per ciascuna domanda sono definiti tre livelli di conformità (piena aderenza, barriera parziale, KO critico) che rendono la valutazione oggettiva e ripetibile.",
      "Il principio POUR indica la dimensione dell’accessibilità interessata; gli utenti impattati sono le persone che una barriera escluderebbe o penalizzerebbe.",
      "Gli standard di riferimento collegano ogni requisito alla normativa e alle norme tecniche applicabili: il foglio «Standard di riferimento» li elenca con il collegamento alla fonte.",
      "Nei fogli dei journey le domande sono raggruppate per fase e le colonne sono filtrabili per fase, canale, touchpoint e principio POUR.",
    ].forEach((t) => { gap(4); para(`•   ${t}`, ST.bullet); });

    section("Livelli di conformità");
    const lvlDefs = legends.conformity_levels_it || {};
    for (const lvl of CRITERIA_LEVELS) {
      const cl = D.CONF_LEVELS[lvl];
      if (!cl) continue;
      // Legend text reads "Piena aderenza: il requisito…" — the label is already in its own cell.
      const desc = capitalize(String(lvlDefs[lvl] || "").replace(/^[^:]{1,40}:\s*/, ""));
      const colors = LEVEL_COLORS[cl.color] || { solid: PAL.navy };
      item(cl.label, desc, null, { ...ST.itemLabel, color: PAL.white, fill: colors.solid, indent: 1, border: { b: PAL.white } });
    }

    section("Fasi dei journey");
    for (const j of JOURNEYS) {
      const jq = questions.filter((q) => q.journey === j.id);
      subhead(j.label, qCount(jq.length), j.accent, j.tint);
      (D.MACRO_STEPS[j.id] || []).forEach((s, i) => {
        item(`${i + 1}. ${s.name}`, s.description || "", jq.filter((q) => q.macro_step === s.id).length);
      });
    }

    section("Touchpoint e canali");
    const ordered = [...ctx.tpOrder.filter((tp) => usedTps.has(tp)), ...[...usedTps].filter((tp) => !ctx.tpOrder.includes(tp))];
    const channels = [...(D.CHANNEL_ORDER || []), null];
    for (const ch of channels) {
      const tps = ordered.filter((tp) => (ch ? D.TOUCHPOINT_CHANNEL[tp] === ch : !(D.CHANNEL_ORDER || []).includes(D.TOUCHPOINT_CHANNEL[tp])));
      if (!tps.length) continue;
      subhead(ch ? `Canale ${D.CHANNEL_LABEL[ch].toLowerCase()}` : "Altri touchpoint", plural(tps.length, "touchpoint", "touchpoint"), PAL.blue, PAL.blueTint);
      for (const tp of tps) {
        const moment = (D.MOMENT_LABEL || {})[(D.TOUCHPOINT_MOMENT || {})[tp]];
        item(ctx.tpLabel(tp), moment ? `Momento ${moment.toLowerCase()}` : "", questions.filter((q) => q.touchpoint === tp).length);
      }
    }

    section("Principi POUR");
    const pourDefs = legends.pour_definition_it || {};
    for (const k of Object.keys(D.POUR_LABEL)) {
      item(D.POUR_LABEL[k], pourDefs[k] || "", questions.filter((q) => q.pour_principle === k).length);
    }

    section("Utenti impattati");
    const catDefs = legends.user_categories_it || {};
    for (const k of Object.keys(D.USER_CAT_LABEL)) {
      item(ctx.userCat(k), catDefs[k] ? `Utenti ${catDefs[k]}` : "", questions.filter((q) => (q.affected_user_categories || []).includes(k)).length);
    }
    gap(18);
  }

  // ---------- Sheets 2–3: one per journey, one row per question ----------
  function buildJourneySheet(wb, ctx, j) {
    const { D } = ctx;
    const steps = D.MACRO_STEPS[j.id] || [];
    const qs = D.QUESTIONS.filter((q) => q.journey === j.id);
    const cols = [
      { label: "Codice", w: 15 },
      { label: "Fase", w: 13 },
      { label: "Canale", w: 10 },
      { label: "Touchpoint", w: 18 },
      { label: "Domanda", w: 48 },
      { label: "Perché è importante", w: 40 },
      ...CRITERIA_LEVELS.map((lvl, i) => ({ label: D.CONF_LEVELS[lvl].label, w: [44, 40, 38][i], level: lvl })),
      { label: "Principio POUR", w: 13 },
      { label: "Utenti impattati", w: 17 },
      { label: "Standard di riferimento", w: 46 },
    ];
    const last = cols.length - 1;
    const HEAD = 4, FIRST = 5;
    const sh = wb.addSheet(j.label, {
      cols: cols.map((c) => c.w), tabColor: j.accent, freezeRows: FIRST, landscape: true, footer: ctx.footer,
    });
    const levelColors = (lvl) => LEVEL_COLORS[D.CONF_LEVELS[lvl].color] || { solid: PAL.navy, tint: PAL.white };

    sh.set(0, 0, j.label, { ...ST.title, color: j.accent }).height(0, 32);
    sh.set(1, 0, `${qCount(qs.length)} in ${plural(steps.length, "fase", "fasi")}   ·   ${ctx.fwName}   ·   versione ${ctx.version}`, ST.subtitle).height(1, 18);
    sh.height(2, 10);

    // Two-tier header: "Criteri di conformità" spans the three level columns.
    const lvlIdx = cols.map((c, i) => (c.level ? i : -1)).filter((i) => i >= 0);
    sh.putMerged(3, lvlIdx[0], lvlIdx[lvlIdx.length - 1], "Criteri di conformità", ST.groupHead).height(3, 18);
    let headLines = 1;
    cols.forEach((c, i) => {
      sh.set(HEAD, i, c.label, c.level ? { ...ST.head, fill: levelColors(c.level).solid } : ST.head);
      headLines = Math.max(headLines, lineCount(c.label, c.w, 10, true));
    });
    sh.height(HEAD, heightFor(headLines, 10, 12));

    let r = FIRST;
    const band = (title, n, desc) => {
      const s = { ...ST.band, fill: j.tint };
      const runs = [
        { text: title, bold: true, size: 11, color: j.accent },
        { text: `   ·   ${qCount(n)}`, color: PAL.muted },
      ];
      if (desc) runs.push({ text: `   —   ${desc}` });
      sh.set(r, 0, runs, s).fill(r, 1, last, s).height(r++, 26);
    };
    const row = (q, stepName) => {
      const crit = q.conformity_criteria || {};
      const stds = (q.standards || []).filter((s) => s && s.standard);
      const stdTail = (s) => ` · ${s.clause || ""}${s.clause_title_it ? ` — ${s.clause_title_it}` : ""}`;
      const cells = [
        [q.id, { ...ST.cell, bold: true, size: 9, color: PAL.blue }],
        [stepName, { ...ST.cell, color: PAL.muted }],
        [ctx.channelLabel(q.touchpoint), { ...ST.cell, color: PAL.muted }],
        [ctx.tpLabel(q.touchpoint), ST.cell],
        [q.question_it || "", { ...ST.cell, bold: true }],
        [q.rationale_it || "", { ...ST.cell, color: PAL.muted }],
        ...CRITERIA_LEVELS.map((lvl) => [crit[lvl] || "", { ...ST.cell, fill: levelColors(lvl).tint }]),
        [D.POUR_LABEL[q.pour_principle] || "", ST.cell],
        [(q.affected_user_categories || []).map(ctx.userCat).join("\n"), ST.cell],
        [
          stds.flatMap((s, i) => [{ text: (i ? "\n" : "") + s.standard, bold: true }, { text: stdTail(s) }]),
          ST.cell,
          stds.map((s) => s.standard + stdTail(s)).join("\n"),
        ],
      ];
      let lines = 1;
      cells.forEach(([value, style, measure], c) => {
        sh.set(r, c, value, style);
        lines = Math.max(lines, lineCount(measure != null ? measure : value, cols[c].w, style.size, style.bold));
      });
      sh.height(r++, heightFor(lines));
    };

    const byStep = new Map(steps.map((s) => [s.id, []]));
    const orphans = [];
    for (const q of qs) (byStep.get(q.macro_step) || orphans).push(q);
    steps.forEach((s, i) => {
      const list = byStep.get(s.id);
      if (!list.length) return;
      band(`${i + 1}. ${s.name}`, list.length, s.description);
      ctx.sortQuestions(list).forEach((q) => row(q, s.name));
    });
    if (orphans.length) {
      band("Altre domande", orphans.length, "");
      ctx.sortQuestions(orphans).forEach((q) => row(q, ""));
    }

    sh.opts.autoFilter = [HEAD, 0, Math.max(r - 1, FIRST), last];
    sh.opts.printTitles = [3, HEAD];
  }

  // ---------- Sheet 4: Standard di riferimento ----------
  function buildStandardsSheet(wb, ctx) {
    const { D } = ctx;
    const FAMILY_RANK = { core: 0, physical_hardware: 1, guidelines_policies: 2 };
    const catalog = D.STANDARDS_CATALOG || [];

    // Unique references actually cited by the questions, with how many questions cite each.
    const entries = new Map();
    let seq = 0;
    for (const q of D.QUESTIONS) {
      const seen = new Set();
      for (const s of q.standards || []) {
        if (!s || !s.standard) continue;
        const key = [s.standard, s.clause || "", s.clause_title_it || ""].join("\u0001");
        if (seen.has(key)) continue;
        seen.add(key);
        let e = entries.get(key);
        if (!e) {
          const idx = catalog.indexOf(s);
          entries.set(key, (e = { s, count: 0, order: idx >= 0 ? idx : catalog.length + seq++ }));
        }
        e.count++;
      }
    }
    const groups = new Map();
    for (const e of entries.values()) {
      let g = groups.get(e.s.standard);
      if (!g) groups.set(e.s.standard, (g = { name: e.s.standard, items: [], rank: 99, order: Infinity }));
      g.items.push(e);
      g.rank = Math.min(g.rank, FAMILY_RANK[e.s.family] != null ? FAMILY_RANK[e.s.family] : 3);
      g.order = Math.min(g.order, e.order);
    }
    const sorted = [...groups.values()].sort((a, b) => a.rank - b.rank || a.order - b.order);
    for (const g of sorted) {
      g.items.sort((a, b) => String(a.s.clause || "").localeCompare(String(b.s.clause || ""), "it", { numeric: true }));
    }

    const cols = [
      { label: "Riferimento", w: 24 },
      { label: "Titolo", w: 60 },
      { label: "Domande collegate", w: 13 },
      { label: "Fonte", w: 62 },
    ];
    const HEAD = 3, FIRST = 4, last = cols.length - 1;
    const sh = wb.addSheet("Standard di riferimento", {
      cols: cols.map((c) => c.w), tabColor: PAL.link, freezeRows: FIRST, landscape: true, footer: ctx.footer,
    });
    sh.set(0, 0, "Standard di riferimento", ST.title).height(0, 32);
    sh.set(1, 0, `${plural(entries.size, "riferimento puntuale", "riferimenti puntuali")} a ${plural(groups.size, "norma o standard", "norme e standard")}, citati nelle domande del framework`, ST.subtitle).height(1, 18);
    sh.height(2, 10);
    let headLines = 1;
    cols.forEach((c, i) => {
      sh.set(HEAD, i, c.label, ST.head);
      headLines = Math.max(headLines, lineCount(c.label, c.w, 10, true));
    });
    sh.height(HEAD, heightFor(headLines, 10, 12));

    let r = FIRST;
    for (const g of sorted) {
      // When every clause of a standard points to the same source, show the link once on the band.
      const urls = new Set(g.items.map((e) => e.s.url || ""));
      const shared = urls.size === 1 ? [...urls][0] : "";
      const bandStyle = { ...ST.band, fill: PAL.blueTint };
      sh.set(r, 0, [
        { text: g.name, bold: true, size: 11, color: PAL.blue },
        { text: `   ·   ${plural(g.items.length, "riferimento", "riferimenti")}`, color: PAL.muted },
      ], bandStyle);
      if (shared) sh.set(r, last, shared, { ...bandStyle, color: PAL.link, underline: true }).link(r, last, shared);
      sh.fill(r, 1, last, bandStyle).height(r++, 26);
      for (const e of g.items) {
        const title = e.s.clause_title_it || "";
        sh.set(r, 0, e.s.clause || "", { ...ST.cell, bold: true });
        sh.set(r, 1, title, ST.cell);
        sh.set(r, 2, e.count, { ...ST.cell, h: "center" });
        if (!shared && e.s.url) sh.set(r, 3, e.s.url, ST.link).link(r, 3, e.s.url);
        else sh.set(r, 3, null, ST.cell);
        const lines = Math.max(lineCount(e.s.clause, cols[0].w, 10, true), lineCount(title, cols[1].w));
        sh.height(r++, Math.max(20, heightFor(lines)));
      }
    }
    sh.opts.autoFilter = [HEAD, 0, Math.max(r - 1, FIRST), last];
    sh.opts.printTitles = [HEAD, HEAD];
  }

  // Build the workbook for the active framework → Promise<{ blob, fileName }>.
  function buildFrameworkXLSX() {
    const ctx = buildContext();
    const wb = createWorkbook();
    buildIntroSheet(wb, ctx);
    for (const j of JOURNEYS) buildJourneySheet(wb, ctx, j);
    buildStandardsSheet(wb, ctx);
    const fileName = `framework-accessibilita_${fileSlug(ctx.fwName) || "framework"}_v${fileSlug(ctx.version) || "1"}.xlsx`;
    return wb.toBlob({ title: ctx.fwName }).then((blob) => ({ blob, fileName }));
  }

  function exportFrameworkXLSX() {
    return buildFrameworkXLSX().then(({ blob, fileName }) => {
      /** @type {any} */ (window).AppShared.downloadBlob(fileName, blob, XLSX_MIME);
    });
  }

  /** @type {any} */ (window).XlsxExport = { exportFrameworkXLSX, buildFrameworkXLSX };
})();
