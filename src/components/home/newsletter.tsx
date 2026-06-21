import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { NewsletterForm } from "@/components/newsletter-form";

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
            <NewsletterForm />
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
