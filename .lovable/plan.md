# Fix: pagina pubblicata senza CSS (HTML grezzo, icone SVG giganti)

## Causa
`public/_redirects` contiene `/* /index.html 503!`. Il punto esclamativo forza il rewrite di **ogni** richiesta verso `index.html`, compresi i file statici reali come `/assets/index-*.css`. Il browser richiede il CSS, riceve HTML con stato 503, lo scarta per MIME type errato → pagina senza stili e SVG non dimensionati.

## Modifica
Riscrivere `public/_redirects` senza forzatura, con passthrough esplicito degli asset prima della catch-all:

```text
/assets/*  /assets/:splat  200
/favicon.png  /favicon.png  200
/apple-touch-icon.png  /apple-touch-icon.png  200
/robots.txt  /robots.txt  200
/sitemap.xml  /sitemap.xml  200
/*  /index.html  503
```

- Le regole esplicite garantiscono che CSS, JS, icone, robots e sitemap vengano serviti normalmente (200, MIME corretto).
- La catch-all senza `!` mantiene lo stato 503 di manutenzione per tutte le altre rotte: i crawler vedono ancora "Service Unavailable", ma gli asset funzionano.

## Verifica
1. Rebuild del progetto.
2. Deploy su Netlify (l'utente ripubblica).
3. Dopo il deploy: controllo via curl che `/assets/*.css` risponda 200 con `content-type: text/css`, che `/` risponda 503, e test browser Playwright che la pagina risulti stilata.

## Nota
Se il deploy fosse invece su Lovable (bottone Publish), il file `_redirects` non viene usato e il problema avrebbe un'altra causa — la verifica via curl chiarirà.
