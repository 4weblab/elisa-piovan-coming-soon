import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Lock, Tag } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

const PAGE_TITLE = "Partnership e Collaborazioni Ufficiali | Elisa Piovan Trainer";
const PAGE_DESCRIPTION =
  "Scopri i marchi e i centri d'eccellenza selezionati da Elisa Piovan per il benessere femminile. Sconti e vantaggi esclusivi riservati all'EP Team.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Elisa Piovan Trainer",
  url: "https://elitrainer.it/partnership",
  description: PAGE_DESCRIPTION,
  areaServed: [
    { "@type": "City", name: "Padova" },
    { "@type": "Country", name: "Italia" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Sconto 10% Diagnostica Riviera",
      description: "Riservato alle allieve attive del programma EP Team.",
      url: "https://wa.me/393278840255?text=Ciao%20Elisa!%20Sono%20un'iscritta%20all'EP%20Team%20e%20vorrei%20richiedere%20il%20codice%20sconto%20per%20Diagnostica%20Riviera",
    },
    {
      "@type": "Offer",
      name: "Codice Sconto FGM 04",
      description: "-10% extra con il codice ELITRAINER.",
      url: "https://fgm04.com",
    },
    {
      "@type": "Offer",
      name: "Buono Sconto Karuna Estetica",
      description: "20% di sconto riservato ai nuovi clienti.",
    },
    {
      "@type": "Offer",
      name: "Codice Sconto Push More",
      description: "Codice esclusivo PTELISA29.",
      url: "https://pushmore.it",
    },
    {
      "@type": "Offer",
      name: "Sconto 15% 4 Web Lab",
      description: "Riservato agli iscritti EP Team.",
    },
  ],
};

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partnership" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/partnership" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: PartnershipPage,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
};

type Partner = {
  brand: string;
  category: string;
  exclusive?: boolean;
  description: string;
  badge: string;
  primaryCta: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

const PARTNERS: Partner[] = [
  {
    brand: "Diagnostica Riviera",
    category: "Servizi Sanitari",
    exclusive: true,
    description:
      "Centro medico-diagnostico all'avanguardia (sedi a Mira e Padova) specializzato in esami specialistici, apparecchiature ad alta tecnologia e convenzioni sanitarie.",
    badge: "🏷️ Sconto 10% riservato ESCLUSIVAMENTE alle allieve attive del programma EP Team.",
    primaryCta: {
      label: "Richiedi il Codice Sconto su WhatsApp",
      href: "https://wa.me/393278840255?text=Ciao%20Elisa!%20Sono%20un'iscritta%20all'EP%20Team%20e%20vorrei%20richiedere%20il%20codice%20sconto%20per%20Diagnostica%20Riviera",
      external: true,
    },
    secondaryCta: {
      label: "Visita diagnosticariviera.it",
      href: "https://diagnosticariviera.it",
    },
  },
  {
    brand: "FGM 04",
    category: "Cura del Corpo & Leggings A Compressione",
    description:
      "Formulazioni cosmeceutiche Made in Italy contro ritenzione e inestetismi, abbinate a leggings a compressione graduale che stimolano il microcircolo.",
    badge: "-10% extra con il Codice Sconto: ELITRAINER",
    primaryCta: {
      label: "Riscatta lo Sconto su fgm04.com",
      href: "https://fgm04.com",
      external: true,
    },
  },
  {
    brand: "Karuna Estetica ed Olistica",
    category: "Centro Estetico (Campodarsego - PD)",
    description:
      "Percorsi personalizzati di estetica avanzata ed olistica: dai massaggi ayurveda, decontratturanti e linfodrenanti, fino a pressoterapia e laser epilazione.",
    badge: "Buono Sconto del 20% riservato ai nuovi clienti su trattamenti o pacchetti a scelta.",
    primaryCta: {
      label: "Scarica il Buono Sconto PDF",
      href: "#",
    },
    secondaryCta: {
      label: "Scopri la Sede su Mappa",
      href: "https://www.google.com/maps/search/Karuna+Estetica+ed+Olistica+Campodarsego",
    },
  },
  {
    brand: "Push More",
    category: "Integrazione & Endurance Made in Italy",
    description:
      "Eccellenza italiana dedicata allo sport: integratori alimentari ad alta tollerabilità, linea food low-carb & keto diet e abbigliamento per il fitness.",
    badge: "Codice Sconto Esclusivo: PTELISA29",
    primaryCta: {
      label: "Riscatta lo Sconto su pushmore.it",
      href: "https://pushmore.it",
      external: true,
    },
  },
  {
    brand: "4 Web Lab",
    category: "Produzione Siti Web & Digital",
    exclusive: true,
    description:
      "Studio web specializzato nella creazione di siti web per negozi, liberi professionisti e aziende con servizi estesi per SEO avanzato e pubblicità su Google.",
    badge: "🏷️ Sconto 15% sul costo totale del servizio riservato ESCLUSIVAMENTE agli iscritti EP Team.",
    primaryCta: {
      label: "Richiedi lo Sconto del 15% su WhatsApp",
      href: "https://wa.me/393278840255?text=Ciao!%20Ti%20scrivo%20dal%20sito%20di%20Elisa%20Piovan%20per%20ricevere%20lo%20sconto%20del%2015%25%20riservato%20agli%20iscritti%20EP%20Team",
      external: true,
    },
    secondaryCta: {
      label: "Visita 4weblab.it",
      href: "https://4weblab.it",
    },
  },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <motion.article
      {...itemProps}
      className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {partner.brand}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {partner.category}
          </p>
        </div>
        {partner.exclusive && (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary"
            title="Riservato agli iscritti EP Team"
          >
            <Lock className="h-3 w-3" />
            EP Team
          </span>
        )}
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {partner.description}
      </p>

      <div
        className={`mb-6 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium leading-snug ${
          partner.exclusive
            ? "border border-primary/20 bg-primary/5 text-foreground"
            : "border border-border bg-secondary/50 text-foreground"
        }`}
      >
        {partner.exclusive ? (
          <Tag className="h-4 w-4 shrink-0 text-primary" />
        ) : (
          <Tag className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
        {partner.badge}
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <a
          href={partner.primaryCta.href}
          target={partner.primaryCta.external ? "_blank" : undefined}
          rel={partner.primaryCta.external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
        >
          {partner.primaryCta.href.startsWith("https://wa.me") && (
            <WhatsAppIcon className="h-4 w-4" />
          )}
          {partner.primaryCta.label}
          {partner.primaryCta.external && !partner.primaryCta.href.startsWith("https://wa.me") && (
            <ExternalLink className="h-3.5 w-3.5" />
          )}
        </a>

        {partner.secondaryCta && (
          <a
            href={partner.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {partner.secondaryCta.label}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function PartnershipPage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="border-b border-border/70 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col items-center gap-5"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Condivido con la mia community solo ciò che ho testato e valutato personalmente per il
              benessere femminile.
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Gli Alleati del Tuo Benessere: Le Partnership Ufficiali
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Ho selezionato marchi, centri medico-diagnostici e realtà eccellenti del settore per
              offrire vantaggi ed esperienze esclusive a tutti i membri della community EP Team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GRIGLIA PARTNER */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...containerProps} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner) => (
              <PartnerCard key={partner.brand} partner={partner} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="border-y border-border/70 bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...revealProps} className="flex flex-col items-center gap-5">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Hai dubbi su quale integratore o trattamento integrare nella tua routine?
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Chiedi direttamente a Elisa durante i tuoi check-in o scrivile su WhatsApp per
              ricevere un consiglio mirato al tuo percorso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Scrivi a Elisa su WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
