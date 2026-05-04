// data.jsx — production data layer.
// Reads window.AUDIT_FRAMEWORKS (loaded from framework.js, generated from questions.json)
// and exposes window.AUDIT_DATA in the shape the UI components consume.

(function () {
  const BUILTIN = Array.isArray(window.AUDIT_FRAMEWORKS) ? window.AUDIT_FRAMEWORKS : [];
  if (!BUILTIN.length) {
    console.error("AUDIT_FRAMEWORKS not loaded — framework.js must be included before data.jsx");
    return;
  }

  // ---------- Framework override / custom-framework persistence ----------
  // Built-in frameworks live in framework.js. The user can edit them via the UI;
  // their changes are stored as a per-id override. Imported frameworks (entirely
  // user-supplied) live alongside in the same store under their own id.
  const FW_STORE_KEY = "audit_a11y_frameworks_v1";
  function loadFrameworkStore() {
    try { return JSON.parse(localStorage.getItem(FW_STORE_KEY) || "{}") || {}; }
    catch (_) { return {}; }
  }
  function saveFrameworkStore(store) {
    try { localStorage.setItem(FW_STORE_KEY, JSON.stringify(store)); } catch (_) {}
  }
  function saveFramework(id, framework) {
    const store = loadFrameworkStore();
    store[id] = framework;
    saveFrameworkStore(store);
  }
  function resetFramework(id) {
    const store = loadFrameworkStore();
    delete store[id];
    saveFrameworkStore(store);
  }
  function isBuiltinFramework(id) {
    return BUILTIN.some((f, i) => (f.metadata.id || `fw_${i}`) === id);
  }

  // A stored framework must at least carry metadata/legends/journeys with both
  // current_account and mortgage sections — otherwise the rest of the app crashes.
  function isValidFramework(f) {
    return !!(f && f.metadata && f.legends && f.legends.touchpoints_it
      && f.journeys && f.journeys.current_account && f.journeys.mortgage
      && Array.isArray(f.journeys.current_account.questions)
      && Array.isArray(f.journeys.mortgage.questions)
      && Array.isArray(f.journeys.current_account.macro_steps)
      && Array.isArray(f.journeys.mortgage.macro_steps));
  }

  const _store = loadFrameworkStore();

  // Compose the full framework list: built-ins (with valid overrides applied) + custom imports.
  const FRAMEWORKS = [];
  const _seen = new Set();
  for (let i = 0; i < BUILTIN.length; i++) {
    const id = BUILTIN[i].metadata.id || `fw_${i}`;
    const override = _store[id];
    FRAMEWORKS.push(isValidFramework(override) ? override : BUILTIN[i]);
    _seen.add(id);
  }
  for (const id of Object.keys(_store)) {
    if (_seen.has(id)) continue;
    if (isValidFramework(_store[id])) FRAMEWORKS.push(_store[id]);
  }

  const FRAMEWORKS_LIST = FRAMEWORKS.map((f, i) => ({
    id: f.metadata.id || `fw_${i}`,
    name: f.metadata.name_it || f.metadata.title_it || `Framework ${i + 1}`,
    version: f.metadata.version || "",
    custom: !isBuiltinFramework(f.metadata.id || `fw_${i}`),
    overridden: isBuiltinFramework(f.metadata.id || `fw_${i}`) && !!_store[f.metadata.id || `fw_${i}`],
  }));

  const META_KEY = "audit_a11y_meta_v1";
  let _savedMeta = {};
  try { _savedMeta = JSON.parse(localStorage.getItem(META_KEY) || "{}") || {}; } catch (_) {}
  const _selectedId = _savedMeta.framework_id;
  const F = FRAMEWORKS.find((f, i) => (f.metadata.id || `fw_${i}`) === _selectedId) || FRAMEWORKS[0];
  const FRAMEWORK_ID = F.metadata.id || "fw_0";

  // ---------- Touchpoint code (for IDs / chips) ----------
  const TP_CODE = {
    home_banking_app: "HBA", home_banking_web: "HBW", institutional_website: "WEB",
    web_documents: "WDC", email_push_notifications: "EML", payment_app_wallet: "WAL",
    chatbot_virtual_assistant: "BOT", digital_media: "MED", paper_documents: "PAP",
    tickets_receipts: "RIC", informational_material: "INF", atm_csa_self_service: "ATM",
    pos_payment_terminals: "POS", credit_card: "CRD", check: "ASS",
    graphometric_tablet_e_signature: "TAB", branch: "FIL", phone_banking: "TEL",
    call_center: "CAL", branch_consultant: "CON",
  };

  // ---------- Touchpoint short labels (UI chips) ----------
  const TOUCHPOINT_SHORT = {
    home_banking_app: "App HB", home_banking_web: "HB web", institutional_website: "Sito",
    web_documents: "Doc web", email_push_notifications: "Email/push", payment_app_wallet: "Wallet",
    chatbot_virtual_assistant: "Chatbot", digital_media: "Media", paper_documents: "Cartaceo",
    tickets_receipts: "Ricevute", informational_material: "Info", atm_csa_self_service: "ATM",
    pos_payment_terminals: "POS", credit_card: "Carta", check: "Assegno",
    graphometric_tablet_e_signature: "Tavoletta", branch: "Filiale", phone_banking: "Phone",
    call_center: "Call center", branch_consultant: "Consulente",
  };

  // Use legends from framework where present, fall back to overrides
  const TOUCHPOINT_LABELS = {};
  for (const [k, v] of Object.entries(F.legends.touchpoints_it)) {
    // capitalize first letter for UI display
    TOUCHPOINT_LABELS[k] = v.charAt(0).toUpperCase() + v.slice(1);
  }

  // ---------- Macro-step descriptors with short codes for the heatmap ----------
  const STEP_CODES = {
    search_and_orientation: "ORI",
    account_opening: "APE",
    account_operations: "OPE",
    account_closure: "CHI",
    exploration_and_first_contact: "EXP",
    documentation_and_underwriting: "DOC",
    deliberation_and_proposal: "DEL",
    signing_and_notary_deed: "STI",
    post_disbursement_and_repayment: "POS",
  };
  const STEP_SHORT = {
    search_and_orientation: "Orientamento",
    account_opening: "Apertura",
    account_operations: "Operatività",
    account_closure: "Chiusura",
    exploration_and_first_contact: "Esplorazione",
    documentation_and_underwriting: "Istruttoria",
    deliberation_and_proposal: "Delibera",
    signing_and_notary_deed: "Stipula",
    post_disbursement_and_repayment: "Post-erogazione",
  };

  const MACRO_STEPS = {
    current_account: F.journeys.current_account.macro_steps.map(s => ({
      id: s.id, code: STEP_CODES[s.id] || s.id.slice(0,3).toUpperCase(),
      name: s.name_it, short: STEP_SHORT[s.id] || s.name_it,
      description: s.description_it,
      applicable_touchpoints: s.applicable_touchpoints,
    })),
    mortgage: F.journeys.mortgage.macro_steps.map(s => ({
      id: s.id, code: STEP_CODES[s.id] || s.id.slice(0,3).toUpperCase(),
      name: s.name_it, short: STEP_SHORT[s.id] || s.name_it,
      description: s.description_it,
      applicable_touchpoints: s.applicable_touchpoints,
    })),
  };

  const POUR_LABEL = {
    perceivable: "Percepibile",
    operable: "Utilizzabile",
    understandable: "Comprensibile",
    robust: "Robusto",
  };

  const USER_CAT_LABEL = {
    auditory: "Uditiva",
    visual: "Visiva",
    motor: "Motoria",
    cognitive: "Cognitiva",
    elderly_temporary_situational: "Anziani / temp.",
  };

  const CONF_LEVELS = {
    full_compliance: { label: "Piena aderenza", short: "OK", color: "success" },
    partial_barrier: { label: "Barriera parziale", short: "Parziale", color: "warning" },
    critical_ko:     { label: "KO critico",       short: "KO",       color: "destructive" },
    not_applicable:  { label: "Non applicabile",  short: "N/A",      color: "muted" },
    to_review:       { label: "Da rivedere",      short: "Rivedere", color: "info" },
  };

  // ---------- Normalize all questions to a single flat array with UI-friendly aliases ----------
  // Question.standards is stored as integer indices into F.standards_catalog — resolve here.
  const STANDARDS_CATALOG = F.standards_catalog || [];
  const resolveStandards = refs =>
    (refs || []).map(r => (typeof r === "number" ? STANDARDS_CATALOG[r] : r)).filter(Boolean);

  const ALL = [];
  for (const j of ["current_account", "mortgage"]) {
    for (const q of F.journeys[j].questions) {
      const standards = resolveStandards(q.standards);
      ALL.push({
        // identity / classification
        id: q.id,
        journey: q.journey,
        macro_step: q.macro_step,
        touchpoint: q.touchpoint,
        // schema-faithful fields
        question_it: q.question_it,
        rationale_it: q.rationale_it,
        pour_principle: q.pour_principle,
        affected_user_categories: q.affected_user_categories,
        standards,
        conformity_criteria: q.conformity_criteria,
        remediation_hint_it: q.remediation_hint_it,
        tags: q.tags,
        // UI aliases (legacy code paths)
        text: q.question_it,
        rationale: q.rationale_it,
        pour: q.pour_principle,
        cats: q.affected_user_categories,
        crit: q.conformity_criteria,
      });
    }
  }

  // ---------- Audit metadata (project header) ----------
  const AUDIT_META = {
    framework_id: FRAMEWORK_ID,
    framework_version: F.metadata.version,
    framework_date: F.metadata.date,
    framework_title: F.metadata.title_it,
    framework_name: F.metadata.name_it || F.metadata.title_it,
    total_questions: F.statistics.total_questions,
  };

  // ---------- Persistence: load any saved progress from localStorage ----------
  const STORAGE_KEY = "audit_a11y_state_v1";
  function loadStates() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch (_) { return {}; }
  }
  function saveStates(states) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(states)); }
    catch (_) {}
  }

  function loadMeta() {
    try {
      const raw = localStorage.getItem(META_KEY);
      if (!raw) return {};
      return JSON.parse(raw) || {};
    } catch (_) { return {}; }
  }
  function saveMeta(meta) {
    try { localStorage.setItem(META_KEY, JSON.stringify(meta)); }
    catch (_) {}
  }

  window.AUDIT_DATA = {
    TOUCHPOINT_LABELS,
    TOUCHPOINT_SHORT,
    TP_CODE,
    STEP_CODES,
    STEP_SHORT,
    MACRO_STEPS,
    POUR_LABEL,
    USER_CAT_LABEL,
    CONF_LEVELS,
    QUESTIONS: ALL,
    SEED_STATES: loadStates(),
    AUDIT_META,
    FRAMEWORKS_LIST,
    FRAMEWORK_ID,
    FRAMEWORK: F,
    LEGENDS: F.legends,
    STATISTICS: F.statistics,
    STANDARDS_CATALOG,
    persistence: {
      loadStates, saveStates, loadMeta, saveMeta,
      saveFramework, resetFramework, isBuiltinFramework,
      STORAGE_KEY, META_KEY, FW_STORE_KEY,
    },
  };
})();
