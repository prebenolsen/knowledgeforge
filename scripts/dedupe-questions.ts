// One-off cleanup: remove duplicate questions created by an accidental
// re-run of `npm run import`. Keeps the OLDEST row in each duplicate group
// (the original, which user progress/attempts reference) and deletes the
// newer copies.
//
// A duplicate = identical module_id + difficulty + question(en) + answers JSON.
//
//   Dry run (default, no deletes):  npx tsx scripts/dedupe-questions.ts
//   Apply deletes:                  npx tsx scripts/dedupe-questions.ts --apply
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const url = process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;
if (!url || !serviceKey) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_KEY in .env');
  process.exit(1);
}
const apply = process.argv.includes('--apply');
const db = createClient(url, serviceKey, { auth: { persistSession: false } });

type Row = {
  id: string;
  module_id: string;
  difficulty: string;
  created_at: string;
  question: { en?: string };
  answers: unknown;
};

async function fetchAll(): Promise<Row[]> {
  const all: Row[] = [];
  const pageSize = 1000;
  for (let from = 0; ; from += pageSize) {
    const { data, error } = await db
      .from('knowledgeforge_questions')
      .select('id, module_id, difficulty, created_at, question, answers')
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
    const key = `${r.module_id}|${r.difficulty}|${(r.question?.en ?? '').trim()}|${JSON.stringify(r.answers)}`;
    const g = groups.get(key) ?? [];
    g.push(r); // rows already ordered oldest-first
    groups.set(key, g);
  }

  // Collect ids to delete = every row except the oldest in each group.
  const toDelete: string[] = [];
  for (const g of groups.values()) {
    if (g.length > 1) {
      for (let i = 1; i < g.length; i++) toDelete.push(g[i].id);
    }
  }

  console.log(`Distinct questions to keep: ${groups.size}`);
  console.log(`Redundant rows to delete:   ${toDelete.length}`);
  console.log(`Expected remaining after:   ${rows.length - toDelete.length}`);

  if (!apply) {
    console.log('\nDRY RUN — no rows deleted. Re-run with --apply to delete.');
    return;
  }

  console.log('\nApplying deletes…');
  const batchSize = 200;
  let deleted = 0;
  for (let i = 0; i < toDelete.length; i += batchSize) {
    const batch = toDelete.slice(i, i + batchSize);
    const { error } = await db.from('knowledgeforge_questions').delete().in('id', batch);
    if (error) throw error;
    deleted += batch.length;
    console.log(`  deleted ${deleted}/${toDelete.length}`);
  }
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
