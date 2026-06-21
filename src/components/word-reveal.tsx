import { motion, useReducedMotion } from "motion/react";
import { Fragment } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Segment = {
  text: string;
  italic?: boolean;
  accent?: boolean;
  className?: string;
};

type Props = {
  /** Plain text — wird in Wörter gesplittet. */
  text?: string;
  /** Oder strukturierte Segmente für gemischte Styles. */
  segments?: Segment[];
  /** Trigger erst beim In-View (Standard true). */
  inView?: boolean;
  /** Stagger zwischen Wörtern (s). */
  stagger?: number;
  delay?: number;
  className?: string;
};

/**
 * Clip-Mask Wort-für-Wort Reveal für große Headlines.
 * Jedes Wort steigt aus einer Maske auf — kein „Tippen", kein Glitch.
 */
export function WordReveal({
  text,
  segments,
  inView = true,
  stagger = 0.08,
  delay = 0,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const segs: Segment[] = segments ?? (text ? [{ text }] : []);

  let wordIndex = 0;

  return (
    <span className={className}>
      {segs.map((seg, sI) => {
        const words = seg.text.split(" ");
        return (
          <Fragment key={sI}>
            {words.map((w, i) => {
              const idx = wordIndex++;
              const isLast = i === words.length - 1 && sI === segs.length - 1;
              return (
                <span
                  key={`${sI}-${i}`}
                  className="inline-flex overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
                >
                  <motion.span
                    initial={reduced ? false : { y: "110%" }}
                    {...(inView
                      ? {
                          whileInView: { y: "0%" },
                          viewport: { once: true, margin: "0px 0px -15% 0px" },
                        }
                      : { animate: { y: "0%" } })}
                    transition={{
                      duration: 1.0,
                      delay: delay + idx * stagger,
                      ease: EASE,
                    }}
                    className={[
                      "inline-block",
                      seg.italic ? "italic" : "",
                      seg.accent ? "text-clay" : "",
                      seg.className ?? "",
                    ].join(" ")}
                  >
                    {w}
                    {!isLast && "\u00A0"}
                  </motion.span>
                </span>
              );
            })}
          </Fragment>
        );
      })}
    </span>
  );
}
