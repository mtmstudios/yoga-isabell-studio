export function AiImageNotice({ className = "" }: { className?: string }) {
  return (
    <p
      className={`mt-3 text-right text-[0.7rem] tracking-[0.04em] text-taupe/60 ${className}`}
    >
      Bild KI-unterstützt erstellt
    </p>
  );
}
