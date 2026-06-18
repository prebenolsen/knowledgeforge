import type { SeedSubcategory } from '../types';

export const theRenaissance: SeedSubcategory = {
  slug: 'the-renaissance',
  name: { en: 'The Renaissance', no: 'Renessansen' },
  modules: [
    {
      slug: 'renaissance-ideas',
      name: { en: 'Renaissance ideas', no: 'Renessansens idéer' },
      questions: []
    },
    {
      slug: 'renaissance-artists',
      name: { en: 'Renaissance artists', no: 'Renessansens kunstnere' },
      questions: []
    },
    {
      slug: 'beginning-of-modern-thinking',
      name: { en: 'Beginning of modern thinking', no: 'Begynnelsen på moderne tenkning' },
      questions: []
    }
  ]
};