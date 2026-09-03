# Modifica Quiz Biotipo: rimozione terza opzione e logica A/B

## Obiettivo
Aggiornare il quiz in `src/routes/ginoide-androide-test.tsx` in modo che ogni domanda abbia solo due opzioni (A e B) e il risultato finale venga calcolato esclusivamente per maggioranza di risposte A o B.

## Modifiche tecniche

### 1. Dati del quiz
- Rimuovere l'opzione `C` da tutte e 5 le domande nel const `QUESTIONS`.
- Cambiare il type `Letter` da `"A" | "B" | "C"` a `"A" | "B"`.

### 2. Logica di calcolo
- Mantenere il conteggio delle risposte A e B.
- Calcolare il risultato come:
  - Maggioranza A → biotipo Androide.
  - Maggioranza B → biotipo Ginoide.
  - In caso di parità (possibile con numero pari di domande, attualmente 5 quindi non si verifica), assegnare un default coerente (es. Ginoide) per evitare risultati indefiniti.

### 3. Invio Web3Forms
- Lasciare invariata la logica posticipata: l'invio avviene al completamento del quiz con payload che include Nome, Cellulare e Risultato_Test.

### 4. Verifica
- Controllare che non rimangano riferimenti alla lettera C nelle opzioni, nelle risposte o nella logica.
- Verificare la build e il funzionamento del quiz in preview.

## File coinvolto
- `src/routes/ginoide-androide-test.tsx`
