import type { SeedSubcategory } from '../types';

export const theAmericanRevolution: SeedSubcategory = {
  slug: 'the-american-revolution',
  name: { en: 'The American Revolution', no: 'Den amerikanske revolusjonen' },
  modules: [
    {
      slug: 'independence-from-britain',
      name: { en: 'Independence from Britain', no: 'Uavhengighet fra Storbritannia' },
      questions: []
    },
    {
      slug: 'ideas-of-liberty',
      name: { en: 'Ideas of liberty', no: 'Ideer om frihet' },
      questions: []
    },
    {
      slug: 'contradictions-of-freedom',
      name: { en: 'Contradictions of freedom', no: 'Frihetens motsetninger' },
      questions: []
    }
  ]
};