import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
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
  /** Wie stark das Band beim Scrollen nach links wandert (in %). */
  scrollDistance?: number;
  className?: string;
};

/**
 * Scroll-getriebenes Laufband: Die Wörter wandern beim Scrollen nach links.
 * Nutzt useScroll — kein Auto-Loop mehr, die Bewegung ist an den Scroll-
 * Fortschritt gekoppelt. Bei prefers-reduced-motion bleibt das Band still.
 */
export function Marquee({
  words = DEFAULT_WORDS,
  scrollDistance = 40,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${scrollDistance}%`],
  );

  // Dreifache Sequenz → genug Puffer, damit beim Scrollen nichts abreißt.
  const items = [...words, ...words, ...words];

  return (
    <div
      ref={ref}
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
        style={reduced ? undefined : { x }}
        className="flex whitespace-nowrap will-change-transform"
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
