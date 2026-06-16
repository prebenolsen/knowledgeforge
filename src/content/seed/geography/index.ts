import type { SeedCategory } from '../types';
import { worldCapitals } from './world-capitals';

export const geography: SeedCategory = {
  slug: 'geography',
  name: { en: 'Geography', no: 'Geografi' },
  icon: '🗺️',
  subcategories: [worldCapitals]
};
