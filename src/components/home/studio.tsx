import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { Photo } from "@/components/photo";
import { MapEmbed } from "@/components/map-embed";
import { MapPin } from "lucide-react";

export function Studio() {
  return (
    <Section bg="sand" id="studio">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Dein Ort zum Ankommen</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="h2" className="mt-6">
              Das <em>Studio</em>.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-[36rem] text-[1.05rem] leading-[1.75] text-taupe">
              Meine Kurse finden im Bürger- und Siedlerhaus (1. Stock),
              Zuckerbergstraße 99, Stuttgart-Steinhaldenfeld statt — in einem
              ruhigen Wohngebiet. Kostenfreie Parkplätze in den umliegenden
              Straßen, U-Bahn & Bus „Steinhaldenfeld" nur wenige Meter entfernt.
              Das Studio öffnet 15 Minuten vor Kursbeginn.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-start gap-3 text-[0.95rem] text-ink/80">
              <MapPin
                size={18}
                strokeWidth={1.4}
                className="mt-0.5 shrink-0 text-clay"
              />
              <span>
                Bürger- und Siedlerhaus, 1. Stock
                <br />
                Zuckerbergstraße 99 · 70378 Stuttgart-Steinhaldenfeld
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="grid grid-cols-2 gap-5">
          <div className="radius-organic overflow-hidden">
            <Photo
              src="/images/studio-1.jpg"
              alt="Der Yogaraum im Bürger- und Siedlerhaus mit Bogenfenstern"
              aspect="aspect-[3/4]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <MapEmbed className="aspect-[4/3] w-full" />
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/studio-2.jpg"
                alt="Isabell beim Yoga im hellen Studio"
                aspect="aspect-square"
                position="object-[35%_50%]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
