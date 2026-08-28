Robots.txt no-index per URL temporaneo

## Obiettivo
Configurare `public/robots.txt` in modo che nessun crawler possa leggere o indicizzare il sito, permettendo la pubblicazione su URL temporaneo Lovable per la review del cliente senza impattare il dominio esistente.

## Azioni

1. **Aggiornare `public/robots.txt`**
   - Sostituire ogni istanza di `Allow: /` con `Disallow: /`.
   - Rimuovere la direttiva `Sitemap:` per evitare che i crawler seguano la sitemap.
   - Mantenere il formato compatto con `User-agent: *` e tutti gli user-agent noti bloccati.

## File interessati
- `public/robots.txt`

## Cosa NON viene toccato
- `public/sitemap.xml` (rimane in repo ma non referenziato).
- Favicon, redirect, contenuti delle pagine e SEO `<head>`.
