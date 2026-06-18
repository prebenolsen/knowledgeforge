import type { SeedSubcategory } from '../types';

export const theRomanEmpire: SeedSubcategory = {
  slug: 'the-roman-empire',
  name: { en: 'The Roman Empire', no: 'Romerriket' },
  modules: [
    {
      slug: 'rise-of-the-roman-empire',
      name: { en: 'Rise of the Roman Empire', no: 'Romerrikets fremvekst' },
      questions: []
    },
    {
      slug: 'fall-of-the-roman-empire',
      name: { en: 'Fall of the Roman Empire', no: 'Romerrikets fall' },
      questions: []
    },
    {
      slug: 'roman-contributions',
      name: { en: 'Roman contributions', no: 'Romerske bidrag' },
      questions: []
    },
    {
      slug: 'legacy-of-rome',
      name: { en: 'Legacy of Rome', no: 'Romas arv' },
      questions: []
    }
  ]
};