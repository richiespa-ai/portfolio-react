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
      es: "Student Success & Operations",
      en: "Student Success & Operations",
    },
    period: {
      es: "Abril 2020 – Septiembre 2026",
      en: "April 2020 – September 2026",
    },
    points: {
      es: [
        "Liderazgo operativo en el área de Student Success y soporte, coordinando a un equipo de 6 personas sin cargo formal: gestión del ciclo de vida del alumno, resolución de incidencias técnicas y optimización de flujos de comunicación masiva.",
        "Desde 2025, diseño y puesta en producción de dos herramientas internas con IA construidas con Claude Code (ver Proyectos).",
        "En ambas herramientas, responsable del proyecto de principio a fin: detección de la necesidad y propuesta a dirección, definición de requisitos con el equipo, pruebas, despliegue, formación de usuarios y seguimiento de KPIs.",
        "Análisis de métricas de soporte en Intercom (tiempos de respuesta, NPS y calidad) para identificar cuellos de botella y proponer mejoras de producto y automatización de flujos. Informes de devoluciones y de ventas en Looker Studio durante un año, hasta sustituir los de devoluciones por el módulo de KPIs de la herramienta de reembolsos.",
      ],
      en: [
        "Operational leadership in Student Success and support, coordinating a team of 6 people without a formal title: student lifecycle management, technical issue resolution and optimization of mass-communication workflows.",
        "Since 2025, designed and took to production two internal AI tools built with Claude Code (see Projects).",
        "For both tools, end-to-end project ownership: identifying the need and pitching it to management, defining requirements with the team, testing, deployment, user training and KPI tracking.",
        "Analysis of support metrics in Intercom (response times, NPS and quality) to identify bottlenecks and propose product improvements and workflow automation. Built refund and sales reports in Looker Studio for a year, until the refunds reporting moved to the KPI module of the refunds tool.",
      ],
    },
  },
  {
    id: "genera-asesor",
    company: "Genera Asesores Tributarios",
    role: {
      es: "Asesor Externo (colaboración puntual, en paralelo a thePower)",
      en: "External Advisor (occasional, alongside thePower)",
    },
    period: {
      es: "Mayo 2020 – Diciembre 2025",
      en: "May 2020 – December 2025",
    },
    points: {
      es: [
        "Asesoramiento puntual en materia operativa y, más recientemente, en automatización de procesos, compaginado con la actividad principal en thePower.",
      ],
      en: [
        "Occasional advisory work on operations and, more recently, on process automation, alongside the main role at thePower.",
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
        "Dirección de cuentas clave y optimización de la operativa de servicio al cliente, asegurando la escalabilidad de los procesos internos de asesoramiento.",
      ],
      en: [
        "Managed key accounts and optimized customer service operations, ensuring the scalability of internal advisory processes.",
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
        "Prospección y gestión de grandes cuentas B2B en consultoría de valor añadido, negociación de propuestas comerciales complejas, coordinación de los proyectos entre el cliente y los equipos técnicos internos, y fidelización de cartera, cumpliendo consistentemente los objetivos anuales de facturación.",
      ],
      en: [
        "Prospecting and management of large B2B accounts in value-added consulting, negotiation of complex commercial proposals, coordination of projects between the client and internal technical teams, and portfolio retention, consistently meeting annual revenue targets.",
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
        "Inició como Agente de Seguros y asumió la jefatura de un equipo comercial de 5 personas en 2004, compaginando ambas responsabilidades hasta 2007: formación, tutoría, prospección de mercado y control de objetivos por zonas geográficas.",
      ],
      en: [
        "Started as an Insurance Agent and took on the leadership of a 5-person sales team in 2004, combining both roles until 2007: training, mentoring, market prospecting and target management by geographic area.",
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
      en: "Bachelor's Degree in Business Administration and Management (LADE).",
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
