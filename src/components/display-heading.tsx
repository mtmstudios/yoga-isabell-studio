import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Visual scale — defaults to display (h1). */
  size?: "display" | "h2" | "h3";
  /** Optional alignment override (default flush-left, editorial). */
  align?: "left" | "center";
};

const sizeClass: Record<NonNullable<Props["size"]>, string> = {
  display:
    "text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]",
  h2: "text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.04] tracking-[-0.015em]",
  h3: "text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.01em]",
};

/**
 * Large Fraunces headline. Pass children with <em> or <span className="text-clay">
 * to emphasise individual words. Use the soft optical axis via font-display.
 */
export function DisplayHeading({
  children,
  as: Tag = "h1",
  className,
  size = "display",
  align = "left",
}: Props) {
  return (
    <Tag
      className={cn(
        "font-display font-normal text-ink",
        "[font-variation-settings:'SOFT'_100,'opsz'_144]",
        "[text-wrap:balance]",
        sizeClass[size],
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
