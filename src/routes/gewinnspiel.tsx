import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { LeadForm } from "@/components/lead-form";

export const Route = createFileRoute("/gewinnspiel")({
  head: () => ({
    meta: [
      { title: "Gewinnspiel — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Willkommen! Trage Dich ein und nimm am Gewinnspiel von Yoga mit Isabell teil.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: GewinnspielPage,
});

function GewinnspielPage() {
  return (
    <>
      <PageHeader
        eyebrow="Willkommen"
        title={
          <>
            Heute Biergarten. <em>Morgen Yogamatte.</em>
          </>
        }
        lead={
          <>
            Trage Dich mit wenigen Angaben ein. Wir verlosen unter allen Teilnehmer:innen eine{" "}
            <em className="not-italic text-clay">Yogastunde</em>.
          </>
        }
        leadClassName="text-[1.2rem]"
      />

      <Section bg="bone" className="!pt-10 md:!pt-14">
        <div className="mx-auto grid max-w-[64rem] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>So funktioniert's</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <ol className="mt-6 flex flex-col gap-5 text-ink">
                <Step n={1} title="Formular ausfüllen">
                  Name und E-Mail genügen. Telefon ist optional.
                </Step>
                <Step n={2} title="Teilnahme bestätigen">
                  Kurze Bestätigung zur Datennutzung — mehr braucht es nicht.
                </Step>
                <Step n={3} title="Daumen drücken">
                  Die Gewinner:innen werden nach Ende des Gewinnspiels per
                  E-Mail benachrichtigt.
                </Step>
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-[0.85rem] leading-relaxed text-taupe">
                Teilnahmeberechtigt sind Personen ab 18 Jahren. Der Rechtsweg
                ist ausgeschlossen. Deine Daten werden ausschließlich zur
                Abwicklung des Gewinnspiels verwendet und nicht an Dritte
                weitergegeben. Details in unserer{" "}
                <a href="/datenschutz" className="text-clay underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Eyebrow>Deine Teilnahme</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6">
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-clay/40 font-display text-[0.95rem] text-clay">
        {n}
      </span>
      <div>
        <p className="font-display text-[1.15rem] text-ink">{title}</p>
        <p className="mt-1 text-taupe">{children}</p>
      </div>
    </li>
  );
}
