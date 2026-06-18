import type { SeedCategory } from '../types';
import { civics } from './civics';
import { politics } from './politics';

export const society: SeedCategory = {
  slug: 'society',
  name: { en: 'Society', no: 'Samfunn' },
  icon: '🏙️',
  subcategories: [civics, politics]
};
