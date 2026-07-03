import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Tone affects the small lotus stroke before the label. */
  tone?: "clay" | "sage" | "bone";
};

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  clay: "text-clay",
  sage: "text-sage",
  bone: "text-bone-muted",
};

/**
 * Small label above a headline — uppercase, tracked, with a hairline + lotus dot.
 * Sits flush left, used in pairs above DisplayHeading.
 */
export function Eyebrow({ children, className, tone = "clay" }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em]",
        toneClass[tone],
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block h-[2px] w-10 bg-current opacity-80"
      />
      <span
        aria-hidden
        className="inline-block h-1 w-1 rotate-45 bg-current"
      />
      <span>{children}</span>
    </div>
  );
}
