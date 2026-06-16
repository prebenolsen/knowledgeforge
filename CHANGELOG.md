# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (MAJOR.MINOR.PATCH).

## [Unreleased]

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
