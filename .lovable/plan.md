# Aggiungi istruzioni invio CV in Contatti

## Modifica
Nel box "Fai parte del network EP Team" (`src/routes/contatti.tsx`, sezione `#collabora`), aggiungere al paragrafo esistente la frase:

> Inviaci una mail con tutti tuoi dati e CV aggiornato a elisapiovantrainer@gmail.com

- L'email è **solo testo**, non un link: nessun `mailto:`, nessun `<a>`, nessuna formattazione cliccabile (nemmeno underline).
- Il resto del box resta invariato: titolo, bottone "Invia il tuo CV", nota privacy con link all'informativa.

## Verifica
- Build OK.
- Controllo visivo della sezione in preview: testo aggiunto, email non cliccabile.
