import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";
import { ArrowUpRight } from "lucide-react";

type Course = {
  name: string;
  blurb: string;
  time: string;
  photo: string;
  alt: string;
  /** Tailwind grid placement for the bento layout. */
  grid: string;
  /** Photo aspect for the card. */
  aspect: string;
};

const COURSES: Course[] = [
  {
    name: "Rückenyoga",
    blurb: "Kraft, & Beweglichkeit für Deinen Rücken, Verspannungen lösen.",
    time: "Mo · 19:00 – 20:15",
    photo: "/images/isabell-updog.jpg",
    alt: "Isabell im heraufschauenden Hund — Arbeit für den Rücken",
    grid: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Vinyasa Yoga für Fortgeschrittene",
    blurb: "Fließend, kraftvoll, dynamisch.",
    time: "Mi · 18:30 – 19:45",
    photo: "/images/isabell-angle.jpg",
    alt: "Isabell im seitlichen Winkel — kraftvoll und konzentriert",
    grid: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    name: "Vinyasa für Anfänger",
    blurb: "Sanft eintauchen in die Welt des Yoga.",
    time: "Mi · 20:00 – 21:15",
    photo: "/images/class-namaste.jpg",
    alt: "Yogagruppe im Namasté, ruhige Atmosphäre",
    grid: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    name: "Yoga Flow am Abend",
    blurb: "Zurück in Deine Mitte, dynamisch bis restorativ.",
    time: "Do · 18:00 – 19:15",
    photo: "/images/isabell-forwardbend.jpg",
    alt: "Isabell in der Vorbeuge im warmen Abendlicht",
    grid: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Yin Yoga",
    blurb: "Langsam, meditativ, tief im Fasziensystem.",
    time: "1. + 3. Do · 18:00 – 19:15",
    photo: "/images/pose-3.jpg",
    alt: "Ruhige, bodennahe Yin-Yoga-Haltung bei gedämpftem Licht",
    grid: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Yoga Sanft",
    blurb: "Sanftes Yoga, für alle Level.",
    time: "Fr · 9:30 – 10:45",
    photo: "/images/pose-1.jpg",
    alt: "Sanfte Yoga-Dehnung im Morgenlicht",
    grid: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
];

function CourseCard({ course, i }: { course: Course; i: number }) {
  return (
    <Reveal
      delay={0.05 * i}
      className={`group relative flex flex-col ${course.grid}`}
    >
      <a
        href="/kursplan"
        className="relative block overflow-hidden radius-organic"
      >
        <div className="transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
          <Photo src={course.photo} alt={course.alt} aspect={course.aspect} />
        </div>
        <span
          aria-hidden
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-bone/85 text-ink opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1"
        >
          <ArrowUpRight size={16} strokeWidth={1.4} />
        </span>
      </a>

      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-[1.4rem] leading-[1.15] text-ink relative inline-block">
            <a href="/kursplan" className="relative inline-block">
              <span className="relative">
                {course.name}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-full origin-right scale-x-0 bg-clay transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100"
                />
              </span>
            </a>
          </h3>
        </div>
        <p className="text-[0.98rem] leading-[1.6] text-taupe">{course.blurb}</p>
        <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-pill border border-ink/15 px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-ink/70">
          <span aria-hidden className="h-1 w-1 rotate-45 bg-clay" />
          {course.time}
        </span>
      </div>
    </Reveal>
  );
}

export function CoursesPreview() {
  return (
    <Section bg="sand" id="kurse">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
        <div>
          <Reveal>
            <Eyebrow>Für mehr Balance & Wohlbefinden</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="h2" className="mt-6">
              Finde Deinen <em>Kurs</em>.
            </DisplayHeading>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="md:text-right">
          <p className="max-w-md text-taupe md:ml-auto">
            Fünf feste Formate, jede Woche — in kleinen Gruppen mit max. 12
            Teilnehmer:innen.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-12 md:gap-8">
        {COURSES.map((c, i) => (
          <CourseCard key={c.name} course={c} i={i} />
        ))}
      </div>

      <Reveal delay={0.1} className="mt-16 flex justify-center">
        <CTA asChild variant="primary">
          <a href="/kursplan">Zum kompletten Kursplan</a>
        </CTA>
      </Reveal>
    </Section>
  );
}
