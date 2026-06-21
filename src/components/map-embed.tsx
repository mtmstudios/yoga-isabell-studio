import { useState } from "react";
import { MapPin } from "lucide-react";

type Props = {
  /** Search query passed to Google Maps Embed. */
  query?: string;
  className?: string;
  /** Visible address label shown before consent. */
  addressLabel?: string;
};

const DEFAULT_QUERY = "Zuckerbergstraße 99, 70378 Stuttgart-Steinhaldenfeld";

/**
 * Lazy, consent-first Google Maps embed.
 * The iframe is only loaded after the user clicks "Karte anzeigen"
 * — no third-party requests fire until then (privacy-friendly).
 */
export function MapEmbed({
  query = DEFAULT_QUERY,
  className = "",
  addressLabel = DEFAULT_QUERY,
}: Props) {
  const [consent, setConsent] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-ink/10 bg-sand ${className}`}
    >
      {!consent ? (
        <button
          type="button"
          onClick={() => setConsent(true)}
          className="group flex h-full w-full flex-col items-center justify-center gap-5 p-8 text-center transition-colors hover:bg-sand/70"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-clay transition-colors group-hover:border-clay">
            <MapPin size={20} strokeWidth={1.4} />
          </span>
          <span className="max-w-xs">
            <span className="block font-display text-[1.2rem] leading-[1.25] text-ink">
              Karte anzeigen
            </span>
            <span className="mt-2 block text-[0.85rem] leading-[1.55] text-taupe">
              {addressLabel}
            </span>
            <span className="mt-4 block text-[0.72rem] uppercase tracking-[0.2em] text-taupe/70">
              Beim Anzeigen werden Daten an Google übertragen.
            </span>
          </span>
        </button>
      ) : (
        <iframe
          title={`Karte: ${addressLabel}`}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-full w-full border-0"
          allowFullScreen
        />
      )}
    </div>
  );
}
