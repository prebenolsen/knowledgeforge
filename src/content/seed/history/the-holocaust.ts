import type { SeedSubcategory } from '../types';

export const theHolocaust: SeedSubcategory = {
  slug: 'the-holocaust',
  name: { en: 'The Holocaust', no: 'Holocaust' },
  modules: [
    {
      slug: 'nazi-persecution',
      name: { en: 'Nazi persecution', no: 'Nazistisk forfølgelse' },
      questions: []
    },
    {
      slug: 'propaganda-and-authoritarianism',
      name: { en: 'Propaganda and authoritarianism', no: 'Propaganda og autoritær styring' },
      questions: []
    },
    {
      slug: 'human-rights',
      name: { en: 'Human rights', no: 'Menneskerettigheter' },
      questions: []
    }
  ]
};