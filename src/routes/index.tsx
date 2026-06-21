import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yoga mit Isabell — Vinyasa Yoga in Stuttgart" },
      {
        name: "description",
        content:
          "Klein & fein: Vinyasa Yoga in Stuttgart-Steinhaldenfeld. Max. 12 Teilnehmer:innen, ganzheitlich begleitet von Isabell Thieleke.",
      },
      { property: "og:title", content: "Yoga mit Isabell — Komm zur Ruhe. Finde Deine Mitte." },
      {
        property: "og:description",
        content: "Persönliches, kreatives und ganzheitliches Yoga in Stuttgart-Steinhaldenfeld.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
    </>
  );
}
