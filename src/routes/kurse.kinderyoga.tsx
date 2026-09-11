import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { AiImageNotice } from "@/components/ai-image-notice";
import { JsonLd } from "@/components/json-ld";
import { courseSchema } from "@/lib/site";

const FAQ = [
  {
    q: "Für welches Alter ist das Kinderyoga geeignet?",
    a: "Für Kinder von 5 – 7 Jahre.",
  },
  {
    q: "Muss eine Begleitperson dabei sein?",
    a: "Nein, es muss keine Begleitperson dabei sein.",
  },
  {
    q: "Was passiert in einer Kinderyoga-Stunde?",
    a: "Eine Mischung aus Bewegung, Ruhe und Fantasie: einfache Yogahaltungen, kindgerechte Atemübungen und kleine Geschichten – ganz ohne Leistungsdruck.",
  },
  {
    q: "Wann findet der nächste Kurs statt und was kostet er?",
    a: "Donnerstags vom 05.11. bis 10.12.2026, 16:00–16:45 Uhr, 6 Einheiten für 90 €. Geleitet wird der Kurs von Svenja.",
  },

];

export const Route = createFileRoute("/kurse/kinderyoga")({
  head: () => ({
    meta: [
      { title: "Kinderyoga (5 – 7 Jahre) — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Spielerisches Kinderyoga für 5- bis 7-Jährige. 6 Einheiten donnerstags, mit Svenja.",
      },
      { property: "og:title", content: "Kinderyoga mit Svenja" },
      {
        property: "og:description",
        content: "Yoga für die Kleinen — spielerisch und liebevoll.",
      },

      { property: "og:url", content: "/kurse/kinderyoga" }
    ],
    links: [{ rel: "canonical", href: "/kurse/kinderyoga" }],
  }),
  component: KinderyogaPage,
});

function KinderyogaPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Kinderyoga (5 – 7 Jahre)",
          description:
            "Spielerisches Kinderyoga für 5- bis 7-Jährige in Stuttgart-Steinhaldenfeld – Bewegung, Atemspiele und Geschichten, mit Svenja.",

          path: "/kurse/kinderyoga",
          about: ["Kinderyoga", "Yoga für Kinder", "Achtsamkeit"],
        })}
      />
      <PageHeader
        eyebrow="5 – 7 JAHRE · MIT SVENJA"
        title={<>Kinder<em>yoga</em>.</>}
        lead="Spielerisch & liebevoll."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[1.08rem] leading-[1.75] text-taupe">
                In unserem Kinderyoga tauchen die Kleinen spielerisch in die Welt
                des Yoga ein. Geschichten,
                Tier-Asanas, kleine Atemspiele und ruhige Momente wechseln sich
                ab. Es geht um Spaß, Bewegung und das gemeinsame Erleben, ganz
                ohne Leistungsdruck. Für Kinder von 5 – 7 Jahre.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 rounded-md border border-ink/10 bg-sand/60 p-7">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                  Nächster Kurs
                </p>
                <p className="mt-3 font-display text-[1.45rem] leading-[1.2] text-ink">
                  Donnerstags, 05.11. – 10.12.2026 · 16:00 – 16:45 Uhr
                </p>
                <p className="mt-2 text-taupe">
                  6 Einheiten · 90 €
                </p>
                <div className="mt-6">
                  <CTA asChild variant="primary">
                    <Link to="/kontakt">
                      Jetzt über Kontaktformular buchen
                    </Link>
                  </CTA>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[28rem]">
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/kinderyoga.jpg"
                alt="Kinderyoga — Kinder entdecken spielerisch Yoga-Haltungen"
                aspect="aspect-[4/5]"
              />
            </div>
            <AiImageNotice />
          </Reveal>
        </div>
      </Section>

      <Faq items={FAQ} bg="sand" />
    </>
  );
}
