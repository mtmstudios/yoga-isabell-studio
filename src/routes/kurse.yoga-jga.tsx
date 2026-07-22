import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { AiImageNotice } from "@/components/ai-image-notice";
import { LotusOutline } from "@/components/lotus-mark";

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
              <Photo
                src="/images/yoga-jga.jpg"
                alt="Lachende Frauen-Gruppe beim Yoga draußen in der Natur — Yoga-JGA mit Isabell"
                aspect="aspect-[4/5]"
              />
            </div>
            <AiImageNotice />
          </Reveal>
        </div>
      </Section>

      <Section bg="ink" className="relative overflow-hidden text-bone-soft">
        <LotusOutline
          size={460}
          className="pointer-events-none absolute -left-24 -bottom-20 text-bone/10"
        />
        <LotusOutline
          size={340}
          className="pointer-events-none absolute -right-16 -top-10 text-bone/[0.07]"
        />

        <div className="relative mx-auto max-w-[52rem] text-center">
          <Reveal>
            <span aria-hidden className="mx-auto block h-px w-16 bg-bone/30" />
          </Reveal>
          <Reveal delay={0.15} y={32}>
            <blockquote className="mt-10 font-display text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.15] tracking-[-0.012em] text-bone [font-variation-settings:'SOFT'_100,'opsz'_144] [text-wrap:balance]">
              <span className="text-clay">„</span>
              Mit ganz viel Liebe, Achtsamkeit und Blick fürs Detail hat Isabell für meine Freundinnen und mich für einen besonderen Anlass eine ganz besondere Yogastunde vorbereitet. Ganz herzlichen Dank dafür!
              <span className="text-clay">"</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-bone/25" />
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-bone-muted/70">
                JGA-Teilnehmerin
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      <Faq items={FAQ} bg="sand" />
    </>
  );
}
