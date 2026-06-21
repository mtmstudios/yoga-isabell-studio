import { LotusMark } from "./lotus-mark";

type Props = {
  /** Prompt-like art direction note for the photographer, surfaced in dev. */
  caption?: string;
  /** Aspect ratio — Tailwind utility, e.g. "aspect-[3/4]". */
  aspect?: string;
  className?: string;
};

/**
 * Warm neutral placeholder for forthcoming photography.
 * Renders a faint lotus motif on --sand. NEVER use AI stock here.
 */
export function PhotoPlaceholder({
  caption,
  aspect = "aspect-[3/4]",
  className = "",
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-sand ${aspect} ${className}`}
      role="img"
      aria-label={caption ?? "Foto folgt"}
    >
      {/* Soft inner warm wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_20%,rgba(185,106,77,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_80%_90%,rgba(124,139,111,0.10),transparent_55%)]" />

      {/* Lotus motif */}
      <LotusMark
        size={120}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ink/15"
      />

      {/* Hairline frame */}
      <div className="absolute inset-3 border border-ink/[0.08]" />

      {caption && (
        <span className="absolute bottom-3 left-3 right-3 text-[0.65rem] uppercase tracking-[0.22em] text-ink/40">
          Foto folgt · {caption}
        </span>
      )}
    </div>
  );
}
