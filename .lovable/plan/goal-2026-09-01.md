Banner Cookie Minimale e Cookie Policy

## Goal
Confermare che, essendo attualmente utilizzati solo cookie tecnici, basti un banner cookie informativo minimale; implementarlo insieme a una Cookie Policy coerente.

## Current state (verified)
- Nessun script di analytics, marketing o tracking è presente nel codice.
- La pagina `/cookie-policy` esiste ma è un placeholder.
- Nessun banner cookie è montato nell'app.

## Proposed work
1. **Cookie banner minimale**
   - Crea un componente `CookieBanner` montato in `src/routes/__root.tsx`.
   - Mostra un banner fisso in basso con testo informativo e un pulsante "Ho capito".
   - Salva la chiusura in `localStorage` per non ripresentarlo alla visita successiva.
   - Nessun toggle per categorie: solo informativa, dato che non ci sono cookie di profilazione.

2. **Cookie Policy**
   - Sostituisci il placeholder in `src/routes/cookie-policy.tsx` con contenuto reale.
   - Spiega che vengono utilizzati esclusivamente cookie tecnici necessari al funzionamento del sito.
   - Aggiungi link alla Privacy Policy e al pulsante per chiudere/revoca (semplice refresh del consenso banner).

3. **SEO/Head**
   - Mantieni title, description, Open Graph e canonical già presenti, aggiornando il contenuto testuale.

## Out of scope
- Gestione categorie cookie (marketing, analytics): non necessaria finché non verranno aggiunti script di terze parti.
- Integrazione con CMP esterne.

## Technical notes
- Usare Framer Motion per l'entrata/uscita del banner, in linea con il resto del sito.
- Mantenere il design system monocromatico esistente.
- Verificare che il banner non venga mostrato durante il prerendering SSR: usare `useHydrated()` o equivalente.
