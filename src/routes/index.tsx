import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ArrowUpRight } from "lucide-react";

const SITE_URL = "https://elitrainer.it";
const LOGO_URL = "https://elitrainer.it/Eli-trainer-logo_png.png";
const PAGE_TITLE =
  "Coaching Online e Personal Training | Elisa Piovan Trainer";
const PAGE_DESCRIPTION =
  "Sito ufficiale di Elisa Piovan Trainer ed EP Team in rinnovo. I percorsi di coaching e personal training al femminile rimangono attivi via WhatsApp.";

const WHATSAPP_URL =
  "https://wa.me/393278840255?text=Ciao%20Elisa,%20vorrei%20informazioni%20sui%20percorsi%20di%20coaching";
const INSTAGRAM_URL = "https://www.instagram.com/ep_epteam/";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://elitrainer.it/#organization",
      name: "Elisa Piovan Trainer",
      alternateName: ["EP Team", "Elitrainer"],
      url: "https://elitrainer.it",
      logo: LOGO_URL,
      image: LOGO_URL,
      vatID: "05509730288",
      taxID: "05509730288",
      description:
        "Percorsi integrati di personal training, nutrizione e coaching al femminile.",
      telephone: "+393278840255",
      areaServed: [
        { "@type": "City", name: "Noventa Padovana" },
        { "@type": "AdministrativeArea", name: "Noventana" },
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
    },
    {
      "@type": "Person",
      "@id": "https://elitrainer.it/#person",
      name: "Elisa Piovan",
      jobTitle: "Personal Trainer & Holistic Coach",
      worksFor: { "@id": "https://elitrainer.it/#organization" },
      sameAs: [INSTAGRAM_URL],
    },
    {
      "@type": "WebPage",
      "@id": "https://elitrainer.it/#webpage",
      url: "https://elitrainer.it/",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      about: { "@id": "https://elitrainer.it/#organization" },
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://elitrainer.it/#website",
        url: "https://elitrainer.it/",
        name: "Elisa Piovan Trainer",
      },
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
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: LOGO_URL },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: LOGO_URL },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: MaintenancePage,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function MaintenancePage() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-background">
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="hero-glow animate-glow-drift pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
      />
      <div
        aria-hidden="true"
        className="floor-glow pointer-events-none absolute inset-x-0 bottom-0 h-[45vh]"
      />
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none absolute inset-0"
      />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        {/* Tagline badge */}
        <div className="animate-rise" style={{ animationDelay: "0.05s" }}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-rose-muted px-5 py-2 font-display text-[0.65rem] font-semibold tracking-[0.28em] text-rose uppercase">
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-rose shadow-[0_0_8px_var(--rose)]"
            />
            Elisa Piovan Trainer&nbsp;|&nbsp;EP Team
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-rise mt-10 max-w-4xl font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.18s" }}
        >
          Coaching Online e Personal Training{" "}
          <span className="text-rose-gradient">al Femminile</span>
        </h1>

        {/* Hairline */}
        <div
          aria-hidden="true"
          className="hairline-rose animate-hairline mt-10 h-px w-40 sm:w-56"
          style={{ animationDelay: "0.55s" }}
        />

        {/* Subheading */}
        <p
          className="animate-rise mt-10 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.38s" }}
        >
          Stiamo rinnovando la nostra piattaforma per offrirti un'esperienza
          ancora più completa ed esclusiva. I percorsi di allenamento,
          nutrizione e supporto psicologico rimangono pienamente attivi.
        </p>

        {/* CTAs */}
        <div
          className="animate-rise mt-12 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          style={{ animationDelay: "0.52s" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-display text-sm font-bold tracking-wide text-primary-foreground uppercase shadow-[0_0_40px_var(--rose-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-bright hover:shadow-[0_0_56px_var(--rose-glow-strong)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Contattaci su WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-foreground/20 bg-foreground/[0.02] px-8 py-4 font-display text-sm font-bold tracking-wide text-foreground uppercase backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-muted hover:text-rose focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:w-auto"
          >
            <Instagram className="h-5 w-5 transition-colors duration-300 group-hover:text-rose" />
            Seguici su Instagram
            <ArrowUpRight className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </div>
      </main>

      {/* Footer / Legal */}
      <footer
        className="animate-rise relative z-10 px-6 pb-10 text-center"
        style={{ animationDelay: "0.72s" }}
      >
        <div
          aria-hidden="true"
          className="hairline-rose mx-auto mb-8 h-px w-24 opacity-40"
        />
        <p className="text-sm text-muted-foreground">
          © 2026 Elitrainer — Tutti i diritti riservati.
        </p>
        <p className="mt-1.5 text-xs tracking-wide text-muted-foreground/70">
          P.IVA 05509730288
        </p>
        <p className="mt-4 text-[0.7rem] tracking-wider text-muted-foreground/50 uppercase">
          Rinnovo digitale a cura di{" "}
          <a
            href="https://4weblab.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/70 underline decoration-rose-muted/40 underline-offset-2 transition-colors duration-300 hover:text-rose hover:decoration-rose"
          >
            4 Web Lab
          </a>{" "}
          — Siti web, SEO e ADS per il tuo business.
        </p>
      </footer>
    </div>
  );
}
