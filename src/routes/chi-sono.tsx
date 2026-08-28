import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Chi Siamo | Elisa Piovan Trainer & EP Team";
const DESCRIPTION =
  "Conosci Elisa Piovan e l'EP Team: il metodo integrato di allenamento, nutrizione e supporto psicologico al femminile.";

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/chi-sono" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/chi-sono" }],
  }),
  component: () => (
    <PlaceholderPage title="Chi Siamo" subtitle="Contenuto in arrivo." />
  ),
});
