import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { SITE_URL } from "@/lib/site";

const TITLE = "Privacy Policy | Elisa Piovan Trainer";
const DESCRIPTION =
  "Informativa sul trattamento dei dati personali del sito di Elisa Piovan Trainer ed EP Team.";

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}/privacy-policy`,
  inLanguage: "it-IT",
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-border/70 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <motion.div
            className="flex flex-col items-center gap-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex rounded-full border border-border bg-secondary p-3">
              <Shield className="h-6 w-6 text-muted-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Informativa sul trattamento dei dati personali degli utenti del sito Elisa Piovan Trainer ed EP Team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col gap-10">
            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                1. Titolare del Trattamento
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Il Titolare del Trattamento dei dati personali è <strong>Elisa Piovan</strong>, operante con il nome
                commerciale <strong>Elisa Piovan Trainer</strong>.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                <li>Partita IVA: 05509730288</li>
                <li>Email: elisapiovantrainer@gmail.com</li>
                <li>Sede operativa: Italia</li>
              </ul>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                2. Dati personali raccolti e modalità di trattamento
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Raccogliamo e trattiamo dati personali solo quando ci vengono forniti spontaneamente dall’utente, oppure
                in forma automatica per esigenze tecniche di navigazione.
              </p>

              <div className="rounded-xl border border-border bg-secondary/30 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  A. Messaggi spontanei via WhatsApp
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Cliccando sul pulsante WhatsApp l’utente viene reindirizzato all’applicazione WhatsApp e può inviare un
                  messaggio spontaneo. Dati raccolti: numero di telefono, nome (se presente nel profilo WhatsApp) e il
                  contenuto del messaggio. Finalità: rispondere alle richieste di informazioni, fornire consulenza
                  preliminare e valutare il percorso di coaching più adatto.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-secondary/30 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  B. Form di accesso al Quiz “Che fisico hai?”
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Per sbloccare il quiz viene richiesto nome e numero di telefono cellulare. I dati sono trasmessi
                  attraverso il servizio <strong>Web3Forms</strong> e recapitati al Titolare via email. Finalità:
                  elaborare il profilo morfologico emerso dal quiz e consentire ad Elisa di contattare l’utente (via
                  WhatsApp o chiamata/SMS) per fornire l’esito del test, proporre il programma personalizzato e
                  verificare le opzioni di coaching dedicate.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-secondary/30 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  C. Dati di navigazione e log tecnici
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I sistemi informatici e le procedure software preposte al funzionamento del sito acquisiscono, nel corso
                  del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell’uso dei protocolli
                  di comunicazione di Internet. Si tratta di informazioni come indirizzi IP, tipo di browser, sistema
                  operativo, orario delle richieste e pagine visitate. Questi dati sono trattati esclusivamente dal
                  provider di hosting e dai servizi serverless utilizzati per la gestione tecnica del sito, per garantirne
                  sicurezza, stabilità e corretto funzionamento.
                </p>
              </div>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                3. Basi giuridiche del trattamento
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                <li>
                  <strong>Esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR):</strong> il trattamento dei
                  dati forniti via WhatsApp e tramite il form del quiz è necessario per riscontrare la richiesta
                  dell’utente e fornirgli informazioni personalizzate sui servizi di coaching prima di un’eventuale
                  adesione.
                </li>
                <li>
                  <strong>Consenso dell’interessato (art. 6, par. 1, lett. a GDPR):</strong> inviando il form del quiz o
                  avviando una conversazione WhatsApp, l’utente esprime il consenso al contatto telefonico o via
                  messaggistica da parte di Elisa per le finalità descritte.
                </li>
                <li>
                  <strong>Legittimo interesse (art. 6, par. 1, lett. f GDPR):</strong> i dati di navigazione e i log
                  tecnici sono trattati per garantire la sicurezza informatica, prevenire abusi e assicurare il corretto
                  funzionamento del sito.
                </li>
              </ul>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                4. Cookie e tecnologie simili
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Su questo sito utilizziamo esclusivamente cookie tecnici necessari al funzionamento della piattaforma e
                tecnologie equivalenti (come <code>localStorage</code>) per memorizzare la chiusura del banner informativo.
                Non utilizziamo cookie di profilazione, né strumenti di analisi o tracciamento di terze parti. Per maggiori
                dettagli consulta la{" "}
                <Link
                  to="/cookie-policy"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                5. Conservazione dei dati
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                I dati personali forniti volontariamente (nome e numero di telefono) sono conservati per il tempo
                strettamente necessario a gestire la richiesta di contatto e gli eventuali scambi informativi/precontrattuali,
                e comunque non oltre <strong>24 mesi</strong> dalla raccolta, salvo obblighi di legge o richiesta di
                cancellazione anticipata da parte dell’utente. I log tecnici sono conservati secondo i tempi previsti dal
                provider di hosting, generalmente pochi giorni/settimane.
              </p>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                6. Comunicazione e destinatari dei dati
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                I dati personali non sono venduti, ceduti o diffusi a terzi. Possono essere trattati dai seguenti
                destinatari, nella loro qualità di responsabili del trattamento o fornitori autonomi:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                <li>
                  <strong>Web3Forms</strong> — per la raccolta e l’inoltro dei dati inviati tramite il form del quiz.
                </li>
                <li>
                  <strong>Provider di hosting e servizi serverless</strong> — per la gestione tecnica, la sicurezza e il
                  funzionamento del sito.
                </li>
                <li>
                  <strong>WhatsApp Ireland LLC / Meta Platforms, Inc.</strong> — quando l’utente clicca sui pulsanti
                  WhatsApp o invia un messaggio, i dati sono trattati secondo le policy di WhatsApp e Meta, sulle quali
                  il Titolare non ha controllo diretto.
              </ul>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                7. Trasferimento dei dati all’estero
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Alcuni fornitori di servizi tecnici (come Web3Forms e WhatsApp/Meta) potrebbero trattare i dati in server
                situati al di fuori dello Spazio Economico Europeo. In tali casi, il trasferimento avviene sulla base di
                adeguate garanzie previste dal GDPR, quali le Clausole Contrattuali Standard (SCC) approvate dalla
                Commissione Europea, o altri meccanismi legalmente riconosciuti.
              </p>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                8. Diritti dell’interessato
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                L’utente ha il diritto, in qualsiasi momento e senza formalità particolari, di:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                <li>Accedere ai propri dati personali e chiederne la conferma dell’esistenza;</li>
                <li>Chiedere la rettifica, l’aggiornamento o la cancellazione dei propri dati;</li>
                <li>Opporsi al trattamento o chiederne la limitazione;</li>
                <li>Richiedere la portabilità dei dati;</li>
                <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca.</li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground">
                Per esercitare tali diritti è possibile inviare una richiesta scritta al Titolare tramite l’email
                elisapiovantrainer@gmail.com o tramite il numero WhatsApp indicato sul sito. In caso di mancato
                riscontro, l’interessato ha diritto di proporre reclamo all’{" "}
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Garante per la Protezione dei Dati Personali
                </a>
                .
              </p>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                9. Modifiche all’informativa
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Il Titolare si riserva il diritto di aggiornare la presente Privacy Policy in qualsiasi momento, anche in
                conseguenza di modifiche normative o di organizzazione del sito. Le modifiche saranno pubblicate in questa
                pagina e l’utente è invitato a consultarla periodicamente.
              </p>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                10. Disclaimer sui contenuti del quiz
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Il risultato del quiz “Che fisico hai?” e le indicazioni fornite hanno esclusivamente scopo informativo e
                non sostituiscono in alcun modo una valutazione medica, nutrizionistica o professionale. Prima di iniziare
                qualsiasi programma di allenamento o regime alimentare si consiglia di consultare un medico o un
                professionista sanitario qualificato.
              </p>
            </motion.div>

            <motion.div {...revealProps} className="pt-4 text-sm text-muted-foreground">
              Ultimo aggiornamento: settembre 2026.
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
