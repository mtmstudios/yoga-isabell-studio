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
import { SITE_URL, OG_IMAGE, localBusinessSchema } from "@/lib/site";

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
      { property: "og:title", content: "Yoga mit Isabell — Vinyasa Yoga in Stuttgart-Steinhaldenfeld" },
      {
        property: "og:description",
        content: "Vinyasa Yoga in Stuttgart — klein, persönlich, ganzheitlich.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Yoga mit Isabell" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Yogastunde bei Yoga mit Isabell in Stuttgart" },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "theme-color", content: "#F6F1E8" },
      { name: "twitter:title", content: "Yoga mit Isabell — Vinyasa Yoga in Stuttgart-Steinhaldenfeld" },
      { name: "description", content: "Yoga Isabell Studio offers a warm, holistic yoga experience in Stuttgart, focusing on individual well-being and community." },
      { property: "og:description", content: "Yoga Isabell Studio offers a warm, holistic yoga experience in Stuttgart, focusing on individual well-being and community." },
      { name: "twitter:description", content: "Yoga Isabell Studio offers a warm, holistic yoga experience in Stuttgart, focusing on individual well-being and community." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9743b76-0ed8-45db-997a-0a590ce8ab52/id-preview-a4a89152--4fd2adc8-1474-4589-b196-83b446210dbc.lovable.app-1782977911722.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9743b76-0ed8-45db-997a-0a590ce8ab52/id-preview-a4a89152--4fd2adc8-1474-4589-b196-83b446210dbc.lovable.app-1782977911722.png" },
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
        children: JSON.stringify(localBusinessSchema()),
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
    <html lang="de">
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
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <SmoothScroll />
      <SiteHeader />
      <main id="main" className="min-h-dvh">
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
