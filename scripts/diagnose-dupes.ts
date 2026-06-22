// TEMPORARY read-only diagnostic: detect duplicate questions.
// A duplicate = same module_id + same English question text + same difficulty.
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const url = process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;
if (!url || !serviceKey) {
  console.error('Missing env');
  process.exit(1);
}
const db = createClient(url, serviceKey, { auth: { persistSession: false } });

type Row = {
  id: string;
  module_id: string;
  difficulty: string;
  created_at: string;
  question: { en?: string };
};

async function fetchAll(): Promise<Row[]> {
  const all: Row[] = [];
  const pageSize = 1000;
  for (let from = 0; ; from += pageSize) {
    const { data, error } = await db
      .from('knowledgeforge_questions')
      .select('id, module_id, difficulty, created_at, question')
      .order('created_at', { ascending: true })
      .range(from, from + pageSize - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    all.push(...(data as Row[]));
    if (data.length < pageSize) break;
  }
  return all;
}

async function main() {
  const rows = await fetchAll();
  console.log(`Total questions in DB: ${rows.length}`);

  const groups = new Map<string, Row[]>();
  for (const r of rows) {
    const key = `${r.module_id}|${r.difficulty}|${(r.question?.en ?? '').trim()}`;
    const g = groups.get(key) ?? [];
    g.push(r);
    groups.set(key, g);
  }

  let dupGroups = 0;
  let extraRows = 0;
  for (const g of groups.values()) {
    if (g.length > 1) {
      dupGroups++;
      extraRows += g.length - 1;
    }
  }

  console.log(`Distinct questions (by module+difficulty+en): ${groups.size}`);
  console.log(`Duplicate groups (appearing >1x): ${dupGroups}`);
  console.log(`Redundant extra rows to remove: ${extraRows}`);

  // Show a few examples
  let shown = 0;
  for (const g of groups.values()) {
    if (g.length > 1 && shown < 5) {
      console.log(`  x${g.length}: "${(g[0].question?.en ?? '').slice(0, 70)}"`);
      shown++;
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
