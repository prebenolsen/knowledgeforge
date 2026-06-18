# Geography Map — Interactive Country Learning

Tracking file for the interactive geography feature. Keep this updated as work
progresses: tick boxes, note decisions, record anything that deviated from plan.

## Goal

A fullscreen, map-based activity (separate from the MCQ quiz engine) where the
player learns countries one continent at a time:

- **Explore mode** — tap any country on the map, type its name to self-test.
- **Quiz mode** — the app highlights a random country, the player types its name.
- Answers graded with **Levenshtein distance** (case-insensitive, diacritics
  ignored). Accept **either the English or Norwegian** name (+ curated aliases).
- **Hints**, progressive and tracked for scoring:
  - *First letter* → asking again reveals the *next letter*, and so on.
  - *4 cards* — 1 correct + 3 nearest-neighbour countries (always offered
    alongside the letter hint).
- Capitals come later (out of scope for now).

## Agreed decisions

1. **Map tech:** static SVG (per-country `<path>` keyed by ISO) + a static
   country dataset (centroids). No d3 / react-simple-maps. Lazy-loaded route.
2. **Persistence:** new Supabase tables (`geo_attempts`, `geo_progress`) + RLS.
3. **Accepted answers:** either English or Norwegian name, regardless of UI
   locale, plus aliases. Levenshtein tolerance on top.
4. **Continents (6):** Africa, Asia, Europe, North America, South America,
   Oceania. Antarctica skipped.
5. **Neighbours** (for the 4-card hint): nearest centroids (haversine) within the
   same continent, top 3 ≠ target.
6. **Licensing:** vendor mledoze/countries (ODbL) + a CC0/MIT world SVG;
   attribution noted in SETUP.md / README.

## Sources

- Country data: https://github.com/mledoze/countries (`countries.json`, ODbL).
  - `name.common` (en), `translations.nob.common` (no), `latlng` (centroid),
    `continents`, `cca2`/`cca3`, plus alt spellings for aliases.
- World SVG: a CC0/MIT world map with ISO-keyed paths (source TBD, recorded on
  extraction).

## Grading rules (`src/lib/geo.ts`)

- `normalize(s)`: lowercase → NFD strip diacritics → drop punctuation → collapse
  spaces.
- Accepted set per country = `{ nameEn, nameNo, ...aliases }` (all normalized).
- Correct if normalized input equals any accepted name **or** Levenshtein
  distance to the nearest ≤ `max(1, floor(len * 0.2))`.

## Scoring (draft)

- Correct, no hint: 100. Each letter revealed: −20. Using 4-cards: capped lower
  (e.g. max 40). Floor at some minimum for a correct answer. Tune during build.

---

## Phase 1 — Client-only game (no persistence)

- [x] Source + vendor mledoze `countries.json` (ODbL). NOTE: this build has no
      `nob` translation and no `continents` field — see deviations.
- [x] Source map geometry: Natural Earth 110m GeoJSON (public domain) instead of
      a third-party SVG. Paths generated offline → still static at runtime.
- [x] Norwegian names from i18n-iso-countries `langs/nb.json` (MIT).
- [x] `scripts/build-geo.ts` → generates BOTH `countries.ts` (iso3, iso2, nameEn,
      nameNo, continent, lat, lng, aliases) and `worldPaths.ts`
      (`{ iso3: dPath }` + `CONTINENT_VIEWBOX`). Run via `npm run build:geo`.
      Output: 175 map paths, 165 quizable sovereign countries.
- [x] `src/lib/geo.ts` — dataset access, continent lists, haversine neighbours,
      `normalize`, Levenshtein, `gradeAnswer`, hint helpers.
- [x] `src/components/geo/CountryMap.tsx` — render continent paths, highlight a
      target, handle taps, zoom via continent viewBox.
- [x] `src/pages/Atlas.tsx` — continent picker → mode select → runner
      (Explore + Quiz), text input, hint controls, end-of-pass score summary.
- [x] `src/App.tsx` — add `/atlas` route (lazy) + add to `FULLSCREEN`.
- [x] Entry card on `Home.tsx`. (Skipped the Browse Geography tile — ModuleList
      only has categoryId, not slug; Home card is the discoverable entry for v1.)
- [x] i18n strings in `src/i18n/en.ts` + `no.ts` (`geo.*`).
- [~] `src/types/index.ts` — geo types. Deferred to Phase 2: the only geo type
      needed so far (`GeoCountry`) lives in generated `countries.ts` and is
      re-exported from `geo.ts`. DB row types will be added in Phase 2.
- [x] Housekeeping: bumped `version.json` + `package.json` to **3.11.0**,
      `CHANGELOG.md` entry, updated `SETUP.md` (data-gen step, route, attribution).
- [x] Verification: `tsc -b` clean, `npm run build` OK (Atlas is a 56 KB-gzip
      lazy chunk). Neighbour + grading logic spot-checked against the dataset.
      Rendered an interactive Europe preview from the real generated paths.
      NOTE: `/atlas` is behind the Supabase auth gate, so in-app manual play
      wasn't exercised here (no test credentials) — worth a quick human check.

## Phase 2 — Persistence + dashboard  ✅

- [x] `0001_init.sql` — `geo_attempts` + `geo_progress` tables + indexes + RLS
      (own-rows, mirroring the existing user-table policies).
- [x] `src/lib/geoProgress.ts` — `recordGeoAttempt` (insert + merge per-country
      stats), `recordGeoSessionScore` (best per continent), `fetchGeoProgress`.
- [x] Wired the runner: `submit()` logs each attempt (fire-and-forget); a
      `useEffect` on `finished` saves the session score. Uses `useAuth` for the
      user id.
- [x] **Country Atlas** panel on `Progress.tsx` — per continent: countries named
      correctly ≥1× / total, mastery bar, and best score. Renders only when geo
      data exists; visible even if the user has no MCQ data.
- [x] Housekeeping: bumped to **3.12.0** (version.json + package.json),
      CHANGELOG `[3.12.0]` entry, SETUP.md schema note. `npm run build` OK.
- [ ] Manual verification: scores persist across reloads / devices. NEEDS the
      migration applied to Supabase + a human login (can't run here). See below.

### Phase 2 deploy note

The new tables only exist once `supabase/migrations/0001_init.sql` is re-run
against the database (Supabase SQL editor). It's idempotent (`create table if
not exists` + `drop policy if exists`), so re-running the whole file is safe and
only adds the two `geo_*` tables. Until then, the Atlas still plays but the
attempt/score writes will fail silently (fire-and-forget) and the dashboard
panel stays hidden.

### Deviation

- Geo types (`GeoProgress`, `GeoCountryStat`, `GeoCountry`) live next to their
  usage (`geoProgress.ts`, generated `countries.ts`) rather than in
  `src/types/index.ts`, keeping the feature self-contained. The earlier
  "types/index.ts" task is intentionally not done.
- `Progress.tsx` is eager, so importing `@/lib/geo` pulls the ~29 KB country
  dataset (≈9 KB gzip) into the main bundle. `worldPaths.ts` (123 KB) stays in
  the lazy Atlas chunk. Acceptable; revisit if main-bundle size matters.

## Notes / deviations

- **Map source = GeoJSON, not a prebuilt SVG.** mledoze had no clean per-country
  SVG and third-party world SVGs have inconsistent IDs, so `build-geo.ts`
  projects Natural Earth 110m GeoJSON (equirectangular, 2000x1000 viewBox) to
  path `d` strings keyed by ISO-A3. Runtime still renders static `<path>`s — the
  agreed "static SVG + dataset" approach, no runtime d3.
- **110m resolution drops tiny states.** Caribbean/Central-American micro-states
  and most Pacific island nations have no geometry at 110m, so North America = 16
  and Oceania = 6 quizable countries. Acceptable for v1; bump to 50m later if we
  want fuller coverage (larger files).
- **Norwegian names** come from i18n-iso-countries (`nb.json`), since this
  mledoze build ships no `nob` translation.
- **Continent grouping** uses Natural Earth `CONTINENT` (already splits N/S
  America). Russia is classed as Europe by NE; its centroid sits in Asia so the
  Europe viewBox is framed by the 3rd–97th percentile of member centroids to
  avoid stretching. Russia still renders (western part) when quizzed in Europe.
- Vendored sources live in `scripts/data/` (git-ignored candidates — see below).
