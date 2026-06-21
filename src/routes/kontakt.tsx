import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { MapEmbed } from "@/components/map-embed";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Hast Du Fragen? Schreib oder ruf gerne an. Isabell Thieleke · hello@yoga-mit-isabell.de · 0157 31154727.",
      },
      { property: "og:title", content: "Kontakt — Yoga mit Isabell" },
      {
        property: "og:description",
        content: "Kontaktiere Isabell — ich freue mich!",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Schreib mir"
        title={<>Hast Du <em>Fragen</em>?</>}
        lead="Kontaktiere mich gerne — ich freue mich!"
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Contact details */}
          <div>
            <Reveal>
              <Eyebrow>Direktkontakt</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 font-display text-[1.6rem] text-ink">
                Isabell Thieleke
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-5 text-[1rem] text-ink/85">
                <li className="flex items-start gap-3">
                  <Mail size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                  <a
                    href="mailto:hello@yoga-mit-isabell.de"
                    className="hover:text-clay"
                  >
                    hello@yoga-mit-isabell.de
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                  <a href="tel:+4915731154727" className="hover:text-clay">
                    0157 31154727
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                  <span>
                    Bürger- und Siedlerhaus, 1. Stock
                    <br />
                    Zuckerbergstraße 99 · 70378 Stuttgart-Steinhaldenfeld
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                  <a
                    href="https://instagram.com/yogamitisabell"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-clay"
                  >
                    @yogamitisabell
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-12 rounded-md border border-ink/10 bg-sand/40 p-6">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
                  Öffnungszeiten
                </p>
                <p className="mt-3 text-taupe">
                  Das Studio öffnet 15 Minuten vor Kursbeginn — siehe Kursplan.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 aspect-[4/3] w-full overflow-hidden rounded-md border border-ink/10 bg-sand">
                <div className="flex h-full w-full items-center justify-center text-center">
                  <span className="px-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink/40">
                    Karte folgt
                    <br />
                    (Google Maps Embed)
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div>
            <Reveal>
              <Eyebrow>Nachricht senden</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <form
                className="mt-8 flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Kontaktformular"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe">
                      Name
                    </span>
                    <input
                      type="text"
                      required
                      className="rounded-md border border-ink/15 bg-bone px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe">
                      E-Mail
                    </span>
                    <input
                      type="email"
                      required
                      className="rounded-md border border-ink/15 bg-bone px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe">
                    Betreff
                  </span>
                  <input
                    type="text"
                    className="rounded-md border border-ink/15 bg-bone px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe">
                    Nachricht
                  </span>
                  <textarea
                    rows={6}
                    required
                    className="resize-y rounded-md border border-ink/15 bg-bone px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
                  />
                </label>
                <div className="mt-2">
                  <CTA type="submit" variant="primary">
                    Nachricht senden
                  </CTA>
                </div>
                <p className="text-[0.78rem] text-taupe/70">
                  Versand wird in Phase 5 integriert.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
