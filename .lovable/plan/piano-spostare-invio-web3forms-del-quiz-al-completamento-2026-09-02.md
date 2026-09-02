# Piano: spostare invio Web3Forms del Quiz al completamento

## Obiettivo
Modificare esclusivamente la logica di invio del form Web3Forms nel componente Quiz (`/ginoide-androide-test`), in modo che i dati (Nome, Cellulare) vengano inviati solo al completamento delle 5 domande, insieme al risultato del biotipo.

## Stato atteso confermato
- Il form iniziale (Step 0) invia subito Nome e Cellulare a Web3Forms tramite `handleGate`.
- Il risultato viene calcolato quando `answers.length === QUESTIONS.length`.
- Nessuna chiamata a Supabase è presente nel file.

## Modifiche tecniche

1. **Rimuovere l'invio da `handleGate`**
   - `handleGate` salverà solo Nome e Cellulare nello stato React e setterà `unlocked = true` per passare alla Domanda 1.
   - Non effettuerà più chiamata POST a Web3Forms.
   - Rimuovere lo stato `sending` dal form iniziale (non più necessario, dato che non c'è invio immediato).

2. **Aggiungere invio posticipato al completamento**
   - Aggiungere una funzione `submitToWeb3Forms(resultLabel: string)`.
   - Invocarla automaticamente quando il quiz è finito e il risultato è disponibile (tramite `useEffect` su `finished`/`result`).
   - L'invio sarà asincrono e silenzioso: un eventuale errore non bloccherà la visualizzazione del risultato.

3. **Payload finale combinato**
   - `access_key`: `VITE_WEB3FORMS_ACCESS_KEY`
   - `subject`: "Nuovo lead dal Quiz Biotipo"
   - `from_name`: "Elisa Piovan Trainer — Quiz Biotipo"
   - `Nome`: valore raccolto allo Step 0
   - `Cellulare`: valore raccolto allo Step 0
   - `Risultato_Test`: "Biotipo Androide" oppure "Biotipo Ginoide"

4. **Cosa NON cambia**
   - Design, stili CSS, domande, opzioni, logica di calcolo del biotipo.
   - Testo e comportamento della checkbox privacy: rimane obbligatoria per procedere.
   - Nessuna integrazione con Supabase o altri backend.

## File da modificare
- `src/routes/ginoide-androide-test.tsx`

## Verifica
- Build del progetto senza errori.
- Test funzionale: compilare nome/cellulare non deve inviare dati; completare il quiz deve inviare payload con Nome, Cellulare e Risultato_Test.
