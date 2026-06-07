# devopsuniverse.cloud — Portfolio site

Personal portfolio, CV, and blog built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Stack

- **Framework**: Astro 4 (static output)
- **Styling**: Plain CSS with CSS variables (dark theme)
- **i18n**: `/en/` and `/es/` routes, strings in `src/data/site.ts`
- **Blog**: Markdown files in `src/pages/blog/`
- **Contact**: Formspree (no backend needed)
- **Deploy**: GitHub Actions → GitHub Pages

## Quick start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev       # http://localhost:4321

# Production build
npm run build
npm run preview
```

## Project structure

```
src/
  data/
    resume.ts    ← ALL your CV data (certs, experience, skills)
    site.ts      ← Config, i18n strings, social links
    projects.ts  ← Portfolio projects
  layouts/
    Base.astro   ← Sidebar nav, fonts, global CSS
  pages/
    en/          ← English routes
    es/          ← Spanish routes
    blog/        ← Markdown articles
  assets/        ← Static assets (images, icons)
public/
  CNAME          ← Custom domain for GitHub Pages
  cv-david-universe.pdf  ← [ADD your PDF here]
  favicon.svg    ← [ADD your favicon]
.github/
  workflows/
    deploy.yml   ← Auto deploy on push to main
```

## Checklist before go-live

- [ ] Replace all `[REPLACE]` values in `src/data/resume.ts`
- [ ] Replace all `[REPLACE]` values in `src/data/site.ts`
- [ ] Replace all `[REPLACE]` values in `src/data/projects.ts`
- [ ] Add your photo to `/public/avatar.jpg` and update `Base.astro` sidebar
- [ ] Add your CV PDF to `/public/cv-david-universe.pdf`
- [ ] Add your Formspree ID in `src/pages/en/contact.astro` and `es/contact.astro`
- [ ] Add Spanish versions of `/es/resume.astro`, `/es/portfolio.astro`, `/es/contact.astro`
- [ ] Update DNS: CNAME `www` → `<yourusername>.github.io`
- [ ] In GitHub repo: Settings → Pages → Source → GitHub Actions

## DNS setup (devopsuniverse.cloud)

Add these records at your domain registrar:

| Type  | Host | Value                         |
|-------|------|-------------------------------|
| CNAME | www  | `<yourusername>.github.io`    |
| A     | @    | `185.199.108.153`             |
| A     | @    | `185.199.109.153`             |
| A     | @    | `185.199.110.153`             |
| A     | @    | `185.199.111.153`             |

## Adding blog posts

Create a `.md` file in `src/pages/blog/`:

```md
---
title: "My post title"
titleEs: "Título en español"
date: 2025-06-01
slug: my-post-slug
tags: ["Kubernetes", "DevSecOps"]
excerpt: "One-line summary in English."
excerptEs: "Resumen en español."
readingTime: 5
draft: false
---

Your content here...
```
