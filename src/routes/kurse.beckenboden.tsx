import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";

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
    text: "Sanft, respektvoll, in Deinem Tempo — auch nach Geburt, Operationen oder belastenden Erfahrungen.",
  },
  {
    title: "Sexualität & Sinnlichkeit",
    text: "Mehr Spürbewusstsein, mehr Lebendigkeit. Ein vitaler Beckenboden ist eng mit Lust und Sinnlichkeit verbunden.",
  },
];

function BeckenbodenPage() {
  return (
    <>
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
    </>
  );
}
