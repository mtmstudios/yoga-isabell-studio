import { Instagram } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

const INSTAGRAM_URL = "https://www.instagram.com/yogamitisabell/";

/**
 * Quiet "follow me on Instagram" strip with a placeholder photo grid.
 * The grid will later be replaced with the real Instagram feed.
 */
export function InstagramStrip() {
  return (
    <Section bg="bone">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <div>
            <span className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">
              Instagram
            </span>
            <h3 className="mt-4 font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.15] text-ink">
              Folge mir auf <em>@yogamitisabell</em>.
            </h3>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[0.9rem] text-ink"
          >
            <Instagram size={16} strokeWidth={1.4} className="text-clay" />
            <span className="relative">
              Zum Instagram-Profil
              <span
                aria-hidden
                className="absolute left-0 -bottom-0.5 h-px w-full origin-right scale-x-0 bg-clay transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100"
              />
            </span>
          </a>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Reveal key={i} delay={0.05 * i}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden"
              aria-label="Instagram-Beitrag öffnen"
            >
              <div className="transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                <PhotoPlaceholder
                  caption={`Instagram-Post ${i + 1}`}
                  aspect="aspect-square"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
