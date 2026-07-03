import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, Star } from "lucide-react";
import { CTA } from "@/components/cta";
import { Eyebrow } from "@/components/eyebrow";
import { Photo } from "@/components/photo";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ───────────────── Word-by-word clip reveal ───────────────── */

function ClipWords({
  text,
  delay = 0,
  className = "",
  italic = false,
  accent = false,
}: {
  text: string;
  delay?: number;
  className?: string;
  italic?: boolean;
  accent?: boolean;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-flex overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span
            initial={reduced ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.05,
              delay: delay + i * 0.09,
              ease: EASE,
            }}
            className={[
              "inline-block",
              italic ? "italic" : "",
              accent ? "text-clay" : "",
            ].join(" ")}
          >
            {w}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ───────────────── Self-drawing lotus (large, decorative) ───────────────── */

function DrawingLotus({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const petals = [-60, -40, -20, 0, 20, 40, 60];

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <g transform="translate(120 138)">
        {petals.map((deg, i) => (
          <motion.ellipse
            key={deg}
            cx={0}
            cy={-40}
            rx={18}
            ry={72}
            transform={`rotate(${deg})`}
            initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.2 + i * 0.08,
              ease: EASE,
            }}
          />
        ))}
        <motion.path
          d="M -96 36 Q 0 78 96 36"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 1.0, ease: EASE }}
        />
        <motion.path
          d="M -72 52 Q 0 86 72 52"
          opacity={0.55}
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: EASE }}
        />
      </g>
    </svg>
  );
}

/* ───────────────── Breathing circle ───────────────── */

function BreathingCircle({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={`block rounded-full ${className}`}
      animate={
        reduced
          ? undefined
          : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }
      }
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}

/* ───────────────── Grain texture (very subtle) ───────────────── */

function PaperGrain() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045] mix-blend-multiply"
      aria-hidden
    >
      <filter id="hero-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-grain)" />
    </svg>
  );
}

/* ───────────────── Hero ───────────────── */

export function Hero() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden bg-bone pt-32 pb-10 lg:pt-40 lg:pb-14"
    >
      <PaperGrain />

      {/* Breathing blob — sits warmly behind the right photo */}
      <BreathingCircle className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] bg-[radial-gradient(closest-side,rgba(124,139,111,0.22),transparent_70%)] blur-[2px]" />
      <BreathingCircle className="pointer-events-none absolute -left-40 bottom-0 h-[22rem] w-[22rem] bg-[radial-gradient(closest-side,rgba(185,106,77,0.14),transparent_70%)]" />

      <div className="container-editorial relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.22fr_1fr] lg:gap-16 xl:gap-24 items-center">
          {/* LEFT — text column */}
          <div className="relative">
            {/* Self-drawing lotus anchor, behind headline */}
            <DrawingLotus className="pointer-events-none absolute -left-14 -top-10 hidden h-[18rem] w-[18rem] text-clay/35 md:block lg:-left-20 lg:-top-16 lg:h-[22rem] lg:w-[22rem]" />

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <Eyebrow>Yoga in Stuttgart-Steinhaldenfeld</Eyebrow>
            </motion.div>

            <h1
              className="relative mt-8 font-display font-normal text-ink [font-variation-settings:'SOFT'_100,'opsz'_144] text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em] [text-wrap:balance]"
            >
              <span className="sr-only">
                Yoga mit Isabell — Vinyasa Yoga in Stuttgart-Steinhaldenfeld.{" "}
              </span>
              <span aria-hidden className="block">
                <ClipWords text="Komm zur Ruhe." delay={0.15} />
              </span>
              <span aria-hidden className="block mt-1">
                <ClipWords text="Finde Deine" delay={0.55} />{" "}
                <ClipWords text="Mitte." delay={0.85} italic accent />
              </span>
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
              className="mt-8 max-w-[34rem] text-[1.05rem] leading-[1.7] text-taupe"
            >
              Persönliches, kreatives und ganzheitliches Yoga in kleinen Gruppen
              von max. 12 Menschen.{"\u00A0"}Egal ob Anfänger:in oder
              fortgeschritten — Du bist von Herzen willkommen!
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <CTA asChild variant="primary">
                <Link to="/buchen">
                  Probestunde buchen
                </Link>
              </CTA>
              <CTA asChild variant="ghost">
                <a href="/kursplan">Kursplan ansehen</a>
              </CTA>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.78rem] tracking-wide text-taupe/85"
            >
              <span className="inline-flex items-center gap-1.5 text-clay">
                <Star size={13} strokeWidth={1.4} fill="currentColor" />
                Klein & fein
              </span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-taupe/30" />
              <span>Max. 12 Teilnehmer:innen</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-taupe/30" />
              <span>Einstieg jederzeit</span>
            </motion.div>
          </div>

          {/* RIGHT — photo column with parallax + organic radius */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
            className="relative mx-auto w-full max-w-[28rem] lg:max-w-none"
          >
            {/* Soft offset shadow shape */}
            <div className="radius-organic absolute -inset-3 -z-10 bg-sand/70" />

            <motion.div
              style={reduced ? undefined : { y: photoY, scale: photoScale }}
              className="radius-organic overflow-hidden"
            >
              <Photo
                src="/images/isabell-warrior.jpg"
                alt="Isabell Thieleke im Krieger 1 — kraftvoll und geerdet"
                aspect="aspect-[3/4]"
                position="object-[50%_30%]"
                priority
              />
            </motion.div>

            {/* Small floating signature line under the photo */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
              className="mt-6 flex items-center gap-3 text-[0.72rem] tracking-[0.22em] uppercase text-taupe/70"
            >
              <span className="script-accent text-[1.1rem] normal-case tracking-normal">
                Namasté
              </span>
              <span aria-hidden className="h-px flex-1 bg-line" />
              <span>Isabell Thieleke</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8, ease: EASE }}
          className="mt-8 flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-ink/85 lg:mt-10"
        >
          <motion.span
            aria-hidden
            animate={
              reduced
                ? undefined
                : { y: [0, 6, 0], opacity: [0.5, 1, 0.5] }
            }
            transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink/20 text-ink/60"
          >
            <ArrowDown size={13} strokeWidth={1.4} />
          </motion.span>
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
