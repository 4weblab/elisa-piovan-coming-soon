# Fix link mobile per recensioni Google

## Problema
Il link "Leggi tutte le recensioni su Google" nella Home non funziona correttamente su mobile. Attualmente punta a un URL Google Maps nel formato `place/?q=place_id:...`, che su alcuni dispositivi/aperture mobile non si comporta come previsto.

## Soluzione
Aggiornare la costante `GOOGLE_BUSINESS_URL` in `src/lib/site.ts` con l'URL fornito dall'utente, che usa il formato `maps/search/?api=1&query=Google&query_place_id=...` e risulta più affidabile su mobile:

```
https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJYa_I7NE3f44RMnD1cAMlpmg
```

## Passi
1. Sostituire il valore di `GOOGLE_BUSINESS_URL` in `src/lib/site.ts`.
2. Verificare che la build passi e che il link nella Home punti al nuovo URL.

## File coinvolti
- `src/lib/site.ts`
