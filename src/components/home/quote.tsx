import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { LotusOutline } from "@/components/lotus-mark";

export function Quote() {
  return (
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
          <span
            aria-hidden
            className="mx-auto block h-px w-16 bg-bone/30"
          />
        </Reveal>
        <Reveal delay={0.15} y={32}>
          <blockquote className="mt-10 font-display text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.12] tracking-[-0.012em] text-bone [font-variation-settings:'SOFT'_100,'opsz'_144] [text-wrap:balance]">
            <span className="text-clay">„</span>
            Der Körper ist der Tempel <em className="text-clay">unserer Seele</em>.
            <span className="text-clay">"</span>
          </blockquote>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <span
              aria-hidden
              className="h-px w-10 bg-bone/25"
            />
            <p className="max-w-[28rem] text-[0.98rem] italic leading-[1.65] text-bone-muted">
              „Nach einem langen Leidensweg habe ich durch Yoga wieder zu mir
              selbst gefunden."
            </p>
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-bone-muted/70">
              Teilnehmerin
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
