import type { SeedSubcategory } from '../types';

export const civilRightsMovement: SeedSubcategory = {
  slug: 'civil-rights-movement',
  name: { en: 'Civil Rights Movement', no: 'Civil Rights Movement' },
  modules: [
    {
      slug: 'segregation',
      name: { en: 'Segregation', no: 'Segregation' },
      questions: []
    },
    {
      slug: 'equal-rights-movement',
      name: { en: 'Equal rights movement', no: 'Equal rights movement' },
      questions: []
    },
    {
      slug: 'key-figures',
      name: { en: 'Key figures', no: 'Key figures' },
      questions: []
    },
    {
      slug: 'modern-impact',
      name: { en: 'Modern impact', no: 'Modern impact' },
      questions: []
    }
  ]
};