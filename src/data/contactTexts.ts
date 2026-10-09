import type { Language } from "../store/settings";

type ContactTexts = {
  title: string;
  intro: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submit: string;
  sending: string;
  sent: string;
  error: string;
  nameError: string;
  emailError: string;
  messageError: string;
  botLabel: string;
};

export const contactEmail = "ricardo@ricardoespanolrowe.com";

export const contactTexts: Record<Language, ContactTexts> = {
  es: {
    title: "Contacto",
    intro: "Déjame un mensaje y te contestaré por correo.",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    sent: "Mensaje enviado. Gracias por escribirme.",
    error:
      "No se ha podido enviar el mensaje. Puedes escribirme directamente a",
    nameError: "Escribe tu nombre.",
    emailError: "Escribe un correo electrónico válido.",
    messageError: "El mensaje debe tener al menos 10 caracteres.",
    botLabel: "No rellenes este campo",
  },
  en: {
    title: "Contact",
    intro: "Leave me a message and I will reply by email.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submit: "Send message",
    sending: "Sending...",
    sent: "Message sent. Thank you for writing.",
    error: "The message could not be sent. You can write to me directly at",
    nameError: "Enter your name.",
    emailError: "Enter a valid email address.",
    messageError: "The message must be at least 10 characters long.",
    botLabel: "Do not fill in this field",
  },
};
