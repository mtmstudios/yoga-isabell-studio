import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";

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
                Klangschalen, Gongs und sanfte Vibrationen schaffen einen Raum
                der Tiefenentspannung — wie eine Massage für die Seele. Bring
                gern Decke und Kissen mit, trage warme, bequeme Kleidung.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12 rounded-md border border-ink/10 bg-sand/50 p-7">
                <p className="font-display text-[1.3rem] text-ink">
                  Neuer Termin folgt.
                </p>
                <p className="mt-3 text-taupe">
                  Melde Dich für den Newsletter an, wenn Du beim nächsten Soundbath dabei sein möchtest.
                </p>
                <div className="mt-6">
                  <CTA asChild variant="primary">
                    <Link to="/" hash="newsletter">Zum Newsletter</Link>
                  </CTA>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
