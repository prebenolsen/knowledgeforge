import type { SeedSubcategory } from '../types';

export const theRiseOfHumanCivilization: SeedSubcategory = {
  slug: 'the-rise-of-human-civilization',
  name: { en: 'The rise of human civilization', no: 'Den menneskelige sivilisasjonens fremvekst' },
  modules: [
    {
      slug: 'the-agricultural-revolution',
      name: { en: 'The Agricultural Revolution', no: 'Jordbruksrevolusjonen' },
      questions: []
    },
    {
      slug: 'hunter-gatherers-to-farming-societies',
      name: {
        en: 'Hunter-gatherers to farming societies',
        no: 'Hunter-gatherers to farming societies'
      },
      questions: []
    },
    {
      slug: 'impact-of-farming',
      name: { en: 'Impact of farming', no: 'Jordbrukets påvirkning' },
      questions: []
    }
  ]
};