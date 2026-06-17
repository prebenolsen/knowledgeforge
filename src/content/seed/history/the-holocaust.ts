import type { SeedSubcategory } from '../types';

export const theHolocaust: SeedSubcategory = {
  slug: 'the-holocaust',
  name: { en: 'The Holocaust', no: 'The Holocaust' },
  modules: [
    {
      slug: 'nazi-persecution',
      name: { en: 'Nazi persecution', no: 'Nazi persecution' },
      questions: []
    },
    {
      slug: 'propaganda-and-authoritarianism',
      name: { en: 'Propaganda and authoritarianism', no: 'Propaganda and authoritarianism' },
      questions: []
    },
    {
      slug: 'human-rights',
      name: { en: 'Human rights', no: 'Human rights' },
      questions: []
    }
  ]
};