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
      },,
      { property: "og:url", content: "/kontakt" }
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
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
                    href="https://www.instagram.com/yogamitisabell/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-clay"
                  >
                    @yogamitisabell
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Facebook size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                  <a
                    href="https://www.facebook.com/YogamitIsabell"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-clay"
                  >
                    Yoga mit Isabell
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
              <MapEmbed className="mt-8 aspect-[4/3] w-full" />
            </Reveal>
          </div>

          {/* Form */}
          <div>
            <Reveal>
              <Eyebrow>Nachricht senden</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
