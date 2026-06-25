import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { CourseSignupForm } from "@/components/course-signup-form";
import { JsonLd } from "@/components/json-ld";
import { courseSchema } from "@/lib/site";

const FAQ = [
  {
    q: "Brauche ich Vorkenntnisse für Beckenboden Yoga?",
    a: "Nein. „Pelvic Love“ ist für Anfänger:innen und Fortgeschrittene geeignet – Du brauchst keine Vorkenntnisse.",
  },
  {
    q: "Ist Beckenboden Yoga auch nach einer Geburt geeignet?",
    a: "Ja. Die Praxis ist sanft, respektvoll und in Deinem Tempo – auch nach Geburt, Operationen oder belastenden Erfahrungen.",
  },
  {
    q: "Ist Beckenboden Yoga nur für Frauen?",
    a: "Ein gesunder Beckenboden ist für alle wichtig. Der Kurs richtet sich an Frauen & Männer.",
  },
  {
    q: "Wer leitet den Kurs?",
    a: "Pelvic Love wird von Stephie, zertifizierte Beckenbodenyogalehrerin, geleitet.",
  },
  {
    q: "Wo findet Beckenboden Yoga statt?",
    a: "Im Studio von Yoga mit Isabell, Bürger- und Siedlerhaus, Zuckerbergstraße 99, Stuttgart-Steinhaldenfeld.",
  },
  {
    q: "Wann findet der nächste Beckenbodenyoga Kurs statt?",
    a: "Neue Termine geben wir über den Newsletter bekannt. Melde Dich an, dann erfährst Du als Erste:r vom nächsten Start.",
  },
];

export const Route = createFileRoute("/kurse/beckenboden")({
  head: () => ({
    meta: [
      { title: "Pelvic Love — Beckenboden Yoga mit Stephie | Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Ganzheitliches, achtsames Beckenbodentraining — für Anfänger:innen und Fortgeschrittene, keine Vorkenntnisse nötig.",
      },
      { property: "og:title", content: "Pelvic Love — Beckenboden Yoga" },
      {
        property: "og:description",
        content: "Beckenbodenarbeit mit Achtsamkeit, Atmung und Bewegung.",
      },
      { property: "og:url", content: "/kurse/beckenboden" }
    ],
    links: [{ rel: "canonical", href: "/kurse/beckenboden" }],
  }),
  component: BeckenbodenPage,
});

const BENEFITS = [
  {
    title: "Ganzheitlich & achtsam",
    text: "Beckenbodentraining, das Körper, Atem und Bewusstsein verbindet — weit über klassische Übungen hinaus.",
  },
  {
    title: "Entspannung & Achtsamkeit",
    text: "Lerne, Spannungen wahrzunehmen und gezielt loszulassen. Dein Beckenboden darf sowohl kraftvoll als auch weich sein.",
  },
  {
    title: "Verfeinerte Körperausrichtung",
    text: "Eine bewusste Haltung entlastet Beckenboden, Rücken und Hüften im Alltag — Schritt für Schritt.",
  },
  {
    title: "Innere Sicherheit & Erdung",
    text: "Ein präsenter Beckenboden vermittelt Stabilität, Vertrauen und das Gefühl, in Dir zuhause zu sein.",
  },
  {
    title: "Raum für Heilung",
    text: "Die Praxis kann Beschwerden lindern, wie sie im Beckenraum, unteren Rücken oder Bauchraum auftreten können und fördert langfristig Deine körperliche Balance.",
  },
  {
    title: "Sexualität & Sinnlichkeit",
    text: "Mehr Spürbewusstsein, mehr Lebendigkeit. Ein vitaler Beckenboden ist eng mit Lust und Sinnlichkeit verbunden.",
  },
];

function BeckenbodenPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Beckenboden Yoga – Pelvic Love",
          description:
            "Achtsames Beckenbodentraining für mehr Kraft, Beweglichkeit und Spürbewusstsein – in Stuttgart-Steinhaldenfeld, für Anfänger:innen und Fortgeschrittene.",
          path: "/kurse/beckenboden",
          about: ["Beckenboden", "Yoga", "Rückbildung"],
        })}
      />
      <PageHeader
        eyebrow="Pelvic Love · mit Stephie"
        title={<>Beckenboden <em>Yoga</em>.</>}
        lead="Für Anfänger:innen und Fortgeschrittene — keine Vorkenntnisse nötig."
      />

      <Section bg="bone">
        <Reveal>
          <p className="max-w-[42rem] text-[1.08rem] leading-[1.75] text-taupe">
            „Pelvic Love" ist achtsames Beckenbodentraining für mehr Kraft,
            Beweglichkeit, Spürbewusstsein und innere Verbindung. In ruhigen,
            bewussten Einheiten lernst Du Deinen Beckenboden neu kennen — als
            zentralen Ort von Stabilität, Atem und Lebendigkeit.
          </p>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Eyebrow>Was Dich erwartet</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading size="h2" className="mt-6">
            Sechs Räume, die <em>Pelvic Love</em> öffnet.
          </DisplayHeading>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i} as="div">
              <li className="relative pl-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-clay/40 font-display text-[0.85rem] text-clay"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.35rem] leading-[1.2] text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[1.65] text-taupe">
                  {b.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section bg="bone">
        <Reveal>
          <div className="mx-auto max-w-[40rem]">
            <CourseSignupForm
              course="beckenboden"
              title="Sei dabei beim nächsten Beckenboden Yoga Kurs"
              description="Trag Dich ein und Du erfährst als Erste:r, wenn der nächste Pelvic Love Kurs startet."
              successMessage="Danke! Wir melden uns, sobald der nächste Beckenboden Yoga Kurs startet."
            />
          </div>
        </Reveal>
      </Section>

      <Faq items={FAQ} bg="sand" />
    </>
  );
}
