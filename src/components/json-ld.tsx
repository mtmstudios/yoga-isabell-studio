/**
 * Rendert ein JSON-LD <script>. Suchmaschinen und KI-Crawler lesen strukturierte
 * Daten an beliebiger Stelle im Dokument — daher dürfen Seiten dies inline nutzen.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
