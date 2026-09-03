import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Handshake,
  HelpCircle,
  MessageCircle,
  Quote,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  FOURWEBLAB_URL,
  FOURWEBLAB_WHATSAPP_URL,
  SITE_URL,
} from "@/lib/site";

const PAGE_TITLE = "La Trasformazione Digitale di Elisa Piovan Trainer | 4 Web Lab";
const PAGE_DESCRIPTION =
  "Scopri come 4 Web Lab ha curato la trasformazione digitale di Elisa Piovan Trainer: hosting ultraveloce, flusso WhatsApp diretto, quiz interattivo e pagina partnership.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/4weblab`,
      url: `${SITE_URL}/4weblab`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      creator: {
        "@type": "Organization",
        name: "4 Web Lab",
        url: FOURWEBLAB_URL,
        description: "Siti web per negozi, professionisti e aziende.",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Elisa Piovan Trainer",
      url: `${SITE_URL}/`,
    },
  ],
};

export const Route = createFileRoute("/4weblab")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elitrainer.it/4weblab" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://elitrainer.it/4weblab" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: FourWebLabPage,
});

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const containerProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-50px" },
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  },
};

const itemProps = {
  variants: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
};

const INTERVENTIONS = [
  {
    icon: Server,
    title: "Migrazione & Hosting ultraveloce",
    description:
      "Ristrutturazione dell'architettura web su stack moderno per garantire tempi di caricamento rapidi, stabilità e una base solida per la crescita futura.",
  },
  {
    icon: MessageCircle,
    title: "Flusso WhatsApp diretto",
    description:
      "Abbattuta la frattura delle email lente: ogni CTA strategica apre ora una conversazione WhatsApp immediata, calda e conversion-oriented.",
  },
  {
    icon: HelpCircle,
    title: "Quiz interattivo rinnovato",
    description:
      "Riprogettato il percorso di autovalutazione ginoide/androide per offrire un'esperienza coinvolgente, utile e perfettamente integrata con il brand.",
  },
  {
    icon: Handshake,
    title: "Pagina Partnership & Convenzioni",
    description:
      "Creata una vetrina dedicata per i partner ufficiali EP Team, con badge esclusivi, codici sconto e collegamenti diretti ai canali di richiesta.",
  },
];

function FourWebLabPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/70 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Case Study & Credits
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              La Trasformazione Digitale di{" "}
              <span className="text-muted-foreground">Elisa Piovan Trainer</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Dietro il nuovo sito c'è un lavoro di redesign tecnico e strategico curato da{" "}
              <strong className="text-foreground">4 Web Lab</strong>: velocità, semplicità di
              contatto e strumenti pensati per convertire visitatrici in allieve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            {...revealProps}
            className="relative overflow-hidden rounded-2xl border border-border bg-secondary/30 p-8 md:p-12"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-foreground/10" />
            <Quote className="mb-6 h-8 w-8 text-muted-foreground" />
            <blockquote className="font-display text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              "Carlo e 4 Web Lab hanno capito esattamente cosa mi serviva. Finalmente un sito che
              funziona: niente più mail perse, niente lentezza. Le mie potenziali clienti possono
              scrivermi su WhatsApp in un clic e il quiz aiuta davvero chi non sa da dove partire.
              Sono entusiasta del risultato."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent" aria-hidden="true" />
              <div>
                <p className="font-display text-sm font-bold text-foreground">Elisa Piovan</p>
                <p className="text-sm text-muted-foreground">Fitness Coach al Femminile</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERVENTIONS GRID */}
      <section className="border-t border-border/70 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...revealProps} className="mb-12 text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Gli interventi tecnici
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Quattro pilastri su cui è stata costruita la nuova esperienza digitale del brand.
            </p>
          </motion.div>

          <motion.div
            {...containerProps}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {INTERVENTIONS.map((item) => (
              <motion.div
                key={item.title}
                {...itemProps}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AGENCY BOX */}
      <section className="border-t border-border/70 bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            {...revealProps}
            className="overflow-hidden rounded-2xl border border-border bg-secondary/30"
          >
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Agenzia Web
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  4 Web Lab
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Siti web per negozi, professionisti e aziende. Progettiamo piattaforme veloci,
                  affidabili e orientate ai risultati, con attenzione alla SEO, alla conversione e
                  alla chiarezza comunicativa.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href={FOURWEBLAB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visita il sito di 4 Web Lab"
                    >
                      Visita 4weblab.it
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <a
                      href={FOURWEBLAB_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Scrivi a Carlo su WhatsApp"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Scrivi a Carlo
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative hidden min-h-[260px] bg-foreground md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold tracking-tighter text-background/90">
                    4WL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BACK TO SITE */}
      <section className="border-t border-border/70 bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div {...revealProps}>
            <p className="text-sm text-muted-foreground">
              Torna a esplorare il sito di Elisa Piovan Trainer.
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Torna alla Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
