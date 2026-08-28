import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Partnership | Elisa Piovan Trainer & EP Team";
const DESCRIPTION =
  "Collaborazioni e partnership con Elisa Piovan Trainer ed EP Team: brand, professionisti e realtà del benessere.";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partnership" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/partnership" }],
  }),
  component: () => (
    <PlaceholderPage title="Partnership" subtitle="Contenuto in arrivo." />
  ),
});
