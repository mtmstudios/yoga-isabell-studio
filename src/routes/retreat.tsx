import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

export const Route = createFileRoute("/retreat")({
  head: () => ({
    meta: [
      { title: "Yoga Retreat im Schwarzwald 2027 — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "23.–25. April 2027 · ein Wochenende Abstand vom Alltag in der Saiger Lounge im Schwarzwald. Mit Alina & Isabell.",
      },
      { property: "og:title", content: "Yoga Retreat im Schwarzwald 2027" },
      {
        property: "og:description",
        content: "Ein Wochenende Abstand vom Alltag, nur 2 Stunden von Stuttgart.",
      },
      { property: "og:url", content: "/retreat" }
    ],
    links: [{ rel: "canonical", href: "/retreat" }],
  }),
  component: RetreatPage,
});

const SCHEDULE = [
  {
    day: "Freitag",
    items: [
      "Ankommen ab Nachmittag · Tee & Begrüßung",
      "Sanfter Eröffnungs-Flow",
      "Gemeinsames Abendessen",
    ],
  },
  {
    day: "Samstag",
    items: [
      "Morgen-Vinyasa & Meditation",
      "Frühstück · freie Zeit / Wanderung",
      "Atemarbeit & regenerierende Praxis",
      "Abendessen & ruhiger Ausklang",
    ],
  },
  {
    day: "Sonntag",
    items: [
      "Sonnen-Flow & Meditation",
      "Frühstück · Abschlusskreis",
      "Sanfte Yin-Praxis zum Abschied",
    ],
  },
];

function RetreatPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Yoga Retreat im Schwarzwald 2027",
          description:
            "Yoga-Retreat-Wochenende im Schwarzwald (Saiger Lounge, nahe Titisee) mit 6 Yoga-Einheiten, Meditation, Atemarbeit und Halbpension.",
          startDate: "2027-04-23",
          endDate: "2027-04-25",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          image: OG_IMAGE,
          location: {
            "@type": "Place",
            name: "Saiger Lounge",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hochschwarzwald (nahe Titisee)",
              addressRegion: "Baden-Württemberg",
              addressCountry: "DE",
            },
          },
          organizer: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#org`,
            name: "Yoga mit Isabell",
            url: `${SITE_URL}/`,
          },
          offers: [
            {
              "@type": "Offer",
              name: "Doppelzimmer",
              price: "578",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/retreat`,
            },
            {
              "@type": "Offer",
              name: "Einzelzimmer",
              price: "697",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/retreat`,
            },
          ],
        }}
      />
      <PageHeader
        eyebrow="Retreat 2027"
        title={<>Yoga Retreat im <em>Schwarzwald</em>.</>}
        lead="Ein Wochenende Abstand vom Alltag · 23. – 25. April 2027."
      />

      {/* Hero photo */}
      <section className="relative h-[60vh] min-h-[26rem] w-full overflow-hidden">
        <Photo
          src="/images/retreat-terrasse.jpg"
          alt="Saiger Lounge im Schwarzwald — Panoramablick über die Hügel"
          aspect="h-full"
          className="!aspect-auto h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="container-editorial absolute inset-x-0 bottom-10 text-bone">
          <Reveal>
            <p className="font-display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.2]">
              Saiger Lounge · 1.020 m · nahe Titisee
            </p>
          </Reveal>
        </div>
      </section>

      <Section bg="bone">
        <Reveal>
          <p className="max-w-[44rem] text-[1.1rem] leading-[1.75] text-taupe">
            Finde mit Alina von „Klein A Yoga" und Isabell in Deine Mitte. Nur
            ~2 Stunden von Stuttgart, mitten im Schwarzwald (Saiger Lounge,
            1.020 m, nahe Titisee).
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 inline-flex items-center gap-3 rounded-pill border border-clay/40 bg-clay/5 px-4 py-2 text-[0.78rem] uppercase tracking-[0.22em] text-clay">
            <span aria-hidden className="h-1 w-1 rotate-45 bg-clay" />
            6. – 8. November 2026 · ausgebucht
          </p>
        </Reveal>
      </Section>

      {/* Was Dich erwartet */}
      <Section bg="sand">
        <Reveal>
          <Eyebrow>Das erwartet Dich</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading size="h2" className="mt-6">
            Drei Tage <em>Yoga</em>.
          </DisplayHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            { title: "6 abwechslungsreiche Yoga-Einheiten", body: "Vinyasa, Breathwork, Music Flow, Thai Yoga Massage & Faceyoga." },
            { title: "Meditation", body: "Geführt und still — täglich morgens und abends." },
            { title: "Atemarbeit", body: "Pranayama als sanfter Anker für Körper und Geist." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i}>
              <h3 className="font-display text-[1.4rem] leading-[1.2] text-ink">
                {b.title}
              </h3>
              <p className="mt-3 text-taupe">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Unterkunft & Verpflegung */}
      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Unterkunft & Umgebung</Eyebrow>
            <p className="mt-6 text-[1.02rem] leading-[1.75] text-taupe">
              Die Saiger Lounge liegt auf 1.020 m, mitten in der Stille des
              Hochschwarzwalds. Wälder, klare Luft, Wege zum Spazieren — und
              ein Haus, das sich anfühlt wie ein langes Ausatmen.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Verpflegung</Eyebrow>
            <p className="mt-6 text-[1.02rem] leading-[1.75] text-taupe">
              Halbpension, vegetarisch / vegan, frisch zubereitet. Eine 24h
              Tee- und Kaffeebar steht Dir zur Verfügung.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Ablauf timeline */}
      <Section bg="sand">
        <Reveal>
          <Eyebrow>Ablauf</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-ink">
            Dein <em>Wochenende</em>.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {SCHEDULE.map((d, i) => (
            <Reveal key={d.day} delay={0.06 * i} as="div">
              <li className="relative border-t border-ink/15 pt-6">
                <span className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                  {d.day}
                </span>
                <ul className="mt-4 space-y-3 text-taupe">
                  {d.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-px w-5 shrink-0 bg-clay/60" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Kosten */}
      <Section bg="ink" className="text-bone-soft">
        <Reveal>
          <Eyebrow tone="bone">Kosten</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-bone">
            Dein <em className="text-clay">Investment</em>.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {[
            { type: "Doppelzimmer", price: "578 €" },
            { type: "Einzelzimmer", price: "697 €" },
          ].map((p, i) => (
            <Reveal key={p.type} delay={0.05 * i}>
              <div className="rounded-md border border-bone/15 p-7">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-bone-muted/80">
                  {p.type}
                </p>
                <p className="mt-3 font-display text-[2.4rem] leading-none text-bone">
                  {p.price}
                </p>
                <p className="mt-3 text-bone-muted">
                  2 Übernachtungen · Halbpension · 6 Yoga-Einheiten · Wellness
                  · Goodie-Bag
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <CTA
            asChild
            className="bg-bone text-clay-deep hover:bg-bone-soft"
          >
            <Link to="/kontakt">Über Kontaktformular buchen</Link>
          </CTA>
        </Reveal>
      </Section>

      {/* Impressionen */}
      <Section bg="bone">
        <Reveal>
          <Eyebrow>Impressionen</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <DisplayHeading size="h2" className="mt-6">
            Die <em>Saiger Lounge</em>.
          </DisplayHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="col-span-2 md:col-span-7">
            <Photo
              src="/images/retreat-haus.jpg"
              alt="Retreat-Haus Saiger Lounge von außen, mitten im Schwarzwald"
              aspect="aspect-[16/10]"
              className="radius-organic"
            />
          </Reveal>
          <Reveal delay={0.05} className="col-span-2 md:col-span-5">
            <Photo
              src="/images/retreat-details.jpg"
              alt="Liebevolles Detail im Retreat-Haus"
              aspect="aspect-[4/5]"
              className="radius-organic"
            />
          </Reveal>
          <Reveal delay={0.1} className="col-span-1 md:col-span-4">
            <Photo
              src="/images/retreat-kamin.jpg"
              alt="Offener Kaminbereich zum Entspannen"
              aspect="aspect-[4/3]"
              className="radius-organic"
            />
          </Reveal>
          <Reveal delay={0.15} className="col-span-1 md:col-span-4">
            <Photo
              src="/images/retreat-kueche.jpg"
              alt="Gemütlicher Essbereich mit vegetarischer Küche"
              aspect="aspect-[4/3]"
              className="radius-organic"
            />
          </Reveal>
          <Reveal delay={0.2} className="col-span-2 md:col-span-4">
            <Photo
              src="/images/retreat-terrasse.jpg"
              alt="Terrasse mit Panoramablick über die Hügel des Schwarzwalds"
              aspect="aspect-[4/3]"
              className="radius-organic"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
