import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

import { CTA } from "@/components/cta";
import { Faq } from "@/components/faq";

const FAQ = [
  {
    q: "Was kostet eine Probestunde?",
    a: "Die Probestunde kostet 10 €. So kannst Du in Ruhe ausprobieren, ob es für Dich passt.",
  },
  {
    q: "Wie lange sind die Karten gültig?",
    a: "Die 10er-Karte ist 6 Monate gültig, die 5er-Karte 3 Monate.",
  },
  {
    q: "Kann ich mit Wellhub teilnehmen?",
    a: "Ja, Yoga mit Isabell ist Partner von Wellhub.",
  },
  {
    q: "Wie kann ich bezahlen?",
    a: "Überweisung oder in bar vor Ort.",
  },
  {
    q: "Gibt es Gutscheine?",
    a: "Ja, einen Yoga-Gutschein über jeden beliebigen Betrag – eine schöne kleine Auszeit zum Verschenken.",
  },
];

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Probestunde, Einzelstunde, 10er- und 5er-Karte, Privatstunde und Gutscheine. Partner von Wellhub.",
      },
      { property: "og:title", content: "Preise — Yoga mit Isabell" },
      {
        property: "og:description",
        content: "Faire, einfache Preise für offene Kurse und Privatstunden.",
      },
      { property: "og:url", content: "/preise" }
    ],
    links: [{ rel: "canonical", href: "/preise" }],
  }),
  component: PreisePage,
});

type Row = { name: string; meta?: string; price: string };

const OPEN_CLASSES: Row[] = [
  { name: "Probestunde", price: "10 €" },
  { name: "Einzelstunde", price: "15 €" },
  { name: "10er-Karte", meta: "6 Monate gültig", price: "130 €" },
  { name: "5er-Karte", meta: "3 Monate gültig", price: "70 €" },
];

function PriceList({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <Reveal>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.015em] text-ink">
          {title}
        </h2>
      </Reveal>
      <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        {rows.map((r, i) => (
          <Reveal key={r.name} delay={0.05 * i} as="div">
            <li className="flex items-baseline justify-between gap-6 py-6">
              <div>
                <p className="font-display text-[1.3rem] leading-[1.2] text-ink md:text-[1.45rem]">
                  {r.name}
                </p>
                {r.meta && (
                  <p className="mt-1 text-[0.85rem] text-taupe">{r.meta}</p>
                )}
              </div>
              <span className="font-display text-[1.4rem] text-clay md:text-[1.6rem]">
                {r.price}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

function PreisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Klar & fair"
        title={<><em>Preise</em>.</>}
        lead="Einfache Karten für offene Kurse, individuelle Privatstunden und Gutscheine."
      />

      <Section bg="bone">
        <div className="mx-auto max-w-[42rem]">
          <PriceList title="Offene Kurse" rows={OPEN_CLASSES} />

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-md border border-ink/10 bg-sand/40 p-7">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                Privatstunde
              </p>
              <p className="mt-3 font-display text-[1.4rem] text-ink">
                Auf Anfrage
              </p>
              <p className="mt-2 text-taupe">
                Eins zu eins, in Deinem Tempo. Schreib mir gerne über das
                Kontaktformular.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                  Yoga-Gutschein
                </p>
                <p className="mt-3 text-taupe">
                  Jeder Betrag möglich. Eine kleine Auszeit zum Verschenken.
                </p>
              </div>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                  Zahlung
                </p>
                <p className="mt-3 text-taupe">
                  Überweisung oder in bar vor Ort.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-12 inline-flex items-center gap-3 rounded-pill border border-ink/15 px-4 py-2 text-[0.78rem] uppercase tracking-[0.22em] text-ink/70">
              <span aria-hidden className="h-1 w-1 rotate-45 bg-clay" />
              Partner von Wellhub
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-12">
            <CTA asChild variant="primary">
              <Link to="/kontakt">Schreib mir</Link>
            </CTA>
          </Reveal>
        </div>
      </Section>

      <Faq items={FAQ} bg="sand" />
    </>
  );
}
