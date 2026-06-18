import type { SeedSubcategory } from '../types';

export const worldWarI: SeedSubcategory = {
  slug: 'world-war-i',
  name: { en: 'World War I', no: 'Første verdenskrig' },
  modules: [
    {
      slug: 'causes-of-wwi',
      name: { en: 'Causes of WWI', no: 'Årsaker til første verdenskrig' },
      questions: []
    },
    {
      slug: 'the-great-war',
      name: { en: 'The Great War', no: 'Den store krigen' },
      questions: []
    },
    {
      slug: 'fall-of-empires',
      name: { en: 'Fall of empires', no: 'Imperienes fall' },
      questions: []
    },
    {
      slug: 'legacy',
      name: { en: 'Legacy', no: 'Ettervirkninger' },
      questions: []
    }
  ]
};