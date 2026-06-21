import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Facebook, Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA } from "./cta";
import { LotusMark } from "./lotus-mark";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Kurse",
    href: "/kurse",
    children: [
      { label: "Kursplan & Offene Stunden", href: "/kurse" },
      { label: "Anfängerkurs", href: "/kurse/anfaenger" },
      { label: "Soundbath", href: "/kurse/soundbath" },
      { label: "Beckenboden Yoga", href: "/kurse/beckenboden" },
      { label: "Privat & Business", href: "/kurse/privat-business" },
      { label: "Kinderyoga", href: "/kurse/kinder" },
    ],
  },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Team", href: "/team" },
  { label: "Studio", href: "/studio" },
  { label: "Preise", href: "/preise" },
  { label: "Retreat", href: "/retreat" },
  { label: "Kontakt", href: "/kontakt" },
];

const BOOKING_URL = "https://www.eversports.de";
const WHATSAPP_URL = "https://wa.me/4915731154727";
const INSTAGRAM_URL = "https://www.instagram.com/";
const FACEBOOK_URL = "https://www.facebook.com/";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2z"/>
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40",
          "transition-[background-color,border-color,backdrop-filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "bg-bone/95 border-b border-line backdrop-blur-[6px]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container-editorial flex items-center justify-between py-5">
          <Brand />

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                open={openDropdown === item.label}
                onToggle={(o) => setOpenDropdown(o ? item.label : null)}
              />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-3 text-ink/70">
              <a
                href={INSTAGRAM_URL}
                aria-label="Instagram"
                className="hover:text-clay transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={17} strokeWidth={1.4} />
              </a>
              <a
                href={FACEBOOK_URL}
                aria-label="Facebook"
                className="hover:text-clay transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size={17} strokeWidth={1.4} />
              </a>
              <a
                href={WHATSAPP_URL}
                aria-label="WhatsApp"
                className="hover:text-clay transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppGlyph className="h-[17px] w-[17px]" />
              </a>
            </div>
            <CTA asChild variant="primary" size="sm">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                Stunde buchen
              </a>
            </CTA>
          </div>

          <button
            className="lg:hidden text-ink p-2 -mr-2"
            aria-label="Menü öffnen"
            onClick={() => setMobileOpen(true)}
          >
            <Menu strokeWidth={1.4} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function Brand() {
  return (
    <a href="/" className="flex items-center gap-3 group" aria-label="Yoga mit Isabell — Startseite">
      <LotusMark size={34} className="text-clay transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[8deg]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] text-ink italic">Yoga</span>
        <span className="font-sans text-[0.62rem] tracking-[0.32em] text-taupe mt-1">
          MIT ISABELL
        </span>
      </span>
    </a>
  );
}

function NavLink({
  item,
  open,
  onToggle,
}: {
  item: NavItem;
  open: boolean;
  onToggle: (o: boolean) => void;
}) {
  if (!item.children) {
    return (
      <a
        href={item.href}
        className="text-[0.9rem] text-ink/85 hover:text-clay transition-colors duration-500"
      >
        {item.label}
      </a>
    );
  }
  return (
    <div
      className="relative"
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
    >
      <button
        className="flex items-center gap-1 text-[0.9rem] text-ink/85 hover:text-clay transition-colors duration-500"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={cn("transition-transform duration-500", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
          >
            <div className="min-w-[16rem] rounded-sm bg-bone border border-line shadow-[0_20px_60px_-20px_rgba(43,38,34,0.18)] py-3">
              {item.children.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="block px-5 py-2.5 text-[0.88rem] text-ink/85 hover:text-clay hover:bg-sand/40 transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduced = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-bone overflow-y-auto"
        >
          <div className="container-editorial flex items-center justify-between py-5">
            <Brand />
            <button
              className="text-ink p-2 -mr-2"
              aria-label="Menü schließen"
              onClick={onClose}
            >
              <X strokeWidth={1.4} />
            </button>
          </div>

          <nav className="container-editorial pt-8 pb-16">
            <ul className="flex flex-col">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-line"
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block font-display text-[2.4rem] leading-[1.1] text-ink py-4 hover:text-clay transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="pb-4 pl-1 space-y-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <a
                            href={c.href}
                            onClick={onClose}
                            className="block text-sm text-taupe hover:text-clay transition-colors py-1"
                          >
                            — {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-6"
            >
              <CTA asChild variant="primary" size="lg" className="self-start">
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={onClose}>
                  Stunde buchen
                </a>
              </CTA>
              <div className="flex items-center gap-5 text-ink/70">
                <a href={INSTAGRAM_URL} aria-label="Instagram" target="_blank" rel="noreferrer">
                  <Instagram size={20} strokeWidth={1.4} />
                </a>
                <a href={FACEBOOK_URL} aria-label="Facebook" target="_blank" rel="noreferrer">
                  <Facebook size={20} strokeWidth={1.4} />
                </a>
                <a href={WHATSAPP_URL} aria-label="WhatsApp" target="_blank" rel="noreferrer">
                  <WhatsAppGlyph className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
