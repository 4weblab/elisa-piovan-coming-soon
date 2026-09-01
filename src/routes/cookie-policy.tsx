import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cookie, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const TITLE = "Cookie Policy | Elisa Piovan Trainer";
const DESCRIPTION =
  "Informativa sull'utilizzo dei cookie del sito di Elisa Piovan Trainer ed EP Team. Utilizziamo esclusivamente cookie tecnici necessari al funzionamento del sito.";

const CONSENT_KEY = "ep-cookie-consent";

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookie-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  const [canReset, setCanReset] = useState(false);

  useEffect(() => {
    try {
      setCanReset(localStorage.getItem(CONSENT_KEY) === "true");
    } catch {
      setCanReset(false);
    }
  }, []);

  const resetConsent = () => {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      // ignora errori storage
    }
    setCanReset(false);
    window.location.reload();
  };

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
              <Cookie className="h-6 w-6 text-muted-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Cookie Policy
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Informativa trasparente sui cookie utilizzati da Elisa Piovan Trainer ed EP Team.
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
                Cosa sono i cookie
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano e
                registrano sul computer o sul dispositivo mobile, per essere poi ritrasmessi agli
                stessi siti alla visita successiva. Servono a garantire il corretto funzionamento
                delle pagine, a memorizzare preferenze e, in alcuni casi, a raccogliere informazioni
                per finalità statistiche o di marketing.
              </p>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Cookie utilizzati su questo sito
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Su questo sito utilizziamo esclusivamente <strong>cookie tecnici</strong>,
                necessari per garantire la navigazione e la fruizione dei contenuti. Non utilizziamo
                cookie di profilazione, né strumenti di analisi statistica o tracciamento di terze
                parti (come Google Analytics, Meta Pixel, TikTok Pixel o simili).
              </p>
              <div className="rounded-xl border border-border bg-secondary/30 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Cookie tecnici
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Finalità: funzionamento del sito, gestione della preferenza di chiusura del banner
                  cookie. Durata: massimo 12 mesi. Base giuridica: legittimo interesse.
                </p>
              </div>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Gestione delle preferenze
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Poiché utilizziamo solo cookie tecnici, non è richiesto un consenso preventivo. Il
                banner informativo ti permette di prendere visione dell'informativa e di chiuderla.
                Puoi comunque modificare la tua scelta in qualsiasi momento utilizzando il pulsante
                qui sotto.
              </p>
              {canReset && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetConsent}
                  className="w-fit gap-2"
                >
                  <RefreshCcw className="h-4 w-4" />
                  Reimposta preferenza cookie
                </Button>
              )}
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Disabilitazione dei cookie dal browser
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                La maggior parte dei browser consente di visualizzare, gestire ed eliminare i
                cookie attraverso le impostazioni. Ti ricordiamo che la disabilitazione totale dei
                cookie tecnici potrebbe compromettere il corretto funzionamento di alcune parti del
                sito.
              </p>
            </motion.div>

            <motion.div {...revealProps} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Contatti e privacy
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Per qualsiasi domanda sui cookie o sul trattamento dei dati personali, consulta la
                nostra{" "}
                <Link
                  to="/privacy-policy"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Privacy Policy
                </Link>{" "}
                o scrivici tramite i canali indicati nella pagina{" "}
                <Link
                  to="/contatti"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Contatti
                </Link>
                .
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
