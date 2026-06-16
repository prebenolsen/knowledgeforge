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

### Enable GitHub login (optional but recommended)

1. In Supabase: **Authentication → Providers → GitHub** → toggle on.
2. It shows a **Callback URL**. Copy it.
3. On GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - Homepage URL: your future Pages URL (e.g. `https://YOURNAME.github.io/knowledgeforge/`)
   - Authorization callback URL: paste the one from Supabase.
4. GitHub gives you a **Client ID** and **Client Secret** — paste both back into
   Supabase's GitHub provider settings and save.

Email magic-link login works out of the box with no extra setup, so you can skip
the GitHub part if you prefer.

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

Re-running is safe: categories, subcategories, and modules upsert by slug, so
they're never duplicated. New questions are simply added.

See `CONTENT_FORMAT.md` for the exact JSON shape.
