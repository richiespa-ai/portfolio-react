export type Competency = {
  id: string;
  category: { es: string; en: string };
  items: { es: string[]; en: string[] };
};

export type TechnologyLevel = "produccion" | "proyectos" | "formacion";

export type Technology = {
  name: string;
  level: TechnologyLevel;
};

export const levelLabels: Record<TechnologyLevel, { es: string; en: string }> =
  {
    produccion: { es: "En producción", en: "In production" },
    proyectos: { es: "En proyectos propios", en: "In personal projects" },
    formacion: { es: "En formación", en: "In training" },
  };

export const competencies: Competency[] = [
  {
    id: "ia-aplicada",
    category: { es: "IA aplicada", en: "Applied AI" },
    items: {
      es: [
        "Asistentes conversacionales con IA",
        "Prompt engineering",
        "Claude Code (CLI)",
        "APIs de LLM (Grok, OpenAI)",
        "Google AI Studio",
      ],
      en: [
        "Conversational AI assistants",
        "Prompt engineering",
        "Claude Code (CLI)",
        "LLM APIs (Grok, OpenAI)",
        "Google AI Studio",
      ],
    },
  },
  {
    id: "automatizacion-procesos",
    category: { es: "Automatización y procesos", en: "Automation & processes" },
    items: {
      es: [
        "Detección de oportunidades de automatización",
        "Diseño end-to-end de herramientas internas",
        "Workflows de Intercom (enrutamiento automático de conversaciones)",
        "PostgreSQL / Data Warehouse",
        "Control de acceso basado en roles",
        "Reporting y KPIs (Looker Studio)",
      ],
      en: [
        "Identifying automation opportunities",
        "End-to-end design of internal tools",
        "Intercom workflows (automated conversation routing)",
        "PostgreSQL / Data Warehouse",
        "Role-based access control",
        "Reporting and KPIs (Looker Studio)",
      ],
    },
  },
  {
    id: "adopcion-ia-responsable",
    category: {
      es: "Adopción e IA responsable",
      en: "Adoption & responsible AI",
    },
    items: {
      es: [
        "Formación y acompañamiento de usuarios",
        "Piloto y despliegue gradual",
        "Validación humana en decisiones sensibles",
        "Derivación a persona cuando la IA no debe responder",
      ],
      en: [
        "User training and support",
        "Pilot and phased rollout",
        "Human validation for sensitive decisions",
        "Handoff to a person when the AI should not answer",
      ],
    },
  },
  {
    id: "operaciones-atencion",
    category: {
      es: "Operaciones y atención al cliente/estudiante",
      en: "Operations & customer/student support",
    },
    items: {
      es: [
        "Gestión del ciclo de vida del alumno",
        "Resolución de incidencias complejas",
        "Optimización de flujos de soporte",
      ],
      en: [
        "Student lifecycle management",
        "Complex issue resolution",
        "Support workflow optimization",
      ],
    },
  },
  {
    id: "gestion-negocio",
    category: { es: "Gestión de negocio", en: "Business management" },
    items: {
      es: [
        "Ventas B2B",
        "Negociación de cuentas clave",
        "Retención y fidelización de cartera",
        "Salesforce como usuario (con algo de configuración)",
      ],
      en: [
        "B2B sales",
        "Key account negotiation",
        "Portfolio retention and loyalty",
        "Salesforce as a user (with some configuration)",
      ],
    },
  },
];

export const technologies: Technology[] = [
  { name: "Claude Code", level: "produccion" },
  { name: "PostgreSQL", level: "produccion" },
  { name: "API de Grok", level: "produccion" },
  { name: "Streamlit", level: "proyectos" },
  { name: "SQLite", level: "proyectos" },
  { name: "Vite", level: "proyectos" },
  { name: "HTML", level: "proyectos" },
  { name: "CSS", level: "proyectos" },
  { name: "GitHub Pages", level: "proyectos" },
  { name: "API de OpenAI", level: "proyectos" },
  { name: "Google AI Studio", level: "proyectos" },
  { name: "React", level: "formacion" },
  { name: "TypeScript", level: "formacion" },
  { name: "Tailwind", level: "formacion" },
  { name: "Zustand", level: "formacion" },
  { name: "TanStack Query", level: "formacion" },
  { name: "shadcn", level: "formacion" },
];
