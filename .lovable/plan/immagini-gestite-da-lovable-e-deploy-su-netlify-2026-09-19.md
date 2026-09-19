# Immagini gestite da Lovable e deploy su Netlify

## 1. Chi risolve `/__l5e/assets-v1/*` in produzione su Netlify: nessuno

La tua analisi è corretta. Prove:

- `node_modules/@lovable.dev/vite-tanstack-config/dist/index.js` riga 5 definisce `ASSET_RE = /^\/__l5e\/assets-v1\//` e riga 42 registra quel middleware con `apply: "serve"`, cioè **solo dev server**. Righe 415 e 430 sono gli unici plugin `apply: "build"` e non toccano gli asset. Nessuno step di build copia o inlinea i file.
- `netlify.toml` contiene solo `command`, `publish`, `NITRO_PRESET`, `NODE_VERSION`: nessun proxy.
- `public/_redirects` contiene solo i 18 redirect 301 legacy.
- Gli URL nei `.asset.json` sono **relativi** (`/__l5e/...`): sul dominio `elitrainer.it` puntano a sé stesso, dove non esiste nulla → 404 (o HTML di fallback) e immagini rotte.
- Quei percorsi rispondono 200 solo sull'infrastruttura Lovable (verificato: `https://elisa-piovan-trainer-coming-soon.lovable.app/__l5e/assets-v1/.../elisa-hero.webp` → 200 `image/webp`, 76836 byte).

Quindi: fuori da Lovable funzionano solo se si aggiunge un proxy verso Lovable — dipendenza esterna non desiderabile per un sito su dominio proprio.

## 2. Soluzione: portare i file reali nel repo

Sì, posso farlo io. Interventi:

1. Scaricare i 10 asset effettivamente usati dal CDN Lovable e salvarli come file reali in `src/assets/` (stessi nomi, stesso contenuto byte-per-byte).
2. Sostituire negli import il pointer con il file: da `import x from "@/assets/nome.webp.asset.json"` + `x.url` a `import x from "@/assets/nome.webp"` + `src={x}`. Vite li includerà in `dist` con hash e cache immutabile.
3. Eliminare i 10 `.asset.json` usati e i **8 non più referenziati** (`elisa-piovan-logo.png`, `erica-avatar`, `mimi-avatar`, `silvia-avatar`, `erica-team`, `mimi-team`, `silvia-team-placeholder`, `coupon_centro_estetico.pdf`): questi ultimi vanno solo rimossi dal repo, senza cancellarli dal CDN, così vecchie anteprime restano integre.
4. Ricostruire con `NITRO_PRESET=netlify` e verificare che in `dist` compaiano le 10 immagini e che **nessun** file dell'output contenga più `__l5e`.

File coinvolti: `src/routes/index.tsx`, `chi-sono.tsx`, `servizi-ep-team.tsx`, `ginoide-androide-test.tsx`, `src/components/site/Header.tsx`.

Nota: dentro Lovable l'anteprima continuerà a funzionare identica — i file locali sono serviti da Vite.

## 3. Come verificare prima del go-live

Sul deploy preview Netlify (`https://<deploy-id>--<sito>.netlify.app`):

```bash
# 1. Nessun riferimento residuo a Lovable nell'HTML
curl -s https://<preview>/ | grep -c "__l5e"     # deve dare 0

# 2. L'immagine hero risponde 200 con il tipo giusto
curl -s -o /dev/null -w "%{http_code} %{content_type}\n" \
  "https://<preview>/_build/assets/elisa-hero-bg-<hash>.webp"   # 200 image/webp
```

(l'URL esatto si legge dall'HTML della home). In DevTools → Network, filtro "Img": tutte le richieste 200, nessuna 404 e nessun host esterno `lovable.app`. Ripetere su `/chi-sono`, `/servizi-ep-team`, `/ginoide-androide-test`.

## Dettagli tecnici

- Download via URL assoluto sull'host di anteprima Lovable, che serve gli stessi oggetti R2 dei pointer.
- `src/assets` passa da ~9 KB di JSON a ~650 KB di immagini: accettabile e desiderabile per un repo destinato a hosting esterno.
- Verifica finale locale: `NITRO_PRESET=netlify bun run build`, poi `ls dist/_build/assets/*.webp` e `rg -l "__l5e" dist` (nessun risultato).
