// Audit Accessibility — production app.
// Single-page tablet/desktop app over the real 276-question framework.

const { Icon, IC, STATUS_KEY, useAuditState, Pill, tally, exportCSV, exportJSON } = window.AppShared;
const DB = window.AUDIT_DATA;

const DEFAULT_PROJECT = {
  client: "",
  visit_date: new Date().toISOString().slice(0,10),
  auditor: "",
  scope: "Conto corrente + Mutuo prima casa",
};

function App() {
  const [view, setView] = React.useState("map"); // "map" | "list" | "question" | "dashboard"
  const [activeJourney, setActiveJourney] = React.useState("current_account");
  const [filterStep, setFilterStep] = React.useState(null);
  const [filterTp, setFilterTp] = React.useState(null);
  const [activeQid, setActiveQid] = React.useState(null);
  const [states, updateState, resetStates] = useAuditState(DB.SEED_STATES);

  // Project meta (persisted)
  const [project, setProject] = React.useState(() => ({
    ...DEFAULT_PROJECT, ...DB.persistence.loadMeta(),
  }));
  React.useEffect(() => {
    DB.persistence.saveMeta(project);
  }, [project]);

  // Filters
  const [search, setSearch] = React.useState("");
  const [fStatus, setFStatus] = React.useState("all");
  const [fPour, setFPour] = React.useState("all");
  const [fCat, setFCat] = React.useState("all");
  const [hotOnly, setHotOnly] = React.useState(false);

  // Project meta dialog
  const [showMeta, setShowMeta] = React.useState(!project.client);
  // Reset confirm
  const [showReset, setShowReset] = React.useState(false);

  const cellQuestions = React.useMemo(() => {
    return DB.QUESTIONS.filter(q =>
      q.journey === activeJourney &&
      (filterStep ? q.macro_step === filterStep : true) &&
      (filterTp ? q.touchpoint === filterTp : true)
    );
  }, [activeJourney, filterStep, filterTp]);

  const filteredList = React.useMemo(() => {
    const term = search.trim().toLowerCase();
    return cellQuestions.filter(q => {
      const s = states[q.id] || {};
      const k = STATUS_KEY(s.conformity);
      if (fStatus === "todo" && k !== "todo") return false;
      if (fStatus === "full" && k !== "full") return false;
      if (fStatus === "part" && k !== "part") return false;
      if (fStatus === "ko" && k !== "ko") return false;
      if (fStatus === "rev" && k !== "rev") return false;
      if (fStatus === "flagged" && !s.flag) return false;
      if (fPour !== "all" && q.pour_principle !== fPour) return false;
      if (fCat !== "all" && !q.affected_user_categories.includes(fCat)) return false;
      if (term) {
        const hay = (q.id + " " + q.question_it + " " + (DB.TOUCHPOINT_LABELS[q.touchpoint] || "") + " " + (q.tags || []).join(" ")).toLowerCase();
        if (!hay.includes(term)) return false;
      }
      return true;
    });
  }, [cellQuestions, states, search, fStatus, fPour, fCat]);

  const activeQ = activeQid ? DB.QUESTIONS.find(q => q.id === activeQid) : null;
  const navIdx = activeQ ? filteredList.findIndex(q => q.id === activeQ.id) : -1;

  // Keyboard nav: ←/→ inside question, Esc to back
  React.useEffect(() => {
    if (view !== "question") return;
    const onKey = (e) => {
      if (e.target && /input|textarea/i.test(e.target.tagName)) return;
      if (e.key === "ArrowLeft" && navIdx > 0) setActiveQid(filteredList[navIdx - 1].id);
      if (e.key === "ArrowRight" && navIdx < filteredList.length - 1) setActiveQid(filteredList[navIdx + 1].id);
      if (e.key === "Escape") setView("list");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, navIdx, filteredList]);

  const clearFilters = () => { setSearch(""); setFStatus("all"); setFPour("all"); setFCat("all"); };
  const clearMapFilter = () => { setFilterStep(null); setFilterTp(null); setView("map"); };

  const onExportCSV = () => exportCSV(DB.QUESTIONS, states, project);
  const onExportJSON = () => exportJSON(DB.QUESTIONS, states, project);
  const onImportJSON = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const j = JSON.parse(reader.result);
        const next = {};
        if (Array.isArray(j.results)) {
          for (const r of j.results) {
            if (!r.id) continue;
            next[r.id] = {
              conformity: r.conformity_assessment || null,
              note: r.evidence_notes_it || "",
              flag: !!r.follow_up,
            };
          }
          DB.persistence.saveStates(next);
          // rehydrate by reloading
          location.reload();
        } else {
          alert("File non valido (manca 'results').");
        }
      } catch (_) { alert("Impossibile leggere il JSON."); }
    };
    reader.readAsText(file);
  };

  return (
    <div className="app-shell">
      <Sidebar
        states={states}
        activeJourney={activeJourney}
        view={view}
        project={project}
        onSetView={(v) => { setView(v); if (v === "map") { setFilterStep(null); setFilterTp(null); } }}
        onSetJourney={(j) => { setActiveJourney(j); setFilterStep(null); setFilterTp(null); }}
        onEditMeta={() => setShowMeta(true)}
        onReset={() => setShowReset(true)}
      />
      <div className="main">
        <TopBar view={view} onSetView={setView}
          activeJourney={activeJourney} filterStep={filterStep} filterTp={filterTp}
          onClearFilter={clearMapFilter}
          activeQ={activeQ} search={search} setSearch={setSearch}
          onExportCSV={onExportCSV} onExportJSON={onExportJSON} onImportJSON={onImportJSON}
        />

        {view === "map" && (
          <MapView journey={activeJourney} states={states} hotOnly={hotOnly} setHotOnly={setHotOnly}
            onPickCell={(stepId, tpId) => { setFilterStep(stepId); setFilterTp(tpId); setView("list"); clearFilters(); }}
            onPickStep={(stepId) => { setFilterStep(stepId); setFilterTp(null); setView("list"); clearFilters(); }}
            onPickTp={(tpId) => { setFilterStep(null); setFilterTp(tpId); setView("list"); clearFilters(); }} />
        )}

        {view === "list" && (
          <QListView all={cellQuestions} questions={filteredList} states={states}
            journey={activeJourney}
            filterStep={filterStep} filterTp={filterTp}
            search={search} setSearch={setSearch}
            fStatus={fStatus} setFStatus={setFStatus}
            fPour={fPour} setFPour={setFPour}
            fCat={fCat} setFCat={setFCat}
            onClearFilters={clearFilters}
            onClearMapFilter={clearMapFilter}
            onOpen={(id) => { setActiveQid(id); setView("question"); }} />
        )}

        {view === "question" && activeQ && (
          <QuestionView q={activeQ} state={states[activeQ.id] || {}}
            onUpdate={(patch) => updateState(activeQ.id, patch)}
            navIdx={navIdx} navTotal={filteredList.length}
            onPrev={() => { if (navIdx > 0) setActiveQid(filteredList[navIdx - 1].id); }}
            onNext={() => { if (navIdx < filteredList.length - 1) setActiveQid(filteredList[navIdx + 1].id); }}
            onBack={() => setView("list")} />
        )}

        {view === "dashboard" && <window.DashboardView states={states} project={project} />}
      </div>

      {showMeta && <MetaDialog project={project} onSave={(p) => { setProject(p); setShowMeta(false); }} onClose={() => setShowMeta(false)} required={!project.client} />}
      {showReset && <ConfirmDialog title="Azzerare le risposte?" body="Verranno cancellate tutte le valutazioni, le note e i follow-up salvati su questo browser. L'azione non può essere annullata."
        confirmLabel="Azzera tutto" destructive
        onConfirm={() => { resetStates(); setShowReset(false); }} onCancel={() => setShowReset(false)} />}
    </div>
  );
}

// ---------- Sidebar ----------
function Sidebar({ states, activeJourney, view, project, onSetView, onSetJourney, onEditMeta, onReset }) {
  const t = tally(DB.QUESTIONS, states);
  const ccT = tally(DB.QUESTIONS.filter(q => q.journey === "current_account"), states);
  const muT = tally(DB.QUESTIONS.filter(q => q.journey === "mortgage"), states);
  const initials = (project.client || "—").split(/\s+/).slice(0,2).map(w => w[0]||"").join("").toUpperCase() || "—";

  return (
    <aside className="sidebar">
      <button className="sb-head" onClick={onEditMeta} title="Modifica dettagli progetto">
        <div className="sb-mark">{initials}</div>
        <div style={{flex:1, minWidth:0}}>
          <div className="sb-title">{project.client || "Imposta cliente"}</div>
          <div className="sb-sub">
            {project.visit_date}{project.auditor ? ` · ${project.auditor}` : ""}
          </div>
        </div>
        <Icon d={IC.more} size={14} />
      </button>

      <div className="sb-section">
        <div className="sb-label">Vista</div>
        <div className="sb-nav">
          <button className="sb-item" data-active={view === "map"} onClick={() => onSetView("map")}>
            <Icon d={IC.grid} /> Mappa touchpoint
          </button>
          <button className="sb-item" data-active={view === "list" || view === "question"} onClick={() => onSetView("list")}>
            <Icon d={IC.list} /> Lista domande
          </button>
          <button className="sb-item" data-active={view === "dashboard"} onClick={() => onSetView("dashboard")}>
            <Icon d={IC.dash} /> Dashboard
          </button>
        </div>
      </div>

      <div className="sb-section">
        <div className="sb-label">Journey</div>
        <div className="sb-nav">
          <button className="sb-item" data-active={activeJourney === "current_account"} onClick={() => onSetJourney("current_account")}>
            <Icon d={IC.bank} /> Conto corrente
            <span className="count">{ccT.completed}/{ccT.total}</span>
          </button>
          <button className="sb-item" data-active={activeJourney === "mortgage"} onClick={() => onSetJourney("mortgage")}>
            <Icon d={IC.bank} /> Mutuo prima casa
            <span className="count">{muT.completed}/{muT.total}</span>
          </button>
        </div>
      </div>

      <div className="sb-section" style={{ marginTop: "auto" }}>
        <div className="sb-label">Avanzamento totale</div>
        <div style={{ padding: "0 6px 8px" }}>
          <div style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{t.pct}%</div>
          <div style={{ fontSize: 11, color: "var(--muted-foreground)", marginBottom: 8 }}>{t.completed} di {t.total}</div>
          <div className="bar-stack">
            <span style={{ width: `${(t.full/t.total)*100}%`, background: "var(--success)" }} />
            <span style={{ width: `${(t.part/t.total)*100}%`, background: "var(--warning)" }} />
            <span style={{ width: `${(t.ko/t.total)*100}%`, background: "var(--destructive)" }} />
            <span style={{ width: `${(t.rev/t.total)*100}%`, background: "var(--info)" }} />
            <span style={{ width: `${(t.na/t.total)*100}%`, background: "var(--muted-foreground)" }} />
          </div>
        </div>
        <button className="sb-item sb-foot-action" onClick={onReset}>
          <Icon d={IC.trash} size={14} /> Azzera risposte
        </button>
      </div>

      <div className="sb-foot">
        Framework v{DB.AUDIT_META.framework_version} · {DB.QUESTIONS.length} domande
      </div>
    </aside>
  );
}

// ---------- Top bar ----------
function TopBar({ view, activeJourney, filterStep, filterTp, onClearFilter, activeQ, search, setSearch, onExportCSV, onExportJSON, onImportJSON }) {
  const journeyName = activeJourney === "current_account" ? "Conto corrente" : "Mutuo";
  const stepName = filterStep ? DB.MACRO_STEPS[activeJourney].find(s => s.id === filterStep)?.name : null;
  const tpName = filterTp ? DB.TOUCHPOINT_LABELS[filterTp] : null;
  const fileRef = React.useRef(null);
  const [exportOpen, setExportOpen] = React.useState(false);
  React.useEffect(() => {
    if (!exportOpen) return;
    const close = () => setExportOpen(false);
    setTimeout(() => window.addEventListener("click", close, { once: true }), 0);
    return () => window.removeEventListener("click", close);
  }, [exportOpen]);

  return (
    <div className="topbar">
      <div className="crumb">
        <span>{journeyName}</span>
        {view === "map" && <><Icon d={IC.chevR} size={12}/><strong>Mappa touchpoint</strong></>}
        {view === "list" && <>
          <Icon d={IC.chevR} size={12}/>
          <strong>{stepName || "Tutti i macro-step"}{tpName ? ` · ${tpName}` : ""}</strong>
        </>}
        {view === "question" && activeQ && <>
          <Icon d={IC.chevR} size={12}/>
          <strong>{activeQ.id}</strong>
        </>}
        {view === "dashboard" && <><Icon d={IC.chevR} size={12}/><strong>Dashboard</strong></>}
      </div>
      <div className="spacer" />
      {(filterStep || filterTp) && view === "list" && (
        <button className="btn" data-variant="ghost" onClick={onClearFilter}>
          <Icon d={IC.x} size={12} /> Rimuovi filtro mappa
        </button>
      )}
      <div className="menu-wrap" onClick={(e) => e.stopPropagation()}>
        <button className="btn" data-variant="primary" onClick={() => setExportOpen(v => !v)}>
          <Icon d={IC.download} /> Esporta
          <Icon d={IC.chevD} size={12} />
        </button>
        {exportOpen && (
          <div className="menu">
            <button className="menu-item" onClick={() => { onExportCSV(); setExportOpen(false); }}>
              <Icon d={IC.doc} size={14} /> CSV (foglio di calcolo)
            </button>
            <button className="menu-item" onClick={() => { onExportJSON(); setExportOpen(false); }}>
              <Icon d={IC.save} size={14} /> JSON (backup audit)
            </button>
            <div className="menu-sep" />
            <button className="menu-item" onClick={() => { fileRef.current?.click(); setExportOpen(false); }}>
              <Icon d={IC.upload} size={14} /> Importa JSON…
            </button>
            <input ref={fileRef} type="file" accept="application/json" style={{display:"none"}}
              onChange={(e) => { const f = e.target.files?.[0]; if (f) onImportJSON(f); e.target.value = ""; }} />
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- Map view ----------
function MapView({ journey, states, hotOnly, setHotOnly, onPickCell, onPickStep, onPickTp }) {
  const steps = DB.MACRO_STEPS[journey];
  const tps = React.useMemo(() => {
    return [...new Set(DB.QUESTIONS.filter(q => q.journey === journey).map(q => q.touchpoint))];
  }, [journey]);

  const cellMap = React.useMemo(() => {
    const m = {};
    for (const tp of tps) {
      m[tp] = {};
      for (const s of steps) {
        const qs = DB.QUESTIONS.filter(q => q.journey === journey && q.touchpoint === tp && q.macro_step === s.id);
        m[tp][s.id] = { qs, t: tally(qs, states) };
      }
    }
    return m;
  }, [journey, states, tps, steps]);

  // Color cells red→amber→green by the share of "correct" (full conformity) answers.
  // Cells with zero responses stay neutral so users don't read them as alarming red.
  // KO presence is still emphasized via a red left edge accent.
  const cellPaint = (t) => {
    if (t.total === 0) return { bg: null, accent: null, ratio: null };
    if (t.completed === 0) return { bg: null, accent: t.ko > 0 ? "var(--destructive)" : null, ratio: null };
    const ratio = t.full / t.total;             // 0 = nothing right · 1 = all good
    const koWeight = t.ko / t.total;             // pure KOs darken further
    // Lightness 0.93 (light tint) → 0.84 (saturated). Chroma 0.06 → 0.14.
    const lightness = 0.94 - 0.10 * (koWeight + (1 - ratio)) / 2;
    const chroma = 0.05 + 0.10 * Math.max(koWeight, 1 - ratio, ratio);
    // Hue: 25 (red) at ratio=0 → 75 (amber) at 0.5 → 145 (green) at 1.
    const hue = 25 + 120 * ratio;
    const bg = `oklch(${lightness.toFixed(3)} ${chroma.toFixed(3)} ${hue.toFixed(1)})`;
    const accent = t.ko > 0 ? "var(--destructive)" : null;
    return { bg, accent, ratio };
  };

  const colTally = React.useMemo(() => {
    const m = {};
    for (const s of steps) {
      const qs = DB.QUESTIONS.filter(q => q.journey === journey && q.macro_step === s.id);
      m[s.id] = tally(qs, states);
    }
    return m;
  }, [journey, states, steps]);
  const rowTally = React.useMemo(() => {
    const m = {};
    for (const tp of tps) {
      const qs = DB.QUESTIONS.filter(q => q.journey === journey && q.touchpoint === tp);
      m[tp] = tally(qs, states);
    }
    return m;
  }, [journey, states, tps]);

  const visibleTps = hotOnly
    ? tps.filter(tp => steps.some(s => {
        const c = cellMap[tp][s.id];
        return c.qs.length > 0 && (c.t.ko > 0 || c.t.part > 0 || c.t.todo > 0);
      }))
    : tps;

  return (
    <div className="map-wrap">
      <div className="map-head" style={{display:"flex", alignItems:"center", gap: 12}}>
        <div>
          <h1>Mappa touchpoint × macro-step</h1>
          <span className="sub">
            {journey === "current_account" ? "Conto corrente" : "Mutuo prima casa"} · {DB.QUESTIONS.filter(q=>q.journey===journey).length} domande.
            Ogni cella è colorata in base alla quota di domande conformi: rosso = molte non conformi, verde = piena aderenza. Il bordo rosso evidenzia i KO critici.
          </span>
        </div>
        <div style={{ flex: 1 }} />
        <button className="btn" data-variant={hotOnly ? "primary" : undefined} onClick={() => setHotOnly(v => !v)}>
          <Icon d={IC.filter} size={14} /> {hotOnly ? "Mostra tutte le righe" : "Solo aree con problemi"}
        </button>
      </div>

      <div className="heatmap" style={{
        gridTemplateColumns: `200px repeat(${steps.length}, minmax(120px, 1fr))`,
      }}>
        <div className="hm-corner">Touchpoint ↓ / Macro-step →</div>
        {steps.map(s => {
          const t = colTally[s.id];
          return (
            <div key={s.id} className="hm-h" style={{ cursor: "pointer" }} onClick={() => onPickStep(s.id)} title={s.name}>
              <div style={{ fontFamily: "var(--font-family-mono)", fontSize: 9, opacity: 0.6 }}>{s.code}</div>
              <div>{s.short}</div>
              <div style={{ fontSize: 10, color: "var(--muted-foreground)", fontWeight: 500, marginTop: 2 }}>
                {t.total} dom{t.ko > 0 && <> · <span style={{color:"var(--destructive)", fontWeight:700}}>{t.ko} KO</span></>}
              </div>
            </div>
          );
        })}
        {visibleTps.map(tp => (
          <React.Fragment key={tp}>
            <div className="hm-row-h" style={{ cursor: "pointer" }} onClick={() => onPickTp(tp)}>
              <div>{DB.TOUCHPOINT_LABELS[tp]}</div>
              <div style={{ fontSize: 10, color: "var(--muted-foreground)", fontWeight: 500, marginTop: 2 }}>
                {rowTally[tp].total} dom
                {rowTally[tp].ko > 0 && <> · <span style={{color:"var(--destructive)", fontWeight:700}}>{rowTally[tp].ko} KO</span></>}
              </div>
            </div>
            {steps.map(s => {
              const cell = cellMap[tp][s.id];
              const na = cell.qs.length === 0;
              if (na) return <div key={s.id} className="hm-cell" data-na="true">·</div>;
              const t = cell.t;
              const paint = cellPaint(t);
              const pct = t.total > 0 ? Math.round((t.full / t.total) * 100) : null;
              return (
                <div key={s.id} className="hm-cell" onClick={() => onPickCell(s.id, tp)}
                  style={{
                    background: paint.bg || undefined,
                    boxShadow: paint.accent ? `inset 3px 0 0 ${paint.accent}` : undefined,
                    flexDirection: "column", alignItems:"flex-start", justifyContent:"center", gap: 2, padding: "8px 10px 10px"
                  }}
                  title={`${cell.qs.length} domande · ${t.full} OK · ${t.part} parziali · ${t.ko} KO · ${t.todo} da compilare`}>
                  <div style={{display:"flex", alignItems:"baseline", gap: 6, width:"100%"}}>
                    <span style={{ fontWeight: 700, fontSize: 14, fontVariantNumeric:"tabular-nums" }}>{cell.qs.length}</span>
                    {t.ko > 0 && <span style={{ color: "var(--destructive)", fontSize: 10, fontWeight: 700 }}>{t.ko} KO</span>}
                    {t.ko === 0 && t.part > 0 && <span style={{ color: "var(--warning-foreground, var(--warning))", fontSize: 10, fontWeight: 600 }}>{t.part}~</span>}
                    <span style={{ flex: 1 }} />
                    {pct != null && (
                      <span style={{ fontSize: 10, color: "var(--muted-foreground)", fontVariantNumeric:"tabular-nums", fontWeight: 600 }}>
                        {pct}%
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <div className="map-legend">
        <span style={{display:"inline-flex", alignItems:"center", gap:8}}>
          <span style={{fontSize:11, color:"var(--muted-foreground)", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:600}}>Conformità</span>
          <span className="hm-scale">
            <span style={{background:"oklch(0.88 0.12 25)"}} />
            <span style={{background:"oklch(0.90 0.10 55)"}} />
            <span style={{background:"oklch(0.92 0.09 85)"}} />
            <span style={{background:"oklch(0.92 0.10 115)"}} />
            <span style={{background:"oklch(0.90 0.13 145)"}} />
          </span>
          <span style={{fontSize:11, color:"var(--muted-foreground)"}}>0% → 100%</span>
        </span>
        <span><span className="lg-dot" style={{ background: "oklch(0.88 0.12 25)", boxShadow:"inset 3px 0 0 var(--destructive)" }} /> KO critico (bordo rosso)</span>
        <span><span className="lg-dot" style={{ background: "var(--muted)", border: "1px solid var(--border)" }} /> Da compilare / non applicabile</span>
        <span style={{ marginLeft: "auto", fontStyle: "italic" }}>
          Click su intestazione di colonna o riga per filtrare per intero macro-step / touchpoint.
        </span>
      </div>
    </div>
  );
}

// ---------- Filter chips ----------
function FilterChips({ label, value, onChange, options }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
      <span style={{ fontSize: 11, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginRight: 4 }}>{label}</span>
      {options.map(o => (
        <button key={o.value}
          onClick={() => onChange(o.value)}
          className="conf-pill"
          data-active={value === o.value}
          style={{ padding: "3px 9px", fontSize: 11 }}>
          {o.dot && <span className={"dot-sw " + o.dot}></span>}
          {o.label}
          {o.count != null && <span style={{ marginLeft: 4, color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>{o.count}</span>}
        </button>
      ))}
    </div>
  );
}

// ---------- List view ----------
function QListView({ all, questions, states, journey, filterStep, filterTp,
                    search, setSearch, fStatus, setFStatus, fPour, setFPour, fCat, setFCat, onClearFilters, onClearMapFilter, onOpen }) {
  const allTally = tally(all, states);

  const sCounts = React.useMemo(() => {
    const c = { all: all.length, todo: 0, full: 0, part: 0, ko: 0, rev: 0, na: 0, flagged: 0 };
    for (const q of all) {
      const s = states[q.id] || {};
      const k = STATUS_KEY(s.conformity);
      c[k] = (c[k] || 0) + 1;
      if (s.flag) c.flagged++;
    }
    return c;
  }, [all, states]);

  const stepLabel = filterStep ? DB.MACRO_STEPS[journey].find(s => s.id === filterStep)?.name : null;
  const tpLabel = filterTp ? DB.TOUCHPOINT_LABELS[filterTp] : null;
  const scopeLabel = stepLabel && tpLabel ? `${tpLabel} · ${stepLabel}`
                  : stepLabel || tpLabel || "Tutti i touchpoint";

  // Group by macro_step for readability
  const grouped = React.useMemo(() => {
    const m = new Map();
    for (const q of questions) {
      if (!m.has(q.macro_step)) m.set(q.macro_step, []);
      m.get(q.macro_step).push(q);
    }
    return m;
  }, [questions]);
  const stepOrder = DB.MACRO_STEPS[journey].map(s => s.id);

  return (
    <div className="map-wrap">
      <div className="map-head">
        <div>
          <h1>{questions.length}<span style={{ color: "var(--muted-foreground)", fontWeight: 400, fontSize: 16, marginLeft: 6 }}>/ {allTally.total} domande</span></h1>
          <span className="sub">{scopeLabel}</span>
        </div>
        <div style={{ flex: 1 }} />
        {(filterStep || filterTp) && (
          <button className="btn" data-variant="ghost" onClick={onClearMapFilter}>
            <Icon d={IC.x} size={12} /> Rimuovi filtro mappa
          </button>
        )}
      </div>

      <div className="filter-card">
        <div className="list-search">
          <Icon d={IC.search} size={14} />
          <input
            placeholder="Cerca nel testo delle domande, ID, touchpoint, tag…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="list-search-clear" onClick={() => setSearch("")} title="Cancella ricerca">
              <Icon d={IC.x} size={12} />
            </button>
          )}
        </div>
        <FilterChips label="Stato" value={fStatus} onChange={setFStatus} options={[
          { value: "all", label: "Tutti", count: sCounts.all },
          { value: "todo", label: "Da compilare", count: sCounts.todo },
          { value: "ko", label: "KO critici", dot: "ko", count: sCounts.ko },
          { value: "part", label: "Parziali", dot: "part", count: sCounts.part },
          { value: "full", label: "Piena aderenza", dot: "full", count: sCounts.full },
          { value: "rev", label: "Da rivedere", dot: "rev", count: sCounts.rev },
          { value: "flagged", label: "Follow-up", count: sCounts.flagged },
        ]} />
        <FilterChips label="POUR" value={fPour} onChange={setFPour} options={[
          { value: "all", label: "Tutti" },
          { value: "perceivable", label: "Percepibile" },
          { value: "operable", label: "Utilizzabile" },
          { value: "understandable", label: "Comprensibile" },
          { value: "robust", label: "Robusto" },
        ]} />
        <FilterChips label="Categoria utenti" value={fCat} onChange={setFCat} options={[
          { value: "all", label: "Tutte" },
          { value: "visual", label: "Visiva" },
          { value: "auditory", label: "Uditiva" },
          { value: "motor", label: "Motoria" },
          { value: "cognitive", label: "Cognitiva" },
          { value: "elderly_temporary_situational", label: "Anziani / temporanee" },
        ]} />
        {(fStatus !== "all" || fPour !== "all" || fCat !== "all" || search) && (
          <div>
            <button className="btn" data-variant="ghost" onClick={onClearFilters} style={{ padding: "0 8px", height: 26, fontSize: 11 }}>
              <Icon d={IC.x} size={12} /> Pulisci filtri
            </button>
          </div>
        )}
      </div>

      {questions.length === 0 ? (
        <div className="empty-state">
          Nessuna domanda corrisponde ai filtri attivi. Allarga la selezione o pulisci i filtri.
        </div>
      ) : (
        <div className="qlist">
          {stepOrder.filter(sid => grouped.has(sid)).map(sid => {
            const stepInfo = DB.MACRO_STEPS[journey].find(s => s.id === sid);
            const items = grouped.get(sid);
            return (
              <React.Fragment key={sid}>
                <div className="qlist-group-h">
                  <span className="step-code">{stepInfo.code}</span>
                  <span>{stepInfo.name}</span>
                  <span className="step-count">{items.length}</span>
                </div>
                {items.map(q => {
                  const s = states[q.id] || {};
                  return (
                    <div key={q.id} className="qrow" onClick={() => onOpen(q.id)}>
                      <div className="qrow-h">
                        <span className="q-id">{q.id}</span>
                        <Pill status={STATUS_KEY(s.conformity)}>
                          {s.conformity ? DB.CONF_LEVELS[s.conformity].label : "Da compilare"}
                        </Pill>
                        {s.flag && <Pill status="rev"><Icon d={IC.flag} size={11}/> Follow-up</Pill>}
                        <span style={{ flex: 1 }} />
                        <span className="facet">{DB.TOUCHPOINT_SHORT[q.touchpoint] || q.touchpoint}</span>
                        <span className="facet">{DB.POUR_LABEL[q.pour_principle]}</span>
                      </div>
                      <div className="qrow-text">{q.question_it}</div>
                      {s.note && <div className="qrow-note">↳ {s.note}</div>}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------- Question view ----------
function QuestionView({ q, state, onUpdate, navIdx, navTotal, onPrev, onNext, onBack }) {
  const conf = state.conformity;
  const isFlag = !!state.flag;
  const isReview = conf === "to_review";
  const isNA = conf === "not_applicable";

  return (
    <div className="qview">
      <div className="q-main">
        <button className="btn" data-variant="ghost" onClick={onBack} style={{ marginBottom: 16 }}>
          <Icon d={IC.back} size={14} /> Torna alla lista
        </button>
        <div className="q-meta">
          <span className="q-id">{q.id}</span>
          <Pill status={STATUS_KEY(conf)}>{conf ? DB.CONF_LEVELS[conf].label : "Da compilare"}</Pill>
          {isFlag && <Pill status="rev"><Icon d={IC.flag} size={11}/> Follow-up</Pill>}
          <span style={{ flex: 1 }} />
          <span className="q-pos">{navIdx + 1} / {navTotal}</span>
        </div>
        <h1 className="q-title">{q.question_it}</h1>
        {q.rationale_it && <div className="q-rationale">{q.rationale_it}</div>}

        <div className="conf-section">
          <div className="section-h">Livello di conformità</div>
          <div className="conf-grid">
            {["full_compliance", "partial_barrier", "critical_ko"].map(lvl => (
              <button key={lvl} className="conf-card"
                data-level={lvl} data-active={conf === lvl}
                onClick={() => onUpdate({ conformity: conf === lvl ? null : lvl })}>
                <div className="conf-head">
                  <span className={"dot-sw " + STATUS_KEY(lvl)}></span>
                  <span className="conf-name">{DB.CONF_LEVELS[lvl].label}</span>
                </div>
                <div className="conf-crit">{q.conformity_criteria[lvl]}</div>
              </button>
            ))}
          </div>
          <div className="conf-row-extra">
            <button className="conf-pill" data-active={isReview}
              onClick={() => onUpdate({ conformity: isReview ? null : "to_review" })}>
              <span className="dot-sw rev"></span> Da rivedere
            </button>
            <button className="conf-pill" data-active={isNA}
              onClick={() => onUpdate({ conformity: isNA ? null : "not_applicable" })}>
              <span className="dot-sw na"></span> Non applicabile
            </button>
            <button className="conf-pill" data-active={isFlag}
              onClick={() => onUpdate({ flag: !isFlag })}>
              <Icon d={IC.flag} size={11}/> Follow-up con cliente
            </button>
          </div>
        </div>

        <div className="notes-wrap">
          <div className="section-h">Note di evidenza</div>
          <textarea className="notes" placeholder="Annota osservazione, pagina/schermata, riferimenti…"
            value={state.note || ""} onChange={(e) => onUpdate({ note: e.target.value })} />
        </div>

        {q.remediation_hint_it && (
          <div className="rem-hint">
            <div className="section-h">Suggerimento di remediation</div>
            <div className="rem-hint-body">{q.remediation_hint_it}</div>
          </div>
        )}
      </div>

      <aside className="q-side">
        <div className="side-block">
          <h4>Contesto</h4>
          <div className="facet-row">
            <span className="facet">{DB.TOUCHPOINT_LABELS[q.touchpoint]}</span>
            <span className="facet">{DB.POUR_LABEL[q.pour_principle]}</span>
          </div>
        </div>
        <div className="side-block">
          <h4>Categorie utenti impattate</h4>
          <div className="facet-row">
            {q.affected_user_categories.map(c => <span key={c} className="facet">{DB.USER_CAT_LABEL[c]}</span>)}
          </div>
        </div>
        <div className="side-block">
          <h4>Standard di riferimento</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {q.standards.map((s, i) => (
              <div key={i} className="std-row">
                <div className="std-name">{s.standard}</div>
                <div className="std-clause">{s.clause}{s.clause_title_it ? ` — ${s.clause_title_it}` : ""}</div>
                {s.url && <a href={s.url} className="std-url" target="_blank" rel="noopener noreferrer">
                  <Icon d={IC.link} size={11} /> Riferimento
                </a>}
              </div>
            ))}
          </div>
        </div>
        {q.tags && q.tags.length > 0 && (
          <div className="side-block">
            <h4>Tag</h4>
            <div className="tag-row">
              {q.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        )}
      </aside>

      <div className="q-footer" style={{ gridColumn: "1 / -1" }}>
        <span className="meta">Salvataggio automatico nel browser</span>
        <button className="btn" onClick={onPrev} disabled={navIdx <= 0}>
          <Icon d={IC.chevL} /> Precedente
        </button>
        <button className="btn" data-variant="primary" onClick={onNext} disabled={navIdx >= navTotal - 1}>
          Successiva <Icon d={IC.chevR} />
        </button>
      </div>
    </div>
  );
}

// ---------- Project meta dialog ----------
function MetaDialog({ project, onSave, onClose, required }) {
  const [draft, setDraft] = React.useState({ ...project });
  const valid = !!draft.client?.trim();
  return (
    <div className="modal-backdrop" onClick={(e) => { if (!required && e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-head">
          <h2>Dettagli del progetto</h2>
          <span style={{flex:1}}/>
          {!required && <button className="btn" data-variant="ghost" onClick={onClose}><Icon d={IC.x} size={14}/></button>}
        </div>
        <div className="modal-body">
          <label className="field">
            <span>Cliente</span>
            <input value={draft.client} onChange={(e) => setDraft({...draft, client: e.target.value})}
              placeholder="Es. Banca Aurora Romagna" autoFocus />
          </label>
          <label className="field">
            <span>Data visita</span>
            <input type="date" value={draft.visit_date}
              onChange={(e) => setDraft({...draft, visit_date: e.target.value})} />
          </label>
          <label className="field">
            <span>Auditor</span>
            <input value={draft.auditor} onChange={(e) => setDraft({...draft, auditor: e.target.value})}
              placeholder="Nome del responsabile audit" />
          </label>
          <label className="field">
            <span>Scope</span>
            <input value={draft.scope} onChange={(e) => setDraft({...draft, scope: e.target.value})} />
          </label>
        </div>
        <div className="modal-foot">
          {!required && <button className="btn" data-variant="ghost" onClick={onClose}>Annulla</button>}
          <button className="btn" data-variant="primary" disabled={!valid} onClick={() => onSave(draft)}>
            Salva
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Confirm dialog ----------
function ConfirmDialog({ title, body, confirmLabel, destructive, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}>
      <div className="modal" style={{maxWidth: 420}}>
        <div className="modal-head"><h2>{title}</h2></div>
        <div className="modal-body" style={{fontSize:13, lineHeight:1.55, color:"var(--muted-foreground)"}}>{body}</div>
        <div className="modal-foot">
          <button className="btn" onClick={onCancel}>Annulla</button>
          <button className="btn" data-variant={destructive ? "danger" : "primary"} onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

window.AuditApp = App;
