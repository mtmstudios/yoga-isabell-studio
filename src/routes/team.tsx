import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Unser Team — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Lerne unser Team kennen: Stephie, Lara, Adrian, Svenja, Sina und Lena unterstützen Isabell im Studio.",
      },
      { property: "og:title", content: "Unser Team" },
      {
        property: "og:description",
        content: "Die Menschen hinter Yoga mit Isabell.",
      },
      { property: "og:url", content: "/team" }
    ],
    links: [{ rel: "canonical", href: "/team" }],
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
  photo: string;
};

const TEAM: Member[] = [
  {
    name: "Stephie",
    role: "Yoga Flow am Abend · Beckenboden Yoga",
    bio: "Stephie bringt Achtsamkeit und Tiefe in jede Stunde, mit einem feinen Gespür für den weiblichen Körper.",
    quote: '„Dein Beckenboden darf weich und stark zugleich sein."',
    grid: "md:col-span-5 md:row-span-2",
    aspect: "aspect-[4/5]",
    photo: "/images/team-stephie.jpg",
  },
  {
    name: "Lara",
    role: "Rückenyoga",
    bio: "Lara unterrichtet mit Klarheit und einem feinen Blick für den Rücken — präzise, achtsam, kraftvoll.",
    quote: '„Ein starker Rücken trägt Dich durchs Leben."',
    grid: "md:col-span-4",
    aspect: "aspect-[5/4]",
    photo: "/images/team-lara.jpg",
  },
  {
    name: "Adrian",
    role: "Yang & Yin Yoga · Vertretung",
    bio: "Adrian verbindet kraftvolle Yang-Flows mit ruhigen Yin-Sequenzen.",
    quote: '„Bewegung ist Gebet."',
    grid: "md:col-span-3",
    aspect: "aspect-[3/4]",
    photo: "/images/team-adrian.jpg",
  },
  {
    name: "Svenja",
    role: "Kinderyoga",
    bio: "Mit Svenja entdecken schon die Kleinen die Freude an Bewegung, Atem und gemeinsamen Geschichten.",
    quote: '„Kinder kennen ihren Körper noch — wir dürfen wieder lernen."',
    grid: "md:col-span-4",
    aspect: "aspect-[4/5]",
    photo: "/images/team-svenja.jpg",
  },
  {
    name: "Sina",
    role: "Coach",
    bio: "Sina begleitet Menschen als Coach auf ihrem Weg — mit Kreativität, Klarheit und einem offenen Ohr.",
    quote: '„Atme, was Du brauchst."',
    grid: "md:col-span-4",
    aspect: "aspect-[4/5]",
    photo: "/images/team-sina.jpg",
  },
  {
    name: "Lena",
    role: "Vertretung",
    bio: "Lena springt mit Herz und Erfahrung ein — verlässlich, warm und mit einem feinen Gespür für die Gruppe.",
    quote: '„Ich liebe es, Menschen zurück in ihren Körper zu begleiten."',
    grid: "md:col-span-12 lg:col-span-8",
    aspect: "aspect-[16/9]",
    photo: "/images/team-lena.jpg",
  },
];

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <Reveal delay={0.05 * i} className={`group relative flex flex-col ${m.grid}`}>
      <div className="relative overflow-hidden radius-organic">
        <div className="transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
          <Photo
            src={m.photo}
            alt={`${m.name} — Yogalehrer:in bei Yoga mit Isabell`}
            aspect={m.aspect}
          />
        </div>
        {/* Quote overlay on hover */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/95 via-ink/70 to-ink/20 p-6 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
          <p className="font-display text-[1.15rem] leading-[1.35] text-bone [text-shadow:0_1px_12px_rgba(0,0,0,0.55)] [text-wrap:balance]">
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
        lead="Sechs Menschen, ein Studio. Jede:r mit eigener Handschrift."
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
