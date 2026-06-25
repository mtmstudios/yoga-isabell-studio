import type { ReactNode } from "react";
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

import fruehstuecksraumAsset from "@/assets/retreat-gallery/retreat-fruehstuecksraum.jpg.asset.json";
import stammtischAsset from "@/assets/retreat-gallery/retreat-stammtisch.jpg.asset.json";
import zimmerAsset from "@/assets/retreat-gallery/retreat-zimmer.jpg.asset.json";
import yogaChildsposeAsset from "@/assets/retreat-gallery/retreat-yoga-childspose.jpg.asset.json";
import fruehstuecksbuffetAsset from "@/assets/retreat-gallery/retreat-fruehstuecksbuffet.jpg.asset.json";
import essbereichAsset from "@/assets/retreat-gallery/retreat-essbereich-ausblick.jpg.asset.json";
import fensterblickAsset from "@/assets/retreat-gallery/retreat-fensterblick.jpg.asset.json";
import yogaraumAsset from "@/assets/retreat-gallery/retreat-yogaraum.jpg.asset.json";
import kuecheAsset from "@/assets/retreat-gallery/retreat-kueche.jpg.asset.json";
import loungeKaminAsset from "@/assets/retreat-gallery/retreat-lounge-kamin.jpg.asset.json";
import terrassePanoramaAsset from "@/assets/retreat-gallery/retreat-terrasse-panorama.jpg.asset.json";

const GALLERY: { src: string; alt: string }[] = [
  { src: yogaraumAsset.url, alt: "Yoga-Raum mit Panoramafenstern und Matten" },
  { src: fensterblickAsset.url, alt: "Blick aus dem Panoramafenster über die Schwarzwaldhügel" },
  { src: terrassePanoramaAsset.url, alt: "Sonnige Terrasse mit Liegestühlen und weitem Blick über den Schwarzwald" },
  { src: essbereichAsset.url, alt: "Essbereich mit langem Holztisch und Blick ins Tal" },
  { src: zimmerAsset.url, alt: "Helles Zimmer mit Doppelbett und Balkonblick" },
  { src: loungeKaminAsset.url, alt: "Großzügige Lounge mit Kaminbereich und Holzboden" },
  { src: kuecheAsset.url, alt: "Helle, moderne Küche mit Kochinsel und Blick nach draußen" },
  { src: yogaChildsposeAsset.url, alt: "Gruppe in Child's Pose im Yoga-Raum" },
  { src: fruehstuecksraumAsset.url, alt: "Eingedeckter Frühstückstisch mit Buffet im Hintergrund" },
  { src: fruehstuecksbuffetAsset.url, alt: "Frühstücksbuffet mit Käse, Lachs, Müsli und frischem Gemüse" },
  { src: stammtischAsset.url, alt: "Schwarzwälder Stammtisch mit Holzbank und traditionellen Leuchten" },
];

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

const SCHEDULE: { day: string; items: { time?: string; text: ReactNode }[] }[] = [
  {
    day: "Freitag",
    items: [
      { time: "ab 14:30", text: "Individuelle Anreise · lockeres Get-Together bei Kaffee, Tee & Snacks" },
      { time: "17:00", text: <>Vinyasa Yoga <em className="font-display not-italic text-ink">Ankommen & Auftanken</em> mit Isabell (alle Level)</> },
      { time: "18:30", text: "Gemeinsames Abendessen in Buffet-Form" },
      { time: "21:00", text: <><em className="font-display not-italic text-ink">Mondgrüße</em> mit Alina (alle Level, 30 Minuten)</> },
    ],
  },
  {
    day: "Samstag",
    items: [
      { time: "07:15", text: "Opening · Kaffee-, Tee-Bar & Snacks" },
      { time: "08:00", text: <><em className="font-display not-italic text-ink">Vinyasa Yoga meets Breathwork</em> mit Alina (alle Level)</> },
      { time: "09:30", text: "Gemeinsames, ausgiebiges Frühstücksbuffet" },
      { text: "Zeit zur freien Verfügung, um die Umgebung zu erkunden oder Seele baumeln lassen" },
      { time: "16:00", text: <><em className="font-display not-italic text-ink">Yoga Music Flow</em> mit Isabell (für Fortgeschrittene)</> },
      { time: "17:30", text: <><em className="font-display not-italic text-ink">Yoga meets Thai Yoga Massage</em> mit Alina (alle Level)</> },
      { time: "19:00", text: "Gemeinsamer Kochabend (u. a. Summer Rolls)" },
      { text: "Im Anschluss lassen wir den Abend gemeinsam ausklingen" },
    ],
  },
  {
    day: "Sonntag",
    items: [
      { time: "07:15", text: "Opening · Kaffee-, Tee-Bar & Snacks" },
      { time: "08:00", text: <><em className="font-display not-italic text-ink">Flow & Glow — Yoga meets Face Yoga</em> mit Alina & Isabell (alle Level)</> },
      { time: "09:30", text: "Gemeinsames, ausgiebiges Frühstücksbuffet" },
      { time: "13:00", text: "Check-out" },
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
            Finde mit Alina von Klein A Yoga und Isabell in Deine Mitte.
            Nur etwa 2&nbsp;Stunden von Stuttgart entfernt liegt unser
            Retreat-Haus Saiger Lounge mitten im Schwarzwald, umgeben von
            Wald, klarer Luft und einem weiten Blick über die Hügel.
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

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "6 Yoga-Einheiten", body: "Zwei erfahrene Lehrerinnen, ein gemeinsamer Raum." },
            { title: "Vinyasa & ruhige Praxis", body: "Kraftvolle Flows und regenerierende Sequenzen im Wechsel." },
            { title: "Meditation & Atemarbeit", body: "Sanfte Anker für Körper und Geist." },
            { title: "Freie Zeit", body: "Ausreichend Raum zwischen den Sessions." },
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
              Nur 30 Minuten von Freiburg und doch schon im Hochschwarzwald
              auf 1.020 m Höhe — heilklimatischer Luftkurort nahe Titisee,
              ruhig inmitten der Natur, mit Panorama-Blick auf die sanften
              Hügel des Schwarzwalds.
            </p>
            <ul className="mt-6 space-y-2 text-[0.98rem] leading-[1.7] text-taupe">
              {[
                "Moderne Zimmer mit Bad/WC, Föhn, SAT-TV, WLAN",
                "Eigener Balkon oder Terrasse",
                "Offener Kaminbereich",
                "Sauna zur freien Nutzung",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7rem] h-px w-4 shrink-0 bg-clay/60" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Verpflegung</Eyebrow>
            <p className="mt-6 text-[1.02rem] leading-[1.75] text-taupe">
              Halbpension
            </p>
            <ul className="mt-6 space-y-2 text-[0.98rem] leading-[1.7] text-taupe">
              {[
                "Frisch zubereitet",
                "Vegetarisch / vegan",
                "Saisonale Zutaten",
                "24h Tee- und Kaffeebar",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7rem] h-px w-4 shrink-0 bg-clay/60" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
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

        <div className="mt-16 mx-auto max-w-3xl space-y-20">
          {SCHEDULE.map((d, i) => (
            <Reveal key={d.day} delay={0.06 * i} as="div">
              <div className="flex items-baseline gap-6">
                <h3 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] text-ink">
                  {d.day}
                </h3>
                <span aria-hidden className="h-px flex-1 bg-ink/10" />
              </div>
              <ul className="mt-8 divide-y divide-ink/10">
                {d.items.map((it, j) => (
                  <li
                    key={`${it.time ?? "x"}-${j}`}
                    className="grid grid-cols-[5rem_1fr] gap-6 py-4 text-taupe sm:grid-cols-[6rem_1fr] sm:gap-8"
                  >
                    <span className="pt-[2px] text-[0.72rem] uppercase tracking-[0.2em] text-clay">
                      {it.time ?? ""}
                    </span>
                    <span className="leading-[1.7]">{it.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-[0.78rem] uppercase tracking-[0.22em] text-taupe/70">
          (Ablauf unter Vorbehalt)
        </p>
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

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={0.05 * (i % 3)}>
              <Photo
                src={g.src}
                alt={g.alt}
                aspect="aspect-[4/5]"
                className="radius-organic"
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
