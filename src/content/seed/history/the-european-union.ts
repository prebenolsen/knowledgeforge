import type { SeedSubcategory } from '../types';

export const theEuropeanUnion: SeedSubcategory = {
  slug: 'the-european-union',
  name: { en: 'The European Union', no: 'The European Union' },
  modules: [
    {
      slug: 'european-integration',
      name: { en: 'European integration', no: 'European integration' },
      questions: []
    },
    {
      slug: 'economic-cooperation',
      name: { en: 'Economic cooperation', no: 'Economic cooperation' },
      questions: []
    },
    {
      slug: 'political-cooperation',
      name: { en: 'Political cooperation', no: 'Political cooperation' },
      questions: []
    }
  ]
};