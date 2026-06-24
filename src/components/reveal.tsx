import { motion, useReducedMotion } from "motion/react";
import type { ReactNode, ElementType } from "react";

type Props = {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Override the y offset (default 24px). */
  y?: number;
  /** When true, animate every time the element re-enters the viewport. */
  repeat?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "span";
  className?: string;
  id?: string;
};

/**
 * Reveals children on scroll-in: fade + 24px rise + slight blur.
 * Uses the organic ease defined in the design system.
 * Honors prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  repeat = false,
  as = "div",
  ...rest
}: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    return <MotionTag {...rest}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: !repeat, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
