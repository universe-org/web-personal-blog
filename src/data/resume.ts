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
  client?: string;
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
    items: [{ name: "Terraform Associate" }],
  },
  {
    vendor: "Microsoft Azure",
    color: "azure",
    items: [{ name: "AZ-900" }, { name: "AZ-104" }],
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
      en: "Senior Platform Engineer",
      es: "Senior Platform Engineer",
    },
    company: "INDRA",
    location: "Lima, PE",
    period: "Dec 2025 — present",
    current: true,
    bullets: {
      en: [
        "Client MiBanco — Support Data and GenAI teams: CI/CD for AI workloads, application diagnostics, timeline estimation, and pipeline improvement planning",
        "Client MiBanco — Analysis and optimization of cloud architectures, IaC, Kubernetes, and Dockerfiles",
        "Client MiBanco — Implementation of AKS runners for Azure DevOps",
        "Client MiBanco — Presentation and defense of initiatives to accelerate TTM across the SDLC",
        "Client Rimac Seguros — Member of Chapter DevSecOps and consultant at the CoE DevSecOps",
        "Client Rimac Seguros — Migration of Jenkins pipelines to Azure DevOps",
        "Client Rimac Seguros — Governance and standards for Jira, GitHub Enterprise, Azure DevOps, Teams, and GHAS",
        "Client Rimac Seguros — Support for Data and Analytics teams on GCP and AWS across all environments",
        "Client Rimac Seguros — Pipeline and template creation for AWS, GCP, and OCI workloads",
        "Client Rimac Seguros — Cloud support for AWS, GCP, and OCI",
        "Client Rimac Seguros — Best practices assessments, requirements definition, and template implementation",
        "Client Rimac Seguros — IaC governance definition and leadership; serverless and FinOps stack evaluation",
      ],
      es: [
        "Cliente MiBanco — Soporte a equipos de Data y GenAI: CI/CD para cargas de IA, diagnóstico de aplicaciones, estimación de tiempos y planificación de mejoras en pipelines",
        "Cliente MiBanco — Análisis y optimización de arquitecturas cloud, IaC, Kubernetes y Dockerfiles",
        "Cliente MiBanco — Implementación de runners en AKS para Azure DevOps",
        "Cliente MiBanco — Exposición y defensa de propuestas de iniciativas para agilizar el TTM en el SDLC",
        "Cliente Rimac Seguros — Miembro del Chapter DevSecOps y consultor del CoE DevSecOps",
        "Cliente Rimac Seguros — Migración de pipelines de Jenkins a Azure DevOps",
        "Cliente Rimac Seguros — Gobierno y lineamientos para Jira, GitHub Enterprise, Azure DevOps, Teams y GHAS",
        "Cliente Rimac Seguros — Soporte a equipos de Data y Analytics en GCP y AWS para todos los ambientes",
        "Cliente Rimac Seguros — Creación de pipelines y templates para AWS, GCP y OCI",
        "Cliente Rimac Seguros — Soporte cloud en AWS, GCP y OCI",
        "Cliente Rimac Seguros — Assessments de buenas prácticas, definición de requerimientos e implementación de templates",
        "Cliente Rimac Seguros — Definición y gobierno de IaC; evaluación de stacks serverless y FinOps",
      ],
    },
    tags: ["Azure DevOps", "AKS", "GCP", "AWS", "OCI", "GitHub Actions", "Kubernetes", "Terraform", "GHAS"],
  },
  {
    role: {
      en: "DevSecOps Specialist",
      es: "Especialista DevSecOps",
    },
    company: "INETUM",
    client: "Mi Banco",
    location: "Lima, PE",
    period: "Aug 2025 — Dec 2025",
    bullets: {
      en: [
        "Project: Azure DevOps to GitHub Enterprise Cloud migration for Mi Banco (banco de la microempresa)",
        "Migration of pipelines from Azure DevOps to GitHub Actions across OpenShift, JBoss, Middleware, Databricks, Data Factory, .NET, Java, Topaz, and others",
        "Migration of artifacts and repositories from Azure DevOps to GitHub Enterprise Cloud",
        "Developer and team support across Development, Quality, and Production environments",
        "Implementation of Actions Runner Controller on AKS for elastic runner infrastructure",
        "Administration, planning, configuration, and governance of GitHub Enterprise Cloud",
        "Pipeline, process, and security improvement identification and planning",
        "Administration and governance of GitHub Advanced Security",
      ],
      es: [
        "Proyecto: Migración de Azure DevOps a GitHub Enterprise Cloud para Mi Banco (banco de la microempresa)",
        "Migración de pipelines de Azure DevOps a GitHub Actions en tecnologías como OpenShift, JBoss, Middleware, Databricks, Data Factory, .NET, Java, Topaz, entre otros",
        "Migración de artifacts y repositorios de Azure DevOps a GitHub Enterprise Cloud",
        "Soporte a desarrolladores y equipos en Desarrollo, Calidad y Producción",
        "Implementación de Actions Runner Controller en AKS para infraestructura elástica",
        "Administración, planeamiento, configuración y gobierno de GitHub Enterprise Cloud",
        "Identificación y planeamiento de mejoras a nivel de pipelines, procesos y seguridad",
        "Administración y gobierno de GitHub Advanced Security",
      ],
    },
    tags: ["GitHub Actions", "AKS", "OpenShift", "GitHub Enterprise Cloud", "GHAS", "Databricks", "Azure DevOps"],
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
        "Member of the DevSecOps CoE for Pacífico Seguros",
        "CI/CD automation: GitHub Actions workflow creation, Python and Bash scripting",
        "GitHub Enterprise administration: Custom Properties, Actions, Rulesets, Users, Teams, Secrets, and more",
        "Microservices migration projects with Python, Golang, and Java",
        "API development with Python (FastAPI) and Golang (Gin)",
        "Infrastructure modularization with Terraform; architecture planning with Draw.io and Excalidraw",
        "Azure infrastructure: AKS version upgrades, Container Apps, API Management, databases, VMs monitoring",
        "CI/CD workflows with SonarQube, Linters, Helm, GHAS, Trivy, SAST, and SCA",
        "Leadership of GitHub Copilot rollout, MCP Servers, and Generative AI tooling adoption",
        "Oracle Cloud Infrastructure (OCI) support",
        "Migration and support from Azure Pipelines to GitHub Actions",
        "AKS upgrade and troubleshooting",
      ],
      es: [
        "Miembro del COE DevSecOps de Pacífico Seguros",
        "Automatización CI/CD: creación de workflows con GitHub Actions, scripting en Python y Bash",
        "Administración de GitHub Enterprise: Custom Properties, Actions, Rulesets, Usuarios, Teams, Secrets, entre otros",
        "Proyectos de migración a microservicios con Python, Golang y Java",
        "Desarrollo de APIs con Python (FastAPI) y Golang (Gin)",
        "Modularización de infraestructura con Terraform; planificación de arquitecturas con Draw.io y Excalidraw",
        "Infraestructura Azure: upgrades de AKS, Container Apps, API Management, bases de datos, VMs",
        "Pipelines CI/CD con SonarQube, Linters, Helm, GHAS, Trivy, SAST y SCA",
        "Liderazgo en implementación y gobierno de GitHub Copilot, MCP Servers y herramientas de IA Generativa",
        "Soporte en Oracle Cloud Infrastructure (OCI)",
        "Migración y soporte de Azure Pipelines a GitHub Actions",
        "Upgrade y troubleshooting de AKS",
      ],
    },
    tags: ["GitHub Actions", "Azure", "AKS", "OCI", "Terraform", "Golang", "Python", "GitHub Copilot", "GHAS", "SonarQube"],
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
        "AWS infrastructure: RDS, Route 53, CloudFront, Lambda, EC2, CloudWatch, EKS, IAM, and Billing & Cost Management",
        "FinOps analysis on AWS: cost reduction strategies and cost projection with AWS Pricing Calculator",
        "Kubernetes cluster administration and monitoring",
        "Layered architecture and Tomcat cluster implementation; Pacemaker High Availability workshop leadership",
        "Linux server administration with Liferay solutions, log analysis, JVM optimization, and troubleshooting",
        "Serverless architecture on AWS using Serverless Framework with CI/CD automation",
        "Help Desk: Zendesk and Jira, SQL database management, Python scripting",
        "Technical documentation maintenance and standard operating procedures",
        "Clients: Telefónica Tech, Pandero, Tuenti, RPP, Kaufmann, Banco de la República de Colombia",
      ],
      es: [
        "Infraestructura AWS: RDS, Route 53, CloudFront, Lambda, EC2, CloudWatch, EKS, IAM y Billing & Cost Management",
        "Análisis FinOps en AWS: estrategias de reducción de costos y proyección con AWS Pricing Calculator",
        "Administración y monitorización de clusters Kubernetes",
        "Implementación de arquitectura por capas y clusters Tomcat; liderazgo en talleres de Alta Disponibilidad con Pacemaker",
        "Administración de servidores Linux con Liferay, análisis de logs, optimización de JVM y troubleshooting",
        "Arquitectura Serverless en AWS con Serverless Framework y automatización CI/CD",
        "Help Desk: Zendesk y Jira, gestión de bases de datos SQL, scripting en Python",
        "Mantenimiento de documentación técnica y procedimientos operativos estándar",
        "Clientes: Telefónica Tech, Pandero, Tuenti, RPP, Kaufmann, Banco de la República de Colombia",
      ],
    },
    tags: ["AWS", "EKS", "Kubernetes", "Lambda", "CloudFront", "Serverless", "Terraform", "Linux", "FinOps"],
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
    items: ["Terraform", "Ansible", "Bash", "Python", "Golang", "Serverless Framework"],
  },
  {
    category: { en: "Security", es: "Seguridad" },
    items: ["GitHub Advanced Security", "Trivy", "Checkov", "Gitleaks", "SonarQube", "OPA", "SAST", "SCA"],
  },
  {
    category: { en: "Observability", es: "Observabilidad" },
    items: ["Prometheus", "Grafana", "Log Analytics", "CloudWatch", "OpenTelemetry"],
  },
  {
    category: { en: "Dev tools & AI", es: "Herramientas y AI" },
    items: ["GitHub Copilot", "GitHub Enterprise Cloud", "Jira", "Microcks", "MCP Servers"],
  },
  {
    category: { en: "FinOps & architecture", es: "FinOps y arquitectura" },
    items: ["AWS Pricing Calculator", "Draw.io", "Excalidraw", "Liferay", "Pacemaker HA"],
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