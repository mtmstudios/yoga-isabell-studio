import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { ExternalLink, Loader2 } from "lucide-react";

const EVERSPORTS_URL =
  "https://www.eversports.de/org/widget/af46cfd1-5707-4169-bbf6-1037847bafa6?venueId=3cf8ca96-4a54-4de0-88a0-7af7df47b48e";

export const Route = createFileRoute("/buchen")({
  head: () => ({
    meta: [
      { title: "Buchen — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Buche Deine Yoga-Stunde, Probestunde oder Karte direkt online über Eversports.",
      },
      { property: "og:title", content: "Buchen — Yoga mit Isabell" },
      {
        property: "og:description",
        content: "Direkt online buchen über Eversports.",
      },,
      { property: "og:url", content: "/buchen" }
    ],
    links: [{ rel: "canonical", href: "/buchen" }],
  }),
  component: BuchenPage,
});

function BuchenPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Buchung"
        title={<>Buche Deinen <em>Platz</em>.</>}
        lead="Probestunde, Einzelstunde oder Karte — alles bequem online über Eversports."
      />

      <Section bg="bone">
        <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.95rem] text-taupe">
            Das Buchungsfenster wird sicher von Eversports geladen.
          </p>
          <CTA asChild variant="ghost" size="sm">
            <a href={EVERSPORTS_URL} target="_blank" rel="noreferrer">
              In neuem Tab öffnen
              <ExternalLink size={14} strokeWidth={1.4} />
            </a>
          </CTA>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-md border border-ink/10 bg-sand/40">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-sand/60 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-taupe">
                  <Loader2 size={18} className="animate-spin text-clay" />
                  <span className="text-[0.85rem] uppercase tracking-[0.22em]">
                    Buchung wird geladen…
                  </span>
                </div>
              </div>
            )}
            <iframe
              src={EVERSPORTS_URL}
              title="Eversports Buchung — Yoga mit Isabell"
              className="block h-[min(82vh,1100px)] w-full border-0"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              allow="payment"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
