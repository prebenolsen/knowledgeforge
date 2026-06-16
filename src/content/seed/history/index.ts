import type { SeedCategory } from '../types';
import { ancientRome } from './ancient-rome';

export const history: SeedCategory = {
  slug: 'history',
  name: { en: 'History', no: 'Historie' },
  icon: '🏛️',
  subcategories: [ancientRome]
};
