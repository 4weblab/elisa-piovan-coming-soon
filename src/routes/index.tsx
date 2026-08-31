import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Apple, ArrowRight, Brain, Check, Dumbbell, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { INSTAGRAM_URL, SITE_URL, WHATSAPP_URL } from "@/lib/site";

const PAGE_TITLE =
  "Coaching Online e Personal Trainer Padova | Elisa Piovan";
const PAGE_DESCRIPTION =
  "Personal training e coaching online al femminile a Padova. Allenamento, nutrizione e benessere con Elisa Piovan Trainer. Contattaci su WhatsApp.";

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
  itemOffered: [
    {
      "@type": "Service",
      name: "Allenamento Personalizzato",
      description:
        "Percorso di personal training al femminile con valutazione biomeccanica e posturale, progressione sostenibile e rispetto della fisiologia femminile.",
    },
    {
      "@type": "Service",
      name: "Nutrizione Consapevole",
      description:
        "Piani alimentari su misura basati su educazione alimentare, zero privazioni drastiche e flessibilità per integrarsi nello stile di vita quotidiano.",
    },
    {
      "@type": "Service",
      name: "Supporto Psicologico & Mindset",
      description:
        "Percorso di supporto psicologico per migliorare l'immagine corporea, superare i blocchi emotivi e costruire abitudini durature.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/servizi-ep-team#services`,
    name: "Servizi EP Team",
    url: `${SITE_URL}/servizi-ep-team`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: 3,
  },
  review: [
    {
      "@type": "Review",
      name: "Evoluzione Tecnica",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente EP Team" },
      reviewBody:
        "Ho imparato ad allenarmi con costanza senza l'ossessione della bilancia, migliorando forza e postura.",
    },
    {
      "@type": "Review",
      name: "Mindset & Nutrizione",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente EP Team" },
      reviewBody:
        "Un percorso post gravidanza, piú di un anno di percorso metodo EP allenamento personal training e alimentazione.",
    },
    {
      "@type": "Review",
      name: "Forza e Costanza",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente EP Team" },
      reviewBody:
        "Il percorso EP ha fatto la differenza. I risultati estetici sono stati la naturale conseguenza del mio benessere mentale.",
    },
  ],
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
    title: "1. Allenamento Personalizzato",
    points: [
      {
        lead: "Biomeccanica e Postura al centro:",
        text: "Un'attenta valutazione della tua struttura e dei tuoi schemi motori per lavorare in totale sicurezza ed efficacia, rispettando la tua unicità.",
      },
      {
        lead: "Progressione sostenibile:",
        text: "Una programmazione scientifica basata sul sovraccarico progressivo e sulla qualità del movimento, lontana da schede improvvisate o prive di logica.",
      },
      {
        lead: "Rispetto della fisiologia femminile:",
        text: "Percorsi strutturati specificamente per valorizzare le tue forme, migliorare la composizione corporea e tutelare la tua salute a lungo termine.",
      },
    ],
  },
  {
    icon: Apple,
    title: "2. Nutrizione Consapevole",
    points: [
      {
        lead: "Strategie su misura:",
        text: "Piani alimentari calibrati con precisione sulle tue esigenze biologiche, sui tuoi ritmi quotidiani e sui tuoi gusti personali.",
      },
      {
        lead: "Zero privazioni drastiche:",
        text: "Un approccio sano ed equilibrato pensato per nutrire il corpo, sostenere le performance e mantenere alta l'energia di tutti i giorni.",
      },
      {
        lead: "Flessibilità e stile di vita:",
        text: "Soluzioni progettate per integrarsi perfettamente nella tua vita sociale e lavorativa, senza stress o rinunce insostenibili.",
      },
    ],
  },
  {
    icon: Brain,
    title: "3. Supporto Psicologico & Mindset",
    points: [
      {
        lead: "Rapporto positivo con lo specchio:",
        text: "Ti aiutiamo a migliorare la percezione che hai di te stessa e del tuo corpo, fornendoti strumenti concreti per superare insicurezze e costruire un'immagine corporea solida e consapevole.",
      },
      {
        lead: "Superamento dei blocchi:",
        text: "Un'analisi mirata delle dinamiche emotive legate al cibo, allo stress quotidiano e alla gestione della motivazione.",
      },
      {
        lead: "Abitudini durature:",
        text: "Un percorso trasformativo per fare spazio a uno stile di vita sano, spontaneo e capace di farti star bene davvero, per sempre.",
      },
    ],
  },
];

const OFFERS = [
  { title: "Offerta 1", text: "Descrizione temporanea 1." },
  { title: "Offerta 2", text: "Descrizione temporanea 2." },
  { title: "Offerta 3", text: "Descrizione temporanea 3." },
];

const SUCCESS_STORIES = [
  {
    src: "/success-1.webp",
    alt: "Evoluzione posturale e tecnica nel coaching online al femminile",
    tag: "Evoluzione Tecnica",
    quote:
      "Ho imparato ad allenarmi con costanza senza l'ossessione della bilancia, migliorando forza e postura.",
  },
  {
    src: "/success-2.webp",
    alt: "Miglioramento della composizione corporea e mindset",
    tag: "Mindset & Nutrizione",
    quote:
      "Un percorso post gravidanza, piú di un anno di percorso metodo EP allenamento personal training e alimentazione.",
  },
  {
    src: "/success-3.webp",
    alt: "Risultati fitness e benessere olistico femminile",
    tag: "Forza e Costanza",
    quote:
      "Il percorso EP ha fatto la differenza. I risultati estetici sono stati la naturale conseguenza del mio benessere mentale.",
  },
];

const MotionLink = motion(Link);
const MotionA = motion.a;
const MotionArticle = motion.article;
const MotionFigure = motion.figure;
const MotionImg = motion.img;
const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionUl = motion.ul;
const MotionLi = motion.li;

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

const sectionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
} as const;

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

const hoverSpring = { type: "spring" as const, stiffness: 300, damping: 20 };

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <MotionDiv
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl px-6 py-24 md:py-36"
        >
          <MotionP
            variants={heroItem}
            className="font-display text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase"
          >
            ELISA PIOVAN FITNESS COACH AL FEMMINILE | PADOVA & ONLINE
          </MotionP>

          <MotionH1
            variants={heroItem}
            className="mt-6 max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Coaching Online e Personal Training al Femminile a Padova
          </MotionH1>

          <MotionP
            variants={heroItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          >
            <MotionLink
              to="/chi-sono"
              className="transition-colors duration-300 hover:text-foreground"
            >
             Elisa Piovan
            </MotionLink>{" "}
             , fitness coach al femminile, assieme al suo Team offre
            <MotionLink
              to="/servizi-ep-team"
              className="transition-colors duration-300 hover:text-foreground"
            >
             EP Team
             </MotionLink>{" "}offre percorsi integrati di allenamento
             personalizzato, nutrizione e supporto psicologico per donne. A
             Padova e online.
          </MotionP>

          <MotionDiv
            variants={heroItem}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MotionA
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-foreground/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Inizia il tuo percorso (WhatsApp)
            </MotionA>
            <MotionLink
              to="/servizi-ep-team"
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Scopri il nostro metodo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MotionLink>
          </MotionDiv>
        </MotionDiv>
      </section>

      {/* Approccio */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <MotionDiv
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <MotionH2
              variants={cardItem}
              className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl"
            >
              Il Metodo Integrato per il Benessere Femminile
            </MotionH2>
            <MotionP
              variants={cardItem}
              className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground"
            >
              Il metodo EP unisce allenamento personalizzato, personal training,
              alimentazione personalizzata e supporto nella gestione dello
              stress. Un approccio curato nei minimi dettagli per garantire
              risultati reali e soprattutto duraturi.
            </MotionP>

            <MotionUl
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-14 grid gap-10 md:grid-cols-3"
            >
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <MotionLi key={feature.title} variants={cardItem}>
                    <MotionArticle
                      className="h-full space-y-4 rounded-2xl border border-zinc-200/60 bg-zinc-50/50 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl md:p-8"
                    >
                      <Icon
                        className="h-6 w-6 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <h3 className="text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {feature.points.map((point) => (
                          <li key={point.lead}>
                            <strong className="font-semibold text-foreground">
                              {point.lead}
                            </strong>{" "}
                            {point.text}
                          </li>
                        ))}
                      </ul>
                    </MotionArticle>
                  </MotionLi>
                );
              })}
            </MotionUl>
          </MotionDiv>
        </div>
      </section>

      {/* Percorsi */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <MotionDiv
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <MotionH2
              variants={cardItem}
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              INIZIA DA QUI
            </MotionH2>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="mt-14 max-w-4xl mx-auto"
            >
              <article className="grid grid-cols-1 gap-8 rounded-2xl border border-zinc-200 bg-zinc-900/5 p-8 lg:grid-cols-2 lg:items-center lg:p-10 dark:border-zinc-800 dark:bg-zinc-100/5">
                <div className="space-y-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Il primo passo
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Consulenza Strategica 1:1 | 30 minuti con Elisa
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Non una semplice chiamata conoscitiva, ma un primo confronto
                    tecnico e strutturato ad alto valore professionale.
                    Un&apos;analisi dettagliata della tua situazione di partenza.
                    Analizzerò la tua condizione attuale, affronteremo dubbi
                    tecnici su allenamento, nutrizione e mindset e sfateremo i
                    falsi miti che stanno ostacolando i tuoi progressi. Al termine
                    avrai chiarezza sulla direzione da prendere e sul percorso EP
                    più adatto a te.
                  </p>
                  <p className="inline-flex items-center gap-2 text-base font-semibold text-foreground">
                    <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                    Prezzo: 25€ (Scalabili in caso di inizio percorso)
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center lg:items-end">
                  <MotionA
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-foreground/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none lg:w-auto"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Prenota la Consulenza su WhatsApp
                  </MotionA>
                </div>
              </article>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Storie di Successo */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <MotionDiv
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <MotionH2
              variants={cardItem}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Storie di Successo
            </MotionH2>
            <MotionP
              variants={cardItem}
              className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground"
            >
              Risultati reali di donne che hanno trasformato il proprio stile di
              vita con il coaching di Elisa Piovan.
            </MotionP>

            <MotionDiv
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {SUCCESS_STORIES.map((story) => (
                <MotionFigure
                  key={story.tag}
                  variants={cardItem}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 24px 60px -24px rgba(22, 23, 26, 0.35)",
                  }}
                  transition={hoverSpring}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-secondary">
                    <MotionImg
                      src={story.src}
                      alt={story.alt}
                      loading="lazy"
                      decoding="async"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <figcaption className="flex flex-1 flex-col p-8">
                    <span className="self-start rounded-full border border-border px-3 py-1 font-display text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      {story.tag}
                    </span>
                    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-pretty text-muted-foreground">
                      “{story.quote}”
                    </blockquote>
                  </figcaption>
                </MotionFigure>
              ))}
            </MotionDiv>

            {/* Instagram Social Proof */}
            <MotionDiv
              variants={cardItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 py-4 px-6 text-center sm:flex-row sm:text-left"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm leading-relaxed">
                  Vuoi scoprire altre trasformazioni reali e retroscena del
                  coaching quotidiano?
                </span>
              </div>
              <MotionA
                href="https://www.instagram.com/ep_epteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-sm font-semibold text-foreground transition-opacity duration-300 hover:opacity-80"
              >
                Guarda altre storie su Instagram →
              </MotionA>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Banner Quiz */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <MotionDiv
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <MotionH2
              variants={cardItem}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Non sai da quale percorso iniziare?
            </MotionH2>
            <MotionP
              variants={cardItem}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground"
            >
              Scopri il programma di allenamento e nutrizione più adatto al tuo
              corpo. Fai il test gratuito e ricevi un'analisi personalizzata in
              base al tuo somatotipo.
            </MotionP>
            <MotionLink
              to="/quiz-che-fisico-hai"
              variants={cardItem}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 20px rgba(15,15,17,0.1)",
                  "0px 0px 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-foreground/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Inizia il Quiz (1 min)
              <ArrowRight className="h-4 w-4" />
            </MotionLink>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
