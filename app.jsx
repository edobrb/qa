// Audit Accessibility — production app.
// Single-page tablet/desktop app over the real 276-question framework.

const { Icon, IC, STATUS_KEY, useAuditState, Pill, tally, exportCSV, exportJSON } = window.AppShared;
const DB = window.AUDIT_DATA;

const DEFAULT_PROJECT = {
  client: "",
  visit_date: new Date().toISOString().slice(0,10),
  auditor: "",
  scope: "Conto corrente + Mutuo prima casa",
  framework_id: DB.FRAMEWORK_ID,
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
  // Framework editor dialog
  const [editingQ, setEditingQ] = React.useState(null); // { question, isNew, prefill }
  const [removingQ, setRemovingQ] = React.useState(null);
  const [showFwReset, setShowFwReset] = React.useState(false);
  const [showFwExport, setShowFwExport] = React.useState(false);
  const [pendingFwImport, setPendingFwImport] = React.useState(null); // candidate framework JSON

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

  // ----- Framework editing -----
  const commitFramework = (mutator) => {
    const next = JSON.parse(JSON.stringify(DB.FRAMEWORK));
    mutator(next);
    next.statistics = recomputeStatistics(next);
    DB.persistence.saveFramework(next.metadata.id, next);
    location.reload();
  };
  const onSaveQuestion = (saved, isNew) => {
    commitFramework((F) => {
      const list = F.journeys[saved.journey].questions;
      if (isNew) {
        list.push(saved);
      } else {
        const idx = list.findIndex(x => x.id === saved.id);
        if (idx >= 0) list[idx] = saved;
        else list.push(saved);
        // If the journey changed during edit, drop the old entry from the other side.
        const otherJ = saved.journey === "current_account" ? "mortgage" : "current_account";
        F.journeys[otherJ].questions = F.journeys[otherJ].questions.filter(x => x.id !== saved.id);
      }
    });
  };
  const onConfirmRemoveQuestion = () => {
    const q = removingQ;
    if (!q) return;
    commitFramework((F) => {
      F.journeys[q.journey].questions = F.journeys[q.journey].questions.filter(x => x.id !== q.id);
    });
  };
  const onExportFramework = () => setShowFwExport(true);
  const doExportFramework = ({ id, name_it, version, date }) => {
    const F = JSON.parse(JSON.stringify(DB.FRAMEWORK));
    F.metadata = {
      ...F.metadata,
      id,
      name_it,
      version,
      date,
    };
    const fileSlug = `${slugify(name_it)}_v${slugify(version)}`;
    window.AppShared.downloadBlob(
      `audit-a11y-framework_${fileSlug}_${date}.json`,
      JSON.stringify(F, null, 2),
      "application/json",
    );
    // Promote: also persist the new metadata as the active framework, so future
    // audit JSON exports stamp the matching framework_version and re-importing
    // framework + audit lines up without a version mismatch.
    const ok = DB.persistence.saveFramework(id, F);
    if (!ok) {
      alert("Framework esportato, ma impossibile aggiornare la copia attiva (storage pieno).");
      setShowFwExport(false);
      return;
    }
    const meta = DB.persistence.loadMeta();
    DB.persistence.saveMeta({ ...meta, framework_id: id });
    setShowFwExport(false);
    // Reload so DB.AUDIT_META and the rest of the app pick up the new metadata.
    location.reload();
  };
  const onImportFramework = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      let j;
      try {
        j = JSON.parse(reader.result);
      } catch (e) {
        alert("File non valido: JSON malformato.\n\n" + (e?.message || ""));
        return;
      }
      const missing = [];
      if (!j?.metadata?.id) missing.push("metadata.id");
      if (!j?.journeys?.current_account?.questions || !Array.isArray(j.journeys.current_account.questions)) missing.push("journeys.current_account.questions");
      if (!j?.journeys?.mortgage?.questions || !Array.isArray(j.journeys.mortgage.questions)) missing.push("journeys.mortgage.questions");
      if (!j?.journeys?.current_account?.macro_steps || !Array.isArray(j.journeys.current_account.macro_steps)) missing.push("journeys.current_account.macro_steps");
      if (!j?.journeys?.mortgage?.macro_steps || !Array.isArray(j.journeys.mortgage.macro_steps)) missing.push("journeys.mortgage.macro_steps");
      if (!j?.legends?.touchpoints_it) missing.push("legends.touchpoints_it");
      if (missing.length) {
        alert("File non valido: campi mancanti o malformati:\n• " + missing.join("\n• "));
        return;
      }
      setPendingFwImport(j);
    };
    reader.readAsText(file);
  };
  const doImportFramework = ({ mode, newId, newName }) => {
    const j = pendingFwImport;
    if (!j) return;
    // Clone so we don't mutate the candidate held in state.
    const F = JSON.parse(JSON.stringify(j));
    if (!F.statistics) F.statistics = recomputeStatistics(F);
    let targetId;
    if (mode === "replace") {
      targetId = DB.FRAMEWORK_ID;
      F.metadata = { ...F.metadata, id: targetId };
    } else {
      targetId = newId;
      F.metadata = { ...F.metadata, id: newId, name_it: newName || F.metadata.name_it };
    }
    const ok = DB.persistence.saveFramework(targetId, F);
    if (!ok) {
      alert("Impossibile salvare il framework: lo storage del browser è pieno o non disponibile.");
      return;
    }
    const meta = DB.persistence.loadMeta();
    DB.persistence.saveMeta({ ...meta, framework_id: targetId });
    setPendingFwImport(null);
    location.reload();
  };
  const onResetFramework = () => setShowFwReset(true);
  const doResetFramework = () => {
    DB.persistence.resetFramework(DB.FRAMEWORK_ID);
    location.reload();
  };

  const onImportJSON = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      let j;
      try {
        j = JSON.parse(reader.result);
      } catch (e) {
        alert("File non valido: JSON malformato.\n\n" + (e?.message || ""));
        return;
      }
      if (!Array.isArray(j.results)) {
        alert("File non valido: campo 'results' assente o non è un array.");
        return;
      }
      // Compute coverage against the current framework so we can warn the user
      // before overwriting state that won't map back to anything.
      const currentIds = new Set(DB.QUESTIONS.map(q => q.id));
      let matched = 0, unknown = 0, withAnswer = 0;
      const next = {};
      for (const r of j.results) {
        if (!r.id) continue;
        const known = currentIds.has(r.id);
        if (known) matched++; else unknown++;
        if (r.conformity_assessment || r.evidence_notes_it || r.follow_up) withAnswer++;
        next[r.id] = {
          conformity: r.conformity_assessment || null,
          note: r.evidence_notes_it || "",
          flag: !!r.follow_up,
        };
      }
      const fwMismatch = j.framework_version && j.framework_version !== DB.AUDIT_META.framework_version;
      const lines = [
        `Importazione audit:`,
        `· ${j.results.length} risposte nel file (${withAnswer} compilate)`,
        `· ${matched} corrispondono al framework corrente, ${unknown} non riconosciute`,
      ];
      if (fwMismatch) {
        lines.push(`⚠ versione framework diversa: file v${j.framework_version} vs corrente v${DB.AUDIT_META.framework_version}`);
      }
      if (j.project) {
        lines.push(`· verranno aggiornati anche i dettagli del progetto (${j.project.client || "—"})`);
      }
      lines.push("", "Procedere?");
      if (!confirm(lines.join("\n"))) return;

      DB.persistence.saveStates(next);
      if (j.project && typeof j.project === "object") {
        const meta = DB.persistence.loadMeta();
        // Preserve the active framework_id (changing it would force another reload).
        DB.persistence.saveMeta({ ...meta, ...j.project, framework_id: meta.framework_id || j.project.framework_id });
      }
      location.reload();
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
          activeQ={activeQ}
          onExportCSV={onExportCSV} onExportJSON={onExportJSON} onImportJSON={onImportJSON}
          onExportFramework={onExportFramework}
          onResetFramework={onResetFramework}
          frameworkIsBuiltin={DB.persistence.isBuiltinFramework(DB.FRAMEWORK_ID)}
        />

        {view === "map" && (
          <MapView journey={activeJourney} states={states} hotOnly={hotOnly} setHotOnly={setHotOnly}
            onPickCell={(stepId, tpId) => { setFilterStep(stepId); setFilterTp(tpId); setView("list"); clearFilters(); }}
            onPickStep={(stepId) => { setFilterStep(stepId); setFilterTp(null); setView("list"); clearFilters(); }}
            onPickTp={(tpId) => { setFilterStep(null); setFilterTp(tpId); setView("list"); clearFilters(); }}
            onAddCell={(stepId, tpId) => setEditingQ({ question: null, isNew: true,
              prefill: { journey: activeJourney, macro_step: stepId, touchpoint: tpId } })} />
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
            onOpen={(id) => { setActiveQid(id); setView("question"); }}
            onAddQuestion={() => setEditingQ({ question: null, isNew: true,
              prefill: { journey: activeJourney, macro_step: filterStep, touchpoint: filterTp } })}
            onEditQuestion={(q) => setEditingQ({ question: q, isNew: false })}
            onRemoveQuestion={(q) => setRemovingQ(q)} />
        )}

        {view === "question" && activeQ && (
          <QuestionView q={activeQ} state={states[activeQ.id] || {}}
            onUpdate={(patch) => updateState(activeQ.id, patch)}
            navIdx={navIdx} navTotal={filteredList.length}
            onPrev={() => { if (navIdx > 0) setActiveQid(filteredList[navIdx - 1].id); }}
            onNext={() => { if (navIdx < filteredList.length - 1) setActiveQid(filteredList[navIdx + 1].id); }}
            onBack={() => setView("list")}
            onEdit={() => setEditingQ({ question: activeQ, isNew: false })}
            onRemove={() => setRemovingQ(activeQ)} />
        )}

        {view === "dashboard" && <window.DashboardView states={states} project={project} />}
      </div>

      {showMeta && <MetaDialog project={project} onSave={(p) => {
        const fwChanged = p.framework_id && p.framework_id !== DB.FRAMEWORK_ID;
        setProject(p);
        setShowMeta(false);
        if (fwChanged) {
          DB.persistence.saveMeta(p);
          location.reload();
        }
      }} onClose={() => setShowMeta(false)} required={!project.client}
        onImportFramework={onImportFramework} />}
      {showReset && <ConfirmDialog title="Azzerare le risposte?" body="Verranno cancellate tutte le valutazioni, le note e i follow-up salvati su questo browser. L'azione non può essere annullata."
        confirmLabel="Azzera tutto" destructive
        onConfirm={() => { resetStates(); setShowReset(false); }} onCancel={() => setShowReset(false)} />}
      {editingQ && (
        <QuestionEditorDialog
          framework={DB.FRAMEWORK}
          existingIds={new Set(DB.QUESTIONS.map(x => x.id))}
          initial={editingQ.question}
          isNew={editingQ.isNew}
          prefill={editingQ.prefill}
          onSave={(q) => { onSaveQuestion(q, editingQ.isNew); }}
          onClose={() => setEditingQ(null)} />
      )}
      {removingQ && (
        <ConfirmDialog title="Rimuovere la domanda?"
          body={`${removingQ.id} verrà eliminata dal framework. Le risposte salvate per questo ID resteranno nel localStorage ma non saranno più visibili. La pagina verrà ricaricata.`}
          confirmLabel="Rimuovi" destructive
          onConfirm={onConfirmRemoveQuestion} onCancel={() => setRemovingQ(null)} />
      )}
      {showFwReset && (
        <ConfirmDialog title="Ripristinare il framework predefinito?"
          body="Verranno scartate tutte le modifiche persistite a questo framework e ricaricata la versione di fabbrica."
          confirmLabel="Ripristina" destructive
          onConfirm={doResetFramework} onCancel={() => setShowFwReset(false)} />
      )}
      {showFwExport && (
        <ExportFrameworkDialog
          framework={DB.FRAMEWORK}
          onConfirm={doExportFramework}
          onClose={() => setShowFwExport(false)} />
      )}
      {pendingFwImport && (
        <ImportFrameworkDialog
          candidate={pendingFwImport}
          currentId={DB.FRAMEWORK_ID}
          currentName={DB.AUDIT_META.framework_name}
          onConfirm={doImportFramework}
          onClose={() => setPendingFwImport(null)} />
      )}
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
function TopBar({ view, activeJourney, filterStep, filterTp, onClearFilter, activeQ,
                  onExportCSV, onExportJSON, onImportJSON,
                  onExportFramework, onResetFramework, frameworkIsBuiltin }) {
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
      {/* Import is its own top-level button. Keeping the file input mounted at the
          topbar level (not inside a dropdown) avoids losing the change event when
          the menu unmounts before the native picker resolves. */}
      <button className="btn" onClick={() => fileRef.current?.click()}
        title="Importa risposte da JSON precedentemente esportato">
        <Icon d={IC.upload} size={14} /> Importa
      </button>
      <input ref={fileRef} type="file" accept="application/json" style={{display:"none"}}
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onImportJSON(f); e.target.value = ""; }} />

      <div className="menu-wrap" onClick={(e) => e.stopPropagation()}>
        <button className="btn" data-variant="primary" onClick={() => setExportOpen(v => !v)}>
          <Icon d={IC.download} /> Esporta
          <Icon d={IC.chevD} size={12} />
        </button>
        {exportOpen && (
          <div className="menu">
            <div className="menu-label">Risposte audit</div>
            <button className="menu-item" onClick={() => { onExportCSV(); setExportOpen(false); }}>
              <Icon d={IC.doc} size={14} /> CSV (foglio di calcolo)
            </button>
            <button className="menu-item" onClick={() => { onExportJSON(); setExportOpen(false); }}>
              <Icon d={IC.save} size={14} /> JSON (backup audit)
            </button>
            <div className="menu-sep" />
            <div className="menu-label">Framework</div>
            <button className="menu-item" onClick={() => { onExportFramework(); setExportOpen(false); }}>
              <Icon d={IC.download} size={14} /> Esporta framework
            </button>
            {frameworkIsBuiltin && (
              <button className="menu-item" onClick={() => { onResetFramework(); setExportOpen(false); }}>
                <Icon d={IC.reset} size={14} /> Ripristina framework default
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- Map view ----------
function MapView({ journey, states, hotOnly, setHotOnly, onPickCell, onPickStep, onPickTp, onAddCell }) {
  const steps = DB.MACRO_STEPS[journey];
  const tps = React.useMemo(() => {
    // Show all touchpoints applicable to any macro-step in this journey, plus any
    // touchpoint that already has questions (defensive, in case the framework
    // has answers in cells whose step descriptor doesn't list the touchpoint).
    const set = new Set();
    for (const s of steps) for (const tp of (s.applicable_touchpoints || [])) set.add(tp);
    for (const q of DB.QUESTIONS) if (q.journey === journey) set.add(q.touchpoint);
    return [...set];
  }, [journey, steps]);

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
              if (na) {
                const applicable = (s.applicable_touchpoints || []).includes(tp);
                return (
                  <div key={s.id}
                    className="hm-cell hm-cell-empty"
                    data-na="true"
                    data-applicable={applicable ? "true" : "false"}
                    onClick={onAddCell ? () => onAddCell(s.id, tp) : undefined}
                    title={onAddCell
                      ? `Nessuna domanda${applicable ? "" : " (touchpoint non standard per questo macro-step)"} · click per aggiungere`
                      : "Nessuna domanda"}>
                    {onAddCell
                      ? <span className="hm-add"><Icon d={IC.plus} size={12}/></span>
                      : "·"}
                  </div>
                );
              }
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
                    search, setSearch, fStatus, setFStatus, fPour, setFPour, fCat, setFCat, onClearFilters, onClearMapFilter, onOpen,
                    onAddQuestion, onEditQuestion, onRemoveQuestion }) {
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
        {onAddQuestion && (
          <button className="btn" data-variant="primary" onClick={onAddQuestion}>
            <Icon d={IC.plus} size={14} /> Aggiungi domanda
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
                  const stop = (fn) => (e) => { e.stopPropagation(); fn(); };
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
                        {(onEditQuestion || onRemoveQuestion) && (
                          <span className="qrow-actions">
                            {onEditQuestion && (
                              <button className="qrow-action" title="Modifica struttura della domanda"
                                onClick={stop(() => onEditQuestion(q))}>
                                <Icon d={IC.edit} size={12}/>
                              </button>
                            )}
                            {onRemoveQuestion && (
                              <button className="qrow-action qrow-action-danger" title="Rimuovi dal framework"
                                onClick={stop(() => onRemoveQuestion(q))}>
                                <Icon d={IC.trash} size={12}/>
                              </button>
                            )}
                          </span>
                        )}
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
function QuestionView({ q, state, onUpdate, navIdx, navTotal, onPrev, onNext, onBack, onEdit, onRemove }) {
  const conf = state.conformity;
  const isFlag = !!state.flag;
  const isReview = conf === "to_review";
  const isNA = conf === "not_applicable";

  return (
    <div className="qview">
      <div className="q-main">
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <button className="btn" data-variant="ghost" onClick={onBack}>
            <Icon d={IC.back} size={14} /> Torna alla lista
          </button>
          <span style={{ flex: 1 }} />
          {onEdit && (
            <button className="btn" data-variant="ghost" onClick={onEdit} title="Modifica struttura della domanda">
              <Icon d={IC.edit} size={14} /> Modifica struttura
            </button>
          )}
          {onRemove && (
            <button className="btn" data-variant="ghost" onClick={onRemove} title="Rimuovi dal framework"
              style={{ color: "var(--destructive)" }}>
              <Icon d={IC.trash} size={14} /> Rimuovi
            </button>
          )}
        </div>
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
function MetaDialog({ project, onSave, onClose, required, onImportFramework }) {
  const [draft, setDraft] = React.useState({ ...project, framework_id: project.framework_id || DB.FRAMEWORK_ID });
  const valid = !!draft.client?.trim() && !!draft.framework_id;
  const frameworks = DB.FRAMEWORKS_LIST || [];
  const fwFileRef = React.useRef(null);
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
          <div className="field">
            <span>Framework</span>
            <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
              <select style={{ flex: 1 }} value={draft.framework_id} onChange={(e) => setDraft({...draft, framework_id: e.target.value})}>
                {frameworks.map(f => (
                  <option key={f.id} value={f.id}>{f.name}{f.version ? ` · v${f.version}` : ""}{f.overridden ? " · modificato" : ""}{f.custom ? " · importato" : ""}</option>
                ))}
              </select>
              {onImportFramework && (
                <>
                  <button type="button" className="btn"
                    onClick={() => fwFileRef.current?.click()}
                    title="Importa un framework da file JSON">
                    <Icon d={IC.upload} size={14}/> Importa…
                  </button>
                  <input ref={fwFileRef} type="file" accept="application/json" style={{ display: "none" }}
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) onImportFramework(f); e.target.value = ""; }} />
                </>
              )}
            </div>
            {draft.framework_id !== DB.FRAMEWORK_ID && (
              <small style={{color:"var(--muted-foreground)", marginTop:4}}>
                Cambiando framework la pagina verrà ricaricata.
              </small>
            )}
          </div>
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

// ---------- Framework export/import dialogs ----------

const slugify = (s) =>
  String(s || "")
    .toLowerCase().normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 60) || "framework";

// Suggest the next version: bump the trailing numeric segment when present, else
// append "-edit". e.g. "1.0.0" -> "1.0.1", "1.2" -> "1.3", "1" -> "2", "v1" -> "v1-edit".
const bumpVersion = (v) => {
  const s = String(v || "").trim();
  if (!s) return "1.0.1";
  const m = s.match(/^(.*?)(\d+)(\D*)$/);
  if (!m) return s + "-edit";
  return `${m[1]}${parseInt(m[2], 10) + 1}${m[3]}`;
};

function ExportFrameworkDialog({ framework, onConfirm, onClose }) {
  const cur = framework.metadata || {};
  const [name, setName] = React.useState(cur.name_it || cur.title_it || "Framework");
  const [version, setVersion] = React.useState(bumpVersion(cur.version));
  const [keepId, setKeepId] = React.useState(false);
  const derivedId = `${slugify(name)}_v${slugify(version)}`;
  const id = keepId ? cur.id : derivedId;
  const date = new Date().toISOString().slice(0, 10);

  const valid = !!name.trim() && !!version.trim() && !!id.trim();

  const submit = () => {
    if (!valid) return;
    onConfirm({
      id: id.trim(),
      name_it: name.trim(),
      version: version.trim(),
      date,
    });
  };

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-head">
          <h2>Esporta framework</h2>
          <span style={{ flex: 1 }} />
          <button className="btn" data-variant="ghost" onClick={onClose}><Icon d={IC.x} size={14}/></button>
        </div>
        <div className="modal-body">
          <p style={{ margin: 0, fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.5 }}>
            Imposta nome e versione dello snapshot. <strong>Il framework attivo verrà aggiornato con questi metadati</strong>, così le successive esportazioni delle risposte (CSV/JSON) registreranno la stessa versione e re-importando in seguito non ci sarà disallineamento.
            <br/>
            L'<strong>id</strong> identifica il framework: usandone uno diverso dal corrente verrà creato un framework affiancato (selezionabile dai Dettagli progetto); mantenendo lo stesso id, il corrente verrà aggiornato in place.
          </p>
          <label className="field">
            <span>Nome</span>
            <input value={name} onChange={(e) => setName(e.target.value)} autoFocus />
          </label>
          <label className="field">
            <span>Versione</span>
            <input value={version} onChange={(e) => setVersion(e.target.value)}
              placeholder="es. 1.0.1" />
          </label>
          <label className="field">
            <span>ID</span>
            <input value={id} disabled={!keepId}
              onChange={() => {}} style={{ fontFamily: "var(--font-family-mono)" }} />
          </label>
          <label style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 12, color: "var(--muted-foreground)" }}>
            <input type="checkbox" checked={keepId} onChange={(e) => setKeepId(e.target.checked)} />
            Mantieni l'id corrente <code style={{ fontFamily: "var(--font-family-mono)" }}>{cur.id}</code> (re-importando sovrascriverà)
          </label>
        </div>
        <div className="modal-foot">
          <button className="btn" data-variant="ghost" onClick={onClose}>Annulla</button>
          <button className="btn" data-variant="primary" disabled={!valid} onClick={submit}>
            <Icon d={IC.download} size={14}/> Scarica JSON
          </button>
        </div>
      </div>
    </div>
  );
}

// Build a unique id by appending _2, _3, ... when needed.
const uniqueFrameworkId = (base, taken) => {
  const b = slugify(base) || "framework";
  if (!taken.has(b)) return b;
  let n = 2;
  while (taken.has(`${b}_${n}`)) n++;
  return `${b}_${n}`;
};

function ImportFrameworkDialog({ candidate, currentId, currentName, onConfirm, onClose }) {
  const meta = candidate.metadata || {};
  const ccCount = candidate.journeys?.current_account?.questions?.length || 0;
  const muCount = candidate.journeys?.mortgage?.questions?.length || 0;

  // The set of ids already selectable in this app — both built-ins and stored customs.
  const takenIds = React.useMemo(
    () => DB.persistence.allFrameworkIds(),
    []
  );

  // Default mode = create a new profile. The user can switch to replace if desired.
  const [mode, setMode] = React.useState("asnew"); // 'asnew' | 'replace'
  // Editable name + id for the "new profile" mode. Default to a collision-safe id.
  const [name, setName] = React.useState(meta.name_it || meta.title_it || "Framework importato");
  const initialId = uniqueFrameworkId(meta.id || meta.name_it || "framework", takenIds);
  const [newId, setNewId] = React.useState(initialId);
  const idCollides = mode === "asnew" && takenIds.has(newId.trim());

  const valid = mode === "replace" || (!!name.trim() && !!newId.trim() && !idCollides);

  const submit = () => {
    if (!valid) return;
    onConfirm({
      mode,
      newId: newId.trim(),
      newName: name.trim(),
    });
  };

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-head">
          <h2>Importa framework</h2>
          <span style={{ flex: 1 }} />
          <button className="btn" data-variant="ghost" onClick={onClose}><Icon d={IC.x} size={14}/></button>
        </div>
        <div className="modal-body">
          <div className="fw-import-summary">
            <div className="fw-import-row">
              <span className="fw-import-label">Nome</span>
              <span>{meta.name_it || meta.title_it || "—"}</span>
            </div>
            <div className="fw-import-row">
              <span className="fw-import-label">Versione</span>
              <span>{meta.version || "—"}</span>
            </div>
            <div className="fw-import-row">
              <span className="fw-import-label">ID nel file</span>
              <code style={{ fontFamily: "var(--font-family-mono)", fontSize: 12 }}>{meta.id || "—"}</code>
              {takenIds.has(meta.id) && (
                <span style={{ fontSize: 11, color: "var(--warning)", fontWeight: 600 }}>già usato</span>
              )}
            </div>
            <div className="fw-import-row">
              <span className="fw-import-label">Domande</span>
              <span>{ccCount + muCount} <span style={{ color: "var(--muted-foreground)" }}>({ccCount} CC + {muCount} Mutuo)</span></span>
            </div>
          </div>

          <div className="fw-import-modes">
            <label className="fw-import-mode" data-active={mode === "asnew"}>
              <input type="radio" name="mode" checked={mode === "asnew"} onChange={() => setMode("asnew")} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="fw-import-mode-h">Aggiungi come nuovo framework</div>
                <div className="fw-import-mode-sub">
                  Crea un framework affiancato a quelli esistenti, selezionabile dai Dettagli progetto. Diventa attivo subito.
                </div>
                {mode === "asnew" && (
                  <div className="fw-import-mode-fields">
                    <label className="field">
                      <span>Nome del framework</span>
                      <input value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className="field">
                      <span>ID univoco</span>
                      <input value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                        style={{ fontFamily: "var(--font-family-mono)" }} />
                      {idCollides
                        ? <small style={{ color: "var(--destructive)", marginTop: 4 }}>ID già usato — modificalo o passa a "Sostituisci".</small>
                        : <small style={{ color: "var(--muted-foreground)", marginTop: 4 }}>Verrà aggiunto come nuovo framework (id originale: <code style={{ fontFamily: "var(--font-family-mono)" }}>{meta.id || "—"}</code>).</small>
                      }
                    </label>
                  </div>
                )}
              </div>
            </label>

            <label className="fw-import-mode" data-active={mode === "replace"}>
              <input type="radio" name="mode" checked={mode === "replace"} onChange={() => setMode("replace")} />
              <div>
                <div className="fw-import-mode-h">Sostituisci framework corrente</div>
                <div className="fw-import-mode-sub">
                  Salva con id <code style={{ fontFamily: "var(--font-family-mono)" }}>{currentId}</code> ({currentName}). Sovrascrive le modifiche correnti, non aggiunge un nuovo framework.
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="modal-foot">
          <button className="btn" data-variant="ghost" onClick={onClose}>Annulla</button>
          <button className="btn" data-variant="primary" disabled={!valid} onClick={submit}>
            Importa e ricarica
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Framework editing helpers ----------

const JOURNEY_PREFIX = { current_account: "CC", mortgage: "MU" };
const POUR_OPTIONS = [
  { value: "perceivable", label: "Percepibile" },
  { value: "operable", label: "Utilizzabile" },
  { value: "understandable", label: "Comprensibile" },
  { value: "robust", label: "Robusto" },
];
const USER_CAT_OPTIONS = [
  { value: "visual", label: "Visiva" },
  { value: "auditory", label: "Uditiva" },
  { value: "motor", label: "Motoria" },
  { value: "cognitive", label: "Cognitiva" },
  { value: "elderly_temporary_situational", label: "Anziani / temp." },
];

// Heuristic to suggest a POUR principle from selected user categories.
const POUR_FROM_CATS = (cats) => {
  if (!cats || !cats.length) return "perceivable";
  if (cats.includes("visual") && cats.length === 1) return "perceivable";
  if (cats.includes("motor")) return "operable";
  if (cats.includes("cognitive")) return "understandable";
  if (cats.includes("auditory")) return "perceivable";
  return "perceivable";
};

const buildQuestionId = (existingIds, journey, macroStep, touchpoint) => {
  const jp = JOURNEY_PREFIX[journey];
  const sp = DB.STEP_CODES[macroStep] || macroStep.slice(0,3).toUpperCase();
  const tp = DB.TP_CODE[touchpoint] || touchpoint.slice(0,3).toUpperCase();
  const prefix = `${jp}-${sp}-${tp}-`;
  let max = 0;
  for (const id of existingIds) {
    if (id.startsWith(prefix)) {
      const n = parseInt(id.slice(prefix.length), 10);
      if (Number.isFinite(n) && n > max) max = n;
    }
  }
  return `${prefix}${String(max + 1).padStart(3, "0")}`;
};

const categoriesPhrase = (cats, legends) => {
  const labels = (cats || []).map(c => legends.user_categories_it[c]).filter(Boolean);
  if (!labels.length) return "tutti gli utenti";
  if (labels.length === 1) return `utenti ${labels[0]}`;
  if (labels.length === 2) return `utenti ${labels[0]} o ${labels[1]}`;
  return `utenti ${labels.slice(0, -1).join(", ")} o ${labels.slice(-1)}`;
};

const POUR_RATIONALE_TAIL = {
  perceivable: "le informazioni essenziali possono non essere percepite o distinguibili.",
  operable: "l’utente può non riuscire ad azionare il servizio o completare il compito.",
  understandable: "linguaggio, struttura o feedback possono risultare poco comprensibili.",
  robust: "le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
};

const buildSuggestions = ({ journey, macro_step, touchpoint, pour, cats, requirement, framework }) => {
  const legends = framework.legends;
  const tpLabel = legends.touchpoints_it[touchpoint] || touchpoint;
  const stepDescriptor = framework.journeys[journey].macro_steps.find(s => s.id === macro_step);
  const stepName = (stepDescriptor?.name_it || macro_step).toLowerCase();
  const req = (requirement || "").trim().replace(/\?\s*$/, "");
  const reqLow = req ? req.charAt(0).toLowerCase() + req.slice(1) : "il requisito di accessibilità è soddisfatto";
  const tail = POUR_RATIONALE_TAIL[pour] || POUR_RATIONALE_TAIL.perceivable;

  const question_it = `Nel touchpoint ${tpLabel}, è garantito che ${reqLow}?`;
  const rationale_it = `Nel macro-step ${stepName}, una barriera nel touchpoint ${tpLabel} può escludere o penalizzare ${categoriesPhrase(cats, legends)}: ${tail}`;
  const conformity_criteria = {
    full_compliance: `Il requisito è pienamente soddisfatto: ${reqLow}; nel touchpoint ${tpLabel} contenuti, controlli e messaggi sono equivalenti e accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.`,
    partial_barrier: `Il requisito è soddisfatto solo in parte: ${reqLow} è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.`,
    critical_ko: `Il requisito non è soddisfatto: ${reqLow} è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria.`,
  };
  const remediation_hint_it = "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.";
  const tags = Array.from(new Set([
    journey, macro_step, touchpoint, pour, ...(cats || []),
    "wcag", "en-301-549",
  ])).sort();
  return { question_it, rationale_it, conformity_criteria, remediation_hint_it, tags };
};

function recomputeStatistics(F) {
  const stats = {
    total_questions: 0,
    by_journey: { current_account: 0, mortgage: 0 },
    by_macro_step: {},
    by_touchpoint: {},
    by_pour: { perceivable: 0, operable: 0, understandable: 0, robust: 0 },
    by_user_category: { auditory: 0, visual: 0, motor: 0, cognitive: 0, elderly_temporary_situational: 0 },
  };
  for (const j of ["current_account", "mortgage"]) {
    const qs = F.journeys[j].questions;
    stats.by_journey[j] = qs.length;
    stats.total_questions += qs.length;
    for (const q of qs) {
      stats.by_macro_step[q.macro_step] = (stats.by_macro_step[q.macro_step] || 0) + 1;
      stats.by_touchpoint[q.touchpoint] = (stats.by_touchpoint[q.touchpoint] || 0) + 1;
      stats.by_pour[q.pour_principle] = (stats.by_pour[q.pour_principle] || 0) + 1;
      for (const c of q.affected_user_categories || []) {
        stats.by_user_category[c] = (stats.by_user_category[c] || 0) + 1;
      }
    }
  }
  return stats;
}

// ---------- Question editor dialog ----------
function QuestionEditorDialog({ framework, existingIds, initial, isNew, prefill, onSave, onClose }) {
  // Resolve standards: stored as integer indices in framework.standards_catalog.
  // In the editor we work with indices directly.
  const catalog = framework.standards_catalog || [];

  const seedFromInitial = () => {
    if (!initial) {
      const journey = prefill?.journey || "current_account";
      const steps = framework.journeys[journey].macro_steps;
      // Honor an explicit map-cell selection (filterStep + filterTp) as-is.
      // Fallbacks only kick in for partial prefills.
      let macro_step = (prefill?.macro_step && steps.some(s => s.id === prefill.macro_step))
        ? prefill.macro_step : null;
      let touchpoint = prefill?.touchpoint || null;
      if (!macro_step && touchpoint) {
        // If only touchpoint was supplied, pick the first step that lists it.
        const matching = steps.find(s => (s.applicable_touchpoints || []).includes(touchpoint));
        macro_step = matching?.id || steps[0]?.id;
      }
      if (!macro_step) macro_step = steps[0]?.id;
      const step = steps.find(s => s.id === macro_step);
      const validTps = step?.applicable_touchpoints || [];
      if (!touchpoint) touchpoint = validTps[0] || "institutional_website";
      const cats = ["visual"];
      const pour = POUR_FROM_CATS(cats);
      const sug = buildSuggestions({ journey, macro_step, touchpoint, pour, cats, requirement: "", framework });
      return {
        id: buildQuestionId(existingIds, journey, macro_step, touchpoint),
        journey,
        macro_step,
        touchpoint,
        pour_principle: pour,
        affected_user_categories: cats,
        requirement: "",
        question_it: sug.question_it,
        rationale_it: sug.rationale_it,
        conformity_criteria: sug.conformity_criteria,
        remediation_hint_it: sug.remediation_hint_it,
        tags: sug.tags,
        standards: [],
        idLocked: false,
        autoFill: true,
        tagsAuto: true,
      };
    }
    const stdIdx = (initial.standards || []).map(s => typeof s === "number" ? s : catalog.findIndex(c => c && c.standard === s.standard && c.clause === s.clause)).filter(i => i >= 0);
    return {
      id: initial.id,
      journey: initial.journey,
      macro_step: initial.macro_step,
      touchpoint: initial.touchpoint,
      pour_principle: initial.pour_principle,
      affected_user_categories: [...(initial.affected_user_categories || [])],
      requirement: "",
      question_it: initial.question_it || "",
      rationale_it: initial.rationale_it || "",
      conformity_criteria: { ...initial.conformity_criteria },
      remediation_hint_it: initial.remediation_hint_it || "",
      tags: [...(initial.tags || [])],
      standards: stdIdx,
      idLocked: true,
      autoFill: false,
    };
  };

  const [form, setForm] = React.useState(seedFromInitial);
  const [tagInput, setTagInput] = React.useState("");
  const [stdSearch, setStdSearch] = React.useState("");
  const [stdShowSelectedOnly, setStdShowSelectedOnly] = React.useState(false);

  const filteredStandards = React.useMemo(() => {
    const term = stdSearch.trim().toLowerCase();
    return catalog.map((s, i) => ({ s, i })).filter(({ s, i }) => {
      if (stdShowSelectedOnly && !form.standards.includes(i)) return false;
      if (!term) return true;
      const hay = `${s.standard} ${s.clause} ${s.clause_title_it || ""} ${s.family || ""}`.toLowerCase();
      return hay.includes(term);
    });
  }, [catalog, stdSearch, stdShowSelectedOnly, form.standards]);

  const journeyDescriptors = framework.journeys[form.journey].macro_steps;
  const currentStep = journeyDescriptors.find(s => s.id === form.macro_step) || journeyDescriptors[0];
  const validTouchpoints = (() => {
    const list = (currentStep?.applicable_touchpoints || []).slice();
    if (form.touchpoint && !list.includes(form.touchpoint)) list.unshift(form.touchpoint);
    return list;
  })();

  // Auto-derive question text, rationale, conformity, tags whenever core picks change,
  // but only while the form is in "auto" mode — flipped off the first time the user edits
  // any text field. Never auto-fill when editing an existing question.
  const refillSuggestions = (next) => {
    const auto = isNew && next.autoFill !== false;
    if (!auto) return next;
    const sug = buildSuggestions({
      journey: next.journey,
      macro_step: next.macro_step,
      touchpoint: next.touchpoint,
      pour: next.pour_principle,
      cats: next.affected_user_categories,
      requirement: next.requirement,
      framework,
    });
    return {
      ...next,
      question_it: sug.question_it,
      rationale_it: sug.rationale_it,
      conformity_criteria: sug.conformity_criteria,
      remediation_hint_it: next.remediation_hint_it || sug.remediation_hint_it,
      tags: (!next.tags || !next.tags.length || next.tagsAuto !== false) ? sug.tags : next.tags,
      tagsAuto: true,
    };
  };

  const updateClassification = (patch) => {
    setForm(prev => {
      let next = { ...prev, ...patch };
      // If journey changed, ensure macro_step belongs to it
      if (patch.journey && patch.journey !== prev.journey) {
        const steps = framework.journeys[patch.journey].macro_steps;
        next.macro_step = steps[0]?.id;
        next.touchpoint = steps[0]?.applicable_touchpoints?.[0] || next.touchpoint;
      }
      // If macro_step changed, ensure touchpoint is valid
      if (patch.macro_step && patch.macro_step !== prev.macro_step) {
        const steps = framework.journeys[next.journey].macro_steps;
        const step = steps.find(s => s.id === patch.macro_step);
        if (step && !step.applicable_touchpoints.includes(next.touchpoint)) {
          next.touchpoint = step.applicable_touchpoints[0] || next.touchpoint;
        }
      }
      // If categories changed and no explicit POUR override, suggest one
      if (patch.affected_user_categories && isNew) {
        next.pour_principle = POUR_FROM_CATS(patch.affected_user_categories);
      }
      // Recompute id when not manually locked
      if (!next.idLocked && (patch.journey || patch.macro_step || patch.touchpoint || !next.id)) {
        const otherIds = new Set(existingIds);
        if (initial) otherIds.delete(initial.id);
        next.id = buildQuestionId(otherIds, next.journey, next.macro_step, next.touchpoint);
      }
      // Refill suggestions
      next = refillSuggestions(next);
      return next;
    });
  };

  const toggleCat = (c) => {
    const cur = form.affected_user_categories || [];
    const next = cur.includes(c) ? cur.filter(x => x !== c) : [...cur, c];
    updateClassification({ affected_user_categories: next });
  };

  const toggleStandard = (idx) => {
    setForm(prev => {
      const cur = prev.standards || [];
      const next = cur.includes(idx) ? cur.filter(x => x !== idx) : [...cur, idx];
      return { ...prev, standards: next };
    });
  };

  const addTag = () => {
    const t = tagInput.trim();
    if (!t) return;
    setForm(prev => ({ ...prev, tags: Array.from(new Set([...(prev.tags || []), t])).sort(), tagsAuto: false }));
    setTagInput("");
  };
  const removeTag = (t) => {
    setForm(prev => ({ ...prev, tags: (prev.tags || []).filter(x => x !== t), tagsAuto: false }));
  };

  const valid =
    !!form.id &&
    !!form.question_it.trim() &&
    !!form.rationale_it.trim() &&
    !!form.conformity_criteria.full_compliance.trim() &&
    !!form.conformity_criteria.partial_barrier.trim() &&
    !!form.conformity_criteria.critical_ko.trim() &&
    (form.affected_user_categories || []).length > 0 &&
    (() => {
      // duplicate ID check
      if (initial && form.id === initial.id) return true;
      return !existingIds.has(form.id);
    })();

  const idDup = !valid && form.id && existingIds.has(form.id) && (!initial || form.id !== initial.id);

  const submit = () => {
    if (!valid) return;
    const out = {
      id: form.id,
      journey: form.journey,
      macro_step: form.macro_step,
      question_it: form.question_it.trim(),
      rationale_it: form.rationale_it.trim(),
      touchpoint: form.touchpoint,
      affected_user_categories: form.affected_user_categories,
      pour_principle: form.pour_principle,
      standards: form.standards.slice().sort((a,b) => a-b),
      conformity_criteria: {
        full_compliance: form.conformity_criteria.full_compliance.trim(),
        partial_barrier: form.conformity_criteria.partial_barrier.trim(),
        critical_ko: form.conformity_criteria.critical_ko.trim(),
      },
      conformity_assessment: initial?.conformity_assessment ?? null,
      evidence_notes_it: initial?.evidence_notes_it ?? "",
      remediation_hint_it: form.remediation_hint_it.trim(),
      tags: (form.tags || []).slice().sort(),
    };
    onSave(out);
  };

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal modal-xl">
        <div className="modal-head">
          <h2>{isNew ? "Aggiungi domanda" : `Modifica domanda · ${initial.id}`}</h2>
          <span style={{flex:1}}/>
          <button className="btn" data-variant="ghost" onClick={onClose}>
            <Icon d={IC.x} size={14}/>
          </button>
        </div>
        <div className="modal-body" style={{ gap: 18, maxHeight: "70vh", overflowY: "auto" }}>
          <section className="qe-section">
            <div className="qe-section-h">Classificazione</div>
            <div className="qe-grid">
              <label className="field">
                <span>Journey</span>
                <select value={form.journey} onChange={(e) => updateClassification({ journey: e.target.value })}>
                  <option value="current_account">Conto corrente</option>
                  <option value="mortgage">Mutuo prima casa</option>
                </select>
              </label>
              <label className="field">
                <span>Macro-step</span>
                <select value={form.macro_step} onChange={(e) => updateClassification({ macro_step: e.target.value })}>
                  {journeyDescriptors.map(s => (
                    <option key={s.id} value={s.id}>{s.name_it}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Touchpoint</span>
                <select value={form.touchpoint} onChange={(e) => updateClassification({ touchpoint: e.target.value })}>
                  {validTouchpoints.map(tp => (
                    <option key={tp} value={tp}>{DB.TOUCHPOINT_LABELS[tp] || tp}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Principio POUR</span>
                <select value={form.pour_principle} onChange={(e) => setForm(p => ({ ...p, pour_principle: e.target.value }))}>
                  {POUR_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </label>
            </div>
            <div className="qe-cats">
              <span className="qe-label">Categorie utenti impattate</span>
              <div className="qe-cat-chips">
                {USER_CAT_OPTIONS.map(o => (
                  <button key={o.value}
                    className="conf-pill" data-active={form.affected_user_categories.includes(o.value)}
                    onClick={() => toggleCat(o.value)}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="qe-section">
            <div className="qe-section-h">Identificativo</div>
            <div className="qe-grid">
              <label className="field" style={{ gridColumn: "span 2" }}>
                <span>ID domanda {!form.idLocked && <em style={{ textTransform:"none", letterSpacing:0, fontWeight:500, color:"var(--muted-foreground)", marginLeft:6 }}>· generato automaticamente</em>}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <input style={{ flex: 1, fontFamily: "var(--font-family-mono)" }}
                    value={form.id}
                    onChange={(e) => setForm(p => ({ ...p, id: e.target.value, idLocked: true }))} />
                  {form.idLocked && isNew && (
                    <button className="btn" data-variant="ghost" onClick={() => {
                      const otherIds = new Set(existingIds);
                      if (initial) otherIds.delete(initial.id);
                      setForm(p => ({ ...p, idLocked: false, id: buildQuestionId(otherIds, p.journey, p.macro_step, p.touchpoint) }));
                    }}>
                      <Icon d={IC.reset} size={12}/> Auto
                    </button>
                  )}
                </div>
                {idDup && <small style={{ color: "var(--destructive)", marginTop: 4 }}>ID già usato da un'altra domanda.</small>}
              </label>
            </div>
          </section>

          <section className="qe-section">
            <div className="qe-section-h">Contenuto</div>
            {isNew && (
              <label className="field">
                <span>Requisito sintetico (per i suggerimenti)</span>
                <input
                  placeholder='Es: "le tabelle dei costi sono leggibili anche con zoom e screen reader"'
                  value={form.requirement}
                  onChange={(e) => {
                    const requirement = e.target.value;
                    setForm(prev => refillSuggestions({ ...prev, requirement, autoFill: true }));
                  }} />
              </label>
            )}
            <label className="field">
              <span>Domanda (it)</span>
              <textarea className="qe-textarea" rows={2}
                value={form.question_it}
                onChange={(e) => setForm(p => ({ ...p, question_it: e.target.value, autoFill: false }))} />
            </label>
            <label className="field">
              <span>Rationale (it)</span>
              <textarea className="qe-textarea" rows={3}
                value={form.rationale_it}
                onChange={(e) => setForm(p => ({ ...p, rationale_it: e.target.value }))} />
            </label>
          </section>

          <section className="qe-section">
            <div className="qe-section-h">Criteri di conformità</div>
            <label className="field">
              <span><span className="dot-sw full"/> Piena aderenza</span>
              <textarea className="qe-textarea" rows={2}
                value={form.conformity_criteria.full_compliance}
                onChange={(e) => setForm(p => ({ ...p, conformity_criteria: { ...p.conformity_criteria, full_compliance: e.target.value } }))} />
            </label>
            <label className="field">
              <span><span className="dot-sw part"/> Barriera parziale</span>
              <textarea className="qe-textarea" rows={2}
                value={form.conformity_criteria.partial_barrier}
                onChange={(e) => setForm(p => ({ ...p, conformity_criteria: { ...p.conformity_criteria, partial_barrier: e.target.value } }))} />
            </label>
            <label className="field">
              <span><span className="dot-sw ko"/> KO critico</span>
              <textarea className="qe-textarea" rows={2}
                value={form.conformity_criteria.critical_ko}
                onChange={(e) => setForm(p => ({ ...p, conformity_criteria: { ...p.conformity_criteria, critical_ko: e.target.value } }))} />
            </label>
            <label className="field">
              <span>Suggerimento di remediation</span>
              <textarea className="qe-textarea" rows={2}
                value={form.remediation_hint_it}
                onChange={(e) => setForm(p => ({ ...p, remediation_hint_it: e.target.value }))} />
            </label>
          </section>

          <section className="qe-section">
            <div className="qe-section-h" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>Standard di riferimento</span>
              <span style={{ color: "var(--muted-foreground)", fontWeight: 500 }}>
                · {form.standards.length} selezionati
              </span>
              <span style={{ flex: 1 }} />
              <button className="conf-pill" data-active={stdShowSelectedOnly}
                onClick={() => setStdShowSelectedOnly(v => !v)}
                style={{ padding: "3px 9px", fontSize: 11 }}>
                Solo selezionati
              </button>
            </div>
            <div className="list-search">
              <Icon d={IC.search} size={14} />
              <input
                placeholder="Cerca per standard, clausola o titolo…"
                value={stdSearch}
                onChange={(e) => setStdSearch(e.target.value)} />
              {stdSearch && (
                <button className="list-search-clear" onClick={() => setStdSearch("")} title="Cancella ricerca">
                  <Icon d={IC.x} size={12} />
                </button>
              )}
            </div>
            <div className="qe-std-list">
              {filteredStandards.length === 0 ? (
                <div className="qe-std-empty">Nessuno standard corrisponde alla ricerca.</div>
              ) : filteredStandards.map(({ s, i }) => (
                <label key={i} className="qe-std-item" data-active={form.standards.includes(i)}>
                  <input type="checkbox" checked={form.standards.includes(i)} onChange={() => toggleStandard(i)} />
                  <div className="qe-std-text">
                    <div className="qe-std-name">{s.standard}</div>
                    <div className="qe-std-clause">{s.clause}{s.clause_title_it ? ` — ${s.clause_title_it}` : ""}</div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <section className="qe-section">
            <div className="qe-section-h">Tag</div>
            <div className="qe-tag-row">
              {(form.tags || []).map(t => (
                <span key={t} className="qe-tag">
                  {t}
                  <button onClick={() => removeTag(t)} title="Rimuovi tag"><Icon d={IC.x} size={10}/></button>
                </span>
              ))}
              <input className="qe-tag-input"
                placeholder="aggiungi tag…"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }} />
            </div>
          </section>
        </div>
        <div className="modal-foot">
          <button className="btn" data-variant="ghost" onClick={onClose}>Annulla</button>
          <button className="btn" data-variant="primary" disabled={!valid} onClick={submit}>
            {isNew ? "Aggiungi" : "Aggiorna"}
          </button>
        </div>
      </div>
    </div>
  );
}

window.AuditApp = App;
