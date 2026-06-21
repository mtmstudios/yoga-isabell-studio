import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

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
                Du wolltest schon immer Yoga ausprobieren? Hier findest Du als
                Neuling einen sanften Einstieg — Körperhaltungen, Atemübungen,
                Meditation und leichte Flows. Es ist nicht wichtig, wie
                beweglich oder „sportlich" Du bist. Es geht darum, die ersten
                Schritte zu gehen. Wir üben in kleinen Gruppen von max. 12
                Teilnehmer:innen.
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
              <PhotoPlaceholder
                caption="Anfänger:innen-Gruppe, sanfte Stimmung, Hochformat 4:5"
                aspect="aspect-[4/5]"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
