import type { SeedSubcategory } from '../types';

export const theFrenchRevolution: SeedSubcategory = {
  slug: 'the-french-revolution',
  name: { en: 'The French Revolution', no: 'Den franske revolusjonen' },
  modules: [
    {
      slug: 'collapse-of-monarchy',
      name: { en: 'Collapse of monarchy', no: 'Monarkiets fall' },
      questions: []
    },
    {
      slug: 'ideas-of-equality',
      name: { en: 'Ideas of equality', no: 'Ideer om likhet' },
      questions: []
    },
    {
      slug: 'modern-politics',
      name: { en: 'Modern politics', no: 'Moderne politikk' },
      questions: []
    }
  ]
};