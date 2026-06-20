// ============================================================
// Spanish — sample vocabulary (bilingual en/no translations).
//
// CONTENT STATUS (see Questions.md): SAMPLE ONLY. ~20 hand-authored words to
// exercise the framework end-to-end — multi-tagging, personalization weighting,
// and exercise generation. Real datasets are authored later.
//
// Notes for authors:
//   - A word carries MANY `tags`; selection is by tag, never by a single folder.
//   - `relevance` only *weights* a word for a profile — it never hides it
//     (e.g. gender-affinity marks `camisa`/`pantalones` for male, `falda`/
//     `vestido`/`maquillaje` for female; all stay reachable by everyone).
//   - `difficulty` uses CEFR levels (A1 easiest). Spread realistically.
// ============================================================

import type { VocabWord } from '@/types';

export const ES_VOCABULARY: VocabWord[] = [
  // ---- Social / greetings ----
  {
    id: 'es-hola',
    term: 'hola',
    translation: { en: 'hello', no: 'hei' },
    difficulty: 'A1',
    pos: 'interjection',
    tags: ['social', 'greetings', 'restaurant', 'hotel'],
    examples: [{ text: 'Hola, ¿cómo estás?', translation: { en: 'Hello, how are you?', no: 'Hei, hvordan har du det?' } }]
  },
  {
    id: 'es-gracias',
    term: 'gracias',
    translation: { en: 'thank you', no: 'takk' },
    difficulty: 'A1',
    pos: 'interjection',
    tags: ['social', 'greetings', 'restaurant', 'shopping'],
    examples: [{ text: 'Muchas gracias.', translation: { en: 'Thank you very much.', no: 'Tusen takk.' } }]
  },
  {
    id: 'es-por-favor',
    term: 'por favor',
    translation: { en: 'please', no: 'vær så snill' },
    difficulty: 'A1',
    pos: 'phrase',
    tags: ['social', 'restaurant', 'shopping', 'directions'],
    examples: [{ text: 'Un café, por favor.', translation: { en: 'A coffee, please.', no: 'En kaffe, takk.' } }]
  },
  {
    id: 'es-como',
    term: 'cómo',
    translation: { en: 'how', no: 'hvordan' },
    difficulty: 'A1',
    pos: 'adverb',
    tags: ['social', 'directions', 'questions'],
    examples: [{ text: '¿Cómo estás?', translation: { en: 'How are you?', no: 'Hvordan har du det?' } }]
  },
  {
    id: 'es-donde',
    term: 'dónde',
    translation: { en: 'where', no: 'hvor' },
    difficulty: 'A1',
    pos: 'adverb',
    // The canonical multi-tag example — one word, many contexts.
    tags: ['directions', 'restaurant', 'hotel', 'social', 'questions'],
    examples: [{ text: '¿Dónde está el baño?', translation: { en: 'Where is the bathroom?', no: 'Hvor er toalettet?' } }]
  },

  // ---- Restaurant / food & drink ----
  {
    id: 'es-bano',
    term: 'baño',
    translation: { en: 'bathroom', no: 'toalett' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['restaurant', 'hotel', 'directions'],
    examples: [{ text: '¿Dónde está el baño?', translation: { en: 'Where is the bathroom?', no: 'Hvor er toalettet?' } }]
  },
  {
    id: 'es-quiero',
    term: 'quiero',
    translation: { en: 'I want', no: 'jeg vil ha' },
    difficulty: 'A1',
    pos: 'verb',
    tags: ['restaurant', 'shopping', 'intent'],
    examples: [{ text: 'Quiero un café.', translation: { en: 'I want a coffee.', no: 'Jeg vil ha en kaffe.' } }],
    relevance: { interests: ['food'] }
  },
  {
    id: 'es-cafe',
    term: 'café',
    translation: { en: 'coffee', no: 'kaffe' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['restaurant', 'food', 'drinks'],
    examples: [{ text: 'Quiero un café.', translation: { en: 'I want a coffee.', no: 'Jeg vil ha en kaffe.' } }],
    relevance: { interests: ['food'] }
  },
  {
    id: 'es-cerveza',
    term: 'cerveza',
    translation: { en: 'beer', no: 'øl' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'f',
    tags: ['restaurant', 'food', 'drinks'],
    examples: [{ text: 'Una cerveza, por favor.', translation: { en: 'A beer, please.', no: 'En øl, takk.' } }],
    relevance: { interests: ['food'] }
  },
  {
    id: 'es-agua',
    term: 'agua',
    translation: { en: 'water', no: 'vann' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'f',
    tags: ['restaurant', 'food', 'drinks'],
    examples: [{ text: 'Un vaso de agua.', translation: { en: 'A glass of water.', no: 'Et glass vann.' } }],
    relevance: { interests: ['food'] }
  },
  {
    id: 'es-bistec',
    term: 'bistec',
    translation: { en: 'steak', no: 'biff' },
    difficulty: 'A2',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['restaurant', 'food'],
    examples: [{ text: 'Quiero un bistec, por favor.', translation: { en: 'I want a steak, please.', no: 'Jeg vil ha en biff, takk.' } }],
    relevance: { interests: ['food'] }
  },
  {
    id: 'es-cuenta',
    term: 'la cuenta',
    translation: { en: 'the bill', no: 'regningen' },
    difficulty: 'A2',
    pos: 'noun',
    grammaticalGender: 'f',
    tags: ['restaurant'],
    examples: [{ text: 'La cuenta, por favor.', translation: { en: 'The bill, please.', no: 'Regningen, takk.' } }]
  },

  // ---- People ----
  {
    id: 'es-hombre',
    term: 'hombre',
    translation: { en: 'man', no: 'mann' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['people', 'social'],
    examples: [{ text: 'El hombre es alto.', translation: { en: 'The man is tall.', no: 'Mannen er høy.' } }],
    relevance: { genderAffinity: 'male' }
  },
  {
    id: 'es-mujer',
    term: 'mujer',
    translation: { en: 'woman', no: 'kvinne' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'f',
    tags: ['people', 'social'],
    examples: [{ text: 'La mujer es médica.', translation: { en: 'The woman is a doctor.', no: 'Kvinnen er lege.' } }],
    relevance: { genderAffinity: 'female' }
  },
  {
    id: 'es-chico',
    term: 'chico',
    translation: { en: 'boy', no: 'gutt' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['people'],
    examples: [{ text: 'El chico juega.', translation: { en: 'The boy plays.', no: 'Gutten leker.' } }],
    relevance: { genderAffinity: 'male' }
  },

  // ---- Clothing / shopping (personalization showcase) ----
  {
    id: 'es-camisa',
    term: 'camisa',
    translation: { en: 'shirt', no: 'skjorte' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'f',
    tags: ['shopping', 'clothing'],
    examples: [{ text: 'Una camisa azul.', translation: { en: 'A blue shirt.', no: 'En blå skjorte.' } }],
    relevance: { genderAffinity: 'male' }
  },
  {
    id: 'es-pantalones',
    term: 'pantalones',
    translation: { en: 'trousers', no: 'bukser' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['shopping', 'clothing'],
    examples: [{ text: 'Unos pantalones negros.', translation: { en: 'Black trousers.', no: 'Svarte bukser.' } }],
    relevance: { genderAffinity: 'male' }
  },
  {
    id: 'es-falda',
    term: 'falda',
    translation: { en: 'skirt', no: 'skjørt' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'f',
    tags: ['shopping', 'clothing'],
    examples: [{ text: 'Una falda larga.', translation: { en: 'A long skirt.', no: 'Et langt skjørt.' } }],
    relevance: { genderAffinity: 'female' }
  },
  {
    id: 'es-vestido',
    term: 'vestido',
    translation: { en: 'dress', no: 'kjole' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['shopping', 'clothing'],
    examples: [{ text: 'Un vestido rojo.', translation: { en: 'A red dress.', no: 'En rød kjole.' } }],
    relevance: { genderAffinity: 'female' }
  },
  {
    id: 'es-maquillaje',
    term: 'maquillaje',
    translation: { en: 'makeup', no: 'sminke' },
    difficulty: 'A2',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['shopping'],
    examples: [{ text: 'Compro maquillaje.', translation: { en: 'I buy makeup.', no: 'Jeg kjøper sminke.' } }],
    relevance: { genderAffinity: 'female' }
  },

  // ---- Travel / directions ----
  {
    id: 'es-hotel',
    term: 'hotel',
    translation: { en: 'hotel', no: 'hotell' },
    difficulty: 'A1',
    pos: 'noun',
    grammaticalGender: 'm',
    tags: ['hotel', 'travel', 'directions'],
    examples: [{ text: '¿Dónde está el hotel?', translation: { en: 'Where is the hotel?', no: 'Hvor er hotellet?' } }],
    relevance: { travelGoals: ['business', 'sightseeing'] }
  },
  {
    id: 'es-estacion',
    term: 'estación',
    translation: { en: 'station', no: 'stasjon' },
    difficulty: 'A2',
    pos: 'noun',
    grammaticalGender: 'f',
    tags: ['directions', 'travel'],
    examples: [{ text: 'La estación de tren.', translation: { en: 'The train station.', no: 'Togstasjonen.' } }],
    relevance: { travelGoals: ['backpacking', 'sightseeing'] }
  }
];
