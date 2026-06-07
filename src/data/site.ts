// src/data/site.ts
// Central config — change these values before going live.

export const siteConfig = {
  name: "David Universe",           // [REPLACE] your display name
  handle: "devopsuniverse",         // [REPLACE] your handle
  title: {
    en: "Senior DevSecOps · Cloud Engineer",
    es: "Senior DevSecOps · Ingeniero Cloud",
  },
  description: {
    en: "Senior DevSecOps and Cloud Engineer based in Lima, Peru. Multicloud expertise across GCP, AWS, Azure, and OCI. Kubestronaut.",
    es: "Ingeniero Senior DevSecOps y Cloud con base en Lima, Perú. Expertise multicloud en GCP, AWS, Azure y OCI. Kubestronaut.",
  },
  url: "https://www.devopsuniverse.cloud",
  location: {
    en: "Lima, PE",
    es: "Lima, Perú",
  },
  email: "hello@devopsuniverse.cloud",  // [REPLACE]
  social: {
    github: "https://github.com/[REPLACE]",
    linkedin: "https://linkedin.com/in/[REPLACE]",
    twitter: "https://x.com/[REPLACE]",          // remove if unused
  },
  cvUrl: "/cv-david-universe.pdf",     // drop your PDF in /public/
  availableForWork: false,             // [REPLACE] toggle this
};

// ─── i18n strings ─────────────────────────────────────────────────────────────

export const ui = {
  en: {
    nav: {
      about:     "About",
      resume:    "Resume",
      portfolio: "Portfolio",
      blog:      "Blog",
      contact:   "Contact",
    },
    about: {
      heading:  "About me.",
      intro: `Senior DevSecOps and Cloud Engineer with 7+ years designing
              secure, scalable, and automated cloud platforms across GCP, AWS,
              Azure, and OCI. Kubestronaut. I support Data and GenAI teams and
              lead CI/CD governance and toolchain initiatives.`,       // [REPLACE]
      doing: "What I'm doing",
    },
    services: [
      {
        title: "DevSecOps",
        description:
          "CI/CD pipelines with security built in — container and secret scanning, IAM governance, compliance guardrails, and SAST integrated into the delivery process.",
      },
      {
        title: "Cloud engineering",
        description:
          "Secure, cost-efficient multicloud environments on GCP, AWS, Azure, and OCI — from landing zone setup to governance and workload migration.",
      },
      {
        title: "Platform automation",
        description:
          "Terraform IaC, Ansible playbooks, and internal tooling that eliminate repetitive ops work and enforce consistency at scale.",
      },
      {
        title: "GenAI enablement",
        description:
          "Infrastructure and toolchain support for Data and GenAI teams — GPU workloads, MLOps pipelines, and GitHub Copilot adoption.",
      },
    ],
    resume: {
      heading:      "Resume",
      download:     "Download CV",
      certHeading:  "Certifications",
      expHeading:   "Experience",
      ossHeading:   "Open source",
      skillHeading: "Skills",
      eduHeading:   "Education",
      present:      "present",
    },
    portfolio: {
      heading:     "Portfolio.",
      filterAll:   "All",
      filterCloud: "Cloud",
      filterDevsecops: "DevSecOps",
      filterAutomation: "Automation",
      filterOss:   "Open source",
      viewRepo:    "Repo",
      viewDemo:    "Demo",
    },
    blog: {
      heading:    "Blog.",
      readMore:   "Read more",
      minRead:    "min read",
    },
    contact: {
      heading:     "Contact.",
      subheading:  "Get in touch",
      namePlaceholder:    "Your name",
      emailPlaceholder:   "your@email.com",
      messagePlaceholder: "Tell me about your project or question...",
      send:        "Send message",
      successMsg:  "Message sent! I'll get back to you soon.",
      errorMsg:    "Something went wrong. Try emailing me directly.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      about:     "Sobre mí",
      resume:    "Currículum",
      portfolio: "Portafolio",
      blog:      "Blog",
      contact:   "Contacto",
    },
    about: {
      heading:  "Sobre mí.",
      intro: `Ingeniero Senior DevSecOps y Cloud con más de 7 años diseñando
              plataformas cloud seguras, escalables y automatizadas en GCP, AWS,
              Azure y OCI. Kubestronaut. Soporte a equipos de Data y GenAI y
              liderazgo de iniciativas de CI/CD y toolchain.`,          // [REPLACE]
      doing: "Qué hago",
    },
    services: [
      {
        title: "DevSecOps",
        description:
          "Pipelines CI/CD con seguridad integrada — escaneo de contenedores y secretos, gobierno IAM, guardrails de compliance y SAST en el proceso de entrega.",
      },
      {
        title: "Ingeniería cloud",
        description:
          "Entornos multicloud seguros y eficientes en GCP, AWS, Azure y OCI — desde el diseño del landing zone hasta el gobierno y la migración de cargas.",
      },
      {
        title: "Automatización de plataforma",
        description:
          "IaC con Terraform, playbooks Ansible y tooling interno que elimina trabajo repetitivo y garantiza consistencia a escala.",
      },
      {
        title: "Habilitación GenAI",
        description:
          "Infraestructura y toolchain para equipos de Data y GenAI — cargas GPU, pipelines MLOps y adopción de GitHub Copilot.",
      },
    ],
    resume: {
      heading:      "Currículum",
      download:     "Descargar CV",
      certHeading:  "Certificaciones",
      expHeading:   "Experiencia",
      ossHeading:   "Open source",
      skillHeading: "Skills",
      eduHeading:   "Educación",
      present:      "presente",
    },
    portfolio: {
      heading:      "Portafolio.",
      filterAll:    "Todos",
      filterCloud:  "Cloud",
      filterDevsecops: "DevSecOps",
      filterAutomation: "Automatización",
      filterOss:    "Open source",
      viewRepo:     "Repo",
      viewDemo:     "Demo",
    },
    blog: {
      heading:   "Blog.",
      readMore:  "Leer más",
      minRead:   "min de lectura",
    },
    contact: {
      heading:     "Contacto.",
      subheading:  "Ponte en contacto",
      namePlaceholder:    "Tu nombre",
      emailPlaceholder:   "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto o consulta...",
      send:        "Enviar mensaje",
      successMsg:  "¡Mensaje enviado! Te respondo pronto.",
      errorMsg:    "Algo salió mal. Escríbeme directamente al email.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type UiStrings = typeof ui["en"];
