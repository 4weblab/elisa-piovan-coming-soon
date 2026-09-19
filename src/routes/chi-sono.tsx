import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import elisaAllenamentoAsset from "@/assets/elisa-allenamento.webp";
import elisaRitrattoAsset from "@/assets/elisa-ritratto.webp";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { INSTAGRAM_URL, ORGANIZATION_JSON_LD, SITE_URL, TIKTOK_URL } from "@/lib/site";

const PAGE_TITLE = "Elisa Piovan | Fitness Coach al Femminile";
const PAGE_DESCRIPTION =
  "Scopri la storia di Elisa Piovan, Fitness Coach al Femminile, e la visione dell'EP Team. Un metodo integrato di allenamento, nutrizione e mente per le donne.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#elisa-piovan`,
      name: "Elisa Piovan",
      alternateName: "Elisa Piovan Trainer",
      jobTitle: "Fitness Coach al Femminile",
      description:
        "Fitness coach al femminile con sedici anni di esperienza. Fondatrice di EP Team, specializzata in percorsi integrati di allenamento, nutrizione e supporto psicologico per donne.",
      url: `${SITE_URL}/chi-sono`,
      image: `${SITE_URL}/favicon.png`,
      sameAs: [INSTAGRAM_URL, TIKTOK_URL],
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: [
        "Personal Training al Femminile",
        "Coaching Online",
        "Nutrizione Consapevole",
        "Supporto Psicologico e Mindset",
        "Benessere Femminile",
      ],
    },
    {
      ...ORGANIZATION_JSON_LD,
      founder: { "@id": `${SITE_URL}/#elisa-piovan` },
      description:
        "Metodo integrato di allenamento, nutrizione e mente per il benessere femminile.",
    },
  ],
};

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elitrainer.it/chi-sono" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://elitrainer.it/chi-sono" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: ChiSonoPage,
});

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

function ChiSonoPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="overflow-hidden border-b border-border/70 surface-base bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28">
          <motion.div
            className="order-2 flex flex-col gap-6 md:order-1"
          >
            <motion.h1
              className="w-fit rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Elisa Piovan | Fitness Coach al Femminile
            </motion.h1>
            <motion.h2
              className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Oltre l'allenamento: un invito a riscoprirti semplicemente come donna
            </motion.h2>
            <motion.p
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              In sedici anni di lavoro ho allenato tantissime donne, e ho visto ripetersi sempre la stessa scena: arrivavano da me con un obiettivo estetico — dimagrire, tonificare, "sistemare" qualcosa — ma dietro quell'obiettivo c'era quasi sempre qualcos'altro. Una donna che si era persa un po' di vista. Che aveva passato anni a dare priorità a tutto e tutti tranne che a se stessa: il lavoro, i figli, la famiglia, le aspettative degli altri. Il corpo era solo il sintomo più visibile di un ascolto che mancava da tempo.
            </motion.p>
            <motion.p
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Ho capito che per affrontare davvero questo, serviva uno spazio pensato unicamente per l'esperienza femminile — un programma fitness costruito partendo da come il corpo e la mente di una donna cambiano nel tempo: il ciclo, la maternità, la menopausa, i momenti di transizione che nessun percorso standard tiene davvero in considerazione. Da donna a donna, capisco certe cose ancora prima che mi vengano dette.
            </motion.p>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            {...revealProps}
          >
            <img
              src={elisaRitrattoAsset}
              alt="foto primo piano Elisa Piovan"
              width={900}
              height={1462}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* METODO E CONSAPEVOLEZZA */}
      <section className="surface-base bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.p
            {...revealProps}
            className="text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Riscoprirsi semplicemente come donna per me significa proprio questo: togliere di mezzo l'ennesima etichetta da rincorrere — mamma perfetta, professionista perfetta, corpo perfetto — e tornare a un rapporto onesto con se stesse. Non un'altra performance da portare a termine, ma uno spazio dove hai il permesso di ascoltarti, di essere nella fase della vita in cui sei davvero, e di prenderti cura di te per come sei ora, non per come "dovresti" essere.
          </motion.p>
        </div>
      </section>

      {/* SUPERAMENTO DEI LIMITI */}
      <section className="border-t border-border/70 bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
          <motion.div {...revealProps}>
            <img
              src={elisaAllenamentoAsset}
              alt="Elisa Piovan in allenamento"
              width={900}
              height={1350}
              loading="lazy"
              decoding="async"
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h2
              {...revealProps}
              className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl"
            >
              Il tuo unico limite sei TU
            </motion.h2>

            <motion.p
              {...revealProps}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Il limite più grande, quasi sempre, non è fisico: è la convinzione di essere arrivate "troppo tardi", o di non avere il tipo di corpo, di energia, di disciplina giusti per iniziare davvero. Sento spesso frasi come "io non sono portata", "ho sempre iniziato e mollato", "alla mia età è tardi per cambiare qualcosa". Sono narrazioni che le donne si raccontano per anni, spesso perché qualcuno gliele ha suggerite prima loro — un commento, un confronto, un fallimento passato mai davvero elaborato.
            </motion.p>

            <motion.p
              {...revealProps}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              C'è poi un secondo limite, più sottile: il perfezionismo. Molte donne aspettano il momento perfetto per iniziare — quando avranno più tempo, meno stress, la testa più libera — e quel momento, semplicemente, non arriva mai. Nel frattempo passano mesi, a volte anni, ferme in attesa di una condizione ideale che nessuno di noi ha mai davvero.
            </motion.p>

            <motion.p
              {...revealProps}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Quando dico "il tuo unico limite sei tu" non intendo colpevolizzare — intendo esattamente il contrario: intendo restituire potere. Se il limite è una convinzione che ti sei costruita, allora è anche qualcosa che puoi decidere di mettere in discussione. Il mio lavoro, in fondo, è proprio questo: creare le condizioni — tecniche, pratiche, ma anche mentali — perché quella convinzione smetta di essere l'ultima parola.
            </motion.p>
          </div>
        </div>
      </section>

      {/* RUOLO E TEAM */}
      <section className="surface-base bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <motion.h2
                {...revealProps}
                className="font-display text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl"
              >
                Io sono la mappa, tu sei i passi
              </motion.h2>

              <motion.p
                {...revealProps}
                className="text-center text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Significa che io e il mio team mettiamo sul tavolo tutto quello che sappiamo: competenza tecnica, un metodo strutturato, presenza costante, correzioni, strategie su misura. Ma il cambiamento — quello vero, che dura — lo fai tu, con le scelte che fai ogni giorno anche quando non c'è nessuno a guardarti: quel pasto in più o in meno, quell'allenamento saltato o portato a termine, quella sera in cui scegli di riposare invece di strafare.
              </motion.p>

              <motion.p
                {...revealProps}
                className="text-center text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Non credo nel personal trainer o nel coach come "salvatore": è una narrazione comoda ma disonesta, perché scarica sull'altro una responsabilità che in realtà resta sempre nelle mani della persona. Il mio ruolo è essere la mappa, non le gambe che camminano. Posso indicarti la strada più efficace, posso correggerti quando stai sbagliando esecuzione o direzione, posso esserci nei momenti in cui la motivazione cala — ma il cammino lo percorri tu.
              </motion.p>
            </div>

            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-secondary/30 p-8 md:p-12">
              <motion.h3
                {...revealProps}
                className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl"
              >
                Il ruolo del Team EP
              </motion.h3>

              <motion.p
                {...revealProps}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Ed è qui che entra in gioco il Team EP. Non si tratta solo del mio nome con un'etichetta diversa: è un vero lavoro di squadra, nato per garantirti un affiancamento completo. Io porto la visione, l'esperienza e la supervisione di ogni percorso, ma dietro di me c'è un team di professioniste (Nutrizionista, Psicologa e Trainer) che lavora in perfetto coordinamento.
              </motion.p>

              <motion.p
                {...revealProps}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Questo significa che troverai sempre la persona giusta al momento giusto, senza perdere mai il filo. Io e il mio team saremo la tua guida e ti sosterremo in tutto il percorso, ma sarai tu l'unica vera protagonista e responsabile del tuo successo.
              </motion.p>

              <motion.p
                {...revealProps}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Quando arriverai al traguardo, quel risultato sarà tuo. Guadagnato con il tuo impegno.
              </motion.p>

              <motion.div
                {...revealProps}
                className="pt-4"
              >
                <Link
                  to="/servizi-ep-team"
                  className="shadow-premium hover:shadow-premium-hover group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Scopri il metodo EP
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
