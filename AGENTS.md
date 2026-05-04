# AGENTS.md

Instructions for AI agents working on this repo. Read this before making changes.

## What this project is

A browser-only accessibility audit app for banking journeys. JSX is loaded via `@babel/standalone` from CDN — there is **no build step, no bundler, no package.json, no node_modules**. Edits to `.jsx` / `.css` take effect on reload.

If you find yourself reaching for npm, webpack, vite, TypeScript, a test runner, or "let me just add a quick dependency" — stop. That is not the shape of this project.

## Architecture in 30 seconds

```
index.html
  ├─ React 18 (UMD, pinned)
  ├─ Babel standalone (pinned)
  ├─ framework.js          → window.FRAMEWORK_DATA (raw 276-question dataset)
  ├─ data.jsx              → window.AUDIT_DATA (curated facade + persistence)
  ├─ shared.jsx            → window.AppShared (Icon, IC, Pill, useAuditState, tally, exportCSV/JSON, STATUS_KEY)
  ├─ dashboard.jsx         → window.DashboardView
  └─ app.jsx               → window.AuditApp (root component)
```

**Each `<script type="text/babel">` gets its own scope.** Components communicate via `window.*` globals — that's why every module ends with `window.X = X`. If you split a new file, follow the same pattern. Do **not** use ES modules or `import`/`export`.

## Hard rules

1. **Don't add a build step.** No package.json, no bundler config, no transpile pipeline beyond the in-browser Babel that's already there.
2. **Don't use `type="module"` on script tags.** Babel-standalone doesn't play well with it and we rely on the global-scope pattern.
3. **Don't rename `const styles = {…}`** — that exact name is a known footgun across multiple Babel scripts. Use specific names (`mapStyles`, `qViewStyles`) or inline styles.
4. **Don't break the JSON export schema.** Re-imported audits depend on `results: [{ id, conformity_assessment, evidence_notes_it, follow_up }]`. If you extend it, extend additively.
5. **Don't change the five conformity levels** without updating: `data.jsx` (`CONF_LEVELS`), `shared.jsx` (`STATUS_KEY`, `tally`, `exportCSV`), `app.jsx` (QuestionView buttons, FilterChips), `dashboard.jsx`, and the heatmap color logic in `MapView`. They are coupled.
6. **Italian copy only** for anything the auditor sees. English is fine in code comments and dev tooling.
7. **No new runtime network calls.** The app is designed to work on patchy in-branch wifi. Google Fonts is the one tolerated exception (and even that should degrade gracefully).
8. **Don't recreate or copy branded UI** from real banks (Intesa, Unicredit, BPER, etc.). The app is a generic tool; client identity comes from the project metadata only.

## How to make changes

- **Add a new view** → make a new top-level component in `app.jsx` (or split into its own `.jsx` if large), add a `view` value, add a sidebar entry, wire `setView`.
- **Add a new filter on the question list** → extend `QListView`'s `filteredList` memo and add a `<FilterChips>` row.
- **Add a metric to the dashboard** → all aggregate logic should reuse `tally()` from `shared.jsx`. Don't reimplement counting.
- **Add an icon** → append to `IC` in `shared.jsx`. Use `<Icon d={IC.foo} />`. Keep paths simple (24×24 viewBox, single path preferred).
- **Add a new question/touchpoint/macro-step** → edit `framework.js`. Don't try to mutate `AUDIT_DATA` at runtime.
- **Bump `?v=N` in `index.html`** whenever you ship a CSS or JS change that returning auditors need to pick up.

## Testing your changes

There is no test runner. Verification is manual:

1. Serve the project (`python3 -m http.server` or equivalent) and open `index.html`.
2. Check the four views render: **Mappa**, **Lista**, **Domanda**, **Dashboard**.
3. Toggle between **Conto corrente** and **Mutuo prima casa**.
4. Pick a question, set conformity to each of the five levels, write a note, flag it, navigate ←/→.
5. Export CSV and JSON, then re-import the JSON and confirm state restores.
6. Refresh the page and confirm everything persisted.
7. Use `done` to surface `index.html` and check the console is clean. Then `fork_verifier_agent` for a full sweep.

## Persistence gotchas

- `localStorage` is keyed on the browser, not on the project metadata. Switching client mid-session does **not** swap state — auditors are expected to export JSON before starting a new client, then reset.
- The "Azzera risposte" button wipes per-question state but **keeps** project metadata.
- JSON import calls `location.reload()` to rehydrate cleanly. Don't try to swap state in place; the React tree assumes it owns the lifecycle.

## Style conventions

- Use design tokens from `polar.css` (`var(--muted-foreground)`, `var(--destructive)`, etc.) — do not hardcode hex values in component styles.
- Conformity colors map: `full → success`, `part → warning`, `ko → destructive`, `rev → info`, `na → muted-foreground`. The heatmap uses `oklch()` interpolation; if you change the scale, update the legend in `MapView` too.
- Tabular numbers everywhere a count is shown: `font-variant-numeric: tabular-nums`.
- JetBrains Mono for IDs and codes; Inter for everything else.

## When in doubt

Read `app.jsx` end-to-end first — it's the spine of the app and the patterns there are load-bearing. Match the existing patterns rather than introducing new ones.
