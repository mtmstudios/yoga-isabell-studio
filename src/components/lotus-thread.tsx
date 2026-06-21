import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Höhe in rem/px-Klassen, default h-[28rem]. */
  heightClass?: string;
};

/**
 * Dezente, sich beim Scrollen mitzeichnende Lotus-Linie als roter Faden
 * zwischen zwei Sektionen. Pfad zeichnet sich proportional zum Scroll-Fortschritt.
 */
export function LotusThread({ className, heightClass = "h-[24rem]" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0.4],
  );

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full flex justify-center pointer-events-none",
        heightClass,
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 200 600"
        preserveAspectRatio="none"
        className="h-full w-40 text-clay/50"
        fill="none"
        stroke="currentColor"
        strokeWidth={0.8}
        strokeLinecap="round"
      >
        <motion.path
          d="M 100 0
             C 100 80, 60 120, 80 200
             C 100 280, 140 320, 100 400
             C 60 480, 100 540, 100 600"
          style={
            reduced
              ? { pathLength: 1, opacity: 0.6 }
              : { pathLength, opacity }
          }
        />
        {/* small lotus seed at midpoint */}
        <motion.circle
          cx={100}
          cy={300}
          r={3}
          fill="currentColor"
          stroke="none"
          style={reduced ? { opacity: 0.7 } : { opacity }}
        />
      </svg>
    </div>
  );
}
