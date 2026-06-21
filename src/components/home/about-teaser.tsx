import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { CTA } from "@/components/cta";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export function AboutTeaser() {
  return (
    <Section bg="bone" id="ueber-mich">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="radius-organic absolute -inset-3 -z-10 bg-sand/80" />
          <div className="radius-organic overflow-hidden">
            <PhotoPlaceholder
              caption="Isabell, Portrait im Studio, warmes Seitenlicht, Hochformat 4:5"
              aspect="aspect-[4/5]"
            />
          </div>
          <span className="script-accent absolute -bottom-4 -right-2 text-[2rem] leading-none">
            Isabell
          </span>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Deine Yogalehrerin</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="h2" className="mt-6">
              Ich bin <em>Isabell</em>.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-[34rem] text-[1.05rem] leading-[1.75] text-taupe">
              Aufgewachsen in einer großen Patchworkfamilie, entdeckte ich Yoga
              während meiner Zeit bei einer Event-Agentur und wusste sofort: da
              will ich tiefer einsteigen. Heute führe ich mein eigenes Studio
              — und für meine zwei Jungs ist es ganz normal, dass Mama mittags
              im Kopfstand fragt: „Hi ihr Zwei – wie war die Schule?"
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <CTA asChild variant="ghost">
              <a href="/ueber-mich">Meine Geschichte</a>
            </CTA>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
