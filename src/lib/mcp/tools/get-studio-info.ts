import { defineTool } from "@lovable.dev/mcp-js";
import { NAP, SITE_URL, SAME_AS, AREA_SERVED } from "@/lib/site";

export default defineTool({
  name: "get_studio_info",
  title: "Studio-Informationen abrufen",
  description:
    "Gibt öffentliche Kontakt- und Standortdaten des Yogastudios Yoga mit Isabell in Stuttgart-Steinhaldenfeld zurück (Adresse, Telefon, E-Mail, Website, Social-Profile, Einzugsgebiet).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: NAP.name,
      website: `${SITE_URL}/`,
      address: {
        street: NAP.street,
        postalCode: NAP.postalCode,
        locality: NAP.locality,
        region: NAP.region,
        country: NAP.country,
      },
      phone: NAP.phone,
      email: NAP.email,
      geo: { lat: NAP.lat, lng: NAP.lng },
      areaServed: [...AREA_SERVED],
      socialProfiles: [...SAME_AS],
      teacher: "Isabell Thieleke",
      groupSize: "max. 12 Teilnehmer:innen",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
