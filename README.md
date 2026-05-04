# Q&A Touch Point — Audit Accessibilità Banking

A single-page tablet/desktop app for running on-site **accessibility audits** of banking customer journeys (apertura conto corrente, mutuo prima casa). It walks an auditor through a structured framework of 276 questions, organized as a **touchpoint × macro-step** matrix, and produces a portable record of evidence, conformity ratings, and follow-ups.

The app runs entirely in the browser. State is persisted to `localStorage`; nothing is sent to a server. Audits can be exported as **CSV** (for reporting) or **JSON** (for backup / re-import on another device).

---

## What's inside

| Area | What it does |
|---|---|
| **Mappa touchpoint** | Heatmap of the journey. Rows = touchpoint (filiale fisica, app, sito, ATM…), columns = macro-step. Cells colored by share of conformi answers; red left edge marks KO critici. Click a cell, row, or column to drill into the matching question list. |
| **Lista domande** | Filterable list grouped by macro-step. Filters: testo libero, stato (Da compilare / KO / Parziali / Piena aderenza / Da rivedere / Follow-up), principio POUR, categoria utenti impattata. |
| **Domanda** | Single-question view. Pick conformity (full / partial / KO / da rivedere / non applicabile), flag for follow-up, write evidence notes, see remediation hint, standard references, POUR principle, affected user categories, tags. ←/→ to navigate, Esc to back. |
| **Dashboard** | Aggregate metrics across the audit — overall completion, KO breakdown, POUR distribution, etc. |
| **Esporta / Importa** | CSV (foglio di calcolo) · JSON (backup completo, re-importabile). Project meta (cliente, data, auditor, scope) is included in every export. |

Two journeys ship in the framework: **Conto corrente** and **Mutuo prima casa**. Language is Italian throughout.

---

## Getting started

The app is plain HTML + Babel-transpiled JSX. No build step.

```sh
# from the project root, serve over http (any static server works)
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

Opening `index.html` directly via `file://` will work in some browsers but may break the JSON import (FileReader) and font loading; using a local server is recommended.

On first launch the app prompts for project metadata (cliente, data visita, auditor, scope). All subsequent answers are saved automatically to `localStorage` under the active client.

---

## File layout

```
index.html         Entry point. Loads React 18 + Babel standalone, then the JSX modules.
framework.js       The 276-question framework (questions, touchpoints, macro-steps, standards, POUR mapping). Generated from questions.json.
data.jsx           Wraps framework.js and exposes window.AUDIT_DATA: QUESTIONS, MACRO_STEPS, TOUCHPOINT_LABELS, CONF_LEVELS, persistence helpers, etc.
shared.jsx         window.AppShared — Icon set (IC), Pill, useAuditState hook, tally(), STATUS_KEY(), exportCSV / exportJSON.
dashboard.jsx      window.DashboardView — aggregate metrics view.
app.jsx            window.AuditApp — top-level App, Sidebar, TopBar, MapView, QListView, QuestionView, MetaDialog, ConfirmDialog.
polar.css          Design tokens (colors, type, spacing, radii). data-theme="light" on <body>.
app.css            App-specific styles built on top of polar tokens.
```

Cache-busting is done via `?v=N` query strings on the `<link>` and `<script>` tags in `index.html`. Bump the number when shipping a CSS/JS change you want to force on a returning auditor.

---

## State model

State lives in two `localStorage` keys (managed by `data.jsx` / `shared.jsx`):

- **Project meta** — `{ client, visit_date, auditor, scope }`.
- **Per-question state** — `{ [questionId]: { conformity, note, flag } }`, where `conformity ∈ { full_compliance | partial_barrier | critical_ko | to_review | not_applicable | null }`.

The JSON export is the canonical interchange format. A re-imported JSON fully replaces the current per-question state (after a confirmation reload).

---

## Conventions

- **Italian copy.** All user-facing strings are in Italian — UI labels, question text, status names. Keep new copy consistent.
- **Conformity vocabulary.** Use the five canonical levels above. Don't invent new ones; extend `CONF_LEVELS` in `data.jsx` if you really need to.
- **No inline SVGs beyond icons.** Iconography goes through `<Icon d={IC.foo} />` in `shared.jsx`. Add new icons to `IC`, don't drop raw `<svg>` into views.
- **No new dependencies without a reason.** The app is intentionally a single-bundle, no-build, no-network-at-runtime tool so it can run on a tablet inside a bank branch with patchy wifi.

---

## License

Internal tool. Not for redistribution.
