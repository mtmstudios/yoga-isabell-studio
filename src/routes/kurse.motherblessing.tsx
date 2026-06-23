import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";

export const Route = createFileRoute("/kurse/motherblessing")({
  head: () => ({
    meta: [
      { title: "Mother Blessing — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Eine liebevolle Zeremonie für die werdende Mama — die Alternative zur klassischen Babyparty in Stuttgart und Umgebung.",
      },
      { property: "og:title", content: "Mother Blessing" },
      {
        property: "og:description",
        content:
          "Ein altes Ritual, das die werdende Mutter stärkt und positiv auf die Geburt einstimmt.",
      },
      { property: "og:url", content: "/kurse/motherblessing" },
    ],
    links: [{ rel: "canonical", href: "/kurse/motherblessing" }],
  }),
  component: MotherBlessingPage,
});

const RITUALE = [
  {
    title: "Meditation",
    text: "Ein ruhiger, gemeinsamer Moment zum Ankommen und Durchatmen.",
  },
  {
    title: "Erzählkreis",
    text: "Die Herzensmenschen teilen Geschichten und Wünsche für die werdende Mama.",
  },
  {
    title: "Geburtskette",
    text: "Gemeinsam entsteht eine Kette, die die Mama bei der Geburt begleitet.",
  },
  {
    title: "Massage",
    text: "Hände, Füße oder der ganze Körper werden liebevoll von den Teilnehmerinnen verwöhnt.",
  },
  {
    title: "Geburtskerze",
    text: "Eine Kerze, die am Tag der Geburt in Gedanken entzündet wird.",
  },
  {
    title: "Babybauch bemalen",
    text: "Der Bauch wird achtsam und kreativ gemeinsam gestaltet.",
  },
  {
    title: "Blumenkrone",
    text: "Eine Krone aus Blumen für die werdende Mama — als Zeichen ihrer Würde.",
  },
  {
    title: "Gemeinsames Essen",
    text: "Jede bringt etwas mit — geteilte Speisen, geteilte Zeit.",
  },
];

const RAHMEN = [
  {
    k: "Ort",
    v: "An einem geschützten Ort — zum Beispiel zuhause bei der Schwangeren oder in einem schönen Garten in der Natur.",
  },
  {
    k: "Dauer",
    v: "Etwa 2–3 Stunden, ganz nach Euren Vorstellungen anpassbar.",
  },
  { k: "Zeitpunkt", v: "Am schönsten im 3. Trimester." },
  {
    k: "Organisation",
    v: "Meist organisieren die Teilnehmerinnen das Mother Blessing und schenken es der werdenden Mama — als Überraschung oder gemeinsam abgestimmt.",
  },
];

function MotherBlessingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ritual · Zeremonie"
        title={
          <>
            Mother <em>Blessing</em>.
          </>
        }
        lead="Eine liebevolle Alternative zur Babyparty — im Mittelpunkt steht die werdende Mama."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[28rem]">
            <div className="radius-organic absolute -inset-3 -z-10 bg-sand/70" />
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/motherblessing.jpg"
                alt="Werdende Mama mit Blumenkranz bei einer Mother-Blessing-Zeremonie im Garten"
                aspect="aspect-[3/4]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[1.1rem] leading-[1.75] text-taupe">
                Ein Mother Blessing ist ein uraltes Ritual, das sich an der
                heiligen Zeremonie der Navajo orientiert. Nicht das Baby steht
                im Mittelpunkt, sondern die werdende Mutter. Gemeinsam mit ihren
                Herzensmenschen entsteht ein geschützter Raum voller
                Wertschätzung, Verbundenheit und guter Wünsche für die Geburt
                und die Zeit danach.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Mit kleinen Ritualen, achtsamen Momenten und Zeit zum Austausch
                wird das Mother Blessing zu einem Erlebnis, das stärkt, berührt
                und lange in Erinnerung bleibt. Die werdende Mama wird positiv
                auf die Geburt eingestimmt, gestärkt und einfach verwöhnt.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="sand">
        <Reveal>
          <Eyebrow>Mögliche Rituale</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading size="h2" className="mt-6">
            Eure Zeremonie, <em>frei gestaltet</em>.
          </DisplayHeading>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {RITUALE.map((r, i) => (
            <Reveal key={r.title} delay={0.05 * i} as="div">
              <li className="relative pl-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-clay/40 font-display text-[0.85rem] text-clay"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.25rem] leading-[1.2] text-ink">
                  {r.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-[1.65] text-taupe">
                  {r.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Gut zu wissen</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <DisplayHeading size="h2" className="mt-6">
                Ablauf & <em>Rahmen</em>.
              </DisplayHeading>
            </Reveal>
          </div>
          <div className="space-y-7">
            {RAHMEN.map((d, i) => (
              <Reveal key={d.k} delay={0.05 * i}>
                <div className="border-b border-line pb-6">
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                    {d.k}
                  </p>
                  <p className="mt-2 text-[1.02rem] leading-[1.7] text-taupe">
                    {d.v}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <CTA asChild variant="primary">
                <Link to="/kontakt">Individuelles Angebot anfragen</Link>
              </CTA>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
