# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Always keep these files updated on every change

Whenever you make changes to the codebase, you **must** keep the following in sync as part of the same change — never leave them stale:

1. **`CHANGELOG.md`** — Add an entry describing the change (use `Added` / `Changed` / `Fixed` /
   `Removed` subsections). Whenever you bump `version.json`, the entry must live under a heading
   matching that exact new version, with today's date — e.g. a bump to `1.1.0` means a
   `## [1.1.0] - YYYY-MM-DD` heading. Keep `## [Unreleased]` present but empty above it for the
   next change. The newest version in `CHANGELOG.md` and the `version` in `version.json` must
   always match.

2. **`version.json`** — Bump the `version` field using MAJOR.MINOR.PATCH (semantic) versioning:
   - **MAJOR** — incompatible / breaking changes.
   - **MINOR** — new functionality added in a backward-compatible way.
   - **PATCH** — backward-compatible bug fixes and small tweaks.

   Keep `package.json`'s `version` field equal to `version.json`.

3. **`supabase/migrations/0001_init.sql`** — If a change affects the database schema (tables,
   columns, indexes, policies, functions, etc.), update this migration so it always reflects the
   current schema.

These updates are not optional — treat them as required steps for any change before considering the work complete.
