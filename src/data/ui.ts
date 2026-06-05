import type { T } from "./content";

/* Cadenas de interfaz (nav, botones, encabezados de sección) */
export const nav: { id: string; label: T }[] = [
  { id: "about", label: { es: "Sobre mí", en: "About" } },
  { id: "projects", label: { es: "Proyectos", en: "Projects" } },
  { id: "achievements", label: { es: "Logros", en: "Achievements" } },
  { id: "community", label: { es: "Comunidad", en: "Community" } },
  { id: "experience", label: { es: "Experiencia", en: "Experience" } },
  { id: "contact", label: { es: "Contacto", en: "Contact" } },
];

export const ui = {
  cta_projects: { es: "Ver proyectos", en: "View projects" } as T,
  cta_contact: { es: "Contáctame", en: "Get in touch" } as T,
  cta_cv: { es: "Descargar CV", en: "Download CV" } as T,
  scroll: { es: "Desliza", en: "Scroll" } as T,

  about_kicker: { es: "Sobre mí", en: "About me" } as T,
  about_title: { es: "De sostener la operación a diseñar inteligencia", en: "From keeping operations alive to designing intelligence" } as T,

  projects_kicker: { es: "Proyectos seleccionados", en: "Selected work" } as T,
  projects_title: { es: "Agentes que razonan y actúan", en: "Agents that reason and act" } as T,
  projects_lead: { es: "No son chatbots. Son sistemas con criterio: memoria, herramientas, validación y arquitectura de producción.", en: "Not chatbots. Systems with judgment: memory, tools, validation and production architecture." } as T,
  problem_label: { es: "El problema", en: "The problem" } as T,
  solution_label: { es: "La solución", en: "The solution" } as T,
  stack_label: { es: "Stack", en: "Stack" } as T,

  achievements_kicker: { es: "Logros · Hackathons", en: "Achievements · Hackathons" } as T,
  achievements_title: { es: "Probado bajo presión", en: "Proven under pressure" } as T,
  achievements_lead: { es: "Soluciones de IA construidas en días, validadas frente a mentores y expertos de la industria.", en: "AI solutions built in days, validated before industry mentors and experts." } as T,
  role_label: { es: "Mi rol", en: "My role" } as T,

  experience_kicker: { es: "Trayectoria", en: "Career" } as T,
  experience_title: { es: "Experiencia", en: "Experience" } as T,
  education_label: { es: "Educación", en: "Education" } as T,
  skills_label: { es: "Habilidades técnicas", en: "Technical skills" } as T,

  contact_kicker: { es: "Contacto", en: "Contact" } as T,
  contact_title: { es: "Construyamos algo que razone", en: "Let's build something that reasons" } as T,
  contact_lead: { es: "Abierto a oportunidades en ingeniería de IA, sistemas agénticos y automatización. ¿Tienes un reto interesante?", en: "Open to opportunities in AI engineering, agentic systems and automation. Got an interesting challenge?" } as T,
  email_label: { es: "Escríbeme", en: "Email me" } as T,
  rights: { es: "Diseñado y construido por Diego Zendreros.", en: "Designed and built by Diego Zendreros." } as T,
};
