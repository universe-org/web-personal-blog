// src/data/posts.ts
// Single source for the notes index. Both /en/blog/ and /es/blog/ read from
// here, so the two languages cannot drift apart.

export type Lang = "en" | "es";

export interface Post {
  slug: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  date: string;          // ISO, sorts and formats from this
  tags: string[];        // product names — not translated
  readingTime: number;
  published?: boolean;   // false/undefined => listed as "coming soon"
}

export const posts: Post[] = [
  {
    slug: "arc-runners-aks",
    date: "2025-05-04",
    readingTime: 10,
    tags: ["GitHub Actions", "AKS", "Kubernetes", "ARC"],
    title: {
      en: "Ephemeral GitHub Actions runners on AKS with Actions Runner Controller",
      es: "Runners efímeros de GitHub Actions en AKS con Actions Runner Controller",
    },
    excerpt: {
      en: "How to set up elastic, ephemeral self-hosted runners on Azure Kubernetes Service using ARC — including KEDA autoscaling and common pitfalls around pip storage exhaustion.",
      es: "Cómo montar runners self-hosted elásticos y efímeros sobre Azure Kubernetes Service con ARC — incluyendo autoescalado con KEDA y los problemas típicos de agotamiento de almacenamiento por pip.",
    },
  },
  {
    slug: "devsecops-github-actions",
    date: "2025-03-12",
    readingTime: 8,
    tags: ["DevSecOps", "GitHub Actions", "Trivy", "Gitleaks"],
    title: {
      en: "Embedding security into CI/CD pipelines with GitHub Actions",
      es: "Integrando seguridad en pipelines CI/CD con GitHub Actions",
    },
    excerpt: {
      en: "A practical guide to adding container scanning, secret detection, and IaC linting to your GitHub Actions workflows without slowing down developers.",
      es: "Guía práctica para agregar escaneo de contenedores, detección de secretos y linting de IaC a tus workflows de GitHub Actions sin frenar a los developers.",
    },
  },
  {
    slug: "github-copilot-enterprise-rollout",
    date: "2025-02-17",
    readingTime: 9,
    tags: ["GitHub Copilot", "GitHub Enterprise", "DevEx"],
    title: {
      en: "Rolling out GitHub Copilot at enterprise scale: lessons learned",
      es: "Desplegando GitHub Copilot a escala enterprise: lecciones aprendidas",
    },
    excerpt: {
      en: "What actually works when deploying Copilot to hundreds of developers — licensing governance, prompt guidelines, productivity metrics, and how to handle the skeptics.",
      es: "Qué funciona de verdad al desplegar Copilot a cientos de developers — gobierno de licencias, guías de prompting, métricas de productividad y cómo manejar a los escépticos.",
    },
  },
  {
    slug: "kubestronaut-journey",
    date: "2025-01-28",
    readingTime: 12,
    tags: ["Kubernetes", "CNCF", "Certifications", "Career"],
    title: {
      en: "How I became a Kubestronaut: passing all 5 CNCF Kubernetes exams",
      es: "Cómo me convertí en Kubestronaut: aprobando los 5 exámenes CNCF de Kubernetes",
    },
    excerpt: {
      en: "My study strategy, timeline, and tips for passing KCNA, KCSA, CKA, CKAD, and CKS back to back — including what almost tripped me up on each one.",
      es: "Mi estrategia de estudio, los tiempos y consejos para aprobar KCNA, KCSA, CKA, CKAD y CKS de corrido — incluyendo qué casi me tumba en cada uno.",
    },
  },
  {
    slug: "terraform-azure-governance",
    date: "2024-11-05",
    readingTime: 11,
    tags: ["Terraform", "Azure", "Azure Policy", "IaC"],
    title: {
      en: "Azure governance at scale with Terraform and Azure Policy",
      es: "Gobierno de Azure a escala con Terraform y Azure Policy",
    },
    excerpt: {
      en: "Structuring Management Groups, RBAC, and Policy definitions as Terraform modules to enforce org-wide guardrails without creating toil for engineering teams.",
      es: "Estructurando Management Groups, RBAC y definiciones de Policy como módulos Terraform para aplicar guardrails a nivel organización sin generar carga para los equipos de ingeniería.",
    },
  },
  {
    slug: "microcks-contract-testing",
    date: "2024-09-22",
    readingTime: 7,
    tags: ["Microcks", "API Testing", "CNCF", "GitHub Actions"],
    title: {
      en: "API contract testing in CI with Microcks and GitHub Actions",
      es: "Contract testing de APIs en CI con Microcks y GitHub Actions",
    },
    excerpt: {
      en: "An introduction to Microcks as a CNCF-backed approach to API mocking and contract testing, with a walkthrough of integrating it into a GitHub Actions pipeline.",
      es: "Introducción a Microcks como enfoque respaldado por la CNCF para mocking de APIs y contract testing, con un recorrido de su integración en un pipeline de GitHub Actions.",
    },
  },
];

/** Newest first. */
export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));
