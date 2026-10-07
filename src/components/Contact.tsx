import { useState } from "react";
import Section from "./Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactEmail, contactTexts } from "@/data/contactTexts";
import { useSettings } from "@/store/settings";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const noErrors = { name: false, email: false, message: false };

function Contact() {
  const language = useSettings((state) => state.language);
  const t = contactTexts[language];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(noErrors);
  const [opened, setOpened] = useState(false);

  function handleSubmit() {
    const newErrors = {
      name: name.trim() === "",
      email: !emailPattern.test(email.trim()),
      message: message.trim().length < 10,
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      setOpened(false);
      return;
    }

    const subject = encodeURIComponent(t.subject);
    const body = encodeURIComponent(
      `${message.trim()}\n\n${name.trim()}\n${email.trim()}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <Section id="contacto" title={t.title}>
      <p className="max-w-2xl text-slate-700 dark:text-slate-300">{t.intro}</p>
      <form
        noValidate
        className="mt-8 grid max-w-xl gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
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
          className="cursor-pointer justify-self-start rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
          {t.submit}
        </button>
        {opened && (
          <p role="status" className="text-slate-700 dark:text-slate-300">
            {t.opened}{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-semibold text-brand underline dark:text-blue-400"
            >
              {contactEmail}
            </a>
            .
          </p>
        )}
      </form>
    </Section>
  );
}

export default Contact;
