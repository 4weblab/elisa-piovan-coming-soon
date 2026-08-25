# Elisa Piovan Coming Soon

Create a sleek, modern, high-end Maintenance/Coming Soon landing page for "Elisa Piovan Trainer".

---
1. BRAND STYLE & VISUAL IDENTITY (Preserved from Current Site):
- Color Palette: Dark charcoal / deep rich graphite background (#0F0F11 or #121212), warm golden/champagne accents (#D4AF37 or soft gold), crisp white primary text, soft light-gray body copy (#A1A1AA).
- Typography: Clean, elegant sans-serif (e.g., Montserrat/Poppins for headings, Inter for body text), high readability, luxury feel.
- Layout: Single-page centered hero layout (100vh on desktop, mobile-first responsive design).

---
2. CONTENT & SEO STRUCTURE:
- Top Tagline Badge: Small elegant pill badge with a subtle gold border: "Elisa Piovan Trainer | EP Team"
- Main Heading (H1 - SEO Focused): 
  "Coaching Online e Personal Training al Femminile"
- Subheading (H2 / Body Text):
  "Stiamo rinnovando la nostra piattaforma per offrirti un'esperienza ancora più completa ed esclusiva. I percorsi di allenamento, nutrizione e supporto psicologico rimangono pienamente attivi."
- Call to Action Buttons (Flex layout - row on desktop, column on mobile):
  * Primary CTA (WhatsApp Button): "Contattaci su WhatsApp" (Icon: WhatsApp, accent color) -> opens URL: https://wa.me/393278840255?text=Ciao%20Elisa,%20vorrei%20informazioni%20sui%20percorsi%20di%20coaching
  * Secondary CTA (Instagram Button): "Seguici su Instagram" (Icon: Instagram, outline style) -> opens URL: https://www.instagram.com/ep_epteam/
- Footer & Legal Info:
  * Text: "© 2026 Elitrainer - Tutti i diritti riservati."
  * Tax ID: "P.IVA 05509730288"
  * Small muted note: "Sito temporaneamente in manutenzione programmatica."

---
3. JSON-LD STRUCTURED DATA INSTRUCTIONS:
Inject a complete, valid JSON-LD script inside the <head> section of the generated HTML page for GEO/AEO and Search Engine Optimization. 

Use the following exact JSON-LD schema structure:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://elitrainer.it/#organization",
      "name": "Elisa Piovan Trainer",
      "alternateName": ["EP Team", "Elitrainer"],
      "url": "https://elitrainer.it",
      "logo": "https://elitrainer.it/Eli-trainer-logo_png.png",
      "image": "https://elitrainer.it/Eli-trainer-logo_png.png",
      "vatID": "05509730288",
      "taxID": "05509730288",
      "description": "Percorsi integrati di personal training, nutrizione e coaching al femminile.",
      "telephone": "+393278840255",
      "areaServed": [
        {
          "@type": "City",
          "name": "Noventa Padovana"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Noventana"
        },
        {
          "@type": "City",
          "name": "Vigonza"
        },
        {
          "@type": "City",
          "name": "Padova"
        },
        {
          "@type": "Country",
          "name": "Italia"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/ep_epteam/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+393278840255",
        "contactType": "customer service",
        "availableLanguage": "Italian"
      }
    },
    {
      "@type": "Person",
      "@id": "https://elitrainer.it/#person",
      "name": "Elisa Piovan",
      "jobTitle": "Personal Trainer & Holistic Coach",
      "worksFor": {
        "@id": "https://elitrainer.it/#organization"
      },
      "sameAs": [
        "https://www.instagram.com/ep_epteam/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://elitrainer.it/#webpage",
      "url": "https://elitrainer.it/",
      "name": "Coaching Online e Personal Training al Femminile | Elisa Piovan Trainer",
      "description": "Il sito ufficiale di Elisa Piovan Trainer ed EP Team è attualmente in fase di rinnovo. I percorsi di coaching e personal training al femminile rimangono attivi via WhatsApp e Instagram.",
      "about": {
        "@id": "https://elitrainer.it/#organization"
      },
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://elitrainer.it/#website",
        "url": "https://elitrainer.it/",
        "name": "Elisa Piovan Trainer"
      }
    }
  ]
}
</script>

crea un file _redirects che contenga la stringa /* /index.html 503! in modo da non perdere l'auorità seo esistente del sito che andremo a ricostruire da zero.

Il progetto verrà gestito con github per poi essere pushato su netlify quindi integra di base lo stack necessario perchè il sito non abbia problemi con il crawling dei bot

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e3a79e25-afb8-444e-967b-700c8532441e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
