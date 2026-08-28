import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Quiz: Che Fisico Hai? | Elisa Piovan Trainer";
const DESCRIPTION =
  "Scopri il tuo profilo fisico con il quiz di Elisa Piovan e ricevi indicazioni sul percorso di allenamento più adatto a te.";

export const Route = createFileRoute("/quiz-che-fisico-hai")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quiz-che-fisico-hai" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quiz-che-fisico-hai" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Quiz: Che Fisico Hai?"
      subtitle="Contenuto in arrivo."
    />
  ),
});
