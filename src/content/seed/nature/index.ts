import type { SeedCategory } from '../types';
import { biology } from './biology';

export const nature: SeedCategory = {
  slug: 'nature',
  name: { en: 'Nature', no: 'Natur' },
  icon: '🌿',
  subcategories: [biology]
};
