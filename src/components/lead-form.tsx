import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CTA } from "@/components/cta";
import { Check, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte gib Deinen Namen ein.").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Bitte gib Deine E-Mail-Adresse ein.")
    .max(255)
    .email("Das sieht nicht nach einer gültigen E-Mail aus."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  interest: z.string().trim().max(120).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Bitte bestätige die Teilnahmebedingungen." }),
  }),
  newsletter: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      consent: false as unknown as true,
      newsletter: false,
    },
  });

  async function onSubmit(data: FormData) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/public/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "gewinnspiel",
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone ?? "",
            interest: data.interest ?? "",
            newsletter: !!data.newsletter,
            source: "QR-Code Gewinnspiel",
          },
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Deine Teilnahme konnte nicht gesendet werden. Bitte versuche es später erneut oder schreibe an hello@yoga-mit-isabell.de.",
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
        <h2 className="font-display text-[1.6rem] leading-[1.2] text-ink">
          Danke — Du bist dabei!
        </h2>
        <p className="mt-3 text-taupe">
          Wir melden uns nach der Ziehung bei den Gewinner:innen per E-Mail.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      aria-label="Teilnahmeformular Gewinnspiel"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name?.message} {...register("name")} />
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
        <Field
          id="interest"
          label="Woran hast Du Interesse? (optional)"
          placeholder="z. B. Vinyasa, Yin, Anfängerkurs…"
          {...register("interest")}
        />
      </div>

      <label className="mt-2 flex items-start gap-3 text-[0.9rem] text-ink">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1 h-4 w-4 accent-clay"
        />
        <span>
          Ich möchte am Gewinnspiel teilnehmen und bin einverstanden, dass meine
          Angaben zur Abwicklung gespeichert und im Gewinnfall zur
          Kontaktaufnahme genutzt werden. Datenschutz siehe{" "}
          <a href="/datenschutz" className="text-clay underline">
            Datenschutzerklärung
          </a>
          .
        </span>
      </label>
      {errors.consent && (
        <p role="alert" className="text-[0.8rem] text-clay-deep">
          {errors.consent.message as string}
        </p>
      )}

      <label className="flex items-start gap-3 text-[0.9rem] text-ink">
        <input
          type="checkbox"
          {...register("newsletter")}
          className="mt-1 h-4 w-4 accent-clay"
        />
        <span>
          Ja, ich möchte gelegentlich Neuigkeiten zu Kursen und Retreats per
          E-Mail erhalten (jederzeit abbestellbar).
        </span>
      </label>

      <div className="mt-2">
        <CTA type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sende…
            </>
          ) : (
            "Jetzt teilnehmen"
          )}
        </CTA>
      </div>
      {submitError && (
        <p role="alert" className="text-[0.85rem] text-clay-deep">
          {submitError}
        </p>
      )}
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
