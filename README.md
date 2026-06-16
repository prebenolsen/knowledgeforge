# 🔥 KnowledgeForge

A personal, mobile-first PWA learning engine. You learn through multiple-choice
quizzes; the app tracks what you actually know, finds your weak areas, and schedules
reviews with spaced repetition so it sticks. Fully bilingual (English / Norwegian).

> **First time here?** Read [`SETUP.md`](./SETUP.md) — it's the 4 steps to get this
> running on GitHub Pages with your own Supabase backend.

## What it does

- **Learning loop** — answer → instant correct/incorrect + explanation → knowledge
  tracking updates → next review scheduled.
- **Spaced repetition** — SM-2 algorithm. Wrong answers come back soon; easy correct
  answers come back much later.
- **Difficulty-aware mastery** — a high score on easy questions does *not* count as
  mastery. Untested hard questions cap your mastery ceiling, so the app can tell
  "surface knowledge" apart from real depth.
- **Placement test** — 20 questions across easy, medium, and hard estimate where
  you should start.
- **Knowledge map** — mastery per category and per subcategory, with an easy/medium/hard
  breakdown.
- **Practice modes** — beginner, intermediate, advanced, mixed, and adaptive (difficulty
  adjusts as you go).

## Tech

- React 18 + TypeScript + Vite
- Tailwind CSS
- Supabase (Postgres + Auth + Row Level Security)
- PWA (installable, offline shell) via `vite-plugin-pwa`
- i18next for English / Norwegian
- Deployed via GitHub Actions to GitHub Pages

## Project layout

```
src/
  components/   ui primitives, quiz parts, layout (nav, language toggle)
  pages/        Login, Home, Browse, Quiz, Placement, Progress, Results
  hooks/        useAuth, useQuiz, useProgress
  lib/          supabase client, sm2 (spaced repetition), mastery scoring, data access
  i18n/         en + no translation strings, content localization helper
  content/seed/ bilingual starter questions
  types/        all TypeScript interfaces
supabase/
  migrations/   0001_init.sql — full schema + RLS (paste into Supabase SQL editor)
scripts/
  import.ts     content import pipeline (npm run import)
```

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build (also runs the type check)
npm run import     # load the built-in seed content into your database
```

## Security note

This repo is public by design. That's fine:
- The Supabase **anon key** is meant to be public; Row Level Security locks every
  user table to `auth.uid()`, so a logged-out visitor can read nothing personal.
- The **service_role key** (used only by the import script) stays in your local
  `.env.local`, which is gitignored. Never commit it.

## Adding content

See [`CONTENT_FORMAT.md`](./CONTENT_FORMAT.md). You can add hundreds of questions or
whole new categories as JSON and import them — no application code changes.
