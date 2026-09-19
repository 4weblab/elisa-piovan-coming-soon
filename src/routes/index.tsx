import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Apple, ArrowRight, Brain, Check, Dumbbell, Instagram, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import heroBgAsset from "@/assets/elisa-hero-bg.webp";
import { GOOGLE_BUSINESS_URL, GOOGLE_RATING_VALUE, GOOGLE_REVIEW_COUNT, ORGANIZATION_JSON_LD, SITE_URL, WHATSAPP_URL } from "@/lib/site";

const PAGE_TITLE = "Personal Trainer Padova e Coaching Online Femminile";
const PAGE_DESCRIPTION =
  "Personal training e coaching online al femminile a Padova. Allenamento, nutrizione e benessere con Elisa Piovan Trainer. Contattaci su WhatsApp."

const jsonLd = {
  "@context": "https://schema.org",
  ...ORGANIZATION_JSON_LD,
  description: PAGE_DESCRIPTION,
  vatID: "05509730288",
  taxID: "05509730288",
  hasMap: GOOGLE_BUSINESS_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
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
    ratingValue: GOOGLE_RATING_VALUE,
    bestRating: "5",
    worstRating: "1",
    reviewCount: GOOGLE_REVIEW_COUNT,
  },
  review: [
    {
      "@type": "Review",
      name: "Recensione Google — Patrizia Laveneziana",
      reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
      author: { "@type": "Person", name: "Patrizia Laveneziana" },
      reviewBody:
        "Elisa e' davvero appassionata del proprio lavoro, trasmette entusiasmo, molto empatica, professionale e preparata!",
    },
    {
      "@type": "Review",
      name: "Recensione Google — Vittoria Todescato",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Vittoria Todescato" },
      reviewBody:
        "Preparata, professionale, empatica attenta alla tue esigenze, disponibile, incoraggiante coinvolgente motivante…Elisa è tutto questo e molto di più!",
    },
    {
      "@type": "Review",
      name: "Recensione Google — Giulia Bernardi",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Giulia Bernardi" },
      reviewBody:
        "È un'esperienza che consiglio fortemente perché qualsiasi percorso si voglia affrontare lo si affronta assieme ad un team di persone competenti e sempre disponibili ad accogliere e dissipare ogni dubbio.",
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
      { property: "og:url", content: "https://elitrainer.it/" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://elitrainer.it/" }],
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

const GOOGLE_REVIEWS = [
  {
    name: "Patrizia L.",
    rating: 4,
    text: "Elisa e' davvero appassionata del proprio lavoro, trasmette entusiasmo, molto empatica, professionale e preparata!",
  },
  {
    name: "Vittoria T.",
    rating: 5,
    text: "Preparata, professionale, empatica attenta alla tue esigenze, disponibile, incoraggiante coinvolgente motivante…Elisa è tutto questo e molto di più!",
  },
  {
    name: "Giulia B.",
    rating: 5,
    text: "È un'esperienza che consiglio fortemente perché qualsiasi percorso si voglia affrontare lo si affronta assieme ad un team di persone competenti e sempre disponibili ad accogliere e dissipare ogni dubbio.",
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
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroBgAsset}
          alt="Elisa Piovan durante un allenamento in palestra"
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-forest/25" aria-hidden="true" />
        <MotionDiv
          className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-36"
        >
          <MotionP
            className="font-display text-[0.7rem] font-semibold tracking-[0.28em] text-cream/75 uppercase"
          >
            ELISA PIOVAN FITNESS COACH AL FEMMINILE | PADOVA & ONLINE
          </MotionP>
          <MotionH1
            className="mt-6 max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-cream sm:text-5xl md:text-6xl"
          >
            Coaching Online e Personal Training al Femminile a Padova
          </MotionH1>
          <MotionP
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-cream/85 sm:text-lg"
          >
            <MotionLink
              to="/chi-sono"
              className="underline decoration-terracotta underline-offset-4 transition-colors duration-300 hover:text-cream"
            >
             Elisa Piovan
            </MotionLink>{" "}
             , fitness coach al femminile, assieme al suo{" "}
            <MotionLink
              to="/servizi-ep-team"
              className="underline decoration-terracotta underline-offset-4 transition-colors duration-300 hover:text-cream"
            >
             Team
             </MotionLink>{" "}offre percorsi integrati di allenamento
             personalizzato, nutrizione, beauty e supporto psicologico per donne. A
             Padova e online.
          </MotionP>
          <MotionDiv
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MotionA
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              className="shadow-premium hover:shadow-premium-hover inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-foreground/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Inizia il tuo percorso (WhatsApp)
            </MotionA>
            <MotionLink
              to="/servizi-ep-team"
              whileTap={{ scale: 0.95 }}
              className="shadow-premium hover:shadow-premium-hover group inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/5 px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Scopri il metodo EP
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
                      className="h-full space-y-4 rounded-2xl border border-border surface-card bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl md:p-8"
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
              Come iniziare il tuo percorso di Personal Training
            </MotionH2>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="mt-14 max-w-4xl mx-auto"
            >
              <article className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-muted p-8 lg:grid-cols-2 lg:items-center lg:p-10">
                <div className="space-y-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Il primo passo
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Consulenza Strategica 1:1
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Non una semplice chiamata conoscitiva, ma un primo confronto
                     tecnico e strutturato ad alto valore professionale della durata
                     di 25 minuti.
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
                    whileHover={{ y: -2 }}
                    className="shadow-premium hover:shadow-premium-hover inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-foreground/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none lg:w-auto"
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
      <section id="storie-di-successo" className="border-t border-border">
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
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border surface-card bg-card"
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
              className="mt-8 flex flex-col items-center justify-center gap-4 rounded-xl border border-border surface-card bg-card py-4 px-6 text-center sm:flex-row sm:text-left"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm leading-relaxed">
                  Vuoi scoprire altre trasformazioni reali e retroscena del
                  coaching quotidiano?
                </span>
              </div>
              <MotionA
                href="https://www.instagram.com/elisapiovan.ep/"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-sm font-semibold text-highlight transition-opacity duration-300 hover:opacity-80"
              >
                Guarda altre storie su Instagram →
              </MotionA>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Recensioni Google */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <MotionDiv
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <MotionH2
              variants={cardItem}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Cosa dicono di noi
            </MotionH2>
            <MotionDiv
              variants={cardItem}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                {GOOGLE_RATING_VALUE} su 5
              </span>
              <span className="text-sm text-muted-foreground">
                {"\n"}
              </span>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {GOOGLE_REVIEWS.map((review) => {
              const initials = review.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              return (
                <MotionArticle
                  key={review.name}
                  variants={cardItem}
                  whileHover={{ y: -6 }}
                  transition={hoverSpring}
                  className="flex h-full flex-col rounded-2xl border border-border surface-card bg-card p-7 transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-display text-sm font-semibold text-secondary-foreground">
                      {initials}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {review.name}
                      </p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "text-border"
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-pretty text-muted-foreground">
                    “{review.text}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C6.477 2 1.545 6.932 1.545 13s4.932 11 11 11 11-4.932 11-11c0-.732-.074-1.446-.214-2.139h-10.786z" />
                    </svg>
                    Recensione Google
                  </div>
                </MotionArticle>
              );
            })}
          </MotionDiv>

          <MotionDiv
            variants={cardItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 text-center"
          >
            <MotionA
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Leggi tutte le recensioni su Google
              <ArrowRight className="h-4 w-4" />
            </MotionA>
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
              to="/ginoide-androide-test"
              variants={cardItem}
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              animate={{
                boxShadow: [
                  "0 1px 1px rgba(44,61,42,0.06), 0 4px 8px rgba(44,61,42,0.08), 0 8px 24px rgba(44,61,42,0.12), 0 24px 48px rgba(44,61,42,0.14)",
                  "0 2px 2px rgba(44,61,42,0.08), 0 8px 16px rgba(44,61,42,0.12), 0 16px 40px rgba(44,61,42,0.16), 0 40px 72px rgba(44,61,42,0.20)",
                  "0 1px 1px rgba(44,61,42,0.06), 0 4px 8px rgba(44,61,42,0.08), 0 8px 24px rgba(44,61,42,0.12), 0 24px 48px rgba(44,61,42,0.14)",
                ],
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-foreground/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
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
