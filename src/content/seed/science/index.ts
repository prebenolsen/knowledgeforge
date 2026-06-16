import type { SeedCategory } from '../types';
import { physics } from './physics';

export const science: SeedCategory = {
  slug: 'science',
  name: { en: 'Science', no: 'Vitenskap' },
  icon: '🔬',
  subcategories: [physics]
};
