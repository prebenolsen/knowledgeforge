# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Always keep these files updated on every change

Whenever you make changes to the codebase, you **must** keep the following in sync as part of the same change — never leave them stale:

1. **`CHANGELOG.md`** — Add an entry describing the change under the `## [Unreleased]` section
   (use `Added` / `Changed` / `Fixed` / `Removed` subsections). When cutting a release, move the
   `Unreleased` entries under a new version heading with the date.

2. **`version.json`** — Bump the `version` field using MAJOR.MINOR.PATCH (semantic) versioning:
   - **MAJOR** — incompatible / breaking changes.
   - **MINOR** — new functionality added in a backward-compatible way.
   - **PATCH** — backward-compatible bug fixes and small tweaks.

   Keep `package.json`'s `version` field equal to `version.json`.

3. **`supabase/migrations/0001_init.sql`** — If a change affects the database schema (tables,
   columns, indexes, policies, functions, etc.), update this migration so it always reflects the
   current schema.

These updates are not optional — treat them as required steps for any change before considering the work complete.
