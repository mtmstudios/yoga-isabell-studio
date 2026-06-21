import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Cycle length in seconds (default 6s — eine Atemzug-Länge). */
  duration?: number;
};

/**
 * Atmender Kreis — wiederkehrendes Signature-Motiv. 6s Atemzyklus.
 * Subtil, organisch, niemals als „Loading-Spinner" wahrnehmbar.
 */
export function BreathingCircle({ className, duration = 6 }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={cn("block rounded-full", className)}
      animate={
        reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }
      }
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
    />
  );
}
