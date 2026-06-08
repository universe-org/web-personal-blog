// src/data/resume.ts

export type Lang = "en" | "es";

export interface Certification {
  vendor: string;
  color: "cncf" | "hashi" | "azure" | "aws" | "github" | "gcp" | "gray";
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
}

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    vendor: "CNCF — Kubestronaut",
    color: "cncf",
    items: [
      { name: "KCNA" },
      { name: "KCSA" },
      { name: "CKA" },
      { name: "CKAD" },
      { name: "CKS" },
    ],
  },
  {
    vendor: "GitHub",
    color: "github",
    items: [
      { name: "GitHub Foundations" },
      { name: "GitHub Actions" },
      { name: "GitHub Advanced Security" },
    ],
  },
  {
    vendor: "HashiCorp",
    color: "hashi",
    items: [
      { name: "Terraform Associate" },
    ],
  },
  {
    vendor: "Microsoft Azure",
    color: "azure",
    items: [
      { name: "AZ-900" },
      { name: "AZ-104" },
    ],
  },
  {
    vendor: "AWS",
    color: "aws",
    items: [
      { name: "Cloud Practitioner" },
      { name: "Developer Associate" },
      { name: "Solutions Architect Associate" },
    ],
  },
  {
    vendor: "Platform Engineering",
    color: "gray",
    items: [
      { name: "Introduction to Platform Engineering" },
      { name: "GitOps for Platform Engineering" },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: ExperienceEntry[] = [
  {
    role: {
      en: "Senior DevOps Engineer",
      es: "Senior DevOps Engineer",
    },
    company: "INDRA",
    location: "Lima, PE",
    period: "Dec 2025 — present",
    current: true,
    bullets: {
      en: [
        "Support Data and GenAI teams — CI/CD for AI workloads, application diagnostics, and pipeline improvement planning",
        "Presentation and defense of initiatives to accelerate TTM across the SDLC",
        "Analysis and optimization of cloud architectures, IaC, Kubernetes, and Dockerfiles",
        "Implementation of AKS runners for Azure DevOps via Actions Runner Controller",
        "Migration of Jenkins and Cloud Build pipelines to Azure DevOps",
        "Governance and standards for Jira, GitHub Enterprise Cloud, Azure DevOps, GitHub Advanced Security, GitHub Copilot, MCP, and AI agents",
        "Cloud support across AWS, GCP, and OCI for all environments",
        "Pipeline templates for OKE, ECS, Lambdas, VertexAI, Cloud Run, GCP Buckets, Airflow",
      ],
      es: [
        "Soporte a equipos de Data y GenAI — CI/CD para cargas de IA, diagnóstico de aplicaciones y planificación de mejoras en pipelines",
        "Exposición y defensa de propuestas de iniciativas para agilizar el TTM en el SDLC",
        "Análisis y optimización de arquitecturas cloud, IaC, Kubernetes y Dockerfiles",
        "Implementación de runners en AKS para Azure DevOps mediante Actions Runner Controller",
        "Migración de pipelines de Jenkins y Cloud Build a Azure DevOps",
        "Gobierno y lineamientos para Jira, GitHub Enterprise Cloud, Azure DevOps, GitHub Advanced Security, GitHub Copilot, MCP y agentes de IA",
        "Soporte cloud en AWS, GCP y OCI para todos los ambientes",
        "Templates de pipelines para OKE, ECS, Lambdas, VertexAI, Cloud Run, Buckets GCP, Airflow",
      ],
    },
    tags: ["Azure DevOps", "AKS", "GCP", "AWS", "OCI", "GitHub Actions", "Kubernetes", "Terraform"],
  },
  {
    role: {
      en: "DevSecOps Specialist",
      es: "Especialista DevSecOps",
    },
    company: "INETUM",
    location: "Lima, PE",
    period: "Aug 2025 — Dec 2025",
    bullets: {
      en: [
        "Migration of pipelines and artifacts from Azure DevOps to GitHub Actions",
        "Developer support across AKS, OpenShift, APIM, CAAPI, Mobile, and Cloud stacks",
        "Implementation of Actions Runner Controller on AKS for elastic runner infrastructure",
        "Administration, planning, and governance of GitHub Enterprise Cloud and GitHub Copilot",
        "Pipeline, process, and security improvement planning",
        "Administration and governance of GitHub Advanced Security",
      ],
      es: [
        "Migración de pipelines y artefactos de Azure DevOps a GitHub Actions",
        "Soporte a desarrolladores en AKS, OpenShift, APIM, CAAPI, Mobile y Cloud",
        "Implementación de Actions Runner Controller en AKS para infraestructura elástica",
        "Administración, planeamiento y gobierno de GitHub Enterprise Cloud y GitHub Copilot",
        "Identificación y planeamiento de mejoras en pipelines, procesos y seguridad",
        "Administración y gobierno de GitHub Advanced Security",
      ],
    },
    tags: ["GitHub Actions", "AKS", "OpenShift", "GitHub Enterprise Cloud", "GitHub Copilot", "GHAS"],
  },
  {
    role: {
      en: "DevSecOps Engineer",
      es: "Ingeniero DevSecOps",
    },
    company: "SOAINT",
    location: "Lima, PE",
    period: "Jul 2024 — Jul 2025",
    bullets: {
      en: [
        "CI/CD automation and GitHub administration — workflow creation with GitHub Actions",
        "Microservices migration projects — Java Gradle, Golang, Python implementations",
        "API development with Python (FastAPI) and Golang (Gin)",
        "Infrastructure support with Terraform on Azure",
        "AKS management — troubleshooting, version upgrades, Container Apps, APIM, databases, monitoring with Log Analytics and Grafana",
        "GitHub Copilot rollout leadership — implementation, guidelines, support, and governance",
      ],
      es: [
        "Automatización CI/CD y administración en GitHub — creación de workflows con GitHub Actions",
        "Proyectos de migración a microservicios — implementaciones en Java Gradle, Golang y Python",
        "Desarrollo de APIs con Python (FastAPI) y Golang (Gin)",
        "Soporte de infraestructura con Terraform en Azure",
        "Gestión de AKS — troubleshooting, upgrades de versión, Container Apps, APIM, bases de datos, monitoreo con Log Analytics y Grafana",
        "Liderazgo del despliegue de GitHub Copilot — implementación, lineamientos, soporte y gobierno",
      ],
    },
    tags: ["GitHub Actions", "Azure", "AKS", "Terraform", "Golang", "Python", "GitHub Copilot"],
  },
  {
    role: {
      en: "Cloud Engineer",
      es: "Ingeniero Cloud",
    },
    company: "ENTELGY",
    location: "Lima, PE",
    period: "Jul 2022 — Jul 2024",
    bullets: {
      en: [
        "AWS cloud administration — RDS, Route 53, CloudFront, Lambda, EC2, CloudWatch, EKS, IAM, and Cost Management",
        "Kubernetes cluster administration and monitoring",
      ],
      es: [
        "Administración cloud en AWS — RDS, Route 53, CloudFront, Lambda, EC2, CloudWatch, EKS, IAM y gestión de costos",
        "Administración y monitorización de clusters Kubernetes",
      ],
    },
    tags: ["AWS", "EKS", "Kubernetes", "EC2", "Lambda", "CloudWatch", "IAM"],
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
    tags: ["Kubernetes", "API Testing", "CNCF"],
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
    items: ["Kubernetes", "AKS", "EKS", "Docker", "Helm", "OpenShift"],
  },
  {
    category: { en: "CI/CD", es: "CI/CD" },
    items: ["GitHub Actions", "Azure DevOps", "Jenkins", "Cloud Build", "ArgoCD", "ARC"],
  },
  {
    category: { en: "IaC & automation", es: "IaC y automatización" },
    items: ["Terraform", "Ansible", "Bash", "Python", "Golang"],
  },
  {
    category: { en: "Security", es: "Seguridad" },
    items: ["GitHub Advanced Security", "GHAS", "Trivy", "Checkov", "Gitleaks", "OPA"],
  },
  {
    category: { en: "Observability", es: "Observabilidad" },
    items: ["Prometheus", "Grafana", "Log Analytics", "CloudWatch", "OpenTelemetry"],
  },
  {
    category: { en: "Dev tools & AI", es: "Herramientas y AI" },
    items: ["GitHub Copilot", "GitHub Enterprise Cloud", "Jira", "Microcks", "MCP"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: {
      en: "Systems Engineering",
      es: "Ingeniería de Sistemas",
    },
    institution: "Universidad Tecnológica del Perú",
    location: "Lima, PE",
    year: "",
  },
  {
    degree: {
      en: "BSc. Mathematics",
      es: "BsC. Matemática",
    },
    institution: "Universidad Nacional de Ingeniería",
    location: "Lima, PE",
    year: "",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = {
  yearsExperience: 5,
  certifications: 15,
  cloudProviders: 4,
  openSourceProjects: 1,
};
