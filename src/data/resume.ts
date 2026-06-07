// src/data/resume.ts
// Replace all mock values with your real data. Fields marked [REPLACE] are placeholders.

export type Lang = "en" | "es";

export interface Certification {
  vendor: string;
  color: "cncf" | "hashi" | "azure" | "aws" | "github" | "gcp" | "oci" | "gray";
  items: { name: string; url?: string }[];
}

export interface ExperienceEntry {
  role: Record<Lang, string>;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: Record<Lang, string[]>;
  tags?: string[];
}

export interface OpenSourceEntry {
  project: string;
  org: string;
  url: string;
  period: string;
  description: Record<Lang, string>;
  tags?: string[];
}

export interface SkillGroup {
  category: Record<Lang, string>;
  items: string[];
}

export interface Education {
  degree: Record<Lang, string>;
  institution: string;
  location: string;
  year: string;
  gpa?: string;
}

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    vendor: "CNCF — Kubestronaut",
    color: "cncf",
    items: [
      { name: "KCNA", url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "KCSA", url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "CKA",  url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "CKAD", url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "CKS",  url: "https://www.credly.com/badges/[REPLACE]" },
    ],
  },
  {
    vendor: "HashiCorp",
    color: "hashi",
    items: [
      { name: "Terraform Associate", url: "https://www.credly.com/badges/[REPLACE]" },
    ],
  },
  {
    vendor: "Microsoft Azure",
    color: "azure",
    items: [
      { name: "AZ-900", url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "AZ-104", url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "AZ-400", url: "https://www.credly.com/badges/[REPLACE]" },
      // [REPLACE] add more Azure certs here
    ],
  },
  {
    vendor: "AWS",
    color: "aws",
    items: [
      { name: "Cloud Practitioner",    url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "Solutions Architect",   url: "https://www.credly.com/badges/[REPLACE]" },
      // [REPLACE] add more AWS certs here
    ],
  },
  {
    vendor: "GitHub",
    color: "github",
    items: [
      { name: "GitHub Actions",        url: "https://www.credly.com/badges/[REPLACE]" },
      { name: "GitHub Administration", url: "https://www.credly.com/badges/[REPLACE]" },
      // [REPLACE] add more GitHub certs here
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: ExperienceEntry[] = [
  {
    role: {
      en: "Senior DevSecOps / Cloud Engineer",
      es: "Ingeniero Senior DevSecOps / Cloud",
    },
    company: "Acme Corp",         // [REPLACE]
    location: "Lima, PE",
    period: "2022 — present",
    current: true,
    bullets: {
      en: [
        "Multicloud governance and platform strategy across GCP, AWS, Azure, and OCI",
        "Manage CI/CD pipelines and toolchain across Azure DevOps and GitHub Enterprise Cloud",
        "Support Data and GenAI teams with infrastructure, security, and delivery automation",
        "Lead GitHub Copilot rollout — adoption strategy, licensing governance, prompt guidelines",
        "Drive security initiatives: SAST, container scanning, secret detection embedded in pipelines",
      ],
      es: [
        "Gobierno y estrategia de plataforma multicloud en GCP, AWS, Azure y OCI",
        "Gestión de pipelines CI/CD en Azure DevOps y GitHub Enterprise Cloud",
        "Soporte a equipos de Data y GenAI con infraestructura, seguridad y automatización",
        "Lideré el despliegue de GitHub Copilot — adopción, licencias y guías de prompting",
        "Iniciativas de seguridad: SAST, escaneo de contenedores, detección de secretos en pipelines",
      ],
    },
    tags: ["GCP", "AWS", "Azure", "OCI", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps"],
  },
  {
    role: {
      en: "Cloud / DevOps Engineer",
      es: "Ingeniero Cloud / DevOps",
    },
    company: "Beta Technologies",  // [REPLACE]
    location: "Lima, PE",
    period: "2020 — 2022",
    bullets: {
      en: [
        "Kubernetes cluster provisioning, hardening, and lifecycle management",
        "Terraform IaC for multi-environment cloud deployments",
        "Security scanning and compliance controls embedded in CI/CD pipelines",
        "Incident response and on-call rotation for production systems",
      ],
      es: [
        "Aprovisionamiento, hardening y gestión del ciclo de vida de clústeres Kubernetes",
        "IaC con Terraform para despliegues cloud multi-entorno",
        "Controles de seguridad y cumplimiento integrados en pipelines CI/CD",
        "Respuesta a incidentes y guardia de producción",
      ],
    },
    tags: ["Kubernetes", "Terraform", "GCP", "Docker", "Helm"],
  },
  {
    role: {
      en: "Junior DevOps Engineer",
      es: "Ingeniero DevOps Junior",
    },
    company: "Gamma Solutions",    // [REPLACE]
    location: "Lima, PE",
    period: "2018 — 2020",
    bullets: {
      en: [
        "Built and maintained CI/CD pipelines for microservices on GCP",
        "Automated infrastructure provisioning with Bash and Ansible",
        "Containerized legacy applications using Docker and Compose",
      ],
      es: [
        "Construcción y mantenimiento de pipelines CI/CD para microservicios en GCP",
        "Automatización de aprovisionamiento de infraestructura con Bash y Ansible",
        "Containerización de aplicaciones legacy con Docker y Compose",
      ],
    },
    tags: ["GCP", "Docker", "Ansible", "Bash", "Linux"],
  },
];

// ─── Open Source ──────────────────────────────────────────────────────────────

export const openSource: OpenSourceEntry[] = [
  {
    project: "Microcks",
    org: "CNCF Incubating",
    url: "https://microcks.io",
    period: "2025 — present",
    description: {
      en: "Contributing to Microcks, the open-source API mocking and contract testing platform. Focus on CI/CD integrations and Kubernetes operator improvements.",
      es: "Contribución a Microcks, la plataforma open-source de mocking de APIs y contract testing. Foco en integraciones CI/CD y mejoras al operador de Kubernetes.",
    },
    tags: ["Kubernetes", "API Testing", "Go", "CNCF"],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    category: { en: "Cloud platforms", es: "Plataformas cloud" },
    items: ["GCP", "AWS", "Azure", "OCI"],
  },
  {
    category: { en: "Container & orchestration", es: "Contenedores y orquestación" },
    items: ["Kubernetes", "Docker", "Helm", "containerd"],
  },
  {
    category: { en: "IaC & automation", es: "IaC y automatización" },
    items: ["Terraform", "Ansible", "Bash", "Python"],
  },
  {
    category: { en: "CI/CD", es: "CI/CD" },
    items: ["GitHub Actions", "Azure DevOps", "GitHub Enterprise Cloud", "ArgoCD"],
  },
  {
    category: { en: "Security", es: "Seguridad" },
    items: ["Trivy", "Checkov", "OPA / Gatekeeper", "Vault", "SOPS"],
  },
  {
    category: { en: "Observability", es: "Observabilidad" },
    items: ["Prometheus", "Grafana", "OpenTelemetry", "Loki", "Jaeger"],
  },
  {
    category: { en: "Dev tools", es: "Herramientas de desarrollo" },
    items: ["GitHub Copilot", "Jira", "Microcks"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: {
      en: "Bachelor's in Systems Engineering",   // [REPLACE]
      es: "Bachiller en Ingeniería de Sistemas", // [REPLACE]
    },
    institution: "Universidad Nacional [REPLACE]",
    location: "Lima, PE",
    year: "2018",
    gpa: "3.8 / 4.0",  // [REPLACE] or remove
  },
];

// ─── Stats (shown on About page) ─────────────────────────────────────────────

export const stats = {
  yearsExperience: 7,      // [REPLACE]
  certifications: 12,      // [REPLACE] total count
  cloudProviders: 4,
  openSourceProjects: 1,   // [REPLACE]
};
