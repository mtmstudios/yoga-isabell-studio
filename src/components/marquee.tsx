import { cn } from "@/lib/utils";

const DEFAULT_WORDS = [
  "Vinyasa",
  "Yin",
  "Rücken",
  "Atem",
  "Stille",
  "Balance",
  "Achtsamkeit",
];

type Props = {
  words?: string[];
  /** Sekunden für einen vollen Durchlauf (langsam!). */
  duration?: number;
  className?: string;
};

/**
 * Sehr langsames Laufband in Fraunces — trennendes Band zwischen Sektionen.
 * CSS-Keyframe-Animation (statt Motion/WAAPI) für verlässliche %-Translation
 * in Chrome, Firefox, Safari und Mobile Safari. Pausiert automatisch bei
 * prefers-reduced-motion (siehe styles.css).
 */
export function Marquee({ words = DEFAULT_WORDS, duration = 60, className }: Props) {
  // Dreifache Sequenz → endlose Schleife ohne sichtbaren Sprung,
  // weil wir um exakt -33.333% (= eine Sequenzbreite) translatieren.
  const items = [...words, ...words, ...words];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-line bg-bone py-10 select-none",
        className,
      )}
      aria-hidden
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bone to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bone to-transparent z-10" />

      <div
        className="marquee-track flex whitespace-nowrap will-change-transform"
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((w, i) => (
          <span
            key={i}
            className="font-display italic text-[clamp(2rem,5vw,4rem)] leading-none text-ink/85 px-10 inline-flex items-center gap-10"
          >
            {w}
            <span className="text-clay/60 text-[0.7em]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
