// ============================================================
// Spanish — language definition (the category → module → lesson tree).
//
// CONTENT STATUS (see Questions.md): one fully-built path (Survival → Restaurant
// + the Restaurant scenario, Vocabulary → Food & People), the rest are typed
// stubs so the tree renders with "coming soon" placeholders. Vocabulary,
// sentences, components, and scenarios live in their sibling files and are
// referenced by id.
// ============================================================

import type { LanguageDefinition } from '@/types';
import { ES_VOCABULARY } from './vocabulary';
import { ES_COMPONENTS, ES_SENTENCES } from './sentences';
import { ES_SCENARIOS } from './scenarios';

export const SPANISH: LanguageDefinition = {
  code: 'es',
  name: { en: 'Spanish', no: 'Spansk' },
  nativeName: 'Español',
  flag: '🇪🇸',
  vocabulary: ES_VOCABULARY,
  components: ES_COMPONENTS,
  sentences: ES_SENTENCES,
  scenarios: ES_SCENARIOS,
  categories: [
    {
      id: 'es-cat-survival',
      slug: 'survival',
      name: { en: 'Survival Spanish', no: 'Overlevelses-spansk' },
      icon: '🧭',
      kind: 'survival',
      modules: [
        {
          id: 'es-mod-restaurant',
          slug: 'restaurant',
          name: { en: 'Restaurant', no: 'Restaurant' },
          level: 'A1',
          scenarioIds: ['sc-restaurant'],
          lessons: [
            {
              id: 'es-les-restaurant-basics',
              slug: 'restaurant-basics',
              name: { en: 'Restaurant basics', no: 'Restaurant-grunnlag' },
              vocabIds: ['es-hola', 'es-gracias', 'es-por-favor', 'es-quiero', 'es-donde', 'es-bano'],
              sentenceIds: ['s-quiero-cafe', 's-la-cuenta'],
              exerciseTypes: ['flashcard', 'multiple-choice', 'typing', 'matching', 'sentence-build']
            }
          ]
        },
        // ---- Stubs awaiting a content pass ----
        { id: 'es-mod-hotel', slug: 'hotel', name: { en: 'Hotel', no: 'Hotell' }, level: 'A1', scenarioIds: [], lessons: [] },
        { id: 'es-mod-grocery', slug: 'grocery-store', name: { en: 'Grocery Store', no: 'Dagligvarebutikk' }, level: 'A1', scenarioIds: [], lessons: [] },
        { id: 'es-mod-directions', slug: 'directions', name: { en: 'Directions', no: 'Veibeskrivelse' }, level: 'A2', scenarioIds: [], lessons: [] }
      ]
    },
    {
      id: 'es-cat-vocabulary',
      slug: 'vocabulary',
      name: { en: 'Vocabulary', no: 'Ordforråd' },
      icon: '📚',
      kind: 'vocabulary',
      modules: [
        {
          id: 'es-mod-food',
          slug: 'food',
          name: { en: 'Food', no: 'Mat' },
          level: 'A1',
          scenarioIds: [],
          lessons: [
            {
              id: 'es-les-food-drinks',
              slug: 'food-and-drinks',
              name: { en: 'Food & drinks', no: 'Mat og drikke' },
              vocabIds: ['es-cafe', 'es-cerveza', 'es-agua', 'es-bistec'],
              sentenceIds: ['s-quiero-cafe', 's-quiero-cerveza'],
              exerciseTypes: ['flashcard', 'multiple-choice', 'typing', 'matching']
            }
          ]
        },
        {
          id: 'es-mod-people',
          slug: 'people',
          name: { en: 'People', no: 'Mennesker' },
          level: 'A1',
          scenarioIds: [],
          lessons: [
            {
              id: 'es-les-people-clothing',
              slug: 'people-and-clothing',
              name: { en: 'People & clothing', no: 'Mennesker og klær' },
              // A personalization showcase: gender-affinity words weight differently
              // per profile, but every learner can practise the full set.
              vocabIds: ['es-hombre', 'es-mujer', 'es-chico', 'es-camisa', 'es-pantalones', 'es-falda', 'es-vestido', 'es-maquillaje'],
              sentenceIds: [],
              exerciseTypes: ['flashcard', 'multiple-choice', 'matching', 'typing']
            }
          ]
        },
        { id: 'es-mod-travel', slug: 'travel', name: { en: 'Travel', no: 'Reise' }, level: 'A2', scenarioIds: [], lessons: [] }
      ]
    },
    {
      id: 'es-cat-grammar',
      slug: 'grammar',
      name: { en: 'Grammar', no: 'Grammatikk' },
      icon: '✍️',
      kind: 'grammar',
      modules: [
        { id: 'es-mod-gender', slug: 'gender', name: { en: 'Gender', no: 'Kjønn' }, level: 'A1', scenarioIds: [], lessons: [] },
        { id: 'es-mod-ser-estar', slug: 'ser-vs-estar', name: { en: 'Ser vs Estar', no: 'Ser vs Estar' }, level: 'A2', scenarioIds: [], lessons: [] },
        { id: 'es-mod-conjugation', slug: 'verb-conjugation', name: { en: 'Verb conjugation', no: 'Verbbøying' }, level: 'A2', scenarioIds: [], lessons: [] }
      ]
    },
    {
      id: 'es-cat-conversation',
      slug: 'conversation',
      name: { en: 'Conversation', no: 'Samtale' },
      icon: '💬',
      kind: 'conversation',
      modules: [
        { id: 'es-mod-greetings', slug: 'greetings', name: { en: 'Greetings', no: 'Hilsener' }, level: 'A1', scenarioIds: [], lessons: [] }
      ]
    }
  ]
};
