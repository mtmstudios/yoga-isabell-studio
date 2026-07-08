import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/kursplan", changefreq: "weekly", priority: "0.9" },
  { path: "/kurse/anfaengerkurs", changefreq: "monthly", priority: "0.8" },
  { path: "/kurse/hormonyoga", changefreq: "monthly", priority: "0.7" },
  { path: "/kurse/soundbath", changefreq: "monthly", priority: "0.7" },
  { path: "/kurse/beckenboden", changefreq: "monthly", priority: "0.7" },
  { path: "/kurse/privat-business", changefreq: "monthly", priority: "0.7" },
  { path: "/kurse/kinderyoga", changefreq: "monthly", priority: "0.7" },
  { path: "/kurse/yoga-jga", changefreq: "monthly", priority: "0.7" },
  { path: "/kurse/motherblessing", changefreq: "monthly", priority: "0.7" },
  { path: "/ueber-mich", changefreq: "yearly", priority: "0.7" },
  { path: "/team", changefreq: "monthly", priority: "0.6" },
  { path: "/preise", changefreq: "monthly", priority: "0.8" },
  { path: "/retreat", changefreq: "monthly", priority: "0.7" },
  { path: "/kontakt", changefreq: "yearly", priority: "0.8" },
  { path: "/buchen", changefreq: "weekly", priority: "0.9" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ENTRIES.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
