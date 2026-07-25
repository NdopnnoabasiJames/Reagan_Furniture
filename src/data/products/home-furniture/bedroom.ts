import type { Product } from '../types';

import hf87 from '../../../assets/products/home-furniture/bedroom/hf-87.jpeg';

export const bedroomProducts: Product[] = [
  {
    id: 'white-gold-vanity-console-mirror',
    name: 'White & Gold Vanity Console with Round Mirror',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A statement white and gold vanity console table with a large round mirror framed in a mosaic of gold tiles and flanked by open side shelving units. The combination of gold detail and clean white lacquer suits luxury bedroom suites, dressing rooms and boutique hotel rooms.',
    price: '₦780,000',
    priceNum: 780000,
    image: hf87,
    objectPos: 'center',
    gallery: [hf87],
    specs: ['Console + large round mosaic-gold mirror', 'White lacquer console body', 'Open side shelving units included', 'Gold mosaic-tile mirror frame'],
  },
];
