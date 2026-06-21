import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  lenisInstance = l;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function scrollToTop(immediate = false) {
  if (typeof window === "undefined") return;
  const l = lenisInstance;
  if (l && !immediate) {
    l.scrollTo(0, { duration: 0.9 });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }
}
