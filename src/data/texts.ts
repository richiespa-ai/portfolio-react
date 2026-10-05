import type { Language } from "../store/settings";

type Texts = {
  role: string;
  tagline: string;
  viewProjects: string;
  downloadCv: string;
  cvFile: string;
  aboutTitle: string;
  aboutBody: string;
  skillsTitle: string;
  technologiesTitle: string;
  projectsTitle: string;
  noProjects: string;
};

export const texts: Record<Language, Texts> = {
  es: {
    role: "AI Operations Specialist",
    tagline:
      "Ayudo a equipos de operaciones y atención al cliente a eliminar trabajo manual con IA.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    cvFile: "/cv/ricardo-espanol-rowe-es.pdf",
    aboutTitle: "Sobre mí",
    aboutBody:
      "Cuento con más de 24 años en operaciones, atención al cliente y al estudiante y desarrollo de negocio B2B. Desde 2025 he diseñado y llevado a producción dos herramientas internas construidas con Claude Code, en uso por los equipos de soporte y de bajas y reembolsos, con resultados medibles en tiempos de resolución y en conversaciones resueltas por IA.",
    skillsTitle: "Habilidades",
    technologiesTitle: "Tecnologías",
    projectsTitle: "Proyectos",
    noProjects: "Ningún proyecto usa todas las tecnologías seleccionadas.",
  },
  en: {
    role: "AI Operations Specialist",
    tagline:
      "I help operations and customer support teams eliminate manual work with AI.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    cvFile: "/cv/ricardo-espanol-rowe-en.pdf",
    aboutTitle: "About me",
    aboutBody:
      "I bring more than 24 years of experience in operations, customer and student support, and B2B business development. Since 2025 I have designed and taken to production two internal AI tools built with Claude Code, used by the support and the withdrawals & refunds teams, with measurable results in resolution times and AI-resolved conversations.",
    skillsTitle: "Skills",
    technologiesTitle: "Technologies",
    projectsTitle: "Projects",
    noProjects: "No project uses all the selected technologies.",
  },
};
