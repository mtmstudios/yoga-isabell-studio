import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { CoursesPreview } from "@/components/home/courses-preview";
import { AboutTeaser } from "@/components/home/about-teaser";
import { Quote } from "@/components/home/quote";
import { Studio } from "@/components/home/studio";
import { Retreat } from "@/components/home/retreat";
import { FinalCta } from "@/components/home/final-cta";
import { Newsletter } from "@/components/home/newsletter";
import { InstagramStrip } from "@/components/instagram-strip";

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
      <Intro />
      <CoursesPreview />
      <AboutTeaser />
      <Quote />
      <Studio />
      <Retreat />
      <FinalCta />
      <Newsletter />
    </>
  );
}
