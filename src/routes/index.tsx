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
import { Marquee } from "@/components/marquee";
import { LotusThread } from "@/components/lotus-thread";
import { SectionDivider } from "@/components/section-divider";
import { Faq } from "@/components/faq";

const FAQ = [
  {
    q: "Wo finde ich Yoga mit Isabell?",
    a: "Meine Kurse finden statt im Bürger- und Siedlerhaus, im 1. Stock, in der Zuckerbergstraße 99 in Stuttgart-Steinhaldenfeld. Das Yogastudio befindet sich in einem ruhigen Wohngebiet. Kostenfreie Parkplätze findest Du in den umliegenden Straßen und direkt auf dem Grundstück. Auch mit öffentlichen Verkehrsmitteln gut erreichbar: Die Bushaltestelle „Zuckerbergstraße“ und die U-Bahnhaltestelle „Steinhaldenfeld“ sind nur wenige Meter entfernt.",
  },
  {
    q: "Brauche ich Vorkenntnisse, um anzufangen?",
    a: "Egal ob Anfänger:in oder fortgeschritten – Du bist willkommen! Suche Dir den passenden Kurs nach Deiner Erfahrung aus. Wenn Du Fragen hast, kontaktiere mich gerne.",
  },
  {
    q: "Wie groß sind die Gruppen?",
    a: "Wir sind klein & fein und üben in Gruppen von maximal 12 Teilnehmer:innen, damit wir individuell auf Dich eingehen können.",
  },
  {
    q: "Was kostet eine Probestunde?",
    a: "Die Probestunde kostet 10 €, eine Einzelstunde 15 €. Dazu gibt es eine 5er-Karte (70 €) und eine 10er-Karte (130 €). Wir sind Partner von Wellhub.",
  },
  {
    q: "Welche Yogastile bietet Ihr an?",
    a: "Vinyasa Yoga (für Anfänger und Fortgeschrittene), Rückenyoga, Yin Yoga, Yoga Sanft und Yoga Flow am Abend. Darüberhinaus gibt es regelmäßig Workshops, wie Beckenboden Yoga, Kinderyoga sowie besondere Formate wie Soundbatsh und Retreats.",
  },
  {
    q: "Kann ich jederzeit einsteigen?",
    a: "Ja, in die offenen Stunden ist der Einstieg jederzeit möglich. Buchen kannst Du bequem online über den Buchungskalender.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinyasa Yoga Stuttgart-Steinhaldenfeld · Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Vinyasa Yoga in Stuttgart-Steinhaldenfeld, nahe Bad Cannstatt. Klein & fein, max. 12 Teilnehmer:innen — persönlich begleitet von Isabell Thieleke.",
      },
      {
        name: "keywords",
        content:
          "Yoga Stuttgart, Yoga Stuttgart-Steinhaldenfeld, Yoga Bad Cannstatt, Vinyasa Yoga Stuttgart, Yoga Anfängerkurs Stuttgart, Rückenyoga, Beckenboden Yoga Stuttgart",
      },
      { property: "og:title", content: "Yoga mit Isabell — Komm zur Ruhe. Finde Deine Mitte." },
      {
        property: "og:description",
        content: "Persönliches, kreatives und ganzheitliches Vinyasa Yoga in Stuttgart-Steinhaldenfeld.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <LotusThread heightClass="h-[18rem]" className="-my-12 bg-bone" />
      <CoursesPreview />
      <AboutTeaser />
      <Marquee />
      <Quote />
      <Studio />
      <Retreat />
      <FinalCta />
      <Faq items={FAQ} bg="bone" />
      <InstagramStrip />
      <Newsletter />
    </>
  );
}
