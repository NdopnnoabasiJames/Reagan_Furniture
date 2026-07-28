import type { Product } from '../types';

import consoleSideboard  from '../../../assets/products/home-furniture/living-room-sets/white-gold-console-sideboard-mirror.jpeg';
import baroqueSideboard  from '../../../assets/products/home-furniture/living-room-sets/cream-baroque-sideboard-mirror-set.jpeg';

export const livingRoomSetsProducts: Product[] = [
  {
    id: 'white-gold-console-sideboard',
    name: 'White & Gold Console Sideboard with Mirror',
    category: 'Home Furniture',
    description: 'An elegant white gloss console sideboard with brushed gold handles, finished with a large leaning mirror panel. The combination makes a versatile statement piece for hallways, living rooms and bedroom walls — adding light, space and glamour in equal measure.',
    price: '₦720,000',
    priceNum: 720000,
    image: consoleSideboard,
    objectPos: 'center',
    gallery: [consoleSideboard],
    specs: ['4-door console sideboard', 'White gloss finish with gold handles', 'Large leaning mirror included', 'Dimensions approx: W150 × D40 × H85cm'],
  },
  {
    id: 'cream-baroque-sideboard-mirror-set',
    name: 'Cream Baroque Sideboard & Mirror Set',
    category: 'Home Furniture',
    description: 'A grand baroque-inspired sideboard suite in cream lacquer with black inset panel accents and antique brass ring-pull handles. The wide 4-door body sits on slim turned black legs with a marble-effect top, and comes with two oval mirrors in matching cream frames plus a rectangular companion piece — a complete statement ensemble for hallways, formal living rooms and entrance lobbies.',
    price: '₦1,650,000',
    priceNum: 1650000,
    image: baroqueSideboard,
    objectPos: 'center',
    gallery: [baroqueSideboard],
    specs: ['4-door sideboard with marble-effect top', 'Cream lacquer with black inset panel accents', 'Antique brass ring-pull handles', 'Includes 2 oval mirrors + rectangular companion mirror'],
  },
];
