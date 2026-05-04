// Dashboard view — KPI grid, POUR coverage, top issues. Production version.
const { Icon, IC, STATUS_KEY, Pill, tally } = window.AppShared;
const D2 = window.AUDIT_DATA;

function DashboardView({ states, project }) {
  const all = D2.QUESTIONS;
  const t = tally(all, states);

  const ccQs = all.filter(q => q.journey === "current_account");
  const muQs = all.filter(q => q.journey === "mortgage");
  const ccT = tally(ccQs, states);
  const muT = tally(muQs, states);

  const pourMatrix = React.useMemo(() => {
    const result = [];
    for (const j of ["current_account", "mortgage"]) {
      for (const s of D2.MACRO_STEPS[j]) {
        const qs = all.filter(q => q.journey === j && q.macro_step === s.id);
        const cell = { perceivable: 0, operable: 0, understandable: 0, robust: 0, ko: 0 };
        for (const q of qs) {
          cell[q.pour_principle]++;
          if (states[q.id]?.conformity === "critical_ko") cell.ko++;
        }
        result.push({ journey: j, step: s, cell, count: qs.length });
      }
    }
    return result;
  }, [states]);

  const criticalIssues = all
    .filter(q => states[q.id]?.conformity === "critical_ko")
    .map(q => ({ q, s: states[q.id] }));

  const flagged = all
    .filter(q => states[q.id]?.flag)
    .map(q => ({ q, s: states[q.id] }));

  const tpBreakdown = React.useMemo(() => {
    const map = {};
    for (const q of all) {
      const k = q.touchpoint;
      if (!map[k]) map[k] = { full: 0, part: 0, ko: 0, rev: 0, na: 0, todo: 0, total: 0 };
      const s = STATUS_KEY(states[q.id]?.conformity);
      map[k][s]++;
      map[k].total++;
    }
    return Object.entries(map)
      .map(([k, v]) => ({ tp: k, ...v, issues: v.ko + v.part }))
      .sort((a, b) => (b.ko * 3 + b.part) - (a.ko * 3 + a.part))
      .slice(0, 10);
  }, [states]);

  // User category impact: for each category, how many questions touching that category
  // are KO / parziali / piena aderenza / da compilare. Severity score weights KO heavily.
  const userImpact = React.useMemo(() => {
    const cats = ["visual", "auditory", "motor", "cognitive", "elderly_temporary_situational"];
    const rows = cats.map(c => ({ cat: c, full: 0, part: 0, ko: 0, rev: 0, na: 0, todo: 0, total: 0, koIds: [] }));
    const idx = Object.fromEntries(rows.map((r, i) => [r.cat, i]));
    for (const q of all) {
      for (const c of (q.affected_user_categories || [])) {
        const r = rows[idx[c]];
        if (!r) continue;
        const k = STATUS_KEY(states[q.id]?.conformity);
        r[k]++; r.total++;
        if (k === "ko") r.koIds.push(q.id);
      }
    }
    for (const r of rows) {
      r.severity = r.total ? (r.ko * 3 + r.part) / r.total : 0;
      r.issues = r.ko + r.part;
      r.compliancePct = r.total ? Math.round((r.full / r.total) * 100) : 0;
    }
    rows.sort((a, b) => b.severity - a.severity || b.ko - a.ko);
    return rows;
  }, [states]);
  const maxIssues = Math.max(1, ...userImpact.map(r => r.issues));

  return (
    <div className="dash">
      <div className="dash-head">
        <h1>{project?.client || "Audit accessibilità"}</h1>
        <span className="sub">{project?.scope || "Conto corrente + Mutuo prima casa"}</span>
        <span style={{ flex: 1 }} />
        <span className="sub">
          {project?.visit_date ? `Visita del ${project.visit_date}` : ""}
          {project?.auditor ? ` · auditor ${project.auditor}` : ""}
        </span>
      </div>

      <div className="card span-3">
        <div className="card-h">Avanzamento</div>
        <div className="kpi-row">
          <div className="kpi">{t.pct}%</div>
          <div className="delta">{t.completed} / {t.total} compilate</div>
        </div>
        <div className="bar-stack">
          <span style={{ width: `${(t.full/t.total)*100}%`, background: "var(--success)" }} />
          <span style={{ width: `${(t.part/t.total)*100}%`, background: "var(--warning)" }} />
          <span style={{ width: `${(t.ko/t.total)*100}%`, background: "var(--destructive)" }} />
          <span style={{ width: `${(t.rev/t.total)*100}%`, background: "var(--info)" }} />
          <span style={{ width: `${(t.na/t.total)*100}%`, background: "var(--muted-foreground)" }} />
        </div>
        <div className="legend-row">
          <span><span className="sw" style={{ background: "var(--success)" }} />OK {t.full}</span>
          <span><span className="sw" style={{ background: "var(--warning)" }} />Parz {t.part}</span>
          <span><span className="sw" style={{ background: "var(--destructive)" }} />KO {t.ko}</span>
          <span><span className="sw" style={{ background: "var(--info)" }} />Rivedere {t.rev}</span>
        </div>
      </div>

      <div className="card span-3">
        <div className="card-h">KO critici</div>
        <div className="kpi-row">
          <div className="kpi" style={{ color: "var(--destructive)" }}>{t.ko}</div>
          <div className="delta">su {t.total} domande</div>
        </div>
        <div className="sub" style={{ fontSize: 12, color: "var(--muted-foreground)" }}>
          {t.ko > 0 ? "Bloccanti per uno o più gruppi di utenti." : "Nessun KO critico identificato."}
        </div>
      </div>

      <div className="card span-3">
        <div className="card-h">Barriere parziali</div>
        <div className="kpi-row">
          <div className="kpi" style={{ color: "var(--warning-foreground)" }}>{t.part}</div>
          <div className="delta">remediation pianificabile</div>
        </div>
        <div className="sub" style={{ fontSize: 12, color: "var(--muted-foreground)" }}>
          Conformità raggiungibile con interventi mirati.
        </div>
      </div>

      <div className="card span-3">
        <div className="card-h">Da seguire con cliente</div>
        <div className="kpi-row">
          <div className="kpi">{t.flagged}</div>
          <div className="delta">flag follow-up attivi</div>
        </div>
        <div className="sub" style={{ fontSize: 12, color: "var(--muted-foreground)" }}>
          Domande aperte da chiarire nella prossima sessione.
        </div>
      </div>

      <div className="card span-12">
        <div className="card-h">Utenti più impattati</div>
        <div className="sub" style={{ fontSize: 12, color: "var(--muted-foreground)", marginBottom: 14 }}>
          Numero di domande non conformi per categoria di utenti. Le categorie sono ordinate per gravità (KO ponderati 3×).
        </div>
        <div className="impact">
          {userImpact.map(r => {
            const koPct = r.total ? (r.ko / r.total) * 100 : 0;
            const partPct = r.total ? (r.part / r.total) * 100 : 0;
            const fullPct = r.total ? (r.full / r.total) * 100 : 0;
            const revPct = r.total ? (r.rev / r.total) * 100 : 0;
            const naPct = r.total ? (r.na / r.total) * 100 : 0;
            const issueWidth = (r.issues / maxIssues) * 100;
            return (
              <div key={r.cat} className="impact-row">
                <div className="impact-cat">
                  <span className="impact-name">{D2.USER_CAT_LABEL[r.cat]}</span>
                  <span className="impact-meta">
                    {r.total} domande · <strong style={{color:"var(--destructive)"}}>{r.ko} KO</strong> · {r.part} parziali
                  </span>
                </div>
                <div className="impact-bars">
                  <div className="impact-issues" title={`${r.issues} domande problematiche su ${r.total}`}>
                    <div className="ii-fill" style={{ width: `${issueWidth}%` }}>
                      <span className="ii-ko" style={{ flex: r.ko }} />
                      <span className="ii-part" style={{ flex: r.part }} />
                    </div>
                    <span className="ii-num">{r.issues}</span>
                  </div>
                  <div className="bar-stack" style={{ height: 6 }}>
                    <span style={{ width: `${fullPct}%`, background: "var(--success)" }} />
                    <span style={{ width: `${partPct}%`, background: "var(--warning)" }} />
                    <span style={{ width: `${koPct}%`, background: "var(--destructive)" }} />
                    <span style={{ width: `${revPct}%`, background: "var(--info)" }} />
                    <span style={{ width: `${naPct}%`, background: "var(--muted-foreground)" }} />
                  </div>
                </div>
                <div className="impact-pct">
                  <strong>{r.compliancePct}%</strong>
                  <span style={{fontSize:11, color:"var(--muted-foreground)"}}>conformi</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card span-6">
        <div className="card-h">Stato per journey</div>
        <JourneyBar label="Conto corrente" t={ccT} />
        <JourneyBar label="Mutuo prima casa" t={muT} />
      </div>

      <div className="card span-6">
        <div className="card-h">Distribuzione POUR per macro-step</div>
        <div className="pour-mat">
          <div className="pm-h">Macro-step</div>
          <div className="pm-h">Percepibile</div>
          <div className="pm-h">Operabile</div>
          <div className="pm-h">Comprensibile</div>
          <div className="pm-h">Robusto</div>
          {pourMatrix.map((row, i) => (
            <React.Fragment key={i}>
              <div className="pm-r">
                <div style={{ fontSize: 11, color: "var(--muted-foreground)" }}>
                  {row.journey === "current_account" ? "CC" : "MU"}
                </div>
                {row.step.short}
              </div>
              {["perceivable", "operable", "understandable", "robust"].map(p => {
                const v = row.cell[p];
                const cls = v === 0 ? "" : v >= 6 ? "hot" : "warm";
                return <div key={p} className={"pm-c " + cls}>{v || "—"}</div>;
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="card span-7">
        <div className="card-h">KO critici da risolvere</div>
        <div className="list">          {criticalIssues.length === 0 && (
            <div style={{ fontSize: 13, color: "var(--muted-foreground)", padding: "12px 0" }}>
              Nessun KO critico identificato. Continua a compilare.
            </div>
          )}
          {criticalIssues.slice(0, 12).map(({ q, s }) => (
            <div key={q.id} className="li">
              <span className="li-id">{q.id}</span>
              <span className="li-title">{q.question_it}</span>
              <span className="li-tag" style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}>
                {D2.TOUCHPOINT_SHORT[q.touchpoint]}
              </span>
              <Pill status="ko">KO</Pill>
            </div>
          ))}
          {criticalIssues.length > 12 && (
            <div style={{ fontSize: 11, color: "var(--muted-foreground)", padding: "8px 0 0", fontStyle: "italic" }}>
              + altri {criticalIssues.length - 12} KO critici. Filtra per "KO critici" nella lista per vederli tutti.
            </div>
          )}
        </div>
      </div>

      <div className="card span-5">
        <div className="card-h">Touchpoint con più barriere</div>
        <div className="list">
          {tpBreakdown.map(row => (
            <div key={row.tp} className="li">
              <span className="li-title" style={{ fontWeight: 500 }}>{D2.TOUCHPOINT_LABELS[row.tp]}</span>
              <div style={{ display: "flex", gap: 6, alignItems: "center", minWidth: 160 }}>
                <div className="bar-stack" style={{ width: 110 }}>
                  <span style={{ width: `${(row.full/row.total)*100}%`, background: "var(--success)" }} />
                  <span style={{ width: `${(row.part/row.total)*100}%`, background: "var(--warning)" }} />
                  <span style={{ width: `${(row.ko/row.total)*100}%`, background: "var(--destructive)" }} />
                  <span style={{ width: `${(row.rev/row.total)*100}%`, background: "var(--info)" }} />
                </div>
                <span style={{ fontSize: 11, color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums", minWidth: 36, textAlign: "right" }}>
                  {row.ko + row.part}/{row.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {flagged.length > 0 && (
        <div className="card span-12">
          <div className="card-h">Follow-up con cliente</div>
          <div className="list">
            {flagged.map(({ q, s }) => (
              <div key={q.id} className="li">
                <span className="li-id">{q.id}</span>
                <span className="li-title">
                  {q.question_it}
                  {s.note && <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>↳ {s.note}</div>}
                </span>
                <Pill status={STATUS_KEY(s.conformity)}>
                  {s.conformity ? D2.CONF_LEVELS[s.conformity].short : "Aperta"}
                </Pill>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function JourneyBar({ label, t }) {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
        <span style={{ fontWeight: 500 }}>{label}</span>
        <span style={{ color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>
          {t.completed}/{t.total} · {t.pct}% · {t.ko} KO
        </span>
      </div>
      <div className="bar-stack">
        <span style={{ width: `${(t.full/t.total)*100}%`, background: "var(--success)" }} />
        <span style={{ width: `${(t.part/t.total)*100}%`, background: "var(--warning)" }} />
        <span style={{ width: `${(t.ko/t.total)*100}%`, background: "var(--destructive)" }} />
        <span style={{ width: `${(t.rev/t.total)*100}%`, background: "var(--info)" }} />
        <span style={{ width: `${(t.na/t.total)*100}%`, background: "var(--muted-foreground)" }} />
      </div>
    </div>
  );
}

window.DashboardView = DashboardView;
