import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CTA } from "@/components/cta";
import { Check, Loader2 } from "lucide-react";

const COURSES = [
  "Probestunde",
  "Rückenyoga",
  "Vinyasa Yoga für Anfänger",
  "Vinyasa Yoga für Fortgeschrittene",
  "Yoga Flow am Abend",
  "Yin Yoga",
  "Yoga Sanft",
  "Beckenboden Yoga",
  "Kinderyoga",
  "Privatstunde",
  "Business Yoga",
  "Retreat",
  "Allgemein / Sonstiges",
] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte gib Deinen Namen ein.")
    .max(100, "Name ist zu lang."),
  email: z
    .string()
    .trim()
    .min(1, "Bitte gib Deine E-Mail-Adresse ein.")
    .max(255, "E-Mail-Adresse ist zu lang.")
    .email("Das sieht nicht nach einer gültigen E-Mail aus."),
  phone: z
    .string()
    .trim()
    .max(40, "Telefonnummer ist zu lang.")
    .optional()
    .or(z.literal("")),
  interest: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Bitte schreib ein paar Worte mehr.")
    .max(2000, "Nachricht ist zu lang."),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", interest: "", message: "" },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/public/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "contact",
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone ?? "",
            interest: data.interest ?? "",
            message: data.message,
          },
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut oder schreibe direkt an hello@yoga-mit-isabell.de.",
      );
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-md border border-clay/30 bg-clay/5 p-8 text-center"
      >
        <span className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-clay/15 text-clay">
          <Check size={20} strokeWidth={1.6} />
        </span>
        <h3 className="font-display text-[1.5rem] leading-[1.2] text-ink">
          Danke für Deine Nachricht.
        </h3>
        <p className="mt-3 text-taupe">
          Ich melde mich so bald wie möglich bei Dir.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[0.85rem] uppercase tracking-[0.22em] text-clay hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      aria-label="Kontaktformular"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Field
          id="email"
          label="E-Mail"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="phone"
          label="Telefon (optional)"
          type="tel"
          autoComplete="tel"
          error={errors.phone?.message as string | undefined}
          {...register("phone")}
        />
        <div className="flex flex-col gap-2">
          <label
            htmlFor="interest"
            className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe"
          >
            Kurs-Interesse
          </label>
          <select
            id="interest"
            {...register("interest")}
            className="rounded-md border border-ink/15 bg-bone px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
          >
            <option value="">Bitte wählen…</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          rows={6}
          maxLength={2000}
          {...register("message")}
          className="resize-y rounded-md border border-ink/15 bg-bone px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p role="alert" className="text-[0.8rem] text-clay-deep">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-2">
        <CTA type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sende…
            </>
          ) : (
            "Nachricht senden"
          )}
        </CTA>
      </div>
      <p className="text-[0.78rem] text-taupe/70">
        Mit dem Absenden stimmst Du zu, dass Deine Angaben für die Bearbeitung
        Deiner Anfrage verwendet werden.
      </p>
    </form>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

const Field = ({ id, label, error, type = "text", ...rest }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="text-[0.72rem] uppercase tracking-[0.22em] text-taupe"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      {...rest}
      className="rounded-md border border-ink/15 bg-bone px-4 py-3 text-ink outline-none transition-colors focus:border-clay"
      aria-invalid={!!error}
    />
    {error && (
      <p role="alert" className="text-[0.8rem] text-clay-deep">
        {error}
      </p>
    )}
  </div>
);
