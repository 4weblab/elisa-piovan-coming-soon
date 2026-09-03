import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Lock, RotateCcw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import ginoideIllustrazioneAsset from "@/assets/ginoide-illustrazione.webp.asset.json";
import androideIllustrazioneAsset from "@/assets/androide-illustrazione.webp.asset.json";
import { SITE_URL } from "@/lib/site";

const PATH = "/ginoide-androide-test";
const TITLE =
  "Quiz Fisico & Biotipo Test: Scopri se sei Ginoide o Androide | Elisa Piovan";
const DESCRIPTION =
  "Fai il test fisico gratuito in 5 domande. Scopri se il tuo biotipo è Androide o Ginoide e ricevi la strategia di allenamento e nutrizione ideale.";

const FAQS = [
  {
    q: "Come faccio a sapere se sono androide o ginoide?",
    a: "Il biotipo androide accumula adipe prevalentemente su addome e tronco, mantenendo gambe snelle. Il biotipo ginoide accumula adipe e ritenzione su fianchi, glutei e cosce. Il nostro quiz analizza queste caratteristiche in 5 domande.",
  },
  {
    q: "Perché l'allenamento deve cambiare in base al biotipo?",
    a: "Perché un biotipo androide risponde negativamente allo stress da cortisolo (accumulando grasso addominale), mentre un biotipo ginoide deve evitare l'eccesso di acido lattico che peggiora la ritenzione idrica sulle gambe.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PATH}#webpage`,
      url: `${SITE_URL}${PATH}`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "it-IT",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}${PATH}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

type Letter = "A" | "B";

type Question = {
  title: string;
  options: { letter: Letter; text: string; image?: string }[];
};

const QUESTIONS: Question[] = [
  {
    title:
      "Dove tendi ad accumulare peso per primo quando ingrassi o prendi centimetri?",
    options: [
      {
        letter: "A",
        text: "Su addome, girovita, torace, schiena e braccia. Le gambe restano relativamente magre.",
        image: "/placeholders/androide-silhouette.svg",
      },
      {
        letter: "B",
        text: "Su fianchi, glutei, cosce e “culotte de cheval”. Il girovita rimane stretto.",
        image: "/placeholders/ginoide-silhouette.svg",
      },
    ],
  },
  {
    title:
      "Guardandoti allo specchio a figura intera, quale forma descrive meglio il tuo corpo?",
    options: [
      {
        letter: "A",
        text: "A “mela” o “V”: parte superiore più robusta o ampia rispetto alla parte inferiore.",
      },
      {
        letter: "B",
        text: "A “pera” o “A”: parte superiore esile (spalle/vita strette) e parte inferiore più pronunciata.",
      },
    ],
  },
  {
    title:
      "Come percepisci le tue gambe a fine giornata o durante i periodi caldi?",
    options: [
      {
        letter: "A",
        text: "Leggere e asciutte; raramente soffro di gonfiore o pesantezza agli arti inferiori.",
      },
      {
        letter: "B",
        text: "Pesanti, gonfie, con tendenza a ritenzione idrica e cellulite localizzata su cosce e glutei.",
      },
    ],
  },
  {
    title: "Come reagisce il tuo corpo nei periodi di alto stress o stanchezza?",
    options: [
      {
        letter: "A",
        text: "Tendo ad accumulare tensione sull'addome, fatico ad addormentarmi o mi sveglio spesso di notte.",
      },
      {
        letter: "B",
        text: "Accuso forte stanchezza fisica, aumento del gonfiore alle gambe e ritenzione accentuata.",
      },
    ],
  },
  {
    title:
      "Quando segui un percorso di dimagrimento, in quale zona fai più fatica a perdere centimetri?",
    options: [
      { letter: "A", text: "Pancia e girovita." },
      { letter: "B", text: "Cosce, fianchi e glutei." },
    ],
  },
];

const RESULTS = {
  androide: {
    key: "androide" as const,
    label: "ANDROIDE",
    cover: androideIllustrazioneAsset.url,
    profile:
      "Tendi ad accumulare adipe prevalentemente nella zona addominale, sul girovita, sulle braccia e in generale tutta la parte alta del corpo. La circolazione a livello di inferiori è generalmente buona e le gambe sono visivamente più asciutte e snelle rispetto al tronco.",
    tips: [
      {
        t: "Cortisolo e Allenamento",
        d: "Questo biotipo è maggiormente sensibile ai picchi di cortisolo. È fondamentale evitare allenamenti cardio esaustivi ad altissimo volume o sessioni infinite che aumentano lo stato infiammatorio sistemico.",
      },
      {
        t: "Lavoro controresistenza",
        d: "Focus su esercizi con sovraccarico progressivo per migliorare la sensibilità insulinica e preservare la massa magra. Privilegia sedute strutturate con tempi di recupero adeguati tra i set.",
      },
      {
        t: "Alimentazione",
        d: "Prediligi carboidrati a basso/medio indice glicemico. Abbinali a fibre e grassi sani per evitare picchi glicemici, principali responsabili dell'accumulo di adipe addominale.",
      },
      {
        t: "Gestione dell'infiammazione",
        d: "Assicura un apporto adeguato di grassi essenziali (Omega-3 da pesce azzurro, frutta secca, olio EVO) e mantieni una quota proteica costante nei pasti per favorire la stabilità energetica e il senso di sazietà.",
      },
      {
        t: "Cosa evitare",
        d: "Diete ipocaloriche estreme o digiuni prolungati non personalizzati, che aumentano il cortisolo e peggiorano il gonfiore localizzato nella zona addominale.",
      },
    ],
    wa: "https://wa.me/393278840255?text=Ciao%20Elisa!%20Ho%20completato%20il%20quiz%20sul%20sito%20e%20il%20mio%20risultato%20%C3%A8%20Biotipo%20Androide.%20Vorrei%20maggiori%20informazioni%20sul%20percorso%20su%20misura.",
    cta: "Prenota la consultazione per Biotipo Androide su WhatsApp",
  },
  ginoide: {
    key: "ginoide" as const,
    label: "GINOIDE",
    cover: ginoideIllustrazioneAsset.url,
    profile:
      "La concentrazione di adipe e ritenzione si localizza prevalentemente su fianchi, glutei e cosce. La parte superiore del tronco (spalle, torace, girovita) tende a rimanere sottile ed esile. Risenti maggiormente di rallentamento della microcircolazione, stasi linfatica e sensazione di pesantezza e gonfiore alle gambe.",
    tips: [
      {
        t: "Gestione Infiammazione e Microcircolo",
        d: "È essenziale evitare di infiammare i tessuti delle gambe con allenamenti che generano un eccesso ostacolante di acido lattico o impatti ripetuti ad alto stacco (come salti continui o corsi ad alto impatto).",
      },
      {
        t: "Stimolo Muscolare e Ritorno Venoso",
        d: "Programmazione mirata ad attivare la pompa plantare e il drenaggio dei tessuti. Lavora sugli arti inferiori ricercando sempre la qualità esecutiva. Favorisci la mobilità di caviglie e anche per decongestionare i tessuti a fine seduta.",
      },
      {
        t: "Alimentazione & Idratazione",
        d: "Mantieni un'idratazione costante durante la giornata e cura il bilancio sodio/potassio a favore di cibi ricchi di potassio (verdure a foglia verde, zucchine, finocchi) per contrastare la stasi linfatica negli arti inferiori. Riduci drasticamente gli alimenti ricchi di sodio nascosto e gli ultra-processati che favoriscono la ritenzione idrica extracellulare.",
      },
      {
        t: "Focus antinfiammatorio",
        d: "Abbonda con alimenti ricchi di antiossidanti (frutti rossi, spezie come curcuma e zenzero) per contrastare l'infiammazione tissutale tipica delle zone soggette a ritenzione e cellulite.",
      },
    ],
    wa: "https://wa.me/393278840255?text=Ciao%20Elisa!%20Ho%20completato%20il%20quiz%20sul%20sito%20e%20il%20mio%20risultato%20%C3%A8%20Biotipo%20Ginoide.%20Vorrei%20maggiori%20informazioni%20sul%20percorso%20su%20misura.",
    cta: "Prenota la consultazione per Biotipo Ginoide su WhatsApp",
  },
};

const WEB3FORMS_ACCESS_KEY = "06485748-f8b3-4782-909f-315057501c4c";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

function QuizExperience() {
  const [unlocked, setUnlocked] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [answers, setAnswers] = useState<Letter[]>([]);
  const [step, setStep] = useState(0);
  const hasSubmitted = useRef(false);

  const finished = answers.length === QUESTIONS.length;
  const result = (() => {
    if (!finished) return null;
    const a = answers.filter((x) => x === "A").length;
    const b = answers.filter((x) => x === "B").length;
    if (a > b) return RESULTS.androide;
    if (b > a) return RESULTS.ginoide;
    return RESULTS.ginoide; // fallback in caso di parità
  })();

  async function submitToWeb3Forms(resultLabel: string) {
    if (!WEB3FORMS_ACCESS_KEY) return;
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Nuovo lead dal Quiz Biotipo",
          from_name: "Elisa Piovan Trainer — Quiz Biotipo",
          Nome: name,
          Cognome: surname,
          Cellulare: phone,
          Risultato_Test: `Biotipo ${resultLabel.charAt(0) + resultLabel.slice(1).toLowerCase()}`,
        }),
      });
    } catch {
      /* la mancata notifica non deve bloccare l'utente */
    }
  }

  useEffect(() => {
    if (finished && result && !hasSubmitted.current) {
      hasSubmitted.current = true;
      submitToWeb3Forms(result.label);
    }
  }, [finished, result, name, surname, phone]);

  function handleGate(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !phone.trim() || !privacyAccepted) return;
    setUnlocked(true);
  }

  function answer(letter: Letter) {
    const next = [...answers.slice(0, step), letter];
    setAnswers(next);
    setStep(step + 1);
  }

  function restart() {
    hasSubmitted.current = false;
    setAnswers([]);
    setStep(0);
  }

  if (!unlocked) {
    return (
      <motion.form
        {...fadeUp}
        onSubmit={handleGate}
        className="mx-auto max-w-xl rounded-3xl border border-border surface-card bg-card p-8 shadow-sm sm:p-10"
      >
        <h2 className="text-2xl font-bold tracking-tight">
          Analisi Morfologica del Tuo Biotipo
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Inserisci nome, cognome e cellulare per sbloccare il test in 5 domande e
          accedere alla tua diagnosi personalizzata.
        </p>

        <div className="mt-8 space-y-4">
          <div>
            <label htmlFor="quiz-nome" className="text-sm font-medium">
              Nome
            </label>
            <input
              id="quiz-nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-input surface-base bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              placeholder="Il tuo nome"
            />
          </div>
          <div>
            <label htmlFor="quiz-cognome" className="text-sm font-medium">
              Cognome
            </label>
            <input
              id="quiz-cognome"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="mt-2 w-full rounded-xl border border-input surface-base bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              placeholder="Il tuo cognome"
            />
          </div>
          <div>
            <label htmlFor="quiz-tel" className="text-sm font-medium">
              Cellulare / WhatsApp
            </label>
            <input
              id="quiz-tel"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-xl border border-input surface-base bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              placeholder="+39 ..."
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="quiz-privacy"
              type="checkbox"
              required
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-current"
            />
            <label
              htmlFor="quiz-privacy"
              className="cursor-pointer text-xs leading-relaxed text-muted-foreground"
            >
              I dati inviati tramite il form vengono trattati secondo le regole
              di Privacy previste e sono consultabili alla pagina{" "}
              <Link
                to="/privacy-policy"
                className="font-medium text-foreground underline underline-offset-2"
              >
                Privacy
              </Link>
              .
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={!privacyAccepted}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
        >
          Inizia il test fisico
          <ArrowRight className="h-4 w-4" />
        </button>

      </motion.form>
    );
  }

  if (result) {
    return (
      <motion.div {...fadeUp} className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-border surface-card bg-card p-8 shadow-sm sm:p-12">
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Esito Analisi Morfologica
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Il tuo Biotipo prevalente è: {result.label}
          </h2>

          <div className="mt-8 flex justify-center overflow-hidden rounded-3xl border border-[var(--color-terracotta)] bg-[var(--color-cream)] p-3 shadow-[0_12px_32px_-12px_var(--color-terracotta)]">
            <img
              src={result.cover}
              alt={
                result.key === "ginoide"
                  ? "rappresentazione fisico Ginoide"
                  : "rappresentazione fisico Androide"
              }
              className="h-auto w-full max-w-md rounded-2xl object-contain"
              loading="lazy"
            />
          </div>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            {result.profile}
          </p>

          <h3 className="mt-10 text-lg font-bold">Indicazioni strategiche</h3>
          <ul className="mt-4 space-y-5">
            {result.tips.map((tip) => (
              <li key={tip.t} className="border-l-2 border-border pl-4">
                <p className="text-sm font-semibold">{tip.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {tip.d}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl bg-secondary p-6 text-center sm:p-8">
            <p className="text-lg font-bold">
              Vuoi applicare questa strategia al tuo corpo con un programma su
              misura?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Parla direttamente con Elisa per strutturare il tuo percorso ideale
              per Biotipo {result.label.charAt(0) + result.label.slice(1).toLowerCase()}.
            </p>
            <a
              href={result.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {result.cta}
            </a>
          </div>

          <button
            onClick={restart}
            className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Rifai il test
          </button>
        </div>
      </motion.div>
    );
  }

  const question = QUESTIONS[step]!;
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
        <span>
          Domanda {step + 1} di {QUESTIONS.length}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-foreground"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} {...fadeUp} className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {question.title}
          </h2>
          <div className="mt-8 grid gap-4">
            {question.options.map((opt) => {
              const selected = answers[step] === opt.letter;
              return (
                <button
                  key={opt.letter}
                  onClick={() => answer(opt.letter)}
                  className={`flex items-center gap-5 rounded-2xl border surface-card bg-card p-5 text-left transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-sm ${
                    selected ? "border-foreground" : "border-border"
                  }`}
                >
                  {opt.image ? (
                    <img
                      src={opt.image}
                      alt=""
                      aria-hidden="true"
                      className="h-24 w-auto shrink-0 rounded-xl bg-secondary p-2"
                      loading="lazy"
                    />
                  ) : null}
                  <span className="text-sm leading-relaxed">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {step > 0 ? (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Indietro
        </button>
      ) : null}
    </div>
  );
}

function QuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 text-center sm:pt-32">
        <motion.h1
          {...fadeUp}
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Quiz Fisico &amp; Analisi Morfologica: Scopri il tuo Biotipo (Ginoide o
          Androide)
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground"
        >
          Cinque domande per capire come il tuo corpo accumula adipe e ritenzione,
          e quale strategia di allenamento e nutrizione è davvero adatta a te.
        </motion.p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <QuizExperience />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Domande frequenti
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

export const Route = createFileRoute("/ginoide-androide-test")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
  }),
  component: QuizPage,
});
