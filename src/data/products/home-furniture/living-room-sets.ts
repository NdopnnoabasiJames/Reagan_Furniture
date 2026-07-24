import type { Product } from '../types';

import consoleSideboard from '../../../assets/products/home-furniture/living-room-sets/white-gold-console-sideboard-mirror.jpeg';

export const livingRoomSetsProducts: Product[] = [
  {
    id: 'white-gold-console-sideboard',
    name: 'White & Gold Console Sideboard with Mirror',
    category: 'Home Furniture',
    subCategory: 'Living Room Sets',
    description: 'An elegant white gloss console sideboard with brushed gold handles, finished with a large leaning mirror panel. The combination makes a versatile statement piece for hallways, living rooms and bedroom walls — adding light, space and glamour in equal measure.',
    price: '₦720,000',
    priceNum: 720000,
    image: consoleSideboard,
    objectPos: 'center',
    gallery: [consoleSideboard],
    specs: ['4-door console sideboard', 'White gloss finish with gold handles', 'Large leaning mirror included', 'Dimensions approx: W150 × D40 × H85cm'],
  },
];
