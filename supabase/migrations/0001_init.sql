-- ============================================================
-- KnowledgeForge — Database schema + Row Level Security
--
-- Paste this entire file into the Supabase SQL Editor and run it once.
-- (Supabase Dashboard -> SQL Editor -> New query -> paste -> Run)
-- ============================================================

-- ---- Extensions -------------------------------------------
create extension if not exists "pgcrypto";

-- ============================================================
-- CONTENT TABLES (shared, read-only for users)
-- ============================================================

create table if not exists categories (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        jsonb not null,        -- { "en": "...", "no": "..." }
  icon        text not null default '',
  sort_order  int  not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists subcategories (
  id           uuid primary key default gen_random_uuid(),
  category_id  uuid not null references categories(id) on delete cascade,
  slug         text not null,
  name         jsonb not null,
  created_at   timestamptz not null default now(),
  unique (category_id, slug)
);

create table if not exists modules (
  id              uuid primary key default gen_random_uuid(),
  subcategory_id  uuid not null references subcategories(id) on delete cascade,
  slug            text not null,
  name            jsonb not null,
  sort_order      int  not null default 0,
  created_at      timestamptz not null default now(),
  unique (subcategory_id, slug)
);

create table if not exists questions (
  id              uuid primary key default gen_random_uuid(),
  -- subcategory_id is kept denormalized alongside module_id: quizzes and
  -- progress run at the subcategory level, while module_id groups questions
  -- into a finer learning unit within that subcategory.
  subcategory_id  uuid not null references subcategories(id) on delete cascade,
  module_id       uuid not null references modules(id) on delete cascade,
  question        jsonb not null,    -- { "en": "...", "no": "..." }
  answers         jsonb not null,    -- [ {en,no}, {en,no}, {en,no}, {en,no} ]
  correct_index   int  not null check (correct_index between 0 and 3),
  explanation     jsonb not null,
  difficulty      text not null check (difficulty in ('easy','medium','hard')),
  tags            text[] not null default '{}',
  active          boolean not null default true,
  created_at      timestamptz not null default now()
);

create index if not exists idx_subcategories_category on subcategories(category_id);
create index if not exists idx_modules_subcategory on modules(subcategory_id);
create index if not exists idx_questions_subcategory on questions(subcategory_id);
create index if not exists idx_questions_module on questions(module_id);
create index if not exists idx_questions_difficulty on questions(difficulty);
create index if not exists idx_questions_active on questions(active);

-- ============================================================
-- USER TABLES (private, per-user)
-- ============================================================

create table if not exists profiles (
  id                 uuid primary key references auth.users(id) on delete cascade,
  username           text,
  locale             text not null default 'en' check (locale in ('en','no')),
  placement_complete boolean not null default false,
  created_at         timestamptz not null default now()
);

create table if not exists question_attempts (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users(id) on delete cascade,
  question_id    uuid not null references questions(id) on delete cascade,
  is_correct     boolean not null,
  selected_index int not null,
  time_ms        int not null default 0,
  difficulty     text not null check (difficulty in ('easy','medium','hard')),
  answered_at    timestamptz not null default now()
);

create table if not exists user_progress (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  subcategory_id  uuid not null references subcategories(id) on delete cascade,
  mastery_score   real not null default 0,
  questions_seen  int  not null default 0,
  correct_count   int  not null default 0,
  -- per-difficulty tallies kept as jsonb so mastery can be recomputed
  difficulty_stats jsonb not null default '{}',
  updated_at      timestamptz not null default now(),
  unique (user_id, subcategory_id)
);

create table if not exists review_schedule (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  question_id   uuid not null references questions(id) on delete cascade,
  repetition    int  not null default 0,
  easiness      real not null default 2.5,
  interval_days int  not null default 0,
  next_review   timestamptz not null default now(),
  last_review   timestamptz,
  unique (user_id, question_id)
);

create index if not exists idx_attempts_user on question_attempts(user_id);
create index if not exists idx_progress_user on user_progress(user_id);
create index if not exists idx_review_user_due on review_schedule(user_id, next_review);

-- ---- Geography map game ------------------------------------
-- The interactive Country Atlas is a separate activity from the MCQ quiz, so it
-- has its own tables (not tied to questions / subcategories).

create table if not exists geo_attempts (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  continent    text not null,
  iso3         text not null,           -- the country answered
  mode         text not null check (mode in ('explore','quiz')),
  is_correct   boolean not null,
  hints_used   int  not null default 0, -- letters revealed + card hint
  answered_at  timestamptz not null default now()
);

create table if not exists geo_progress (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  continent          text not null,
  best_score         int  not null default 0,
  -- per-country tallies kept as jsonb: { "<iso3>": { "seen": n, "correct": n } }
  per_country_stats  jsonb not null default '{}',
  updated_at         timestamptz not null default now(),
  unique (user_id, continent)
);

create index if not exists idx_geo_attempts_user on geo_attempts(user_id);
create index if not exists idx_geo_progress_user on geo_progress(user_id);

-- ---- History Timeline game ---------------------------------
-- The Timeline (learning *when* events happened) is a standalone activity like
-- the Atlas, so it has its own tables keyed by user + scope (a selectable
-- period or regional timeline, e.g. 'cold-war' or 'european-history').

create table if not exists timeline_attempts (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  scope        text not null,           -- the timeline played
  event_id     text not null,           -- the event answered
  difficulty   text not null check (difficulty in ('easy','medium','hard')),
  score        int  not null default 0, -- 0–100 awarded for this answer
  is_correct   boolean not null,        -- true = exact (full-mark) hit
  hints_used   int  not null default 0,
  answered_at  timestamptz not null default now()
);

create table if not exists timeline_progress (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users(id) on delete cascade,
  scope            text not null,
  best_score       int  not null default 0,
  -- per-event tallies kept as jsonb: { "<event_id>": { "seen": n, "correct": n } }
  per_event_stats  jsonb not null default '{}',
  updated_at       timestamptz not null default now(),
  unique (user_id, scope)
);

create index if not exists idx_timeline_attempts_user on timeline_attempts(user_id);
create index if not exists idx_timeline_progress_user on timeline_progress(user_id);

-- ---- Mental Models & Paradoxes activity --------------------
-- A standalone "discover ideas" activity like the Atlas and Timeline. The player
-- identifies concepts (paradoxes, reasoning tools, mental models) and opens an
-- Explain view to understand them. Keyed by user + module (a thematic group,
-- e.g. 'probability-statistics' or 'philosophy').

create table if not exists concept_attempts (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  module       text not null,           -- the module played
  concept_id   text not null,           -- the concept answered
  difficulty   text not null check (difficulty in ('easy','medium','hard')),
  is_correct   boolean not null,        -- correct concept identified
  explained    boolean not null default false, -- opened the Explain view
  answered_at  timestamptz not null default now()
);

create table if not exists concept_progress (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  module             text not null,
  best_score         int  not null default 0,
  -- per-concept tallies as jsonb:
  -- { "<concept_id>": { "seen": n, "correct": n, "explained": n } }
  per_concept_stats  jsonb not null default '{}',
  updated_at         timestamptz not null default now(),
  unique (user_id, module)
);

create index if not exists idx_concept_attempts_user on concept_attempts(user_id);
create index if not exists idx_concept_progress_user on concept_progress(user_id);

-- ============================================================
-- PROFILE AUTO-CREATION
-- When a new auth user signs up, create their profile row.
-- ============================================================

create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, coalesce(new.raw_user_meta_data->>'user_name', new.email))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- Content tables: any authenticated user may READ; nobody writes via the API.
-- (Imports use the service-role key, which bypasses RLS.)
alter table categories    enable row level security;
alter table subcategories enable row level security;
alter table modules       enable row level security;
alter table questions     enable row level security;

drop policy if exists "content readable" on categories;
create policy "content readable" on categories
  for select to authenticated using (true);

drop policy if exists "content readable" on subcategories;
create policy "content readable" on subcategories
  for select to authenticated using (true);

drop policy if exists "content readable" on modules;
create policy "content readable" on modules
  for select to authenticated using (true);

drop policy if exists "content readable" on questions;
create policy "content readable" on questions
  for select to authenticated using (true);

-- User tables: a user may only touch their OWN rows.
alter table profiles          enable row level security;
alter table question_attempts enable row level security;
alter table user_progress     enable row level security;
alter table review_schedule   enable row level security;

drop policy if exists "own profile" on profiles;
create policy "own profile" on profiles
  for all to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "own attempts" on question_attempts;
create policy "own attempts" on question_attempts
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "own progress" on user_progress;
create policy "own progress" on user_progress
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "own reviews" on review_schedule;
create policy "own reviews" on review_schedule
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Geography map game: a user may only touch their OWN rows.
alter table geo_attempts enable row level security;
alter table geo_progress enable row level security;

drop policy if exists "own geo attempts" on geo_attempts;
create policy "own geo attempts" on geo_attempts
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "own geo progress" on geo_progress;
create policy "own geo progress" on geo_progress
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- History Timeline game: a user may only touch their OWN rows.
alter table timeline_attempts enable row level security;
alter table timeline_progress enable row level security;

drop policy if exists "own timeline attempts" on timeline_attempts;
create policy "own timeline attempts" on timeline_attempts
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "own timeline progress" on timeline_progress;
create policy "own timeline progress" on timeline_progress
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Mental Models & Paradoxes activity: a user may only touch their OWN rows.
alter table concept_attempts enable row level security;
alter table concept_progress enable row level security;

drop policy if exists "own concept attempts" on concept_attempts;
create policy "own concept attempts" on concept_attempts
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "own concept progress" on concept_progress;
create policy "own concept progress" on concept_progress
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- Done. Next: run seed.sql (or use the import script) to add content.
-- ============================================================
