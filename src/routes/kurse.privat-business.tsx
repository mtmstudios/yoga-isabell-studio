import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { AiImageNotice } from "@/components/ai-image-notice";
import { JsonLd } from "@/components/json-ld";
import { courseSchema } from "@/lib/site";

const FAQ = [
  {
    q: "Für wen eignet sich eine Privatstunde?",
    a: "Für alle. Zum Schnuppern, zum Verfeinern Deiner Technik als Fortgeschrittene:r oder einfach, um Dir etwas Besonderes zu gönnen.",
  },
  {
    q: "Was kostet eine Privatstunde?",
    a: "Da ich die Stunde individuell auf Dich abstimme, erstelle ich Dir gern ein Angebot auf Anfrage.",
  },
  {
    q: "Bietet Ihr auch Business Yoga für Unternehmen an?",
    a: "Ja. Gerne komme ich für Business Yoga in Dein Unternehmen in Stuttgart und Umgebung – als Mitarbeiterbenefit und für mehr Gesundheit im Team.",
  },
  {
    q: "Habt Ihr Referenzen für Business Yoga?",
    a: "Ja, u. a. der Gesundheitstag 2024 der Mercedes-Benz Customer Solutions GmbH und „Yoga in der Mittagspause“ bei der Bewährungs- und Gerichtshilfe Stuttgart.",
  },
];

export const Route = createFileRoute("/kurse/privat-business")({
  head: () => ({
    meta: [
      { title: "Privatstunde & Business Yoga — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Yoga ganz privat oder im Unternehmen — Privatstunden für Dich allein und Business-Yoga für Dein Team in Stuttgart.",
      },
      { property: "og:title", content: "Privatstunde & Business Yoga" },
      {
        property: "og:description",
        content: "Privatstunden und Business Yoga mit Isabell Thieleke.",
      },
      { property: "og:url", content: "/kurse/privat-business" }
    ],
    links: [{ rel: "canonical", href: "/kurse/privat-business" }],
  }),
  component: PrivatBusinessPage,
});

function PrivatBusinessPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Privatstunde & Business Yoga",
          description:
            "Yoga ganz privat (Einzelstunden) oder im Unternehmen (Business Yoga) in Stuttgart – individuell abgestimmt mit Isabell Thieleke.",
          path: "/kurse/privat-business",
          about: ["Privatstunde Yoga", "Business Yoga", "Firmenyoga Stuttgart"],
        })}
      />
      <PageHeader
        eyebrow="Privat · Unternehmen"
        title={<>Privatstunde & <em>Business Yoga</em>.</>}
        lead="Yoga in Deinem Tempo — allein, zu zweit oder mit Deinem Team."
      />

      {/* Privatstunde */}
      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[28rem]">
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/isabell-assist.jpg"
                alt="Isabell assistiert einer Schülerin in einer Yoga-Haltung"
                aspect="aspect-[4/5]"
              />
            </div>
            <AiImageNotice />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                Privatstunde
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.1] text-ink">
                Ganz für <em>Dich</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Du möchtest ganz privat ins Yoga schnuppern, Deine Technik
                verfeinern oder Dir etwas Besonderes gönnen? Sprich mich
                gerne an.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-[0.9rem] italic text-taupe/80">
                Preis auf Anfrage.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-8">
              <CTA asChild variant="primary">
                <Link to="/kontakt">Anfrage stellen</Link>
              </CTA>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Business Yoga */}
      <Section bg="sand">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                Business Yoga
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.1] text-ink">
                Yoga für <em>Dein Team</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Kombiniere Mitarbeiterbenefits und Gesundheit — gerne komme
                ich in Dein Unternehmen.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe/70">
                  Referenzen
                </p>
                <ul className="mt-4 space-y-3 text-taupe">
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-clay/60" />
                    <span>
                      Mercedes-Benz Customer Solutions GmbH
                      <span className="block text-[0.85rem] text-taupe/70">
                        Gesundheitstag 2024
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-clay/60" />
                    <span>
                      Bewährungs- und Gerichtshilfe Stuttgart
                      <span className="block text-[0.85rem] text-taupe/70">
                        Yoga in der Mittagspause
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="mt-10">
              <CTA asChild variant="primary">
                <Link to="/kontakt">Unverbindlich anfragen</Link>
              </CTA>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[28rem]">
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/business-yoga.jpg"
                alt="Business Yoga — Team in entspannter Seitdehnung im Büro"
                aspect="aspect-[4/5]"
              />
            </div>
            <AiImageNotice />
          </Reveal>
        </div>
      </Section>

      <Faq items={FAQ} bg="bone" />
    </>
  );
}
