// report.jsx — Vista "Report di sintesi accessibilità".
// Sintesi read-only sul framework compilato per le due journey (Conto corrente + Mutuo).
// Pensata come report orientato alle decisioni progettuali: evidenzia l'indice di
// accessibilità, l'utenza più impattata, i touchpoint più critici, le aree di
// intervento prioritarie (ordinate per numero di KO critici) e le evidenze rilevanti.
//
// Indice di accessibilità (formula concordata col cliente):
//   (criteri conformi + criteri non applicabili) * 100 / totale criteri
// I N/A sono conteggiati come "non barriera" (e mostrati comunque a parte per trasparenza).
// Le aree di intervento sono ordinate per numero di KO critici (poi per barriere parziali).

const RDB = window.AUDIT_DATA;
const { Icon: RI, IC: RIC, STATUS_KEY: RSK, Pill: RPill } = window.AppShared;

// ----- helpers -----
// Numero in stile italiano: 1 decimale, virgola, niente ".0" superfluo.
function fmtPct(n) {
  if (n == null) return "—";
  const r = Math.round(n * 10) / 10;
  return (Number.isInteger(r) ? String(r) : String(r).replace(".", ",")) + "%";
}

// Riassume una lista di domande rispetto allo stato corrente.
function summarize(qs, states) {
  const c = { full: 0, part: 0, ko: 0, rev: 0, na: 0, todo: 0, total: qs.length };
  for (const q of qs) c[RSK(states[q.id]?.conformity)]++;
  c.applicable = c.full + c.part + c.ko;          // N/A escluso dagli "applicabili"
  // Indice = (conformi + non applicabili) / totale criteri.
  c.index = c.total ? ((c.full + c.na) / c.total) * 100 : null;
  return c;
}

// Soglie cromatiche dell'indice (a11y): basso → critico, medio → attenzione, alto → ok.
function indexTone(idx) {
  if (idx == null) return "muted";
  if (idx < 40) return "bad";
  if (idx < 70) return "warn";
  return "good";
}
const TONE_COLOR = {
  bad: "var(--destructive)",
  warn: "var(--warning)",
  good: "var(--success)",
  muted: "var(--muted-foreground)",
};

// Titolo breve derivato dalla hint di remediation (prima clausola, fino a virgola/;).
function themeTitle(hint) {
  if (!hint) return "Intervento";
  const first = hint.split(/[,;]/)[0].trim();
  return first.length > 64 ? first.slice(0, 62).trim() + "…" : first;
}

// Barra di composizione conformità (riuso del pattern .bar-stack globale).
function CompBar({ c, height = 8 }) {
  const t = c.total || 1;
  return (
    <div className="bar-stack" style={{ height }}>
      <span style={{ width: `${(c.full / t) * 100}%`, background: "var(--success)" }} />
      <span style={{ width: `${(c.part / t) * 100}%`, background: "var(--warning)" }} />
      <span style={{ width: `${(c.ko / t) * 100}%`, background: "var(--destructive)" }} />
      <span style={{ width: `${(c.rev / t) * 100}%`, background: "var(--info)" }} />
      <span style={{ width: `${(c.na / t) * 100}%`, background: "var(--muted-foreground)" }} />
      <span style={{ width: `${(c.todo / t) * 100}%`, background: "var(--border)" }} />
    </div>
  );
}

// Gauge a semicerchio per l'indice di accessibilità (SVG, nessuna dipendenza).
function Gauge({ pct, size = 200, label }) {
  const tone = indexTone(pct);
  const color = TONE_COLOR[tone];
  const R = 80, CX = 100, CY = 100, SW = 16;
  const d = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`;
  const len = Math.PI * R;
  const fill = pct == null ? 0 : (Math.max(0, Math.min(100, pct)) / 100) * len;
  const h = Math.round(size * 0.62);
  return (
    <svg width={size} height={h} viewBox="0 0 200 124" role="img"
      aria-label={`Indice di accessibilità ${label || ""}: ${fmtPct(pct)}`}>
      <path d={d} fill="none" stroke="var(--muted)" strokeWidth={SW} strokeLinecap="round" />
      <path d={d} fill="none" stroke={color} strokeWidth={SW} strokeLinecap="round"
        strokeDasharray={`${fill.toFixed(2)} ${(len - fill + 1).toFixed(2)}`} />
      <text x={CX} y={CY - 6} textAnchor="middle"
        style={{ fontSize: 34, fontWeight: 700, fill: color, fontVariantNumeric: "tabular-nums" }}>
        {fmtPct(pct)}
      </text>
      <text x={CX} y={CY + 14} textAnchor="middle"
        style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", fill: "var(--muted-foreground)" }}>
        ACCESSIBILITÀ
      </text>
    </svg>
  );
}

function ChannelBadge({ tp }) {
  const ch = RDB.TOUCHPOINT_CHANNEL[tp];
  if (!ch) return null;
  return <span className={"rep-chan rep-chan-" + ch}>{RDB.CHANNEL_LABEL[ch] || ch}</span>;
}

function ReportView({ states, project }) {
  const all = RDB.QUESTIONS;

  const data = React.useMemo(() => {
    const overall = summarize(all, states);
    const cc = summarize(all.filter(q => q.journey === "current_account"), states);
    const mu = summarize(all.filter(q => q.journey === "mortgage"), states);

    // Utenza impattata — ordinata per numero di KO critici (poi indice crescente).
    const CATS = ["cognitive", "visual", "elderly_temporary_situational", "motor", "auditory"];
    const byCat = CATS.map(cat => {
      const qs = all.filter(q => (q.affected_user_categories || []).includes(cat));
      return { cat, ...summarize(qs, states) };
    }).sort((a, b) => b.ko - a.ko || a.index - b.index);

    // Touchpoint — ordinati per KO (poi barriere parziali).
    const tpMap = {};
    for (const q of all) (tpMap[q.touchpoint] ||= []).push(q);
    const byTp = Object.entries(tpMap).map(([tp, qs]) => ({
      tp, channel: RDB.TOUCHPOINT_CHANNEL[tp], ...summarize(qs, states),
    })).sort((a, b) => b.ko - a.ko || b.part - a.part);

    // POUR — ordinato per KO (poi indice crescente).
    const POUR = ["perceivable", "operable", "understandable", "robust"];
    const byPour = POUR.map(pour => {
      const qs = all.filter(q => q.pour_principle === pour);
      return { pour, ...summarize(qs, states) };
    }).sort((a, b) => b.ko - a.ko || a.index - b.index);

    // Aree di intervento — cluster delle non-conformi per hint di remediation,
    // ordinate per numero di KO critici (poi parziali).
    const themeMap = {};
    for (const q of all) {
      const k = RSK(states[q.id]?.conformity);
      if (k !== "ko" && k !== "part") continue;
      const hint = (q.remediation_hint_it || "").trim() || "—";
      const t = (themeMap[hint] ||= { hint, ko: 0, part: 0, tps: {}, cats: {}, journeys: {} });
      if (k === "ko") t.ko++; else t.part++;
      t.tps[q.touchpoint] = (t.tps[q.touchpoint] || 0) + 1;
      for (const c of (q.affected_user_categories || [])) t.cats[c] = (t.cats[c] || 0) + 1;
      t.journeys[q.journey] = true;
    }
    const themes = Object.values(themeMap)
      .map(t => ({
        ...t,
        topTps: Object.entries(t.tps).sort((a, b) => b[1] - a[1]).map(e => e[0]),
        topCats: Object.entries(t.cats).sort((a, b) => b[1] - a[1]).map(e => e[0]),
      }))
      .sort((a, b) => b.ko - a.ko || b.part - a.part);

    // Evidenze rilevanti — note dell'auditor, ordinate per gravità.
    const sevOrder = { ko: 0, part: 1, rev: 2, full: 3, na: 4, todo: 5 };
    const evidence = all
      .map(q => ({ q, note: (states[q.id]?.note || "").trim(), k: RSK(states[q.id]?.conformity) }))
      .filter(e => e.note)
      .sort((a, b) => sevOrder[a.k] - sevOrder[b.k]);

    return { overall, cc, mu, byCat, byTp, byPour, themes, evidence };
  }, [states]);

  const { overall, cc, mu, byCat, byTp, byPour, themes, evidence } = data;
  const totalKo = overall.ko;
  const answered = overall.full + overall.part + overall.ko + overall.na;

  // Stato vuoto: nessun criterio valutato (audit non importato / non compilato).
  if (answered === 0) {
    return (
      <div className="report">
        <div className="rep-empty">
          <RI d={RIC.report} size={40} />
          <h2>Nessun dato da sintetizzare</h2>
          <p>Importa un audit (JSON) o compila il framework per generare il report di sintesi
            sulle due journey.</p>
        </div>
      </div>
    );
  }

  const worstCat = byCat[0];
  const worstTp = byTp[0];
  const worstPour = byPour[0];
  const topTheme = themes[0];

  // Touchpoint con almeno una criticità (KO o parziale), per la tabella di dettaglio.
  const tpRanked = byTp;
  const maxTpIssues = Math.max(1, ...byTp.map(r => r.ko * 3 + r.part));
  const maxCatIssues = Math.max(1, ...byCat.map(r => r.ko * 3 + r.part));
  const maxThemeKo = Math.max(1, ...themes.map(t => t.ko));

  return (
    <div className="report">
      {/* ---------- Masthead ---------- */}
      <header className="rep-masthead">
        <div className="rep-mast-bar" />
        <div className="rep-mast-body">
          <div className="rep-eyebrow">Report di sintesi · Accessibilità</div>
          <h1>{project?.client || "Audit accessibilità"}</h1>
          <div className="rep-mast-meta">
            <span><RI d={RIC.bank} size={13} /> {project?.scope || "Conto corrente + Mutuo prima casa"}</span>
            {project?.visit_date && <span><RI d={RIC.cal} size={13} /> Visita del {project.visit_date}</span>}
            {project?.auditor && <span><RI d={RIC.user} size={13} /> {project.auditor}</span>}
            <span><RI d={RIC.doc} size={13} /> Framework v{RDB.AUDIT_META.framework_version} · {overall.total} criteri</span>
          </div>
        </div>
      </header>

      {/* ---------- Sintesi esecutiva ---------- */}
      <section className="rep-section rep-exec">
        <div className="rep-sec-h"><span className="rep-sec-k">01</span> Sintesi esecutiva</div>
        <ul className="rep-takeaways">
          <li>
            <span className="rep-tk-ico" data-tone={indexTone(overall.index)}><RI d={RIC.dash} size={15} /></span>
            <span>Indice di accessibilità complessivo <strong>{fmtPct(overall.index)}</strong> sui due journey
              — <strong>{overall.full}</strong> criteri pienamente conformi, <strong>{overall.part}</strong> barriere
              parziali e <strong className="rep-ko">{overall.ko}</strong> KO critici su {overall.total} criteri
              ({overall.na} non applicabili).</span>
          </li>
          <li>
            <span className="rep-tk-ico" data-tone="bad"><RI d={RIC.user} size={15} /></span>
            <span>Utenza più impattata: <strong>{RDB.USER_CAT_LABEL[worstCat.cat]}</strong> con
              <strong className="rep-ko"> {worstCat.ko} KO critici</strong> e {worstCat.part} barriere parziali
              (indice {fmtPct(worstCat.index)}).</span>
          </li>
          <li>
            <span className="rep-tk-ico" data-tone="bad"><RI d={RIC.grid} size={15} /></span>
            <span>Touchpoint più critico: <strong>{RDB.TOUCHPOINT_LABELS[worstTp.tp]}</strong> con
              <strong className="rep-ko"> {worstTp.ko} KO critici</strong> su {worstTp.total} criteri
              (indice {fmtPct(worstTp.index)}).</span>
          </li>
          <li>
            <span className="rep-tk-ico" data-tone="warn"><RI d={RIC.warn} size={15} /></span>
            <span>Principio POUR più debole: <strong>{RDB.POUR_LABEL[worstPour.pour]}</strong> — {worstPour.ko} KO
              critici e indice {fmtPct(worstPour.index)}.</span>
          </li>
          {topTheme && (
            <li>
              <span className="rep-tk-ico" data-tone="bad"><RI d={RIC.flag} size={15} /></span>
              <span>Priorità di remediation #1: <strong>«{themeTitle(topTheme.hint)}»</strong> concentra
                <strong className="rep-ko"> {topTheme.ko} dei {totalKo} KO critici</strong> rilevati.</span>
            </li>
          )}
        </ul>
      </section>

      {/* ---------- Indice di accessibilità ---------- */}
      <section className="rep-section">
        <div className="rep-sec-h"><span className="rep-sec-k">02</span> Indice di accessibilità</div>
        <div className="rep-index">
          <div className="rep-gauge-main">
            <Gauge pct={overall.index} size={220} />
            <div className="rep-gauge-sub">
              su {overall.total} criteri · {answered} valutati
              {overall.todo > 0 && <span className="rep-warn-inline"> · {overall.todo} non compilati</span>}
            </div>
          </div>

          <div className="rep-index-right">
            <div className="rep-formula">
              <span className="rep-formula-lbl">Formula</span>
              (criteri conformi + non applicabili) × 100 / totale criteri
              <span className="rep-formula-calc">
                ({overall.full} + {overall.na}) × 100 / {overall.total} = <strong>{fmtPct(overall.index)}</strong>
              </span>
            </div>

            <div className="rep-stat-grid">
              <div className="rep-stat" data-tone="good">
                <div className="rep-stat-n">{overall.full}</div>
                <div className="rep-stat-l">Piena aderenza</div>
              </div>
              <div className="rep-stat" data-tone="warn">
                <div className="rep-stat-n">{overall.part}</div>
                <div className="rep-stat-l">Barriere parziali</div>
              </div>
              <div className="rep-stat" data-tone="bad">
                <div className="rep-stat-n">{overall.ko}</div>
                <div className="rep-stat-l">KO critici</div>
              </div>
              <div className="rep-stat" data-tone="muted">
                <div className="rep-stat-n">{overall.na}</div>
                <div className="rep-stat-l">Non applicabili</div>
              </div>
            </div>

            <CompBar c={overall} height={10} />
            <div className="legend-row" style={{ marginTop: 8 }}>
              <span><span className="sw" style={{ background: "var(--success)" }} />Conformi</span>
              <span><span className="sw" style={{ background: "var(--warning)" }} />Parziali</span>
              <span><span className="sw" style={{ background: "var(--destructive)" }} />KO</span>
              <span><span className="sw" style={{ background: "var(--muted-foreground)" }} />N/A</span>
            </div>
          </div>
        </div>

        {/* Confronto fra le due journey */}
        <div className="rep-journeys">
          <JourneyCard label="Conto corrente" code="CC" c={cc} accent="var(--chart-1)" />
          <JourneyCard label="Mutuo prima casa" code="MU" c={mu} accent="var(--chart-2)" />
        </div>
      </section>

      {/* ---------- Utenza più impattata ---------- */}
      <section className="rep-section">
        <div className="rep-sec-h"><span className="rep-sec-k">03</span> Utenza maggiormente impattata</div>
        <p className="rep-sec-note">
          Categorie di utenti ordinate per numero di KO critici che le coinvolgono. Una stessa domanda
          può impattare più categorie. L'indice usa la stessa formula complessiva.
        </p>

        <div className="rep-callout" data-tone="bad">
          <div className="rep-callout-k">Utenza più impattata</div>
          <div className="rep-callout-title">{RDB.USER_CAT_LABEL[worstCat.cat]}</div>
          <div className="rep-callout-body">
            <strong className="rep-ko">{worstCat.ko} KO critici</strong> · {worstCat.part} barriere parziali ·
            indice di accessibilità <strong>{fmtPct(worstCat.index)}</strong> su {worstCat.total} criteri pertinenti.
          </div>
        </div>

        <div className="rep-rows">
          {byCat.map(r => (
            <div className="rep-row" key={r.cat}>
              <div className="rep-row-label">
                <span className="rep-row-name">{RDB.USER_CAT_LABEL[r.cat]}</span>
                <span className="rep-row-meta">
                  {r.total} criteri · <strong className="rep-ko">{r.ko} KO</strong> · {r.part} parziali
                </span>
              </div>
              <div className="rep-row-bars">
                <div className="rep-issuebar" title={`${r.ko} KO + ${r.part} parziali su ${r.total}`}>
                  <span className="ib-fill" style={{ width: `${((r.ko * 3 + r.part) / maxCatIssues) * 100}%` }}>
                    <span className="ib-ko" style={{ flex: r.ko }} />
                    <span className="ib-part" style={{ flex: r.part }} />
                  </span>
                </div>
                <CompBar c={r} height={6} />
              </div>
              <div className="rep-row-idx">
                <strong style={{ color: TONE_COLOR[indexTone(r.index)] }}>{fmtPct(r.index)}</strong>
                <span>indice</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Touchpoint più critici ---------- */}
      <section className="rep-section">
        <div className="rep-sec-h"><span className="rep-sec-k">04</span> Touchpoint con più criticità</div>
        <p className="rep-sec-note">
          Touchpoint ordinati per numero di KO critici (poi per barriere parziali). Il canale (Digitale /
          Fisico / Umano) segue l'ecosistema touchpoint BCC.
        </p>

        <div className="rep-callout" data-tone="bad">
          <div className="rep-callout-k">Touchpoint più critico</div>
          <div className="rep-callout-title">
            {RDB.TOUCHPOINT_LABELS[worstTp.tp]} <ChannelBadge tp={worstTp.tp} />
          </div>
          <div className="rep-callout-body">
            <strong className="rep-ko">{worstTp.ko} KO critici</strong> · {worstTp.part} barriere parziali ·
            solo {worstTp.full} criteri conformi su {worstTp.total} — indice <strong>{fmtPct(worstTp.index)}</strong>.
          </div>
        </div>

        <div className="rep-tptable">
          <div className="rep-tpt-head">
            <span>Touchpoint</span><span>Canale</span><span className="rep-tpt-num">KO</span>
            <span className="rep-tpt-num">Parz.</span><span className="rep-tpt-bar">Criticità</span>
            <span className="rep-tpt-num">Indice</span>
          </div>
          {tpRanked.map(r => (
            <div className={"rep-tpt-row" + (r.ko > 0 ? " is-ko" : "")} key={r.tp}>
              <span className="rep-tpt-name">{RDB.TOUCHPOINT_LABELS[r.tp]}</span>
              <span><ChannelBadge tp={r.tp} /></span>
              <span className={"rep-tpt-num" + (r.ko > 0 ? " rep-ko" : "")}><strong>{r.ko}</strong></span>
              <span className="rep-tpt-num">{r.part}</span>
              <span className="rep-tpt-bar">
                <span className="ib-fill" style={{ width: `${((r.ko * 3 + r.part) / maxTpIssues) * 100}%` }}>
                  <span className="ib-ko" style={{ flex: r.ko }} />
                  <span className="ib-part" style={{ flex: r.part }} />
                </span>
              </span>
              <span className="rep-tpt-num rep-tpt-idx">
                {r.applicable === 0
                  ? <span className="rep-na-tag" title="Tutti i criteri non applicabili">tutti N/A</span>
                  : <strong style={{ color: TONE_COLOR[indexTone(r.index)] }}>{fmtPct(r.index)}</strong>}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Aree di intervento prioritarie ---------- */}
      <section className="rep-section">
        <div className="rep-sec-h"><span className="rep-sec-k">05</span> Aree di intervento prioritarie</div>
        <p className="rep-sec-note">
          Le non-conformità (KO + parziali) sono raggruppate per intervento di remediation e ordinate per
          numero di KO critici. La prima area concentra la quota più alta di criticità bloccanti.
        </p>

        <div className="rep-themes">
          {themes.map((t, i) => {
            const isQuickWin = t.ko === 0 && t.part > 0;
            return (
              <div className={"rep-theme" + (i === 0 ? " is-top" : "")} key={t.hint}>
                <div className="rep-theme-rank">{i + 1}</div>
                <div className="rep-theme-body">
                  <div className="rep-theme-head">
                    <span className="rep-theme-title">{themeTitle(t.hint)}</span>
                    {i === 0 && <span className="rep-tag rep-tag-top">Priorità massima</span>}
                    {isQuickWin && <span className="rep-tag rep-tag-qw">⚡ quick win</span>}
                  </div>
                  <div className="rep-theme-metrics">
                    <span className="rep-chip rep-chip-ko"><strong>{t.ko}</strong> KO</span>
                    <span className="rep-chip rep-chip-part"><strong>{t.part}</strong> parziali</span>
                    <span className="rep-chip">{t.topTps.length} touchpoint</span>
                    <span className="rep-chip">{Object.keys(t.journeys).length === 2 ? "entrambe le journey" : (t.journeys.current_account ? "Conto corrente" : "Mutuo")}</span>
                  </div>
                  <div className="rep-theme-kobar" title={`${t.ko} KO critici`}>
                    <span style={{ width: `${(t.ko / maxThemeKo) * 100}%` }} />
                  </div>
                  <p className="rep-theme-hint">{t.hint}</p>
                  <div className="rep-theme-foot">
                    <span className="rep-theme-foot-lbl">Touchpoint:</span>
                    {t.topTps.slice(0, 6).map(tp => (
                      <span className="rep-mini-tp" key={tp}>{RDB.TOUCHPOINT_SHORT[tp] || tp}</span>
                    ))}
                    {t.topTps.length > 6 && <span className="rep-mini-more">+{t.topTps.length - 6}</span>}
                    <span className="rep-theme-foot-lbl" style={{ marginLeft: 8 }}>Utenti:</span>
                    {t.topCats.slice(0, 3).map(c => (
                      <span className="rep-mini-cat" key={c}>{RDB.USER_CAT_LABEL[c]}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- Direzione progettuale per principio POUR ---------- */}
      <section className="rep-section">
        <div className="rep-sec-h"><span className="rep-sec-k">06</span> Direzione progettuale per principio POUR</div>
        <p className="rep-sec-note">
          Distribuzione delle criticità sui quattro principi POUR. Indirizza dove concentrare le scelte
          di design e gli standard tecnici di riferimento.
        </p>
        <div className="rep-pour">
          {byPour.map((r, i) => (
            <div className={"rep-pour-card" + (i === 0 ? " is-weak" : "")} key={r.pour}>
              <div className="rep-pour-name">
                {RDB.POUR_LABEL[r.pour]}
                {i === 0 && <span className="rep-tag rep-tag-top">più debole</span>}
              </div>
              <div className="rep-pour-idx" style={{ color: TONE_COLOR[indexTone(r.index)] }}>{fmtPct(r.index)}</div>
              <div className="rep-pour-meta">
                <strong className="rep-ko">{r.ko} KO</strong> · {r.part} parziali · {r.total} criteri
              </div>
              <CompBar c={r} height={6} />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Evidenze rilevanti ---------- */}
      {evidence.length > 0 && (
        <section className="rep-section">
          <div className="rep-sec-h"><span className="rep-sec-k">07</span> Evidenze rilevanti</div>
          <p className="rep-sec-note">
            Note raccolte dall'auditor durante la visita, ordinate per gravità. Utili a contestualizzare i
            risultati e a orientare le scelte di progetto.
          </p>
          <div className="rep-evidence">
            {evidence.map(({ q, note, k }) => (
              <div className="rep-ev" key={q.id}>
                <RPill status={k}>{RDB.CONF_LEVELS[states[q.id]?.conformity]?.short || "—"}</RPill>
                <div className="rep-ev-body">
                  <div className="rep-ev-meta">
                    <span className="rep-ev-id">{q.id}</span>
                    <span className="rep-ev-tp">{RDB.TOUCHPOINT_LABELS[q.touchpoint]}</span>
                    <ChannelBadge tp={q.touchpoint} />
                  </div>
                  <div className="rep-ev-note">“{note}”</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Metodologia ---------- */}
      <footer className="rep-method">
        <div className="rep-method-h"><RI d={RIC.info} size={14} /> Nota metodologica</div>
        <ul>
          <li><strong>Indice di accessibilità</strong> = (criteri conformi + criteri non applicabili) × 100 / totale criteri.
            I criteri non applicabili sono conteggiati come "non barriera" e mostrati comunque a parte.</li>
          <li><strong>Aree di intervento e touchpoint</strong> sono ordinati per numero di KO critici (criticità bloccanti),
            poi per barriere parziali.</li>
          <li>Le barre "Criticità" pesano i KO critici 3× rispetto alle barriere parziali.</li>
          <li>Report generato dalle risposte dell'audit «{project?.client || "—"}» — framework v{RDB.AUDIT_META.framework_version}.</li>
        </ul>
      </footer>
    </div>
  );
}

// Scheda compatta per journey: gauge ridotto + composizione.
function JourneyCard({ label, code, c, accent }) {
  return (
    <div className="rep-jcard">
      <div className="rep-jcard-top">
        <span className="rep-jcard-code" style={{ background: accent }}>{code}</span>
        <span className="rep-jcard-label">{label}</span>
        <span className="rep-jcard-idx" style={{ color: TONE_COLOR[indexTone(c.index)] }}>{fmtPct(c.index)}</span>
      </div>
      <CompBar c={c} height={8} />
      <div className="rep-jcard-meta">
        <span><strong className="rep-ko">{c.ko}</strong> KO</span>
        <span>{c.part} parziali</span>
        <span>{c.full} conformi</span>
        <span>{c.na} N/A</span>
        <span className="rep-jcard-tot">{c.total} criteri</span>
      </div>
    </div>
  );
}

window.ReportView = ReportView;
