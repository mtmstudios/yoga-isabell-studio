import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import { CTA } from "@/components/cta";
import { Photo } from "@/components/photo";
import { Faq } from "@/components/faq";
import { AiImageNotice } from "@/components/ai-image-notice";

import { JsonLd } from "@/components/json-ld";
import { courseSchema } from "@/lib/site";
import ursulaAsset from "@/assets/ursula.jpg.asset.json";

const FAQ = [
  {
    q: "Brauche ich Yoga-Vorkenntnisse?",
    a: "Nein. Der Workshop ist für alle Frauen geeignet – auch ohne vorherige Yoga-Erfahrung. Ursula führt Dich Schritt für Schritt durch die Serie.",
  },
  {
    q: "Was sollte ich mitbringen?",
    a: "Bequeme Kleidung, etwas zu trinken und gerne etwas zu essen. Yogamatten, Yogablöcke und Decken sind vorhanden und können gerne genutzt werden.",
  },
  {
    q: "Wie viele Teilnehmerinnen sind im Workshop?",
    a: "Der Workshop findet in einer kleinen Gruppe von maximal 12 Teilnehmerinnen statt, damit individuell auf Deine Bedürfnisse eingegangen werden kann.",
  },
  {
    q: "Wo findet der Workshop statt?",
    a: "Im Studio von Yoga mit Isabell im Bürger- und Siedlerhaus, Zuckerbergstraße 99, 70378 Stuttgart-Steinhaldenfeld.",
  },
  {
    q: "Was bekomme ich zum Mitnehmen?",
    a: "Du erhältst ein Handout sowie nach Abschluss des Workshops eine Audiodatei der kompletten Hormonyoga-Serie, damit Du zu Hause sicher weiterüben kannst.",
  },
];

const FUER_WEN = [
  "Frauen, die vorbeugend vor Beginn der Wechseljahre die Serie erlernen wollen",
  "Frauen in den Wechseljahren oder in der Menopause",
  "Frauen mit hormonellen Dysbalancen (z. B. PMS, unregelmäßiger Zyklus)",
  "Frauen mit Kinderwunsch",
  "Alle, die ihre Hormonbalance auf natürliche Weise unterstützen möchten",
];

const WAS_ERWARTET = [
  "Einführung in die Hormonyoga-Serie nach Dinah Rodrigues",
  "Dynamische Yoga-Übungen & spezielle Atemtechniken zur Aktivierung der Hormonproduktion",
  "Energielenkungen zur Regulierung des Hormonhaushalts",
  "Entspannungsübungen für mehr innere Ruhe",
  "Tipps für eine hormonfreundliche Lebensweise (Ernährung & Lebensführung)",
  "Übung in kleinen Gruppen von max. 12 Teilnehmerinnen",
  "Ein Handout and eine Audiodatei der Hormonyoga-Serie",
];

const VORTEILE = [
  "fördert die Balance des Hormonsystems",
  "vermindert typische Wechseljahresbeschwerden wie Schlafstörungen, Stimmungsschwankungen, Hitzewallungen",
  "kann die Energie, Lebensfreude und das Wohlbefinden steigern",
  "reduziert Stress und fördert erholsamen Schlaf",
  "kann Menstruationsbeschwerden, Migräne und Kopfschmerzen lindern",
  "unterstützt das emotionale Gleichgewicht und die innere Gelassenheit",
  "kann eine natürliche Alternative zur Hormonersatzbehandlung sein",
];

const KONTRAINDIKATIONEN = [
  "Schwangerschaft",
  "östrogenabhängige Tumore",
  "Spirale, die Hormone unterdrückt",
  "dämpfende Psychopharmaka",
  "große Myome oder starke Endometriose",
];

export const Route = createFileRoute("/kurse/hormonyoga")({
  head: () => ({
    meta: [
      { title: "Hormonyoga Workshop nach Dinah Rodrigues — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "2-tägiger Hormonyoga-Workshop mit Ursula in Stuttgart-Steinhaldenfeld. Bringe Deinen Hormonhaushalt auf natürliche Weise ins Gleichgewicht.",
      },
      { property: "og:title", content: "Hormonyoga Workshop nach Dinah Rodrigues" },
      {
        property: "og:description",
        content:
          "Natürliche Balance für Dein Wohlbefinden – lerne die Hormonyoga-Serie nach Dinah Rodrigues.",
      },
      { property: "og:url", content: "/kurse/hormonyoga" },
    ],
    links: [{ rel: "canonical", href: "/kurse/hormonyoga" }],
  }),
  component: HormonyogaPage,
});

function HormonyogaPage() {
  return (
    <>
      <JsonLd
        data={courseSchema({
          name: "Hormonyoga Workshop nach Dinah Rodrigues",
          description:
            "2-tägiger Workshop zur natürlichen Harmonisierung des Hormonsystems nach Dinah Rodrigues, geleitet von Ursula im Yogastudio Yoga mit Isabell in Stuttgart-Steinhaldenfeld.",
          path: "/kurse/hormonyoga",
          about: [
            "Hormonyoga",
            "Dinah Rodrigues",
            "Hormonbalance",
            "Wechseljahre",
            "Atemtechnik",
          ],
        })}
      />
      <PageHeader
        eyebrow="Workshop · Hormonbalance"
        title={
          <>
            Hormonyoga Workshop nach{" "}
            <em>Dinah Rodrigues</em>.
          </>
        }
        lead="Natürliche Balance für Dein Wohlbefinden mit Ursula."
      />

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[28rem]">
            <div className="radius-organic absolute -inset-3 -z-10 bg-sand/70" />
            <div className="radius-organic overflow-hidden">
              <Photo
                src="/images/hormonyoga.jpg"
                alt="Frauen in entspannter Atmosphäre beim Hormonyoga-Workshop"
                aspect="aspect-[4/5]"
              />
            </div>
            <AiImageNotice />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[1.1rem] leading-[1.75] text-taupe">
                Erlebe die kraftvolle Wirkung von Hormon Yoga und bringe Deinen
                Hormonhaushalt auf natürliche Weise ins Gleichgewicht. Ursula
                ist zertifizierte Hormonyogalehrerin und zeigt Dir in diesem
                2-tägigen Workshop die Hormonyoga-Serie nach Dinah Rodrigues.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Die Serie besteht aus speziellen Körperhaltungen (Asanas),
                begleitet von einer kraftvollen Atemtechnik, Energielenkungen
                sowie Entspannungsübungen, die nachweislich Dein Hormonsystem
                aktivieren und harmonisieren. Nach dem Workshop wirst Du in der
                Lage sein, selbstständig für Dich Hormonyoga zu üben.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Ein Handout sowie eine Sprachaufnahme der kompletten
                Hormonyoga-Serie unterstützen Dich dabei, auch zu Hause sicher
                zu praktizieren – die Audiodatei erhältst Du nach Abschluss des
                Workshops.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Hormonyoga wirkt auf natürliche Weise vorbeugend oder mildernd
                gegen die Symptome der Hormonumstellung in den Wechseljahren
                (z. B. Schlafstörungen, Stimmungsschwankungen, Hitzewallungen).
                Die Organ- und Drüsenfunktionen werden angeregt bzw.
                harmonisiert, Muskeln und Knochen werden gekräftigt. Dadurch kann
                auch ernsteren Beschwerden, wie z. B. Osteoporose, ein erhöhter
                Cholesterinspiegel oder Herzerkrankungen vorgebeugt werden. Die
                Vitalität und das Wohlbefinden werden gesteigert, der Geist
                angeregt und geklärt. Bei regelmäßiger Übungspraxis kann
                Hormonyoga eine natürliche und wirksame Alternative zur
                klassischen Hormonersatzbehandlung sein. Hormonyoga bedeutet
                auch, sich ganz bewusst Zeit für sich zu nehmen. Schon nach
                kurzer Zeit wirst Du die positiven Auswirkungen dieser
                Yogatechnik erfahren.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="sand">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Für wen?</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <DisplayHeading size="h2" className="mt-6">
                Dieser Workshop ist <em>geeignet für</em>.
              </DisplayHeading>
            </Reveal>
          </div>
          <ul className="space-y-5">
            {FUER_WEN.map((item, i) => (
              <Reveal key={item} delay={0.05 * i} as="li">
                <li className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-clay"
                  />
                  <span className="text-[1.05rem] leading-[1.65] text-taupe">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Workshop-Inhalte</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <DisplayHeading size="h2" className="mt-6">
                Was erwartet <em>Dich</em>.
              </DisplayHeading>
            </Reveal>
          </div>
          <ul className="space-y-5">
            {WAS_ERWARTET.map((item, i) => (
              <Reveal key={item} delay={0.05 * i} as="li">
                <li className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-clay"
                  />
                  <span className="text-[1.05rem] leading-[1.65] text-taupe">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section bg="sand">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Vorteile</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <DisplayHeading size="h2" className="mt-6">
                Was Hormon Yoga <em>bewirken kann</em>.
              </DisplayHeading>
            </Reveal>
          </div>
          <ul className="space-y-5">
            {VORTEILE.map((item, i) => (
              <Reveal key={item} delay={0.05 * i} as="li">
                <li className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-clay"
                  />
                  <span className="text-[1.05rem] leading-[1.65] text-taupe">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section bg="bone">
        <div className="mx-auto max-w-[50rem]">
          <Reveal>
            <Eyebrow tone="clay">Wichtiger Hinweis</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="h2" className="mt-6">
              Kontraindikationen.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
              Hormonyoga ist nicht geeignet bei folgenden Umständen:
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {KONTRAINDIKATIONEN.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[0.98rem] text-taupe"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1 w-1 rotate-45 bg-clay/70"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 text-[0.95rem] leading-[1.65] text-taupe/80">
              Bei Unsicherheit sprich bitte vor der Anmeldung mit Deiner Ärztin
              oder Deinem Arzt.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="ink">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow tone="bone">Termine & Preis</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <DisplayHeading size="h2" className="mt-6 text-bone">
                2-tägiger <em>Workshop</em>.
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-[1.75] text-bone-muted">
                Mindestteilnehmerzahl 8, maximal 12 Personen. Melde Dich früh
                an – die Plätze sind begrenzt.
              </p>
            </Reveal>
          </div>
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="border-b border-bone/15 pb-6">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-bone-muted">
                  Tag 1
                </p>
                <p className="mt-2 font-display text-[1.5rem] leading-[1.2] text-bone">
                  Sonntag, 18.10.2026
                </p>
                <p className="mt-1 text-[1.05rem] text-bone-muted">
                  10.00 – 16.30 Uhr
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="border-b border-bone/15 pb-6">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-bone-muted">
                  Tag 2
                </p>
                <p className="mt-2 font-display text-[1.5rem] leading-[1.2] text-bone">
                  Sonntag, 8.11.2026
                </p>
                <p className="mt-1 text-[1.05rem] text-bone-muted">
                  10.00 – 14.30 Uhr
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-b border-bone/15 pb-6">
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-bone-muted">
                  Preis
                </p>
                <p className="mt-2 font-display text-[1.5rem] leading-[1.2] text-bone">
                  189 Euro pro Person
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <CTA asChild variant="primary" size="lg">
                <Link to="/kontakt">Jetzt buchen über Kontaktformular</Link>
              </CTA>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="bone">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <Eyebrow>Deine Lehrerin</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <DisplayHeading size="h2" className="mt-6">
                <em>Ursula</em>.
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[1.05rem] leading-[1.75] text-taupe">
                Ursula ist zertifizierte Hormonyogalehrerin und zeigt Dir in
                diesem Workshop die Serie nach Dinah Rodrigues. Sie unterrichtet
                seit 17 Jahren Hatha-Yoga und seit 15 Jahren Hormonyoga.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[1.05rem] leading-[1.75] text-taupe">
                Es ist ihr ein echtes Herzensanliegen, Hormonyoga in die Welt
                hinauszutragen – denn es hat ihr selbst sehr geholfen, die
                Wechseljahre ohne synthetische Hormone und die typischen
                Wechseljahresauswirkungen zu durchlaufen. Sie liebt es einfach,
                die von Dinah Rodrigues entwickelte Serie zu unterrichten und
                weiterzugeben.
              </p>
            </Reveal>
          </div>
          <Reveal className="relative mx-auto w-full max-w-[28rem] order-1 lg:order-2">
            <div className="radius-organic absolute -inset-3 -z-10 bg-sand/70" />
            <div className="radius-organic overflow-hidden">
              <Photo
                src={ursulaAsset.url}
                alt="Ursula – zertifizierte Hormonyogalehrerin"
                aspect="aspect-[4/5]"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Faq items={FAQ} bg="bone" />
    </>
  );
}
