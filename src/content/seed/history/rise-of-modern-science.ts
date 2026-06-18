import type { SeedSubcategory } from '../types';

export const riseOfModernScience: SeedSubcategory = {
  slug: 'rise-of-modern-science',
  name: { en: 'Rise of modern science', no: 'Den moderne vitenskapens fremvekst' },
  modules: [
    {
      slug: 'scientific-revolution',
      name: { en: 'Scientific Revolution', no: 'Den vitenskapelige revolusjonen' },
      questions: []
    },
    {
      slug: 'isaac-newton',
      name: { en: 'Isaac Newton', no: 'Isaac Newton' },
      questions: []
    },
    {
      slug: 'evolution',
      name: { en: 'Evolution', no: 'Evolusjon' },
      questions: []
    },
    {
      slug: 'science-and-society',
      name: { en: 'Science and society', no: 'Vitenskap og samfunn' },
      questions: []
    }
  ]
};