import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  bg?: "bone" | "sand" | "ink";
  /** Optional label under the curve, e.g. section eyebrow (rarely used). */
  ariaLabel?: string;
};

const bgClass = {
  bone: "bg-bone",
  sand: "bg-sand",
  ink: "bg-ink",
} as const;

/**
 * Decorative curved divider — a hand-drawn S-curve with a small dot accent.
 * Marks the transition between thematic sections.
 */
export function SectionDivider({
  className,
  bg = "bone",
  ariaLabel,
}: Props) {
  return (
    <div
      role="separator"
      aria-label={ariaLabel}
      className={cn(
        "flex w-full items-center justify-center py-14 md:py-20",
        bgClass[bg],
        className,
      )}
    >
      <svg
        width="72"
        height="180"
        viewBox="0 0 72 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-clay"
      >
        <path
          d="M44 4 C 44 40, 12 70, 20 110 C 26 140, 40 150, 42 158"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse
          cx="36"
          cy="172"
          rx="5"
          ry="2.25"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
