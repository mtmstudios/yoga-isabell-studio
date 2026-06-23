import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Faq } from "@/components/faq";

const FAQ = [
  {
    q: "Was ist ein Yoga-JGA?",
    a: "Ein Junggesellinnenabschied mit Yoga: eine individuell gestaltete Yogastunde, in der ihr Euch bewegt, lacht, entspannt und gemeinsame Erinnerungen schafft.",
  },
  {
    q: "Braucht die Gruppe Yogaerfahrung?",
    a: "Nein. Egal ob mit oder ohne Erfahrung – wir passen die Stunde ganz an Euer Level und Eure Wünsche an.",
  },
  {
    q: "Wo kann der Yoga-JGA stattfinden?",
    a: "Im Studio in Stuttgart-Steinhaldenfeld oder an einem Ort Eurer Wahl, zum Beispiel draußen in der Natur.",
  },
  {
    q: "Wie können wir einen Yoga-JGA anfragen?",
    a: "Sprecht uns einfach über das Kontaktformular an – wir stimmen Ablauf, Ort und Termin gemeinsam mit Euch ab.",
  },
];

export const Route = createFileRoute("/kurse/yoga-jga")({
  head: () => ({
    meta: [
      { title: "Yoga-JGA — Junggesellinnenabschied | Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Euer Junggesellinnenabschied mit Herz in Stuttgart — eine individuelle Yogastunde im Studio oder draußen in der Natur.",
      },
      { property: "og:title", content: "Yoga-JGA — Junggesellinnenabschied mit Herz" },
      {
        property: "og:description",
        content:
          "Bewegen, lachen, entspannen — ein Junggesellinnenabschied, der Euch wirklich verbindet.",
      },
      { property: "og:url", content: "/kurse/yoga-jga" },
    ],
    links: [{ rel: "canonical", href: "/kurse/yoga-jga" }],
  }),
  component: YogaJgaPage,
});

function YogaJgaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Junggesellinnenabschied"
        title={
          <>
            Euer JGA mit <em>Herz</em>.
          </>
        }
        lead="Ein Junggesellinnenabschied, der Euch wirklich verbindet — in Stuttgart und Umgebung."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[1.1rem] leading-[1.75] text-taupe">
                Du suchst einen besonderen Junggesellinnenabschied? Wir gestalten
                Euren JGA als gemeinsames Erlebnis — einen persönlichen
                Wohlfühlmoment, in dem ihr Euch bewegt, lacht, entspannt und
                Erinnerungen schafft, die noch lange nachwirken.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Ob mit oder ohne Yogaerfahrung — wir passen die Yogastunde ganz
                an Eure Bedürfnisse an. Euer Yoga-JGA kann im Studio oder an
                einem anderen Ort stattfinden, zum Beispiel mitten in der Natur.
                Sprecht uns gerne an.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10">
                <CTA asChild variant="primary">
                  <Link to="/kontakt">Unverbindlich anfragen</Link>
                </CTA>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[28rem]">
            <div className="radius-organic absolute -inset-3 -z-10 bg-sand/70" />
            <div className="radius-organic overflow-hidden">
              <PhotoPlaceholder
                caption="Lachende Gruppe beim Yoga — im Studio oder in der Natur"
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
