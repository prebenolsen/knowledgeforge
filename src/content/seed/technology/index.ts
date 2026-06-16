import type { SeedCategory } from '../types';
import { computing } from './computing';

export const technology: SeedCategory = {
  slug: 'technology',
  name: { en: 'Technology', no: 'Teknologi' },
  icon: '💻',
  subcategories: [computing]
};
