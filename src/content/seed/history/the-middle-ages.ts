import type { SeedSubcategory } from '../types';

export const theMiddleAges: SeedSubcategory = {
  slug: 'the-middle-ages',
  name: { en: 'The Middle Ages', no: 'Middelalderen' },
  modules: [
    {
      slug: 'feudalism',
      name: { en: 'Feudalism', no: 'Føydalisme' },
      questions: []
    },
    {
      slug: 'medieval-society',
      name: { en: 'Medieval society', no: 'Middelaldersamfunnet' },
      questions: []
    },
    {
      slug: 'role-of-religion',
      name: { en: 'Role of religion', no: 'Religionens rolle' },
      questions: []
    },
    {
      slug: 'the-black-death',
      name: { en: 'The Black Death', no: 'Svartedauden' },
      questions: []
    }
  ]
};