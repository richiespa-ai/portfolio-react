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
  loadingProjects: string;
  projectsError: string;
  retry: string;
  viewDetail: string;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
  close: string;
  lightMode: string;
  darkMode: string;
};

export const texts: Record<Language, Texts> = {
  es: {
    role: "Operaciones de soporte y CX · IA aplicada y automatización",
    tagline:
      "Ayudo a equipos de soporte y atención al cliente a eliminar trabajo manual con IA.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    cvFile: "/cv/ricardo-espanol-rowe-es.pdf",
    aboutTitle: "Sobre mí",
    aboutBody:
      "Coordiné un equipo de soporte de 6 personas en thePower y automaticé nuestra propia operación con IA. Desde enero de 2025 he diseñado y llevado a producción dos herramientas internas, en uso por los equipos de soporte y de bajas y reembolsos: un asistente que responde el 55 % de las conversaciones con alumnos y una aplicación que resuelve el 100 % de las solicitudes en 3 días como máximo. Antes, desarrollo de negocio B2B y gestión de cuentas clave en consultoría.",
    skillsTitle: "Habilidades",
    technologiesTitle: "Tecnologías",
    projectsTitle: "Proyectos",
    noProjects: "Ningún proyecto usa todas las tecnologías seleccionadas.",
    loadingProjects: "Cargando proyectos…",
    projectsError: "No se han podido cargar los proyectos.",
    retry: "Reintentar",
    viewDetail: "Ver detalle",
    problemLabel: "El punto de partida",
    solutionLabel: "Lo que hice",
    resultLabel: "El resultado",
    close: "Cerrar",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
  },
  en: {
    role: "Support & CX Operations · Applied AI and Automation",
    tagline:
      "I help support and customer service teams eliminate manual work with AI.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
    cvFile: "/cv/ricardo-espanol-rowe-en.pdf",
    aboutTitle: "About me",
    aboutBody:
      "I coordinated a 6-person support team at thePower and automated our own operation with AI. Since January 2025 I have designed and taken to production two internal tools, used by the support and the withdrawals & refunds teams: an assistant that answers 55% of student conversations and an app that resolves 100% of requests within 3 days. Previously, B2B business development and key account management in consulting.",
    skillsTitle: "Skills",
    technologiesTitle: "Technologies",
    projectsTitle: "Projects",
    noProjects: "No project uses all the selected technologies.",
    loadingProjects: "Loading projects…",
    projectsError: "The projects could not be loaded.",
    retry: "Try again",
    viewDetail: "View details",
    problemLabel: "Starting point",
    solutionLabel: "What I did",
    resultLabel: "The result",
    close: "Close",
    lightMode: "Light mode",
    darkMode: "Dark mode",
  },
};
