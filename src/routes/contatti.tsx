import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { INSTAGRAM_URL, ORGANIZATION_JSON_LD, SITE_URL } from "@/lib/site";

const PAGE_TITLE =
  "Contatta Elisa Piovan | Personal Trainer al Femminile";
const PAGE_DESCRIPTION =
  "Fai il primo passo verso il tuo benessere. Contatta direttamente Elisa su WhatsApp o Instagram per iniziare il tuo percorso personalizzato.";

const CONTACT_WHATSAPP_URL =
  "https://wa.me/393278840255?text=Ciao%20Elisa,%20vorrei%20informazioni%20su%20come%20iniziare%20il%20mio%20percorso";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: `${SITE_URL}/contatti`,
  mainEntity: ORGANIZATION_JSON_LD,
};

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elitrainer.it/contatti" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://elitrainer.it/contatti" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: ContattiPage,
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

const STEPS = [
  {
    title: "Ascolto attivo",
    body: "Leggo la tua storia e quello che vorresti ottenere.",
  },
  {
    title: "Valutazione su misura",
    body: "Ti indico la strada migliore tra i nostri percorsi integrati.",
  },
  {
    title: "Zero pressioni",
    body: "Valuterai con calma se il Metodo EP è ciò che stai cercando.",
  },
];

function ContattiPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-border/70 surface-base bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <motion.div
            className="flex flex-col items-center gap-5"
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              Contatti
            </motion.p>
            <motion.h1
              className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Fai il primo passo. Al resto pensiamo insieme.
            </motion.h1>
            <motion.p
              className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              So bene che iniziare un percorso di cambiamento può fare un po' paura o creare dubbi.
              Non devi avere già tutte le risposte né sapere esattamente di cosa hai bisogno.
              Scrivermi è semplicemente un modo per conoscerci, fare due chiacchierate sulla tua
              situazione e capire insieme come posso aiutarti a raggiungere il tuo benessere.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COSA SUCCEDE DOPO */}
      <section className="border-y border-border/70 bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div {...revealProps} className="mb-12 text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Cosa succede dopo il tuo messaggio?
            </h2>
          </motion.div>

          <motion.div
            {...containerProps}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                {...itemProps}
                className="flex flex-col items-center rounded-2xl border border-border surface-base bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FRASE CHIUSURA RASSICURANTE */}
      <section className="surface-base bg-background py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.p
            {...revealProps}
            className="font-display text-lg italic text-foreground md:text-xl lg:text-2xl"
          >
            "Ogni grande trasformazione inizia da una semplice chiacchierata tra donne."
          </motion.p>
        </div>
      </section>

      {/* CANALI DIRETTI */}
      <section className="surface-base bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...revealProps} className="text-center">
            <p className="text-base text-muted-foreground md:text-lg">
              Scegli il canale che preferisci per iniziare a parlare:
            </p>
          </motion.div>

          <motion.div
            {...containerProps}
            className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {/* WhatsApp CTA */}
            <motion.a
              {...itemProps}
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border surface-card bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg md:p-8"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <span className="font-display text-lg font-semibold text-foreground md:text-xl">
                💬 Scrivimi direttamente su WhatsApp
              </span>
              <span className="text-sm text-muted-foreground">
                (Rispondo personalmente non appena stacco dagli allenamenti)
              </span>
            </motion.a>

            {/* Instagram CTA */}
            <motion.a
              {...itemProps}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border surface-card bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg md:p-8"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529]/10 via-[#DD2A7B]/10 to-[#8134AF]/10 text-foreground">
                <Instagram className="h-7 w-7" />
              </span>
              <span className="font-display text-lg font-semibold text-foreground md:text-xl">
                📸 Mandami un messaggio su Instagram
              </span>
              <span className="text-sm text-muted-foreground">
                (Puoi scrivermi nei DM per qualsiasi informazione)
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* COLLABORA CON NOI */}
      <section
        id="collabora"
        className="scroll-mt-28 border-t border-border/70 surface-base bg-background pb-16 md:pb-24"
      >
        <div className="mx-auto max-w-3xl px-6 pt-16 md:pt-20">
          <motion.div
            {...revealProps}
            className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-secondary/20 p-8 text-center md:p-10"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Fai parte del network EP Team
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Sei una personal trainer, una nutrizionista o una psicologa specializzata in
              fitness? Inviaci il curriculum: valutiamo con costanza l'ampliamento dei servizi
              che offriamo. Inviaci una mail con tutti tuoi dati e CV aggiornato a
              elisapiovantrainer@gmail.com
            </p>
            <a
              href="mailto:elisapiovantrainer@gmail.com?subject=Candidatura%20spontanea"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
            >
              Invia il tuo CV
            </a>
            <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
              I dati che ci invii sono usati solo internamente per valutare la tua candidatura.{" "}
              <Link
                to="/privacy-policy"
                hash="candidature"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Leggi l'informativa sulle candidature
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
