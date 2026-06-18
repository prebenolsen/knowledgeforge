import { COUNTRIES } from '../src/content/geo/countries';
import { WORLD_PATHS, CONTINENT_VIEWBOX } from '../src/content/geo/worldPaths';
import { writeFileSync } from 'node:fs';
const cont = 'Europe';
const [vx, vy, vw, vh] = CONTINENT_VIEWBOX[cont];
const quizable = COUNTRIES.filter(c => c.continent === cont);
const isoSet = new Set(quizable.map(c => c.iso3));
function overlaps(d: string): boolean {
  const nums = d.match(/-?\d+(\.\d+)?/g)!.map(Number);
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = nums[i], y = nums[i + 1];
    if (x >= vx && x <= vx + vw && y >= vy && y <= vy + vh) return true;
  }
  return false;
}
const paths = Object.entries(WORLD_PATHS)
  .filter(([iso, d]) => isoSet.has(iso) || overlaps(d))
  .map(([iso, d]) => ({ iso, d, q: isoSet.has(iso) }));
const names: Record<string,string> = {};
for (const c of quizable) names[c.iso3] = c.nameEn;
const out = { viewBox: CONTINENT_VIEWBOX[cont], paths, names };
writeFileSync('scripts/_europe.json', JSON.stringify(out));
console.log('paths kept:', paths.length, 'bytes:', JSON.stringify(out).length);
