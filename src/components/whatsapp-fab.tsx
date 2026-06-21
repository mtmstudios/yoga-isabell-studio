import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Discreet floating WhatsApp button — bottom-right, fades in after a short delay.
 * Tooltip on hover: "Schreib mir".
 */
export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.a
      href="https://wa.me/4915731154727"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp — Schreib mir"
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 16 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-5 right-5 z-30 flex items-center gap-2"
    >
      <span className="hidden sm:inline-block translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-pill bg-ink text-bone-soft text-xs px-3 py-1.5 font-sans tracking-wide shadow-[0_10px_30px_-10px_rgba(43,38,34,0.4)]">
        Schreib mir
      </span>
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-bone-soft shadow-[0_12px_30px_-10px_rgba(43,38,34,0.45)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-clay group-hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2z" />
        </svg>
      </span>
    </motion.a>
  );
}
