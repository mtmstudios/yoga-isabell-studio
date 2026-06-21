import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { CTA } from "@/components/cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export function Retreat() {
  return (
    <section
      id="retreat"
      className="relative section-y overflow-hidden bg-ink"
      data-surface="ink"
    >
      {/* Background photo (full-bleed placeholder) */}
      <div className="absolute inset-0">
        <PhotoPlaceholder
          caption="Schwarzwald, Nebelmorgen über Tannen, Querformat 16:9"
          aspect="h-full"
          className="!aspect-auto h-full opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="container-editorial relative">
        <div className="max-w-[36rem] text-bone-soft">
          <Reveal>
            <Eyebrow tone="bone">Auszeit</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="h2" className="mt-6 text-bone">
              Yoga Retreat im <em>Schwarzwald</em>.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-[1.05rem] leading-[1.7] text-bone-muted">
              Ein Wochenende Abstand vom Alltag — 23.–25. April 2027.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-9">
            <CTA asChild variant="primary">
              <a href="/retreats">Mehr erfahren</a>
            </CTA>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
