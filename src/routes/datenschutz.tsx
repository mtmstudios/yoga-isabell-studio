import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — Yoga mit Isabell" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Yoga mit Isabell — Informationen zur Verarbeitung Deiner personenbezogenen Daten nach DSGVO.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Datenschutzerklärung — Yoga mit Isabell" },
      {
        property: "og:description",
        content:
          "Wie wir mit Deinen personenbezogenen Daten umgehen — transparent nach DSGVO.",
      },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-16 font-display text-[1.6rem] leading-[1.25] text-ink first:mt-0">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-10 font-display text-[1.2rem] leading-[1.3] text-ink">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[1rem] leading-[1.75] text-ink/85">{children}</p>
  );
}

function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title={
          <>
            <em>Datenschutz</em>erklärung
          </>
        }
        lead="Der Schutz Deiner Privatsphäre ist mir wichtig. Nachstehend informiere ich Dich ausführlich über den Umgang mit Deinen Daten."
      />

      <Section bg="bone">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>Verantwortliche</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-1 text-[1rem] leading-[1.75] text-ink/85">
              <p className="font-display text-[1.2rem] text-ink">
                Isabell Thieleke
              </p>
              <p>Charlotte-Armbruster-Str. 20</p>
              <p>70378 Stuttgart</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:hello@yoga-mit-isabell.de"
                  className="hover:text-clay"
                >
                  hello@yoga-mit-isabell.de
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <P>
              Ich freue mich über Dein Interesse an meiner Webseite. Nachstehend
              informiere ich Dich ausführlich über den Umgang mit Deinen Daten
              gemäß der Datenschutz-Grundverordnung (DSGVO).
            </P>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>1. Zugriffsdaten und Hosting</H2>
              <P>
                Du kannst meine Webseite besuchen, ohne Angaben zu Deiner Person
                zu machen. Bei jedem Aufruf einer Webseite speichert der
                Webserver lediglich automatisch ein sogenanntes Server-Logfile,
                das z.&nbsp;B. den Namen der angeforderten Datei, Deine
                IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge
                und den anfragenden Provider (Zugriffsdaten) enthält und den
                Abruf dokumentiert. Diese Zugriffsdaten werden ausschließlich
                zum Zwecke der Sicherstellung eines störungsfreien Betriebs der
                Seite sowie der Verbesserung meines Angebots ausgewertet. Dies
                dient der Wahrung meiner im Rahmen einer Interessensabwägung
                überwiegenden berechtigten Interessen an einer korrekten
                Darstellung meines Angebots gemäß Art. 6 Abs. 1 S. 1 lit. f
                DSGVO. Alle Zugriffsdaten werden nur so lange verarbeitet, wie
                dies für die Erreichung der oben genannten Verarbeitungszwecke
                erforderlich ist.
              </P>

              <H3>1.1 Hosting durch Lovable</H3>
              <P>
                Diese Webseite wird auf der Plattform Lovable gehostet, einem
                Angebot der Lovable AB, Norrlandsgatan 20, 111 43 Stockholm,
                Schweden. Lovable nutzt die Infrastruktur von Cloudflare
                (Cloudflare, Inc., 101 Townsend Street, San Francisco, CA
                94107, USA) sowie Supabase für Datenbank- und
                Backend-Funktionen. Beim Aufruf der Seite werden aus technischen
                Gründen Zugriffsdaten (u.&nbsp;a. IP-Adresse) an diese
                Dienstleister übermittelt und dort verarbeitet. Rechtsgrundlage
                ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Die Verarbeitung erfolgt im
                Rahmen einer Auftragsverarbeitung.
              </P>
              <P>
                Soweit personenbezogene Daten in die USA übermittelt werden,
                stützt sich die Übermittlung entweder auf einen
                Angemessenheitsbeschluss der Europäischen Kommission
                (EU-US&nbsp;Data Privacy Framework) für zertifizierte
                Dienstleister oder auf Standarddatenschutzklauseln der
                Europäischen Kommission.
              </P>

              <H3>1.2 Content Delivery Network</H3>
              <P>
                Zum Zwecke einer kürzeren Ladezeit werden statische Inhalte
                (z.&nbsp;B. Bilder, Schriften, Skripte) über ein Content
                Delivery Network („CDN“) ausgeliefert. Dabei werden auf den
                Servern des CDN-Anbieters Zugriffsdaten verarbeitet. Auch
                hierbei kann es zu einer Übermittlung in Drittländer kommen,
                für die die oben unter 1.1 genannten Garantien gelten.
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>2. Kontaktaufnahme</H2>
              <P>
                Im Rahmen der Kommunikation erhebe ich zur Bearbeitung Deiner
                Anfragen gemäß Art. 6 Abs. 1 S. 1 lit. b bzw. lit. f DSGVO
                personenbezogene Daten, wenn Du mir diese bei einer
                Kontaktaufnahme (z.&nbsp;B. per Kontaktformular, E-Mail,
                WhatsApp oder Telefon) freiwillig mitteilst. Pflichtfelder in
                Formularen sind als solche gekennzeichnet, da ich in diesen
                Fällen die Daten zwingend zur Bearbeitung Deiner Anfrage
                benötige. Welche Daten erhoben werden, ist aus dem jeweiligen
                Eingabeformular ersichtlich. Nach vollständiger Bearbeitung
                Deiner Anfrage werden Deine Daten gelöscht, sofern Du nicht
                ausdrücklich in eine weitere Nutzung gemäß Art. 6 Abs. 1 S. 1
                lit. a DSGVO eingewilligt hast oder gesetzliche
                Aufbewahrungspflichten entgegenstehen.
              </P>

              <H3>2.1 Weiterleitung der Formulardaten über n8n</H3>
              <P>
                Zur Zustellung der Nachrichten aus den Formularen (Kontakt,
                Kurs-Anmeldung, Newsletter-Anmeldung) nutze ich die
                Automatisierungs-Software n8n (n8n GmbH, Krausnickstraße 1,
                10115 Berlin, Deutschland). Die im Formular eingegebenen Daten
                werden über eine gesicherte Verbindung an einen von mir
                betriebenen n8n-Workflow übertragen, der die Nachricht in mein
                E-Mail-Postfach zustellt. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1
                lit. b bzw. lit. f DSGVO. Es findet keine Weitergabe an
                zusätzliche Dritte statt, die über diese Zustellung hinausgeht.
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>3. Newsletter und Kursinformationen</H2>
              <P>
                Wenn Du Dich für den Newsletter oder für Benachrichtigungen zu
                einem bestimmten Kurs einträgst, verwende ich die dabei
                mitgeteilte E-Mail-Adresse, um Dir Informationen zu neuen
                Kursen, Terminen oder Angeboten zuzusenden. Die Verarbeitung
                erfolgt auf Grundlage Deiner Einwilligung gemäß Art. 6 Abs. 1 S.
                1 lit. a DSGVO. Die Abmeldung ist jederzeit möglich — entweder
                durch eine kurze Nachricht an{" "}
                <a
                  href="mailto:hello@yoga-mit-isabell.de"
                  className="hover:text-clay"
                >
                  hello@yoga-mit-isabell.de
                </a>{" "}
                oder über einen dafür vorgesehenen Abmelde-Link. Nach Abmeldung
                lösche ich Deine E-Mail-Adresse aus der Empfängerliste.
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>4. Cookies und ähnliche Technologien</H2>
              <P>
                Diese Webseite setzt ausschließlich technisch notwendige
                Speichermechanismen ein, die für den Betrieb der Seite und die
                Bereitstellung der von Dir ausdrücklich gewünschten Funktionen
                erforderlich sind (z.&nbsp;B. Sitzungs-Handling, Speicherung
                Deiner Zustimmung zum Laden externer Karten). Für den Einsatz
                dieser unbedingt notwendigen Technologien ist keine Einwilligung
                erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG i.&nbsp;V.&nbsp;m. Art. 6
                Abs. 1 S. 1 lit. f DSGVO).
              </P>
              <P>
                Es werden keine Cookies zu Marketing- oder Trackingzwecken
                gesetzt. Es findet keine Webanalyse (etwa über Google Analytics)
                statt.
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>5. Eingebundene Dienste Dritter</H2>

              <H3>5.1 Google Maps (mit Opt-In)</H3>
              <P>
                Auf der Kontaktseite kann eine Karte von Google Maps geladen
                werden. Die Karte wird erst nach Deiner ausdrücklichen
                Zustimmung eingeblendet („zweistufige Lösung“). Nach der
                Aktivierung werden Daten (u.&nbsp;a. Deine IP-Adresse) an Google
                Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland und
                ggf. an Google&nbsp;LLC in den USA übermittelt. Rechtsgrundlage
                ist Deine Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO,
                die Du jederzeit widerrufen kannst. Weitere Informationen findest
                Du in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay underline"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </P>

              <H3>5.2 Eversports (Kursbuchung)</H3>
              <P>
                Zur Anzeige des Kursplans und zur Kursbuchung binde ich das
                Widget des Buchungsdienstes Eversports (Eversports GmbH,
                Wollzeile 1—3, 1010 Wien, Österreich) als iFrame ein. Beim
                Laden des Widgets werden Zugriffsdaten (u.&nbsp;a. IP-Adresse)
                an Eversports übermittelt. Wenn Du innerhalb des Widgets eine
                Buchung vornimmst, gilt für diesen Vorgang die{" "}
                <a
                  href="https://www.eversports.de/datenschutz"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay underline"
                >
                  Datenschutzerklärung von Eversports
                </a>
                . Rechtsgrundlage für die Einbindung ist Art. 6 Abs. 1 S. 1 lit.
                b bzw. lit. f DSGVO (Bereitstellung der Buchungsmöglichkeit).
              </P>

              <H3>5.3 Wellhub</H3>
              <P>
                Ich bin Partnerin von Wellhub (früher Gympass). Wellhub-Kunden
                können sich über die Wellhub-App zu Kursen anmelden. Die
                Abrechnung und die dazu erforderliche Datenverarbeitung erfolgen
                über Wellhub. Es gilt die{" "}
                <a
                  href="https://wellhub.com/de-de/datenschutzrichtlinie/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay underline"
                >
                  Datenschutzerklärung von Wellhub
                </a>
                .
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>6. Social Media</H2>
              <P>
                Auf der Webseite befinden sich Verlinkungen zu meinen Profilen
                auf Instagram und Facebook (jeweils Meta Platforms Ireland Ltd.,
                Merrion Road, Dublin 4, Irland) sowie WhatsApp (WhatsApp Ireland
                Limited). Es handelt sich um einfache Verlinkungen — es werden
                erst dann Daten an Meta übermittelt, wenn Du die Links aktiv
                anklickst.
              </P>
              <P>
                Wenn Du meine Profile auf diesen Plattformen besuchst, werden
                Deine Daten durch den jeweiligen Betreiber für
                Marktforschungs- und Werbezwecke verarbeitet. Detaillierte
                Informationen findest Du in den Datenschutzhinweisen der
                Anbieter:{" "}
                <a
                  href="https://www.facebook.com/privacy/policy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay underline"
                >
                  Facebook / Instagram
                </a>
                ,{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy-eea"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-clay underline"
                >
                  WhatsApp
                </a>
                .
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>7. Deine Rechte</H2>
              <P>Als betroffene Person hast Du folgende Rechte:</P>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-[1rem] leading-[1.75] text-ink/85">
                <li>
                  Recht auf Auskunft über Deine bei mir verarbeiteten
                  personenbezogenen Daten (Art. 15 DSGVO);
                </li>
                <li>
                  Recht auf Berichtigung unrichtiger oder Vervollständigung
                  Deiner Daten (Art. 16 DSGVO);
                </li>
                <li>
                  Recht auf Löschung Deiner bei mir gespeicherten Daten (Art. 17
                  DSGVO), soweit keine gesetzliche Aufbewahrungspflicht besteht;
                </li>
                <li>
                  Recht auf Einschränkung der Verarbeitung Deiner Daten (Art. 18
                  DSGVO);
                </li>
                <li>
                  Recht auf Datenübertragbarkeit (Art. 20 DSGVO);
                </li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung mit Wirkung
                  für die Zukunft (Art. 7 Abs. 3 DSGVO);
                </li>
                <li>
                  Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77
                  DSGVO). Zuständig ist z.&nbsp;B. der Landesbeauftragte für
                  den Datenschutz und die Informationsfreiheit
                  Baden-Württemberg.
                </li>
              </ul>

              <H3>Widerspruchsrecht</H3>
              <P>
                Soweit ich zur Wahrung meiner im Rahmen einer
                Interessensabwägung überwiegenden berechtigten Interessen
                personenbezogene Daten wie oben erläutert verarbeite, kannst Du
                dieser Verarbeitung mit Wirkung für die Zukunft widersprechen.
                Erfolgt die Verarbeitung zu Zwecken des Direktmarketings, kannst
                Du dieses Recht jederzeit ausüben. Erfolgt die Verarbeitung zu
                anderen Zwecken, steht Dir ein Widerspruchsrecht nur bei
                Vorliegen von Gründen zu, die sich aus Deiner besonderen
                Situation ergeben.
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <H2>8. Kontakt zur Verantwortlichen</H2>
              <P>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Deiner
                personenbezogenen Daten, bei Auskünften, Berichtigung,
                Einschränkung oder Löschung von Daten sowie beim Widerruf
                erteilter Einwilligungen wende Dich bitte direkt an mich:{" "}
                <a
                  href="mailto:hello@yoga-mit-isabell.de"
                  className="hover:text-clay"
                >
                  hello@yoga-mit-isabell.de
                </a>
                .
              </P>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-16 text-[0.85rem] text-taupe">
              Stand: Januar 2026
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
