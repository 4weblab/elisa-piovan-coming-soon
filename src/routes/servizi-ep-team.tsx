import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import elisaHeroAsset from "@/assets/elisa-hero.webp.asset.json";
import { INSTAGRAM_URL, SITE_URL, WHATSAPP_URL } from "@/lib/site";

const PAGE_TITLE = "Metodo EP: Percorsi di Allenamento e Nutrizione per Donne";
const PAGE_DESCRIPTION =
  "Percorsi di allenamento personalizzato, nutrizione e supporto psicologico dedicati al benessere femminile. Scopri il Coaching Online con Elisa Piovan."

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "Elisa Piovan Trainer",
      alternateName: ["EP Team", "Elitrainer"],
      url: `${SITE_URL}/`,
      description: PAGE_DESCRIPTION,
      telephone: "+393278840255",
      areaServed: [
        { "@type": "City", name: "Padova" },
        { "@type": "Country", name: "Italia" },
      ],
      sameAs: [INSTAGRAM_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/servizi-ep-team#services`,
        name: "Servizi EP Team",
        url: `${SITE_URL}/servizi-ep-team`,
      },
      itemOffered: [
        {
          "@type": "Service",
          name: "Valutazione Iniziale",
          description:
            "Analisi approfondita dello storico e del punto di partenza fisico, nutrizionale ed emotivo.",
        },
        {
          "@type": "Service",
          name: "Strategia Personalizzata",
          description:
            "Percorso in cui allenamento, alimentazione e mente vanno di pari passo, monitorati e riallineati costantemente.",
        },
        {
          "@type": "Service",
          name: "Affiancamento e Presenza",
          description:
            "Supporto continuo lungo tutto il percorso per correggere la rotta, risolvere dubbi e sostenere i progressi.",
        },
        {
          "@type": "Service",
          name: "Educazione e Consapevolezza",
          description:
            "Competenze per capire cosa stai facendo e perché, rendendoti autonoma nel tempo.",
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/servizi-ep-team")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elitrainer.it/servizi-ep-team" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://elitrainer.it/servizi-ep-team" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: ServiziEpTeamPage,
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

const PILASTRI = [
  {
    title: "Valutazione iniziale",
    text: "Un'analisi approfondita del tuo storico e del tuo punto di partenza fisico, nutrizionale ed emotivo.",
  },
  {
    title: "Strategia personalizzata",
    text: "Un percorso in cui allenamento, alimentazione e mente vanno di pari passo, monitorati e riallineati in maniera costante.",
  },
  {
    title: "Affiancamento e presenza",
    text: "Supporto continuo lungo tutto il percorso per correggere la rotta, risolvere dubbi e sostenere i tuoi progressi.",
  },
  {
    title: "Educazione e consapevolezza",
    text: "Ti fornisco le competenze per capire cosa stai facendo e perché lo stai facendo, rendendoti autonoma nel tempo.",
  },
];

const TEAM = [
  {
    name: "Silvia",
    role: "Personal Training Dedicated",
    team: "EP Team",
    text: "Programmi di allenamento personalizzati e monitoraggio costante (in presenza o online) guidati da una Personal Trainer dell'EP Team per raggiungere i tuoi obiettivi fisici in totale sicurezza.",
  },
  {
    name: "Erica",
    role: "Nutrizione e Alimentazione Funzionale",
    team: "Nutrizionista EP Team",
    text: "Piani alimentari flessibili ed educazione alimentare a cura della Nutrizionista dell'EP Team, pensati per nutrire il corpo senza privazioni o diete restrittive.",
  },
  {
    name: "Mimì",
    role: "Mindset e Supporto Psicologico",
    team: "Psicologa EP Team",
    text: "Incontri dedicati con la Psicologa del team per superare i blocchi emotivi, gestire lo stress e costruire un rapporto sano con la tua immagine corporea. Perché il tuo unico limite sei TU.",
  },
];

const PERCHE = [
  {
    title: "Nessun protocollo standard",
    text: "Ogni donna ha una storia, un assetto ormonale, impegni e obiettivi differenti. La tua programmazione è unica.",
  },
  {
    title: "Un vero lavoro di squadra",
    text: "Non dovrai più cercare e coordinare professionisti distinti che non si parlano. Il team lavora in costante sinergia su di te.",
  },
  {
    title: "Approccio scientifico e umano",
    text: "Applichiamo principi rigorosi di biomeccanica e nutrizione, sempre con la massima empatia e l'ascolto attivo.",
  },
  {
    title: "Risultati duraturi",
    text: "Non puntiamo alla soluzione rapida da mantenere per tre settimane, ma a una trasformazione reale e sostenibile nel tempo. Parliamo di fatti, non di parole!",
  },
];

const FAQ = [
  {
    domanda: "Come funziona il percorso di Coaching Online?",
    risposta:
      "Dopo un primo contatto conoscitivo via WhatsApp o Instagram, valuteremo la tua condizione iniziale e i tuoi obiettivi per strutturare il percorso più adatto a te.",
  },
  {
    domanda: "I programmi sono adatti anche a chi si allena a casa?",
    risposta:
      "Assolutamente sì. I programmi sono strutturati in base alle tue disponibilità e attrezzature, sia per la palestra sia per l'allenamento a casa.",
  },
  {
    domanda: "Come si integra il supporto della Nutrizionista e della Psicologa?",
    risposta:
      "L'EP Team lavora in totale sinergia. In base alle tue esigenze potrai integrare la nutrizione o il supporto psicologico nello stesso percorso, senza dover ricominciare da capo con professionisti differenti.",
  },
  {
    domanda: "Come posso conoscere i prezzi dei percorsi?",
    risposta:
      "Non utilizziamo listini standard perché ogni percorso è cucito su misura. Durante la prima conoscitiva su WhatsApp o Instagram valuteremo la soluzione più adatta a te.",
  },
];

function ServiziEpTeamPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="overflow-hidden border-b border-border/70 surface-base bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16 md:py-28">
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-fit rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Coaching Online e Personal Training al Femminile: Il Metodo EP
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Allenamento, Nutrizione e Mindset: la tua trasformazione a 360° guidata da Elisa Piovan.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Elisa Piovan — Founder & Head Coach
            </motion.p>

            <motion.blockquote
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-2 border-primary pl-5 text-lg font-medium italic leading-relaxed text-foreground md:text-xl"
            >
              "Io sono la mappa, tu sei i passi. Il benessere femminile non si ottiene mai lavorando a compartimenti stagni."
            </motion.blockquote>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Ho creato un percorso multidisciplinare per trasformare il tuo corpo partendo dalle tue esigenze e dal tuo stile di vita. Allenamento personalizzato, nutrizione su misura e supporto psicologico in un'unica strategia coordinata. Non adattare la tua routine a un programma rigidamente preimpostato: costruiamo il metodo attorno a te.
            </motion.p>
          </motion.div>

          <motion.div {...revealProps}>
            <img
              src={elisaHeroAsset.url}
              alt="Foto di Elisa durante una sessione di coaching"
              width={1200}
              height={900}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* COSA OFFRO */}
      <section className="surface-base bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...containerProps} className="flex flex-col gap-12">
            <div className="max-w-2xl">
              <motion.h2 {...itemProps} className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                Un approccio integrato per la tua evoluzione
              </motion.h2>
            </div>

            <motion.div {...containerProps} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILASTRI.map((p, i) => (
                <motion.article
                  key={p.title}
                  {...itemProps}
                  className="space-y-4 rounded-2xl border border-border surface-card bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg md:p-8"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border surface-base bg-background text-xs font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EP TEAM */}
      <section className="border-t border-border/70 bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...containerProps} className="flex flex-col gap-12">
            <div className="max-w-3xl">
              <motion.h2 {...itemProps} className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                L'EP Team: Le Specialiste a Supporto della Tua Trasformazione
              </motion.h2>
              <motion.p {...itemProps} className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Per garantirti un affiancamento integrato a 360°, il Metodo EP si avvale del supporto di specialiste che lavorano in costante sinergia su di te:
              </motion.p>
            </div>

            <motion.div {...containerProps} className="grid gap-6 md:grid-cols-3">
              {TEAM.map((member) => (
                <motion.article
                  key={member.role}
                  {...itemProps}
                  className="rounded-2xl border border-border surface-base bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-muted mb-4 flex items-center justify-center text-xs text-muted-foreground">
                    AVATAR
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {member.role}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {member.team}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {member.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div {...itemProps} className="flex justify-center pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Inizia ora il tuo cambiamento
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERE */}
      <section className="surface-base bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...containerProps} className="flex flex-col gap-12">
            <motion.h2 {...itemProps} className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Perché Scegliere il Metodo EP
            </motion.h2>

            <motion.div {...containerProps} className="grid gap-6 md:grid-cols-2">
              {PERCHE.map((item) => (
                <motion.div
                  key={item.title}
                  {...itemProps}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-secondary/30 p-6 md:p-8"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BANNER PARTNERSHIP */}
      <section className="border-y border-border/70 bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...revealProps} className="flex flex-col items-center gap-6">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Gli Alleati del Tuo Benessere
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Per completare il tuo percorso, ho selezionato marchi e prodotti di alta qualità per l'integrazione sportiva e la cura della pelle.
            </p>
            <Link
              to="/partnership"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border surface-base bg-background px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              Scopri le Partnership Ufficiali e i Vantaggi Esclusivi
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-base bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...revealProps} className="mb-12 text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Domande Frequenti sul Coaching Online per Donne
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                    {faq.domanda}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.risposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="border-t border-border/70 bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...revealProps} className="flex flex-col items-center gap-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Sei pronta a fare il primo passo?
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Insieme, verso un unico obiettivo: il tuo. Mettiti in gioco e scegli di amarti.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Scrivimi su WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border surface-base bg-background px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
                Contattami su Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
