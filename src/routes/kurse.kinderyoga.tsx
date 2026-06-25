import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { courseSchema } from "@/lib/site";

const FAQ = [
  {
    q: "Für welches Alter ist das Kinderyoga geeignet?",
    a: "Für Kinder von 3 bis 6 Jahren – gemeinsam mit einer Begleitperson (Mama, Papa, Oma, Opa oder einer anderen Bezugsperson).",
  },
  {
    q: "Muss eine Begleitperson dabei sein?",
    a: "Ja. Die Begleitperson übt aktiv mit – mal als sicherer Anker, mal als Mitspieler, mal als Kuschelpartner in der Entspannung.",
  },
  {
    q: "Was passiert in einer Kinderyoga-Stunde?",
    a: "Eine Mischung aus Bewegung, Ruhe und Fantasie: einfache Yogahaltungen, kindgerechte Atemübungen und kleine Geschichten – ganz ohne Leistungsdruck.",
  },
  {
    q: "Wann findet der nächste Kurs statt und was kostet er?",
    a: "Freitags vom 18.09. bis 25.09.2026, 15:30–16:30 Uhr, 6 Einheiten für 90 €. Geleitet wird der Kurs von Svenja.",
  },
];

export const Route = createFileRoute("/kurse/kinderyoga")({
  head: () => ({
    meta: [
      { title: "Kinderyoga (3–6 Jahre) mit Begleitperson — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Spielerisches Kinderyoga für 3–6-Jährige mit Begleitperson. 6 Einheiten freitags, mit Svenja.",
      },
      { property: "og:title", content: "Kinderyoga mit Svenja" },
      {
        property: "og:description",
        content: "Yoga für die Kleinen — spielerisch, liebevoll, gemeinsam mit einer Begleitperson.",
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
          name: "Kinderyoga (3–6 Jahre)",
          description:
            "Spielerisches Kinderyoga für 3–6-Jährige mit Begleitperson in Stuttgart-Steinhaldenfeld – Bewegung, Atemspiele und Geschichten, mit Svenja.",
          path: "/kurse/kinderyoga",
          about: ["Kinderyoga", "Yoga für Kinder", "Achtsamkeit"],
        })}
      />
      <PageHeader
        eyebrow="3 – 6 Jahre · mit Svenja"
        title={<>Kinder<em>yoga</em>.</>}
        lead="Spielerisch, liebevoll, gemeinsam mit einer Begleitperson."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[1.08rem] leading-[1.75] text-taupe">
                In unserem Kinderyoga tauchen die Kleinen gemeinsam mit ihrer
                Begleitperson spielerisch in die Welt des Yoga ein. Geschichten,
                Tier-Asanas, kleine Atemspiele und ruhige Momente wechseln sich
                ab. Es geht um Spaß, Bewegung und das gemeinsame Erleben, ganz
                ohne Leistungsdruck. Für Kinder von 3 – 6 Jahre mit Begleitperson.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 rounded-md border border-ink/10 bg-sand/60 p-7">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                  Nächster Kurs
                </p>
                <p className="mt-3 font-display text-[1.45rem] leading-[1.2] text-ink">
                  Freitags, 18.09. – 25.09.2026 · 15:30 – 16:30 Uhr
                </p>
                <p className="mt-2 text-taupe">
                  6 Einheiten · 90 €
                </p>
                <div className="mt-6">
                  <CTA asChild variant="primary">
                    <a href="mailto:hello@yoga-mit-isabell.de?subject=Anmeldung%20Kinderyoga">
                      Jetzt buchen
                    </a>
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
          </Reveal>
        </div>
      </Section>

      <Faq items={FAQ} bg="sand" />
    </>
  );
}
