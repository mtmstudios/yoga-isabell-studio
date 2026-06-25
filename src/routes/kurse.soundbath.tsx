import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { CourseSignupForm } from "@/components/course-signup-form";
import { JsonLd } from "@/components/json-ld";
import { courseSchema } from "@/lib/site";

const FAQ = [
  {
    q: "Brauche ich Vorkenntnisse für eine Soundbath Meditation?",
    a: "Nein. Du liegst entspannt auf der Matte und lässt die Klänge wirken – Yogaerfahrung oder Vorkenntnisse sind nicht nötig.",
  },
  {
    q: "Was sollte ich mitbringen?",
    a: "Warme, bequeme Kleidung. Gerne eine Decke und ein Kissen, damit Du es Dir richtig gemütlich machen kannst.",
  },
  {
    q: "Wie läuft ein Soundbath ab?",
    a: "Du machst es Dir im Liegen bequem, während Klangschalen, Gongs und sanfte Vibrationen einen Raum der Tiefenentspannung schaffen – wie eine Massage für die Seele.",
  },
  {
    q: "Wo findet die Soundbath Meditation statt?",
    a: "Im Studio von Yoga mit Isabell im Bürger- und Siedlerhaus, Zuckerbergstraße 99, Stuttgart-Steinhaldenfeld.",
  },
  {
    q: "Wann ist der nächste Termin?",
    a: "Die Termine finden in loser Folge statt. Melde Dich für den Newsletter an, dann erfährst Du als Erste:r vom nächsten Soundbath.",
  },
];

export const Route = createFileRoute("/kurse/soundbath")({
  head: () => ({
    meta: [
      { title: "Soundbath Meditation mit Jasmin — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Klangschalen, Gongs und sanfte Vibrationen — Tiefenentspannung wie eine Massage für die Seele.",
      },
      { property: "og:title", content: "Soundbath Meditation mit Jasmin" },
      {
        property: "og:description",
        content: "Heilende Klänge in Stuttgart-Steinhaldenfeld.",
      },
      { property: "og:url", content: "/kurse/soundbath" }
    ],
    links: [{ rel: "canonical", href: "/kurse/soundbath" }],
  }),
  component: SoundbathPage,
});

function SoundbathPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Soundbath Meditation",
          description:
            "Klangschalen, Gongs und sanfte Vibrationen – Tiefenentspannung wie eine Massage für die Seele, im Yogastudio in Stuttgart-Steinhaldenfeld.",
          path: "/kurse/soundbath",
          about: ["Klangschalen", "Meditation", "Tiefenentspannung"],
        })}
      />
      <PageHeader
        eyebrow="Klang · Meditation"
        title={<>Soundbath Meditation mit <em>Jasmin</em>.</>}
        lead="Tauche ein in die Magie heilender Klänge."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[28rem]">
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/soundbath.jpg"
                alt="Klangschalen und Gongs bei einer Soundbath Meditation"
                aspect="aspect-[4/5]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[1.1rem] leading-[1.75] text-taupe">
                Lass die hektische Welt für einen Moment hinter Dir und tauche
                ein in die Magie heilender Klänge. Klangschalen, Gongs und
                sanfte Vibrationen schaffen einen Raum der Tiefenentspannung,
                in dem Du loslassen und zur Ruhe kommen kannst.
                <br />
                Eine Soundbath Meditation ist wie eine Massage für die Seele —
                sie bringt Dich ins Hier und Jetzt, löst Spannungen und
                schenkt Dir neue Energie.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[1.1rem] leading-[1.75] text-taupe">
                Um Dich während der Meditation rundum wohlzufühlen, empfehle
                ich Dir, warme und bequeme Kleidung zu tragen. Gerne kannst Du
                eine Decke und ein Kissen mitbringen, um es Dir noch
                gemütlicher zu machen.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="bone">
        <Reveal>
          <div className="mx-auto max-w-[40rem]">
            <CourseSignupForm
              course="soundbath"
              title="Sei beim nächsten Soundbath dabei"
              description="Trag Dich ein und Du erfährst als Erste:r, wenn der nächste Soundbath-Termin steht."
              successMessage="Danke! Wir melden uns, sobald der nächste Soundbath-Termin steht."
            />
          </div>
        </Reveal>
      </Section>

      <Faq items={FAQ} bg="sand" />
    </>
  );
}
