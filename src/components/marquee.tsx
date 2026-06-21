import { motion, useReducedMotion } from "motion/react";
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
 * Pausiert bei prefers-reduced-motion.
 */
export function Marquee({ words = DEFAULT_WORDS, duration = 60, className }: Props) {
  const reduced = useReducedMotion();
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

      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={reduced ? undefined : { x: ["0%", "-33.333%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
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
      </motion.div>
    </div>
  );
}
