import type { Product } from '../types';

import walnutGold from '../../../assets/products/home-furniture/side-tables/walnut-gold-pedestal-side-tables.jpeg';

export const sideTablesProducts: Product[] = [
  {
    id: 'walnut-gold-pedestal-side-tables',
    name: 'Walnut & Gold Pedestal Side Tables',
    category: 'Home Furniture',
    subCategory: 'Side Tables',
    description: 'A pair of elegant nesting side tables with rich walnut-effect tops and slim brushed gold pedestal bases. Nest together when not in use — a versatile and stylish addition to any living room, bedroom or study.',
    price: '₦260,000',
    priceNum: 260000,
    image: walnutGold,
    objectPos: 'center',
    gallery: [walnutGold],
    specs: ['Set of 2 nesting tables', 'Walnut-effect top', 'Brushed gold pedestal base', 'Compact & stackable design'],
  },
];
