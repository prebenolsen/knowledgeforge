# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (MAJOR.MINOR.PATCH).

## [Unreleased]

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
