import { createFileRoute } from "@tanstack/react-router";
import { DisplayHeading } from "@/components/display-heading";
import { Eyebrow } from "@/components/eyebrow";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yoga mit Isabell — Vinyasa Yoga in Stuttgart" },
      {
        name: "description",
        content:
          "Klein & fein: Vinyasa Yoga in Stuttgart-Steinhaldenfeld. Max. 12 Teilnehmer:innen, ganzheitlich begleitet von Isabell Thieleke.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Placeholder hero — Phase 2 replaces this. Kept so we can preview header + footer. */}
      <Section bg="bone" className="pt-40 lg:pt-48">
        <Reveal>
          <Eyebrow>Phase 1 · Gerüst</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading className="mt-6 max-w-[18ch]">
            Header, Footer & <em>Bausteine</em> bereit.
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-taupe leading-[1.65]">
            Lenis läuft, die Reveal-Komponente staffelt sanft, die Typografie atmet.
            Scroll runter, um Header-Transition und Footer zu sehen — der Hero kommt in Phase 2.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <CTA variant="primary">Stunde buchen</CTA>
            <CTA variant="ghost">Kurse ansehen</CTA>
            <CTA variant="link">Über mich</CTA>
          </div>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Eyebrow tone="sage">Sektion · Sand</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading size="h2" className="mt-6 max-w-[20ch]">
            Eine zweite Fläche in <em>warmem Sand</em>, ruhig und großzügig.
          </DisplayHeading>
        </Reveal>
      </Section>

      <Section bg="ink">
        <Reveal>
          <Eyebrow tone="bone">Sektion · Espresso</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading
            size="h2"
            className="mt-6 max-w-[20ch] !text-bone-soft"
          >
            Dunkle Sektionen sind <em>warmes Espresso</em> — nie reines Schwarz.
          </DisplayHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-[1.65] text-bone-muted">
            Body-Text auf dunklen Flächen läuft in einem gedämpften Bone, damit nichts grell wirkt.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
