import type { SeedSubcategory } from '../types';

export const theRenaissance: SeedSubcategory = {
  slug: 'the-renaissance',
  name: { en: 'The Renaissance', no: 'The Renaissance' },
  modules: [
    {
      slug: 'renaissance-ideas',
      name: { en: 'Renaissance ideas', no: 'Renaissance ideas' },
      questions: []
    },
    {
      slug: 'renaissance-artists',
      name: { en: 'Renaissance artists', no: 'Renaissance artists' },
      questions: []
    },
    {
      slug: 'beginning-of-modern-thinking',
      name: { en: 'Beginning of modern thinking', no: 'Beginning of modern thinking' },
      questions: []
    }
  ]
};