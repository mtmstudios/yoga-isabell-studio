import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type Props = {
  children: ReactNode;
  /** Max vertical shift in %, default 10. */
  amount?: number;
  className?: string;
};

/**
 * Sanfte vertikale Parallax. Bewegt Kinder beim Scrollen leicht (max 8–12%).
 * Respektiert prefers-reduced-motion.
 */
export function Parallax({ children, amount = 10, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amount / 2}%`, `${amount / 2}%`],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={reduced ? undefined : { y }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
