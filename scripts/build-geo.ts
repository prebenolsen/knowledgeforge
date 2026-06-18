// ============================================================
// Geography data generator (one-off, run with: npm run build:geo)
//
// Joins three vendored sources and emits two generated TS modules
// consumed by the interactive map game:
//
//   src/content/geo/worldPaths.ts   — { iso3: svgPathD } for every
//      land feature, plus CONTINENT_VIEWBOX framing each continent.
//   src/content/geo/countries.ts    — the quizable sovereign countries
//      (iso3, iso2, nameEn, nameNo, continent, lat, lng, aliases).
//
// Sources (vendored under scripts/data/, see SETUP.md for attribution):
//   - mledoze/countries countries.json          (ODbL)
//   - Natural Earth 110m admin-0 GeoJSON         (public domain)
//   - i18n-iso-countries langs/nb.json           (MIT) — Norwegian names
//
// Map projection: equirectangular onto a 2000x1000 viewBox.
// ============================================================

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dataDir = resolve(here, 'data');
const outDir = resolve(here, '../src/content/geo');

// ---- Projection -------------------------------------------
const W = 2000;
const H = 1000;
const S = W / 360; // degrees -> px (uniform; H = 180 * S)
const projX = (lon: number) => (lon + 180) * S;
const projY = (lat: number) => (90 - lat) * S;
const r1 = (n: number) => Math.round(n * 10) / 10;

// The 6 continents we teach (Natural Earth CONTINENT values), Antarctica
// and "Seven seas (open ocean)" excluded.
const CONTINENTS = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];

// ---- Load sources -----------------------------------------
interface Mledoze {
  cca2: string;
  cca3: string;
  name: { common: string; official: string };
  altSpellings: string[];
  region: string;
  subregion: string;
  latlng: [number, number];
  independent: boolean | null;
  unMember: boolean;
}
const mledoze = JSON.parse(readFileSync(resolve(dataDir, 'countries.json'), 'utf8')) as Mledoze[];
const geo = JSON.parse(readFileSync(resolve(dataDir, 'ne_110m.geojson'), 'utf8')) as {
  features: Array<{ properties: Record<string, unknown>; geometry: { type: string; coordinates: unknown } }>;
};
const nbRaw = JSON.parse(readFileSync(resolve(dataDir, 'nb-countries.json'), 'utf8'));
const nbNames: Record<string, string> = nbRaw.countries ?? nbRaw;

const byCca3 = new Map(mledoze.map((m) => [m.cca3, m]));

// ---- Path building ----------------------------------------
function ringToPath(ring: number[][]): string {
  let d = '';
  let px = NaN;
  let py = NaN;
  for (let i = 0; i < ring.length; i++) {
    const x = r1(projX(ring[i][0]));
    const y = r1(projY(ring[i][1]));
    if (x === px && y === py) continue; // drop duplicate points after rounding
    d += `${d ? 'L' : 'M'}${x} ${y}`;
    px = x;
    py = y;
  }
  return d ? d + 'Z' : '';
}

function geometryToPath(geometry: { type: string; coordinates: unknown }): string {
  if (geometry.type === 'Polygon') {
    return (geometry.coordinates as number[][][]).map(ringToPath).join('');
  }
  if (geometry.type === 'MultiPolygon') {
    return (geometry.coordinates as number[][][][])
      .flatMap((poly) => poly.map(ringToPath))
      .join('');
  }
  return '';
}

function iso3Of(p: Record<string, unknown>): string {
  const eh = p.ISO_A3_EH as string;
  if (eh && eh !== '-99') return eh;
  const a3 = p.ISO_A3 as string;
  if (a3 && a3 !== '-99') return a3;
  return p.ADM0_A3 as string;
}

// ---- Generate worldPaths + collect per-continent extents --
const paths: Record<string, string> = {};
// Collect member centroids per continent; we frame robustly (percentiles)
// so a single outlier (e.g. Russia, classed as Europe, centroid in Asia)
// can't stretch the viewBox across the map.
const centroids = new Map<string, Array<{ x: number; y: number }>>();

for (const f of geo.features) {
  const continent = f.properties.CONTINENT as string;
  if (!CONTINENTS.includes(continent)) continue;
  const iso3 = iso3Of(f.properties);
  if (!iso3 || iso3 === '-99') continue;
  const d = geometryToPath(f.geometry);
  if (!d) continue;
  paths[iso3] = d;
}

// ---- Quizable countries (sovereign + UN member) -----------
interface GeoCountry {
  iso3: string;
  iso2: string;
  nameEn: string;
  nameNo: string;
  continent: string;
  lat: number;
  lng: number;
  aliases: string[];
}
const countries: GeoCountry[] = [];

for (const f of geo.features) {
  const continent = f.properties.CONTINENT as string;
  if (!CONTINENTS.includes(continent)) continue;
  const iso3 = iso3Of(f.properties);
  const m = byCca3.get(iso3);
  // Teach sovereign UN-member states only (skips dependencies, disputed, etc.)
  if (!m || !m.independent || !m.unMember) continue;
  if (!paths[iso3]) continue;

  const iso2 = m.cca2;
  const nameEn = m.name.common;
  const nameNo = nbNames[iso2] || nameEn;

  const aliasSet = new Set<string>();
  for (const a of m.altSpellings || []) aliasSet.add(a);
  for (const extra of [f.properties.NAME, f.properties.NAME_LONG, f.properties.FORMAL_EN, m.name.official]) {
    if (typeof extra === 'string') aliasSet.add(extra);
  }
  aliasSet.delete(nameEn);
  aliasSet.delete(nameNo);
  // Drop 2-letter codes and noise; keep human-readable aliases only.
  const aliases = [...aliasSet].filter((a) => a.length > 2 && /[a-zA-ZÀ-ɏ]/.test(a));

  const [lat, lng] = m.latlng;
  countries.push({ iso3, iso2, nameEn, nameNo, continent, lat, lng, aliases });

  // Frame continents by member centroids — avoids antimeridian path
  // artifacts (Russia/Fiji wrap) blowing up the bounding box.
  const arr = centroids.get(continent) ?? [];
  arr.push({ x: projX(lng), y: projY(lat) });
  centroids.set(continent, arr);
}

countries.sort((a, b) => a.continent.localeCompare(b.continent) || a.nameEn.localeCompare(b.nameEn));

// ---- Per-continent viewBox (robust) -----------------------
const MARGIN = 12 * S; // ~12 degrees of breathing room around centroids
// Percentile that trims lone outliers (Russia in "Europe", Pacific wrap).
const pct = (sorted: number[], p: number) =>
  sorted[Math.min(sorted.length - 1, Math.max(0, Math.round((p / 100) * (sorted.length - 1))))];
const viewBox: Record<string, [number, number, number, number]> = {};
for (const c of CONTINENTS) {
  const arr = centroids.get(c);
  if (!arr || !arr.length) continue;
  const xs = arr.map((p) => p.x).sort((a, b) => a - b);
  const ys = arr.map((p) => p.y).sort((a, b) => a - b);
  const minX = Math.max(0, pct(xs, 3) - MARGIN);
  const minY = Math.max(0, pct(ys, 3) - MARGIN);
  const maxX = Math.min(W, pct(xs, 97) + MARGIN);
  const maxY = Math.min(H, pct(ys, 97) + MARGIN);
  viewBox[c] = [r1(minX), r1(minY), r1(maxX - minX), r1(maxY - minY)];
}

// Report quizable countries whose centroid lands outside their continent
// viewBox (their landmass may be partly clipped in that view).
for (const c of countries) {
  const vb = viewBox[c.continent];
  if (!vb) continue;
  const x = projX(c.lng);
  const y = projY(c.lat);
  if (x < vb[0] || x > vb[0] + vb[2] || y < vb[1] || y > vb[1] + vb[3]) {
    console.log(`  (outside ${c.continent} view: ${c.nameEn})`);
  }
}

// ---- Emit --------------------------------------------------
mkdirSync(outDir, { recursive: true });

const banner = `// AUTO-GENERATED by scripts/build-geo.ts — do not edit by hand.\n// Run \`npm run build:geo\` to regenerate. See SETUP.md for data sources/licenses.\n`;

writeFileSync(
  resolve(outDir, 'worldPaths.ts'),
  banner +
    `\n// Equirectangular projection on a ${W}x${H} viewBox.\n` +
    `export const MAP_WIDTH = ${W};\nexport const MAP_HEIGHT = ${H};\n\n` +
    `export const WORLD_PATHS: Record<string, string> = ${JSON.stringify(paths)};\n\n` +
    `export const CONTINENT_VIEWBOX: Record<string, [number, number, number, number]> = ${JSON.stringify(viewBox)};\n`
);

writeFileSync(
  resolve(outDir, 'countries.ts'),
  banner +
    `\nexport interface GeoCountry {\n` +
    `  iso3: string;\n  iso2: string;\n  nameEn: string;\n  nameNo: string;\n` +
    `  continent: string;\n  lat: number;\n  lng: number;\n  aliases: string[];\n}\n\n` +
    `export const COUNTRIES: GeoCountry[] = ${JSON.stringify(countries, null, 0)};\n`
);

console.log(`Wrote ${Object.keys(paths).length} map paths, ${countries.length} quizable countries.`);
console.log('Per continent:');
for (const c of CONTINENTS) {
  const n = countries.filter((x) => x.continent === c).length;
  console.log(`  ${c}: ${n} countries, viewBox ${JSON.stringify(viewBox[c])}`);
}
