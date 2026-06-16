import type { SeedCategory } from '../types';
import { arithmetic } from './arithmetic';

export const mathematics: SeedCategory = {
  slug: 'mathematics',
  name: { en: 'Mathematics', no: 'Matematikk' },
  icon: '➗',
  subcategories: [arithmetic]
};
