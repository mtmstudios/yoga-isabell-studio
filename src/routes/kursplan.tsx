import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export const Route = createFileRoute("/kursplan")({
  head: () => ({
    meta: [
      { title: "Kursplan & Kursbeschreibungen — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Wöchentlicher Kursplan und ausführliche Kursbeschreibungen — Rückenyoga, Vinyasa, Yin, Yoga Sanft. Einstieg jederzeit möglich.",
      },
      { property: "og:title", content: "Kursplan — Yoga mit Isabell" },
      {
        property: "og:description",
        content: "Sechs feste Formate pro Woche in Stuttgart-Steinhaldenfeld.",
      },
    ],
  }),
  component: KursplanPage,
});

type Slot = {
  day: string;
  time: string;
  name: string;
  teacher: string;
  note?: string;
};

const SCHEDULE: Slot[] = [
  { day: "Montag", time: "19:00 – 20:15", name: "Rückenyoga", teacher: "Isabell" },
  { day: "Mittwoch", time: "18:30 – 19:45", name: "Vinyasa für Fortgeschrittene", teacher: "Isabell" },
  { day: "Mittwoch", time: "20:00 – 21:15", name: "Vinyasa für Anfänger", teacher: "Isabell" },
  { day: "Donnerstag", time: "18:00 – 19:15", name: "Yoga Flow am Abend", teacher: "Isabell" },
  { day: "Donnerstag", time: "18:00 – 19:15", name: "Yin Yoga", teacher: "Lara", note: "1. + 3. Do im Monat" },
  { day: "Donnerstag", time: "n. Absprache", name: "Beckenboden Yoga", teacher: "Stephie", note: "1× pro Monat" },
  { day: "Freitag", time: "9:30 – 10:45", name: "Yoga Sanft", teacher: "Isabell" },
];

type Course = {
  name: string;
  text: string;
  badge: string;
};

const COURSES: Course[] = [
  {
    name: "Rückenyoga",
    badge: "Mo · 19:00 – 20:15",
    text: "Im Rückenyoga werden Kraft, Beweglichkeit und innere Balance verbunden. Mit sanften und kraftvollen Asanas werden Rückenmuskulatur und Körpermitte gestärkt und Verspannungen gelöst. Für Anfänger:innen geeignet.",
  },
  {
    name: "Vinyasa für Fortgeschrittene",
    badge: "Mi · 18:30 – 19:45",
    text: "Wir fließen durch klassische und kreative Flows — fließend, kraftvoll, dynamisch, aber auch entspannend. Balance zwischen Bewegung und Stille. Mit Vorkenntnissen.",
  },
  {
    name: "Vinyasa für Anfänger",
    badge: "Mi · 20:00 – 21:15",
    text: "Für Yoga-Neulinge und alle, die ihre Technik verfeinern möchten. Du lernst Grundlagen, Atemübungen und Meditation und tauchst sanft in die Welt des Yoga ein.",
  },
  {
    name: "Yoga Flow am Abend",
    badge: "Do · 18:00 – 19:15",
    text: "Finde am Abend zurück in Deine Mitte — bunter Stilmix, dynamisch fließend bis restorativ. Atemübungen, Meditation, Entspannung. Vorkenntnisse von Vorteil.",
  },
  {
    name: "Yin Yoga",
    badge: "1. + 3. Do · 18:00 – 19:15",
    text: "Langsam, beharrlich, meditativ. Die Muskeln ruhen, gezielte Arbeit mit Faszien, Bindegewebe und Gelenken. Posen mehrere Minuten gehalten, Fokus auf der Atmung. Für alle Level.",
  },
  {
    name: "Yoga Sanft",
    badge: "Fr · 9:30 – 10:45",
    text: "Für alle, die ein sanftes Yoga mögen, auch für Anfänger:innen. Grundlagen der Asanas, Atemübungen, leichte Flows und Entspannung.",
  },
];

function KursplanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wochenplan"
        title={<>Kursplan & <em>Kursbeschreibungen</em>.</>}
        lead="Sechs feste Formate jede Woche, kleine Gruppen mit max. 12 Teilnehmer:innen. Einstieg jederzeit möglich."
      />

      <Section bg="bone">
        <Reveal>
          <Eyebrow>Wochenübersicht</Eyebrow>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {SCHEDULE.map((s, i) => (
            <Reveal key={`${s.day}-${s.name}`} delay={0.04 * i}>
              <div className="grid grid-cols-[7rem_1fr] items-baseline gap-x-6 gap-y-2 py-6 md:grid-cols-[10rem_8rem_1fr_10rem] md:py-7">
                <span className="text-[0.78rem] uppercase tracking-[0.22em] text-clay">
                  {s.day}
                </span>
                <span className="font-display text-[1.2rem] text-ink md:text-[1.35rem]">
                  {s.time}
                </span>
                <span className="col-span-2 font-display text-[1.4rem] leading-[1.2] text-ink md:col-span-1 md:text-[1.6rem]">
                  {s.name}
                  {s.note && (
                    <span className="ml-3 align-middle text-[0.72rem] uppercase tracking-[0.18em] text-taupe/80">
                      · {s.note}
                    </span>
                  )}
                </span>
                <span className="col-span-2 text-[0.85rem] text-taupe md:col-span-1 md:text-right">
                  mit {s.teacher}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[0.85rem] italic text-taupe">
            Einstieg jederzeit möglich.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <CTA asChild variant="primary">
            <Link to="/buchen">
              Hier geht's zum Buchungskalender
            </a>
          </CTA>
        </Reveal>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Eyebrow>Im Detail</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading size="h2" className="mt-6">
            Die Kurse.
          </DisplayHeading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-16 md:gap-y-24">
          {COURSES.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={c.name}
                className={`grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-12 ${
                  flip ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`md:col-span-5 ${flip ? "md:[direction:ltr]" : ""}`}
                >
                  <div className="radius-organic overflow-hidden">
                    <PhotoPlaceholder
                      caption={`Foto: ${c.name}`}
                      aspect="aspect-[4/3]"
                    />
                  </div>
                </div>
                <div
                  className={`md:col-span-7 ${flip ? "md:[direction:ltr]" : ""} ${
                    flip ? "md:pr-8" : "md:pl-4"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 rounded-pill border border-ink/15 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-ink/70">
                    <span aria-hidden className="h-1 w-1 rotate-45 bg-clay" />
                    {c.badge}
                  </span>
                  <h3 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.1] text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-5 max-w-[36rem] text-[1.02rem] leading-[1.7] text-taupe">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
