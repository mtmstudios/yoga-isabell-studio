type Props = {
  src: string;
  alt: string;
  /** Aspect ratio — Tailwind utility, e.g. "aspect-[3/4]". Use "h-full" for full-bleed. */
  aspect?: string;
  className?: string;
  /** object-position utility, e.g. "object-[50%_35%]". */
  position?: string;
  /** Eager-load above-the-fold images (e.g. the hero). */
  priority?: boolean;
};

/**
 * Real photography. Mirrors <PhotoPlaceholder>'s container so usages can be
 * swapped 1:1. Image fills the container with object-cover.
 */
export function Photo({
  src,
  alt,
  aspect = "aspect-[3/4]",
  className = "",
  position = "object-center",
  priority = false,
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-sand ${aspect} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={`absolute inset-0 h-full w-full select-none object-cover ${position}`}
      />
    </div>
  );
}
