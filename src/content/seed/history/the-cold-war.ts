import type { SeedSubcategory } from '../types';

export const theColdWar: SeedSubcategory = {
  slug: 'the-cold-war',
  name: { en: 'The Cold War', no: 'Den kalde krigen' },
  modules: [
    {
      slug: 'us-vs-soviet-union',
      name: { en: 'US vs Soviet Union', no: 'USA mot Sovjetunionen' },
      questions: []
    },
    {
      slug: 'capitalism-vs-communism',
      name: { en: 'Capitalism vs communism', no: 'Kapitalisme mot kommunisme' },
      questions: []
    },
    {
      slug: 'nuclear-weapons',
      name: { en: 'Nuclear weapons', no: 'Atomvåpen' },
      questions: []
    },
    {
      slug: 'proxy-wars',
      name: { en: 'Proxy wars', no: 'Stedfortrederkriger' },
      questions: []
    },
    {
      slug: 'space-race',
      name: { en: 'Space race', no: 'Romkappløpet' },
      questions: []
    }
  ]
};