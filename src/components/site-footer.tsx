import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { LotusOutline } from "./lotus-mark";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Kurse", href: "/kursplan" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Team", href: "/team" },
  { label: "Studio", href: "/studio" },
  { label: "Preise", href: "/preise" },
  { label: "Retreat", href: "/retreat" },
  { label: "Kontakt", href: "/kontakt" },
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2z"/>
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone-muted">
      {/* Decorative lotus, very subtle */}
      <LotusOutline
        size={680}
        className="absolute -right-32 -bottom-40 text-bone-soft/[0.06] pointer-events-none"
      />

      <div className="container-editorial relative py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand + claim */}
          <div className="lg:col-span-4">
            <img
              src="/images/logo-light.png"
              alt="Yoga mit Isabell"
              className="h-20 w-auto"
            />
            <p className="mt-8 max-w-sm font-display text-[1.6rem] leading-[1.2] text-bone-soft [text-wrap:balance]">
              Klein <em className="text-clay not-italic">·</em> fein. Yoga in{" "}
              <em className="italic text-clay">Stuttgart-Steinhaldenfeld</em>.
            </p>
            <p className="mt-6 text-sm text-bone-muted">Partner von Wellhub.</p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="font-sans text-[0.7rem] tracking-[0.28em] uppercase text-bone-muted/70 mb-6">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-bone-soft hover:text-clay transition-colors duration-500 text-[0.95rem]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h4 className="font-sans text-[0.7rem] tracking-[0.28em] uppercase text-bone-muted/70 mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4 text-[0.95rem]">
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                <span className="text-bone-soft">
                  Bürger- und Siedlerhaus<br />
                  Zuckerbergstraße 99<br />
                  70378 Stuttgart-Steinhaldenfeld
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                <a
                  href="mailto:hello@yoga-mit-isabell.de"
                  className="text-bone-soft hover:text-clay transition-colors"
                >
                  hello@yoga-mit-isabell.de
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.4} className="mt-1 shrink-0 text-clay" />
                <a
                  href="tel:+4915731154727"
                  className="text-bone-soft hover:text-clay transition-colors"
                >
                  0157 31154727
                </a>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-5 text-bone-muted">
              <a
                href="https://www.instagram.com/yogamitisabell/"
                aria-label="Instagram — @yogamitisabell"
                target="_blank"
                rel="noreferrer"
                className="hover:text-clay transition-colors"
              >
                <Instagram size={18} strokeWidth={1.4} />
              </a>
              <a
                href="https://www.facebook.com/YogamitIsabell"
                aria-label="Facebook — Yoga mit Isabell"
                target="_blank"
                rel="noreferrer"
                className="hover:text-clay transition-colors"
              >
                <Facebook size={18} strokeWidth={1.4} />
              </a>
              <a
                href="https://wa.me/4915731154727"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="hover:text-clay transition-colors"
              >
                <WhatsAppGlyph className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <hr className="hairline mt-20 bg-bone-soft/15" />

        <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-bone-muted/80">
          <p>© {new Date().getFullYear()} Yoga mit Isabell · Isabell Thieleke</p>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-clay transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-clay transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
