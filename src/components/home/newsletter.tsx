import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";

export function Newsletter() {
  return (
    <Section bg="bone" id="newsletter" className="!py-24">
      <div className="mx-auto max-w-[44rem]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12">
          <Reveal>
            <h3 className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.15] text-ink [text-wrap:balance]">
              Erfahre als Erste:r von neuen <em>Kursen</em> & Terminen.
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter-Anmeldung"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-Mail-Adresse
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="deine@email.de"
                className="min-w-0 flex-1 rounded-pill border border-ink/20 bg-bone px-5 py-3 text-[0.95rem] text-ink placeholder:text-taupe/60 outline-none transition-colors focus:border-clay"
                required
              />
              <CTA type="submit" variant="primary" className="shrink-0">
                Anmelden
              </CTA>
            </form>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="mt-5 text-[0.78rem] text-taupe/70">
            Kein Spam. Abmeldung jederzeit möglich.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
