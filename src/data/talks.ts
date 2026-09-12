// src/data/talks.ts
// [REPLACE] Swap the placeholder values for your real talks. Keep the shape.
//
// Slides can live in either place — set whichever you have:
//   · slidesUrl  → an external deck (SpeakerDeck, Google Slides, Canva, …)
//   · slidesFile → a PDF you commit under public/slides/, e.g. "/slides/kcd-lima-2025.pdf"
// If you set both, the local PDF wins and the external link is offered beside it.

export type Lang = "en" | "es";

export interface Talk {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  event: string;        // proper name — not translated
  location: string;
  date: string;         // ISO "YYYY-MM-DD". Drives ordering and upcoming/past.
  eventUrl?: string;
  slidesUrl?: string;
  slidesFile?: string;
  videoUrl?: string;
  tags?: string[];
}

export const talks: Talk[] = [
  {
    slug: "talk-03",
    date: "2026-11-30", // [REPLACE] the real date — a future date marks it "upcoming"
    event: "[REPLACE] Event name",
    location: "[REPLACE] Lima, PE",
    title: {
      en: "[REPLACE] Talk title in English",
      es: "[REPLACE] Título de la charla en español",
    },
    description: {
      en: "[REPLACE] One or two sentences on what the talk covers and who it is for.",
      es: "[REPLACE] Una o dos frases sobre qué cubre la charla y para quién es.",
    },
    tags: ["[REPLACE]"],
  },
  {
    slug: "golden-paths-backstage",
    date: "2026-08-22", // [REPLACE] fecha real del evento — decide si sale como "Dictada" o "Próxima"
    event: "KCD Lima 2026",
    location: "Lima, PE",
    title: {
      en: "Building Golden Paths for your team with Backstage",
      es: "Construyendo Golden Paths para tu equipo con Backstage",
    },
    description: {
      en: "How long does it take a developer to deploy a service on Kubernetes? For many teams the answer is: too long. Copy-pasted Helm charts, inconsistent pipelines, and stale documentation slow product teams down before they write their first line of business logic. This talk shows how Backstage turns that chaos into a golden path: the developer fills in a form and minutes later has a repository, Helm charts, a CI/CD pipeline, and a service registered in the catalog — without touching kubectl or hand-writing YAML, and aligned with Security, Operations, and Development. We cover the full architecture (Software Templates, a skeleton with Kubernetes manifests — Deployment, Service, HPA — and integration with other tooling) plus which metrics actually measure the impact on onboarding and configuration errors.",
      es: "¿Cuánto tiempo tarda un desarrollador en desplegar un servicio en Kubernetes? Para muchos equipos, la respuesta es: demasiado. Helm charts copiados, pipelines inconsistentes y documentación desactualizada frenan a los equipos de producto antes de escribir la primera línea de negocio. En esta charla veremos cómo Backstage convierte ese caos en un golden path: el desarrollador rellena un formulario y en minutos tiene repositorio, Helm charts, pipeline CI/CD y servicio registrado en el catálogo, sin tocar kubectl ni escribir YAML a mano, y alineados con los diferentes frentes: Seguridad, Operaciones y Desarrollo. Cubriremos la arquitectura completa (Software Templates, skeleton con manifiestos de Kubernetes — Deployment, Service, HPA — e integración con diferentes herramientas) y qué métricas usar para medir el impacto real en onboarding y errores de configuración.",
    },
    // [REPLACE] cuando tengas la PPT: expórtala a PDF, ponla en public/slides/
    // y descomenta la línea de abajo. O usa slidesUrl si la subes a un deck externo.
    // slidesFile: "/slides/golden-paths-backstage.pdf",
    tags: ["Backstage", "Platform Engineering", "Kubernetes", "Helm", "Golden Paths"],
  },
  {
    slug: "pull-request-como-firewall",
    date: "2026-06-13", // [REPLACE] fecha real del evento — decide si sale como "Dictada" o "Próxima"
    event: "GitHub Community Day Lima 2026",
    location: "Lima, PE",
    title: {
      en: "Your Pull Request as a firewall",
      es: "Tu Pull Request como firewall",
    },
    description: {
      en: "When you are building your first side projects or starting your first developer job, you usually focus on making the code work. In a professional setting it also has to be reviewable, secure, automated, and easy for other people to maintain. This talk shows how a Pull Request can become your application's first line of defence, and how GitHub helps bring DevSecOps practices in early: automated checks, code review, branch protection, safe secret handling, dependency control, and security analysis before the merge.",
      es: "Cuando estás construyendo tus primeros side projects o empezando tu primer trabajo como developer, normalmente te enfocas en que el código funcione. Pero en un entorno profesional también importa que el código sea revisable, seguro, automatizado y fácil de mantener por otras personas. En esta charla veremos cómo un Pull Request puede convertirse en una primera línea de defensa para tu aplicación, y cómo GitHub ayuda a incorporar buenas prácticas de DevSecOps desde etapas tempranas: validaciones automáticas, revisión de código, protección de ramas, manejo seguro de secretos, control de dependencias y análisis de seguridad antes del merge.",
    },
    // [REPLACE] cuando tengas la PPT: expórtala a PDF, ponla en public/slides/
    // y descomenta la línea de abajo. O usa slidesUrl si la subes a un deck externo.
    // slidesFile: "/slides/pull-request-como-firewall.pdf",
    tags: ["GitHub", "DevSecOps", "Pull Requests", "Branch protection", "Secrets"],
  },
];

/** A talk is upcoming until the day it happens. Recomputed on every build. */
export function isUpcoming(talk: Talk, now = new Date()): boolean {
  return new Date(`${talk.date}T23:59:59Z`) >= now;
}

/** Upcoming first (soonest first), then past talks newest first. */
export const talksSorted = [...talks].sort((a, b) => {
  const au = isUpcoming(a), bu = isUpcoming(b);
  if (au !== bu) return au ? -1 : 1;
  return au ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
});

export const talkCounts = {
  get total() { return talks.length; },
  get past() { return talks.filter(t => !isUpcoming(t)).length; },
  get upcoming() { return talks.filter(t => isUpcoming(t)).length; },
};
