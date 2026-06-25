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
    q: "Ist der Anfängerkurs wirklich für komplette Neulinge geeignet?",
    a: "Ja. Der Kurs ist genau für Yoga-Neulinge gemacht. Es ist nicht wichtig, wie beweglich oder sportlich Du bist – wir gehen die ersten Schritte gemeinsam.",
  },
  {
    q: "Wie viele Einheiten umfasst der Kurs?",
    a: "Der geschlossene Anfängerkurs läuft über 6 Einheiten, sodass Du die Grundlagen in Ruhe aufbauen kannst.",
  },
  {
    q: "Was lerne ich im Anfängerkurs?",
    a: "Die Grundlagen des Yoga: Körperhaltungen (Asanas), Atemübungen, Meditation und leichte Flows – Schritt für Schritt.",
  },
  {
    q: "Wie groß sind die Gruppen?",
    a: "Wir üben in kleinen Gruppen von maximal 12 Teilnehmer:innen, damit wir individuell auf Dich eingehen können.",
  },
  {
    q: "Wann startet der nächste Anfängerkurs in Stuttgart?",
    a: "Neue Termine geben wir über den Newsletter bekannt. Melde Dich an, dann erfährst Du als Erste:r vom nächsten Start.",
  },
];

export const Route = createFileRoute("/kurse/anfaengerkurs")({
  head: () => ({
    meta: [
      { title: "Yoga Anfängerkurs — Dein sanfter Einstieg | Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Geschlossener Anfängerkurs in 6 Einheiten. Körperhaltungen, Atemübungen, Meditation und leichte Flows — in kleinen Gruppen.",
      },
      { property: "og:title", content: "Yoga Anfängerkurs — Dein sanfter Einstieg" },
      {
        property: "og:description",
        content: "Sanfter Einstieg ins Yoga — 6 Einheiten, max. 12 Teilnehmer:innen.",
      },
      { property: "og:url", content: "/kurse/anfaengerkurs" }
    ],
    links: [{ rel: "canonical", href: "/kurse/anfaengerkurs" }],
  }),
  component: AnfaengerPage,
});

function AnfaengerPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Yoga Anfängerkurs",
          description:
            "Geschlossener Anfängerkurs in 6 Einheiten – sanfter Einstieg ins Yoga ohne Vorkenntnisse, in Stuttgart-Steinhaldenfeld.",
          path: "/kurse/anfaengerkurs",
          about: ["Yoga für Anfänger", "Vinyasa Yoga", "Atemübungen"],
        })}
      />
      <PageHeader
        eyebrow="Geschlossener Kurs · 6 Einheiten"
        title={<>Yoga Anfängerkurs — Dein sanfter <em>Einstieg</em>.</>}
        lead="Erste Schritte ins Yoga, ohne Vorkenntnisse, in kleinen Gruppen."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[1.1rem] leading-[1.75] text-taupe">
                Du wolltest schon immer einmal Yoga ausprobieren?
                <br />
                Hier findest Du als Neuling einen sanften Einstieg ins Yoga. Du
                lernst die Grundlagen des Yogas kennen, wie Körperhaltungen,
                Atemübungen, Meditation und leichte Flows.
                <br />
                Dabei ist es nicht von Bedeutung, wie beweglich oder
                „sportlich" Du bist.
                <br />
                Es geht darum, die ersten Schritte zu gehen. Und ganz nebenbei
                wird Dein Körper gestärkt, Verspannungen gelöst und Dein Geist
                kommt zur Ruhe.
              </p>
              <p className="mt-6 text-[1.1rem] leading-[1.75] text-taupe">
                Auch Menschen mit Vorkenntnissen sind herzlich willkommen, um
                die Grundlagen zu festigen und die Technik zu verfeinern.
              </p>
              <p className="mt-6 text-[1.1rem] leading-[1.75] text-taupe">
                Wir üben in kleinen Gruppen von maximal 12 TeilnehmerInnen, so
                dass individuell auf Deine Bedürfnisse eingegangen werden kann.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 rounded-md border border-ink/10 bg-sand/50 p-7">
                <p className="font-display text-[1.3rem] text-ink">
                  Neuer Termin folgt.
                </p>
                <p className="mt-3 text-taupe">
                  Melde Dich für den Newsletter an — Du erfährst als Erste:r,
                  wenn der nächste Anfängerkurs startet.
                </p>
                <div className="mt-6">
                  <CTA asChild variant="primary">
                    <Link to="/" hash="newsletter">Zum Newsletter</Link>
                  </CTA>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[26rem]">
            <div className="radius-organic absolute -inset-3 -z-10 bg-sand/70" />
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/class-group.jpg"
                alt="Yogagruppe im Studio in sanfter Stimmung"
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
