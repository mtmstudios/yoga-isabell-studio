import { type ReactNode } from "react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { Eyebrow } from "./eyebrow";
import { DisplayHeading } from "./display-heading";
import { JsonLd } from "./json-ld";

export type FaqItem = { q: string; a: string };

/**
 * Sichtbare FAQ + FAQPage-JSON-LD. Strukturierte Q&A ist der wichtigste Hebel
 * für GEO (Antworten in ChatGPT, Perplexity, Google AI Overviews).
 */
export function Faq({
  items,
  eyebrow = "Häufige Fragen",
  title,
  bg = "bone",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: ReactNode;
  bg?: "bone" | "sand" | "ink";
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <Section bg={bg} id="faq">
      <JsonLd data={schema} />
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="h2" className="mt-6">
              {title ?? (
                <>
                  Gut zu <em>wissen</em>.
                </>
              )}
            </DisplayHeading>
          </Reveal>
        </div>

        <ul className="flex flex-col">
          {items.map((it, i) => (
            <Reveal
              key={it.q}
              delay={0.04 * i}
              as="li"
              className="border-b border-line"
            >
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[1.15rem] leading-[1.35] text-ink [text-wrap:balance]">
                    {it.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-[1.4rem] leading-none text-clay transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[44rem] text-[1rem] leading-[1.7] text-taupe">
                  {it.a}
                </p>
              </details>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
