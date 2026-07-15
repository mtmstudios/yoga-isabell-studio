import { defineTool } from "@lovable.dev/mcp-js";
import { SITE_URL } from "@/lib/site";

const COURSES = [
  {
    slug: "kursplan",
    name: "Wöchentlicher Kursplan",
    description:
      "Aktuelle Wochenübersicht mit allen laufenden Vinyasa-, Rücken-, Yin- und sanften Yogastunden.",
    path: "/kursplan",
  },
  {
    slug: "anfaengerkurs",
    name: "Anfänger:innenkurs",
    description: "8-wöchiger Einsteigerkurs für Menschen ohne oder mit wenig Yogaerfahrung.",
    path: "/kurse/anfaengerkurs",
  },
  {
    slug: "hormonyoga",
    name: "Hormonyoga Workshop (nach Dinah Rodrigues)",
    description:
      "Workshop mit Ursula zur natürlichen Regulierung der Hormone, ideal in Zyklus- und Wechseljahren.",
    path: "/kurse/hormonyoga",
  },
  {
    slug: "beckenboden",
    name: "Beckenboden Yoga",
    description: "Kraft & Achtsamkeit für den Beckenboden — sanft, gezielt und alltagstauglich.",
    path: "/kurse/beckenboden",
  },
  {
    slug: "soundbath",
    name: "Soundbath",
    description: "Klangreise mit Klangschalen und Gong zum tiefen Loslassen.",
    path: "/kurse/soundbath",
  },
  {
    slug: "kinderyoga",
    name: "Kinderyoga",
    description: "Verspielte Yogastunden für Kinder — Bewegung, Fantasie und Entspannung.",
    path: "/kurse/kinderyoga",
  },
  {
    slug: "motherblessing",
    name: "Motherblessing",
    description: "Achtsame Zeremonie zur Ehrung werdender Mütter im Kreis vertrauter Frauen.",
    path: "/kurse/motherblessing",
  },
  {
    slug: "yoga-jga",
    name: "Yoga JGA",
    description: "Yoga für den Junggesellinnenabschied — verbindend, entspannt und feierlich.",
    path: "/kurse/yoga-jga",
  },
  {
    slug: "privat-business",
    name: "Privat- & Business-Yoga",
    description: "Einzelstunden, Paar-Stunden und Yoga für Teams am Arbeitsplatz.",
    path: "/kurse/privat-business",
  },
  {
    slug: "retreat",
    name: "Yoga Retreat 2027",
    description: "Mehrtägiges Yoga-Retreat in der Saiger Lounge im Schwarzwald.",
    path: "/retreat",
  },
];

export default defineTool({
  name: "list_courses",
  title: "Liste alle Kurse & Angebote",
  description:
    "Gibt alle Yoga-Kurse, Workshops und Angebote von Yoga mit Isabell zurück — inklusive Kurzbeschreibung und URL zur jeweiligen Detailseite.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = COURSES.map((c) => ({ ...c, url: `${SITE_URL}${c.path}` }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { courses: items },
    };
  },
});
