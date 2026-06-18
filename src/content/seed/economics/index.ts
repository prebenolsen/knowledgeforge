import type { SeedCategory } from '../types';
import { stocksAndMarkets } from './stocks-and-markets';
import { financialEconomics } from './financial-economics';

export const economics: SeedCategory = {
  slug: 'economics',
  name: { en: 'Economics', no: 'Økonomi' },
  icon: '📈',
  subcategories: [stocksAndMarkets, financialEconomics]
};
