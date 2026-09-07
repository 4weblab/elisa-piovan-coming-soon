# Integrazione visibile delle recensioni Google Business Profile

## Obiettivo
Rendere visibile sul sito la valutazione e il numero di recensioni della scheda Google Business Profile di Elisa Piovan Trainer, collegandola alla scheda reale.

## Approccio scelto
**Blocco statico con punteggio e link diretto alla scheda Google.**

Motivi:
- Si appoggia alle costanti già presenti in `src/lib/site.ts` (`GOOGLE_BUSINESS_URL`, `GOOGLE_RATING_VALUE`, `GOOGLE_REVIEW_COUNT`).
- Non richiede API key, billing Google o servizi di terze parti.
- È immediato da implementare e manutenere.
- Il dato è già presente e verificabile nel JSON-LD della Home.

## Cosa cambia

### 1. Nuovo componente riutilizzabile
Creare `src/components/site/GoogleReviewsBadge.tsx`:
- Stella piena (o icona stella) in colore terracotta/brand.
- Testo: "4,9 su 5 · 15 recensioni Google".
- Link cliccabile che porta a `GOOGLE_BUSINESS_URL`.
- Stile coerente con il design system (font body, colori forest/cream/terracotta).

### 2. Inserimento in Home (`src/routes/index.tsx`)
Posizionare il badge in due punti:
- Sotto il sottotitolo della hero, come elemento di trust immediato.
- Nella sezione "Storie di Successo", sopra o accanto alle card, per rinforzare la credibilità.

### 3. Inserimento nel Footer (`src/components/site/Footer.tsx`)
Aggiungere una riga con il badge Google Reviews accanto ai contatti e ai social, per avere il trust signal su tutte le pagine.

### 4. JSON-LD
Mantenere l'`aggregateRating` esistente nella Home (già corretto con i dati reali). Non aggiungere `review` duplicati oltre a quelli già presenti, per evitare segnali contrastanti.

### 5. Testo e accessibilità
- Alt/testo per screen reader: "Valutazione media 4,9 su 5 basata su 15 recensioni Google".
- Aprire il link in una nuova scheda con `rel="noopener noreferrer"`.

## Note tecniche
- Nessuna nuova dipendenza.
- I dati restano statici: quando la media o il numero di recensioni cambiano, basterà aggiornare `GOOGLE_RATING_VALUE` e `GOOGLE_REVIEW_COUNT` in `src/lib/site.ts`.
- Il badge sarà responsive e non appesantirà il caricamento della pagina.

## Futuri upgrade (opzionali, non inclusi in questo piano)
- Integrazione Google Places API per mostrare fino a 5 recensioni in tempo reale.
- Widget di terze parti (Elfsight, EmbedSocial) per un feed automatico.
- Pagina dedicata "Cosa dicono di noi" con recensioni selezionate manualmente.
