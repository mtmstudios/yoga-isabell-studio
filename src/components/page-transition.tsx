import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import { scrollToTop } from "@/lib/lenis";

type Props = { children: ReactNode };

/**
 * Sanfte Fade/Slide Page-Transition zwischen Routes (~0.5s).
 * Scrollt nach jedem Routenwechsel sanft nach oben (via Lenis).
 */
export function PageTransition({ children }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();

  useEffect(() => {
    // After the new route mounts, glide back to top.
    const t = window.setTimeout(() => scrollToTop(reduced ?? false), 30);
    return () => window.clearTimeout(t);
  }, [pathname, reduced]);

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
