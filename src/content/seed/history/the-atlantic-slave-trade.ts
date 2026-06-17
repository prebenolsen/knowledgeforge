import type { SeedSubcategory } from '../types';

export const theAtlanticSlaveTrade: SeedSubcategory = {
  slug: 'the-atlantic-slave-trade',
  name: { en: 'The Atlantic slave trade', no: 'The Atlantic slave trade' },
  modules: [
    {
      slug: 'transatlantic-slave-trade',
      name: { en: 'Transatlantic slave trade', no: 'Transatlantic slave trade' },
      questions: []
    },
    {
      slug: 'slavery-in-the-americas',
      name: { en: 'Slavery in the Americas', no: 'Slavery in the Americas' },
      questions: []
    },
    {
      slug: 'lives-of-enslaved-people',
      name: { en: 'Lives of enslaved people', no: 'Lives of enslaved people' },
      questions: []
    },
    {
      slug: 'abolition-movements',
      name: { en: 'Abolition movements', no: 'Abolition movements' },
      questions: []
    },
    {
      slug: 'long-term-effects',
      name: { en: 'Long-term effects', no: 'Long-term effects' },
      questions: []
    }
  ]
};