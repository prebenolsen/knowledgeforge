// ============================================================
// Taxonomy name sync
//
// Refreshes the bilingual (en/no) *names* of categories, subcategories and
// modules in Supabase from the seed content — WITHOUT touching questions.
//
// Use this when the seed's names/translations have changed but the questions
// themselves haven't (e.g. Norwegian subcategory names were added after the
// initial import). Unlike `npm run import`, this never inserts questions, so it
// is fully idempotent and cannot create duplicate questions.
//
// Usage:
//   1. Ensure VITE_SUPABASE_URL + SUPABASE_SERVICE_KEY are set in .env
//      (the service key bypasses RLS so it can write content).
//   2. Run:  npm run sync:taxonomy
// ============================================================

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { SEED, type SeedCategory } from '../src/content/seed/index';

const url = process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;

if (!url || !serviceKey) {
  console.error(
    'Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_KEY in .env.\n' +
      'The service key is under Supabase -> Project Settings -> API -> service_role.'
  );
  process.exit(1);
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } });

async function syncCategory(cat: SeedCategory, order: number): Promise<void> {
  const { data: category, error: catErr } = await db
    .from('knowledgeforge_categories')
    .upsert({ slug: cat.slug, name: cat.name, icon: cat.icon, sort_order: order }, { onConflict: 'slug' })
    .select()
    .single();
  if (catErr) throw catErr;
  console.log(`Category: ${cat.name.en} / ${cat.name.no}`);

  for (const sub of cat.subcategories) {
    const { data: subcat, error: subErr } = await db
      .from('knowledgeforge_subcategories')
      .upsert(
        { category_id: category.id, slug: sub.slug, name: sub.name },
        { onConflict: 'category_id,slug' }
      )
      .select()
      .single();
    if (subErr) throw subErr;
    console.log(`  ↳ ${sub.name.en} / ${sub.name.no}`);

    let modOrder = 0;
    for (const mod of sub.modules) {
      const { error: modErr } = await db
        .from('knowledgeforge_modules')
        .upsert(
          { subcategory_id: subcat.id, slug: mod.slug, name: mod.name, sort_order: modOrder++ },
          { onConflict: 'subcategory_id,slug' }
        );
      if (modErr) throw modErr;
    }
  }
}

async function main(): Promise<void> {
  console.log('Syncing taxonomy names from seed (questions untouched)…\n');
  let order = 0;
  for (const cat of SEED) {
    await syncCategory(cat, order++);
  }
  console.log('\nDone — category/subcategory/module names refreshed.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
