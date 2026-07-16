import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

/**
 * Public form-submit endpoint. Validates and forwards form payloads to the
 * n8n webhook stored in the N8N_WEBHOOK_URL secret. Adds a human-readable
 * `formLabel` and optional `campaign` field so the receiving email can show
 * where the submission came from. Used by the contact form, course-signup
 * form, newsletter form and the Gewinnspiel lead form.
 */
const schema = z.object({
  form: z.enum(["contact", "course-signup", "newsletter", "gewinnspiel"]),
  data: z.record(z.string(), z.union([z.string(), z.boolean(), z.null()])),
});

export const Route = createFileRoute("/api/public/form-submit")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "invalid_payload" },
            { status: 400 },
          );
        }

        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        if (!webhookUrl) {
          console.error("[form-submit] N8N_WEBHOOK_URL is not configured");
          return Response.json(
            { ok: false, error: "not_configured" },
            { status: 503 },
          );
        }

        const formLabel: Record<string, string> = {
          contact: "Kontaktanfrage",
          "course-signup": "Kursanmeldung",
          newsletter: "Newsletter-Anmeldung",
          gewinnspiel: "Gewinnspiel",
        };

        try {
          const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              form: parsed.data.form,
              formLabel: formLabel[parsed.data.form] ?? parsed.data.form,
              submittedAt: new Date().toISOString(),
              source: "yoga-mit-isabell.de",
              campaign: typeof parsed.data.data.source === "string" ? parsed.data.data.source : undefined,
              data: parsed.data.data,
            }),
          });

          if (!res.ok) {
            console.error("[form-submit] n8n webhook error", res.status);
            return Response.json(
              { ok: false, error: "upstream_error" },
              { status: 502 },
            );
          }
        } catch (err) {
          console.error("[form-submit] n8n webhook failed", err);
          return Response.json(
            { ok: false, error: "upstream_unreachable" },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
