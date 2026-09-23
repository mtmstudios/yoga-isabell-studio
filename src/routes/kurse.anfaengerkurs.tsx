import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
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
    a: "Der geschlossene Anfängerkurs läuft über 5 Einheiten, sodass Du die Grundlagen in Ruhe aufbauen kannst.",
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
    q: "Wann startet der nächste Anfängerkurs in Stuttgart und was kostet er?",
    a: "Der nächste Anfängerkurs läuft montags vom 16.11.2026 bis 14.12.2026, jeweils 17:30–18:45 Uhr, 5 Einheiten für 95 €.",
  },
];

export const Route = createFileRoute("/kurse/anfaengerkurs")({
  head: () => ({
    meta: [
      { title: "Yoga Anfängerkurs — Dein sanfter Einstieg | Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Geschlossener Anfängerkurs in 5 Einheiten. Körperhaltungen, Atemübungen, Meditation und leichte Flows — in kleinen Gruppen.",
      },
      { property: "og:title", content: "Yoga Anfängerkurs — Dein sanfter Einstieg" },
      {
        property: "og:description",
        content: "Sanfter Einstieg ins Yoga — 5 Einheiten, max. 12 Teilnehmer:innen.",
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
            "Geschlossener Anfängerkurs in 5 Einheiten – sanfter Einstieg ins Yoga ohne Vorkenntnisse, in Stuttgart-Steinhaldenfeld.",
          path: "/kurse/anfaengerkurs",
          about: ["Yoga für Anfänger", "Vinyasa Yoga", "Atemübungen"],
        })}
      />
      <PageHeader
        eyebrow="Geschlossener Kurs · 5 Einheiten"
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
                Wir üben in kleinen Gruppen von maximal 12 Teilnehmer:innen, so
                dass individuell auf Deine Bedürfnisse eingegangen werden kann.
              </p>
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

      <Section bg="bone">
        <Reveal>
          <div className="mx-auto max-w-[34rem] rounded-md border border-ink/10 bg-sand/60 p-7">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
              Nächster Termin
            </p>
            <p className="mt-3 font-display text-[1.45rem] leading-[1.2] text-ink">
              Montags, 16.11.2026 – 14.12.2026 · 17:30 – 18:45 Uhr
            </p>
            <p className="mt-2 text-taupe">5 Einheiten · 95 €</p>
          </div>
        </Reveal>
      </Section>

      <Faq items={FAQ} bg="sand" />
    </>
  );
}
