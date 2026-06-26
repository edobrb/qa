# Redesign BCC — Touchpoint, Customer Journey & Design System

**Date:** 2026-06-26
**Status:** Approved (user delegated full autonomous execution)
**Scope:** Update the accessibility-audit app (`edobrb.github.io/qa`) to the GRUPPO BCC ICCREA
"CANTIERE 01 / Mappatura Customer Journey" material: touchpoint ecosystem, journey steps,
and visual guidelines (Montserrat + BCC palette).

## Context

The app is a no-build, browser-only audit tool. Data lives in `framework.js`
(`window.AUDIT_FRAMEWORKS`, 2-space JSON), surfaced via `data.jsx` (`window.AUDIT_DATA`),
rendered by `app.jsx`. Design tokens are in `polar.css` (themes: light/dark/vapor/fic).

276 questions, each tagged to exactly **one touchpoint** (20 flat ids) and **one macro_step**
(CC: 4, Mortgage: 5). The "Mappa" heatmap uses touchpoints as rows, macro_steps as columns.
Question **ids are stable** and saved audits (localStorage / JSON export) key on them — ids
must NOT change.

Reference material analysed: `Touchpoint.png` (Digitale/Fisico/Umano × Informativo/
Transazionale/Relazionale matrix) and the two journey blueprints (Conto Corrente — Blu BCC
header; Mutuo — Verde BCC header), which share the same touchpoint legend as the matrix.

### Decisions (user-approved)
1. **Touchpoint** → *relabel + group*: keep the 20 ids and all 276 mappings; rename to BCC
   vocabulary; add a channel (Digitale/Fisico/Umano) + moment dimension to group the heatmap.
2. **Journey** → *macrostep aligned*: rename macro_steps to the blueprint names; remap Mortgage
   5→4 (merge *signing_and_notary_deed* into *deliberation_and_proposal* = "Delibera"),
   questions stay tagged to macro_step.
3. **Design system** → new `[data-theme="bcc"]`, set as default on `<body>`.

Autonomous judgement calls (delegated): (a) image items without a 1:1 id — PEC, QrCode, Token,
Sportello, distinct signature types — are *absorbed* into the nearest existing touchpoint, not
added as new rows; (b) Stipula/rogito folds into Delibera; (c) `--primary` = Blu BCC (Verde BCC
stays the success/conformity colour, avoiding a green-on-green clash); (d) include the optional
per-journey accent (Blu = CC, Verde = Mutuo).

> Note: this intentionally deviates from `AGENTS.md` rule #8 (generic, unbranded). The user's
> explicit request to brand for BCC takes precedence; `AGENTS.md` is updated accordingly.

## Section 1 — Touchpoint model

### 1a. Relabel (`legends.touchpoints_it` + `data.jsx` TOUCHPOINT_SHORT)
`data.jsx` capitalises the first letter of each label, so store proper casing.

| id | label (BCC) | short chip | channel | moment |
|---|---|---|---|---|
| home_banking_web | Relax Banking | Relax Bank. | digital | informational |
| home_banking_app | Relax Banking App | App RB | digital | transactional |
| institutional_website | Sito Istituzionale | Sito | digital | informational |
| web_documents | Documenti Web | Doc web | digital | informational |
| email_push_notifications | Email / OTP / Notifiche | Email/OTP | digital | informational |
| payment_app_wallet | Wallet / App di pagamento | Wallet | digital | transactional |
| chatbot_virtual_assistant | Chatbot | Chatbot | digital | relational |
| digital_media | Media Digitali | Media | digital | relational |
| paper_documents | Documenti Cartacei | Cartaceo | physical | informational |
| tickets_receipts | Ticket e Ricevute | Ticket | physical | informational |
| informational_material | Materiale Illustrativo | Materiale | physical | informational |
| atm_csa_self_service | ATM / CSA / Totem | ATM/CSA | physical | transactional |
| pos_payment_terminals | POS | POS | physical | transactional |
| credit_card | Carta di Credito/Debito | Carta | physical | transactional |
| check | Assegno / Titolo | Assegno | physical | transactional |
| graphometric_tablet_e_signature | Tavoletta Grafometrica e Firma | Grafometrica | physical | transactional |
| branch | Filiale (Media/Piccola) | Filiale | physical | relational |
| phone_banking | Banca Telefonica | Banca Tel. | human | relational |
| call_center | Contact Center | Contact C. | human | relational |
| branch_consultant | Consulente | Consulente | human | relational |

Channel counts: Digitale 8, Fisico 9, Umano 3.

### 1b. Grouping
- `framework.js` `legends`: add `touchpoint_channels_it` (id → digital|physical|human) and
  `touchpoint_moments_it` (id → informational|transactional|relational).
- `data.jsx`: expose `TOUCHPOINT_CHANNEL`, `TOUCHPOINT_MOMENT`, `CHANNEL_LABEL`
  ({digital:"Digitale", physical:"Fisico", human:"Umano"}), `CHANNEL_ORDER`.
- `app.jsx` `MapView`: sort row touchpoints by channel (Digitale→Fisico→Umano, original order
  within), and render a full-width group header row (`grid-column: 1 / -1`) before each channel
  block, tinted with the channel colour. `app.css`: `.heatmap .hm-group` styling.

## Section 2 — Customer Journey

### Conto Corrente (ids unchanged; update name_it + description_it)
- search_and_orientation → **Orientamento**
- account_opening → **Apertura**
- account_operations → **Operatività**
- account_closure → **Chiusura**

### Mutuo (5 → 4)
| new step (id kept) | name_it | from | #q |
|---|---|---|---|
| exploration_and_first_contact | Orientamento | itself | 24 |
| documentation_and_underwriting | Richiesta | itself | 24 |
| deliberation_and_proposal | Delibera | itself **+ signing_and_notary_deed** | 48 |
| post_disbursement_and_repayment | Operatività | itself | 24 |

Operations on `framework.js` (Python load→mutate→dump, 2-space):
1. Set the four name_it + refreshed description_it above.
2. Remove the `signing_and_notary_deed` object from `journeys.mortgage.macro_steps`.
3. `deliberation_and_proposal.applicable_touchpoints` = union(deliberation, signing).
4. For every mortgage question with `macro_step == "signing_and_notary_deed"`, set
   `macro_step = "deliberation_and_proposal"` (ids untouched).
5. `statistics.by_macro_step`: delete signing key, set deliberation_and_proposal = 48.

`data.jsx`: STEP_CODES (deliberation→DEL, post_disbursement→OPE, etc., drop signing) and
STEP_SHORT (the four CC + four Mortgage short names; drop signing).

## Section 3 — Design System: `[data-theme="bcc"]` (default)

### Typography
- `index.html`: add `Montserrat:wght@300;400;500;600;700` to the Google Fonts link.
- bcc theme: `--font-family-base` & `--font-family-heading` = Montserrat; keep JetBrains Mono
  for `--font-family-mono` (ids/codes). h1 weight 800→700 in the bcc theme.
- `<body data-theme="bcc">`.

### Token map
| token | value | role |
|---|---|---|
| --background / --card / --popover | #FFFFFF | surfaces |
| --foreground | #001E62 (Blu Scuro BCC) | text ink |
| --primary / --primary-foreground | #003594 (Blu BCC) / #FFFFFF | actions, links, focus |
| --secondary/-foreground | #EEF1F6 / #003594 | chips |
| --muted | #F2F4F7 · --muted-foreground #5A6470 | (Grigio #B6B9BB too light for text) |
| --accent/-foreground | #E6EEF7 / #003594 | |
| --border / --input | #D7DADD · --ring #003594 | |
| --success* | #00843D (Verde BCC) family | "Piena aderenza" / OK bars |
| --info* | #007DBA (Azzurro BCC) family | "Da rivedere" |
| --warning* | #B26A00 ochre (functional) | "Barriera parziale" |
| --destructive | #C8102E (functional red) | "KO critico" |
| --chart-1..5 | #003594, #00843D, #62B5E5, #65A812, #001E62 | |
| --gradient-primary | 135° #003594 → #00843D | |
| --sidebar* | white sidebar, Blu BCC primary | |

### Heatmap conformity ramp
Hardcoded oklch ramp in `MapView.cellPaint` + legend swatches. Tune the green endpoint toward
Verde BCC (hue ~150) and keep red KO = --destructive; update the 5 legend swatches to match.

### Per-journey accent (optional, faithful to blueprints)
App root carries `data-journey`; expose `--journey-accent` (#003594 for current_account,
#00843D for mortgage). Use it for the MapView heading + channel group headers, not global
--primary (keeps risk low).

### Accessibility
This is an a11y tool: keep functional status colours (KO red, parziale ochre, info azure) at
AA contrast. Verde BCC on white ≈ 4.8:1 (AA normal text ✓); Blu BCC stronger. Grigio #B6B9BB
only for borders/disabled.

## Execution order
A. Theme → B. Touchpoint → C. Journey → D. Docs + bump `?v=24`.

## Verification
- `framework.js` parses as JSON after each mutation; question count stays 276; mortgage
  macro_steps == 4; by_macro_step sums to 276.
- JSX transpile check (Babel standalone in Node) on all four `.jsx` files — no syntax errors.
- Headless-Chrome screenshots (seeded localStorage): CC map (grouped + branded), Mutuo map
  (4 cols + green accent), a Question view (Montserrat + pills). Zero console errors.
- Adversarial review of the diff: data integrity, contrast/a11y, brand fidelity, app-not-broken.

## Out of scope
Adding new touchpoint ids; microstep hierarchy as data/UI; the full blueprint swimlanes
(personas, Unmet Needs, How-Might-We); editing question text.
