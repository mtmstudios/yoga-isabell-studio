import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "submit_contact_message",
  title: "Kontaktnachricht senden",
  description:
    "Sendet eine Kontaktnachricht an Yoga mit Isabell. Wird über den bestehenden n8n-Workflow an das Studio zugestellt (gleicher Kanal wie das öffentliche Kontaktformular auf der Website).",
  inputSchema: {
    name: z.string().min(2).describe("Name der anfragenden Person."),
    email: z.string().email().describe("E-Mail-Adresse für die Rückmeldung."),
    message: z.string().min(5).describe("Nachricht / Anfrage an das Studio."),
    interest: z
      .string()
      .optional()
      .describe("Optional: Kurs oder Thema, für das sich die Person interessiert."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async ({ name, email, message, interest }) => {
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      return {
        content: [
          {
            type: "text",
            text: "Kontaktzustellung ist derzeit nicht konfiguriert (N8N_WEBHOOK_URL fehlt).",
          },
        ],
        isError: true,
      };
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "contact",
          submittedAt: new Date().toISOString(),
          source: "mcp",
          data: { name, email, message, interest: interest ?? "" },
        }),
      });
      if (!res.ok) {
        return {
          content: [{ type: "text", text: `Zustellung fehlgeschlagen (${res.status}).` }],
          isError: true,
        };
      }
    } catch (err) {
      return {
        content: [
          { type: "text", text: `Zustellung fehlgeschlagen: ${(err as Error).message}` },
        ],
        isError: true,
      };
    }

    return {
      content: [
        {
          type: "text",
          text: "Nachricht erfolgreich an Yoga mit Isabell übermittelt.",
        },
      ],
      structuredContent: { ok: true },
    };
  },
});
