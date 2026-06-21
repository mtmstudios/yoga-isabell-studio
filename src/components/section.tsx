import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Bg = "bone" | "sand" | "ink";

type Props = {
  children: ReactNode;
  bg?: Bg;
  as?: ElementType;
  id?: string;
  className?: string;
  /** Drop the max-width container if you need a full-bleed inner layout. */
  bleed?: boolean;
};

const bgClass: Record<Bg, string> = {
  bone: "bg-bone text-taupe",
  sand: "bg-sand text-taupe",
  ink: "bg-ink text-bone-muted",
};

/**
 * Section wrapper — generous vertical rhythm + editorial container.
 * Use `bg` to switch between the three brand surfaces.
 */
export function Section({
  children,
  bg = "bone",
  as: Tag = "section",
  id,
  className,
  bleed = false,
}: Props) {
  return (
    <Tag
      id={id}
      className={cn("section-y relative", bgClass[bg], className)}
      data-surface={bg}
    >
      {bleed ? children : <div className="container-editorial">{children}</div>}
    </Tag>
  );
}
