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
    slug: "talk-02",
    date: "2025-09-01", // [REPLACE]
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
    // slidesFile: "/slides/talk-02.pdf",
    // slidesUrl: "https://speakerdeck.com/...",
    tags: ["[REPLACE]"],
  },
  {
    slug: "talk-01",
    date: "2025-04-01", // [REPLACE]
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
    // slidesFile: "/slides/talk-01.pdf",
    tags: ["[REPLACE]"],
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
