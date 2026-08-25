# Favicon dal logo di Elisa Piovan Trainer

## Obiettivo
Convertire il logo che caricherai in chat nella favicon del sito, sostituendo quella di default.

## Passi

1. **Ricezione e analisi del logo** — verifico formato, dimensioni e sfondo del file caricato.
2. **Preparazione della favicon**
   - Raster (PNG/JPG): ridimensionamento a quadrato 64x64 con padding centrale (senza deformare il logo se è un wordmark orizzontale) e salvataggio come `public/favicon.png`.
   - Vettoriale (SVG): copia diretta come `public/favicon.svg` senza ridimensionamento.
   - Se il logo ha sfondo bianco/opaco che stona sul tema grafite, valuto con te se mantenerlo o ricavarne una versione su sfondo trasparente.
3. **Collegamento al sito** — in `src/routes/__root.tsx` sostituisco la riga del link icon `{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }` con quella verso il nuovo file (`/favicon.png` o `/favicon.svg` con il type corretto).
4. **Pulizia** — elimino `public/favicon.ico` di default per evitare che crawler e browser continuino a servire l'icona Lovable.
5. **Verifica** — controllo che la favicon compaia correttamente nella tab del browser in anteprima.

## Note tecniche
- Nessuna libreria nuova: il ridimensionamento usa ImageMagick, già disponibile.
- Il file favicon resta nel repository (niente CDN): deve essere servito dal sito stesso per funzionare anche su Netlify.
- Bonus opzionale: posso anche generare versioni per touch icon (es. 180x180 per Apple) — fammi sapere se la vuoi.

## In attesa
- Il file del logo da caricare in chat.
