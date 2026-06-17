import type { SeedSubcategory } from '../types';

export const theRomanEmpire: SeedSubcategory = {
  slug: 'the-roman-empire',
  name: { en: 'The Roman Empire', no: 'The Roman Empire' },
  modules: [
    {
      slug: 'rise-of-the-roman-empire',
      name: { en: 'Rise of the Roman Empire', no: 'Rise of the Roman Empire' },
      questions: []
    },
    {
      slug: 'fall-of-the-roman-empire',
      name: { en: 'Fall of the Roman Empire', no: 'Fall of the Roman Empire' },
      questions: []
    },
    {
      slug: 'roman-contributions',
      name: { en: 'Roman contributions', no: 'Roman contributions' },
      questions: []
    },
    {
      slug: 'legacy-of-rome',
      name: { en: 'Legacy of Rome', no: 'Legacy of Rome' },
      questions: []
    }
  ]
};