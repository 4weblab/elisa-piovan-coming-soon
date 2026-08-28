import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Contatti | Elisa Piovan Trainer & EP Team";
const DESCRIPTION =
  "Contatta Elisa Piovan e l'EP Team su WhatsApp o Instagram per informazioni sui percorsi di coaching al femminile.";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contatti" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: () => (
    <PlaceholderPage title="Contatti" subtitle="Contenuto in arrivo." />
  ),
});
