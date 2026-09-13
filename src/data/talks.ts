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
  /** ISO 3166-1 alpha-2. Links the talk to a country on the map. */
  country: string;
  /** How it was delivered. Virtual talks still plot on the host country. */
  mode: "in-person" | "virtual";
  date: string;         // ISO "YYYY-MM-DD". Drives ordering and upcoming/past.
  eventUrl?: string;
  slidesUrl?: string;
  slidesFile?: string;
  videoUrl?: string;
  tags?: string[];
}

export const talks: Talk[] = [
  {
    slug: "egress-cilium",
    date: "2026-11-30", // [REPLACE] fecha real del evento
    event: "KCD Argentina 2026", // [REPLACE] confirmar el nombre exacto
    location: "Argentina", // [REPLACE] ciudad
    country: "AR",
    mode: "in-person", // [REPLACE] si es virtual
    title: {
      en: "Your agent can call anywhere: egress containment with Cilium",
      es: "Tu agente puede llamar a cualquier lado: contención de egress con Cilium",
    },
    description: {
      en: "An agent decides at runtime which API it is going to call. That is its usefulness and also its problem: from the network's point of view it is a workload whose destination cannot be predicted at deploy time — and the same goes for any workload that resolves its egress dynamically. Native NetworkPolicy reasons about IP addresses, and that model cannot express \"this pod talks to these two APIs and nothing else\": the IP behind a name changes, and the policy stops meaning anything. Cilium solves it by reasoning about identities and domain names. In this talk I build an egress perimeter for a workload like that, we watch it work in Hubble, and we look at what this approach might not solve.",
      es: "Un agente decide en tiempo de ejecución a qué API va a llamar. Esa es su utilidad y también su problema: desde la perspectiva de la red es una carga cuyo destino no podemos predecir al momento de desplegarla, y lo mismo ocurre para cualquier workload que resuelva su salida de manera dinámica. Las NetworkPolicy nativas razonan en direcciones IP, y ese modelo no puede expresar \"este pod habla con estas dos APIs y con nada más\": la IP detrás de un nombre cambia, y la política deja de tener razón de ser. Cilium resuelve eso razonando en identidades y en nombres de dominio. En esta charla armo un perímetro de egress para una carga de este tipo, lo veremos funcionar en Hubble, y mostraremos lo que este enfoque podría no resolver.",
    },
    // [REPLACE] cuando tengas la PPT: expórtala a PDF, ponla en public/slides/
    // y descomenta la línea de abajo. O usa slidesUrl si la subes a un deck externo.
    // slidesFile: "/slides/egress-cilium.pdf",
    tags: ["Cilium", "Kubernetes", "eBPF", "Network policy", "Hubble"],
  },
  {
    slug: "golden-paths-backstage",
    date: "2026-08-22", // [REPLACE] fecha real del evento — decide si sale como "Dictada" o "Próxima"
    event: "KCD Lima 2026",
    location: "Lima, PE",
    country: "PE",
    mode: "in-person", // [REPLACE] si fue virtual
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
    country: "PE",
    mode: "in-person", // [REPLACE] si fue virtual
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

/** Talks grouped by country, for the map. Upcoming countries sort first. */
export const talksByCountry = [...new Map(
  talksSorted.map(t => [t.country, talksSorted.filter(x => x.country === t.country)])
).entries()].map(([country, items]) => ({
  country,
  items,
  hasUpcoming: items.some(t => isUpcoming(t)),
}));

export const talkCounts = {
  get total() { return talks.length; },
  get past() { return talks.filter(t => !isUpcoming(t)).length; },
  get upcoming() { return talks.filter(t => isUpcoming(t)).length; },
};
