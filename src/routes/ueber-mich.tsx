import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { Photo } from "@/components/photo";
import { JsonLd } from "@/components/json-ld";
import { ISABELL_PERSON } from "@/lib/site";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über Isabell — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Isabell Thieleke — Vinyasa-Yogalehrerin in Stuttgart-Steinhaldenfeld. Meine Geschichte, mein Weg, meine Ausbildungen.",
      },
      { property: "og:title", content: "Ich bin Isabell." },
      {
        property: "og:description",
        content: "Mein Weg ins Yoga und warum mir kleine, persönliche Gruppen so wichtig sind.",
      },
      { property: "og:url", content: "/ueber-mich" }
    ],
    links: [{ rel: "canonical", href: "/ueber-mich" }],
  }),
  component: UeberMichPage,
});

const TIMELINE = [
  { year: "2017", title: "Vinyasa Power Yoga", body: "Ausbildung bei IFAA — der Beginn meines Weges als Lehrerin." },
  { year: "2020", title: "200h Vinyasa Yoga Krama", body: "Zertifiziert nach Yoga Alliance." },
  { year: "2021", title: "Chakra- & Energiearbeit", body: "Energetisches Heilen, das mein Verständnis von Yoga vertieft hat." },
  { year: "2023", title: "Prä- & postnatales Yoga", body: "Yoga für die besonderen Lebensphasen rund um Schwangerschaft und Geburt." },
  { year: "2024", title: "Faszienyoga", body: "Weiterbildung bei IFAA — Faszien als Schlüssel zu Beweglichkeit und Wohlbefinden." },
];

function ChapterHeading({ children }: { children: string }) {
  return (
    <Reveal>
      <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] text-ink">
        {children}
      </h2>
    </Reveal>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <Reveal delay={0.1}>
      <p className="text-[1.05rem] leading-[1.8] text-taupe">{children}</p>
    </Reveal>
  );
}

function UeberMichPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...ISABELL_PERSON }} />
      <PageHeader
        eyebrow="Deine Yogalehrerin"
        title={<>Ich bin <em>Isabell</em>.</>}
        lead="Yogalehrerin, Studio-Inhaberin, Mama von zwei Jungs — und immer noch Schülerin."
      />

      {/* Portrait + intro */}
      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[26rem] lg:sticky lg:top-32">
            <div className="radius-organic absolute -inset-3 -z-10 bg-sand/70" />
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/isabell-ueber-mich.jpg"
                alt="Isabell Thieleke, Yogalehrerin und Studio-Inhaberin"
                aspect="aspect-[4/5]"
                position="object-[50%_25%]"
              />
            </div>
            <span className="script-accent absolute -bottom-4 -right-2 text-[2rem] leading-none">
              Deine Isabell
            </span>
          </Reveal>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <ChapterHeading>Mama mittags im Kopfstand</ChapterHeading>
              <Paragraph>
                Aufgewachsen in einer großen Patchworkfamilie, entdeckte ich
                Yoga während meiner Zeit bei einer Event-Agentur und wusste
                sofort: da will ich tiefer einsteigen. Heute führe ich mein
                eigenes Studio — und für meine zwei Jungs ist es ganz normal,
                dass Mama mittags im Kopfstand fragt: „Hi ihr Zwei – wie war
                die Schule?"
              </Paragraph>
            </div>

            <div className="flex flex-col gap-5">
              <ChapterHeading>Der Körper ist der Tempel unserer Seele</ChapterHeading>
              <Paragraph>
                Dieser Satz begleitet mich. Yoga ist für mich kein
                Workout-Programm, sondern eine Art, gut mit mir selbst
                umzugehen — körperlich, mental, emotional. Genau das möchte ich
                Dir in meinen Stunden mitgeben: einen Ort, an dem Du Dich
                spüren darfst, ohne etwas leisten zu müssen.
              </Paragraph>
            </div>


            <div className="flex flex-col gap-5">
              <ChapterHeading>Inspiration für den Alltag</ChapterHeading>
              <Paragraph>
                Meine Klassen sind kreativ, persönlich und mit viel Liebe zum
                Detail aufgebaut. Ich möchte, dass Du nicht nur entspannt nach
                Hause gehst, sondern auch etwas mitnimmst — ein Bild, einen
                Atem, einen Moment, der Dich durch die Woche trägt.
              </Paragraph>
            </div>

            <div className="flex flex-col gap-5">
              <ChapterHeading>Das schönste Feedback</ChapterHeading>
              <Paragraph>
                „Nach einem langen Leidensweg habe ich durch Yoga wieder zu mir
                selbst gefunden." Wenn ich solche Sätze höre, weiß ich wieder,
                warum ich das mache.
              </Paragraph>
            </div>

            <div className="flex flex-col gap-5">
              <ChapterHeading>Komm vorbei</ChapterHeading>
              <Paragraph>
                Unsere Kurse finden bewusst in kleinen Gruppen statt, damit wir
                jedem individuell gerecht werden können. Komm zum Schnuppern
                vorbei und lass Dich von der Kraft des Yoga überraschen.
              </Paragraph>
              <Paragraph>
                Und wer weiß, vielleicht begrüßt Du dann auch mal jemanden im
                Kopfstand! :-)
              </Paragraph>
              <p className="script-accent mt-2 text-[clamp(1.6rem,2.4vw,2rem)] leading-none">
                Deine Isabell
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="sand">
        <Reveal>
          <Eyebrow>Ausbildungen</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.1] text-ink">
            Mein <em>Weg</em>.
          </h2>
        </Reveal>

        <ol className="relative mt-16 max-w-[42rem]">
          <span
            aria-hidden
            className="absolute left-[7.5rem] top-2 bottom-2 hidden w-px bg-ink/15 sm:block"
          />
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={0.06 * i} as="div">
              <li className="relative grid grid-cols-1 gap-3 py-7 sm:grid-cols-[7rem_1fr] sm:gap-10">
                <span className="font-display text-[1.4rem] text-clay">
                  {t.year}
                </span>
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[2.05rem] top-3 hidden h-2.5 w-2.5 rotate-45 bg-clay sm:block"
                  />
                  <h3 className="font-display text-[1.35rem] leading-[1.2] text-ink">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] text-taupe">{t.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
