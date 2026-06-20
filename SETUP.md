# KnowledgeForge — Setup Guide

Everything in this project is built. There are **4 manual steps** only you can do
(they involve creating accounts and pasting secrets). Total time: ~15 minutes.

---

## Step 1 — Create a Supabase project (~3 min)

1. Go to https://supabase.com and sign in (free tier is fine).
2. Click **New project**. Pick a name, a strong database password, and a region near you.
3. Wait for it to finish provisioning.
4. Go to **Project Settings → API**. Copy these two values, you'll need them twice:
   - **Project URL** (looks like `https://abcd1234.supabase.co`)
   - **anon public** key (a long string starting with `eyJ...`)
5. While you're here, also copy the **service_role** key (further down the same page).
   You'll use it once, locally, to import content. Never put this one in the repo.

---

## Step 2 — Create the database (~2 min)

1. In Supabase, open the **SQL Editor** (left sidebar) → **New query**.
2. Open `supabase/migrations/0001_init.sql` from this project, copy the whole file,
   paste it into the editor, and click **Run**.
3. You should see "Success. No rows returned." That created every table, the
   row-level-security policies, and the auto-profile trigger.

### Set the auth URLs (required)

The login screen uses **email + password**, which is enabled by default in Supabase and
needs no extra setup. But you **must** configure the auth URLs, or anything that relies on
an emailed link (account-confirmation emails, GitHub OAuth, password reset) will redirect
to the default `http://localhost:3000` instead of your site.

In Supabase: **Authentication → URL Configuration**:

- **Site URL**: your Pages URL, e.g. `https://YOURNAME.github.io/knowledgeforge/`
- **Redirect URLs** — add both:
  - `https://YOURNAME.github.io/knowledgeforge/**`
  - `http://localhost:3000/**` (keeps local dev working)

> Tip: if you don't want users to confirm their email before signing in, turn off
> **Authentication → Sign In / Providers → Email → Confirm email**. Then sign-up logs the
> user in immediately with no emailed link at all.

### Enable GitHub login (optional)

1. In Supabase: **Authentication → Providers → GitHub** → toggle on.
2. It shows a **Callback URL**. Copy it.
3. On GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - Homepage URL: your Pages URL (e.g. `https://YOURNAME.github.io/knowledgeforge/`)
   - Authorization callback URL: paste the one from Supabase.
4. GitHub gives you a **Client ID** and **Client Secret** — paste both back into
   Supabase's GitHub provider settings and save.

Email + password login works without the GitHub step, so you can skip it if you prefer.

---

## Step 3 — Push to GitHub & add secrets (~5 min)

1. Create a new **public** repository named `knowledgeforge`.
   - If you name it something else, change `base` in `vite.config.ts` to match
     (it must be `/your-repo-name/`).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: KnowledgeForge"
   git branch -M main
   git remote add origin https://github.com/YOURNAME/knowledgeforge.git
   git push -u origin main
   ```
3. In the repo: **Settings → Secrets and variables → Actions → New repository secret**.
   Add these two (exact names matter):
   - `VITE_SUPABASE_URL` = your Project URL from Step 1
   - `VITE_SUPABASE_ANON_KEY` = your anon public key from Step 1
4. In the repo: **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**.
5. The deploy workflow runs automatically on push. Check the **Actions** tab; when
   it's green, your app is live at `https://YOURNAME.github.io/knowledgeforge/`.

---

## Step 4 — Load content (~3 min)

The database is empty until you import questions. Do this once locally:

1. Copy `.env.example` to `.env.local` and fill in all three values:
   ```
   VITE_SUPABASE_URL=https://abcd1234.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJ...
   SUPABASE_SERVICE_KEY=eyJ...   # the service_role key from Step 1
   ```
2. Install and import the built-in bilingual seed set:
   ```bash
   npm install
   npm run import
   ```
   You'll see each category and its questions logged as they're added.

That's it. Open the live URL, log in, and the categories will be there.

---

## Running locally

```bash
npm install
npm run dev
```
Then open the printed `localhost` URL. Local dev reads `.env.local`.

---

## Adding more content later (no code changes)

The seed lives in `src/content/seed/`, organized as one folder per category and
one file per subcategory (assembled into `SEED` by `src/content/seed/index.ts`).
Each subcategory holds one or more **modules**, and the questions live inside a
module — the hierarchy is Category → Subcategory → Module → Questions.
To add a big batch — say 100 Economics questions — you have two options:

- **Edit the seed files** (e.g. `src/content/seed/economics/`) and re-run
  `npm run import`, or
- **Make a standalone JSON file** in the same shape (an array of categories) and run
  `npm run import -- path/to/your-batch.json`.

Categories, subcategories, and modules upsert by slug, so they're never
duplicated. **Questions, however, are inserted (not upserted)** — so re-running
`npm run import` against a database that already has the content will **add a
second copy of every question**. Only run a full import against a fresh/empty
content set, or for brand-new categories.

### Refreshing names/translations only

If you only changed **names or translations** of existing categories,
subcategories, or modules (for example, you added Norwegian subcategory names
after the first import), run:

```bash
npm run sync:taxonomy
```

This upserts just the taxonomy names from the seed and never touches questions,
so it's fully idempotent and cannot create duplicates. Switching the app to
**NO** will then show the Norwegian names.

See `CONTENT_FORMAT.md` for the exact JSON shape.

---

## Country Atlas (interactive map game)

The Geography **Country Atlas** (`/atlas`) is a separate activity from the quiz
engine — it does not use the `knowledgeforge_questions` table or the import pipeline. The map
itself plays entirely from bundled, generated data (no setup needed), but
progress is saved to Supabase.

### Progress tables

Saving scores and per-country progress uses two tables, `knowledgeforge_geo_attempts`
and `knowledgeforge_geo_progress`, defined in `supabase/migrations/0001_init.sql` alongside the rest
of the schema. If your database predates this feature, re-run that file in the
Supabase SQL editor — it's idempotent, so it just adds the two missing tables and
their row-level-security policies. Until they exist, the Atlas still plays, but
progress writes fail silently and the dashboard panel stays hidden.

### Regenerating the map data

The two generated modules — `src/content/geo/countries.ts` (the quizable
countries) and `src/content/geo/worldPaths.ts` (SVG country paths +
per-continent viewBoxes) — are committed, so a normal `npm install && npm run
dev` just works. Regenerate them only if you change the source data or
projection:

```bash
npm run build:geo
```

The generator (`scripts/build-geo.ts`) reads three vendored source files in
`scripts/data/` and joins them by ISO code:

| File | Source | License |
|------|--------|---------|
| `countries.json` | [mledoze/countries](https://github.com/mledoze/countries) | ODbL |
| `ne_110m.geojson` | [Natural Earth](https://www.naturalearthdata.com/) 110m admin-0 | Public domain |
| `nb-countries.json` | [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries) (`langs/nb.json`) | MIT |

> **Note:** Natural Earth 110m has no geometry for very small states, so some
> Caribbean, Central-American, and Pacific island nations are not quizable.
> Switch the generator to the 50m dataset for fuller coverage (larger files).

---

## History Timeline (date-learning game)

The **History Timeline** (`/timeline`, linked from the front page) is, like the
Atlas, a standalone activity that does **not** use the `knowledgeforge_questions` table or the
import pipeline. It plays entirely from a bundled, hand-authored event dataset
(no setup needed); only progress is saved to Supabase.

### Content

Events live in `src/content/timeline/events.ts` as `TimelineEvent` records
(`src/types/index.ts`): a bilingual title/description/significance, a canonical
`year` (negative = BCE), optional `startYear`/`endYear` for multi-year events,
and `regions` tags that decide which regional/thematic timelines an event
appears in. To add events, append to that array — no migration or rebuild step
is required. The selectable timelines themselves (periods + regions) are defined
in `src/lib/timeline.ts`.

### Progress tables

Saving round scores and per-event progress uses two tables, `knowledgeforge_timeline_attempts`
and `knowledgeforge_timeline_progress`, defined in `supabase/migrations/0001_init.sql`. If your
database predates this feature, re-run that file in the Supabase SQL editor —
it's idempotent, so it just adds the two missing tables and their
row-level-security policies. Until they exist, the Timeline still plays, but
progress writes fail silently and the dashboard panel stays hidden.

## Mental Models & Paradoxes (concept-discovery activity)

The **Mental Models & Paradoxes** activity (`/concepts`, linked from the front
page) is, like the Atlas and Timeline, a standalone activity that does **not** use
the `knowledgeforge_questions` table or the import pipeline. It plays from a bundled,
hand-authored concept dataset (no setup needed); only progress is saved to
Supabase. Unlike a quiz, its purpose is *understanding* — every question carries
an **Explain** action that opens a full educational view.

### Content

Concepts live in `src/content/concepts/concepts.ts` as `Concept` records
(`src/types/index.ts`): a bilingual `name`, per-difficulty identification
`prompts` (description / scenario / implication), a seven-part `explanation`
(summary, why-interesting, why-intuition-fails, example, real-world relevance),
`related` concept ids, and an optional `simulation` key for a future interactive
demo. Concepts are grouped into eight `module`s (e.g. `probability-statistics`,
`philosophy`), whose display names/emojis are defined in `src/lib/concepts.ts`.
To add concepts, append to the array — no migration or rebuild step is required.
A module becomes playable once it has at least four concepts (one correct answer
plus three distractors); below that it shows as "coming soon".

> **Content status:** four modules are fully authored (15 concepts each, 60 total)
> and playable — **Probability & Statistics**, **Economics & Systems Thinking**,
> **Psychology & Cognitive Biases**, and **Philosophy**. The remaining four modules
> are pending content passes and show as "coming soon" until they reach four
> concepts. Progress is tracked in `Questions.md`.

### Progress tables

Saving round scores and per-concept progress uses two tables, `knowledgeforge_concept_attempts`
and `knowledgeforge_concept_progress`, defined in `supabase/migrations/0001_init.sql`. If your
database predates this feature, re-run that file in the Supabase SQL editor —
it's idempotent, so it just adds the two missing tables and their
row-level-security policies. Until they exist, the activity still plays, but
progress writes fail silently.
