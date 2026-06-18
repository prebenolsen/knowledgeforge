# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (MAJOR.MINOR.PATCH).

## [Unreleased]

## [3.11.0] - 2026-06-18

### Added
- **Interactive Country Atlas** (Phase 1, client-only) — a new map-based learning
  activity under Geography, separate from the multiple-choice quiz engine. Reachable
  from a card on the Home screen at the `/atlas` route (fullscreen, lazy-loaded).
  - Learn countries one continent at a time (Europe, Africa, Asia, North America,
    South America, Oceania).
  - **Explore mode**: tap any country on the map and type its name to self-test.
    Countries answered correctly stay highlighted green for the rest of the session.
    The map stays live after each guess — tap any not-yet-correct country to keep
    playing without pressing Next; correct (green) countries are locked in.
  - **Quiz mode**: the app highlights a random country and you type its name; one
    shuffled pass through the continent with an end-of-session score summary.
  - Free-text answers graded with **Levenshtein distance** (case- and
    diacritic-insensitive); accepts the **English or Norwegian** name plus aliases.
  - Progressive **hints**: reveal the first letter (then the next, and so on) or
    show **4 cards** (the answer plus its 3 nearest neighbouring countries). Hints
    reduce the awarded score.
- `src/lib/geo.ts` — pure game logic: continent grouping, neighbour lookup
  (haversine), answer normalization, Levenshtein, grading, and hint/score helpers.
- `src/components/geo/CountryMap.tsx` — renders ISO-keyed SVG country paths,
  highlights a target, and handles taps, framed per continent.
- `scripts/build-geo.ts` (npm script `build:geo`) — generates the bundled data
  `src/content/geo/countries.ts` and `src/content/geo/worldPaths.ts` from vendored
  Natural Earth geometry, mledoze/countries, and i18n-iso-countries Norwegian names.
- `geo.*` translation strings in `src/i18n/en.ts` and `src/i18n/no.ts`.

## [3.10.0] - 2026-06-18

### Changed
- Login screen now leads with a simple **email + password** sheet (sign in / create
  account toggle), with GitHub OAuth offered as a secondary option. Password sign-in is a
  direct, in-page API call, so it avoids the auth redirect entirely.

### Added
- `signUpWithPassword` in `src/hooks/useAuth.tsx` for email/password account creation, returning
  whether email confirmation is still pending.

### Removed
- The magic-link (OTP) button from the login screen. The `signInWithEmail` helper remains
  available in `useAuth` but is no longer surfaced in the UI.

## [3.9.0] - 2026-06-18

### Added
- New **Financial economics** subcategory under the Economics category (`src/content/seed/economics/financial-economics.ts`), wired into `src/content/seed/economics/index.ts`.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Financial Markets** module under the Financial economics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Stocks** module under the Financial economics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Bonds** module under the Financial economics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Derivatives** module under the Financial economics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Portfolio Theory** module under the Financial economics subcategory.

## [3.8.0] - 2026-06-18

### Added
- New **Politics** subcategory under the Society category (`src/content/seed/society/politics.ts`), wired into `src/content/seed/society/index.ts`.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Liberalism** module under the Politics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Conservatism** module under the Politics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Socialism** module under the Politics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Communism** module under the Politics subcategory.
- 45 questions (15 easy, 15 medium, 15 hard) for the **Fascism** module under the Politics subcategory.

## [3.7.0] - 2026-06-17

### Added
- 45 questions (15 easy, 15 medium, 15 hard) for the **Ancient Egypt** module under the First civilizations subcategory (`src/content/seed/history/the-first-civilizations.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Mesopotamian civilization** module under the First civilizations subcategory (`src/content/seed/history/the-first-civilizations.ts`).

## [3.6.0] - 2026-06-17

### Added
- 45 questions (15 easy, 15 medium, 15 hard) for the **Transatlantic slave trade** module under the Atlantic slave trade subcategory (`src/content/seed/history/the-atlantic-slave-trade.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Slavery in the Americas** module under the Atlantic slave trade subcategory (`src/content/seed/history/the-atlantic-slave-trade.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Lives of enslaved people** module under the Atlantic slave trade subcategory (`src/content/seed/history/the-atlantic-slave-trade.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Abolition movements** module under the Atlantic slave trade subcategory (`src/content/seed/history/the-atlantic-slave-trade.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Long-term effects** module under the Atlantic slave trade subcategory (`src/content/seed/history/the-atlantic-slave-trade.ts`).

## [3.5.0] - 2026-06-17

### Added
- 45 questions (15 easy, 15 medium, 15 hard) for the **Christianity** module under the Spread of major religions subcategory (`src/content/seed/history/spread-of-major-religions.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Islam** module under the Spread of major religions subcategory (`src/content/seed/history/spread-of-major-religions.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Buddhism** module under the Spread of major religions subcategory (`src/content/seed/history/spread-of-major-religions.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Judaism** module under the Spread of major religions subcategory (`src/content/seed/history/spread-of-major-religions.ts`).

## [3.4.0] - 2026-06-17

### Added
- 45 questions (15 easy, 15 medium, 15 hard) for the **Artificial intelligence** module under the Digital Revolution subcategory (`src/content/seed/history/the-digital-revolution.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **End of European empires** module under the Decolonization subcategory (`src/content/seed/history/decolonization.ts`).

## [3.3.0] - 2026-06-17

### Added
- 45 questions (15 easy, 15 medium, 15 hard) for the **Collapse of Ottoman Empire** module under the Modern Middle East subcategory (`src/content/seed/history/modern-middle-east.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Israel/Palestine conflict** module under the Modern Middle East subcategory (`src/content/seed/history/modern-middle-east.ts`).

## [3.2.0] - 2026-06-17

### Added
- 45 questions (15 easy, 15 medium, 15 hard) for the **Segregation** module under the Civil Rights Movement subcategory (`src/content/seed/history/civil-rights-movement.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Equal rights movement** module under the Civil Rights Movement subcategory (`src/content/seed/history/civil-rights-movement.ts`).

## [3.1.0] - 2026-06-17

### Added
- 45 questions (15 easy, 15 medium, 15 hard) for the **The Holocaust** module under the World War II subcategory (`src/content/seed/history/world-war-ii.ts`).
- 45 questions (15 easy, 15 medium, 15 hard) for the **Global conflict** module under the World War II subcategory (`src/content/seed/history/world-war-ii.ts`).

## [3.0.2] - 2026-06-17

### Added
- Scaffolded History seed structure into one file per requested subcategory under
  `src/content/seed/history/`, each with module slugs and empty `questions: []`
  arrays so content can be filled in later.

### Changed
- Updated the History category assembly in `src/content/seed/history/index.ts`
  to include all newly scaffolded History subcategories.

## [3.0.1] - 2026-06-16

### Fixed
- Re-saved `ai_question_generator_prompt.txt` as UTF-8, repairing the mojibake in
  the Norwegian example strings (e.g. `f�rste` → `første`, `C�sar` → `Cæsar`,
  `arvef�lge` → `arvefølge`). Added an explicit **Encoding** section instructing
  the generator to output valid UTF-8 and write Norwegian letters as their real
  Unicode characters (æ/Æ, ø/Ø, å/Å), never transliterated or escaped.

## [3.0.0] - 2026-06-16

### Added
- **Module** — a new content level between subcategory and questions
  (Category → Subcategory → **Module** → Questions). A module groups questions
  into a named topic, e.g. History → World War 2 → *The Rise of Adolf Hitler*.
  - New `modules` table (`subcategory_id`, `slug`, `name`, `sort_order`), with a
    `unique (subcategory_id, slug)` constraint and read-only RLS like the other
    content tables.
  - `Module` type and a `module_id` field on `Question`.
  - `SeedSubcategory` now holds a `modules` array; each module carries its own
    `questions`. The seed content and import script were updated accordingly.

### Changed
- **Breaking:** the content/import format changed — questions now live under a
  subcategory's `modules[].questions` instead of `subcategory.questions`.
  Existing batch JSON files must be wrapped in at least one module to import.
  Quizzes and mastery/progress continue to run at the **subcategory** level;
  `questions.subcategory_id` is kept (denormalized) alongside the new
  `module_id`, so no progress data or schema for `user_progress` changed.

## [2.0.1] - 2026-06-16

### Changed
- Expanded the "always keep updated" contract in `CLAUDE.md`: `SETUP.md` must now
  be kept in sync with any change to the setup/usage/import flow, and the
  `0001_init.sql` guidance clarifies that its `create table` statements are edited
  in place to reflect the current schema on a fresh database (no `ALTER TABLE`
  patching).

## [2.0.0] - 2026-06-16

### Changed
- **Breaking:** replaced the 1–5 numeric difficulty scale with three named
  levels — `easy`, `medium`, `hard` — across the whole stack:
  - `Difficulty` type and new `DIFFICULTIES` / `DIFFICULTY_RANK` helpers.
  - Content format: `difficulty` is now a string (`"easy" | "medium" | "hard"`);
    seed content remapped (old 1–2 → easy, 3 → medium, 4–5 → hard).
  - Database `questions.difficulty` and `question_attempts.difficulty` are now
    `text` with a `check (... in ('easy','medium','hard'))` constraint.
  - Mastery weights rebalanced to the three bands (easy 0.2 / medium 0.3 /
    hard 0.5), with the placement test, adaptive stepping, SM-2 time budgets,
    practice-mode mapping, and the progress UI updated to match.
  - New `difficulty.{easy,medium,hard}` i18n labels (en/no); removed the old
    `quiz.difficulty` "Difficulty {{level}}" string.

## [1.1.1] - 2026-06-16

### Changed
- Reorganized the seed content (`src/content/seed/`) into one folder per category
  and one file per subcategory, with shared types in `types.ts` and a root
  `index.ts` that assembles the categories into `SEED`. No content or schema
  changes; the import pipeline and public exports (`SEED`, `SeedCategory`, etc.)
  are unchanged.

## [1.1.0] - 2026-06-16

### Added
- Email + password sign-in on the login screen, for users created directly in
  Supabase. The magic-link and GitHub options remain available.

## [1.0.0] - 2026-06-16

### Added
- Initial release of KnowledgeForge.
