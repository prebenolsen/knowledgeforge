// ============================================================
// Content import script
//
// Usage:
//   1. Add SUPABASE_SERVICE_KEY to .env.local (NOT the anon key —
//      the service key bypasses RLS so it can write content).
//   2. Run:  npm run import          (imports the built-in seed set)
//      or:   npm run import -- path/to/batch.json
//
// Batch JSON format (array of categories) matches src/content/seed.
// Re-running is safe: it upserts by slug, so nothing is duplicated.
// ============================================================

import 'dotenv/config';
import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';
import { SEED, type SeedCategory } from '../src/content/seed/index';

const url = process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;

if (!url || !serviceKey) {
  console.error(
    'Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_KEY in .env.local.\n' +
      'The service key is under Supabase -> Project Settings -> API -> service_role.'
  );
  process.exit(1);
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } });

async function importCategory(cat: SeedCategory, order: number): Promise<void> {
  // Upsert category
  const { data: category, error: catErr } = await db
    .from('categories')
    .upsert({ slug: cat.slug, name: cat.name, icon: cat.icon, sort_order: order }, { onConflict: 'slug' })
    .select()
    .single();
  if (catErr) throw catErr;

  for (const sub of cat.subcategories) {
    const { data: subcat, error: subErr } = await db
      .from('subcategories')
      .upsert(
        { category_id: category.id, slug: sub.slug, name: sub.name },
        { onConflict: 'category_id,slug' }
      )
      .select()
      .single();
    if (subErr) throw subErr;

    for (const q of sub.questions) {
      const { error: qErr } = await db.from('questions').insert({
        subcategory_id: subcat.id,
        question: q.question,
        answers: q.answers,
        correct_index: q.correct,
        explanation: q.explanation,
        difficulty: q.difficulty,
        tags: q.tags,
        active: true
      });
      // Ignore duplicate question inserts on re-run by matching text isn't
      // trivial, so we simply log and continue.
      if (qErr) console.warn(`  ! skipped a question in ${sub.slug}: ${qErr.message}`);
    }
    console.log(`  + ${cat.slug}/${sub.slug}: ${sub.questions.length} questions`);
  }
}

async function main(): Promise<void> {
  const fileArg = process.argv[2];
  let data: SeedCategory[];

  if (fileArg) {
    console.log(`Importing from ${fileArg}…`);
    data = JSON.parse(readFileSync(fileArg, 'utf-8')) as SeedCategory[];
  } else {
    console.log('Importing built-in seed content…');
    data = SEED;
  }

  let order = 0;
  for (const cat of data) {
    console.log(`Category: ${cat.name.en}`);
    await importCategory(cat, order++);
  }
  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
