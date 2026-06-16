import type { SeedCategory } from '../types';
import { stocksAndMarkets } from './stocks-and-markets';

export const economics: SeedCategory = {
  slug: 'economics',
  name: { en: 'Economics', no: 'Økonomi' },
  icon: '📈',
  subcategories: [stocksAndMarkets]
};
