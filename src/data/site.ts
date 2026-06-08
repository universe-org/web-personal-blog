// src/data/site.ts

export const siteConfig = {
  name: "David Aguirre",
  handle: "Universe",
  title: {
    en: "Senior DevOps · Cloud Engineer",
    es: "Senior DevOps · Ingeniero Cloud",
  },
  description: {
    en: "Senior DevOps and Cloud Engineer based in Lima, Peru. Multicloud expertise across GCP, AWS, Azure, and OCI. Kubestronaut.",
    es: "Ingeniero Senior DevOps y Cloud con base en Lima, Perú. Expertise multicloud en GCP, AWS, Azure y OCI. Kubestronaut.",
  },
  url: "https://www.devopsuniverse.cloud",
  location: { en: "Lima, PE", es: "Lima, Perú" },
  email: "davidrolandoaguirre@gmail.com",
  social: {
    github: "https://github.com/universe-org",
    linkedin: "https://www.linkedin.com/in/david-aguirre-universe/",
    twitter: null,
  },
  cvUrl: "/CV.pdf",
  availableForWork: true,
};

export const ui = {
  en: {
    nav: {
      about: "About", resume: "Resume", portfolio: "Portfolio",
      blog: "Blog", contact: "Contact",
    },
    about: {
      heading: "About me.",
      intro: `Senior DevOps and Cloud Engineer with 5+ years designing secure, scalable, and automated cloud platforms across GCP, AWS, Azure, and OCI. Kubestronaut. I support Data and GenAI teams and lead CI/CD governance and toolchain initiatives at enterprise scale.`,
      doing: "What I'm doing",
    },
    services: [
      {
        title: "DevSecOps",
        description: "CI/CD pipelines with security built in — container and secret scanning, IAM governance, compliance guardrails, and SAST integrated into the delivery process.",
      },
      {
        title: "Cloud engineering",
        description: "Secure, cost-efficient multicloud environments on GCP, AWS, Azure, and OCI — landing zones, governance, and workload automation.",
      },
      {
        title: "Platform automation",
        description: "GitHub Enterprise Cloud governance, Azure DevOps pipelines, Terraform IaC, and AKS runner infrastructure for elastic CI/CD.",
      },
      {
        title: "GenAI enablement",
        description: "Infrastructure and toolchain support for Data and GenAI teams — CI/CD for AI workloads, GitHub Copilot rollout, and MCP/agent integrations.",
      },
    ],
    resume: {
      heading: "Resume", download: "Download CV", certHeading: "Certifications",
      expHeading: "Experience", ossHeading: "Open source", skillHeading: "Skills",
      eduHeading: "Education", present: "present",
    },
    portfolio: {
      heading: "Portfolio.", filterAll: "All", filterCloud: "Cloud",
      filterDevsecops: "DevSecOps", filterAutomation: "Automation", filterOss: "Open source",
      viewRepo: "Repo", viewDemo: "Demo",
    },
    blog: { heading: "Blog.", readMore: "Read more", minRead: "min read" },
    contact: {
      heading: "Contact.", subheading: "Get in touch",
      namePlaceholder: "Your name", emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project or question...",
      send: "Send message", successMsg: "Message sent! I'll get back to you soon.",
      errorMsg: "Something went wrong. Try emailing me directly.",
    },
    footer: { rights: "All rights reserved." },
  },
  es: {
    nav: {
      about: "Sobre mí", resume: "Currículum", portfolio: "Portafolio",
      blog: "Blog", contact: "Contacto",
    },
    about: {
      heading: "Sobre mí.",
      intro: `Ingeniero Senior DevOps y Cloud con más de 5 años diseñando plataformas cloud seguras, escalables y automatizadas en GCP, AWS, Azure y OCI. Kubestronaut. Soporte a equipos de Data y GenAI y liderazgo de iniciativas de CI/CD y toolchain a escala enterprise.`,
      doing: "Qué hago",
    },
    services: [
      {
        title: "DevSecOps",
        description: "Pipelines CI/CD con seguridad integrada — escaneo de contenedores y secretos, gobierno IAM, guardrails de compliance y SAST en el proceso de entrega.",
      },
      {
        title: "Ingeniería cloud",
        description: "Entornos multicloud seguros y eficientes en GCP, AWS, Azure y OCI — landing zones, gobierno y automatización de cargas.",
      },
      {
        title: "Automatización de plataforma",
        description: "Gobierno de GitHub Enterprise Cloud, pipelines Azure DevOps, IaC con Terraform e infraestructura de runners en AKS para CI/CD elástico.",
      },
      {
        title: "Habilitación GenAI",
        description: "Infraestructura y toolchain para equipos de Data y GenAI — CI/CD para cargas de IA, despliegue de GitHub Copilot e integraciones MCP/agentes.",
      },
    ],
    resume: {
      heading: "Currículum", download: "Descargar CV", certHeading: "Certificaciones",
      expHeading: "Experiencia", ossHeading: "Open source", skillHeading: "Skills",
      eduHeading: "Educación", present: "presente",
    },
    portfolio: {
      heading: "Portafolio.", filterAll: "Todos", filterCloud: "Cloud",
      filterDevsecops: "DevSecOps", filterAutomation: "Automatización", filterOss: "Open source",
      viewRepo: "Repo", viewDemo: "Demo",
    },
    blog: { heading: "Blog.", readMore: "Leer más", minRead: "min de lectura" },
    contact: {
      heading: "Contacto.", subheading: "Ponte en contacto",
      namePlaceholder: "Tu nombre", emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto o consulta...",
      send: "Enviar mensaje", successMsg: "¡Mensaje enviado! Te respondo pronto.",
      errorMsg: "Algo salió mal. Escríbeme directamente al email.",
    },
    footer: { rights: "Todos los derechos reservados." },
  },
} as const;

export type UiStrings = typeof ui["en"];
