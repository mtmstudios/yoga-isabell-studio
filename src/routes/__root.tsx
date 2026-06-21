import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "../components/smooth-scroll";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { WhatsAppFab } from "../components/whatsapp-fab";
import { PageTransition } from "../components/page-transition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-bone px-6 py-24">
      <div className="max-w-lg text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-clay">
          Seite nicht gefunden
        </p>
        <h1 className="mt-6 font-display text-[clamp(3.5rem,10vw,7rem)] leading-none text-ink italic">
          404
        </h1>
        <p className="mt-6 text-taupe leading-relaxed">
          Diese Seite gibt es nicht (mehr). Vielleicht magst Du tief
          durchatmen und zurück zur Startseite gehen?
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-pill bg-clay px-7 py-3.5 text-[0.95rem] font-medium text-bone shadow-[0_1px_0_rgba(43,38,34,0.04)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-clay-deep"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Yoga mit Isabell — Vinyasa Yoga in Stuttgart-Steinhaldenfeld" },
      {
        name: "description",
        content:
          "Klein & fein: Vinyasa Yoga in Stuttgart-Steinhaldenfeld. Max. 12 Teilnehmer:innen, ganzheitlich und persönlich begleitet von Isabell Thieleke.",
      },
      { name: "author", content: "Yoga mit Isabell" },
      { property: "og:title", content: "Yoga mit Isabell" },
      {
        property: "og:description",
        content: "Vinyasa Yoga in Stuttgart — klein, persönlich, ganzheitlich.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Yoga mit Isabell" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#F6F1E8" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,0..100;1,9..144,300..600,0..100&family=Hanken+Grotesk:wght@300;400;500;600&family=Caveat:wght@400;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "@id": "#yoga-mit-isabell",
          name: "Yoga mit Isabell",
          description:
            "Vinyasa Yoga in Stuttgart-Steinhaldenfeld. Persönlich, klein, ganzheitlich. Max. 12 Teilnehmer:innen.",
          image: "/favicon.svg",
          telephone: "+49 157 31154727",
          email: "hello@yoga-mit-isabell.de",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Zuckerbergstraße 99, 1. Stock",
            addressLocality: "Stuttgart",
            addressRegion: "Baden-Württemberg",
            postalCode: "70378",
            addressCountry: "DE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 48.8264,
            longitude: 9.2492,
          },
          areaServed: [
            "Stuttgart-Steinhaldenfeld",
            "Bad Cannstatt",
            "Stuttgart",
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Wednesday", "Thursday"],
              description:
                "Öffnung 15 Minuten vor Kursbeginn. Siehe Kursplan für aktuelle Zeiten.",
            },
          ],
          sameAs: [
            "https://www.instagram.com/yogamitisabell/",
            "https://www.facebook.com/YogamitIsabell",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <SiteHeader />
      <main className="min-h-screen">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
