import type { Language } from "../store/settings";

type ContactTexts = {
  title: string;
  intro: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submit: string;
  nameError: string;
  emailError: string;
  messageError: string;
  subject: string;
  opened: string;
};

export const contactEmail = "ricardo@ricardoespanolrowe.com";

export const contactTexts: Record<Language, ContactTexts> = {
  es: {
    title: "Contacto",
    intro:
      "Al enviar se abrirá tu programa de correo con el mensaje preparado.",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    submit: "Enviar por correo",
    nameError: "Escribe tu nombre.",
    emailError: "Escribe un correo electrónico válido.",
    messageError: "El mensaje debe tener al menos 10 caracteres.",
    subject: "Contacto desde el portfolio",
    opened:
      "Si tu programa de correo no se ha abierto, puedes escribirme directamente a",
  },
  en: {
    title: "Contact",
    intro: "Sending will open your email program with the message ready.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submit: "Send by email",
    nameError: "Enter your name.",
    emailError: "Enter a valid email address.",
    messageError: "The message must be at least 10 characters long.",
    subject: "Contact from the portfolio",
    opened:
      "If your email program did not open, you can write to me directly at",
  },
};
