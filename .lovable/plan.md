# Fix inversione colori su Samsung Internet (dark mode forzata)

Samsung Internet (e Chrome Android) applica l'auto-dark ignorando i meta tag. Interveniamo solo sul CSS globale, senza toccare layout o testi.

## Cosa cambia

1. **Blocco esplicito su root/html/body** in `src/styles.css`: `color-scheme: light !important`, `forced-color-adjust: none !important`, `-webkit-forced-color-adjust: none !important`.
2. **Trucco del gradiente**: sostituire lo sfondo pieno con un `background-image: linear-gradient(<colore>, <colore>)` dello stesso identico colore su `body` e sui wrapper strutturali principali (contenitore root in `__root.tsx` tramite classe CSS globale, sezioni chiare `#F3EEE1` e scure `#2C3D2A`). Il motore Chromium non inverte gli elementi con background-image.
3. **Utility riusabili**: due utility CSS (es. `.surface-cream` e `.surface-forest`) basate su gradiente, applicate ai contenitori di sezione principali già esistenti, così le sezioni scure restano scure e quelle crema restano crema.
4. Mantenere i meta tag già presenti (`color-scheme: only light`, `theme-color`).

## Note tecniche

- Tutte le modifiche restano in `src/styles.css` più l'applicazione della classe wrapper in `src/routes/__root.tsx`; nessun cambiamento di contenuto o struttura.
- I token semantici (`--background`, `--foreground`, ecc.) restano invariati: le utility gradiente usano `var(--background)` / `var(--foreground)` così il tema resta unico punto di verità.
- Verifica finale: build pulita e controllo visivo della home in preview.
