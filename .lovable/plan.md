# Verifica e messa a punto di `public/_redirects` per il deploy Netlify

## Stato verificato (lettura file effettuata)

- Mappa 301 legacy → nuova: **corretta**. Tutti i 18 redirect puntano a pagine esistenti (`/servizi-ep-team`, `/partnership`, `/ginoide-androide-test`, `/privacy-policy`, `/`) e nessun URL legacy coincide con una route attuale.
- `/personal-training` → `/servizi-ep-team` già aggiornato come richiesto.
- `/contatti` e `/cookie-policy` non hanno redirect: corretto, sono pagine attuali.
- Passthrough per asset e file statici (`/assets/*`, `favicon.png`, `robots.txt`, `sitemap.xml`, ecc.): corretti, vanno mantenuti.

## Problema residuo (unico)

La riga finale di fallback:

```text
/* /index.html 200
```

Su Netlify, con un sito SSR, questa regola ha due effetti dannosi:

1. **Oscura le pagine reali**: le regole di `_redirects` vengono valutate prima delle funzioni SSR, quindi `/chi-sono`, `/servizi-ep-team`, ecc. rischierebbero di ricevere l'HTML della home invece del loro contenuto renderizzato — danno SEO diretto (titoli, schema e canonical di ogni pagina persi).
2. **Soft 404**: qualsiasi URL inesistente restituirebbe 200 con la home, segnale che Google penalizza (indici contenuti duplicati/vuoti).

## Intervento

1. **Rimuovere la riga `/* /index.html 200`** da `public/_redirects`. Netlify servirà le pagine tramite il rendering server nativo e restituirà veri 404 per URL inesistenti.
2. **Mantenere invariati** tutti i 301 legacy e i passthrough asset/file.
3. Verifica finale: ricontrollare il file completo dopo la modifica e assicurarsi che la build passi.

## Risultato atteso

- Ogni vecchio URL indicizzato su Google risponde 301 verso la pagina equivalente (nessuna perdita di link equity).
- Ogni pagina reale viene servita con il proprio HTML SSR e i propri metatag.
- URL inesistenti → 404 vero, nessun soft 404.
