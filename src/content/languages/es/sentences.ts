// ============================================================
// Spanish — sample sentence components + sentences (bilingual en/no).
//
// CONTENT STATUS (see Questions.md): SAMPLE ONLY. Components are reusable building
// blocks ("quiero", "un", "por favor") that combine into many sentences and
// scenarios. Teach the casual form first; formal variants ("quisiera") come later
// and are marked formality: 'formal'.
// ============================================================

import type { Sentence, SentenceComponent } from '@/types';

export const ES_COMPONENTS: SentenceComponent[] = [
  { id: 'c-quiero', role: 'verb', term: 'quiero', translation: { en: 'I want', no: 'jeg vil ha' }, vocabId: 'es-quiero' },
  { id: 'c-quisiera', role: 'verb', term: 'quisiera', translation: { en: 'I would like', no: 'jeg vil gjerne ha' } },
  { id: 'c-un', role: 'modifier', term: 'un', translation: { en: 'a (m)', no: 'en (han)' } },
  { id: 'c-una', role: 'modifier', term: 'una', translation: { en: 'a (f)', no: 'en (hun)' } },
  { id: 'c-bistec', role: 'object', term: 'bistec', translation: { en: 'steak', no: 'biff' }, vocabId: 'es-bistec' },
  { id: 'c-cafe', role: 'object', term: 'café', translation: { en: 'coffee', no: 'kaffe' }, vocabId: 'es-cafe' },
  { id: 'c-cerveza', role: 'object', term: 'cerveza', translation: { en: 'beer', no: 'øl' }, vocabId: 'es-cerveza' },
  { id: 'c-agua', role: 'object', term: 'agua', translation: { en: 'water', no: 'vann' }, vocabId: 'es-agua' },
  { id: 'c-por-favor', role: 'modifier', term: 'por favor', translation: { en: 'please', no: 'vær så snill' }, vocabId: 'es-por-favor' },
  { id: 'c-la-cuenta', role: 'object', term: 'la cuenta', translation: { en: 'the bill', no: 'regningen' }, vocabId: 'es-cuenta' }
];

export const ES_SENTENCES: Sentence[] = [
  {
    id: 's-quiero-bistec',
    text: 'Quiero un bistec, por favor',
    translation: { en: 'I want a steak, please', no: 'Jeg vil ha en biff, takk' },
    componentIds: ['c-quiero', 'c-un', 'c-bistec', 'c-por-favor'],
    formality: 'casual',
    level: 'A1'
  },
  {
    id: 's-quiero-cafe',
    text: 'Quiero un café',
    translation: { en: 'I want a coffee', no: 'Jeg vil ha en kaffe' },
    componentIds: ['c-quiero', 'c-un', 'c-cafe'],
    formality: 'casual',
    level: 'A1'
  },
  {
    id: 's-quiero-cerveza',
    text: 'Quiero una cerveza',
    translation: { en: 'I want a beer', no: 'Jeg vil ha en øl' },
    componentIds: ['c-quiero', 'c-una', 'c-cerveza'],
    formality: 'casual',
    level: 'A1'
  },
  {
    id: 's-la-cuenta',
    text: 'La cuenta, por favor',
    translation: { en: 'The bill, please', no: 'Regningen, takk' },
    componentIds: ['c-la-cuenta', 'c-por-favor'],
    formality: 'casual',
    level: 'A2'
  },
  {
    // Formal variant of "Quiero un café" — introduced later than the casual form.
    id: 's-quisiera-cafe',
    text: 'Quisiera un café',
    translation: { en: 'I would like a coffee', no: 'Jeg vil gjerne ha en kaffe' },
    componentIds: ['c-quisiera', 'c-un', 'c-cafe'],
    formality: 'formal',
    level: 'A2'
  }
];
