import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { LotusOutline } from "@/components/lotus-mark";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-clay text-bone section-y">
      <LotusOutline
        size={520}
        className="pointer-events-none absolute -left-24 -bottom-24 text-bone/15"
      />
      <LotusOutline
        size={360}
        className="pointer-events-none absolute -right-12 -top-16 text-bone/10"
      />
      <div className="container-editorial relative">
        <div className="mx-auto max-w-[42rem] text-center">
          <Reveal>
            <p className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.12] tracking-[-0.012em] text-bone [font-variation-settings:'SOFT'_100,'opsz'_144] [text-wrap:balance]">
              Egal ob Anfänger:in oder fortgeschritten — Du bist von{" "}
              <span className="italic">Herzen</span> willkommen.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
            <CTA
              asChild
              className="bg-bone text-clay-deep hover:bg-bone-soft hover:text-clay-deep"
            >
              <a href="https://www.eversports.de" target="_blank" rel="noreferrer">
                Jetzt Probestunde buchen — 10 €
              </a>
            </CTA>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
