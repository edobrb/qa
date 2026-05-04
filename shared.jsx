// Shared atoms & utilities used across the app.

const { useState, useMemo, useEffect, useRef, useCallback } = React;

// ----- Icons (Polar style: 16px, currentColor, 2px stroke, round joins) -----
const Icon = ({ d, size = 16, fill = "none", className = "icon" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true">
    {typeof d === "string" ? <path d={d} /> : d}
  </svg>
);

const IC = {
  check:    "M20 6 9 17l-5-5",
  x:        "M18 6 6 18 M6 6l12 12",
  chevR:    "m9 18 6-6-6-6",
  chevL:    "m15 18-6-6 6-6",
  chevD:    "m6 9 6 6 6-6",
  chevU:    "m6 15 6-6 6 6",
  flag:     "M4 22V4 M4 4h12l-2 4 2 4H4",
  search:   <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
  bookmark: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
  warn:     <><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></>,
  alert:    <><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></>,
  doc:      <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>,
  upload:   <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></>,
  filter:   "M3 6h18 M6 12h12 M10 18h4",
  list:     <><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><circle cx="3.5" cy="6" r=".5"/><circle cx="3.5" cy="12" r=".5"/><circle cx="3.5" cy="18" r=".5"/></>,
  grid:     <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
  dash:     <><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></>,
  back:     "M19 12H5 M12 19l-7-7 7-7",
  more:     <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
  user:     <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  cal:      <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4 M8 2v4 M3 10h18"/></>,
  bank:     <><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-4 7 4"/><path d="M5 10v11 M9 10v11 M15 10v11 M19 10v11"/></>,
  link:     <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
  reset:    <><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></>,
  trash:    <><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></>,
  save:     <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></>,
  edit:     <><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></>,
  plus:     "M12 5v14 M5 12h14",
  info:     <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></>,
};

// ----- Helpers -----
const STATUS_KEY = (lvl) => ({
  full_compliance: "full",
  partial_barrier: "part",
  critical_ko: "ko",
  to_review: "rev",
  not_applicable: "na",
}[lvl] || "todo");

const STATUS_LABEL = (lvl) => {
  if (!lvl) return "Da compilare";
  const m = window.AUDIT_DATA.CONF_LEVELS[lvl];
  return m ? m.label : "—";
};

// useAuditState: state hook with localStorage persistence (debounced).
function useAuditState(seed) {
  const [state, setState] = useState(() => ({ ...seed }));
  const persistRef = useRef(null);

  useEffect(() => {
    if (persistRef.current) clearTimeout(persistRef.current);
    persistRef.current = setTimeout(() => {
      window.AUDIT_DATA.persistence?.saveStates(state);
    }, 250);
    return () => {
      if (persistRef.current) clearTimeout(persistRef.current);
    };
  }, [state]);

  const update = (id, patch) => setState((s) => ({
    ...s,
    [id]: { ...(s[id] || { conformity: null, note: "", flag: false }), ...patch },
  }));
  const reset = () => {
    setState({});
    window.AUDIT_DATA.persistence?.saveStates({});
  };
  return [state, update, reset, setState];
}

const Pill = ({ status, children }) => (
  <span className={"status-pill " + (status || "todo")}>
    <span className={"dot-sw " + (status || "")}></span>
    {children}
  </span>
);

// Tally helpers used by dashboards
function tally(questions, states) {
  const t = { full: 0, part: 0, ko: 0, rev: 0, na: 0, todo: 0, total: questions.length, flagged: 0 };
  for (const q of questions) {
    const s = states[q.id] || {};
    t[STATUS_KEY(s.conformity)] = (t[STATUS_KEY(s.conformity)] || 0) + 1;
    if (s.flag) t.flagged++;
  }
  t.completed = t.full + t.part + t.ko + t.na;
  t.pct = t.total ? Math.round((t.completed / t.total) * 100) : 0;
  return t;
}

// ---- Export helpers ----
function downloadBlob(filename, data, mime) {
  const blob = new Blob([data], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
function csvEscape(v) {
  if (v == null) return "";
  const s = String(v);
  if (/[",\n;]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
function exportCSV(questions, states, meta) {
  const D = window.AUDIT_DATA;
  const head = [
    "id","journey","macro_step","touchpoint","pour_principle",
    "affected_user_categories","standards","conformity_assessment",
    "evidence_notes_it","follow_up","question_it","remediation_hint_it"
  ];
  const lines = [head.map(csvEscape).join(",")];
  for (const q of questions) {
    const s = states[q.id] || {};
    lines.push([
      q.id, q.journey, q.macro_step, q.touchpoint, q.pour_principle,
      (q.affected_user_categories || []).join("|"),
      (q.standards || []).map(x => `${x.standard} ${x.clause}`).join("; "),
      s.conformity || "",
      s.note || "",
      s.flag ? "yes" : "",
      q.question_it,
      q.remediation_hint_it || "",
    ].map(csvEscape).join(","));
  }
  const date = new Date().toISOString().slice(0,10);
  const client = (meta?.client || "audit").toLowerCase().replace(/\s+/g,"-");
  downloadBlob(`audit-a11y_${client}_${date}.csv`, "\ufeff" + lines.join("\n"), "text/csv;charset=utf-8");
}
function exportJSON(questions, states, meta) {
  const D = window.AUDIT_DATA;
  const out = {
    schema: "audit-a11y-results/v1",
    exported_at: new Date().toISOString(),
    framework_version: D.AUDIT_META.framework_version,
    project: meta || {},
    results: questions.map(q => {
      const s = states[q.id] || {};
      return {
        id: q.id, journey: q.journey, macro_step: q.macro_step,
        touchpoint: q.touchpoint, pour_principle: q.pour_principle,
        conformity_assessment: s.conformity || null,
        evidence_notes_it: s.note || "",
        follow_up: !!s.flag,
      };
    }),
  };
  const date = new Date().toISOString().slice(0,10);
  const client = (meta?.client || "audit").toLowerCase().replace(/\s+/g,"-");
  downloadBlob(`audit-a11y_${client}_${date}.json`, JSON.stringify(out, null, 2), "application/json");
}

window.AppShared = { Icon, IC, STATUS_KEY, STATUS_LABEL, useAuditState, Pill, tally, exportCSV, exportJSON, downloadBlob };
