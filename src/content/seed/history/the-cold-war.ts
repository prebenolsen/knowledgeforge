import type { SeedSubcategory } from '../types';

export const theColdWar: SeedSubcategory = {
  slug: 'the-cold-war',
  name: { en: 'The Cold War', no: 'The Cold War' },
  modules: [
    {
      slug: 'us-vs-soviet-union',
      name: { en: 'US vs Soviet Union', no: 'US vs Soviet Union' },
      questions: []
    },
    {
      slug: 'capitalism-vs-communism',
      name: { en: 'Capitalism vs communism', no: 'Capitalism vs communism' },
      questions: []
    },
    {
      slug: 'nuclear-weapons',
      name: { en: 'Nuclear weapons', no: 'Nuclear weapons' },
      questions: []
    },
    {
      slug: 'proxy-wars',
      name: { en: 'Proxy wars', no: 'Proxy wars' },
      questions: []
    },
    {
      slug: 'space-race',
      name: { en: 'Space race', no: 'Space race' },
      questions: []
    }
  ]
};