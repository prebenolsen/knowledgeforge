import type { SeedCategory } from '../types';
import { avengers } from './avengers';

export const marvelUniverse: SeedCategory = {
  slug: 'marvel-universe',
  name: { en: 'Marvel Universe', no: 'Marvel-universet' },
  icon: '🦸',
  subcategories: [avengers]
};
