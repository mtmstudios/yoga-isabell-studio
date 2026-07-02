import { useState } from "react";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { CTA } from "@/components/cta";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Bitte gib Deine E-Mail-Adresse ein.")
  .max(255, "E-Mail-Adresse ist zu lang.")
  .email("Das sieht nicht nach einer gültigen E-Mail aus.");

type Props = {
  /** Optional course tag sent with the signup (e.g. "beckenboden"). */
  course?: string;
  /** Headline shown above the form. */
  title?: string;
  /** Lead/description shown above the form. */
  description?: string;
  /** Submit button label. */
  submitLabel?: string;
  /** Success message text. */
  successMessage?: string;
};

/**
 * Course-specific signup form: email + privacy checkbox + success state.
 * Submission is stubbed — connect to a provider (Lovable Cloud table or
 * email service) in a follow-up.
 */
export function CourseSignupForm({
  course,
  title = "Sei dabei beim nächsten Kurs",
  description = "Trag Dich ein und Du erfährst als Erste:r, wenn der nächste Kurs startet.",
  submitLabel = "Anmelden",
  successMessage = "Danke! Wir melden uns, sobald der nächste Termin steht.",
}: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Ungültige E-Mail.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setError("Bitte bestätige die Datenschutzhinweise.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/public/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "course-signup",
          data: {
            email: parsed.data,
            course: course ?? "",
          },
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("ok");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setError("Etwas ist schiefgelaufen. Versuche es bitte später erneut.");
    }
  }

  return (
    <div className="rounded-md border border-ink/10 bg-bone p-7 md:p-9">
      <p className="font-display text-[1.4rem] leading-[1.2] text-ink">{title}</p>
      <p className="mt-3 text-taupe">{description}</p>

      {status === "ok" ? (
        <div
          role="status"
          className="mt-6 flex items-center gap-3 rounded-pill border border-clay/30 bg-clay/5 px-5 py-3 text-[0.95rem] text-clay-deep"
        >
          <Check size={16} strokeWidth={1.6} />
          <span>{successMessage}</span>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" aria-label="Kurs-Anmeldung">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="course-signup-email" className="sr-only">
              E-Mail-Adresse
            </label>
            <input
              id="course-signup-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={255}
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              className="min-w-0 flex-1 rounded-pill border border-ink/20 bg-bone px-5 py-3 text-[0.95rem] text-ink placeholder:text-taupe/60 outline-none transition-colors focus:border-clay"
              aria-invalid={status === "error"}
              aria-describedby={error ? "course-signup-error" : undefined}
              required
            />
            <CTA
              type="submit"
              variant="primary"
              className="shrink-0"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sende…
                </>
              ) : (
                submitLabel
              )}
            </CTA>
          </div>

          <label className="flex items-start gap-3 text-[0.85rem] leading-[1.55] text-taupe">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (status === "error") setStatus("idle");
              }}
              className="mt-[3px] h-4 w-4 shrink-0 cursor-pointer accent-clay"
              aria-describedby={error ? "course-signup-error" : undefined}
              required
            />
            <span>
              Ich bin damit einverstanden, dass meine E-Mail-Adresse zur
              Information über den nächsten Kursstart gespeichert wird. Weitere
              Infos in der{" "}
              <a href="/datenschutz" className="underline hover:text-clay">
                Datenschutzerklärung
              </a>
              . Du kannst Dich jederzeit wieder abmelden.
            </span>
          </label>

          {error && (
            <p
              id="course-signup-error"
              role="alert"
              className="text-[0.8rem] text-clay-deep"
            >
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
