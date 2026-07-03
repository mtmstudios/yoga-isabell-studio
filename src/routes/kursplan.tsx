import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { ExternalLink, Loader2 } from "lucide-react";

const EVERSPORTS_URL =
  "https://www.eversports.de/org/widget/af46cfd1-5707-4169-bbf6-1037847bafa6?venueId=3cf8ca96-4a54-4de0-88a0-7af7df47b48e";


const FAQ = [
  {
    q: "Muss ich mich für die offenen Stunden anmelden?",
    a: "Bitte buche Deinen Platz über meinen Buchungskalender Eversports. Die Gruppen sind klein (max. 12 Personen), daher lohnt sich frühzeitiges Reservieren.",
  },
  {
    q: "Kann ich jederzeit in einen Kurs einsteigen?",
    a: "Ja. Bei den offenen Stunden ist der Einstieg jederzeit möglich, ganz ohne festen Kursbeginn.",
  },
  {
    q: "Welcher Kurs passt für Anfänger:innen?",
    a: "Vinyasa Yoga für Anfänger, Yoga Sanft und Rückenyoga eignen sich gut für den Einstieg. Für einen strukturierten Start gibt es zusätzlich den geschlossenen Anfängerkurs.",
  },
  {
    q: "Was ist der Unterschied zwischen Vinyasa und Yin Yoga?",
    a: "Vinyasa ist fließend, kraftvoll und dynamisch. Yin Yoga ist langsam und meditativ – die Posen werden mehrere Minuten gehalten, um gezielt mit Faszien und Bindegewebe zu arbeiten.",
  },
  {
    q: "Wo finden die Kurse statt?",
    a: "Im Studio im Bürger- und Siedlerhaus, Zuckerbergstraße 99, Stuttgart-Steinhaldenfeld. Das Studio öffnet 15 Minuten vor Kursbeginn.",
  },
];

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
        content: "Fünf feste Formate pro Woche in Stuttgart-Steinhaldenfeld.",
      },
      { property: "og:url", content: "/kursplan" }
    ],
    links: [{ rel: "canonical", href: "/kursplan" }],
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
  { day: "Montag", time: "19:00 – 20:15", name: "Rückenyoga", teacher: "Lara" },
  { day: "Mittwoch", time: "18:30 – 19:45", name: "Vinyasa Yoga für Fortgeschrittene", teacher: "Isabell" },
  { day: "Mittwoch", time: "20:00 – 21:15", name: "Vinyasa Yoga für Anfänger", teacher: "Isabell" },
  { day: "Donnerstag", time: "18:00 – 19:15", name: "Yoga Flow am Abend", teacher: "Stephie" },
  { day: "Donnerstag", time: "18:00 – 19:15", name: "Yin Yoga", teacher: "Stephie", note: "1. + 3. Do im Monat" },
  { day: "Freitag", time: "9:30 – 10:45", name: "Yoga Sanft", teacher: "Isabell" },
];

type Course = {
  name: string;
  text: string;
  badge: string;
  photo: string;
};

const COURSES: Course[] = [
  {
    name: "Rückenyoga",
    badge: "Mo · 19:00 – 20:15",
    photo: "/images/isabell-updog.jpg",
    text: "Im Rückenyoga werden Kraft, Beweglichkeit und innere Balance verbunden. Mit sanften und kraftvollen Asanas werden Rückenmuskulatur und Körpermitte gestärkt und Verspannungen gelöst. Für Anfänger:innen geeignet.",
  },
  {
    name: "Vinyasa Yoga für Fortgeschrittene",
    badge: "Mi · 18:30 – 19:45",
    photo: "/images/isabell-warrior.jpg",
    text: "Wir fließen durch klassische und kreative Flows — fließend, kraftvoll und dynamisch, aber auch entspannend. Wir suchen die Balance zwischen Bewegung und Stille. Geeignet für alle mit Vorkenntnissen.",
  },
  {
    name: "Vinyasa Yoga für Anfänger",
    badge: "Mi · 20:00 – 21:15",
    photo: "/images/class-namaste.jpg",
    text: "Für Yoga-Neulinge und alle, die ihre Technik verfeinern möchten. Du lernst Grundlagen, Atemübungen und Meditation und tauchst sanft in die Welt des Yoga ein.",
  },
  {
    name: "Yoga Flow am Abend",
    badge: "Do · 18:00 – 19:15",
    photo: "/images/isabell-forwardbend.jpg",
    text: "Finde am Abend zurück in Deine Mitte — bunter Stilmix, dynamisch fließend bis restorativ. Atemübungen, Meditation, Entspannung. Vorkenntnisse von Vorteil.",
  },
  {
    name: "Yin Yoga",
    badge: "1. + 3. Do · 18:00 – 19:15",
    photo: "/images/isabell-seated.jpg",
    text: "Langsam, beharrlich, meditativ. Die Muskeln ruhen dabei völlig, damit die gezielte Arbeit mit dem Fasziensystem, dem Bindegewebe und den Gelenken möglich ist. Die einzelnen Posen werden mehrere Minuten lang gehalten, während der Fokus auf der Atmung liegt. Für alle Level geeignet.",
  },
  {
    name: "Yoga Sanft",
    badge: "Fr · 9:30 – 10:45",
    photo: "/images/pose-1.jpg",
    text: "Für alle, die ein sanftes Yoga mögen, auch für Anfänger:innen geeignet. Hier lernst Du die Grundlagen der Asanas, Atemübungen, leichte Flows und natürlich Entspannung. Für alle Level geeignet.",
  },
];

function KursplanPage() {
  const [loaded, setLoaded] = useState(false);
  return (

    <>
      <PageHeader
        eyebrow="Wochenplan"
        title={<>Kursplan & <em>Kursbeschreibungen</em>.</>}
        lead="Fünf feste Formate jede Woche, kleine Gruppen mit max. 12 Teilnehmer:innen. Einstieg jederzeit möglich."
      />

      <Section bg="bone" className="!pt-10 md:!pt-14">

        <Reveal className="mb-4 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Online Buchen</Eyebrow>
            <DisplayHeading size="h2" className="mt-2">
              Kursplan <em>live</em>.
            </DisplayHeading>
          </div>
          <CTA asChild variant="ghost" size="sm">
            <a href={EVERSPORTS_URL} target="_blank" rel="noreferrer">
              In neuem Tab öffnen
              <ExternalLink size={14} strokeWidth={1.4} />
            </a>
          </CTA>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-md border border-ink/10 bg-bone/40">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-bone/60 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-taupe">
                  <Loader2 size={18} className="animate-spin text-clay" />
                  <span className="text-[0.85rem] uppercase tracking-[0.22em]">
                    Kursplan wird geladen…
                  </span>
                </div>
              </div>
            )}
            <iframe
              src={EVERSPORTS_URL}
              title="Eversports Kursplan — Yoga mit Isabell"
              className="block h-[min(82vh,1100px)] w-full border-0"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              allow="payment"
            />
          </div>
        </Reveal>
      </Section>

      <Section bg="sand">
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
            </Link>
          </CTA>
        </Reveal>
      </Section>


      <Section bg="bone">


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
                    <Photo
                      src={c.photo}
                      alt={c.name}
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

      <Faq items={FAQ} bg="bone" />
    </>
  );
}
