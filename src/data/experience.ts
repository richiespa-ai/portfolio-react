import type { Language } from "../store/settings";

type Translated = { es: string; en: string };

export type ExperienceItem = {
  id: string;
  company: string;
  role: Translated;
  period: Translated;
  points: { es: string[]; en: string[] };
};

export type EducationItem = {
  id: string;
  title: Translated;
};

export const sectionTitles: Record<
  Language,
  { experience: string; education: string }
> = {
  es: { experience: "Experiencia profesional", education: "Formación" },
  en: { experience: "Professional experience", education: "Education" },
};

export const experience: ExperienceItem[] = [
  {
    id: "thepower",
    company: "thePower",
    role: {
      es: "Customer Success · Coordinación de equipo (6 personas) y proyectos de IA",
      en: "Customer Success · Team coordination (6 people) and AI projects",
    },
    period: {
      es: "Abril 2020 – Septiembre 2026",
      en: "April 2020 – September 2026",
    },
    points: {
      es: [
        "Coordinación de las 6 personas de Student Success y soporte implicadas en los procesos que automaticé: mapeo con ellas de procesos y tareas antes de construir, ajuste de las herramientas con su feedback y formación hasta su adopción.",
        "Desde enero de 2025, diseño y puesta en producción de dos herramientas internas con IA (ver Proyectos). Código generado con Claude Code a partir de mi diseño; integración con PostgreSQL junto al equipo de IT.",
        "En ambas herramientas, responsable del proyecto de principio a fin: detección de la necesidad y propuesta a dirección, definición de requisitos con el equipo, pruebas, despliegue, formación de usuarios y seguimiento de KPIs.",
        "Análisis de métricas de soporte en Intercom (tiempos de respuesta, NPS y calidad) para detectar cuellos de botella. Revisión de las consultas que la IA no sabía responder para completar su base de conocimiento; workflows de enrutamiento y filtros contra correos no deseados. Informes de devoluciones y de ventas en Looker Studio durante un año, hasta sustituir los de devoluciones por el módulo de KPIs de la herramienta de reembolsos.",
      ],
      en: [
        "Coordinated the 6 Student Success and support staff involved in the processes I automated: mapped their processes and tasks with them before building, refined the tools with their feedback and trained them through to adoption.",
        "Since January 2025, designed and took to production two internal AI tools (see Projects). Code generated with Claude Code from my design; PostgreSQL integration with the IT team.",
        "For both tools, end-to-end project ownership: identifying the need and pitching it to management, defining requirements with the team, testing, deployment, user training and KPI tracking.",
        "Analysis of support metrics in Intercom (response times, NPS and quality) to spot bottlenecks. Reviewed the queries the AI could not answer to fill gaps in its knowledge base; routing workflows and filters against unwanted emails. Built refund and sales reports in Looker Studio for a year, until the refunds reporting moved to the KPI module of the refunds tool.",
      ],
    },
  },
  {
    id: "genera-comercial",
    company: "Genera Asesores Tributarios",
    role: { es: "Responsable Comercial", en: "Sales Manager" },
    period: { es: "Enero 2019 – Mayo 2020", en: "January 2019 – May 2020" },
    points: {
      es: [
        "Venta y gestión de cuentas clave. Definición de los objetivos de facturación y, a partir de ellos, del embudo de ventas y las acciones comerciales para cumplirlos.",
      ],
      en: [
        "Sold to and managed key accounts. Set the revenue targets and, from them, the sales pipeline and the commercial actions to hit them.",
      ],
    },
  },
  {
    id: "ayming",
    company: "Ayming",
    role: {
      es: "Senior Account Manager & Business Development",
      en: "Senior Account Manager & Business Development",
    },
    period: { es: "2007 – 2018", en: "2007 – 2018" },
    points: {
      es: [
        "Cartera de unas 30 cuentas B2B en consultoría de valor añadido, con el objetivo anual de facturación cumplido los 11 años; coordinación con los equipos técnicos.",
        "Captación de Iberdrola de principio a fin (contacto, reuniones y negociación del contrato) para un servicio de optimización tributaria: cliente durante 3 años. Ascenso a Senior Account Manager en 2011.",
      ],
      en: [
        "Portfolio of about 30 B2B accounts in value-added consulting, meeting the annual revenue target in all 11 years; coordination with internal technical teams.",
        "Won Iberdrola end to end (contact, meetings and contract negotiation) for a tax optimisation service: a client for 3 years. Promoted to Senior Account Manager in 2011.",
      ],
    },
  },
  {
    id: "alico",
    company: "Alico AIG Life",
    role: {
      es: "Agente de Seguros; Jefe de Equipo desde 2004",
      en: "Insurance Agent; Team Leader from 2004",
    },
    period: { es: "2002 – 2007", en: "2002 – 2007" },
    points: {
      es: [
        "Ascenso a jefe de equipo en 2004 por cumplir objetivos de forma constante. Desde entonces, dirección de un equipo comercial de 5 personas en venta 100 % a comisión: formación, tutoría y control de objetivos por zonas.",
      ],
      en: [
        "Promoted to team leader in 2004 for consistently meeting targets. From then on, led a 5-person sales team in a fully commission-based role: training, mentoring and target management by area.",
      ],
    },
  },
];

export const education: EducationItem[] = [
  {
    id: "ai-maker",
    title: {
      es: "Máster AI Maker & Automatizaciones – thePower Tech School. En curso; finalización prevista: diciembre 2026.",
      en: "AI Maker & Automation Master's – thePower Tech School. In progress; expected completion: December 2026.",
    },
  },
  {
    id: "lade",
    title: {
      es: "Licenciatura en Administración y Dirección de Empresas (LADE).",
      en: "Bachelor's Degree in Business Administration and Management.",
    },
  },
  {
    id: "marketing-digital",
    title: {
      es: "Máster en Marketing Digital – thePower.",
      en: "Master's in Digital Marketing – thePower.",
    },
  },
  {
    id: "conversational-framework",
    title: {
      es: "Designing and implementing a conversational framework for support teams – thePower.",
      en: "Designing and implementing a conversational framework for support teams – thePower.",
    },
  },
  {
    id: "support-managers",
    title: {
      es: "Fundamentals for support managers – thePower.",
      en: "Fundamentals for support managers – thePower.",
    },
  },
  {
    id: "transformacion-digital",
    title: {
      es: "Certificación en Transformación Digital – thePower.",
      en: "Digital Transformation Certification – thePower.",
    },
  },
  {
    id: "british-council",
    title: {
      es: "Educación Bilingüe Integral – British Council School.",
      en: "Integrated Bilingual Education – British Council School.",
    },
  },
];
