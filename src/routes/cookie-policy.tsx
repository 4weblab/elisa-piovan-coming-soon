import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Cookie Policy | Elisa Piovan Trainer";
const DESCRIPTION =
  "Informativa sull'utilizzo dei cookie del sito di Elisa Piovan Trainer ed EP Team.";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookie-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: () => (
    <PlaceholderPage title="Cookie Policy" subtitle="Contenuto in arrivo." />
  ),
});
