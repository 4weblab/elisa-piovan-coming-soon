import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Servizi | Elisa Piovan Trainer & EP Team";
const DESCRIPTION =
  "Personal training, nutrizione personalizzata e supporto psicologico: i servizi dell'EP Team per il benessere femminile.";

export const Route = createFileRoute("/servizi-ep-team")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servizi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servizi" }],
  }),
  component: () => (
    <PlaceholderPage title="Servizi" subtitle="Contenuto in arrivo." />
  ),
});
