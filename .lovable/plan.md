# Integrazione scheda Google Business Profile nei dati strutturati

## Cosa serve (già raccolto)
- Link scheda: `https://www.google.com/maps/place/?q=place_id:ChIJYa_I7NE3f44RMnD1cAMlpmg`
- Nessun indirizzo fisico pubblicato (attività di servizio, solo area servita)
- Recensioni Google: 4.9 su 15
- Orari: lun-ven 9:00-18:30, sab 9:00-12:00, domenica chiuso

## Cosa cambia

### Home (`src/routes/index.tsx`)
- Aggiungere il link della scheda Google in `sameAs` (accanto a Instagram e TikTok) e come `hasMap`.
- Sostituire l'attuale `aggregateRating` (5 su 3, non verificabile) con i dati reali della scheda: `ratingValue: "4.9"`, `reviewCount: 15`, `bestRating: 5`, `worstRating: 1`.
- Aggiungere `openingHoursSpecification` con gli orari indicati.
- Mantenere l'assenza di `address` e continuare a descrivere la copertura con `areaServed` (coerente con una scheda senza indirizzo pubblico).

### Contatti (`src/routes/contatti.tsx`) e Chi sono (`src/routes/chi-sono.tsx`)
- Allineare `sameAs` includendo scheda Google, Instagram e TikTok, così che tutti i riferimenti puntino allo stesso `@id` dell'organizzazione.
- Nessun rating duplicato su queste pagine: `aggregateRating` resta solo sulla Home, per evitare segnali contrastanti.

## Note tecniche
- Il link della scheda viene salvato come costante `GOOGLE_BUSINESS_URL` in `src/lib/site.ts`, riusata da tutte le pagine.
- Il JSON-LD resta iniettato via `head().scripts` delle rotte, senza nuove librerie.
- I dati recensioni sono statici: quando la media o il numero cambiano sulla scheda vanno aggiornati manualmente (una sola costante da modificare).

## Opzionale (da confermare in seguito)
- Mostrare in pagina un blocco "Recensioni Google 4.9 ★ (15)" con link alla scheda, per rendere il rating visibile anche agli utenti oltre che ai motori di ricerca.
