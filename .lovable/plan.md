# Controllo pre-deploy: GitHub → Netlify su elitrainer.it

## Cosa ho verificato (già a posto)

- **Contenuti e SEO**: ogni pagina ha titolo, descrizione, indirizzo canonico e dati strutturati propri; `/4weblab` è esclusa dai motori di ricerca; sitemap e robots puntano a `elitrainer.it`; immagine di anteprima social presente.
- **Reindirizzamenti**: i 18 vecchi indirizzi puntano tutti a pagine esistenti e non c'è più la regola generica che avrebbe oscurato le pagine reali.
- **Build**: l'ultima compilazione è andata a buon fine, nessun errore.
- **Modulo quiz**: invia a Web3Forms con chiave pubblica, non servono variabili segrete su Netlify.

## Il problema bloccante

Il sito viene attualmente preparato per l'infrastruttura di Lovable (formato Cloudflare). Su Netlify non esiste ancora nessun file di configurazione (`netlify.toml`), quindi Netlify non sa:

- quale comando eseguire,
- in quale cartella si trova il sito generato,
- che deve creare la funzione che genera le pagine lato server.

Senza questo file il deploy fallisce o pubblica una cartella vuota.

## Interventi proposti

1. **Creare `netlify.toml`** con comando di build, cartella di pubblicazione `dist`, formato di output "netlify" e versione di Node/Bun fissata.
2. **Impostare il formato di output anche in `vite.config.ts`** come rete di sicurezza: dentro Lovable resta invariato (l'ambiente forza il proprio formato), su Netlify viene usato quello corretto.
3. **Verifica finale**: eseguire una compilazione di produzione in modalità Netlify e controllare che vengano generati la cartella `dist` con le pagine statiche, la funzione server e il file dei reindirizzamenti con i 18 redirect 301 in testa e la regola di fallback del server in coda.
4. **Controllo finale dei collegamenti interni** su tutte le pagine per assicurarsi che nessun link punti a indirizzi inesistenti.

## Dettagli tecnici

- `netlify.toml`:
  ```toml
  [build]
    command = "bun run build"
    publish = "dist"

  [build.environment]
    NITRO_PRESET = "netlify"
    NODE_VERSION = "22"
  ```
  Il repository contiene `bun.lock`, quindi Bun garantisce le stesse versioni testate qui. Se preferisci npm, il comando diventa `npm run build` (senza lockfile npm le versioni vengono risolte al momento del build).
- `vite.config.ts`: aggiunta di `nitro: { preset: "netlify" }`. Nell'ambiente Lovable questo valore viene sovrascritto automaticamente con `cloudflare-module`, quindi l'anteprima e la pubblicazione da Lovable non cambiano.
- Il preset Netlify scrive la funzione server in `.netlify/functions-internal/server` e i file statici in `dist`, e unisce automaticamente `public/_redirects` con la regola `/* → funzione server`, mantenendo i 301 prima.

## Cosa dovrai fare tu su Netlify

1. Collegare il repository GitHub al sito Netlify (build command e publish directory verranno letti da `netlify.toml`).
2. In **Domain management** aggiungere `elitrainer.it` e `www.elitrainer.it`, impostando il reindirizzamento verso la versione senza `www` (o viceversa, purché una sola sia canonica — il sito usa `https://elitrainer.it`).
3. Puntare i DNS del dominio a Netlify e attendere il certificato HTTPS.
4. Dopo il primo deploy: inviare la sitemap `https://elitrainer.it/sitemap.xml` a Google Search Console.
