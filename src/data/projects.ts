// src/data/projects.ts
// [REPLACE] each project with your real work. Keep the shape, swap the values.

export type ProjectCategory = "cloud" | "devsecops" | "automation" | "oss";

export interface Project {
  slug: string;
  title: Record<"en" | "es", string>;
  description: Record<"en" | "es", string>;
  categories: ProjectCategory[];
  tags: string[];
  repoUrl?: string;   // leave undefined if private
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "multicloud-landing-zone",
    title: {
      en: "Multicloud landing zone",
      es: "Landing zone multicloud",
    },
    description: {
      en: "Designed and deployed a multi-account landing zone across AWS and GCP using Terraform and Control Tower. Includes IAM baselines, SCPs, VPC templates, and centralized logging.",
      es: "Diseño y despliegue de un landing zone multi-cuenta en AWS y GCP con Terraform y Control Tower. Incluye baselines IAM, SCPs, plantillas VPC y logging centralizado.",
    },
    categories: ["cloud"],
    tags: ["AWS", "GCP", "Terraform", "Control Tower", "IAM"],
    featured: true,
  },
  {
    slug: "devsecops-pipeline-template",
    title: {
      en: "DevSecOps pipeline template",
      es: "Plantilla de pipeline DevSecOps",
    },
    description: {
      en: "Reusable GitHub Actions workflow library with embedded security stages: Trivy container scanning, Checkov IaC linting, Gitleaks secret detection, and DAST via OWASP ZAP.",
      es: "Biblioteca de workflows reutilizables en GitHub Actions con etapas de seguridad: escaneo de contenedores con Trivy, linting IaC con Checkov, detección de secretos con Gitleaks y DAST con OWASP ZAP.",
    },
    categories: ["devsecops"],
    tags: ["GitHub Actions", "Trivy", "Checkov", "Gitleaks", "OWASP ZAP"],
    repoUrl: "https://github.com/[REPLACE]/devsecops-pipeline-template",
    featured: true,
  },
  {
    slug: "k8s-platform-bootstrap",
    title: {
      en: "Kubernetes platform bootstrap",
      es: "Bootstrap de plataforma Kubernetes",
    },
    description: {
      en: "Opinionated Helm chart collection to bootstrap a production-ready Kubernetes cluster: cert-manager, external-secrets, kube-prometheus-stack, Loki, and OPA Gatekeeper policies.",
      es: "Colección de charts Helm para levantar un clúster Kubernetes listo para producción: cert-manager, external-secrets, kube-prometheus-stack, Loki y políticas OPA Gatekeeper.",
    },
    categories: ["cloud", "automation"],
    tags: ["Kubernetes", "Helm", "OPA", "Prometheus", "Loki", "cert-manager"],
    repoUrl: "https://github.com/[REPLACE]/k8s-platform-bootstrap",
    featured: true,
  },
  {
    slug: "terraform-azure-governance",
    title: {
      en: "Azure governance with Terraform",
      es: "Gobierno Azure con Terraform",
    },
    description: {
      en: "Azure Policy, RBAC, and Management Group structure defined as Terraform modules. Enforces tagging, allowed regions, SKU restrictions, and diagnostic settings org-wide.",
      es: "Estructura de Azure Policy, RBAC y Management Groups definida como módulos Terraform. Aplica tagging, regiones permitidas, restricciones de SKU y configuración de diagnósticos a nivel org.",
    },
    categories: ["cloud", "devsecops"],
    tags: ["Azure", "Terraform", "Azure Policy", "RBAC"],
    repoUrl: "https://github.com/[REPLACE]/terraform-azure-governance",
  },
  {
    slug: "github-copilot-adoption",
    title: {
      en: "GitHub Copilot adoption playbook",
      es: "Playbook de adopción de GitHub Copilot",
    },
    description: {
      en: "Internal documentation and automation for rolling out GitHub Copilot at scale: license provisioning scripts, prompt engineering guidelines, usage metrics dashboards, and security policy templates.",
      es: "Documentación interna y automatización para el despliegue de GitHub Copilot a escala: scripts de aprovisionamiento de licencias, guías de prompt engineering, dashboards de métricas de uso y plantillas de política de seguridad.",
    },
    categories: ["automation"],
    tags: ["GitHub Copilot", "GitHub Enterprise", "Python", "Azure DevOps"],
  },
  {
    slug: "microcks-ci-integration",
    title: {
      en: "Microcks CI/CD integration",
      es: "Integración Microcks en CI/CD",
    },
    description: {
      en: "Open-source contribution to Microcks: GitHub Actions composite action for API contract testing in CI pipelines. Supports OpenAPI, AsyncAPI, and gRPC specifications.",
      es: "Contribución open-source a Microcks: GitHub Actions composite action para contract testing de APIs en pipelines CI. Soporte para especificaciones OpenAPI, AsyncAPI y gRPC.",
    },
    categories: ["oss", "devsecops"],
    tags: ["Microcks", "GitHub Actions", "OpenAPI", "AsyncAPI", "CNCF"],
    repoUrl: "https://github.com/microcks/[REPLACE]",
    featured: true,
  },
];
