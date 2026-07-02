import { useState } from "react";
import { z } from "zod";
import { CTA } from "@/components/cta";
import { Check, Loader2 } from "lucide-react";

const schema = z
  .string()
  .trim()
  .min(1, "Bitte gib Deine E-Mail-Adresse ein.")
  .max(255, "E-Mail-Adresse ist zu lang.")
  .email("Das sieht nicht nach einer gültigen E-Mail aus.");

type Props = {
  /** Visual variant — light surface (bone/sand) or dark surface (ink/clay). */
  tone?: "light" | "dark";
  /** Optional placeholder override. */
  placeholder?: string;
};

/**
 * Shared newsletter sign-up. Validates client-side and shows a calm success
 * state. The submit is currently stubbed — TODO: connect to a provider
 * (Brevo / Mailchimp / custom endpoint) in a follow-up phase.
 */
export function NewsletterForm({
  tone = "light",
  placeholder = "deine@email.de",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const dark = tone === "dark";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Ungültige E-Mail.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/public/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "newsletter",
          data: { email: parsed.data },
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Etwas ist schiefgelaufen. Versuche es bitte später erneut.");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        className={`flex items-center gap-3 rounded-pill border px-5 py-3 text-[0.95rem] ${
          dark
            ? "border-bone/30 bg-bone/10 text-bone"
            : "border-clay/30 bg-clay/5 text-clay-deep"
        }`}
      >
        <Check size={16} strokeWidth={1.6} />
        <span>Danke! Schau in Dein Postfach.</span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2" aria-label="Newsletter-Anmeldung">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          E-Mail-Adresse
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={255}
          placeholder={placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className={`min-w-0 flex-1 rounded-pill px-5 py-3 text-[0.95rem] outline-none transition-colors ${
            dark
              ? "border border-bone/30 bg-transparent text-bone placeholder:text-bone-muted/60 focus:border-bone"
              : "border border-ink/20 bg-bone text-ink placeholder:text-taupe/60 focus:border-clay"
          }`}
          aria-invalid={status === "error"}
          aria-describedby={error ? "newsletter-error" : undefined}
          required
        />
        <CTA
          type="submit"
          variant={dark ? "ghost" : "primary"}
          className={`shrink-0 ${dark ? "border-bone text-bone hover:bg-bone hover:text-ink" : ""}`}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sende…
            </>
          ) : (
            "Anmelden"
          )}
        </CTA>
      </div>
      {error && (
        <p
          id="newsletter-error"
          role="alert"
          className={`text-[0.8rem] ${dark ? "text-bone/80" : "text-clay-deep"}`}
        >
          {error}
        </p>
      )}
    </form>
  );
}
