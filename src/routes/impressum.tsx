import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung von Yoga mit Isabell — Isabell Thieleke, Stuttgart-Steinhaldenfeld.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Impressum — Yoga mit Isabell" },
      {
        property: "og:description",
        content: "Anbieterkennzeichnung nach § 5 DDG.",
      },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function Block({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-16">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="space-y-4 text-[1rem] leading-[1.75] text-ink/85">
          {children}
        </div>
      </Reveal>
    </div>
  );
}

function ImpressumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title={
          <>
            <em>Impressum</em>
          </>
        }
        lead="Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Medienstaatsvertrag (MStV)."
      />

      <Section bg="bone">
        <div className="mx-auto max-w-4xl space-y-16">
          <Block eyebrow="Anbieterin">
            <p className="font-display text-[1.4rem] text-ink">
              Yoga mit Isabell
            </p>
            <p>Isabell Thieleke</p>
            <p>
              Charlotte-Armbruster-Str. 20
              <br />
              70378 Stuttgart
              <br />
              Deutschland
            </p>
          </Block>

          <Block eyebrow="Kontakt">
            <p>
              Telefon:{" "}
              <a href="tel:+4915731154727" className="hover:text-clay">
                0157 31154727
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:hello@yoga-mit-isabell.de"
                className="hover:text-clay"
              >
                hello@yoga-mit-isabell.de
              </a>
            </p>
          </Block>

          <Block eyebrow="Umsatzsteuer">
            <p>
              Kleinunternehmerin gemäß § 19 UStG — es wird keine Umsatzsteuer
              ausgewiesen.
            </p>
          </Block>

          <Block eyebrow="Verantwortlich i.S.d. § 18 Abs. 2 MStV">
            <p>
              Isabell Thieleke
              <br />
              Charlotte-Armbruster-Str. 20
              <br />
              70378 Stuttgart
            </p>
          </Block>

          <Block eyebrow="Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-clay"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Meine E-Mail-Adresse findest Du oben.
            </p>
            <p>
              Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle sind wir nicht verpflichtet und
              nicht bereit.
            </p>
          </Block>

          <Block eyebrow="Haftung für Inhalte">
            <p>
              Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG bin ich als
              Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen
              werde ich diese Inhalte umgehend entfernen.
            </p>
          </Block>

          <Block eyebrow="Haftung für Links">
            <p>
              Mein Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft; rechtswidrige Inhalte waren nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich
              derartige Links umgehend entfernen.
            </p>
          </Block>

          <Block eyebrow="Urheberrecht">
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke
              auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung der jeweiligen Autorin bzw.
              Erstellerin.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
              dieser Seite nicht von der Betreiberin erstellt wurden, werden
              die Urheberrechte Dritter beachtet. Solltest Du trotzdem auf
              eine Urheberrechtsverletzung aufmerksam werden, bitte ich um
              einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werde ich derartige Inhalte umgehend
              entfernen.
            </p>
          </Block>

          <Block eyebrow="Bildnachweise">
            <p>
              Fotografien: Isabell Thieleke sowie beauftragte Fotograf:innen.
              Alle Rechte vorbehalten.
            </p>
          </Block>
        </div>
      </Section>
    </>
  );
}
