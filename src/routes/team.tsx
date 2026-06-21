import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Unser Team — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Lerne unser Team kennen: Stephie, Lara, Adrian, Svenja, Sina, Steffanie und Lena unterstützen Isabell im Studio.",
      },
      { property: "og:title", content: "Unser Team" },
      {
        property: "og:description",
        content: "Die Menschen hinter Yoga mit Isabell.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  bio: string;
  quote: string;
  /** Asymmetric placement classes for the bento grid. */
  grid: string;
  aspect: string;
};

const TEAM: Member[] = [
  {
    name: "Stephie",
    role: "Pelvic Love · Beckenboden Yoga",
    bio: "Stephie bringt Achtsamkeit und Tiefe in jede Stunde — mit einem feinen Gespür für den weiblichen Körper.",
    quote: '„Dein Beckenboden darf weich und stark zugleich sein."',
    grid: "md:col-span-5 md:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Lara",
    role: "Yin Yoga",
    bio: "Lara liebt das Stille, das Lange, das Leise. Bei ihr darf alles dauern, bis es sich wirklich löst.",
    quote: '„Stillstand ist auch Bewegung."',
    grid: "md:col-span-4",
    aspect: "aspect-[5/4]",
  },
  {
    name: "Adrian",
    role: "Vinyasa & Vertretung",
    bio: "Adrian unterrichtet kraftvolle Flows mit viel Klarheit — präzise Ansagen, freier Atem.",
    quote: '„Bewegung ist Gebet."',
    grid: "md:col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    name: "Svenja",
    role: "Kinderyoga",
    bio: "Mit Svenja entdecken schon die Kleinen die Freude an Bewegung, Atem und gemeinsamen Geschichten.",
    quote: '„Kinder kennen ihren Körper noch — wir dürfen wieder lernen."',
    grid: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Sina",
    role: "Vinyasa & Vertretung",
    bio: "Sina verbindet Kreativität und Klarheit. Ihre Sequenzen fühlen sich wie eine kleine Reise an.",
    quote: '„Atme, was Du brauchst."',
    grid: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    name: "Steffanie",
    role: "Yoga Sanft · Vertretung",
    bio: "Steffanie führt sanft und respektvoll — perfekt für alle, die sanft im Yoga ankommen möchten.",
    quote: '„Sanft heißt nicht weniger — sondern bewusst."',
    grid: "md:col-span-4",
    aspect: "aspect-[5/4]",
  },
  {
    name: "Lena",
    role: "Vertretung & Workshops",
    bio: "Lena springt mit Herz und Erfahrung ein — und bringt regelmäßig neue Workshops ins Studio.",
    quote: '„Ich liebe es, Menschen zurück in ihren Körper zu begleiten."',
    grid: "md:col-span-12 lg:col-span-8",
    aspect: "aspect-[16/9]",
  },
];

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <Reveal delay={0.05 * i} className={`group relative flex flex-col ${m.grid}`}>
      <div className="relative overflow-hidden radius-organic">
        <div className="transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
          <PhotoPlaceholder caption={`Portrait: ${m.name}`} aspect={m.aspect} />
        </div>
        {/* Quote overlay on hover */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-6 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
          <p className="font-display text-[1.05rem] leading-[1.3] text-bone [text-wrap:balance]">
            {m.quote}
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h3 className="font-display text-[1.4rem] leading-[1.1] text-ink">
          {m.name}
        </h3>
        <span className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
          {m.role}
        </span>
        <p className="mt-1 text-[0.95rem] leading-[1.65] text-taupe">{m.bio}</p>
      </div>
    </Reveal>
  );
}

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Yoga mit Herz"
        title={<>Unser <em>Team</em>.</>}
        lead="Sieben Menschen, ein Studio. Jede:r mit eigener Handschrift."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          {TEAM.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
