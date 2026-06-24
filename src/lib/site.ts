/** Zentrale Site-Konstanten für SEO, Canonicals, Open Graph und strukturierte Daten. */

export const SITE_URL = "https://www.yoga-mit-isabell.de";
export const SITE_NAME = "Yoga mit Isabell";
export const OG_IMAGE = `${SITE_URL}/og.jpg`;

/** Absolute URL für einen Pfad (für Canonical / og:url / Sitemap). */
export function absUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Name, Adresse, Telefon — eine Quelle der Wahrheit (NAP-Konsistenz). */
export const NAP = {
  name: SITE_NAME,
  street: "Zuckerbergstraße 99, 1. Stock",
  locality: "Stuttgart",
  region: "Baden-Württemberg",
  postalCode: "70378",
  country: "DE",
  phone: "+49 157 31154727",
  email: "hello@yoga-mit-isabell.de",
  lat: 48.8264,
  lng: 9.2492,
} as const;

export const SAME_AS = [
  "https://www.instagram.com/yogamitisabell/",
  "https://www.facebook.com/YogamitIsabell",
];

export const AREA_SERVED = [
  "Stuttgart-Steinhaldenfeld",
  "Stuttgart-Bad Cannstatt",
  "Stuttgart-Ost",
  "Stuttgart",
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Zuckerbergstra%C3%9Fe+99+70378+Stuttgart-Steinhaldenfeld";

/** Person Isabell — E-E-A-T-Signal, wird auch separat auf /ueber-mich genutzt. */
export const ISABELL_PERSON = {
  "@type": "Person",
  "@id": `${SITE_URL}/#isabell`,
  name: "Isabell Thieleke",
  jobTitle: "Yogalehrerin",
  worksFor: { "@id": `${SITE_URL}/#org` },
  knowsAbout: [
    "Vinyasa Yoga",
    "Rückenyoga",
    "Yin Yoga",
    "Faszienyoga",
    "Prä- und postnatales Yoga",
    "Chakra- und Energiearbeit",
  ],
  url: `${SITE_URL}/ueber-mich`,
};

/** Haupt-Schema des Studios (LocalBusiness). */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "SportsActivityLocation"],
    "@id": `${SITE_URL}/#org`,
    name: SITE_NAME,
    alternateName: "Yogastudio Yoga mit Isabell Stuttgart",
    description:
      "Kleines, persönliches Yogastudio in Stuttgart-Steinhaldenfeld. Vinyasa, Rücken-, Yin- und sanftes Yoga in kleinen Gruppen von max. 12 Teilnehmer:innen.",
    url: `${SITE_URL}/`,
    image: OG_IMAGE,
    logo: `${SITE_URL}/images/logo.png`,
    telephone: NAP.phone,
    email: NAP.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Überweisung, Barzahlung, Wellhub",
    hasMap: MAPS_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.locality,
      addressRegion: NAP.region,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.lat,
      longitude: NAP.lng,
    },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    founder: ISABELL_PERSON,
    knowsLanguage: "de",
    publicAccess: true,
    sameAs: SAME_AS,
  };
}

/** Course-Schema für eine einzelne Kursseite. */
export function courseSchema(opts: {
  name: string;
  description: string;
  path: string;
  about?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    inLanguage: "de",
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    ...(opts.about ? { about: opts.about } : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      location: {
        "@type": "Place",
        name: "Yoga mit Isabell — Bürger- und Siedlerhaus",
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.street,
          addressLocality: NAP.locality,
          postalCode: NAP.postalCode,
          addressCountry: NAP.country,
        },
      },
    },
  };
}
