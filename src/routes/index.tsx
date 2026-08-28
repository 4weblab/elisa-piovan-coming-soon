import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Dumbbell, Salad } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { INSTAGRAM_URL, SITE_URL, WHATSAPP_URL } from "@/lib/site";

const PAGE_TITLE =
  "Coaching Online e Personal Training al Femminile | Elisa Piovan Trainer";
const PAGE_DESCRIPTION =
  "Scopri il metodo di Elisa Piovan e dell'EP Team. Percorsi di allenamento femminile, nutrizione personalizzata e supporto psicologico. Contattaci su WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Elisa Piovan Trainer",
  alternateName: ["EP Team", "Elitrainer"],
  url: `${SITE_URL}/`,
  description: PAGE_DESCRIPTION,
  vatID: "05509730288",
  taxID: "05509730288",
  telephone: "+393278840255",
  areaServed: [
    { "@type": "City", name: "Noventa Padovana" },
    { "@type": "City", name: "Vigonza" },
    { "@type": "City", name: "Padova" },
    { "@type": "Country", name: "Italia" },
  ],
  sameAs: [INSTAGRAM_URL],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+393278840255",
    contactType: "customer service",
    availableLanguage: "Italian",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: HomePage,
});

const FEATURES = [
  {
    icon: Dumbbell,
    title: "Allenamento Personalizzato",
    text: "Programmi costruiti sul tuo corpo, sui tuoi obiettivi e sul tuo tempo reale.",
  },
  {
    icon: Salad,
    title: "Nutrizione Clinica",
    text: "Piani alimentari sostenibili, seguiti da professionisti e adattati nel tempo.",
  },
  {
    icon: Brain,
    title: "Supporto Mentale",
    text: "Un accompagnamento psicologico per costruire costanza, motivazione e fiducia.",
  },
];

const OFFERS = [
  { title: "Offerta 1", text: "Descrizione temporanea 1." },
  { title: "Offerta 2", text: "Descrizione temporanea 2." },
  { title: "Offerta 3", text: "Descrizione temporanea 3." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase"
          >
            Elisa Piovan Trainer — EP Team
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Trasforma il tuo corpo, riscopri la tua forza.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          >
            Percorsi di Personal Training, Nutrizione e Benessere Psicologico al
            femminile con Elisa Piovan e l'EP Team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-soft-pulse inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Inizia il tuo percorso (WhatsApp)
            </a>
            <Link
              to="/chi-sono"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Scopri il nostro metodo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Approccio */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Un metodo integrato per il benessere femminile
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
              Non solo allenamento. EP Team unisce fitness, nutrizione
              personalizzata e supporto psicologico per garantirti risultati
              reali e duraturi.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <li key={feature.title}>
                <Reveal delay={i * 0.1}>
                  <feature.icon
                    className="h-6 w-6 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Percorsi */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              I Nostri Percorsi
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {OFFERS.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgb(22_23_26/0.28)]">
                  <h3 className="text-xl font-semibold">{offer.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {offer.text}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-foreground/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Richiedi info su WhatsApp
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
