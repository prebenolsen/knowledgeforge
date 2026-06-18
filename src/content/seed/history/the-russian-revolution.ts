import type { SeedSubcategory } from '../types';

export const theRussianRevolution: SeedSubcategory = {
  slug: 'the-russian-revolution',
  name: { en: 'The Russian Revolution', no: 'Den russiske revolusjonen' },
  modules: [
    {
      slug: 'fall-of-the-tsar',
      name: { en: 'Fall of the Tsar', no: 'Tsarens fall' },
      questions: []
    },
    {
      slug: 'rise-of-communism',
      name: { en: 'Rise of communism', no: 'Kommunismens fremvekst' },
      questions: []
    },
    {
      slug: 'creation-of-the-soviet-union',
      name: { en: 'Creation of the Soviet Union', no: 'Opprettelsen av Sovjetunionen' },
      questions: []
    }
  ]
};