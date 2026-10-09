import { useState } from "react";
import type { FormEvent } from "react";
import Section from "./Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactEmail, contactTexts } from "@/data/contactTexts";
import { useSettings } from "@/store/settings";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const noErrors = { name: false, email: false, message: false };

type Status = "idle" | "sending" | "sent" | "error";

function Contact() {
  const language = useSettings((state) => state.language);
  const t = contactTexts[language];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(noErrors);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = {
      name: name.trim() === "",
      email: !emailPattern.test(email.trim()),
      message: message.trim().length < 10,
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      setStatus("idle");
      return;
    }

    const botField = new FormData(event.currentTarget).get("bot-field");
    const body = new URLSearchParams({
      "form-name": "contact",
      "bot-field": typeof botField === "string" ? botField : "",
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contacto" title={t.title}>
      <p className="max-w-2xl text-slate-700 dark:text-slate-300">{t.intro}</p>
      <form
        name="contact"
        noValidate
        className="mt-8 grid max-w-xl gap-6"
        onSubmit={handleSubmit}
      >
        <p className="hidden" aria-hidden="true">
          <label>
            {t.botLabel}
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className="grid gap-2">
          <label htmlFor="contact-name" className="text-sm font-semibold">
            {t.nameLabel}
          </label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-sm text-destructive">
              {t.nameError}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-email" className="text-sm font-semibold">
            {t.emailLabel}
          </label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-sm text-destructive">
              {t.emailError}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-message" className="text-sm font-semibold">
            {t.messageLabel}
          </label>
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            aria-invalid={errors.message}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
          />
          {errors.message && (
            <p id="contact-message-error" className="text-sm text-destructive">
              {t.messageError}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer justify-self-start rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-blue-800 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
        <div role="status" aria-live="polite">
          {status === "sent" && (
            <p className="text-slate-700 dark:text-slate-300">{t.sent}</p>
          )}
          {status === "error" && (
            <p className="text-destructive">
              {t.error}{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-brand underline dark:text-blue-400"
              >
                {contactEmail}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </Section>
  );
}

export default Contact;
