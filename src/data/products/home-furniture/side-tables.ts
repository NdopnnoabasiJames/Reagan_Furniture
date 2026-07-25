import type { Product } from '../types';

import walnutGold   from '../../../assets/products/home-furniture/side-tables/walnut-gold-pedestal-side-tables.jpeg';
import marbleArcTab from '../../../assets/products/home-furniture/side-tables/round-marble-chrome-arc-side-table.jpeg';

import hf95  from '../../../assets/products/home-furniture/side-tables/hf-95.jpeg';
import hf105 from '../../../assets/products/home-furniture/side-tables/hf-105.jpeg';
import hf106 from '../../../assets/products/home-furniture/side-tables/hf-106.jpeg';

export const sideTablesProducts: Product[] = [
  {
    id: 'walnut-gold-pedestal-side-tables',
    name: 'Walnut & Gold Pedestal Side Tables',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A pair of elegant nesting side tables with rich walnut-effect tops and slim brushed gold pedestal bases. Nest together when not in use — a versatile and stylish addition to any living room, bedroom or study.',
    price: '₦260,000',
    priceNum: 260000,
    image: walnutGold,
    objectPos: 'center',
    gallery: [walnutGold],
    specs: ['Set of 2 nesting tables', 'Walnut-effect top', 'Brushed gold pedestal base', 'Compact & stackable design'],
  },
  {
    id: 'round-marble-chrome-arc-side-table',
    name: 'Round Marble Chrome Arc Side Table',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A refined round side table with a white veined marble top on a polished chrome C-shaped arc base with vertical bar supports. The clean architectural silhouette makes it a versatile accent piece — perfect beside a sofa, bed or armchair.',
    price: '₦180,000',
    priceNum: 180000,
    imageVariant: 'portrait',
    image: marbleArcTab,
    objectPos: 'center',
    gallery: [marbleArcTab, hf95],
    specs: ['Round marble top', 'Polished chrome C-arc base', 'Vertical bar support detail', 'Suitable as sofa or bedside table'],
  },
  {
    id: 'taupe-arch-cutout-accent-table',
    name: 'Taupe Arch-Cutout Accent Side Table',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A refined moulded round accent table with a smooth top on a drum pedestal featuring elegant arch cut-outs. Available in warm taupe and slate blue — a versatile statement piece for contemporary and minimalist living rooms, bedrooms and reading corners.',
    price: '₦195,000',
    priceNum: 195000,
    image: hf105,
    objectPos: 'center',
    gallery: [hf105, hf106],
    specs: ['Round top with arch-cutout pedestal', 'Available in taupe or slate blue', 'Moulded construction', 'Lightweight & easy to reposition'],
  },
];
