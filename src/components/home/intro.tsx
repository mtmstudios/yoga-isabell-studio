import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { Photo } from "@/components/photo";
import { LotusOutline } from "@/components/lotus-mark";

export function Intro() {
  return (
    <Section bg="bone" id="intro" className="relative overflow-hidden">
      <LotusOutline
        size={520}
        className="pointer-events-none absolute -right-32 -top-10 text-clay/10"
      />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Namasté</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="h2" className="mt-6">
              Schön, dass Du <em>da</em> bist.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-[36rem] text-[1.08rem] leading-[1.75] text-taupe">
              Lass uns gemeinsam Deinen Körper, Deinen Geist und Deine Seele in
              Einklang bringen. Von Rückenyoga über kraftvolles Vinyasa bis hin
              zu sanftem Yin Yoga begleiten wir Dich persönlich auf Deinem Weg
              zu mehr Entspannung und Lebensfreude.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-[22rem]">
          <Photo
            src="/images/pose-2.jpg"
            alt="Isabell in einer ruhigen Yoga-Haltung, warmes Naturlicht"
            aspect="aspect-[4/5]"
            className="radius-organic"
          />
        </Reveal>
      </div>
    </Section>
  );
}
