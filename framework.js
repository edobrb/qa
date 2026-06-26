// Generated from uploads/questions.json — slim runtime schema.
// 276 real questions, real macro_steps, legends, standards.
window.AUDIT_FRAMEWORKS = [
  {
    "metadata": {
      "id": "banking_a11y_v1",
      "name_it": "Banking — Conto corrente + Mutuo",
      "version": "1.0.0",
      "date": "2026-04-30",
      "language_content": "it",
      "language_fields": "en",
      "title_it": "Framework JSON per audit di accessibilità dei journey bancari conto corrente e mutuo",
      "description_it": "Checklist strutturata per valutare accessibilità digitale, documentale, fisica, hardware e assistiva nei principali touchpoint bancari omnicanale. Ogni domanda include criteri di conformità, categorie utente impattate, principio POUR e riferimenti puntuali a standard o norme."
    },
    "legends": {
      "pour_definition_it": {
        "perceivable": "Le informazioni e i componenti dell’interfaccia devono essere presentati in modi percepibili dagli utenti.",
        "operable": "I componenti e la navigazione devono essere utilizzabili con modalità di input diverse e senza barriere temporali o motorie.",
        "understandable": "Informazioni, flussi, errori e conseguenze devono essere comprensibili e prevedibili.",
        "robust": "Contenuti e componenti devono essere compatibili con tecnologie assistive, user agent e formati interoperabili."
      },
      "conformity_levels_it": {
        "full_compliance": "Piena aderenza: il requisito è soddisfatto in modo equivalente, autonomo e verificato per gli scenari pertinenti.",
        "partial_barrier": "Barriera parziale: il requisito è soddisfatto solo in parte, con workaround, assistenza o limiti di canale/dispositivo.",
        "critical_ko": "KO critico: la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
      },
      "user_categories_it": {
        "auditory": "con disabilità uditive",
        "visual": "con disabilità visive",
        "motor": "con disabilità motorie",
        "cognitive": "con disabilità cognitive o neurodivergenze",
        "elderly_temporary_situational": "anziani o con limitazioni temporanee/situazionali"
      },
      "touchpoints_it": {
        "home_banking_app": "Relax Banking App",
        "home_banking_web": "Relax Banking",
        "institutional_website": "Sito Istituzionale",
        "web_documents": "Documenti Web",
        "email_push_notifications": "Email / OTP / Notifiche",
        "payment_app_wallet": "Wallet / App di pagamento",
        "chatbot_virtual_assistant": "Chatbot",
        "digital_media": "Media Digitali",
        "paper_documents": "Documenti Cartacei",
        "tickets_receipts": "Ticket e Ricevute",
        "informational_material": "Materiale Illustrativo",
        "atm_csa_self_service": "ATM / CSA / Totem",
        "pos_payment_terminals": "POS",
        "credit_card": "Carta di Credito/Debito",
        "check": "Assegno / Titolo",
        "graphometric_tablet_e_signature": "Tavoletta Grafometrica e Firma",
        "branch": "Filiale (Media/Piccola)",
        "phone_banking": "Banca Telefonica",
        "call_center": "Contact Center",
        "branch_consultant": "Consulente"
      },
      "touchpoint_channels_it": {
        "home_banking_app": "digital",
        "home_banking_web": "digital",
        "institutional_website": "digital",
        "web_documents": "digital",
        "email_push_notifications": "digital",
        "payment_app_wallet": "digital",
        "chatbot_virtual_assistant": "digital",
        "digital_media": "digital",
        "paper_documents": "physical",
        "tickets_receipts": "physical",
        "informational_material": "physical",
        "atm_csa_self_service": "physical",
        "pos_payment_terminals": "physical",
        "credit_card": "physical",
        "check": "physical",
        "graphometric_tablet_e_signature": "physical",
        "branch": "physical",
        "phone_banking": "human",
        "call_center": "human",
        "branch_consultant": "human"
      },
      "touchpoint_moments_it": {
        "home_banking_app": "transactional",
        "home_banking_web": "informational",
        "institutional_website": "informational",
        "web_documents": "informational",
        "email_push_notifications": "informational",
        "payment_app_wallet": "transactional",
        "chatbot_virtual_assistant": "relational",
        "digital_media": "relational",
        "paper_documents": "informational",
        "tickets_receipts": "informational",
        "informational_material": "informational",
        "atm_csa_self_service": "transactional",
        "pos_payment_terminals": "transactional",
        "credit_card": "transactional",
        "check": "transactional",
        "graphometric_tablet_e_signature": "transactional",
        "branch": "relational",
        "phone_banking": "relational",
        "call_center": "relational",
        "branch_consultant": "relational"
      }
    },
    "standards_catalog": [
      {
        "standard": "D.Lgs. 27 maggio 2022, n. 82",
        "family": "core",
        "clause": "Allegato I, Sezione III",
        "clause_title_it": "Recepimento nazionale dei requisiti EAA per prodotti e servizi",
        "url": "https://www.gazzettaufficiale.it/eli/id/2022/07/01/22G00089/sg"
      },
      {
        "standard": "D.Lgs. 27 maggio 2022, n. 82",
        "family": "core",
        "clause": "art. 3",
        "clause_title_it": "Recepimento nazionale dei requisiti EAA per prodotti e servizi",
        "url": "https://www.gazzettaufficiale.it/eli/id/2022/07/01/22G00089/sg"
      },
      {
        "standard": "Direttiva (UE) 2019/882 (European Accessibility Act)",
        "family": "core",
        "clause": "Allegato I, Sezione I",
        "clause_title_it": "Requisiti generali di accessibilità dei prodotti",
        "url": "https://eur-lex.europa.eu/eli/dir/2019/882/oj"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10",
        "clause_title_it": "Documenti non web",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.1.1.1",
        "clause_title_it": "Contenuto non testuale",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.1.3.1",
        "clause_title_it": "Informazioni e correlazioni nei documenti",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.2.4.4",
        "clause_title_it": "Scopo del collegamento (nel contesto)",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.2.4.6",
        "clause_title_it": "Intestazioni ed etichette",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.3.1.1",
        "clause_title_it": "Lingua del documento",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.3.2.4",
        "clause_title_it": "Documenti non web",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.3.3.2",
        "clause_title_it": "Etichette o istruzioni",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.3.3.3",
        "clause_title_it": "Suggerimenti per gli errori",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§10.4.1.2",
        "clause_title_it": "Nome, ruolo, valore",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11",
        "clause_title_it": "Software",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.1.1.1",
        "clause_title_it": "Contenuto non testuale",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.1.3.1",
        "clause_title_it": "Informazioni e correlazioni",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.1.4.1",
        "clause_title_it": "Uso del colore",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.1.4.10",
        "clause_title_it": "Ridisposizione (reflow)",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.2.1.1",
        "clause_title_it": "Tastiera",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.2.2.1",
        "clause_title_it": "Regolazione tempi",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.2.5.1",
        "clause_title_it": "Gesti del puntatore",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.2.5.2",
        "clause_title_it": "Annullamento del puntatore",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.2.5.3",
        "clause_title_it": "Etichetta nel nome",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.2.5.8",
        "clause_title_it": "Dimensione del target",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.3.2.4",
        "clause_title_it": "Identificazione coerente",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.3.3.1",
        "clause_title_it": "Identificazione di errori",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.3.3.2",
        "clause_title_it": "Etichette o istruzioni",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.3.3.3",
        "clause_title_it": "Suggerimenti per gli errori",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.3.3.4",
        "clause_title_it": "Prevenzione errori",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.4.1.2",
        "clause_title_it": "Nome, ruolo, valore",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.4.1.3",
        "clause_title_it": "Messaggi di stato",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.5",
        "clause_title_it": "Interoperabilità con tecnologie assistive",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.5.2",
        "clause_title_it": "Software",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§11.7",
        "clause_title_it": "Software",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§12.1",
        "clause_title_it": "Documentazione del prodotto",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§12.1.2",
        "clause_title_it": "Documentazione accessibile",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§12.2",
        "clause_title_it": "Servizi di supporto",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§12.2.2",
        "clause_title_it": "Informazioni sulle funzionalità di accessibilità e compatibilità",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§12.2.3",
        "clause_title_it": "Comunicazione efficace",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§5.1",
        "clause_title_it": "Funzionalità chiuse",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§5.2",
        "clause_title_it": "Requisiti generici ICT",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§5.3",
        "clause_title_it": "Biometria",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§5.5",
        "clause_title_it": "Parti operabili",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§5.6",
        "clause_title_it": "Requisiti generici ICT",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§5.9",
        "clause_title_it": "Requisiti generici ICT",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§6.2",
        "clause_title_it": "Testo in tempo reale e comunicazione bidirezionale",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§6.2.1",
        "clause_title_it": "ICT con comunicazione vocale bidirezionale",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§6.2.2.1",
        "clause_title_it": "ICT con comunicazione vocale bidirezionale",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§7.1",
        "clause_title_it": "Riproduzione sottotitoli",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.1.1",
        "clause_title_it": "Contenuto non testuale",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.2.2",
        "clause_title_it": "Sottotitoli (preregistrati)",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.2.5",
        "clause_title_it": "Audiodescrizione (preregistrata)",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.3.1",
        "clause_title_it": "Informazioni e correlazioni",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.3.5",
        "clause_title_it": "Identificare lo scopo degli input",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.4.1",
        "clause_title_it": "Uso del colore",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.4.10",
        "clause_title_it": "Reflow",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.1.4.3",
        "clause_title_it": "Contrasto minimo",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.2.1.1",
        "clause_title_it": "Tastiera",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.2.1.2",
        "clause_title_it": "Nessun impedimento all’uso della tastiera",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.2.2.1",
        "clause_title_it": "Regolazione tempi",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.2.2.2",
        "clause_title_it": "Pausa, stop, nascondi",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.2.4.4",
        "clause_title_it": "Scopo del collegamento (nel contesto)",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.2.4.7",
        "clause_title_it": "Focus visibile",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.3.1.5",
        "clause_title_it": "Livello di lettura",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.3.2.4",
        "clause_title_it": "Identificazione coerente",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.3.3.1",
        "clause_title_it": "Identificazione di errori",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.3.3.2",
        "clause_title_it": "Etichette o istruzioni",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.3.3.3",
        "clause_title_it": "Suggerimenti per gli errori",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.3.3.4",
        "clause_title_it": "Prevenzione errori",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.4.1.2",
        "clause_title_it": "Nome, ruolo, valore",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.4.1.3",
        "clause_title_it": "Messaggi di stato",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "core",
        "clause": "§9.6",
        "clause_title_it": "Requisiti di conformità web",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "Legge 9 gennaio 2004, n. 4",
        "family": "core",
        "clause": "art. 3-bis",
        "clause_title_it": "Accesso agli strumenti informatici e principi di accessibilità",
        "url": "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2004-01-09;4"
      },
      {
        "standard": "PDF/UA ISO 14289-1",
        "family": "core",
        "clause": "§7",
        "clause_title_it": "Requisiti per file PDF accessibili",
        "url": "https://www.iso.org/standard/64599.html"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.1.1",
        "clause_title_it": "Contenuto non testuale",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.2.1",
        "clause_title_it": "Solo audio e solo video",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.2.2",
        "clause_title_it": "Sottotitoli",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.2.3",
        "clause_title_it": "Audiodescrizione o alternativa media",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.2.5",
        "clause_title_it": "Audiodescrizione",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.2.8",
        "clause_title_it": "Alternativa per media temporizzati",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.3.1",
        "clause_title_it": "Informazioni e correlazioni",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.3.2",
        "clause_title_it": "Sequenza significativa",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.3.3",
        "clause_title_it": "Caratteristiche sensoriali",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.3.4",
        "clause_title_it": "Orientamento",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.3.5",
        "clause_title_it": "Identificare lo scopo degli input",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.4.1",
        "clause_title_it": "Uso del colore",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.4.10",
        "clause_title_it": "Ridisposizione (reflow)",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.4.11",
        "clause_title_it": "Contrasto non testuale",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.4.2",
        "clause_title_it": "Controllo del sonoro",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.4.3",
        "clause_title_it": "Contrasto minimo",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.4.4",
        "clause_title_it": "Ridimensionamento del testo",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 1.4.5",
        "clause_title_it": "Immagini di testo",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.1.1",
        "clause_title_it": "Tastiera",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.1.2",
        "clause_title_it": "Nessun impedimento all’uso della tastiera",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.2.1",
        "clause_title_it": "Regolazione tempi",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.2.2",
        "clause_title_it": "Pausa, stop, nascondi",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.2.6",
        "clause_title_it": "Timeout",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.3.1",
        "clause_title_it": "Tre lampeggi o sotto soglia",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.3.3",
        "clause_title_it": "Animazione da interazioni",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.4.3",
        "clause_title_it": "Ordine del focus",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.4.4",
        "clause_title_it": "Scopo del collegamento",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.4.5",
        "clause_title_it": "Molteplici modalità",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.4.6",
        "clause_title_it": "Intestazioni ed etichette",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.4.7",
        "clause_title_it": "Focus visibile",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.5.1",
        "clause_title_it": "Gesti del puntatore",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.5.2",
        "clause_title_it": "Annullamento del puntatore",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.5.3",
        "clause_title_it": "Etichetta nel nome",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.5.4",
        "clause_title_it": "Attivazione da movimento",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.5.7",
        "clause_title_it": "Movimenti di trascinamento",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 2.5.8",
        "clause_title_it": "Dimensione del target",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.1.1",
        "clause_title_it": "Lingua della pagina",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.1.3",
        "clause_title_it": "Parole inusuali",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.1.5",
        "clause_title_it": "Livello di lettura",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.2.1",
        "clause_title_it": "Al focus",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.2.3",
        "clause_title_it": "Navigazione coerente",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.2.4",
        "clause_title_it": "Identificazione coerente",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.3.1",
        "clause_title_it": "Identificazione di errori",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.3.2",
        "clause_title_it": "Etichette o istruzioni",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.3.3",
        "clause_title_it": "Suggerimenti per gli errori",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.3.4",
        "clause_title_it": "Prevenzione errori",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.3.7",
        "clause_title_it": "Inserimento ridondante",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 3.3.8",
        "clause_title_it": "Autenticazione accessibile",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 4.1.2",
        "clause_title_it": "Nome, ruolo, valore",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "WCAG 2.2",
        "family": "core",
        "clause": "SC 4.1.3",
        "clause_title_it": "Messaggi di stato",
        "url": "https://www.w3.org/TR/WCAG22/"
      },
      {
        "standard": "ADA Standards 2010",
        "family": "guidelines_policies",
        "clause": "§707",
        "clause_title_it": "Automatic Teller Machines and Fare Machines (benchmark)",
        "url": "https://www.ada.gov/law-and-regs/design-standards/2010-stds/"
      },
      {
        "standard": "D.M. 14 giugno 1989, n. 236",
        "family": "physical_hardware",
        "clause": "§4.1.1",
        "clause_title_it": "Prescrizioni tecniche per accessibilità e superamento barriere architettoniche",
        "url": "https://www.gazzettaufficiale.it/eli/id/1989/06/23/089G0298/sg"
      },
      {
        "standard": "D.M. 14 giugno 1989, n. 236",
        "family": "physical_hardware",
        "clause": "§4.1.11",
        "clause_title_it": "Prescrizioni tecniche per accessibilità e superamento barriere architettoniche",
        "url": "https://www.gazzettaufficiale.it/eli/id/1989/06/23/089G0298/sg"
      },
      {
        "standard": "D.M. 14 giugno 1989, n. 236",
        "family": "physical_hardware",
        "clause": "§4.1.12",
        "clause_title_it": "Prescrizioni tecniche per accessibilità e superamento barriere architettoniche",
        "url": "https://www.gazzettaufficiale.it/eli/id/1989/06/23/089G0298/sg"
      },
      {
        "standard": "D.M. 14 giugno 1989, n. 236",
        "family": "physical_hardware",
        "clause": "§4.1.4",
        "clause_title_it": "Prescrizioni tecniche per accessibilità e superamento barriere architettoniche",
        "url": "https://www.gazzettaufficiale.it/eli/id/1989/06/23/089G0298/sg"
      },
      {
        "standard": "D.M. 14 giugno 1989, n. 236",
        "family": "physical_hardware",
        "clause": "§4.1.9",
        "clause_title_it": "Prescrizioni tecniche per accessibilità e superamento barriere architettoniche",
        "url": "https://www.gazzettaufficiale.it/eli/id/1989/06/23/089G0298/sg"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "physical_hardware",
        "clause": "§8",
        "clause_title_it": "Hardware accessibile",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "physical_hardware",
        "clause": "§8.2",
        "clause_title_it": "Hardware con output vocale",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "EN 301 549 V3.2.1",
        "family": "physical_hardware",
        "clause": "§8.3",
        "clause_title_it": "ICT stazionario",
        "url": "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/"
      },
      {
        "standard": "ISO 21542:2021",
        "family": "physical_hardware",
        "clause": "§10",
        "clause_title_it": "Spazi interni non residenziali",
        "url": "https://www.iso.org/standard/71860.html"
      },
      {
        "standard": "ISO 21542:2021",
        "family": "physical_hardware",
        "clause": "§17",
        "clause_title_it": "Accessibilità e usabilità dell’ambiente costruito",
        "url": "https://www.iso.org/standard/71860.html"
      },
      {
        "standard": "ISO 21542:2021",
        "family": "physical_hardware",
        "clause": "§5.5",
        "clause_title_it": "Segnaletica e wayfinding",
        "url": "https://www.iso.org/standard/71860.html"
      },
      {
        "standard": "ISO 21542:2021",
        "family": "physical_hardware",
        "clause": "§6",
        "clause_title_it": "Accessibilità e usabilità dell’ambiente costruito",
        "url": "https://www.iso.org/standard/71860.html"
      },
      {
        "standard": "ISO 21542:2021",
        "family": "physical_hardware",
        "clause": "§6.3",
        "clause_title_it": "Percorsi accessibili verso l’edificio",
        "url": "https://www.iso.org/standard/71860.html"
      },
      {
        "standard": "ISO 21542:2021",
        "family": "physical_hardware",
        "clause": "§7",
        "clause_title_it": "Accessibilità e usabilità dell’ambiente costruito",
        "url": "https://www.iso.org/standard/71860.html"
      },
      {
        "standard": "ISO 21542:2021",
        "family": "physical_hardware",
        "clause": "§8",
        "clause_title_it": "Accessibilità e usabilità dell’ambiente costruito",
        "url": "https://www.iso.org/standard/71860.html"
      },
      {
        "standard": "ISO/IEC 7810:2019",
        "family": "physical_hardware",
        "clause": "caratteristiche fisiche ID-1",
        "clause_title_it": "Caratteristiche fisiche delle carte di identificazione",
        "url": "https://www.iso.org/standard/70483.html"
      }
    ],
    "journeys": {
      "current_account": {
        "macro_steps": [
          {
            "id": "search_and_orientation",
            "name_it": "Orientamento",
            "description_it": "Ricerca dell'offerta, consultazione web, confronto e valutazione dei prodotti, primo contatto con la filiale e fissazione dell'appuntamento.",
            "applicable_touchpoints": [
              "institutional_website",
              "web_documents",
              "email_push_notifications",
              "chatbot_virtual_assistant",
              "digital_media",
              "phone_banking",
              "call_center"
            ]
          },
          {
            "id": "account_opening",
            "name_it": "Apertura",
            "description_it": "Accoglienza e attesa in filiale, colloquio e selezione del prodotto, adempimenti preliminari (privacy, identificazione, verifica), attività operative e contrattualizzazione di conto, carta e home banking.",
            "applicable_touchpoints": [
              "home_banking_app",
              "home_banking_web",
              "institutional_website",
              "web_documents",
              "email_push_notifications",
              "payment_app_wallet",
              "chatbot_virtual_assistant",
              "digital_media",
              "paper_documents",
              "tickets_receipts",
              "informational_material",
              "atm_csa_self_service",
              "credit_card",
              "graphometric_tablet_e_signature",
              "branch",
              "phone_banking",
              "call_center",
              "branch_consultant"
            ]
          },
          {
            "id": "account_operations",
            "name_it": "Operatività",
            "description_it": "Operazioni quotidiane: prelievo ad ATM, versamento allo sportello, identificazione, accredito e rendicontazione periodica con consultazione e verifica dei documenti.",
            "applicable_touchpoints": [
              "home_banking_app",
              "home_banking_web",
              "institutional_website",
              "web_documents",
              "email_push_notifications",
              "payment_app_wallet",
              "chatbot_virtual_assistant",
              "digital_media",
              "paper_documents",
              "tickets_receipts",
              "informational_material",
              "atm_csa_self_service",
              "pos_payment_terminals",
              "credit_card",
              "check",
              "graphometric_tablet_e_signature",
              "branch",
              "phone_banking",
              "call_center",
              "branch_consultant"
            ]
          },
          {
            "id": "account_closure",
            "name_it": "Chiusura",
            "description_it": "Richiesta di chiusura (appuntamento, raccomandata, colloquio, identificazione, sottoscrizione), estinzione del rapporto e archiviazione della documentazione.",
            "applicable_touchpoints": [
              "home_banking_app",
              "home_banking_web",
              "institutional_website",
              "web_documents",
              "email_push_notifications",
              "payment_app_wallet",
              "chatbot_virtual_assistant",
              "digital_media",
              "paper_documents",
              "tickets_receipts",
              "informational_material",
              "atm_csa_self_service",
              "credit_card",
              "check",
              "graphometric_tablet_e_signature",
              "branch",
              "phone_banking",
              "call_center",
              "branch_consultant"
            ]
          }
        ],
        "questions": [
          {
            "id": "CC-ORI-WEB-001",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che la pagina di orientamento ai conti correnti ha struttura semantica, intestazioni e landmark che permettono di capire sezioni, offerte e call-to-action con screen reader?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              80,
              102,
              52,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la pagina di orientamento ai conti correnti ha struttura semantica, intestazioni e landmark che permettono di capire sezioni, offerte e call-to-action con screen reader; nel touchpoint sito istituzionale componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la pagina di orientamento ai conti correnti ha struttura semantica, intestazioni e landmark che permettono di capire sezioni, offerte e call-to-action con screen reader è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la pagina di orientamento ai conti correnti ha struttura semantica, intestazioni e landmark che permettono di capire sezioni, offerte e call-to-action con screen reader è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "institutional_website",
              "robust",
              "screen-reader",
              "search_and_orientation",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-WEB-002",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che le tabelle comparative di canoni, commissioni, condizioni e servizi inclusi sono leggibili senza perdita di informazione anche con zoom, reflow e tecnologie assistive?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              86,
              55,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le tabelle comparative di canoni, commissioni, condizioni e servizi inclusi sono leggibili senza perdita di informazione anche con zoom, reflow e tecnologie assistive; nel touchpoint sito istituzionale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le tabelle comparative di canoni, commissioni, condizioni e servizi inclusi sono leggibili senza perdita di informazione anche con zoom, reflow e tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le tabelle comparative di canoni, commissioni, condizioni e servizi inclusi sono leggibili senza perdita di informazione anche con zoom, reflow e tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "institutional_website",
              "perceivable",
              "search_and_orientation",
              "tabelle",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-WEB-003",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che i pulsanti Apri conto, Richiedi informazioni e Prenota appuntamento sono raggiungibili da tastiera, hanno focus visibile e nome accessibile coerente?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "motor",
              "visual"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              103,
              122,
              57
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i pulsanti Apri conto, Richiedi informazioni e Prenota appuntamento sono raggiungibili da tastiera, hanno focus visibile e nome accessibile coerente; nel touchpoint sito istituzionale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i pulsanti Apri conto, Richiedi informazioni e Prenota appuntamento sono raggiungibili da tastiera, hanno focus visibile e nome accessibile coerente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i pulsanti Apri conto, Richiedi informazioni e Prenota appuntamento sono raggiungibili da tastiera, hanno focus visibile e nome accessibile coerente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "current_account",
              "en-301-549",
              "focus",
              "institutional_website",
              "keyboard",
              "motor",
              "operable",
              "search_and_orientation",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-WEB-004",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che la ricerca interna e i filtri per individuare il conto più adatto hanno etichette, istruzioni, risultati e messaggi di errore comprensibili?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              117,
              118,
              123,
              66
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la ricerca interna e i filtri per individuare il conto più adatto hanno etichette, istruzioni, risultati e messaggi di errore comprensibili; nel touchpoint sito istituzionale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la ricerca interna e i filtri per individuare il conto più adatto hanno etichette, istruzioni, risultati e messaggi di errore comprensibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la ricerca interna e i filtri per individuare il conto più adatto hanno etichette, istruzioni, risultati e messaggi di errore comprensibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "institutional_website",
              "search_and_orientation",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-WEB-005",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che le descrizioni di conto, costi, limiti e requisiti usano linguaggio chiaro, spiegano sigle bancarie e non richiedono conoscenze specialistiche?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              111,
              112,
              2,
              1
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le descrizioni di conto, costi, limiti e requisiti usano linguaggio chiaro, spiegano sigle bancarie e non richiedono conoscenze specialistiche; nel touchpoint sito istituzionale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le descrizioni di conto, costi, limiti e requisiti usano linguaggio chiaro, spiegano sigle bancarie e non richiedono conoscenze specialistiche è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le descrizioni di conto, costi, limiti e requisiti usano linguaggio chiaro, spiegano sigle bancarie e non richiedono conoscenze specialistiche è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "institutional_website",
              "linguaggio-chiaro",
              "search_and_orientation",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-DOC-001",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che i fogli informativi e i documenti precontrattuali PDF sono taggati, hanno ordine di lettura corretto, lingua dichiarata e testo selezionabile?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              73,
              80,
              110,
              5
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i fogli informativi e i documenti precontrattuali PDF sono taggati, hanno ordine di lettura corretto, lingua dichiarata e testo selezionabile; nel touchpoint documenti digitali e PDF contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i fogli informativi e i documenti precontrattuali PDF sono taggati, hanno ordine di lettura corretto, lingua dichiarata e testo selezionabile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i fogli informativi e i documenti precontrattuali PDF sono taggati, hanno ordine di lettura corretto, lingua dichiarata e testo selezionabile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "current_account",
              "en-301-549",
              "pdf",
              "perceivable",
              "search_and_orientation",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-ORI-DOC-002",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che le tabelle dei costi nei documenti informativi hanno intestazioni associate, ordine logico e non comunicano differenze solo tramite colore o posizione?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              85,
              5,
              73
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le tabelle dei costi nei documenti informativi hanno intestazioni associate, ordine logico e non comunicano differenze solo tramite colore o posizione; nel touchpoint documenti digitali e PDF contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le tabelle dei costi nei documenti informativi hanno intestazioni associate, ordine logico e non comunicano differenze solo tramite colore o posizione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le tabelle dei costi nei documenti informativi hanno intestazioni associate, ordine logico e non comunicano differenze solo tramite colore o posizione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "current_account",
              "en-301-549",
              "pdf",
              "perceivable",
              "pos",
              "search_and_orientation",
              "tabelle",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-ORI-DOC-003",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che i documenti essenziali sono disponibili in formati accessibili alternativi al PDF non taggato, come HTML accessibile o PDF/UA?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              2,
              3,
              73,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i documenti essenziali sono disponibili in formati accessibili alternativi al PDF non taggato, come HTML accessibile o PDF/UA; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i documenti essenziali sono disponibili in formati accessibili alternativi al PDF non taggato, come HTML accessibile o PDF/UA è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i documenti essenziali sono disponibili in formati accessibili alternativi al PDF non taggato, come HTML accessibile o PDF/UA è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "pdf",
              "robust",
              "search_and_orientation",
              "visual",
              "web_documents"
            ]
          },
          {
            "id": "CC-ORI-MED-001",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che i video promozionali o informativi sul conto hanno sottotitoli sincronizzati, trascrizione e informazioni equivalenti per contenuti audio?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              79,
              50,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i video promozionali o informativi sul conto hanno sottotitoli sincronizzati, trascrizione e informazioni equivalenti per contenuti audio; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i video promozionali o informativi sul conto hanno sottotitoli sincronizzati, trascrizione e informazioni equivalenti per contenuti audio è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i video promozionali o informativi sul conto hanno sottotitoli sincronizzati, trascrizione e informazioni equivalenti per contenuti audio è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "auditory",
              "cognitive",
              "current_account",
              "digital_media",
              "eaa",
              "en-301-549",
              "perceivable",
              "search_and_orientation",
              "sottotitoli",
              "video",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-MED-002",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che le immagini social, banner e infografiche sulle offerte di conto hanno testo alternativo equivalente e non contengono informazioni critiche solo in immagine?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              74,
              91,
              49,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le immagini social, banner e infografiche sulle offerte di conto hanno testo alternativo equivalente e non contengono informazioni critiche solo in immagine; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le immagini social, banner e infografiche sulle offerte di conto hanno testo alternativo equivalente e non contengono informazioni critiche solo in immagine è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le immagini social, banner e infografiche sulle offerte di conto hanno testo alternativo equivalente e non contengono informazioni critiche solo in immagine è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "cognitive",
              "current_account",
              "digital_media",
              "en-301-549",
              "perceivable",
              "search_and_orientation",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-MED-003",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che animazioni, caroselli e video autoplay collegati alle offerte di conto possono essere messi in pausa, fermati o evitati?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali, con disabilità visive: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational",
              "visual"
            ],
            "pour_principle": "operable",
            "standards": [
              95,
              97,
              98,
              60
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: animazioni, caroselli e video autoplay collegati alle offerte di conto possono essere messi in pausa, fermati o evitati; nel touchpoint contenuti digital media tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: animazioni, caroselli e video autoplay collegati alle offerte di conto possono essere messi in pausa, fermati o evitati è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: animazioni, caroselli e video autoplay collegati alle offerte di conto possono essere messi in pausa, fermati o evitati è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "cognitive",
              "current_account",
              "digital_media",
              "elderly_temporary_situational",
              "en-301-549",
              "operable",
              "pos",
              "search_and_orientation",
              "video",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-MED-004",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che le creatività digitali su costi, promo e condizioni hanno contrasto sufficiente e restano leggibili su mobile e con ingrandimento?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità visive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              86,
              56,
              55
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le creatività digitali su costi, promo e condizioni hanno contrasto sufficiente e restano leggibili su mobile e con ingrandimento; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le creatività digitali su costi, promo e condizioni hanno contrasto sufficiente e restano leggibili su mobile e con ingrandimento è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le creatività digitali su costi, promo e condizioni hanno contrasto sufficiente e restano leggibili su mobile e con ingrandimento è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "contrast",
              "current_account",
              "digital_media",
              "elderly_temporary_situational",
              "en-301-549",
              "perceivable",
              "search_and_orientation",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-BOT-001",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot informativo sui conti è individuabile, apribile, navigabile e chiudibile con tastiera e screen reader?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "visual",
              "motor"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              99,
              122,
              57
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot informativo sui conti è individuabile, apribile, navigabile e chiudibile con tastiera e screen reader; nel touchpoint chatbot e assistente virtuale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot informativo sui conti è individuabile, apribile, navigabile e chiudibile con tastiera e screen reader è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot informativo sui conti è individuabile, apribile, navigabile e chiudibile con tastiera e screen reader è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "chatbot",
              "chatbot_virtual_assistant",
              "current_account",
              "en-301-549",
              "keyboard",
              "motor",
              "operable",
              "screen-reader",
              "search_and_orientation",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-BOT-002",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot spiega costi, requisiti e differenze tra conti in linguaggio semplice, con chiarimenti quando la domanda non è compresa?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              117,
              118,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot spiega costi, requisiti e differenze tra conti in linguaggio semplice, con chiarimenti quando la domanda non è compresa; nel touchpoint chatbot e assistente virtuale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot spiega costi, requisiti e differenze tra conti in linguaggio semplice, con chiarimenti quando la domanda non è compresa è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot spiega costi, requisiti e differenze tra conti in linguaggio semplice, con chiarimenti quando la domanda non è compresa è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "linguaggio-chiaro",
              "search_and_orientation",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-BOT-003",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che quando il chatbot non risolve una richiesta sul conto, propone un passaggio accessibile a operatore umano, telefono, chat o appuntamento?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              2,
              37,
              38,
              1
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: quando il chatbot non risolve una richiesta sul conto, propone un passaggio accessibile a operatore umano, telefono, chat o appuntamento; nel touchpoint chatbot e assistente virtuale componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: quando il chatbot non risolve una richiesta sul conto, propone un passaggio accessibile a operatore umano, telefono, chat o appuntamento è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: quando il chatbot non risolve una richiesta sul conto, propone un passaggio accessibile a operatore umano, telefono, chat o appuntamento è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "auditory",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "robust",
              "search_and_orientation"
            ]
          },
          {
            "id": "CC-ORI-EML-001",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che le email commerciali o informative sui conti hanno struttura HTML accessibile, link descrittivi e azione di disiscrizione utilizzabile da tastiera?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              80,
              100,
              92,
              5
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le email commerciali o informative sui conti hanno struttura HTML accessibile, link descrittivi e azione di disiscrizione utilizzabile da tastiera; nel touchpoint email, SMS e notifiche push tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le email commerciali o informative sui conti hanno struttura HTML accessibile, link descrittivi e azione di disiscrizione utilizzabile da tastiera è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le email commerciali o informative sui conti hanno struttura HTML accessibile, link descrittivi e azione di disiscrizione utilizzabile da tastiera è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "current_account",
              "email_push_notifications",
              "en-301-549",
              "keyboard",
              "motor",
              "notifiche",
              "operable",
              "search_and_orientation",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-EML-002",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che le comunicazioni su preventivi, promozioni e scadenze non dipendono da immagini senza alternativa e indicano chiaramente oggetto, importi e prossimi passi?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              74,
              112,
              117,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le comunicazioni su preventivi, promozioni e scadenze non dipendono da immagini senza alternativa e indicano chiaramente oggetto, importi e prossimi passi; nel touchpoint email, SMS e notifiche push informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le comunicazioni su preventivi, promozioni e scadenze non dipendono da immagini senza alternativa e indicano chiaramente oggetto, importi e prossimi passi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le comunicazioni su preventivi, promozioni e scadenze non dipendono da immagini senza alternativa e indicano chiaramente oggetto, importi e prossimi passi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "notifiche",
              "search_and_orientation",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-ORI-TEL-001",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint phone banking, è garantito che il canale telefonico informativo non impone solo voce o tasti DTMF e offre alternative accessibili come operatore, chat o testo in tempo reale?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint phone banking può escludere o penalizzare utenti con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "phone_banking",
            "affected_user_categories": [
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              46,
              38,
              2,
              1
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il canale telefonico informativo non impone solo voce o tasti DTMF e offre alternative accessibili come operatore, chat o testo in tempo reale; nel touchpoint phone banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il canale telefonico informativo non impone solo voce o tasti DTMF e offre alternative accessibili come operatore, chat o testo in tempo reale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il canale telefonico informativo non impone solo voce o tasti DTMF e offre alternative accessibili come operatore, chat o testo in tempo reale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "operable",
              "phone_banking",
              "search_and_orientation"
            ]
          },
          {
            "id": "CC-ORI-CAL-001",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint call center, è garantito che gli operatori spiegano prodotti, costi e requisiti con script chiari, possibilità di ripetizione, invio riepilogo scritto e tempi adeguati?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              37,
              38,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: gli operatori spiegano prodotti, costi e requisiti con script chiari, possibilità di ripetizione, invio riepilogo scritto e tempi adeguati; nel touchpoint call center informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: gli operatori spiegano prodotti, costi e requisiti con script chiari, possibilità di ripetizione, invio riepilogo scritto e tempi adeguati è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: gli operatori spiegano prodotti, costi e requisiti con script chiari, possibilità di ripetizione, invio riepilogo scritto e tempi adeguati è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "call_center",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "pos",
              "search_and_orientation",
              "understandable"
            ]
          },
          {
            "id": "CC-ORI-CAL-002",
            "journey": "current_account",
            "macro_step": "search_and_orientation",
            "question_it": "Nel touchpoint call center, è garantito che il supporto clienti fornisce informazioni aggiornate sui canali accessibili disponibili per aprire e gestire il conto corrente?",
            "rationale_it": "Nel macro-step ricerca e orientamento al conto corrente, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "visual",
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              35,
              37,
              2,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il supporto clienti fornisce informazioni aggiornate sui canali accessibili disponibili per aprire e gestire il conto corrente; nel touchpoint call center componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il supporto clienti fornisce informazioni aggiornate sui canali accessibili disponibili per aprire e gestire il conto corrente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il supporto clienti fornisce informazioni aggiornate sui canali accessibili disponibili per aprire e gestire il conto corrente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "call_center",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "robust",
              "search_and_orientation",
              "visual"
            ]
          },
          {
            "id": "CC-APE-WEB-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che la pagina che avvia l'apertura conto spiega prerequisiti, documenti, tempi, canali alternativi e assistenza accessibile prima dell'inizio del flusso?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali, con disabilità visive: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational",
              "visual"
            ],
            "pour_principle": "understandable",
            "standards": [
              117,
              102,
              2,
              66
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la pagina che avvia l'apertura conto spiega prerequisiti, documenti, tempi, canali alternativi e assistenza accessibile prima dell'inizio del flusso; nel touchpoint sito istituzionale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la pagina che avvia l'apertura conto spiega prerequisiti, documenti, tempi, canali alternativi e assistenza accessibile prima dell'inizio del flusso è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la pagina che avvia l'apertura conto spiega prerequisiti, documenti, tempi, canali alternativi e assistenza accessibile prima dell'inizio del flusso è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "institutional_website",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBW-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint home banking web, è garantito che i moduli web di registrazione e KYC hanno label persistenti, campi obbligatori identificabili, formati accettati ed errori associati al campo?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              80,
              116,
              117,
              65
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i moduli web di registrazione e KYC hanno label persistenti, campi obbligatori identificabili, formati accettati ed errori associati al campo; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i moduli web di registrazione e KYC hanno label persistenti, campi obbligatori identificabili, formati accettati ed errori associati al campo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i moduli web di registrazione e KYC hanno label persistenti, campi obbligatori identificabili, formati accettati ed errori associati al campo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "home_banking_web",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBW-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint home banking web, è garantito che il video-riconoscimento web offre alternativa equivalente per utenti sordi, con difficoltà vocali o impossibilitati a sostenere una videochiamata?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità uditive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "auditory",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              2,
              75,
              46,
              38
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il video-riconoscimento web offre alternativa equivalente per utenti sordi, con difficoltà vocali o impossibilitati a sostenere una videochiamata; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il video-riconoscimento web offre alternativa equivalente per utenti sordi, con difficoltà vocali o impossibilitati a sostenere una videochiamata è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il video-riconoscimento web offre alternativa equivalente per utenti sordi, con difficoltà vocali o impossibilitati a sostenere una videochiamata è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "auditory",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "motor",
              "operable",
              "pos",
              "video",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBW-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint home banking web, è garantito che il caricamento documenti non richiede solo drag-and-drop, supporta tastiera, annuncia stato upload e consente correzione degli errori?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              116,
              123,
              57
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il caricamento documenti non richiede solo drag-and-drop, supporta tastiera, annuncia stato upload e consente correzione degli errori; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il caricamento documenti non richiede solo drag-and-drop, supporta tastiera, annuncia stato upload e consente correzione degli errori è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il caricamento documenti non richiede solo drag-and-drop, supporta tastiera, annuncia stato upload e consente correzione degli errori è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "en-301-549",
              "error-handling",
              "home_banking_web",
              "keyboard",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBW-004",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint home banking web, è garantito che oTP, 2FA e autenticazione iniziale sono accessibili, non dipendono da un solo canale temporizzato e non richiedono test cognitivi complessi?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              94,
              121,
              59,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: oTP, 2FA e autenticazione iniziale sono accessibili, non dipendono da un solo canale temporizzato e non richiedono test cognitivi complessi; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: oTP, 2FA e autenticazione iniziale sono accessibili, non dipendono da un solo canale temporizzato e non richiedono test cognitivi complessi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: oTP, 2FA e autenticazione iniziale sono accessibili, non dipendono da un solo canale temporizzato e non richiedono test cognitivi complessi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "motor",
              "operable",
              "otp",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBW-005",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint home banking web, è garantito che consensi privacy, condizioni contrattuali e checkbox di accettazione sono leggibili, navigabili e non obbligano ad accettazioni inconsapevoli?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "understandable",
            "standards": [
              80,
              117,
              119,
              68
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: consensi privacy, condizioni contrattuali e checkbox di accettazione sono leggibili, navigabili e non obbligano ad accettazioni inconsapevoli; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: consensi privacy, condizioni contrattuali e checkbox di accettazione sono leggibili, navigabili e non obbligano ad accettazioni inconsapevoli è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: consensi privacy, condizioni contrattuali e checkbox di accettazione sono leggibili, navigabili e non obbligano ad accettazioni inconsapevoli è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "en-301-549",
              "home_banking_web",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBW-006",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint home banking web, è garantito che il flusso di apertura mostra avanzamento, permette salvataggio, recupero sessione ed estensione dei timeout senza perdita dei dati inseriti?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              94,
              120,
              123,
              59
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il flusso di apertura mostra avanzamento, permette salvataggio, recupero sessione ed estensione dei timeout senza perdita dei dati inseriti; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il flusso di apertura mostra avanzamento, permette salvataggio, recupero sessione ed estensione dei timeout senza perdita dei dati inseriti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il flusso di apertura mostra avanzamento, permette salvataggio, recupero sessione ed estensione dei timeout senza perdita dei dati inseriti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "motor",
              "operable",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBW-007",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint home banking web, è garantito che il riepilogo finale dell'apertura conto è leggibile con tecnologie assistive e permette revisione e correzione prima dell'invio vincolante?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              120,
              99,
              68
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il riepilogo finale dell'apertura conto è leggibile con tecnologie assistive e permette revisione e correzione prima dell'invio vincolante; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il riepilogo finale dell'apertura conto è leggibile con tecnologie assistive e permette revisione e correzione prima dell'invio vincolante è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il riepilogo finale dell'apertura conto è leggibile con tecnologie assistive e permette revisione e correzione prima dell'invio vincolante è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "en-301-549",
              "home_banking_web",
              "motor",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBA-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint app di home banking, è garantito che il percorso di onboarding in app funziona con orientamento verticale e orizzontale, zoom di sistema e dimensioni testo aumentate?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              83,
              90,
              86,
              17
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il percorso di onboarding in app funziona con orientamento verticale e orizzontale, zoom di sistema e dimensioni testo aumentate; nel touchpoint app di home banking contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il percorso di onboarding in app funziona con orientamento verticale e orizzontale, zoom di sistema e dimensioni testo aumentate è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il percorso di onboarding in app funziona con orientamento verticale e orizzontale, zoom di sistema e dimensioni testo aumentate è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "motor",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBA-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint app di home banking, è garantito che la scansione documento tramite fotocamera offre istruzioni accessibili, feedback non solo visivo e alternativa di caricamento manuale?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              82,
              92,
              117,
              26
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la scansione documento tramite fotocamera offre istruzioni accessibili, feedback non solo visivo e alternativa di caricamento manuale; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la scansione documento tramite fotocamera offre istruzioni accessibili, feedback non solo visivo e alternativa di caricamento manuale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la scansione documento tramite fotocamera offre istruzioni accessibili, feedback non solo visivo e alternativa di caricamento manuale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBA-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint app di home banking, è garantito che biometria, liveness check o riconoscimento facciale hanno alternativa accessibile equivalente per chi non può completarli?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              41,
              121,
              2,
              1
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: biometria, liveness check o riconoscimento facciale hanno alternativa accessibile equivalente per chi non può completarli; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: biometria, liveness check o riconoscimento facciale hanno alternativa accessibile equivalente per chi non può completarli è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: biometria, liveness check o riconoscimento facciale hanno alternativa accessibile equivalente per chi non può completarli è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "biometria",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBA-004",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint app di home banking, è garantito che swipe, pinch, trascinamenti o gesture multipunto nel flusso di apertura hanno alternativa a singolo puntatore e comandi standard?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              104,
              105,
              108,
              20
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: swipe, pinch, trascinamenti o gesture multipunto nel flusso di apertura hanno alternativa a singolo puntatore e comandi standard; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: swipe, pinch, trascinamenti o gesture multipunto nel flusso di apertura hanno alternativa a singolo puntatore e comandi standard è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: swipe, pinch, trascinamenti o gesture multipunto nel flusso di apertura hanno alternativa a singolo puntatore e comandi standard è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "motor",
              "operable",
              "pin",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-HBA-005",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint app di home banking, è garantito che tutti i controlli dell'onboarding app espongono nome, ruolo, valore, stato e aggiornamenti dinamici alle tecnologie assistive?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor"
            ],
            "pour_principle": "robust",
            "standards": [
              122,
              123,
              29,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: tutti i controlli dell'onboarding app espongono nome, ruolo, valore, stato e aggiornamenti dinamici alle tecnologie assistive; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: tutti i controlli dell'onboarding app espongono nome, ruolo, valore, stato e aggiornamenti dinamici alle tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: tutti i controlli dell'onboarding app espongono nome, ruolo, valore, stato e aggiornamenti dinamici alle tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "current_account",
              "en-301-549",
              "home_banking_app",
              "motor",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-DOC-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che il pacchetto contrattuale di apertura conto è fornito in PDF accessibile con tag, segnalibri, lingua, ordine di lettura e metadati corretti?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              73,
              80,
              101,
              5
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il pacchetto contrattuale di apertura conto è fornito in PDF accessibile con tag, segnalibri, lingua, ordine di lettura e metadati corretti; nel touchpoint documenti digitali e PDF contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il pacchetto contrattuale di apertura conto è fornito in PDF accessibile con tag, segnalibri, lingua, ordine di lettura e metadati corretti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il pacchetto contrattuale di apertura conto è fornito in PDF accessibile con tag, segnalibri, lingua, ordine di lettura e metadati corretti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "en-301-549",
              "pdf",
              "perceivable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-APE-DOC-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che i campi firma, consenso e dati personali nei documenti digitali compilabili hanno etichette, ordine tab e istruzioni accessibili?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              99,
              117,
              122,
              12
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i campi firma, consenso e dati personali nei documenti digitali compilabili hanno etichette, ordine tab e istruzioni accessibili; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i campi firma, consenso e dati personali nei documenti digitali compilabili hanno etichette, ordine tab e istruzioni accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i campi firma, consenso e dati personali nei documenti digitali compilabili hanno etichette, ordine tab e istruzioni accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "en-301-549",
              "firma",
              "motor",
              "robust",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-APE-DOC-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che esempi economici, ISC, costi e scenari nei documenti sono presentati con tabelle accessibili e spiegazioni comprensibili?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              80,
              112,
              5,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: esempi economici, ISC, costi e scenari nei documenti sono presentati con tabelle accessibili e spiegazioni comprensibili; nel touchpoint documenti digitali e PDF informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: esempi economici, ISC, costi e scenari nei documenti sono presentati con tabelle accessibili e spiegazioni comprensibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: esempi economici, ISC, costi e scenari nei documenti sono presentati con tabelle accessibili e spiegazioni comprensibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "tabelle",
              "understandable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-APE-EML-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che email e push di attivazione conto indicano azione richiesta, scadenze, link e contatti assistenza in modo accessibile e non ambiguo?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              100,
              117,
              112,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: email e push di attivazione conto indicano azione richiesta, scadenze, link e contatti assistenza in modo accessibile e non ambiguo; nel touchpoint email, SMS e notifiche push informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: email e push di attivazione conto indicano azione richiesta, scadenze, link e contatti assistenza in modo accessibile e non ambiguo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: email e push di attivazione conto indicano azione richiesta, scadenze, link e contatti assistenza in modo accessibile e non ambiguo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "notifiche",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-EML-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che codici, conferme e notifiche di sicurezza sono leggibili da screen reader, non sono solo in immagine e supportano tempi adeguati?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "robust",
            "standards": [
              74,
              94,
              123,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: codici, conferme e notifiche di sicurezza sono leggibili da screen reader, non sono solo in immagine e supportano tempi adeguati; nel touchpoint email, SMS e notifiche push componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: codici, conferme e notifiche di sicurezza sono leggibili da screen reader, non sono solo in immagine e supportano tempi adeguati è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: codici, conferme e notifiche di sicurezza sono leggibili da screen reader, non sono solo in immagine e supportano tempi adeguati è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "email_push_notifications",
              "en-301-549",
              "motor",
              "notifiche",
              "robust",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-BOT-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che l'assistente virtuale per apertura conto mantiene il contesto della richiesta, permette recupero degli step e trasferisce a operatore senza ripetizioni inutili?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali, con disabilità uditive: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational",
              "auditory"
            ],
            "pour_principle": "robust",
            "standards": [
              120,
              123,
              38,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l'assistente virtuale per apertura conto mantiene il contesto della richiesta, permette recupero degli step e trasferisce a operatore senza ripetizioni inutili; nel touchpoint chatbot e assistente virtuale componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l'assistente virtuale per apertura conto mantiene il contesto della richiesta, permette recupero degli step e trasferisce a operatore senza ripetizioni inutili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l'assistente virtuale per apertura conto mantiene il contesto della richiesta, permette recupero degli step e trasferisce a operatore senza ripetizioni inutili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "auditory",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "robust",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-BOT-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot spiega KYC, antiriciclaggio, documenti richiesti e passaggi di firma con frasi brevi e possibilità di approfondire?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              117,
              2,
              37
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot spiega KYC, antiriciclaggio, documenti richiesti e passaggi di firma con frasi brevi e possibilità di approfondire; nel touchpoint chatbot e assistente virtuale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot spiega KYC, antiriciclaggio, documenti richiesti e passaggi di firma con frasi brevi e possibilità di approfondire è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot spiega KYC, antiriciclaggio, documenti richiesti e passaggi di firma con frasi brevi e possibilità di approfondire è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "pos",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-MED-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che tutorial video e guide visuali per aprire il conto includono sottotitoli, trascrizione, audio descrizione o alternativa testuale completa?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              77,
              78,
              51
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: tutorial video e guide visuali per aprire il conto includono sottotitoli, trascrizione, audio descrizione o alternativa testuale completa; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: tutorial video e guide visuali per aprire il conto includono sottotitoli, trascrizione, audio descrizione o alternativa testuale completa è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: tutorial video e guide visuali per aprire il conto includono sottotitoli, trascrizione, audio descrizione o alternativa testuale completa è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_opening",
              "auditory",
              "cognitive",
              "current_account",
              "digital_media",
              "en-301-549",
              "perceivable",
              "sottotitoli",
              "video",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-MED-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che qR code, deep link e campagne che portano all'app hanno alternativa testuale e percorso equivalente senza scansione obbligatoria?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              74,
              92,
              109,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: qR code, deep link e campagne che portano all'app hanno alternativa testuale e percorso equivalente senza scansione obbligatoria; nel touchpoint contenuti digital media tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: qR code, deep link e campagne che portano all'app hanno alternativa testuale e percorso equivalente senza scansione obbligatoria è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: qR code, deep link e campagne che portano all'app hanno alternativa testuale e percorso equivalente senza scansione obbligatoria è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_opening",
              "current_account",
              "digital_media",
              "eaa",
              "elderly_temporary_situational",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-TEL-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint phone banking, è garantito che il supporto telefonico all'apertura conto offre canali equivalenti per utenti sordi o con difficoltà vocali, come RTT, chat o appuntamento assistito?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint phone banking può escludere o penalizzare utenti con disabilità uditive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "phone_banking",
            "affected_user_categories": [
              "auditory",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              46,
              38,
              2,
              1
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il supporto telefonico all'apertura conto offre canali equivalenti per utenti sordi o con difficoltà vocali, come RTT, chat o appuntamento assistito; nel touchpoint phone banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il supporto telefonico all'apertura conto offre canali equivalenti per utenti sordi o con difficoltà vocali, come RTT, chat o appuntamento assistito è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il supporto telefonico all'apertura conto offre canali equivalenti per utenti sordi o con difficoltà vocali, come RTT, chat o appuntamento assistito è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "account_opening",
              "auditory",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "operable",
              "phone_banking"
            ]
          },
          {
            "id": "CC-APE-CAL-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint call center, è garantito che la verifica identità gestita da call center non si basa solo su riconoscimento vocale e consente fattori alternativi sicuri e accessibili?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              121,
              41,
              38,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la verifica identità gestita da call center non si basa solo su riconoscimento vocale e consente fattori alternativi sicuri e accessibili; nel touchpoint call center tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la verifica identità gestita da call center non si basa solo su riconoscimento vocale e consente fattori alternativi sicuri e accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la verifica identità gestita da call center non si basa solo su riconoscimento vocale e consente fattori alternativi sicuri e accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "account_opening",
              "auditory",
              "call-center",
              "call_center",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "operable",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-CAL-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint call center, è garantito che le barriere incontrate durante l'apertura conto sono registrabili come ticket accessibilità con tracciamento, richiamo e soluzione su canale alternativo?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "visual",
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              37,
              38,
              2,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le barriere incontrate durante l'apertura conto sono registrabili come ticket accessibilità con tracciamento, richiamo e soluzione su canale alternativo; nel touchpoint call center componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le barriere incontrate durante l'apertura conto sono registrabili come ticket accessibilità con tracciamento, richiamo e soluzione su canale alternativo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le barriere incontrate durante l'apertura conto sono registrabili come ticket accessibilità con tracciamento, richiamo e soluzione su canale alternativo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "account_opening",
              "auditory",
              "call_center",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "robust",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-HBW-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint home banking web, è garantito che dashboard, saldo e movimenti del conto sono esposti con struttura semantica, intestazioni e relazioni leggibili da screen reader?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              102,
              52,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: dashboard, saldo e movimenti del conto sono esposti con struttura semantica, intestazioni e relazioni leggibili da screen reader; nel touchpoint home banking web contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: dashboard, saldo e movimenti del conto sono esposti con struttura semantica, intestazioni e relazioni leggibili da screen reader è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: dashboard, saldo e movimenti del conto sono esposti con struttura semantica, intestazioni e relazioni leggibili da screen reader è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "home_banking_web",
              "perceivable",
              "pos",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBW-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint home banking web, è garantito che il bonifico web ha campi, IBAN, importi, causale, beneficiario, errori e suggerimenti associati correttamente e comprensibili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              117,
              118,
              67
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il bonifico web ha campi, IBAN, importi, causale, beneficiario, errori e suggerimenti associati correttamente e comprensibili; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il bonifico web ha campi, IBAN, importi, causale, beneficiario, errori e suggerimenti associati correttamente e comprensibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il bonifico web ha campi, IBAN, importi, causale, beneficiario, errori e suggerimenti associati correttamente e comprensibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "bonifico",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "home_banking_web",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBW-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint home banking web, è garantito che prima di inviare pagamenti o bonifici, il riepilogo è accessibile e consente verifica, correzione o annullamento dell'operazione?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              119,
              120,
              99,
              68
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: prima di inviare pagamenti o bonifici, il riepilogo è accessibile e consente verifica, correzione o annullamento dell'operazione; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: prima di inviare pagamenti o bonifici, il riepilogo è accessibile e consente verifica, correzione o annullamento dell'operazione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: prima di inviare pagamenti o bonifici, il riepilogo è accessibile e consente verifica, correzione o annullamento dell'operazione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "en-301-549",
              "home_banking_web",
              "motor",
              "operable",
              "pagamenti",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBW-004",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint home banking web, è garantito che tabelle movimenti, filtri, ordinamenti, ricerca e paginazione sono utilizzabili da tastiera e mantengono intestazioni associate ai dati?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              80,
              92,
              99,
              57
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: tabelle movimenti, filtri, ordinamenti, ricerca e paginazione sono utilizzabili da tastiera e mantengono intestazioni associate ai dati; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: tabelle movimenti, filtri, ordinamenti, ricerca e paginazione sono utilizzabili da tastiera e mantengono intestazioni associate ai dati è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: tabelle movimenti, filtri, ordinamenti, ricerca e paginazione sono utilizzabili da tastiera e mantengono intestazioni associate ai dati è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "en-301-549",
              "home_banking_web",
              "keyboard",
              "motor",
              "operable",
              "tabelle",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBW-005",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint home banking web, è garantito che timeout, logout automatico e scadenza sessione sono annunciati, prorogabili e non causano perdita improvvisa di operazioni in corso?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              94,
              96,
              123,
              59
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: timeout, logout automatico e scadenza sessione sono annunciati, prorogabili e non causano perdita improvvisa di operazioni in corso; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: timeout, logout automatico e scadenza sessione sono annunciati, prorogabili e non causano perdita improvvisa di operazioni in corso è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: timeout, logout automatico e scadenza sessione sono annunciati, prorogabili e non causano perdita improvvisa di operazioni in corso è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "motor",
              "operable",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBW-006",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint home banking web, è garantito che errori, avvisi di frode, esiti pagamento e stati operazione sono annunciati come messaggi di stato senza spostare indebitamente il focus?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              123,
              116,
              99,
              70
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: errori, avvisi di frode, esiti pagamento e stati operazione sono annunciati come messaggi di stato senza spostare indebitamente il focus; nel touchpoint home banking web componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: errori, avvisi di frode, esiti pagamento e stati operazione sono annunciati come messaggi di stato senza spostare indebitamente il focus è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: errori, avvisi di frode, esiti pagamento e stati operazione sono annunciati come messaggi di stato senza spostare indebitamente il focus è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "en-301-549",
              "error-handling",
              "focus",
              "home_banking_web",
              "pagamenti",
              "pos",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBA-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di home banking, è garantito che saldo, movimenti, carte e pulsanti principali dell'app espongono nome, ruolo, valore e stato corretti alle tecnologie assistive mobili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor"
            ],
            "pour_principle": "robust",
            "standards": [
              122,
              123,
              29,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: saldo, movimenti, carte e pulsanti principali dell'app espongono nome, ruolo, valore e stato corretti alle tecnologie assistive mobili; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: saldo, movimenti, carte e pulsanti principali dell'app espongono nome, ruolo, valore e stato corretti alle tecnologie assistive mobili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: saldo, movimenti, carte e pulsanti principali dell'app espongono nome, ruolo, valore e stato corretti alle tecnologie assistive mobili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "current_account",
              "en-301-549",
              "home_banking_app",
              "motor",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBA-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di home banking, è garantito che il flusso bonifico in app non richiede gesture complesse, ha target di tocco adeguati e funziona con switch control o tastiera esterna?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              104,
              109,
              92,
              20
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il flusso bonifico in app non richiede gesture complesse, ha target di tocco adeguati e funziona con switch control o tastiera esterna; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il flusso bonifico in app non richiede gesture complesse, ha target di tocco adeguati e funziona con switch control o tastiera esterna è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il flusso bonifico in app non richiede gesture complesse, ha target di tocco adeguati e funziona con switch control o tastiera esterna è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "bonifico",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "keyboard",
              "motor",
              "operable",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBA-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di home banking, è garantito che autorizzazioni push, biometria e conferme dispositive hanno fallback accessibile e non impediscono l'operazione con screen reader attivo?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              121,
              94,
              41,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: autorizzazioni push, biometria e conferme dispositive hanno fallback accessibile e non impediscono l'operazione con screen reader attivo; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: autorizzazioni push, biometria e conferme dispositive hanno fallback accessibile e non impediscono l'operazione con screen reader attivo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: autorizzazioni push, biometria e conferme dispositive hanno fallback accessibile e non impediscono l'operazione con screen reader attivo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "biometria",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "home_banking_app",
              "motor",
              "operable",
              "pos",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBA-004",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di home banking, è garantito che scansione QR, bollettini o assegni tramite fotocamera hanno alternativa di inserimento manuale e feedback accessibile sugli errori?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              82,
              92,
              116,
              25
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: scansione QR, bollettini o assegni tramite fotocamera hanno alternativa di inserimento manuale e feedback accessibile sugli errori; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: scansione QR, bollettini o assegni tramite fotocamera hanno alternativa di inserimento manuale e feedback accessibile sugli errori è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: scansione QR, bollettini o assegni tramite fotocamera hanno alternativa di inserimento manuale e feedback accessibile sugli errori è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "assegno",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "home_banking_app",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBA-005",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di home banking, è garantito che l'app rispetta preferenze di sistema per dimensione testo, contrasto, riduzione movimento e modalità scura senza perdita di funzionalità?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              90,
              98,
              33
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l'app rispetta preferenze di sistema per dimensione testo, contrasto, riduzione movimento e modalità scura senza perdita di funzionalità; nel touchpoint app di home banking contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l'app rispetta preferenze di sistema per dimensione testo, contrasto, riduzione movimento e modalità scura senza perdita di funzionalità è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l'app rispetta preferenze di sistema per dimensione testo, contrasto, riduzione movimento e modalità scura senza perdita di funzionalità è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "contrast",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-HBA-006",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di home banking, è garantito che avvisi di inattività, logout e conferme operative in app sono percepibili tramite testo, lettore schermo, vibrazione o alternative non solo sonore?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              88,
              94,
              123,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: avvisi di inattività, logout e conferme operative in app sono percepibili tramite testo, lettore schermo, vibrazione o alternative non solo sonore; nel touchpoint app di home banking contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: avvisi di inattività, logout e conferme operative in app sono percepibili tramite testo, lettore schermo, vibrazione o alternative non solo sonore è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: avvisi di inattività, logout e conferme operative in app sono percepibili tramite testo, lettore schermo, vibrazione o alternative non solo sonore è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "auditory",
              "cognitive",
              "current_account",
              "en-301-549",
              "home_banking_app",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-EML-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che notifiche di sicurezza, frode, saldo e movimenti sono leggibili da screen reader e non affidano criticità solo a colore, suono o immagine?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              74,
              85,
              123,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: notifiche di sicurezza, frode, saldo e movimenti sono leggibili da screen reader e non affidano criticità solo a colore, suono o immagine; nel touchpoint email, SMS e notifiche push contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: notifiche di sicurezza, frode, saldo e movimenti sono leggibili da screen reader e non affidano criticità solo a colore, suono o immagine è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: notifiche di sicurezza, frode, saldo e movimenti sono leggibili da screen reader e non affidano criticità solo a colore, suono o immagine è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_operations",
              "auditory",
              "cognitive",
              "current_account",
              "email_push_notifications",
              "en-301-549",
              "notifiche",
              "perceivable",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-EML-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che le azioni rapide Approva, Nega, Contesta o Blocca nelle notifiche sono etichettate, confermabili e annullabili quando possibile?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              106,
              119,
              122,
              22
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le azioni rapide Approva, Nega, Contesta o Blocca nelle notifiche sono etichettate, confermabili e annullabili quando possibile; nel touchpoint email, SMS e notifiche push tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le azioni rapide Approva, Nega, Contesta o Blocca nelle notifiche sono etichettate, confermabili e annullabili quando possibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le azioni rapide Approva, Nega, Contesta o Blocca nelle notifiche sono etichettate, confermabili e annullabili quando possibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "email_push_notifications",
              "en-301-549",
              "motor",
              "notifiche",
              "operable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-EML-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che email con estratti, ricevute o link a documenti usano link descrittivi, scadenze chiare e alternative se il link non è accessibile?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              100,
              117,
              6,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: email con estratti, ricevute o link a documenti usano link descrittivi, scadenze chiare e alternative se il link non è accessibile; nel touchpoint email, SMS e notifiche push informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: email con estratti, ricevute o link a documenti usano link descrittivi, scadenze chiare e alternative se il link non è accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: email con estratti, ricevute o link a documenti usano link descrittivi, scadenze chiare e alternative se il link non è accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "en-301-549",
              "notifiche",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-DOC-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che estratti conto, contabili, quietanze e ricevute sono scaricabili in formato accessibile, testuale, taggato e ricercabile?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              73,
              80,
              91,
              5
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: estratti conto, contabili, quietanze e ricevute sono scaricabili in formato accessibile, testuale, taggato e ricercabile; nel touchpoint documenti digitali e PDF contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: estratti conto, contabili, quietanze e ricevute sono scaricabili in formato accessibile, testuale, taggato e ricercabile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: estratti conto, contabili, quietanze e ricevute sono scaricabili in formato accessibile, testuale, taggato e ricercabile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "en-301-549",
              "pdf",
              "perceivable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-OPE-DOC-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che export movimenti in CSV, Excel o PDF includono intestazioni, formati data/importo chiari e struttura utilizzabile con tecnologie assistive?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              80,
              112,
              5,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: export movimenti in CSV, Excel o PDF includono intestazioni, formati data/importo chiari e struttura utilizzabile con tecnologie assistive; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: export movimenti in CSV, Excel o PDF includono intestazioni, formati data/importo chiari e struttura utilizzabile con tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: export movimenti in CSV, Excel o PDF includono intestazioni, formati data/importo chiari e struttura utilizzabile con tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "pdf",
              "robust",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-OPE-BOT-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot consente un percorso accessibile e prioritario per blocco carta, sospetta frode o perdita credenziali senza dipendere da input vocale?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità uditive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "visual",
              "motor",
              "auditory",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              117,
              38,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot consente un percorso accessibile e prioritario per blocco carta, sospetta frode o perdita credenziali senza dipendere da input vocale; nel touchpoint chatbot e assistente virtuale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot consente un percorso accessibile e prioritario per blocco carta, sospetta frode o perdita credenziali senza dipendere da input vocale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot consente un percorso accessibile e prioritario per blocco carta, sospetta frode o perdita credenziali senza dipendere da input vocale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "auditory",
              "carta",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-BOT-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che la modalità vocale del chatbot ha equivalente testuale, trascrizione e non esclude utenti sordi o con difficoltà di parola?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              75,
              76,
              46,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la modalità vocale del chatbot ha equivalente testuale, trascrizione e non esclude utenti sordi o con difficoltà di parola; nel touchpoint chatbot e assistente virtuale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la modalità vocale del chatbot ha equivalente testuale, trascrizione e non esclude utenti sordi o con difficoltà di parola è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la modalità vocale del chatbot ha equivalente testuale, trascrizione e non esclude utenti sordi o con difficoltà di parola è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "auditory",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "perceivable",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-BOT-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che quando un intento non è compreso, il chatbot propone esempi, riformulazione, uscita e operatore senza cicli infiniti o perdita del contesto?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              118,
              120,
              123,
              38
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: quando un intento non è compreso, il chatbot propone esempi, riformulazione, uscita e operatore senza cicli infiniti o perdita del contesto; nel touchpoint chatbot e assistente virtuale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: quando un intento non è compreso, il chatbot propone esempi, riformulazione, uscita e operatore senza cicli infiniti o perdita del contesto è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: quando un intento non è compreso, il chatbot propone esempi, riformulazione, uscita e operatore senza cicli infiniti o perdita del contesto è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-MED-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che video tutorial su bonifici, carte, pagamenti e sicurezza hanno sottotitoli, trascrizione, audio descrizione e passaggi non solo visivi?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              77,
              78,
              51
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: video tutorial su bonifici, carte, pagamenti e sicurezza hanno sottotitoli, trascrizione, audio descrizione e passaggi non solo visivi; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: video tutorial su bonifici, carte, pagamenti e sicurezza hanno sottotitoli, trascrizione, audio descrizione e passaggi non solo visivi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: video tutorial su bonifici, carte, pagamenti e sicurezza hanno sottotitoli, trascrizione, audio descrizione e passaggi non solo visivi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_operations",
              "auditory",
              "cognitive",
              "current_account",
              "digital_media",
              "en-301-549",
              "pagamenti",
              "perceivable",
              "sottotitoli",
              "video",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-WEB-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che avvisi di manutenzione, indisponibilità servizi e aggiornamenti sicurezza sono pubblicati in formato accessibile e raggiungibile prima del login?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              123,
              70,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: avvisi di manutenzione, indisponibilità servizi e aggiornamenti sicurezza sono pubblicati in formato accessibile e raggiungibile prima del login; nel touchpoint sito istituzionale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: avvisi di manutenzione, indisponibilità servizi e aggiornamenti sicurezza sono pubblicati in formato accessibile e raggiungibile prima del login è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: avvisi di manutenzione, indisponibilità servizi e aggiornamenti sicurezza sono pubblicati in formato accessibile e raggiungibile prima del login è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "institutional_website",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-TEL-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint phone banking, è garantito che iVR e phone banking per saldo, movimenti e bonifici supportano alternative a voce e tasti, inclusi operatore e testo in tempo reale?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint phone banking può escludere o penalizzare utenti con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "phone_banking",
            "affected_user_categories": [
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              46,
              38,
              2,
              1
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: iVR e phone banking per saldo, movimenti e bonifici supportano alternative a voce e tasti, inclusi operatore e testo in tempo reale; nel touchpoint phone banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: iVR e phone banking per saldo, movimenti e bonifici supportano alternative a voce e tasti, inclusi operatore e testo in tempo reale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: iVR e phone banking per saldo, movimenti e bonifici supportano alternative a voce e tasti, inclusi operatore e testo in tempo reale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "account_operations",
              "auditory",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "operable",
              "phone_banking"
            ]
          },
          {
            "id": "CC-OPE-CAL-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint call center, è garantito che conferme telefoniche di operazioni, reclami o blocchi sono ripetibili lentamente e inviate anche come riepilogo scritto accessibile?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              37,
              38,
              112,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: conferme telefoniche di operazioni, reclami o blocchi sono ripetibili lentamente e inviate anche come riepilogo scritto accessibile; nel touchpoint call center informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: conferme telefoniche di operazioni, reclami o blocchi sono ripetibili lentamente e inviate anche come riepilogo scritto accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: conferme telefoniche di operazioni, reclami o blocchi sono ripetibili lentamente e inviate anche come riepilogo scritto accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "account_operations",
              "auditory",
              "call_center",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-WEB-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che le istruzioni per chiudere il conto sono facili da trovare, spiegano passaggi, tempi, costi, prerequisiti e canali accessibili alternativi?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali, con disabilità visive: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational",
              "visual"
            ],
            "pour_principle": "understandable",
            "standards": [
              101,
              112,
              2,
              63
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le istruzioni per chiudere il conto sono facili da trovare, spiegano passaggi, tempi, costi, prerequisiti e canali accessibili alternativi; nel touchpoint sito istituzionale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le istruzioni per chiudere il conto sono facili da trovare, spiegano passaggi, tempi, costi, prerequisiti e canali accessibili alternativi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le istruzioni per chiudere il conto sono facili da trovare, spiegano passaggi, tempi, costi, prerequisiti e canali accessibili alternativi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "institutional_website",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-HBW-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint home banking web, è garantito che il modulo web di richiesta chiusura conto ha campi, istruzioni, errori e documenti richiesti accessibili e comprensibili?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "understandable",
            "standards": [
              80,
              116,
              117,
              66
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il modulo web di richiesta chiusura conto ha campi, istruzioni, errori e documenti richiesti accessibili e comprensibili; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il modulo web di richiesta chiusura conto ha campi, istruzioni, errori e documenti richiesti accessibili e comprensibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il modulo web di richiesta chiusura conto ha campi, istruzioni, errori e documenti richiesti accessibili e comprensibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "en-301-549",
              "error-handling",
              "home_banking_web",
              "motor",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-HBW-002",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint home banking web, è garantito che prima dell'invio della chiusura, il sistema presenta effetti su saldo, carte, domiciliazioni e bonifici ricorrenti in riepilogo accessibile?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              120,
              68,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: prima dell'invio della chiusura, il sistema presenta effetti su saldo, carte, domiciliazioni e bonifici ricorrenti in riepilogo accessibile; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: prima dell'invio della chiusura, il sistema presenta effetti su saldo, carte, domiciliazioni e bonifici ricorrenti in riepilogo accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: prima dell'invio della chiusura, il sistema presenta effetti su saldo, carte, domiciliazioni e bonifici ricorrenti in riepilogo accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-HBA-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint app di home banking, è garantito che la richiesta di chiusura in app non richiede gesture complesse, ha target di tocco adeguati e conferme accessibili?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              104,
              109,
              122,
              23
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la richiesta di chiusura in app non richiede gesture complesse, ha target di tocco adeguati e conferme accessibili; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la richiesta di chiusura in app non richiede gesture complesse, ha target di tocco adeguati e conferme accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la richiesta di chiusura in app non richiede gesture complesse, ha target di tocco adeguati e conferme accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-HBA-002",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint app di home banking, è garantito che stati di revoca carta, chiusura rapporti collegati e completamento pratica sono annunciati chiaramente a screen reader e notifiche?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              123,
              80,
              30,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: stati di revoca carta, chiusura rapporti collegati e completamento pratica sono annunciati chiaramente a screen reader e notifiche; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: stati di revoca carta, chiusura rapporti collegati e completamento pratica sono annunciati chiaramente a screen reader e notifiche è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: stati di revoca carta, chiusura rapporti collegati e completamento pratica sono annunciati chiaramente a screen reader e notifiche è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "carta",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "home_banking_app",
              "notifiche",
              "robust",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-DOC-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che moduli di chiusura, dichiarazioni residue ed estratti finali sono compilabili o consultabili in formato accessibile e non solo scansione?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              73,
              80,
              117,
              10
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: moduli di chiusura, dichiarazioni residue ed estratti finali sono compilabili o consultabili in formato accessibile e non solo scansione; nel touchpoint documenti digitali e PDF contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: moduli di chiusura, dichiarazioni residue ed estratti finali sono compilabili o consultabili in formato accessibile e non solo scansione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: moduli di chiusura, dichiarazioni residue ed estratti finali sono compilabili o consultabili in formato accessibile e non solo scansione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "en-301-549",
              "motor",
              "pdf",
              "perceivable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "CC-CHI-EML-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che conferme, richieste integrazione e scadenze relative alla chiusura conto sono inviate con contenuto accessibile e allegati utilizzabili?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              100,
              5,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: conferme, richieste integrazione e scadenze relative alla chiusura conto sono inviate con contenuto accessibile e allegati utilizzabili; nel touchpoint email, SMS e notifiche push contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: conferme, richieste integrazione e scadenze relative alla chiusura conto sono inviate con contenuto accessibile e allegati utilizzabili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: conferme, richieste integrazione e scadenze relative alla chiusura conto sono inviate con contenuto accessibile e allegati utilizzabili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "en-301-549",
              "notifiche",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-BOT-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot consente di capire e avviare la chiusura conto senza blocchi conversazionali e trasferisce a operatore quando serve firma o verifica?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità uditive, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              118,
              123,
              38,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot consente di capire e avviare la chiusura conto senza blocchi conversazionali e trasferisce a operatore quando serve firma o verifica; nel touchpoint chatbot e assistente virtuale componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot consente di capire e avviare la chiusura conto senza blocchi conversazionali e trasferisce a operatore quando serve firma o verifica è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot consente di capire e avviare la chiusura conto senza blocchi conversazionali e trasferisce a operatore quando serve firma o verifica è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "auditory",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "robust",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-MED-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che guide video, FAQ visuali o tutorial sulla chiusura conto hanno sottotitoli, trascrizione e alternativa testuale completa?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              77,
              78,
              51
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: guide video, FAQ visuali o tutorial sulla chiusura conto hanno sottotitoli, trascrizione e alternativa testuale completa; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: guide video, FAQ visuali o tutorial sulla chiusura conto hanno sottotitoli, trascrizione e alternativa testuale completa è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: guide video, FAQ visuali o tutorial sulla chiusura conto hanno sottotitoli, trascrizione e alternativa testuale completa è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_closure",
              "auditory",
              "cognitive",
              "current_account",
              "digital_media",
              "en-301-549",
              "perceivable",
              "sottotitoli",
              "video",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-TEL-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint phone banking, è garantito che la chiusura conto tramite telefono o supporto remoto non richiede solo interazione vocale e offre canali equivalenti per utenti sordi?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint phone banking può escludere o penalizzare utenti con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "phone_banking",
            "affected_user_categories": [
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              46,
              38,
              2,
              1
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la chiusura conto tramite telefono o supporto remoto non richiede solo interazione vocale e offre canali equivalenti per utenti sordi; nel touchpoint phone banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la chiusura conto tramite telefono o supporto remoto non richiede solo interazione vocale e offre canali equivalenti per utenti sordi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la chiusura conto tramite telefono o supporto remoto non richiede solo interazione vocale e offre canali equivalenti per utenti sordi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "account_closure",
              "auditory",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "operable",
              "phone_banking"
            ]
          },
          {
            "id": "CC-CHI-CAL-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint call center, è garantito che reclami o contestazioni dopo la chiusura sono gestibili con ticket accessibile, riepilogo scritto, tempi dichiarati e canali alternativi?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              37,
              38,
              112,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: reclami o contestazioni dopo la chiusura sono gestibili con ticket accessibile, riepilogo scritto, tempi dichiarati e canali alternativi; nel touchpoint call center informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: reclami o contestazioni dopo la chiusura sono gestibili con ticket accessibile, riepilogo scritto, tempi dichiarati e canali alternativi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: reclami o contestazioni dopo la chiusura sono gestibili con ticket accessibile, riepilogo scritto, tempi dichiarati e canali alternativi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "account_closure",
              "auditory",
              "call_center",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-WEB-002",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che dopo la chiusura, canali per reclami, documenti storici e assistenza restano accessibili anche a utenti senza accesso attivo all'home banking?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              2,
              101,
              122,
              69
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: dopo la chiusura, canali per reclami, documenti storici e assistenza restano accessibili anche a utenti senza accesso attivo all'home banking; nel touchpoint sito istituzionale componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: dopo la chiusura, canali per reclami, documenti storici e assistenza restano accessibili anche a utenti senza accesso attivo all'home banking è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: dopo la chiusura, canali per reclami, documenti storici e assistenza restano accessibili anche a utenti senza accesso attivo all'home banking è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "institutional_website",
              "motor",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-FIL-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint filiale, è garantito che ingresso, percorso interno e area appuntamenti in filiale consentano l'apertura del conto senza barriere fisiche?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              2,
              137,
              129
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ingresso, percorso interno e area appuntamenti in filiale consentano l'apertura del conto senza barriere fisiche; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ingresso, percorso interno e area appuntamenti in filiale consentano l'apertura del conto senza barriere fisiche è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ingresso, percorso interno e area appuntamenti in filiale consentano l'apertura del conto senza barriere fisiche è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_opening",
              "branch",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "filiale",
              "hardware",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-APE-FIL-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint filiale, è garantito che il sistema di prenotazione/gestione coda per l'apertura conto sia usabile con comandi tattili, audio e visivi equivalenti?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "visual",
              "auditory",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              42,
              130,
              109
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il sistema di prenotazione/gestione coda per l'apertura conto sia usabile con comandi tattili, audio e visivi equivalenti; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il sistema di prenotazione/gestione coda per l'apertura conto sia usabile con comandi tattili, audio e visivi equivalenti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il sistema di prenotazione/gestione coda per l'apertura conto sia usabile con comandi tattili, audio e visivi equivalenti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_opening",
              "auditory",
              "branch",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-FIL-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint filiale, è garantito che sportelli, scrivanie e sedute per la sottoscrizione siano raggiungibili e utilizzabili da persone in carrozzina o con ausili?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              133,
              128,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: sportelli, scrivanie e sedute per la sottoscrizione siano raggiungibili e utilizzabili da persone in carrozzina o con ausili; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: sportelli, scrivanie e sedute per la sottoscrizione siano raggiungibili e utilizzabili da persone in carrozzina o con ausili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: sportelli, scrivanie e sedute per la sottoscrizione siano raggiungibili e utilizzabili da persone in carrozzina o con ausili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_opening",
              "branch",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "hardware",
              "motor",
              "operable"
            ]
          },
          {
            "id": "CC-APE-FIL-004",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint filiale, è garantito che segnaletica, numerazione stanze e indicazioni verso consulenti e casse siano leggibili, ad alto contrasto e non basate solo sul colore?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              85,
              89,
              135
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: segnaletica, numerazione stanze e indicazioni verso consulenti e casse siano leggibili, ad alto contrasto e non basate solo sul colore; nel touchpoint filiale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: segnaletica, numerazione stanze e indicazioni verso consulenti e casse siano leggibili, ad alto contrasto e non basate solo sul colore è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: segnaletica, numerazione stanze e indicazioni verso consulenti e casse siano leggibili, ad alto contrasto e non basate solo sul colore è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_opening",
              "branch",
              "cognitive",
              "contrast",
              "current_account",
              "elderly_temporary_situational",
              "hardware",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-CON-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che il consulente spieghi requisiti, costi, rischi e passaggi di apertura conto in linguaggio chiaro e verificando la comprensione?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali, con disabilità uditive: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational",
              "auditory"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              36,
              117
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il consulente spieghi requisiti, costi, rischi e passaggi di apertura conto in linguaggio chiaro e verificando la comprensione; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il consulente spieghi requisiti, costi, rischi e passaggi di apertura conto in linguaggio chiaro e verificando la comprensione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il consulente spieghi requisiti, costi, rischi e passaggi di apertura conto in linguaggio chiaro e verificando la comprensione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_opening",
              "auditory",
              "branch_consultant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "linguaggio-chiaro",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-CON-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che per utenti sordi o ipoacusici siano disponibili canali equivalenti al colloquio vocale, come testo, LIS, chat o supporto remoto?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità uditive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              45,
              36,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: per utenti sordi o ipoacusici siano disponibili canali equivalenti al colloquio vocale, come testo, LIS, chat o supporto remoto; nel touchpoint consulente di filiale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: per utenti sordi o ipoacusici siano disponibili canali equivalenti al colloquio vocale, come testo, LIS, chat o supporto remoto è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: per utenti sordi o ipoacusici siano disponibili canali equivalenti al colloquio vocale, come testo, LIS, chat o supporto remoto è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_opening",
              "auditory",
              "branch_consultant",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "perceivable"
            ]
          },
          {
            "id": "CC-APE-CON-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che l'eventuale presenza di accompagnatori o amministratori di sostegno non sostituisca indebitamente il consenso autonomo del cliente?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              36,
              119
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l'eventuale presenza di accompagnatori o amministratori di sostegno non sostituisca indebitamente il consenso autonomo del cliente; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l'eventuale presenza di accompagnatori o amministratori di sostegno non sostituisca indebitamente il consenso autonomo del cliente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l'eventuale presenza di accompagnatori o amministratori di sostegno non sostituisca indebitamente il consenso autonomo del cliente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_opening",
              "branch_consultant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "motor",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-PAP-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che contratti, moduli privacy e condizioni economiche siano disponibili in formati alternativi accessibili prima della firma?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              34,
              73,
              80
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: contratti, moduli privacy e condizioni economiche siano disponibili in formati alternativi accessibili prima della firma; nel touchpoint documenti cartacei contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: contratti, moduli privacy e condizioni economiche siano disponibili in formati alternativi accessibili prima della firma è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: contratti, moduli privacy e condizioni economiche siano disponibili in formati alternativi accessibili prima della firma è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "paper_documents",
              "pdf",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-PAP-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che campi da compilare, firme, deleghe e consensi cartacei siano chiaramente identificabili e compilabili anche con assistenza o strumenti compensativi?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              117,
              119,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: campi da compilare, firme, deleghe e consensi cartacei siano chiaramente identificabili e compilabili anche con assistenza o strumenti compensativi; nel touchpoint documenti cartacei tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: campi da compilare, firme, deleghe e consensi cartacei siano chiaramente identificabili e compilabili anche con assistenza o strumenti compensativi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: campi da compilare, firme, deleghe e consensi cartacei siano chiaramente identificabili e compilabili anche con assistenza o strumenti compensativi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_opening",
              "carta",
              "cognitive",
              "current_account",
              "en-301-549",
              "error-handling",
              "motor",
              "operable",
              "paper_documents",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-PAP-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che la sintesi di costi, canoni, commissioni e principali obblighi sia fornita in versione leggibile e comprensibile?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              110,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la sintesi di costi, canoni, commissioni e principali obblighi sia fornita in versione leggibile e comprensibile; nel touchpoint documenti cartacei informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la sintesi di costi, canoni, commissioni e principali obblighi sia fornita in versione leggibile e comprensibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la sintesi di costi, canoni, commissioni e principali obblighi sia fornita in versione leggibile e comprensibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "paper_documents",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-PAP-004",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che informative e consensi obbligatori non dipendano da caratteri troppo piccoli, basso contrasto o note leggibili solo a breve distanza?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, anziani o con limitazioni temporanee/situazionali, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "elderly_temporary_situational",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              90,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: informative e consensi obbligatori non dipendano da caratteri troppo piccoli, basso contrasto o note leggibili solo a breve distanza; nel touchpoint documenti cartacei contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: informative e consensi obbligatori non dipendano da caratteri troppo piccoli, basso contrasto o note leggibili solo a breve distanza è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: informative e consensi obbligatori non dipendano da caratteri troppo piccoli, basso contrasto o note leggibili solo a breve distanza è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_opening",
              "cognitive",
              "contrast",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "paper_documents",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-INF-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint materiale informativo, è garantito che brochure e fogli informativi sul conto corrente siano disponibili in formato accessibile, stampato leggibile e digitale compatibile con tecnologie assistive?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              3,
              73,
              81
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: brochure e fogli informativi sul conto corrente siano disponibili in formato accessibile, stampato leggibile e digitale compatibile con tecnologie assistive; nel touchpoint materiale informativo contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: brochure e fogli informativi sul conto corrente siano disponibili in formato accessibile, stampato leggibile e digitale compatibile con tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: brochure e fogli informativi sul conto corrente siano disponibili in formato accessibile, stampato leggibile e digitale compatibile con tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "informational_material",
              "pdf",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-INF-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint materiale informativo, è garantito che poster, espositori e materiali promozionali in filiale non comunichino condizioni essenziali solo tramite colore, immagini o testo non contrastato?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              74,
              85,
              89
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: poster, espositori e materiali promozionali in filiale non comunichino condizioni essenziali solo tramite colore, immagini o testo non contrastato; nel touchpoint materiale informativo contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: poster, espositori e materiali promozionali in filiale non comunichino condizioni essenziali solo tramite colore, immagini o testo non contrastato è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: poster, espositori e materiali promozionali in filiale non comunichino condizioni essenziali solo tramite colore, immagini o testo non contrastato è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "filiale",
              "informational_material",
              "perceivable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-INF-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint materiale informativo, è garantito che eventuali QR code o link verso condizioni di apertura non siano l'unico canale per ottenere informazioni obbligatorie?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              109,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: eventuali QR code o link verso condizioni di apertura non siano l'unico canale per ottenere informazioni obbligatorie; nel touchpoint materiale informativo tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: eventuali QR code o link verso condizioni di apertura non siano l'unico canale per ottenere informazioni obbligatorie è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: eventuali QR code o link verso condizioni di apertura non siano l'unico canale per ottenere informazioni obbligatorie è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_opening",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "informational_material",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-TAB-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che il cliente possa leggere o ascoltare integralmente i documenti sul tablet grafometrico prima di firmare?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              39,
              86,
              80
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il cliente possa leggere o ascoltare integralmente i documenti sul tablet grafometrico prima di firmare; nel touchpoint tavoletta grafometrica e firma elettronica contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il cliente possa leggere o ascoltare integralmente i documenti sul tablet grafometrico prima di firmare è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il cliente possa leggere o ascoltare integralmente i documenti sul tablet grafometrico prima di firmare è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "firma-grafometrica",
              "graphometric_tablet_e_signature",
              "perceivable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-TAB-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che la firma grafometrica non richieda esclusivamente precisione fine, pressione o gesto manuale non sostituibile?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              42,
              104,
              108
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la firma grafometrica non richieda esclusivamente precisione fine, pressione o gesto manuale non sostituibile; nel touchpoint tavoletta grafometrica e firma elettronica tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la firma grafometrica non richieda esclusivamente precisione fine, pressione o gesto manuale non sostituibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la firma grafometrica non richieda esclusivamente precisione fine, pressione o gesto manuale non sostituibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_opening",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "firma-grafometrica",
              "graphometric_tablet_e_signature",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-TAB-003",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che la raccolta di dati biometrici di firma preveda un'alternativa equivalente per chi non può o non vuole usare il tratto grafometrico?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              41,
              2,
              119
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la raccolta di dati biometrici di firma preveda un'alternativa equivalente per chi non può o non vuole usare il tratto grafometrico; nel touchpoint tavoletta grafometrica e firma elettronica tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la raccolta di dati biometrici di firma preveda un'alternativa equivalente per chi non può o non vuole usare il tratto grafometrico è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la raccolta di dati biometrici di firma preveda un'alternativa equivalente per chi non può o non vuole usare il tratto grafometrico è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_opening",
              "biometria",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "error-handling",
              "firma",
              "firma-grafometrica",
              "graphometric_tablet_e_signature",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-TAB-004",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che la ricevuta o copia dei documenti firmati digitalmente sia consegnata in formato accessibile e verificabile?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              3,
              122
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la ricevuta o copia dei documenti firmati digitalmente sia consegnata in formato accessibile e verificabile; nel touchpoint tavoletta grafometrica e firma elettronica componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la ricevuta o copia dei documenti firmati digitalmente sia consegnata in formato accessibile e verificabile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la ricevuta o copia dei documenti firmati digitalmente sia consegnata in formato accessibile e verificabile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "graphometric_tablet_e_signature",
              "pdf",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-CRD-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint carte fisiche, è garantito che la scelta e consegna della carta prevedano caratteristiche riconoscibili al tatto o ad alto contrasto per orientamento e distinzione?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint carte fisiche può escludere o penalizzare utenti con disabilità visive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "credit_card",
            "affected_user_categories": [
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              2,
              140,
              42
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la scelta e consegna della carta prevedano caratteristiche riconoscibili al tatto o ad alto contrasto per orientamento e distinzione; nel touchpoint carte fisiche contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la scelta e consegna della carta prevedano caratteristiche riconoscibili al tatto o ad alto contrasto per orientamento e distinzione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la scelta e consegna della carta prevedano caratteristiche riconoscibili al tatto o ad alto contrasto per orientamento e distinzione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_opening",
              "carta",
              "contrast",
              "credit_card",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "hardware",
              "perceivable",
              "visual"
            ]
          },
          {
            "id": "CC-APE-CRD-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint carte fisiche, è garantito che pIN, attivazione carta e primo uso siano spiegati con istruzioni accessibili e non solo tramite stampa piccola o SMS non strutturato?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint carte fisiche può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "credit_card",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              34,
              117,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: pIN, attivazione carta e primo uso siano spiegati con istruzioni accessibili e non solo tramite stampa piccola o SMS non strutturato; nel touchpoint carte fisiche informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: pIN, attivazione carta e primo uso siano spiegati con istruzioni accessibili e non solo tramite stampa piccola o SMS non strutturato è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: pIN, attivazione carta e primo uso siano spiegati con istruzioni accessibili e non solo tramite stampa piccola o SMS non strutturato è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_opening",
              "carta",
              "cognitive",
              "credit_card",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "pin",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-WAL-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che l'aggiunta della carta al wallet durante l'apertura conto sia completabile con screen reader, tastiera e autenticazione accessibile?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              121,
              122,
              13
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l'aggiunta della carta al wallet durante l'apertura conto sia completabile con screen reader, tastiera e autenticazione accessibile; nel touchpoint app di pagamento e wallet componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l'aggiunta della carta al wallet durante l'apertura conto sia completabile con screen reader, tastiera e autenticazione accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l'aggiunta della carta al wallet durante l'apertura conto sia completabile con screen reader, tastiera e autenticazione accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "carta",
              "cognitive",
              "current_account",
              "en-301-549",
              "keyboard",
              "motor",
              "payment_app_wallet",
              "robust",
              "screen-reader",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-WAL-002",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che errori di provisioning, requisiti dispositivo e passaggi di verifica del wallet siano descritti in modo chiaro e recuperabile?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              118,
              13
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: errori di provisioning, requisiti dispositivo e passaggi di verifica del wallet siano descritti in modo chiaro e recuperabile; nel touchpoint app di pagamento e wallet informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: errori di provisioning, requisiti dispositivo e passaggi di verifica del wallet siano descritti in modo chiaro e recuperabile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: errori di provisioning, requisiti dispositivo e passaggi di verifica del wallet siano descritti in modo chiaro e recuperabile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_opening",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "payment_app_wallet",
              "pos",
              "understandable",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-APE-ATM-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che eventuale attivazione carta o cambio PIN iniziale allo sportello automatico sia accessibile anche senza vista e con tempi estendibili?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              130,
              39,
              124
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: eventuale attivazione carta o cambio PIN iniziale allo sportello automatico sia accessibile anche senza vista e con tempi estendibili; nel touchpoint ATM, CSA e self-service tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: eventuale attivazione carta o cambio PIN iniziale allo sportello automatico sia accessibile anche senza vista e con tempi estendibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: eventuale attivazione carta o cambio PIN iniziale allo sportello automatico sia accessibile anche senza vista e con tempi estendibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_opening",
              "atm",
              "atm_csa_self_service",
              "carta",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "operable",
              "pin",
              "visual"
            ]
          },
          {
            "id": "CC-APE-RIC-001",
            "journey": "current_account",
            "macro_step": "account_opening",
            "question_it": "Nel touchpoint ticket e ricevute, è garantito che ticket di appuntamento, numeri di chiamata e ricevute di apertura siano leggibili e disponibili anche in formato digitale accessibile?",
            "rationale_it": "Nel macro-step apertura del conto corrente, una barriera nel touchpoint ticket e ricevute può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "tickets_receipts",
            "affected_user_categories": [
              "visual",
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              3,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ticket di appuntamento, numeri di chiamata e ricevute di apertura siano leggibili e disponibili anche in formato digitale accessibile; nel touchpoint ticket e ricevute contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ticket di appuntamento, numeri di chiamata e ricevute di apertura siano leggibili e disponibili anche in formato digitale accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ticket di appuntamento, numeri di chiamata e ricevute di apertura siano leggibili e disponibili anche in formato digitale accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_opening",
              "auditory",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "perceivable",
              "tickets_receipts",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ATM-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che aTM/CSA abbiano spazio di accostamento, altezza e raggiungibilità compatibili con carrozzine e ausili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              132,
              137,
              124
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: aTM/CSA abbiano spazio di accostamento, altezza e raggiungibilità compatibili con carrozzine e ausili; nel touchpoint ATM, CSA e self-service tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: aTM/CSA abbiano spazio di accostamento, altezza e raggiungibilità compatibili con carrozzine e ausili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: aTM/CSA abbiano spazio di accostamento, altezza e raggiungibilità compatibili con carrozzine e ausili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "atm",
              "atm_csa_self_service",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "hardware",
              "motor",
              "operable"
            ]
          },
          {
            "id": "CC-OPE-ATM-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che prelievo, versamento, saldo e lista movimenti siano fruibili tramite guida vocale privata con jack audio o alternativa equivalente?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              39,
              131,
              124
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: prelievo, versamento, saldo e lista movimenti siano fruibili tramite guida vocale privata con jack audio o alternativa equivalente; nel touchpoint ATM, CSA e self-service contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: prelievo, versamento, saldo e lista movimenti siano fruibili tramite guida vocale privata con jack audio o alternativa equivalente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: prelievo, versamento, saldo e lista movimenti siano fruibili tramite guida vocale privata con jack audio o alternativa equivalente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "atm",
              "atm_csa_self_service",
              "cognitive",
              "current_account",
              "en-301-549",
              "perceivable",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-ATM-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che tastierino, tasti funzione e annulla/conferma siano distinguibili tattilmente e non sostituiti solo da touchscreen visivo?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              42,
              43,
              124
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: tastierino, tasti funzione e annulla/conferma siano distinguibili tattilmente e non sostituiti solo da touchscreen visivo; nel touchpoint ATM, CSA e self-service tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: tastierino, tasti funzione e annulla/conferma siano distinguibili tattilmente e non sostituiti solo da touchscreen visivo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: tastierino, tasti funzione e annulla/conferma siano distinguibili tattilmente e non sostituiti solo da touchscreen visivo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "atm",
              "atm_csa_self_service",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-ATM-004",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che timeout, conferme e annullamento operazione siano gestibili da utenti lenti o con difficoltà motorie/cognitive?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              94,
              119,
              44
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: timeout, conferme e annullamento operazione siano gestibili da utenti lenti o con difficoltà motorie/cognitive; nel touchpoint ATM, CSA e self-service tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: timeout, conferme e annullamento operazione siano gestibili da utenti lenti o con difficoltà motorie/cognitive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: timeout, conferme e annullamento operazione siano gestibili da utenti lenti o con difficoltà motorie/cognitive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "atm",
              "atm_csa_self_service",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "motor",
              "operable",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ATM-005",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che errori in prelievo, versamento, trattenimento carta o contante siano comunicati in modo multisensoriale e con istruzioni di recupero?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              123,
              130
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: errori in prelievo, versamento, trattenimento carta o contante siano comunicati in modo multisensoriale e con istruzioni di recupero; nel touchpoint ATM, CSA e self-service informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: errori in prelievo, versamento, trattenimento carta o contante siano comunicati in modo multisensoriale e con istruzioni di recupero è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: errori in prelievo, versamento, trattenimento carta o contante siano comunicati in modo multisensoriale e con istruzioni di recupero è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "atm",
              "atm_csa_self_service",
              "auditory",
              "carta",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ATM-006",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che ricevute ATM/CSA siano opzionali, leggibili e sostituibili da ricevuta digitale accessibile?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              3,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ricevute ATM/CSA siano opzionali, leggibili e sostituibili da ricevuta digitale accessibile; nel touchpoint ATM, CSA e self-service contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ricevute ATM/CSA siano opzionali, leggibili e sostituibili da ricevuta digitale accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ricevute ATM/CSA siano opzionali, leggibili e sostituibili da ricevuta digitale accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "atm",
              "atm_csa_self_service",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ATM-007",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che display ATM/CSA restino leggibili con luce solare, riflessi, contrasto insufficiente o testo piccolo?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità visive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              87,
              130
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: display ATM/CSA restino leggibili con luce solare, riflessi, contrasto insufficiente o testo piccolo; nel touchpoint ATM, CSA e self-service contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: display ATM/CSA restino leggibili con luce solare, riflessi, contrasto insufficiente o testo piccolo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: display ATM/CSA restino leggibili con luce solare, riflessi, contrasto insufficiente o testo piccolo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "atm",
              "atm_csa_self_service",
              "contrast",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-POS-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint terminali POS, è garantito che inserimento PIN e conferma pagamento su POS siano possibili con tasti fisici/tattili o alternativa non visiva equivalente?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint terminali POS può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "pos_payment_terminals",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              42,
              130,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: inserimento PIN e conferma pagamento su POS siano possibili con tasti fisici/tattili o alternativa non visiva equivalente; nel touchpoint terminali POS tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: inserimento PIN e conferma pagamento su POS siano possibili con tasti fisici/tattili o alternativa non visiva equivalente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: inserimento PIN e conferma pagamento su POS siano possibili con tasti fisici/tattili o alternativa non visiva equivalente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "operable",
              "pagamenti",
              "pin",
              "pos",
              "pos_payment_terminals",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-POS-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint terminali POS, è garantito che pagamento contactless, esito autorizzazione e richiesta PIN siano comunicati con feedback visivo, sonoro e/o aptico equivalente?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint terminali POS può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "pos_payment_terminals",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              82,
              123,
              43
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: pagamento contactless, esito autorizzazione e richiesta PIN siano comunicati con feedback visivo, sonoro e/o aptico equivalente; nel touchpoint terminali POS contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: pagamento contactless, esito autorizzazione e richiesta PIN siano comunicati con feedback visivo, sonoro e/o aptico equivalente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: pagamento contactless, esito autorizzazione e richiesta PIN siano comunicati con feedback visivo, sonoro e/o aptico equivalente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "auditory",
              "cognitive",
              "current_account",
              "en-301-549",
              "pagamenti",
              "perceivable",
              "pin",
              "pos",
              "pos_payment_terminals",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-POS-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint terminali POS, è garantito che il POS sia posizionabile e raggiungibile da persone in carrozzina senza cavi, supporti o banconi ostacolanti?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint terminali POS può escludere o penalizzare utenti con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "pos_payment_terminals",
            "affected_user_categories": [
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              132,
              134,
              128
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il POS sia posizionabile e raggiungibile da persone in carrozzina senza cavi, supporti o banconi ostacolanti; nel touchpoint terminali POS tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il POS sia posizionabile e raggiungibile da persone in carrozzina senza cavi, supporti o banconi ostacolanti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il POS sia posizionabile e raggiungibile da persone in carrozzina senza cavi, supporti o banconi ostacolanti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "hardware",
              "motor",
              "operable",
              "pos",
              "pos_payment_terminals"
            ]
          },
          {
            "id": "CC-OPE-POS-004",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint terminali POS, è garantito che importo, valuta, commissioni e messaggi di errore del POS siano leggibili e non solo mostrati per pochi secondi?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint terminali POS può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "pos_payment_terminals",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              89,
              94,
              116
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: importo, valuta, commissioni e messaggi di errore del POS siano leggibili e non solo mostrati per pochi secondi; nel touchpoint terminali POS informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: importo, valuta, commissioni e messaggi di errore del POS siano leggibili e non solo mostrati per pochi secondi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: importo, valuta, commissioni e messaggi di errore del POS siano leggibili e non solo mostrati per pochi secondi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "error-handling",
              "pos",
              "pos_payment_terminals",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-POS-005",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint terminali POS, è garantito che annullamento, correzione importo e conferma finale del pagamento POS siano disponibili prima dell'addebito?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint terminali POS può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "pos_payment_terminals",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              105,
              42
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: annullamento, correzione importo e conferma finale del pagamento POS siano disponibili prima dell'addebito; nel touchpoint terminali POS informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: annullamento, correzione importo e conferma finale del pagamento POS siano disponibili prima dell'addebito è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: annullamento, correzione importo e conferma finale del pagamento POS siano disponibili prima dell'addebito è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "pagamenti",
              "pos",
              "pos_payment_terminals",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-CRD-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint carte fisiche, è garantito che carta fisica, orientamento chip e distinzione tra carte siano riconoscibili senza affidarsi solo a colore o grafica?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint carte fisiche può escludere o penalizzare utenti con disabilità visive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "credit_card",
            "affected_user_categories": [
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              140,
              85,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: carta fisica, orientamento chip e distinzione tra carte siano riconoscibili senza affidarsi solo a colore o grafica; nel touchpoint carte fisiche contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: carta fisica, orientamento chip e distinzione tra carte siano riconoscibili senza affidarsi solo a colore o grafica è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: carta fisica, orientamento chip e distinzione tra carte siano riconoscibili senza affidarsi solo a colore o grafica è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "carta",
              "credit_card",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "hardware",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-CRD-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint carte fisiche, è garantito che blocco, sblocco, sostituzione e denuncia smarrimento carta siano attivabili tramite canali accessibili equivalenti?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint carte fisiche può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "credit_card",
            "affected_user_categories": [
              "visual",
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              2,
              36,
              121
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: blocco, sblocco, sostituzione e denuncia smarrimento carta siano attivabili tramite canali accessibili equivalenti; nel touchpoint carte fisiche tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: blocco, sblocco, sostituzione e denuncia smarrimento carta siano attivabili tramite canali accessibili equivalenti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: blocco, sblocco, sostituzione e denuncia smarrimento carta siano attivabili tramite canali accessibili equivalenti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "auditory",
              "carta",
              "cognitive",
              "credit_card",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-CRD-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint carte fisiche, è garantito che contestazioni, chargeback e comunicazioni su transazioni carta siano comprensibili e disponibili in formati accessibili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint carte fisiche può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "credit_card",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              34,
              117,
              119
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: contestazioni, chargeback e comunicazioni su transazioni carta siano comprensibili e disponibili in formati accessibili; nel touchpoint carte fisiche informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: contestazioni, chargeback e comunicazioni su transazioni carta siano comprensibili e disponibili in formati accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: contestazioni, chargeback e comunicazioni su transazioni carta siano comprensibili e disponibili in formati accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "carta",
              "cognitive",
              "credit_card",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-CRD-004",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint carte fisiche, è garantito che autenticazione forte e 3D Secure per pagamenti con carta offrano alternative accessibili a biometria, CAPTCHA o SMS non leggibili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint carte fisiche può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "credit_card",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              121,
              41,
              122
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: autenticazione forte e 3D Secure per pagamenti con carta offrano alternative accessibili a biometria, CAPTCHA o SMS non leggibili; nel touchpoint carte fisiche componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: autenticazione forte e 3D Secure per pagamenti con carta offrano alternative accessibili a biometria, CAPTCHA o SMS non leggibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: autenticazione forte e 3D Secure per pagamenti con carta offrano alternative accessibili a biometria, CAPTCHA o SMS non leggibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "biometria",
              "captcha",
              "carta",
              "cognitive",
              "credit_card",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "pagamenti",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ASS-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint assegni, è garantito che libretto assegni, matrice e istruzioni di compilazione siano leggibili, comprensibili e disponibili in formato alternativo?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint assegni può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "check",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              34,
              89,
              117
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: libretto assegni, matrice e istruzioni di compilazione siano leggibili, comprensibili e disponibili in formato alternativo; nel touchpoint assegni contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: libretto assegni, matrice e istruzioni di compilazione siano leggibili, comprensibili e disponibili in formato alternativo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: libretto assegni, matrice e istruzioni di compilazione siano leggibili, comprensibili e disponibili in formato alternativo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "assegno",
              "check",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ASS-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint assegni, è garantito che compilazione, girata e deposito di assegni possano essere effettuati con assistenza accessibile senza perdita di autonomia o riservatezza?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint assegni può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "check",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              2,
              36,
              119
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: compilazione, girata e deposito di assegni possano essere effettuati con assistenza accessibile senza perdita di autonomia o riservatezza; nel touchpoint assegni tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: compilazione, girata e deposito di assegni possano essere effettuati con assistenza accessibile senza perdita di autonomia o riservatezza è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: compilazione, girata e deposito di assegni possano essere effettuati con assistenza accessibile senza perdita di autonomia o riservatezza è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "assegno",
              "check",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "motor",
              "operable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ASS-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint assegni, è garantito che utenti con disabilità motoria o visiva abbiano modalità equivalenti per firma, verifica e autorizzazione dell'assegno?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint assegni può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "check",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              42,
              104,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: utenti con disabilità motoria o visiva abbiano modalità equivalenti per firma, verifica e autorizzazione dell'assegno; nel touchpoint assegni tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: utenti con disabilità motoria o visiva abbiano modalità equivalenti per firma, verifica e autorizzazione dell'assegno è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: utenti con disabilità motoria o visiva abbiano modalità equivalenti per firma, verifica e autorizzazione dell'assegno è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "assegno",
              "check",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-ASS-004",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint assegni, è garantito che comunicazioni su assegni respinti, protesti, blocchi o irregolarità siano accessibili e indichino azioni correttive chiare?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint assegni può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "check",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              118,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: comunicazioni su assegni respinti, protesti, blocchi o irregolarità siano accessibili e indichino azioni correttive chiare; nel touchpoint assegni informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: comunicazioni su assegni respinti, protesti, blocchi o irregolarità siano accessibili e indichino azioni correttive chiare è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: comunicazioni su assegni respinti, protesti, blocchi o irregolarità siano accessibili e indichino azioni correttive chiare è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_operations",
              "assegno",
              "check",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "pin",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-TAB-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che richieste operative firmate su tablet siano revisionabili integralmente prima della firma e non solo riassunte verbalmente?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              39,
              73
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: richieste operative firmate su tablet siano revisionabili integralmente prima della firma e non solo riassunte verbalmente; nel touchpoint tavoletta grafometrica e firma elettronica informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: richieste operative firmate su tablet siano revisionabili integralmente prima della firma e non solo riassunte verbalmente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: richieste operative firmate su tablet siano revisionabili integralmente prima della firma e non solo riassunte verbalmente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "firma",
              "graphometric_tablet_e_signature",
              "pdf",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-TAB-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che deleghe, mandati e modifiche contrattuali non richiedano obbligatoriamente firma grafometrica se l'utente necessita di alternativa?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              41,
              42,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: deleghe, mandati e modifiche contrattuali non richiedano obbligatoriamente firma grafometrica se l'utente necessita di alternativa; nel touchpoint tavoletta grafometrica e firma elettronica tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: deleghe, mandati e modifiche contrattuali non richiedano obbligatoriamente firma grafometrica se l'utente necessita di alternativa è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: deleghe, mandati e modifiche contrattuali non richiedano obbligatoriamente firma grafometrica se l'utente necessita di alternativa è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_operations",
              "biometria",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "firma",
              "firma-grafometrica",
              "graphometric_tablet_e_signature",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-FIL-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint filiale, è garantito che cassa, sportelli e sale consulenza per operazioni ordinarie siano fisicamente accessibili e garantiscano privacy?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              133,
              128,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: cassa, sportelli e sale consulenza per operazioni ordinarie siano fisicamente accessibili e garantiscano privacy; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: cassa, sportelli e sale consulenza per operazioni ordinarie siano fisicamente accessibili e garantiscano privacy è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: cassa, sportelli e sale consulenza per operazioni ordinarie siano fisicamente accessibili e garantiscano privacy è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_operations",
              "branch",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "hardware",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-FIL-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint filiale, è garantito che chiamate di turno, avvisi di sicurezza e messaggi operativi in filiale siano disponibili sia in forma audio sia visiva?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              82,
              36,
              135
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: chiamate di turno, avvisi di sicurezza e messaggi operativi in filiale siano disponibili sia in forma audio sia visiva; nel touchpoint filiale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: chiamate di turno, avvisi di sicurezza e messaggi operativi in filiale siano disponibili sia in forma audio sia visiva è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: chiamate di turno, avvisi di sicurezza e messaggi operativi in filiale siano disponibili sia in forma audio sia visiva è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_operations",
              "auditory",
              "branch",
              "cognitive",
              "current_account",
              "en-301-549",
              "filiale",
              "hardware",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-FIL-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint filiale, è garantito che varchi, porte di sicurezza e bussole bancarie non impediscano l'accesso a carrozzine, cani guida o ausili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              125,
              138,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: varchi, porte di sicurezza e bussole bancarie non impediscano l'accesso a carrozzine, cani guida o ausili; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: varchi, porte di sicurezza e bussole bancarie non impediscano l'accesso a carrozzine, cani guida o ausili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: varchi, porte di sicurezza e bussole bancarie non impediscano l'accesso a carrozzine, cani guida o ausili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_operations",
              "branch",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "hardware",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-PAP-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che estratti conto, scalari, comunicazioni periodiche e rendiconti siano disponibili in formato accessibile e ordinato logicamente?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              3,
              73,
              81
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: estratti conto, scalari, comunicazioni periodiche e rendiconti siano disponibili in formato accessibile e ordinato logicamente; nel touchpoint documenti cartacei componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: estratti conto, scalari, comunicazioni periodiche e rendiconti siano disponibili in formato accessibile e ordinato logicamente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: estratti conto, scalari, comunicazioni periodiche e rendiconti siano disponibili in formato accessibile e ordinato logicamente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "paper_documents",
              "pdf",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-PAP-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che moduli per bonifici, deleghe, reclami e variazioni anagrafiche abbiano istruzioni, campi e errori chiaramente identificabili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              117,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: moduli per bonifici, deleghe, reclami e variazioni anagrafiche abbiano istruzioni, campi e errori chiaramente identificabili; nel touchpoint documenti cartacei informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: moduli per bonifici, deleghe, reclami e variazioni anagrafiche abbiano istruzioni, campi e errori chiaramente identificabili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: moduli per bonifici, deleghe, reclami e variazioni anagrafiche abbiano istruzioni, campi e errori chiaramente identificabili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "en-301-549",
              "error-handling",
              "motor",
              "paper_documents",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-RIC-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ticket e ricevute, è garantito che ricevute cartacee di pagamenti, versamenti e prelievi abbiano contrasto, dimensione testo e durata sufficienti?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ticket e ricevute può escludere o penalizzare utenti con disabilità visive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "tickets_receipts",
            "affected_user_categories": [
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              90,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ricevute cartacee di pagamenti, versamenti e prelievi abbiano contrasto, dimensione testo e durata sufficienti; nel touchpoint ticket e ricevute contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ricevute cartacee di pagamenti, versamenti e prelievi abbiano contrasto, dimensione testo e durata sufficienti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ricevute cartacee di pagamenti, versamenti e prelievi abbiano contrasto, dimensione testo e durata sufficienti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_operations",
              "carta",
              "contrast",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "pagamenti",
              "perceivable",
              "tickets_receipts",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-RIC-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint ticket e ricevute, è garantito che ricevute e ticket includano una copia digitale accessibile quando contengono importi, scadenze o codici essenziali?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint ticket e ricevute può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "tickets_receipts",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              3,
              73,
              122
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ricevute e ticket includano una copia digitale accessibile quando contengono importi, scadenze o codici essenziali; nel touchpoint ticket e ricevute componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ricevute e ticket includano una copia digitale accessibile quando contengono importi, scadenze o codici essenziali è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ricevute e ticket includano una copia digitale accessibile quando contengono importi, scadenze o codici essenziali è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "pdf",
              "robust",
              "tickets_receipts",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-INF-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint materiale informativo, è garantito che avvisi in filiale su commissioni, limiti, indisponibilità servizi o cambi operativi siano leggibili e forniti in canali alternativi?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              34,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: avvisi in filiale su commissioni, limiti, indisponibilità servizi o cambi operativi siano leggibili e forniti in canali alternativi; nel touchpoint materiale informativo contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: avvisi in filiale su commissioni, limiti, indisponibilità servizi o cambi operativi siano leggibili e forniti in canali alternativi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: avvisi in filiale su commissioni, limiti, indisponibilità servizi o cambi operativi siano leggibili e forniti in canali alternativi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_operations",
              "auditory",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "filiale",
              "informational_material",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-CON-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che l'assistenza del consulente per operazioni bancarie non implichi presa di controllo non autorizzata, perdita di privacy o consenso implicito?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              36,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l'assistenza del consulente per operazioni bancarie non implichi presa di controllo non autorizzata, perdita di privacy o consenso implicito; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l'assistenza del consulente per operazioni bancarie non implichi presa di controllo non autorizzata, perdita di privacy o consenso implicito è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l'assistenza del consulente per operazioni bancarie non implichi presa di controllo non autorizzata, perdita di privacy o consenso implicito è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_operations",
              "branch_consultant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "motor",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-CON-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che reclami, segnalazioni di barriere e richieste di accomodamento siano raccolti e gestiti tramite canali accessibili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "visual",
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              36,
              72,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: reclami, segnalazioni di barriere e richieste di accomodamento siano raccolti e gestiti tramite canali accessibili; nel touchpoint consulente di filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: reclami, segnalazioni di barriere e richieste di accomodamento siano raccolti e gestiti tramite canali accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: reclami, segnalazioni di barriere e richieste di accomodamento siano raccolti e gestiti tramite canali accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_operations",
              "auditory",
              "branch_consultant",
              "cognitive",
              "current_account",
              "eaa",
              "en-301-549",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-OPE-WAL-001",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che aggiunta, rimozione e selezione carta nel wallet siano accessibili con screen reader, controllo switch e tastiera esterna?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              92,
              122,
              13
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: aggiunta, rimozione e selezione carta nel wallet siano accessibili con screen reader, controllo switch e tastiera esterna; nel touchpoint app di pagamento e wallet componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: aggiunta, rimozione e selezione carta nel wallet siano accessibili con screen reader, controllo switch e tastiera esterna è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: aggiunta, rimozione e selezione carta nel wallet siano accessibili con screen reader, controllo switch e tastiera esterna è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "carta",
              "cognitive",
              "current_account",
              "en-301-549",
              "keyboard",
              "motor",
              "payment_app_wallet",
              "robust",
              "screen-reader",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-WAL-002",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che conferma pagamento wallet comunichi importo, esercente ed esito senza affidarsi solo a colore, vibrazione o icona?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              82,
              85,
              123
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: conferma pagamento wallet comunichi importo, esercente ed esito senza affidarsi solo a colore, vibrazione o icona; nel touchpoint app di pagamento e wallet contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: conferma pagamento wallet comunichi importo, esercente ed esito senza affidarsi solo a colore, vibrazione o icona è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: conferma pagamento wallet comunichi importo, esercente ed esito senza affidarsi solo a colore, vibrazione o icona è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "auditory",
              "cognitive",
              "current_account",
              "pagamenti",
              "payment_app_wallet",
              "perceivable",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-WAL-003",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che il pagamento NFC/contactless da wallet non richieda movimenti complessi, scuotimento dispositivo o gesti non sostituibili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              107,
              104,
              13
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il pagamento NFC/contactless da wallet non richieda movimenti complessi, scuotimento dispositivo o gesti non sostituibili; nel touchpoint app di pagamento e wallet tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il pagamento NFC/contactless da wallet non richieda movimenti complessi, scuotimento dispositivo o gesti non sostituibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il pagamento NFC/contactless da wallet non richieda movimenti complessi, scuotimento dispositivo o gesti non sostituibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "operable",
              "pagamenti",
              "payment_app_wallet",
              "pos",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-WAL-004",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che storico transazioni, ricevute e dettagli carta nel wallet siano annunciati correttamente dalle tecnologie assistive?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              80,
              122,
              32
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: storico transazioni, ricevute e dettagli carta nel wallet siano annunciati correttamente dalle tecnologie assistive; nel touchpoint app di pagamento e wallet componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: storico transazioni, ricevute e dettagli carta nel wallet siano annunciati correttamente dalle tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: storico transazioni, ricevute e dettagli carta nel wallet siano annunciati correttamente dalle tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "carta",
              "cognitive",
              "current_account",
              "en-301-549",
              "payment_app_wallet",
              "robust",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-WAL-005",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che errori di tokenizzazione, pagamento rifiutato o autenticazione forte indichino causa e rimedio accessibili?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              118,
              13
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: errori di tokenizzazione, pagamento rifiutato o autenticazione forte indichino causa e rimedio accessibili; nel touchpoint app di pagamento e wallet informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: errori di tokenizzazione, pagamento rifiutato o autenticazione forte indichino causa e rimedio accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: errori di tokenizzazione, pagamento rifiutato o autenticazione forte indichino causa e rimedio accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "pagamenti",
              "payment_app_wallet",
              "understandable",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-OPE-WAL-006",
            "journey": "current_account",
            "macro_step": "account_operations",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che blocco carta, limiti, sospensione token e gestione sicurezza nel wallet siano completabili senza biometria obbligatoria?",
            "rationale_it": "Nel macro-step operatività del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              121,
              41,
              119
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: blocco carta, limiti, sospensione token e gestione sicurezza nel wallet siano completabili senza biometria obbligatoria; nel touchpoint app di pagamento e wallet tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: blocco carta, limiti, sospensione token e gestione sicurezza nel wallet siano completabili senza biometria obbligatoria è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: blocco carta, limiti, sospensione token e gestione sicurezza nel wallet siano completabili senza biometria obbligatoria è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_operations",
              "biometria",
              "carta",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "motor",
              "operable",
              "payment_app_wallet",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-FIL-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint filiale, è garantito che appuntamento, accesso e percorso in filiale per chiusura conto siano accessibili quanto quelli per apertura e operatività?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              2,
              137,
              129
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: appuntamento, accesso e percorso in filiale per chiusura conto siano accessibili quanto quelli per apertura e operatività; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: appuntamento, accesso e percorso in filiale per chiusura conto siano accessibili quanto quelli per apertura e operatività è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: appuntamento, accesso e percorso in filiale per chiusura conto siano accessibili quanto quelli per apertura e operatività è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_closure",
              "branch",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "filiale",
              "hardware",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-CHI-FIL-002",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint filiale, è garantito che eventuale ritiro contante residuo, assegni circolari o bonifico finale allo sportello siano gestibili con privacy e accessibilità?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              133,
              119,
              36
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: eventuale ritiro contante residuo, assegni circolari o bonifico finale allo sportello siano gestibili con privacy e accessibilità; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: eventuale ritiro contante residuo, assegni circolari o bonifico finale allo sportello siano gestibili con privacy e accessibilità è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: eventuale ritiro contante residuo, assegni circolari o bonifico finale allo sportello siano gestibili con privacy e accessibilità è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_closure",
              "assegno",
              "bonifico",
              "branch",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "hardware",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-CON-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che il consulente spieghi conseguenze della chiusura conto, tempi, costi, domiciliazioni e alternative in modo chiaro e neutrale?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              36,
              117
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il consulente spieghi conseguenze della chiusura conto, tempi, costi, domiciliazioni e alternative in modo chiaro e neutrale; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il consulente spieghi conseguenze della chiusura conto, tempi, costi, domiciliazioni e alternative in modo chiaro e neutrale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il consulente spieghi conseguenze della chiusura conto, tempi, costi, domiciliazioni e alternative in modo chiaro e neutrale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_closure",
              "branch_consultant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-CON-002",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che utenti sordi, ciechi o con difficoltà cognitive possano completare la chiusura con supporto comunicativo equivalente?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              45,
              36,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: utenti sordi, ciechi o con difficoltà cognitive possano completare la chiusura con supporto comunicativo equivalente; nel touchpoint consulente di filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: utenti sordi, ciechi o con difficoltà cognitive possano completare la chiusura con supporto comunicativo equivalente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: utenti sordi, ciechi o con difficoltà cognitive possano completare la chiusura con supporto comunicativo equivalente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "account_closure",
              "auditory",
              "branch_consultant",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "operable",
              "pos",
              "visual"
            ]
          },
          {
            "id": "CC-CHI-PAP-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che modulo di chiusura conto, revoca servizi e trasferimento saldo siano compilabili e firmabili in formato accessibile?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              117,
              119,
              34
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: modulo di chiusura conto, revoca servizi e trasferimento saldo siano compilabili e firmabili in formato accessibile; nel touchpoint documenti cartacei tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: modulo di chiusura conto, revoca servizi e trasferimento saldo siano compilabili e firmabili in formato accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: modulo di chiusura conto, revoca servizi e trasferimento saldo siano compilabili e firmabili in formato accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "en-301-549",
              "error-handling",
              "firma",
              "motor",
              "operable",
              "paper_documents",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-PAP-002",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che rendiconto finale, interessi, spese, saldo residuo e conferma chiusura siano disponibili in documento accessibile?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              3,
              73,
              81
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: rendiconto finale, interessi, spese, saldo residuo e conferma chiusura siano disponibili in documento accessibile; nel touchpoint documenti cartacei componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: rendiconto finale, interessi, spese, saldo residuo e conferma chiusura siano disponibili in documento accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: rendiconto finale, interessi, spese, saldo residuo e conferma chiusura siano disponibili in documento accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "paper_documents",
              "pdf",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-TAB-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che la firma di chiusura su tablet grafometrico abbia alternativa equivalente e possibilità di rilettura completa prima della conferma?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              41,
              119,
              104
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la firma di chiusura su tablet grafometrico abbia alternativa equivalente e possibilità di rilettura completa prima della conferma; nel touchpoint tavoletta grafometrica e firma elettronica tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la firma di chiusura su tablet grafometrico abbia alternativa equivalente e possibilità di rilettura completa prima della conferma è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la firma di chiusura su tablet grafometrico abbia alternativa equivalente e possibilità di rilettura completa prima della conferma è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_closure",
              "biometria",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "firma",
              "firma-grafometrica",
              "graphometric_tablet_e_signature",
              "motor",
              "operable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-CRD-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint carte fisiche, è garantito che cancellazione, restituzione, distruzione o sostituzione della carta siano spiegate in modo accessibile e con canali alternativi?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint carte fisiche può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "credit_card",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              34,
              36,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: cancellazione, restituzione, distruzione o sostituzione della carta siano spiegate in modo accessibile e con canali alternativi; nel touchpoint carte fisiche informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: cancellazione, restituzione, distruzione o sostituzione della carta siano spiegate in modo accessibile e con canali alternativi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: cancellazione, restituzione, distruzione o sostituzione della carta siano spiegate in modo accessibile e con canali alternativi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_closure",
              "carta",
              "cognitive",
              "credit_card",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "understandable",
              "visual"
            ]
          },
          {
            "id": "CC-CHI-ATM-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint ATM, CSA e self-service, è garantito che eventuali funzioni self-service di disattivazione carta, saldo finale o stampa movimenti pre-chiusura siano accessibili?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint ATM, CSA e self-service può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "atm_csa_self_service",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              130,
              39,
              124
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: eventuali funzioni self-service di disattivazione carta, saldo finale o stampa movimenti pre-chiusura siano accessibili; nel touchpoint ATM, CSA e self-service tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: eventuali funzioni self-service di disattivazione carta, saldo finale o stampa movimenti pre-chiusura siano accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: eventuali funzioni self-service di disattivazione carta, saldo finale o stampa movimenti pre-chiusura siano accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "account_closure",
              "atm",
              "atm_csa_self_service",
              "carta",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "operable",
              "visual"
            ]
          },
          {
            "id": "CC-CHI-WAL-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint app di pagamento e wallet, è garantito che revoca dei token wallet, rimozione carte e avvisi di cessazione siano accessibili e confermati in modo comprensibile?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint app di pagamento e wallet può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "payment_app_wallet",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              123,
              121,
              13
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: revoca dei token wallet, rimozione carte e avvisi di cessazione siano accessibili e confermati in modo comprensibile; nel touchpoint app di pagamento e wallet componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: revoca dei token wallet, rimozione carte e avvisi di cessazione siano accessibili e confermati in modo comprensibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: revoca dei token wallet, rimozione carte e avvisi di cessazione siano accessibili e confermati in modo comprensibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "motor",
              "payment_app_wallet",
              "robust",
              "visual",
              "wallet",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-RIC-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint ticket e ricevute, è garantito che ricevute e conferme di chiusura conto siano leggibili, conservabili e disponibili in copia digitale accessibile?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint ticket e ricevute può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "tickets_receipts",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              3,
              73
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ricevute e conferme di chiusura conto siano leggibili, conservabili e disponibili in copia digitale accessibile; nel touchpoint ticket e ricevute contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ricevute e conferme di chiusura conto siano leggibili, conservabili e disponibili in copia digitale accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ricevute e conferme di chiusura conto siano leggibili, conservabili e disponibili in copia digitale accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "elderly_temporary_situational",
              "en-301-549",
              "pdf",
              "perceivable",
              "tickets_receipts",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-INF-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint materiale informativo, è garantito che materiali informativi su tempi, costi, portabilità e diritti di chiusura conto siano facili da trovare e comprendere?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              101,
              110
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: materiali informativi su tempi, costi, portabilità e diritti di chiusura conto siano facili da trovare e comprendere; nel touchpoint materiale informativo informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: materiali informativi su tempi, costi, portabilità e diritti di chiusura conto siano facili da trovare e comprendere è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: materiali informativi su tempi, costi, portabilità e diritti di chiusura conto siano facili da trovare e comprendere è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "account_closure",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "informational_material",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "CC-CHI-ASS-001",
            "journey": "current_account",
            "macro_step": "account_closure",
            "question_it": "Nel touchpoint assegni, è garantito che restituzione, annullamento o distruzione di assegni inutilizzati siano spiegati in istruzioni accessibili e verificabili?",
            "rationale_it": "Nel macro-step chiusura del conto corrente, una barriera nel touchpoint assegni può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "check",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              34,
              117,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: restituzione, annullamento o distruzione di assegni inutilizzati siano spiegati in istruzioni accessibili e verificabili; nel touchpoint assegni informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: restituzione, annullamento o distruzione di assegni inutilizzati siano spiegati in istruzioni accessibili e verificabili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: restituzione, annullamento o distruzione di assegni inutilizzati siano spiegati in istruzioni accessibili e verificabili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Aggiungere segnali tattili/visivi equivalenti, istruzioni accessibili e procedure alternative sicure per uso, riconoscimento, compilazione o blocco dello strumento.",
            "tags": [
              "account_closure",
              "assegno",
              "check",
              "cognitive",
              "current_account",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "understandable",
              "visual",
              "wcag"
            ]
          }
        ]
      },
      "mortgage": {
        "macro_steps": [
          {
            "id": "exploration_and_first_contact",
            "name_it": "Orientamento",
            "description_it": "Consultazione web, confronto e valutazione delle offerte di mutuo, primo contatto con la filiale e fissazione dell'appuntamento.",
            "applicable_touchpoints": [
              "home_banking_app",
              "institutional_website",
              "web_documents",
              "email_push_notifications",
              "chatbot_virtual_assistant",
              "digital_media",
              "informational_material",
              "branch",
              "phone_banking",
              "call_center",
              "branch_consultant"
            ]
          },
          {
            "id": "documentation_and_underwriting",
            "name_it": "Richiesta",
            "description_it": "Accoglienza e colloquio, overview e selezione del prodotto, analisi e consegna del PIES, formalizzazione e scelta delle coperture, raccolta e verifica documentale e avvio della perizia.",
            "applicable_touchpoints": [
              "home_banking_app",
              "home_banking_web",
              "web_documents",
              "email_push_notifications",
              "chatbot_virtual_assistant",
              "paper_documents",
              "branch",
              "call_center",
              "branch_consultant"
            ]
          },
          {
            "id": "deliberation_and_proposal",
            "name_it": "Delibera",
            "description_it": "Analisi ed emissione della delibera di credito, stipula del contratto, rogito notarile, erogazione dei fondi e consegna del piano di ammortamento.",
            "applicable_touchpoints": [
              "home_banking_app",
              "home_banking_web",
              "web_documents",
              "email_push_notifications",
              "chatbot_virtual_assistant",
              "digital_media",
              "paper_documents",
              "informational_material",
              "branch",
              "call_center",
              "branch_consultant",
              "graphometric_tablet_e_signature"
            ]
          },
          {
            "id": "post_disbursement_and_repayment",
            "name_it": "Operatività",
            "description_it": "Monitoraggio e gestione del mutuo: consultazione e verifica del piano, download dei documenti, addebito delle rate, gestione dei ritardi, rinegoziazione ed estinzione.",
            "applicable_touchpoints": [
              "home_banking_app",
              "home_banking_web",
              "web_documents",
              "email_push_notifications",
              "chatbot_virtual_assistant",
              "digital_media",
              "paper_documents",
              "informational_material",
              "branch",
              "call_center",
              "branch_consultant"
            ]
          }
        ],
        "questions": [
          {
            "id": "MU-EXP-WEB-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che il simulatore mutuo renda importo, durata, TAN/TAEG, rata e costi con contrasto sufficiente, testo ridimensionabile e senza dipendere dal solo colore?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              89,
              90,
              56,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il simulatore mutuo renda importo, durata, TAN/TAEG, rata e costi con contrasto sufficiente, testo ridimensionabile e senza dipendere dal solo colore; nel touchpoint sito istituzionale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il simulatore mutuo renda importo, durata, TAN/TAEG, rata e costi con contrasto sufficiente, testo ridimensionabile e senza dipendere dal solo colore è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il simulatore mutuo renda importo, durata, TAN/TAEG, rata e costi con contrasto sufficiente, testo ridimensionabile e senza dipendere dal solo colore è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "contrast",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "institutional_website",
              "mortgage",
              "mutuo",
              "perceivable",
              "simulatore",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-WEB-002",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che slider, selettori e campi del simulatore siano utilizzabili da tastiera, senza gesti obbligati di trascinamento o precisione fine?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              108,
              109,
              57
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: slider, selettori e campi del simulatore siano utilizzabili da tastiera, senza gesti obbligati di trascinamento o precisione fine; nel touchpoint sito istituzionale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: slider, selettori e campi del simulatore siano utilizzabili da tastiera, senza gesti obbligati di trascinamento o precisione fine è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: slider, selettori e campi del simulatore siano utilizzabili da tastiera, senza gesti obbligati di trascinamento o precisione fine è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "institutional_website",
              "keyboard",
              "mortgage",
              "motor",
              "operable",
              "simulatore",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-WEB-003",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che i campi del simulatore abbiano etichette, unità di misura, vincoli e messaggi di errore comprensibili prima del calcolo della rata?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              117,
              118,
              66
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i campi del simulatore abbiano etichette, unità di misura, vincoli e messaggi di errore comprensibili prima del calcolo della rata; nel touchpoint sito istituzionale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i campi del simulatore abbiano etichette, unità di misura, vincoli e messaggi di errore comprensibili prima del calcolo della rata è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i campi del simulatore abbiano etichette, unità di misura, vincoli e messaggi di errore comprensibili prima del calcolo della rata è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "exploration_and_first_contact",
              "institutional_website",
              "mortgage",
              "simulatore",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-WEB-004",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che i risultati del simulatore siano disponibili anche in tabella strutturata, non solo tramite grafici, colori o immagini?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              85,
              52,
              54
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i risultati del simulatore siano disponibili anche in tabella strutturata, non solo tramite grafici, colori o immagini; nel touchpoint sito istituzionale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i risultati del simulatore siano disponibili anche in tabella strutturata, non solo tramite grafici, colori o immagini è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i risultati del simulatore siano disponibili anche in tabella strutturata, non solo tramite grafici, colori o immagini è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "exploration_and_first_contact",
              "institutional_website",
              "mortgage",
              "perceivable",
              "simulatore",
              "tabelle",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-WEB-005",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che ipotesi di calcolo, limiti della simulazione e significato di TAN, TAEG, LTV e spread siano spiegati in linguaggio chiaro?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              117,
              35,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ipotesi di calcolo, limiti della simulazione e significato di TAN, TAEG, LTV e spread siano spiegati in linguaggio chiaro; nel touchpoint sito istituzionale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ipotesi di calcolo, limiti della simulazione e significato di TAN, TAEG, LTV e spread siano spiegati in linguaggio chiaro è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ipotesi di calcolo, limiti della simulazione e significato di TAN, TAEG, LTV e spread siano spiegati in linguaggio chiaro è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "institutional_website",
              "linguaggio-chiaro",
              "mortgage",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-DOC-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che l’esportazione della simulazione in PDF sia taggata, con ordine di lettura corretto, lingua dichiarata e tabelle accessibili?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              80,
              5,
              8
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’esportazione della simulazione in PDF sia taggata, con ordine di lettura corretto, lingua dichiarata e tabelle accessibili; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’esportazione della simulazione in PDF sia taggata, con ordine di lettura corretto, lingua dichiarata e tabelle accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’esportazione della simulazione in PDF sia taggata, con ordine di lettura corretto, lingua dichiarata e tabelle accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "pdf",
              "robust",
              "tabelle",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-EXP-WEB-006",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che il form di richiesta contatto per mutuo abbia campi programmaticamente associati, istruzioni visibili e prevenzione degli errori sui dati personali?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "understandable",
            "standards": [
              80,
              117,
              119,
              68
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il form di richiesta contatto per mutuo abbia campi programmaticamente associati, istruzioni visibili e prevenzione degli errori sui dati personali; nel touchpoint sito istituzionale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il form di richiesta contatto per mutuo abbia campi programmaticamente associati, istruzioni visibili e prevenzione degli errori sui dati personali è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il form di richiesta contatto per mutuo abbia campi programmaticamente associati, istruzioni visibili e prevenzione degli errori sui dati personali è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "error-handling",
              "exploration_and_first_contact",
              "institutional_website",
              "mortgage",
              "motor",
              "mutuo",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-WEB-007",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che la prenotazione online dell’appuntamento con consulente sia completabile da tastiera e con screen reader, inclusa scelta data e sede?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              99,
              122,
              69
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la prenotazione online dell’appuntamento con consulente sia completabile da tastiera e con screen reader, inclusa scelta data e sede; nel touchpoint sito istituzionale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la prenotazione online dell’appuntamento con consulente sia completabile da tastiera e con screen reader, inclusa scelta data e sede è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la prenotazione online dell’appuntamento con consulente sia completabile da tastiera e con screen reader, inclusa scelta data e sede è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "institutional_website",
              "keyboard",
              "mortgage",
              "motor",
              "operable",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-WEB-008",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che eventuali CAPTCHA o controlli anti-abuso nel primo contatto abbiano alternative non visive, non uditive e non cognitive complesse?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              74,
              121,
              71,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: eventuali CAPTCHA o controlli anti-abuso nel primo contatto abbiano alternative non visive, non uditive e non cognitive complesse; nel touchpoint sito istituzionale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: eventuali CAPTCHA o controlli anti-abuso nel primo contatto abbiano alternative non visive, non uditive e non cognitive complesse è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: eventuali CAPTCHA o controlli anti-abuso nel primo contatto abbiano alternative non visive, non uditive e non cognitive complesse è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "auditory",
              "captcha",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "institutional_website",
              "mortgage",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-BOT-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot informativo sul mutuo sia navigabile da tastiera, annunci correttamente messaggi e opzioni e non blocchi lo screen reader?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              92,
              122,
              123,
              70
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot informativo sul mutuo sia navigabile da tastiera, annunci correttamente messaggi e opzioni e non blocchi lo screen reader; nel touchpoint chatbot e assistente virtuale componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot informativo sul mutuo sia navigabile da tastiera, annunci correttamente messaggi e opzioni e non blocchi lo screen reader è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot informativo sul mutuo sia navigabile da tastiera, annunci correttamente messaggi e opzioni e non blocchi lo screen reader è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "en-301-549",
              "exploration_and_first_contact",
              "keyboard",
              "mortgage",
              "motor",
              "mutuo",
              "robust",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-BOT-002",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot offra trasferimento chiaro a operatore umano o canale alternativo quando l’utente non comprende requisiti o condizioni del mutuo?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità uditive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              115,
              118,
              36,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot offra trasferimento chiaro a operatore umano o canale alternativo quando l’utente non comprende requisiti o condizioni del mutuo; nel touchpoint chatbot e assistente virtuale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot offra trasferimento chiaro a operatore umano o canale alternativo quando l’utente non comprende requisiti o condizioni del mutuo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot offra trasferimento chiaro a operatore umano o canale alternativo quando l’utente non comprende requisiti o condizioni del mutuo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "auditory",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "mutuo",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-MED-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che video promozionali o guide sul mutuo includano sottotitoli, trascrizione e, per contenuti visivi essenziali, audiodescrizione?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              77,
              78,
              48
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: video promozionali o guide sul mutuo includano sottotitoli, trascrizione e, per contenuti visivi essenziali, audiodescrizione; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: video promozionali o guide sul mutuo includano sottotitoli, trascrizione e, per contenuti visivi essenziali, audiodescrizione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: video promozionali o guide sul mutuo includano sottotitoli, trascrizione e, per contenuti visivi essenziali, audiodescrizione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "auditory",
              "cognitive",
              "digital_media",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "mutuo",
              "perceivable",
              "sottotitoli",
              "video",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-MED-002",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che banner, post social e landing creative sul mutuo non contengano informazioni essenziali solo dentro immagini senza testo alternativo equivalente?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              74,
              91,
              49,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: banner, post social e landing creative sul mutuo non contengano informazioni essenziali solo dentro immagini senza testo alternativo equivalente; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: banner, post social e landing creative sul mutuo non contengano informazioni essenziali solo dentro immagini senza testo alternativo equivalente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: banner, post social e landing creative sul mutuo non contengano informazioni essenziali solo dentro immagini senza testo alternativo equivalente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "cognitive",
              "digital_media",
              "eaa",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "mutuo",
              "perceivable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-INF-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint materiale informativo, è garantito che brochure e schede informative sul mutuo siano disponibili in linguaggio semplice, formato digitale accessibile e versioni ad alta leggibilità?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              0,
              35,
              112
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: brochure e schede informative sul mutuo siano disponibili in linguaggio semplice, formato digitale accessibile e versioni ad alta leggibilità; nel touchpoint materiale informativo informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: brochure e schede informative sul mutuo siano disponibili in linguaggio semplice, formato digitale accessibile e versioni ad alta leggibilità è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: brochure e schede informative sul mutuo siano disponibili in linguaggio semplice, formato digitale accessibile e versioni ad alta leggibilità è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "informational_material",
              "linguaggio-chiaro",
              "mortgage",
              "mutuo",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-INF-002",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint materiale informativo, è garantito che le tabelle comparative tra tasso fisso, variabile e misto abbiano intestazioni, note e condizioni leggibili senza ambiguità?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              89,
              5,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le tabelle comparative tra tasso fisso, variabile e misto abbiano intestazioni, note e condizioni leggibili senza ambiguità; nel touchpoint materiale informativo contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le tabelle comparative tra tasso fisso, variabile e misto abbiano intestazioni, note e condizioni leggibili senza ambiguità è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le tabelle comparative tra tasso fisso, variabile e misto abbiano intestazioni, note e condizioni leggibili senza ambiguità è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "exploration_and_first_contact",
              "informational_material",
              "mortgage",
              "perceivable",
              "tabelle",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-TEL-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint phone banking, è garantito che il primo contatto telefonico sul mutuo preveda alternative equivalenti per utenti sordi, come chat, email, relay o prenotazione assistita?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint phone banking può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "phone_banking",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              47,
              36,
              2,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il primo contatto telefonico sul mutuo preveda alternative equivalenti per utenti sordi, come chat, email, relay o prenotazione assistita; nel touchpoint phone banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il primo contatto telefonico sul mutuo preveda alternative equivalenti per utenti sordi, come chat, email, relay o prenotazione assistita è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il primo contatto telefonico sul mutuo preveda alternative equivalenti per utenti sordi, come chat, email, relay o prenotazione assistita è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "mutuo",
              "operable",
              "phone_banking"
            ]
          },
          {
            "id": "MU-EXP-CAL-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint call center, è garantito che l’IVR mutui abbia messaggi lenti, ripetibili, opzione rapida per operatore e nessuna scelta esclusivamente vocale obbligatoria?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali, con disabilità motorie: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational",
              "motor"
            ],
            "pour_principle": "operable",
            "standards": [
              47,
              36,
              2,
              94
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’IVR mutui abbia messaggi lenti, ripetibili, opzione rapida per operatore e nessuna scelta esclusivamente vocale obbligatoria; nel touchpoint call center tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’IVR mutui abbia messaggi lenti, ripetibili, opzione rapida per operatore e nessuna scelta esclusivamente vocale obbligatoria è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’IVR mutui abbia messaggi lenti, ripetibili, opzione rapida per operatore e nessuna scelta esclusivamente vocale obbligatoria è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "call_center",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "motor",
              "operable",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-FIL-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint filiale, è garantito che l’accesso in filiale per informazioni mutuo includa percorso privo di barriere, ingresso utilizzabile e banco accoglienza accessibile?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              136,
              129,
              128,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’accesso in filiale per informazioni mutuo includa percorso privo di barriere, ingresso utilizzabile e banco accoglienza accessibile; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’accesso in filiale per informazioni mutuo includa percorso privo di barriere, ingresso utilizzabile e banco accoglienza accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’accesso in filiale per informazioni mutuo includa percorso privo di barriere, ingresso utilizzabile e banco accoglienza accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "branch",
              "eaa",
              "elderly_temporary_situational",
              "exploration_and_first_contact",
              "filiale",
              "hardware",
              "mortgage",
              "motor",
              "mutuo",
              "operable",
              "visual"
            ]
          },
          {
            "id": "MU-EXP-CON-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che il consulente possa spiegare simulazione, requisiti e prossimi passi con supporti accessibili, senza affidarsi solo a spiegazione orale o fogli non leggibili?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              36,
              72,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il consulente possa spiegare simulazione, requisiti e prossimi passi con supporti accessibili, senza affidarsi solo a spiegazione orale o fogli non leggibili; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il consulente possa spiegare simulazione, requisiti e prossimi passi con supporti accessibili, senza affidarsi solo a spiegazione orale o fogli non leggibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il consulente possa spiegare simulazione, requisiti e prossimi passi con supporti accessibili, senza affidarsi solo a spiegazione orale o fogli non leggibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch_consultant",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "pos",
              "understandable",
              "visual"
            ]
          },
          {
            "id": "MU-EXP-EML-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che email e push successive alla simulazione abbiano oggetto chiaro, link descrittivi, scadenze testuali e contenuti leggibili da tecnologie assistive?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              100,
              122,
              123,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: email e push successive alla simulazione abbiano oggetto chiaro, link descrittivi, scadenze testuali e contenuti leggibili da tecnologie assistive; nel touchpoint email, SMS e notifiche push componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: email e push successive alla simulazione abbiano oggetto chiaro, link descrittivi, scadenze testuali e contenuti leggibili da tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: email e push successive alla simulazione abbiano oggetto chiaro, link descrittivi, scadenze testuali e contenuti leggibili da tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "elderly_temporary_situational",
              "email_push_notifications",
              "en-301-549",
              "exploration_and_first_contact",
              "mortgage",
              "notifiche",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-WEB-009",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint sito istituzionale, è garantito che informative privacy e consensi del primo contatto siano accessibili, comprensibili e non nascosti in modali non gestibili da tastiera?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint sito istituzionale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "institutional_website",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              93,
              117,
              122,
              58
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: informative privacy e consensi del primo contatto siano accessibili, comprensibili e non nascosti in modali non gestibili da tastiera; nel touchpoint sito istituzionale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: informative privacy e consensi del primo contatto siano accessibili, comprensibili e non nascosti in modali non gestibili da tastiera è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: informative privacy e consensi del primo contatto siano accessibili, comprensibili e non nascosti in modali non gestibili da tastiera è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "exploration_and_first_contact",
              "institutional_website",
              "keyboard",
              "mortgage",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-HBA-001",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint app di home banking, è garantito che il questionario preliminare di fattibilità mutuo in app sia fruibile con zoom, screen reader, orientamento mobile e campi autocompletati?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              84,
              86,
              122,
              29
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il questionario preliminare di fattibilità mutuo in app sia fruibile con zoom, screen reader, orientamento mobile e campi autocompletati; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il questionario preliminare di fattibilità mutuo in app sia fruibile con zoom, screen reader, orientamento mobile e campi autocompletati è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il questionario preliminare di fattibilità mutuo in app sia fruibile con zoom, screen reader, orientamento mobile e campi autocompletati è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "exploration_and_first_contact",
              "home_banking_app",
              "mortgage",
              "motor",
              "mutuo",
              "robust",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-EXP-FIL-002",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint filiale, è garantito che segnaletica, numerazione appuntamenti e orientamento in filiale siano percepibili anche senza vista o udito?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              139,
              129,
              2,
              36
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: segnaletica, numerazione appuntamenti e orientamento in filiale siano percepibili anche senza vista o udito; nel touchpoint filiale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: segnaletica, numerazione appuntamenti e orientamento in filiale siano percepibili anche senza vista o udito è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: segnaletica, numerazione appuntamenti e orientamento in filiale siano percepibili anche senza vista o udito è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch",
              "cognitive",
              "eaa",
              "en-301-549",
              "exploration_and_first_contact",
              "filiale",
              "hardware",
              "mortgage",
              "perceivable",
              "visual"
            ]
          },
          {
            "id": "MU-EXP-INF-003",
            "journey": "mortgage",
            "macro_step": "exploration_and_first_contact",
            "question_it": "Nel touchpoint materiale informativo, è garantito che tutti i materiali di orientamento indichino chiaramente i canali accessibili disponibili per richiesta mutuo, assistenza e appuntamenti?",
            "rationale_it": "Nel macro-step esplorazione e primo contatto per il mutuo, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              0,
              36,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: tutti i materiali di orientamento indichino chiaramente i canali accessibili disponibili per richiesta mutuo, assistenza e appuntamenti; nel touchpoint materiale informativo informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: tutti i materiali di orientamento indichino chiaramente i canali accessibili disponibili per richiesta mutuo, assistenza e appuntamenti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: tutti i materiali di orientamento indichino chiaramente i canali accessibili disponibili per richiesta mutuo, assistenza e appuntamenti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "auditory",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "exploration_and_first_contact",
              "informational_material",
              "mortgage",
              "mutuo",
              "understandable",
              "visual"
            ]
          },
          {
            "id": "MU-DOC-HBA-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che l’area di caricamento documenti per istruttoria mutuo sia utilizzabile con screen reader, tastiera e controllo vocale?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor"
            ],
            "pour_principle": "robust",
            "standards": [
              92,
              122,
              18,
              29
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’area di caricamento documenti per istruttoria mutuo sia utilizzabile con screen reader, tastiera e controllo vocale; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’area di caricamento documenti per istruttoria mutuo sia utilizzabile con screen reader, tastiera e controllo vocale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’area di caricamento documenti per istruttoria mutuo sia utilizzabile con screen reader, tastiera e controllo vocale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "documentation_and_underwriting",
              "en-301-549",
              "home_banking_app",
              "keyboard",
              "mortgage",
              "motor",
              "mutuo",
              "robust",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBW-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint home banking web, è garantito che il caricamento documenti non richieda obbligatoriamente drag-and-drop e offra un selettore file accessibile equivalente?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              108,
              109,
              71
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il caricamento documenti non richieda obbligatoriamente drag-and-drop e offra un selettore file accessibile equivalente; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il caricamento documenti non richieda obbligatoriamente drag-and-drop e offra un selettore file accessibile equivalente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il caricamento documenti non richieda obbligatoriamente drag-and-drop e offra un selettore file accessibile equivalente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "documentation_and_underwriting",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBA-002",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che errori su formato, dimensione o qualità dei file siano descritti in testo chiaro e con istruzioni di correzione specifiche?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              118,
              25,
              27
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: errori su formato, dimensione o qualità dei file siano descritti in testo chiaro e con istruzioni di correzione specifiche; nel touchpoint app di home banking informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: errori su formato, dimensione o qualità dei file siano descritti in testo chiaro e con istruzioni di correzione specifiche è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: errori su formato, dimensione o qualità dei file siano descritti in testo chiaro e con istruzioni di correzione specifiche è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "elderly_temporary_situational",
              "en-301-549",
              "error-handling",
              "home_banking_app",
              "mortgage",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBA-003",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che la checklist dei documenti richiesti distingua documenti obbligatori, opzionali e già ricevuti con indicatori testuali oltre che visivi?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              85,
              123,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la checklist dei documenti richiesti distingua documenti obbligatori, opzionali e già ricevuti con indicatori testuali oltre che visivi; nel touchpoint app di home banking contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la checklist dei documenti richiesti distingua documenti obbligatori, opzionali e già ricevuti con indicatori testuali oltre che visivi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la checklist dei documenti richiesti distingua documenti obbligatori, opzionali e già ricevuti con indicatori testuali oltre che visivi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBA-004",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che le istruzioni per fotografare documenti o buste paga non si basino solo su indicatori visivi di centratura, luce o nitidezza?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "perceivable",
            "standards": [
              74,
              82,
              117,
              14
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le istruzioni per fotografare documenti o buste paga non si basino solo su indicatori visivi di centratura, luce o nitidezza; nel touchpoint app di home banking contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le istruzioni per fotografare documenti o buste paga non si basino solo su indicatori visivi di centratura, luce o nitidezza è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le istruzioni per fotografare documenti o buste paga non si basino solo su indicatori visivi di centratura, luce o nitidezza è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "perceivable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBA-005",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che avanzamento, invio riuscito e richieste mancanti siano annunciati come messaggi di stato senza spostamenti di focus inattesi?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              113,
              123,
              30,
              99
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: avanzamento, invio riuscito e richieste mancanti siano annunciati come messaggi di stato senza spostamenti di focus inattesi; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: avanzamento, invio riuscito e richieste mancanti siano annunciati come messaggi di stato senza spostamenti di focus inattesi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: avanzamento, invio riuscito e richieste mancanti siano annunciati come messaggi di stato senza spostamenti di focus inattesi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "en-301-549",
              "focus",
              "home_banking_app",
              "mortgage",
              "pos",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBW-002",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint home banking web, è garantito che eventuali timeout durante compilazione e upload siano comunicati, prorogabili e non causino perdita dei dati inseriti?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              94,
              119,
              59,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: eventuali timeout durante compilazione e upload siano comunicati, prorogabili e non causino perdita dei dati inseriti; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: eventuali timeout durante compilazione e upload siano comunicati, prorogabili e non causino perdita dei dati inseriti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: eventuali timeout durante compilazione e upload siano comunicati, prorogabili e non causino perdita dei dati inseriti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "motor",
              "operable",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBW-003",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint home banking web, è garantito che i form di dati anagrafici, reddituali e immobiliari usino autocomplete e identificazione programmatica dello scopo dei campi?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità motorie: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "motor"
            ],
            "pour_principle": "robust",
            "standards": [
              84,
              117,
              53,
              66
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i form di dati anagrafici, reddituali e immobiliari usino autocomplete e identificazione programmatica dello scopo dei campi; nel touchpoint home banking web componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i form di dati anagrafici, reddituali e immobiliari usino autocomplete e identificazione programmatica dello scopo dei campi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i form di dati anagrafici, reddituali e immobiliari usino autocomplete e identificazione programmatica dello scopo dei campi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "motor",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBW-004",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint home banking web, è garantito che campi obbligatori, facoltativi e condizionali siano segnalati semanticamente e non solo con asterisco, colore o posizione?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              85,
              117,
              52
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: campi obbligatori, facoltativi e condizionali siano segnalati semanticamente e non solo con asterisco, colore o posizione; nel touchpoint home banking web contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: campi obbligatori, facoltativi e condizionali siano segnalati semanticamente e non solo con asterisco, colore o posizione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: campi obbligatori, facoltativi e condizionali siano segnalati semanticamente e non solo con asterisco, colore o posizione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "perceivable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-DOC-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che moduli digitali, dichiarazioni reddituali e allegati precontrattuali siano compilabili, taggati e con ordine di lettura corretto?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              80,
              5,
              12
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: moduli digitali, dichiarazioni reddituali e allegati precontrattuali siano compilabili, taggati e con ordine di lettura corretto; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: moduli digitali, dichiarazioni reddituali e allegati precontrattuali siano compilabili, taggati e con ordine di lettura corretto è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: moduli digitali, dichiarazioni reddituali e allegati precontrattuali siano compilabili, taggati e con ordine di lettura corretto è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "en-301-549",
              "mortgage",
              "motor",
              "pdf",
              "robust",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-DOC-EML-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che le richieste di integrazione documentale via email indichino cosa manca, entro quando e come inviarlo con link descrittivi accessibili?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              100,
              117,
              61,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le richieste di integrazione documentale via email indichino cosa manca, entro quando e come inviarlo con link descrittivi accessibili; nel touchpoint email, SMS e notifiche push informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le richieste di integrazione documentale via email indichino cosa manca, entro quando e come inviarlo con link descrittivi accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le richieste di integrazione documentale via email indichino cosa manca, entro quando e come inviarlo con link descrittivi accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "en-301-549",
              "mortgage",
              "notifiche",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-EML-002",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che le notifiche push su documenti mancanti siano leggibili da screen reader e non veicolino l’informazione critica solo nell’icona?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              74,
              85,
              123,
              30
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le notifiche push su documenti mancanti siano leggibili da screen reader e non veicolino l’informazione critica solo nell’icona; nel touchpoint email, SMS e notifiche push contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le notifiche push su documenti mancanti siano leggibili da screen reader e non veicolino l’informazione critica solo nell’icona è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le notifiche push su documenti mancanti siano leggibili da screen reader e non veicolino l’informazione critica solo nell’icona è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "email_push_notifications",
              "en-301-549",
              "mortgage",
              "notifiche",
              "perceivable",
              "screen-reader",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-BOT-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot di supporto all’istruttoria spieghi in modo accessibile quali documenti caricare e permetta escalation a operatore?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità uditive: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "auditory"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              123,
              36,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot di supporto all’istruttoria spieghi in modo accessibile quali documenti caricare e permetta escalation a operatore; nel touchpoint chatbot e assistente virtuale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot di supporto all’istruttoria spieghi in modo accessibile quali documenti caricare e permetta escalation a operatore è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot di supporto all’istruttoria spieghi in modo accessibile quali documenti caricare e permetta escalation a operatore è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "auditory",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "en-301-549",
              "mortgage",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBA-006",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che acquisizione selfie, documento o riconoscimento biometrico per istruttoria abbia alternativa equivalente non biometrica e accessibile?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              121,
              41,
              32,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: acquisizione selfie, documento o riconoscimento biometrico per istruttoria abbia alternativa equivalente non biometrica e accessibile; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: acquisizione selfie, documento o riconoscimento biometrico per istruttoria abbia alternativa equivalente non biometrica e accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: acquisizione selfie, documento o riconoscimento biometrico per istruttoria abbia alternativa equivalente non biometrica e accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "biometria",
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-FIL-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint filiale, è garantito che la consegna documenti in filiale garantisca percorso accessibile, privacy allo sportello e possibilità di assistenza senza barriere fisiche?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità uditive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              136,
              129,
              128,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la consegna documenti in filiale garantisca percorso accessibile, privacy allo sportello e possibilità di assistenza senza barriere fisiche; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la consegna documenti in filiale garantisca percorso accessibile, privacy allo sportello e possibilità di assistenza senza barriere fisiche è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la consegna documenti in filiale garantisca percorso accessibile, privacy allo sportello e possibilità di assistenza senza barriere fisiche è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "filiale",
              "hardware",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "visual"
            ]
          },
          {
            "id": "MU-DOC-CON-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che il consulente aiuti nella raccolta documenti senza sostituirsi indebitamente al consenso o alla firma dell’utente con disabilità?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              36,
              72,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il consulente aiuti nella raccolta documenti senza sostituirsi indebitamente al consenso o alla firma dell’utente con disabilità; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il consulente aiuti nella raccolta documenti senza sostituirsi indebitamente al consenso o alla firma dell’utente con disabilità è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il consulente aiuti nella raccolta documenti senza sostituirsi indebitamente al consenso o alla firma dell’utente con disabilità è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "branch_consultant",
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "mortgage",
              "motor",
              "understandable",
              "visual"
            ]
          },
          {
            "id": "MU-DOC-PAP-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che moduli cartacei per istruttoria siano disponibili anche in formato digitale accessibile, carattere grande o supporto assistito?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              2,
              0,
              35,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: moduli cartacei per istruttoria siano disponibili anche in formato digitale accessibile, carattere grande o supporto assistito; nel touchpoint documenti cartacei contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: moduli cartacei per istruttoria siano disponibili anche in formato digitale accessibile, carattere grande o supporto assistito è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: moduli cartacei per istruttoria siano disponibili anche in formato digitale accessibile, carattere grande o supporto assistito è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "carta",
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "paper_documents",
              "perceivable",
              "visual"
            ]
          },
          {
            "id": "MU-DOC-CAL-001",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint call center, è garantito che il call center possa comunicare la checklist documentale tramite canali alternativi accessibili, non solo lettura telefonica?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              47,
              36,
              2,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il call center possa comunicare la checklist documentale tramite canali alternativi accessibili, non solo lettura telefonica; nel touchpoint call center tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il call center possa comunicare la checklist documentale tramite canali alternativi accessibili, non solo lettura telefonica è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il call center possa comunicare la checklist documentale tramite canali alternativi accessibili, non solo lettura telefonica è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "call-center",
              "call_center",
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "operable",
              "pos"
            ]
          },
          {
            "id": "MU-DOC-DOC-002",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che documenti generati da perizia, assicurazione o intermediari siano accessibili prima di essere richiesti o trasmessi al cliente?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              5,
              81,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: documenti generati da perizia, assicurazione o intermediari siano accessibili prima di essere richiesti o trasmessi al cliente; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: documenti generati da perizia, assicurazione o intermediari siano accessibili prima di essere richiesti o trasmessi al cliente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: documenti generati da perizia, assicurazione o intermediari siano accessibili prima di essere richiesti o trasmessi al cliente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "en-301-549",
              "mortgage",
              "pdf",
              "robust",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-DOC-HBW-005",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint home banking web, è garantito che prima dell’invio definitivo dell’istruttoria sia disponibile un riepilogo accessibile con possibilità di correggere dati e allegati?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità motorie: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "motor"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              102,
              68,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: prima dell’invio definitivo dell’istruttoria sia disponibile un riepilogo accessibile con possibilità di correggere dati e allegati; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: prima dell’invio definitivo dell’istruttoria sia disponibile un riepilogo accessibile con possibilità di correggere dati e allegati è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: prima dell’invio definitivo dell’istruttoria sia disponibile un riepilogo accessibile con possibilità di correggere dati e allegati è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "motor",
              "pos",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-HBA-007",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che lo stato istruttoria mostri fasi, blocchi, azioni richieste e responsabile del prossimo passo in forma semanticamente annunciabile?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              80,
              123,
              30,
              102
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: lo stato istruttoria mostri fasi, blocchi, azioni richieste e responsabile del prossimo passo in forma semanticamente annunciabile; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: lo stato istruttoria mostri fasi, blocchi, azioni richieste e responsabile del prossimo passo in forma semanticamente annunciabile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: lo stato istruttoria mostri fasi, blocchi, azioni richieste e responsabile del prossimo passo in forma semanticamente annunciabile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-DOC-003",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che dichiarazioni, consensi privacy e autorizzazioni istruttorie siano leggibili con tecnologie assistive e associati chiaramente alla relativa azione?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              117,
              122,
              12,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: dichiarazioni, consensi privacy e autorizzazioni istruttorie siano leggibili con tecnologie assistive e associati chiaramente alla relativa azione; nel touchpoint documenti digitali e PDF informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: dichiarazioni, consensi privacy e autorizzazioni istruttorie siano leggibili con tecnologie assistive e associati chiaramente alla relativa azione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: dichiarazioni, consensi privacy e autorizzazioni istruttorie siano leggibili con tecnologie assistive e associati chiaramente alla relativa azione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "understandable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-DOC-HBA-008",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint app di home banking, è garantito che eventuali firme o prese visione intermedie per l’istruttoria non richiedano gesti complessi senza alternativa accessibile?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              104,
              105,
              108,
              20
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: eventuali firme o prese visione intermedie per l’istruttoria non richiedano gesti complessi senza alternativa accessibile; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: eventuali firme o prese visione intermedie per l’istruttoria non richiedano gesti complessi senza alternativa accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: eventuali firme o prese visione intermedie per l’istruttoria non richiedano gesti complessi senza alternativa accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "documentation_and_underwriting",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "operable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DOC-EML-003",
            "journey": "mortgage",
            "macro_step": "documentation_and_underwriting",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che solleciti e scadenze di istruttoria siano coerenti tra email, push e area riservata, senza informazioni discordanti o solo visive?",
            "rationale_it": "Nel macro-step raccolta documentale e istruttoria del mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              115,
              85,
              24,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: solleciti e scadenze di istruttoria siano coerenti tra email, push e area riservata, senza informazioni discordanti o solo visive; nel touchpoint email, SMS e notifiche push informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: solleciti e scadenze di istruttoria siano coerenti tra email, push e area riservata, senza informazioni discordanti o solo visive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: solleciti e scadenze di istruttoria siano coerenti tra email, push e area riservata, senza informazioni discordanti o solo visive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "documentation_and_underwriting",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "en-301-549",
              "mortgage",
              "notifiche",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-EML-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che la comunicazione di delibera, sospensione o rifiuto sia accessibile, chiara e non veicolata solo tramite allegato immagine o avviso generico?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              74,
              112,
              49,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la comunicazione di delibera, sospensione o rifiuto sia accessibile, chiara e non veicolata solo tramite allegato immagine o avviso generico; nel touchpoint email, SMS e notifiche push contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la comunicazione di delibera, sospensione o rifiuto sia accessibile, chiara e non veicolata solo tramite allegato immagine o avviso generico è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la comunicazione di delibera, sospensione o rifiuto sia accessibile, chiara e non veicolata solo tramite allegato immagine o avviso generico è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "en-301-549",
              "mortgage",
              "notifiche",
              "perceivable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-DOC-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che il PIES/ESIS e la proposta vincolante siano PDF accessibili, con tag, segnalibri, lingua, intestazioni e ordine di lettura corretti?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              80,
              5,
              8
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il PIES/ESIS e la proposta vincolante siano PDF accessibili, con tag, segnalibri, lingua, intestazioni e ordine di lettura corretti; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il PIES/ESIS e la proposta vincolante siano PDF accessibili, con tag, segnalibri, lingua, intestazioni e ordine di lettura corretti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il PIES/ESIS e la proposta vincolante siano PDF accessibili, con tag, segnalibri, lingua, intestazioni e ordine di lettura corretti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "en-301-549",
              "mortgage",
              "pdf",
              "pos",
              "robust",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-DEL-DOC-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che le sezioni chiave del PIES/ESIS siano navigabili per intestazioni e tabelle, inclusi importo totale, rata, durata, rischi e costi?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              102,
              80,
              7,
              73
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le sezioni chiave del PIES/ESIS siano navigabili per intestazioni e tabelle, inclusi importo totale, rata, durata, rischi e costi; nel touchpoint documenti digitali e PDF tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le sezioni chiave del PIES/ESIS siano navigabili per intestazioni e tabelle, inclusi importo totale, rata, durata, rischi e costi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le sezioni chiave del PIES/ESIS siano navigabili per intestazioni e tabelle, inclusi importo totale, rata, durata, rischi e costi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "en-301-549",
              "mortgage",
              "operable",
              "pdf",
              "pos",
              "tabelle",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-DEL-HBW-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint home banking web, è garantito che condizioni approvate, importi e vincoli della proposta non siano comunicati solo tramite colore, badge o icone?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              85,
              80,
              54,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: condizioni approvate, importi e vincoli della proposta non siano comunicati solo tramite colore, badge o icone; nel touchpoint home banking web contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: condizioni approvate, importi e vincoli della proposta non siano comunicati solo tramite colore, badge o icone è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: condizioni approvate, importi e vincoli della proposta non siano comunicati solo tramite colore, badge o icone è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "perceivable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-HBW-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint home banking web, è garantito che piano di ammortamento, grafici di interessi e capitale e variazioni di scenario siano disponibili in tabella accessibile scaricabile?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              85,
              52,
              86
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: piano di ammortamento, grafici di interessi e capitale e variazioni di scenario siano disponibili in tabella accessibile scaricabile; nel touchpoint home banking web contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: piano di ammortamento, grafici di interessi e capitale e variazioni di scenario siano disponibili in tabella accessibile scaricabile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: piano di ammortamento, grafici di interessi e capitale e variazioni di scenario siano disponibili in tabella accessibile scaricabile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "perceivable",
              "pos",
              "tabelle",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-HBA-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che motivi di rifiuto, richiesta di integrazione o condizioni sospensive siano scritti in modo comprensibile e orientato all’azione?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              118,
              27,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: motivi di rifiuto, richiesta di integrazione o condizioni sospensive siano scritti in modo comprensibile e orientato all’azione; nel touchpoint app di home banking informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: motivi di rifiuto, richiesta di integrazione o condizioni sospensive siano scritti in modo comprensibile e orientato all’azione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: motivi di rifiuto, richiesta di integrazione o condizioni sospensive siano scritti in modo comprensibile e orientato all’azione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "pos",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-HBA-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che la scadenza per accettare la proposta sia evidente, annunciata e gestibile senza timeout improvvisi o perdita della sessione?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "cognitive",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              94,
              123,
              19,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la scadenza per accettare la proposta sia evidente, annunciata e gestibile senza timeout improvvisi o perdita della sessione; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la scadenza per accettare la proposta sia evidente, annunciata e gestibile senza timeout improvvisi o perdita della sessione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la scadenza per accettare la proposta sia evidente, annunciata e gestibile senza timeout improvvisi o perdita della sessione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-HBW-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint home banking web, è garantito che l’accettazione digitale della proposta sia utilizzabile da tastiera, con focus visibile e ordine logico dei controlli?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità motorie, con disabilità visive: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "motor",
              "visual"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              99,
              103,
              62
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’accettazione digitale della proposta sia utilizzabile da tastiera, con focus visibile e ordine logico dei controlli; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’accettazione digitale della proposta sia utilizzabile da tastiera, con focus visibile e ordine logico dei controlli è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’accettazione digitale della proposta sia utilizzabile da tastiera, con focus visibile e ordine logico dei controlli è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "deliberation_and_proposal",
              "en-301-549",
              "focus",
              "home_banking_web",
              "keyboard",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-HBA-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che oTP, conferme o autenticazione per accettare la proposta abbiano alternative accessibili e non richiedano memorizzazione complessa?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              121,
              94,
              31,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: oTP, conferme o autenticazione per accettare la proposta abbiano alternative accessibili e non richiedano memorizzazione complessa; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: oTP, conferme o autenticazione per accettare la proposta abbiano alternative accessibili e non richiedano memorizzazione complessa è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: oTP, conferme o autenticazione per accettare la proposta abbiano alternative accessibili e non richiedano memorizzazione complessa è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "operable",
              "otp",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-CAL-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint call center, è garantito che il call center possa spiegare esito e condizioni della delibera tramite canali accessibili per utenti sordi o con difficoltà cognitive?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              47,
              36,
              2,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il call center possa spiegare esito e condizioni della delibera tramite canali accessibili per utenti sordi o con difficoltà cognitive; nel touchpoint call center informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il call center possa spiegare esito e condizioni della delibera tramite canali accessibili per utenti sordi o con difficoltà cognitive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il call center possa spiegare esito e condizioni della delibera tramite canali accessibili per utenti sordi o con difficoltà cognitive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "call-center",
              "call_center",
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "pos",
              "understandable"
            ]
          },
          {
            "id": "MU-DEL-CON-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che il consulente illustri proposta, rischi, opzioni assicurative e condizioni sospensive con materiali accessibili e linguaggio semplice?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità uditive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              36,
              112,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il consulente illustri proposta, rischi, opzioni assicurative e condizioni sospensive con materiali accessibili e linguaggio semplice; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il consulente illustri proposta, rischi, opzioni assicurative e condizioni sospensive con materiali accessibili e linguaggio semplice è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il consulente illustri proposta, rischi, opzioni assicurative e condizioni sospensive con materiali accessibili e linguaggio semplice è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch_consultant",
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "linguaggio-chiaro",
              "mortgage",
              "pos",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-FIL-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint filiale, è garantito che gli incontri di discussione della proposta avvengano in spazi accessibili, riservati, con illuminazione e acustica adeguate?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "auditory",
              "visual",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              136,
              129,
              128,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: gli incontri di discussione della proposta avvengano in spazi accessibili, riservati, con illuminazione e acustica adeguate; nel touchpoint filiale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: gli incontri di discussione della proposta avvengano in spazi accessibili, riservati, con illuminazione e acustica adeguate è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: gli incontri di discussione della proposta avvengano in spazi accessibili, riservati, con illuminazione e acustica adeguate è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "hardware",
              "mortgage",
              "motor",
              "perceivable",
              "pos",
              "visual"
            ]
          },
          {
            "id": "MU-DEL-PAP-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che la proposta cartacea sia disponibile in carattere grande, formato digitale accessibile o lettura assistita documentata prima della decisione?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              2,
              0,
              35,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la proposta cartacea sia disponibile in carattere grande, formato digitale accessibile o lettura assistita documentata prima della decisione; nel touchpoint documenti cartacei contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la proposta cartacea sia disponibile in carattere grande, formato digitale accessibile o lettura assistita documentata prima della decisione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la proposta cartacea sia disponibile in carattere grande, formato digitale accessibile o lettura assistita documentata prima della decisione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "carta",
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "paper_documents",
              "perceivable",
              "pos",
              "visual"
            ]
          },
          {
            "id": "MU-DEL-EML-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che allegati e link della proposta in email abbiano nomi descrittivi, ordine logico e nessun contenuto critico solo nel corpo immagine?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              100,
              74,
              122,
              69
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: allegati e link della proposta in email abbiano nomi descrittivi, ordine logico e nessun contenuto critico solo nel corpo immagine; nel touchpoint email, SMS e notifiche push componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: allegati e link della proposta in email abbiano nomi descrittivi, ordine logico e nessun contenuto critico solo nel corpo immagine è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: allegati e link della proposta in email abbiano nomi descrittivi, ordine logico e nessun contenuto critico solo nel corpo immagine è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "email_push_notifications",
              "en-301-549",
              "mortgage",
              "notifiche",
              "pos",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-EML-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che le push di proposta approvata o scadenza includano testo completo o link accessibile, non solo vibrazione, colore o icona?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              85,
              123,
              30,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le push di proposta approvata o scadenza includano testo completo o link accessibile, non solo vibrazione, colore o icona; nel touchpoint email, SMS e notifiche push contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le push di proposta approvata o scadenza includano testo completo o link accessibile, non solo vibrazione, colore o icona è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le push di proposta approvata o scadenza includano testo completo o link accessibile, non solo vibrazione, colore o icona è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "auditory",
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "email_push_notifications",
              "en-301-549",
              "mortgage",
              "notifiche",
              "perceivable",
              "pos",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-BOT-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot risponda su condizioni della proposta con messaggi accessibili e segnali chiaramente quando serve un consulente umano?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità uditive: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "auditory"
            ],
            "pour_principle": "understandable",
            "standards": [
              115,
              123,
              36,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot risponda su condizioni della proposta con messaggi accessibili e segnali chiaramente quando serve un consulente umano; nel touchpoint chatbot e assistente virtuale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot risponda su condizioni della proposta con messaggi accessibili e segnali chiaramente quando serve un consulente umano è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot risponda su condizioni della proposta con messaggi accessibili e segnali chiaramente quando serve un consulente umano è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "auditory",
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "en-301-549",
              "mortgage",
              "pos",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-DOC-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che i documenti di proposta dichiarino la lingua corretta e preservino struttura semantica anche dopo download, stampa o inoltro?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              110,
              73,
              8,
              5
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: i documenti di proposta dichiarino la lingua corretta e preservino struttura semantica anche dopo download, stampa o inoltro; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: i documenti di proposta dichiarino la lingua corretta e preservino struttura semantica anche dopo download, stampa o inoltro è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: i documenti di proposta dichiarino la lingua corretta e preservino struttura semantica anche dopo download, stampa o inoltro è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "en-301-549",
              "mortgage",
              "pdf",
              "pos",
              "robust",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-DEL-INF-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint materiale informativo, è garantito che coperture assicurative obbligatorie e facoltative siano distinguibili, confrontabili e spiegate senza gergo tecnico non necessario?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              117,
              35,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: coperture assicurative obbligatorie e facoltative siano distinguibili, confrontabili e spiegate senza gergo tecnico non necessario; nel touchpoint materiale informativo informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: coperture assicurative obbligatorie e facoltative siano distinguibili, confrontabili e spiegate senza gergo tecnico non necessario è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: coperture assicurative obbligatorie e facoltative siano distinguibili, confrontabili e spiegate senza gergo tecnico non necessario è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "informational_material",
              "mortgage",
              "pos",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-HBW-004",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint home banking web, è garantito che variazioni di tasso o condizioni rispetto alla simulazione iniziale siano evidenziate in testo e spiegate con confronto accessibile?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              85,
              115,
              64,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: variazioni di tasso o condizioni rispetto alla simulazione iniziale siano evidenziate in testo e spiegate con confronto accessibile; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: variazioni di tasso o condizioni rispetto alla simulazione iniziale siano evidenziate in testo e spiegate con confronto accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: variazioni di tasso o condizioni rispetto alla simulazione iniziale siano evidenziate in testo e spiegate con confronto accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "pos",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-DOC-004",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che le tabelle di confronto tra tasso fisso, variabile e misto abbiano intestazioni associate e note richiamate correttamente?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              73,
              5,
              81
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le tabelle di confronto tra tasso fisso, variabile e misto abbiano intestazioni associate e note richiamate correttamente; nel touchpoint documenti digitali e PDF contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le tabelle di confronto tra tasso fisso, variabile e misto abbiano intestazioni associate e note richiamate correttamente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le tabelle di confronto tra tasso fisso, variabile e misto abbiano intestazioni associate e note richiamate correttamente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "en-301-549",
              "mortgage",
              "pdf",
              "perceivable",
              "pos",
              "tabelle",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-DEL-HBA-004",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che prima dell’accettazione della proposta l’utente possa rivedere, correggere e annullare senza perdita di dati o azione irreversibile?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "cognitive",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              105,
              28,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: prima dell’accettazione della proposta l’utente possa rivedere, correggere e annullare senza perdita di dati o azione irreversibile; nel touchpoint app di home banking informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: prima dell’accettazione della proposta l’utente possa rivedere, correggere e annullare senza perdita di dati o azione irreversibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: prima dell’accettazione della proposta l’utente possa rivedere, correggere e annullare senza perdita di dati o azione irreversibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "pos",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-MED-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che video o tutorial sulle condizioni della proposta abbiano sottotitoli, trascrizione e descrizione dei contenuti visivi essenziali?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              77,
              78,
              48
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: video o tutorial sulle condizioni della proposta abbiano sottotitoli, trascrizione e descrizione dei contenuti visivi essenziali; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: video o tutorial sulle condizioni della proposta abbiano sottotitoli, trascrizione e descrizione dei contenuti visivi essenziali è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: video o tutorial sulle condizioni della proposta abbiano sottotitoli, trascrizione e descrizione dei contenuti visivi essenziali è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "auditory",
              "cognitive",
              "deliberation_and_proposal",
              "digital_media",
              "en-301-549",
              "mortgage",
              "perceivable",
              "pos",
              "sottotitoli",
              "video",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-HBA-005",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che lo stato approvato, respinto o in attesa sia esposto come testo e messaggio di stato compatibile con tecnologie assistive?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              123,
              80,
              30,
              115
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: lo stato approvato, respinto o in attesa sia esposto come testo e messaggio di stato compatibile con tecnologie assistive; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: lo stato approvato, respinto o in attesa sia esposto come testo e messaggio di stato compatibile con tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: lo stato approvato, respinto o in attesa sia esposto come testo e messaggio di stato compatibile con tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "deliberation_and_proposal",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "pin",
              "pos",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-DEL-CON-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che l’utente possa richiedere accomodamenti accessibili per valutare la proposta senza penalizzazioni di tempo, costo o trattamento?",
            "rationale_it": "Nel macro-step delibera e proposta di mutuo, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "visual",
              "auditory",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              2,
              0,
              36,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’utente possa richiedere accomodamenti accessibili per valutare la proposta senza penalizzazioni di tempo, costo o trattamento; nel touchpoint consulente di filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’utente possa richiedere accomodamenti accessibili per valutare la proposta senza penalizzazioni di tempo, costo o trattamento è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’utente possa richiedere accomodamenti accessibili per valutare la proposta senza penalizzazioni di tempo, costo o trattamento è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch_consultant",
              "cognitive",
              "deliberation_and_proposal",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "visual"
            ]
          },
          {
            "id": "MU-STI-HBA-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che la prenotazione dell’appuntamento per stipula o rogito sia accessibile, con scelta sede, data, esigenze di assistenza e conferma chiara?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              117,
              122,
              29
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la prenotazione dell’appuntamento per stipula o rogito sia accessibile, con scelta sede, data, esigenze di assistenza e conferma chiara; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la prenotazione dell’appuntamento per stipula o rogito sia accessibile, con scelta sede, data, esigenze di assistenza e conferma chiara è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la prenotazione dell’appuntamento per stipula o rogito sia accessibile, con scelta sede, data, esigenze di assistenza e conferma chiara è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "operable",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-FIL-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint filiale, è garantito che percorso, ingresso, ascensori e sala firma per rogito o stipula siano accessibili a persone con mobilità ridotta?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              136,
              129,
              126,
              127
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: percorso, ingresso, ascensori e sala firma per rogito o stipula siano accessibili a persone con mobilità ridotta; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: percorso, ingresso, ascensori e sala firma per rogito o stipula siano accessibili a persone con mobilità ridotta è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: percorso, ingresso, ascensori e sala firma per rogito o stipula siano accessibili a persone con mobilità ridotta è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "branch",
              "elderly_temporary_situational",
              "firma",
              "hardware",
              "mortgage",
              "motor",
              "operable",
              "deliberation_and_proposal"
            ]
          },
          {
            "id": "MU-STI-FIL-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint filiale, è garantito che accoglienza, chiamata del turno e indicazioni verso sala firma siano percepibili tramite modalità visive, tattili o testuali alternative?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "visual",
              "auditory",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              139,
              129,
              2,
              36
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: accoglienza, chiamata del turno e indicazioni verso sala firma siano percepibili tramite modalità visive, tattili o testuali alternative; nel touchpoint filiale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: accoglienza, chiamata del turno e indicazioni verso sala firma siano percepibili tramite modalità visive, tattili o testuali alternative è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: accoglienza, chiamata del turno e indicazioni verso sala firma siano percepibili tramite modalità visive, tattili o testuali alternative è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch",
              "cognitive",
              "eaa",
              "en-301-549",
              "firma",
              "hardware",
              "mortgage",
              "perceivable",
              "deliberation_and_proposal",
              "visual"
            ]
          },
          {
            "id": "MU-STI-FIL-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint filiale, è garantito che la sala firma offra condizioni acustiche, illuminazione e supporti di ascolto adeguati per comprendere clausole lette o spiegate?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "auditory",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              139,
              128,
              2,
              36
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la sala firma offra condizioni acustiche, illuminazione e supporti di ascolto adeguati per comprendere clausole lette o spiegate; nel touchpoint filiale contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la sala firma offra condizioni acustiche, illuminazione e supporti di ascolto adeguati per comprendere clausole lette o spiegate è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la sala firma offra condizioni acustiche, illuminazione e supporti di ascolto adeguati per comprendere clausole lette o spiegate è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "hardware",
              "mortgage",
              "perceivable",
              "deliberation_and_proposal",
              "visual"
            ]
          },
          {
            "id": "MU-STI-CON-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che per la stipula siano disponibili interprete LIS, relay o canali testuali quando la procedura richiede comunicazione orale essenziale?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "auditory",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              47,
              36,
              2,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: per la stipula siano disponibili interprete LIS, relay o canali testuali quando la procedura richiede comunicazione orale essenziale; nel touchpoint consulente di filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: per la stipula siano disponibili interprete LIS, relay o canali testuali quando la procedura richiede comunicazione orale essenziale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: per la stipula siano disponibili interprete LIS, relay o canali testuali quando la procedura richiede comunicazione orale essenziale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch_consultant",
              "cognitive",
              "eaa",
              "en-301-549",
              "mortgage",
              "operable",
              "deliberation_and_proposal"
            ]
          },
          {
            "id": "MU-STI-DOC-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che contratto di mutuo, capitolato e allegati siano forniti prima della firma in formato PDF/UA o equivalente accessibile?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              80,
              5,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: contratto di mutuo, capitolato e allegati siano forniti prima della firma in formato PDF/UA o equivalente accessibile; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: contratto di mutuo, capitolato e allegati siano forniti prima della firma in formato PDF/UA o equivalente accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: contratto di mutuo, capitolato e allegati siano forniti prima della firma in formato PDF/UA o equivalente accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "firma",
              "mortgage",
              "motor",
              "mutuo",
              "pdf",
              "robust",
              "deliberation_and_proposal",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-STI-PAP-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che documenti cartacei di stipula siano disponibili in carattere grande, digitale accessibile o lettura assistita prima del momento vincolante?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              2,
              0,
              35,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: documenti cartacei di stipula siano disponibili in carattere grande, digitale accessibile o lettura assistita prima del momento vincolante; nel touchpoint documenti cartacei contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: documenti cartacei di stipula siano disponibili in carattere grande, digitale accessibile o lettura assistita prima del momento vincolante è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: documenti cartacei di stipula siano disponibili in carattere grande, digitale accessibile o lettura assistita prima del momento vincolante è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "carta",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "paper_documents",
              "perceivable",
              "deliberation_and_proposal",
              "visual"
            ]
          },
          {
            "id": "MU-STI-DOC-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che atto notarile e allegati abbiano ordine di lettura, riferimenti incrociati e note comprensibili anche tramite screen reader?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              81,
              102,
              7
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: atto notarile e allegati abbiano ordine di lettura, riferimenti incrociati e note comprensibili anche tramite screen reader; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: atto notarile e allegati abbiano ordine di lettura, riferimenti incrociati e note comprensibili anche tramite screen reader è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: atto notarile e allegati abbiano ordine di lettura, riferimenti incrociati e note comprensibili anche tramite screen reader è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "mortgage",
              "pdf",
              "robust",
              "screen-reader",
              "deliberation_and_proposal",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-STI-TAB-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che la tavoletta grafometrica renda identificabili documento, pagina, campo firma e azione richiesta anche a utenti ciechi o ipovedenti?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              40,
              80,
              122,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la tavoletta grafometrica renda identificabili documento, pagina, campo firma e azione richiesta anche a utenti ciechi o ipovedenti; nel touchpoint tavoletta grafometrica e firma elettronica contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la tavoletta grafometrica renda identificabili documento, pagina, campo firma e azione richiesta anche a utenti ciechi o ipovedenti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la tavoletta grafometrica renda identificabili documento, pagina, campo firma e azione richiesta anche a utenti ciechi o ipovedenti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "firma",
              "firma-grafometrica",
              "graphometric_tablet_e_signature",
              "mortgage",
              "perceivable",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-TAB-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che la firma grafometrica abbia alternativa equivalente per utenti con disabilità motorie o impossibilità di firmare a mano?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità motorie, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              42,
              104,
              108,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la firma grafometrica abbia alternativa equivalente per utenti con disabilità motorie o impossibilità di firmare a mano; nel touchpoint tavoletta grafometrica e firma elettronica tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la firma grafometrica abbia alternativa equivalente per utenti con disabilità motorie o impossibilità di firmare a mano è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la firma grafometrica abbia alternativa equivalente per utenti con disabilità motorie o impossibilità di firmare a mano è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "firma-grafometrica",
              "graphometric_tablet_e_signature",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "deliberation_and_proposal",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-TAB-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che controlli conferma, annulla e prosegui della firma elettronica siano attivabili senza precisione fine e con prevenzione tocchi accidentali?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "motor",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              105,
              109,
              42,
              21
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: controlli conferma, annulla e prosegui della firma elettronica siano attivabili senza precisione fine e con prevenzione tocchi accidentali; nel touchpoint tavoletta grafometrica e firma elettronica tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: controlli conferma, annulla e prosegui della firma elettronica siano attivabili senza precisione fine e con prevenzione tocchi accidentali è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: controlli conferma, annulla e prosegui della firma elettronica siano attivabili senza precisione fine e con prevenzione tocchi accidentali è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "graphometric_tablet_e_signature",
              "mortgage",
              "motor",
              "operable",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-HBA-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che autenticazione forte, OTP o firma digitale remota per stipula siano accessibili e non dipendano da un solo canale sensoriale?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità uditive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "auditory",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              121,
              94,
              31,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: autenticazione forte, OTP o firma digitale remota per stipula siano accessibili e non dipendano da un solo canale sensoriale; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: autenticazione forte, OTP o firma digitale remota per stipula siano accessibili e non dipendano da un solo canale sensoriale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: autenticazione forte, OTP o firma digitale remota per stipula siano accessibili e non dipendano da un solo canale sensoriale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "auditory",
              "cognitive",
              "eaa",
              "en-301-549",
              "firma",
              "home_banking_app",
              "mortgage",
              "motor",
              "operable",
              "otp",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-DOC-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che prima della firma sia disponibile un riepilogo accessibile delle clausole essenziali, dei costi e degli impegni assunti?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              102,
              112,
              7,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: prima della firma sia disponibile un riepilogo accessibile delle clausole essenziali, dei costi e degli impegni assunti; nel touchpoint documenti digitali e PDF informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: prima della firma sia disponibile un riepilogo accessibile delle clausole essenziali, dei costi e degli impegni assunti è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: prima della firma sia disponibile un riepilogo accessibile delle clausole essenziali, dei costi e degli impegni assunti è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "mortgage",
              "deliberation_and_proposal",
              "understandable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-STI-HBA-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint app di home banking, è garantito che ogni azione legalmente vincolante richieda conferma esplicita, annullabile e rileggibile prima dell’invio definitivo?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità motorie, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "cognitive",
              "motor",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              105,
              28,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ogni azione legalmente vincolante richieda conferma esplicita, annullabile e rileggibile prima dell’invio definitivo; nel touchpoint app di home banking informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ogni azione legalmente vincolante richieda conferma esplicita, annullabile e rileggibile prima dell’invio definitivo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ogni azione legalmente vincolante richieda conferma esplicita, annullabile e rileggibile prima dell’invio definitivo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "deliberation_and_proposal",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-TAB-004",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint tavoletta grafometrica e firma elettronica, è garantito che la sessione di firma non imponga countdown non estendibili o pressione temporale incompatibile con tecnologie assistive?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint tavoletta grafometrica e firma elettronica può escludere o penalizzare utenti con disabilità motorie, con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "graphometric_tablet_e_signature",
            "affected_user_categories": [
              "motor",
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              94,
              19,
              2,
              119
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la sessione di firma non imponga countdown non estendibili o pressione temporale incompatibile con tecnologie assistive; nel touchpoint tavoletta grafometrica e firma elettronica tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la sessione di firma non imponga countdown non estendibili o pressione temporale incompatibile con tecnologie assistive è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la sessione di firma non imponga countdown non estendibili o pressione temporale incompatibile con tecnologie assistive è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Prevedere output vocale o tattile, comandi fisici distinguibili, altezza e raggiungibilità adeguate, tempi estendibili e canale alternativo equivalente quando l’hardware non è utilizzabile.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "graphometric_tablet_e_signature",
              "mortgage",
              "motor",
              "operable",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-HBW-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint home banking web, è garantito che l’utente possa consultare i documenti di firma con le proprie tecnologie assistive su dispositivo personale prima dell’atto?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              101,
              122,
              69,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’utente possa consultare i documenti di firma con le proprie tecnologie assistive su dispositivo personale prima dell’atto; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’utente possa consultare i documenti di firma con le proprie tecnologie assistive su dispositivo personale prima dell’atto è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’utente possa consultare i documenti di firma con le proprie tecnologie assistive su dispositivo personale prima dell’atto è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "firma",
              "home_banking_web",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-CON-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che il consulente spieghi il flusso di firma rispettando autonomia, privacy e decisione informata dell’utente con disabilità?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, con disabilità uditive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              36,
              72,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il consulente spieghi il flusso di firma rispettando autonomia, privacy e decisione informata dell’utente con disabilità; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il consulente spieghi il flusso di firma rispettando autonomia, privacy e decisione informata dell’utente con disabilità è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il consulente spieghi il flusso di firma rispettando autonomia, privacy e decisione informata dell’utente con disabilità è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch_consultant",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "mortgage",
              "deliberation_and_proposal",
              "understandable",
              "visual"
            ]
          },
          {
            "id": "MU-STI-CON-003",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che siano previste procedure accessibili per delega, procura, testimone o assistenza alla firma quando l’utente non può firmare autonomamente?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              2,
              0,
              36,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: siano previste procedure accessibili per delega, procura, testimone o assistenza alla firma quando l’utente non può firmare autonomamente; nel touchpoint consulente di filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: siano previste procedure accessibili per delega, procura, testimone o assistenza alla firma quando l’utente non può firmare autonomamente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: siano previste procedure accessibili per delega, procura, testimone o assistenza alla firma quando l’utente non può firmare autonomamente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "branch_consultant",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "mortgage",
              "motor",
              "operable",
              "deliberation_and_proposal",
              "visual"
            ]
          },
          {
            "id": "MU-STI-CAL-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint call center, è garantito che istruzioni pre-stipula comunicate telefonicamente siano replicate in canali testuali accessibili e coerenti con la documentazione ufficiale?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              47,
              36,
              115,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: istruzioni pre-stipula comunicate telefonicamente siano replicate in canali testuali accessibili e coerenti con la documentazione ufficiale; nel touchpoint call center informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: istruzioni pre-stipula comunicate telefonicamente siano replicate in canali testuali accessibili e coerenti con la documentazione ufficiale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: istruzioni pre-stipula comunicate telefonicamente siano replicate in canali testuali accessibili e coerenti con la documentazione ufficiale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "call_center",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "deliberation_and_proposal",
              "understandable",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-EML-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che il pacchetto documentale inviato via email prima della firma abbia allegati accessibili, nomi descrittivi e ordine di consultazione chiaro?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              100,
              73,
              6,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il pacchetto documentale inviato via email prima della firma abbia allegati accessibili, nomi descrittivi e ordine di consultazione chiaro; nel touchpoint email, SMS e notifiche push componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il pacchetto documentale inviato via email prima della firma abbia allegati accessibili, nomi descrittivi e ordine di consultazione chiaro è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il pacchetto documentale inviato via email prima della firma abbia allegati accessibili, nomi descrittivi e ordine di consultazione chiaro è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "eaa",
              "email_push_notifications",
              "en-301-549",
              "firma",
              "mortgage",
              "notifiche",
              "pdf",
              "robust",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-PAP-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che moduli di identificazione, privacy e consegna copie in sede siano leggibili, compilabili con supporto e disponibili in formato alternativo?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              2,
              35,
              0,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: moduli di identificazione, privacy e consegna copie in sede siano leggibili, compilabili con supporto e disponibili in formato alternativo; nel touchpoint documenti cartacei contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: moduli di identificazione, privacy e consegna copie in sede siano leggibili, compilabili con supporto e disponibili in formato alternativo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: moduli di identificazione, privacy e consegna copie in sede siano leggibili, compilabili con supporto e disponibili in formato alternativo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "mortgage",
              "motor",
              "paper_documents",
              "perceivable",
              "deliberation_and_proposal",
              "visual"
            ]
          },
          {
            "id": "MU-STI-MED-001",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che guide video o tutorial su come firmare il mutuo abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              77,
              78,
              48
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: guide video o tutorial su come firmare il mutuo abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: guide video o tutorial su come firmare il mutuo abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: guide video o tutorial su come firmare il mutuo abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "auditory",
              "cognitive",
              "digital_media",
              "en-301-549",
              "firma",
              "mortgage",
              "mutuo",
              "perceivable",
              "deliberation_and_proposal",
              "sottotitoli",
              "video",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-STI-DOC-004",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che ricevuta, copia firmata e attestazione di stipula siano consegnate in formato accessibile subito dopo la firma?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              80,
              5,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: ricevuta, copia firmata e attestazione di stipula siano consegnate in formato accessibile subito dopo la firma; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: ricevuta, copia firmata e attestazione di stipula siano consegnate in formato accessibile subito dopo la firma è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: ricevuta, copia firmata e attestazione di stipula siano consegnate in formato accessibile subito dopo la firma è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "firma",
              "mortgage",
              "pdf",
              "robust",
              "deliberation_and_proposal",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-STI-HBW-002",
            "journey": "mortgage",
            "macro_step": "deliberation_and_proposal",
            "question_it": "Nel touchpoint home banking web, è garantito che il registro o audit trail della firma sia scaricabile come documento testuale accessibile e non solo come immagine o scansione?",
            "rationale_it": "Nel macro-step stipula e rogito notarile, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              74,
              73,
              4,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il registro o audit trail della firma sia scaricabile come documento testuale accessibile e non solo come immagine o scansione; nel touchpoint home banking web componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il registro o audit trail della firma sia scaricabile come documento testuale accessibile e non solo come immagine o scansione è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il registro o audit trail della firma sia scaricabile come documento testuale accessibile e non solo come immagine o scansione è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "firma",
              "home_banking_web",
              "mortgage",
              "pdf",
              "robust",
              "deliberation_and_proposal",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBA-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint app di home banking, è garantito che il piano di ammortamento post-erogazione sia consultabile come tabella accessibile, con capitale, interessi, scadenze e debito residuo?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              80,
              86,
              15,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il piano di ammortamento post-erogazione sia consultabile come tabella accessibile, con capitale, interessi, scadenze e debito residuo; nel touchpoint app di home banking contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il piano di ammortamento post-erogazione sia consultabile come tabella accessibile, con capitale, interessi, scadenze e debito residuo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il piano di ammortamento post-erogazione sia consultabile come tabella accessibile, con capitale, interessi, scadenze e debito residuo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "perceivable",
              "pos",
              "post_disbursement_and_repayment",
              "tabelle",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBW-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint home banking web, è garantito che dashboard rimborso mutuo, prossima rata e stato pagamenti siano annunciabili come testo e messaggi di stato?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              80,
              123,
              70,
              102
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: dashboard rimborso mutuo, prossima rata e stato pagamenti siano annunciabili come testo e messaggi di stato; nel touchpoint home banking web componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: dashboard rimborso mutuo, prossima rata e stato pagamenti siano annunciabili come testo e messaggi di stato è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: dashboard rimborso mutuo, prossima rata e stato pagamenti siano annunciabili come testo e messaggi di stato è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "mutuo",
              "pagamenti",
              "pos",
              "post_disbursement_and_repayment",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-EML-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che avvisi rata, quietanze e scadenze siano comunicati con email e push accessibili, con date e importi in testo?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              85,
              123,
              30,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: avvisi rata, quietanze e scadenze siano comunicati con email e push accessibili, con date e importi in testo; nel touchpoint email, SMS e notifiche push contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: avvisi rata, quietanze e scadenze siano comunicati con email e push accessibili, con date e importi in testo è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: avvisi rata, quietanze e scadenze siano comunicati con email e push accessibili, con date e importi in testo è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "email_push_notifications",
              "en-301-549",
              "mortgage",
              "notifiche",
              "perceivable",
              "pos",
              "post_disbursement_and_repayment",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBW-002",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint home banking web, è garantito che la modifica o conferma dell’IBAN di addebito abbia etichette, controlli di errore e riepilogo prima dell’invio?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, con disabilità motorie: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "motor"
            ],
            "pour_principle": "understandable",
            "standards": [
              116,
              117,
              119,
              68
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: la modifica o conferma dell’IBAN di addebito abbia etichette, controlli di errore e riepilogo prima dell’invio; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: la modifica o conferma dell’IBAN di addebito abbia etichette, controlli di errore e riepilogo prima dell’invio è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: la modifica o conferma dell’IBAN di addebito abbia etichette, controlli di errore e riepilogo prima dell’invio è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "error-handling",
              "home_banking_web",
              "mortgage",
              "motor",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBA-002",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint app di home banking, è garantito che promemoria e stato rata non usino solo verde, rosso o icone per distinguere pagamento regolare, in scadenza o insoluto?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              85,
              80,
              16,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: promemoria e stato rata non usino solo verde, rosso o icone per distinguere pagamento regolare, in scadenza o insoluto; nel touchpoint app di home banking contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: promemoria e stato rata non usino solo verde, rosso o icone per distinguere pagamento regolare, in scadenza o insoluto è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: promemoria e stato rata non usino solo verde, rosso o icone per distinguere pagamento regolare, in scadenza o insoluto è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "pagamenti",
              "perceivable",
              "pos",
              "post_disbursement_and_repayment",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-DOC-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che comunicazioni di ritardo, insoluto o messa in mora siano comprensibili, accessibili e contengano azioni disponibili in modo chiaro?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              118,
              11,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: comunicazioni di ritardo, insoluto o messa in mora siano comprensibili, accessibili e contengano azioni disponibili in modo chiaro; nel touchpoint documenti digitali e PDF informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: comunicazioni di ritardo, insoluto o messa in mora siano comprensibili, accessibili e contengano azioni disponibili in modo chiaro è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: comunicazioni di ritardo, insoluto o messa in mora siano comprensibili, accessibili e contengano azioni disponibili in modo chiaro è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-POS-HBW-003",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint home banking web, è garantito che richieste di rinegoziazione, sospensione rata o modifica piano siano compilabili da tastiera e con istruzioni chiare?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "motor",
              "visual",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              117,
              57,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: richieste di rinegoziazione, sospensione rata o modifica piano siano compilabili da tastiera e con istruzioni chiare; nel touchpoint home banking web tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: richieste di rinegoziazione, sospensione rata o modifica piano siano compilabili da tastiera e con istruzioni chiare è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: richieste di rinegoziazione, sospensione rata o modifica piano siano compilabili da tastiera e con istruzioni chiare è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "home_banking_web",
              "keyboard",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "post_disbursement_and_repayment",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBA-003",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint app di home banking, è garantito che calcoli di surroga, estinzione anticipata o rimborso parziale siano accessibili, spiegati e non solo rappresentati graficamente?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              80,
              112,
              15,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: calcoli di surroga, estinzione anticipata o rimborso parziale siano accessibili, spiegati e non solo rappresentati graficamente; nel touchpoint app di home banking informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: calcoli di surroga, estinzione anticipata o rimborso parziale siano accessibili, spiegati e non solo rappresentati graficamente è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: calcoli di surroga, estinzione anticipata o rimborso parziale siano accessibili, spiegati e non solo rappresentati graficamente è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-DOC-002",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che estratti conto mutuo, quietanze e certificazioni interessi siano PDF taggati, con tabelle e lettura corretta?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              73,
              80,
              5,
              12
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: estratti conto mutuo, quietanze e certificazioni interessi siano PDF taggati, con tabelle e lettura corretta; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: estratti conto mutuo, quietanze e certificazioni interessi siano PDF taggati, con tabelle e lettura corretta è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: estratti conto mutuo, quietanze e certificazioni interessi siano PDF taggati, con tabelle e lettura corretta è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "en-301-549",
              "mortgage",
              "mutuo",
              "pdf",
              "pos",
              "post_disbursement_and_repayment",
              "robust",
              "tabelle",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-POS-DOC-003",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che il riepilogo annuale del mutuo abbia struttura navigabile, lingua dichiarata e dati fiscali comprensibili?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "robust",
            "standards": [
              110,
              102,
              73,
              8
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il riepilogo annuale del mutuo abbia struttura navigabile, lingua dichiarata e dati fiscali comprensibili; nel touchpoint documenti digitali e PDF componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il riepilogo annuale del mutuo abbia struttura navigabile, lingua dichiarata e dati fiscali comprensibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il riepilogo annuale del mutuo abbia struttura navigabile, lingua dichiarata e dati fiscali comprensibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "mutuo",
              "pdf",
              "pos",
              "post_disbursement_and_repayment",
              "robust",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-POS-DOC-004",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint documenti digitali e PDF, è garantito che documenti assicurativi collegati al mutuo, variazioni premio e scadenze siano accessibili e coerenti con le comunicazioni bancarie?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint documenti digitali e PDF può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "web_documents",
            "affected_user_categories": [
              "visual",
              "cognitive"
            ],
            "pour_principle": "understandable",
            "standards": [
              73,
              115,
              9,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: documenti assicurativi collegati al mutuo, variazioni premio e scadenze siano accessibili e coerenti con le comunicazioni bancarie; nel touchpoint documenti digitali e PDF informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: documenti assicurativi collegati al mutuo, variazioni premio e scadenze siano accessibili e coerenti con le comunicazioni bancarie è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: documenti assicurativi collegati al mutuo, variazioni premio e scadenze siano accessibili e coerenti con le comunicazioni bancarie è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "mortgage",
              "mutuo",
              "pdf",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag",
              "web_documents"
            ]
          },
          {
            "id": "MU-POS-BOT-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint chatbot e assistente virtuale, è garantito che il chatbot post-erogazione permetta di capire rata, debito residuo, scadenze e opzioni assistite senza barriere di tastiera o lettura?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint chatbot e assistente virtuale può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "chatbot_virtual_assistant",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "operable",
            "standards": [
              92,
              123,
              70,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il chatbot post-erogazione permetta di capire rata, debito residuo, scadenze e opzioni assistite senza barriere di tastiera o lettura; nel touchpoint chatbot e assistente virtuale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il chatbot post-erogazione permetta di capire rata, debito residuo, scadenze e opzioni assistite senza barriere di tastiera o lettura è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il chatbot post-erogazione permetta di capire rata, debito residuo, scadenze e opzioni assistite senza barriere di tastiera o lettura è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "chatbot",
              "chatbot_virtual_assistant",
              "cognitive",
              "eaa",
              "en-301-549",
              "keyboard",
              "mortgage",
              "motor",
              "operable",
              "pos",
              "post_disbursement_and_repayment",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-CAL-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint call center, è garantito che l’assistenza su arretrati, solleciti o rinegoziazione sia disponibile tramite canali accessibili per utenti sordi o con difficoltà vocali?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint call center può escludere o penalizzare utenti con disabilità uditive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "call_center",
            "affected_user_categories": [
              "auditory",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              47,
              36,
              2,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’assistenza su arretrati, solleciti o rinegoziazione sia disponibile tramite canali accessibili per utenti sordi o con difficoltà vocali; nel touchpoint call center tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’assistenza su arretrati, solleciti o rinegoziazione sia disponibile tramite canali accessibili per utenti sordi o con difficoltà vocali è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’assistenza su arretrati, solleciti o rinegoziazione sia disponibile tramite canali accessibili per utenti sordi o con difficoltà vocali è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Integrare canali equivalenti a voce e ascolto, come chat testuale, relay, video con sottotitoli/LIS ove pertinente, script chiari e invio di riepiloghi accessibili.",
            "tags": [
              "auditory",
              "call_center",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "operable",
              "pos",
              "post_disbursement_and_repayment"
            ]
          },
          {
            "id": "MU-POS-FIL-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint filiale, è garantito che l’assistenza in filiale per rimborso, surroga o difficoltà di pagamento sia accessibile fisicamente e gestita con privacy?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint filiale può escludere o penalizzare utenti con disabilità motorie, con disabilità visive, con disabilità uditive, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "branch",
            "affected_user_categories": [
              "motor",
              "visual",
              "auditory",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              136,
              129,
              128,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: l’assistenza in filiale per rimborso, surroga o difficoltà di pagamento sia accessibile fisicamente e gestita con privacy; nel touchpoint filiale tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: l’assistenza in filiale per rimborso, surroga o difficoltà di pagamento sia accessibile fisicamente e gestita con privacy è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: l’assistenza in filiale per rimborso, surroga o difficoltà di pagamento sia accessibile fisicamente e gestita con privacy è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "auditory",
              "branch",
              "eaa",
              "elderly_temporary_situational",
              "filiale",
              "hardware",
              "mortgage",
              "motor",
              "operable",
              "pagamenti",
              "pos",
              "post_disbursement_and_repayment",
              "visual"
            ]
          },
          {
            "id": "MU-POS-CON-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint consulente di filiale, è garantito che il consulente spieghi variazioni tasso, rata e opzioni di rinegoziazione con esempi comprensibili e materiali accessibili?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint consulente di filiale può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "branch_consultant",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              112,
              36,
              2,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il consulente spieghi variazioni tasso, rata e opzioni di rinegoziazione con esempi comprensibili e materiali accessibili; nel touchpoint consulente di filiale informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il consulente spieghi variazioni tasso, rata e opzioni di rinegoziazione con esempi comprensibili e materiali accessibili è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il consulente spieghi variazioni tasso, rata e opzioni di rinegoziazione con esempi comprensibili e materiali accessibili è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Adeguare percorso, arredi, segnaletica e procedure di filiale; formare il personale su comunicazione accessibile, alternative equivalenti e assistenza senza sostituire l’autonomia del cliente.",
            "tags": [
              "branch_consultant",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-EML-002",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint email, SMS e notifiche push, è garantito che le notifiche azionabili post-erogazione aprano schermate accessibili e mantengano focus, contesto e testo dell’azione richiesta?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint email, SMS e notifiche push può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "email_push_notifications",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              99,
              122,
              123,
              29
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: le notifiche azionabili post-erogazione aprano schermate accessibili e mantengano focus, contesto e testo dell’azione richiesta; nel touchpoint email, SMS e notifiche push componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: le notifiche azionabili post-erogazione aprano schermate accessibili e mantengano focus, contesto e testo dell’azione richiesta è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: le notifiche azionabili post-erogazione aprano schermate accessibili e mantengano focus, contesto e testo dell’azione richiesta è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Ristrutturare messaggi e ricevute con testo reale, oggetti chiari, stato annunciabile, link descrittivi e versione alternativa digitale accessibile.",
            "tags": [
              "cognitive",
              "email_push_notifications",
              "en-301-549",
              "focus",
              "mortgage",
              "motor",
              "notifiche",
              "pos",
              "post_disbursement_and_repayment",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBA-004",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint app di home banking, è garantito che autenticazione per operazioni sensibili sul mutuo non imponga test cognitivi, biometrici o temporali senza alternativa accessibile?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: l’utente può non riuscire ad azionare il servizio o completare il compito.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "operable",
            "standards": [
              121,
              41,
              31,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: autenticazione per operazioni sensibili sul mutuo non imponga test cognitivi, biometrici o temporali senza alternativa accessibile; nel touchpoint app di home banking tutte le azioni necessarie sono completabili senza modalità di input obbligate, con tempi adeguati e alternative equivalenti; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: autenticazione per operazioni sensibili sul mutuo non imponga test cognitivi, biometrici o temporali senza alternativa accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: autenticazione per operazioni sensibili sul mutuo non imponga test cognitivi, biometrici o temporali senza alternativa accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "biometria",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "mutuo",
              "operable",
              "pos",
              "post_disbursement_and_repayment",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBW-004",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint home banking web, è garantito che estinzione anticipata o rimborso parziale prevedano riepilogo, annullamento e conferma accessibile prima dell’addebito?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità motorie, con disabilità visive: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "cognitive",
              "motor",
              "visual"
            ],
            "pour_principle": "understandable",
            "standards": [
              119,
              105,
              68,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: estinzione anticipata o rimborso parziale prevedano riepilogo, annullamento e conferma accessibile prima dell’addebito; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: estinzione anticipata o rimborso parziale prevedano riepilogo, annullamento e conferma accessibile prima dell’addebito è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: estinzione anticipata o rimborso parziale prevedano riepilogo, annullamento e conferma accessibile prima dell’addebito è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "home_banking_web",
              "mortgage",
              "motor",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBA-005",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint app di home banking, è garantito che upload documenti per rinegoziazione, sospensione o surroga segua gli stessi requisiti di accessibilità dell’istruttoria iniziale?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive"
            ],
            "pour_principle": "robust",
            "standards": [
              92,
              122,
              29,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: upload documenti per rinegoziazione, sospensione o surroga segua gli stessi requisiti di accessibilità dell’istruttoria iniziale; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: upload documenti per rinegoziazione, sospensione o surroga segua gli stessi requisiti di accessibilità dell’istruttoria iniziale è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: upload documenti per rinegoziazione, sospensione o surroga segua gli stessi requisiti di accessibilità dell’istruttoria iniziale è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "pos",
              "post_disbursement_and_repayment",
              "robust",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-INF-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint materiale informativo, è garantito che materiale su surroga, estinzione anticipata, sospensione rate e reclami sia disponibile in linguaggio semplice e formato accessibile?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint materiale informativo può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "informational_material",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              2,
              35,
              112,
              0
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: materiale su surroga, estinzione anticipata, sospensione rate e reclami sia disponibile in linguaggio semplice e formato accessibile; nel touchpoint materiale informativo informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: materiale su surroga, estinzione anticipata, sospensione rate e reclami sia disponibile in linguaggio semplice e formato accessibile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: materiale su surroga, estinzione anticipata, sospensione rate e reclami sia disponibile in linguaggio semplice e formato accessibile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "informational_material",
              "linguaggio-chiaro",
              "mortgage",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-PAP-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint documenti cartacei, è garantito che avvisi cartacei di rata, variazione o sollecito siano disponibili in formato digitale accessibile o carattere grande su richiesta?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint documenti cartacei può escludere o penalizzare utenti con disabilità visive, con disabilità cognitive o neurodivergenze, anziani o con limitazioni temporanee/situazionali: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "paper_documents",
            "affected_user_categories": [
              "visual",
              "cognitive",
              "elderly_temporary_situational"
            ],
            "pour_principle": "perceivable",
            "standards": [
              2,
              0,
              35,
              72
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: avvisi cartacei di rata, variazione o sollecito siano disponibili in formato digitale accessibile o carattere grande su richiesta; nel touchpoint documenti cartacei contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: avvisi cartacei di rata, variazione o sollecito siano disponibili in formato digitale accessibile o carattere grande su richiesta è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: avvisi cartacei di rata, variazione o sollecito siano disponibili in formato digitale accessibile o carattere grande su richiesta è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Produrre una versione HTML accessibile o PDF/UA con struttura taggata, ordine di lettura verificato, lingua dichiarata, tabelle marcate correttamente e alternativa leggibile per eventuale supporto cartaceo.",
            "tags": [
              "carta",
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "mortgage",
              "paper_documents",
              "perceivable",
              "pos",
              "post_disbursement_and_repayment",
              "visual"
            ]
          },
          {
            "id": "MU-POS-MED-001",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint contenuti digital media, è garantito che tutorial su pagamento rata, modifica addebito o richiesta surroga abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint contenuti digital media può escludere o penalizzare utenti con disabilità uditive, con disabilità visive, con disabilità cognitive o neurodivergenze: le informazioni essenziali possono non essere percepite o distinguibili.",
            "touchpoint": "digital_media",
            "affected_user_categories": [
              "auditory",
              "visual",
              "cognitive"
            ],
            "pour_principle": "perceivable",
            "standards": [
              76,
              77,
              78,
              48
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: tutorial su pagamento rata, modifica addebito o richiesta surroga abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi; nel touchpoint contenuti digital media contenuti, istruzioni e stati sono percepibili in modo equivalente tramite canali visivi, testuali e/o sonori accessibili; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: tutorial su pagamento rata, modifica addebito o richiesta surroga abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: tutorial su pagamento rata, modifica addebito o richiesta surroga abbiano sottotitoli, trascrizione e descrizione dei passaggi visivi è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Rilasciare contenuti equivalenti in testo, sottotitoli/trascrizioni, contrasto adeguato e formati accessibili; evitare informazioni essenziali solo in immagini, colore o audio.",
            "tags": [
              "auditory",
              "cognitive",
              "digital_media",
              "en-301-549",
              "mortgage",
              "pagamenti",
              "perceivable",
              "pos",
              "post_disbursement_and_repayment",
              "sottotitoli",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBW-005",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint home banking web, è garantito che informazioni su mutuo, rate e documenti siano coerenti e accessibili tra area web, app, filiale e assistenza telefonica?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint home banking web può escludere o penalizzare utenti con disabilità cognitive o neurodivergenze, con disabilità visive, anziani o con limitazioni temporanee/situazionali: istruzioni, condizioni o errori possono risultare ambigui e portare a scelte non consapevoli.",
            "touchpoint": "home_banking_web",
            "affected_user_categories": [
              "cognitive",
              "visual",
              "elderly_temporary_situational"
            ],
            "pour_principle": "understandable",
            "standards": [
              114,
              115,
              64,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: informazioni su mutuo, rate e documenti siano coerenti e accessibili tra area web, app, filiale e assistenza telefonica; nel touchpoint home banking web informazioni, istruzioni, errori e conseguenze sono esplicitati in linguaggio chiaro e prevedibile; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: informazioni su mutuo, rate e documenti siano coerenti e accessibili tra area web, app, filiale e assistenza telefonica è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: informazioni su mutuo, rate e documenti siano coerenti e accessibili tra area web, app, filiale e assistenza telefonica è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "cognitive",
              "eaa",
              "elderly_temporary_situational",
              "en-301-549",
              "filiale",
              "home_banking_web",
              "mortgage",
              "mutuo",
              "pos",
              "post_disbursement_and_repayment",
              "understandable",
              "visual",
              "wcag"
            ]
          },
          {
            "id": "MU-POS-HBA-006",
            "journey": "mortgage",
            "macro_step": "post_disbursement_and_repayment",
            "question_it": "Nel touchpoint app di home banking, è garantito che il canale reclami o segnalazioni post-erogazione sia accessibile, con form etichettati, ricevuta e stato pratica annunciabile?",
            "rationale_it": "Nel macro-step post-erogazione e rimborso del mutuo, una barriera nel touchpoint app di home banking può escludere o penalizzare utenti con disabilità visive, con disabilità motorie, con disabilità cognitive o neurodivergenze, con disabilità uditive: le tecnologie assistive possono non interpretare correttamente controlli, stati o contenuti.",
            "touchpoint": "home_banking_app",
            "affected_user_categories": [
              "visual",
              "motor",
              "cognitive",
              "auditory"
            ],
            "pour_principle": "robust",
            "standards": [
              117,
              123,
              30,
              2
            ],
            "conformity_criteria": {
              "full_compliance": "Il requisito è pienamente soddisfatto: il canale reclami o segnalazioni post-erogazione sia accessibile, con form etichettati, ricevuta e stato pratica annunciabile; nel touchpoint app di home banking componenti, documenti e messaggi espongono struttura, nome, ruolo, valore e stati in modo interoperabile con tecnologie assistive; le evidenze coprono almeno desktop/mobile ove applicabile, tastiera, screen reader o altro ausilio pertinente.",
              "partial_barrier": "Il requisito è soddisfatto solo in parte: il canale reclami o segnalazioni post-erogazione sia accessibile, con form etichettati, ricevuta e stato pratica annunciabile è disponibile ma non in tutti gli scenari, canali, dispositivi o stati d’errore; l’utente può completare il percorso solo con assistenza, workaround o passaggi aggiuntivi.",
              "critical_ko": "Il requisito non è soddisfatto: il canale reclami o segnalazioni post-erogazione sia accessibile, con form etichettati, ricevuta e stato pratica annunciabile è assente, non utilizzabile o non equivalente; la barriera impedisce o rende sostanzialmente non autonoma la conclusione dell’attività bancaria."
            },
            "conformity_assessment": null,
            "evidence_notes_it": "",
            "remediation_hint_it": "Correggere componenti UI, etichette, focus, contrasto, messaggi di stato e flussi di errore; rieseguire test con tastiera, screen reader, zoom/reflow e impostazioni di accessibilità del sistema operativo.",
            "tags": [
              "auditory",
              "cognitive",
              "eaa",
              "en-301-549",
              "home_banking_app",
              "mortgage",
              "motor",
              "pos",
              "post_disbursement_and_repayment",
              "robust",
              "visual",
              "wcag"
            ]
          }
        ]
      }
    },
    "statistics": {
      "total_questions": 276,
      "by_journey": {
        "current_account": 156,
        "mortgage": 120
      },
      "by_macro_step": {
        "search_and_orientation": 20,
        "account_opening": 49,
        "account_operations": 62,
        "account_closure": 25,
        "exploration_and_first_contact": 24,
        "documentation_and_underwriting": 24,
        "deliberation_and_proposal": 48,
        "post_disbursement_and_repayment": 24
      },
      "by_touchpoint": {
        "home_banking_app": 36,
        "home_banking_web": 31,
        "institutional_website": 18,
        "web_documents": 25,
        "email_push_notifications": 18,
        "payment_app_wallet": 9,
        "chatbot_virtual_assistant": 14,
        "digital_media": 13,
        "paper_documents": 13,
        "tickets_receipts": 4,
        "informational_material": 10,
        "atm_csa_self_service": 9,
        "pos_payment_terminals": 5,
        "credit_card": 7,
        "check": 5,
        "graphometric_tablet_e_signature": 11,
        "branch": 17,
        "phone_banking": 5,
        "call_center": 11,
        "branch_consultant": 15
      },
      "by_pour": {
        "perceivable": 70,
        "operable": 86,
        "understandable": 71,
        "robust": 49
      },
      "by_user_category": {
        "auditory": 63,
        "visual": 231,
        "motor": 115,
        "cognitive": 225,
        "elderly_temporary_situational": 165
      }
    }
  }
];
