import type { SeedSubcategory } from '../types';

export const theEuropeanUnion: SeedSubcategory = {
  slug: 'the-european-union',
  name: { en: 'The European Union', no: 'Den europeiske union' },
  modules: [
    {
      slug: 'european-integration',
      name: { en: 'European integration', no: 'Europeisk integrasjon' },
      questions: []
    },
    {
      slug: 'economic-cooperation',
      name: { en: 'Economic cooperation', no: 'Økonomisk samarbeid' },
      questions: []
    },
    {
      slug: 'political-cooperation',
      name: { en: 'Political cooperation', no: 'Politisk samarbeid' },
      questions: []
    }
  ]
};