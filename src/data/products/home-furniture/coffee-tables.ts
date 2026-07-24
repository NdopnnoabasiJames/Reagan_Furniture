import type { Product } from '../types';

import liftTop      from '../../../assets/products/home-furniture/coffee-tables/designer-lift-top-coffee-table.jpeg';
import marblePed    from '../../../assets/products/home-furniture/coffee-tables/marble-pedestal-coffee-table.jpeg';
import goldSphere   from '../../../assets/products/home-furniture/coffee-tables/gold-sphere-marble-table-set.jpeg';
import swivelTop1   from '../../../assets/products/home-furniture/coffee-tables/swivel-storage-coffee-table-1.jpeg';
import swivelTop2   from '../../../assets/products/home-furniture/coffee-tables/swivel-storage-coffee-table-2.jpeg';

export const coffeeTablesProducts: Product[] = [
  {
    id: 'designer-lift-top-coffee-table',
    name: 'Designer Lift-Top Coffee Table',
    category: 'Home Furniture',
    subCategory: 'Coffee Tables',
    description: 'A sculptural designer coffee table with a pivoting white marble-effect glass top and a taupe lacquered body in an organic curved form. The lift mechanism rotates the top to reveal concealed storage — a statement centrepiece for contemporary and luxury living rooms.',
    price: '₦750,000',
    priceNum: 750000,
    imageVariant: 'portrait',
    image: liftTop,
    objectPos: 'center',
    gallery: [liftTop],
    specs: ['Lift-and-swivel marble-effect glass top', 'Taupe lacquered curved body', 'Dark wood platform base', 'Concealed storage compartment'],
  },
  {
    id: 'marble-pedestal-coffee-table',
    name: 'Marble Top Pedestal Coffee Table',
    category: 'Home Furniture',
    subCategory: 'Coffee Tables',
    description: 'A refined round coffee table with a genuine veined marble top on a sculptural ribbed grey concrete-look pedestal base. Equally at home in minimalist and luxury interiors — a sophisticated centrepiece for any living room.',
    price: '₦380,000',
    priceNum: 380000,
    image: marblePed,
    objectPos: 'center',
    gallery: [marblePed],
    specs: ['Round design', 'Genuine veined marble top', 'Ribbed concrete-effect pedestal', 'Diameter: 80cm'],
  },
  {
    id: 'gold-sphere-marble-table-set',
    name: 'Gold Sphere Marble Coffee & Side Table Set',
    category: 'Home Furniture',
    subCategory: 'Coffee Tables',
    description: 'A striking 3-piece living room table set with white veined marble tops balanced on sculptural gold sphere bases. The varying heights add visual dynamism — use the larger piece as a coffee table and the smaller ones as side tables.',
    price: '₦480,000',
    priceNum: 480000,
    image: goldSphere,
    objectPos: 'center',
    gallery: [goldSphere],
    specs: ['3-piece set (1 coffee + 2 side tables)', 'White veined marble tops', 'Gold sphere sculptural bases', 'Multiple height configuration'],
  },
  {
    id: 'swivel-storage-coffee-table',
    name: 'Swivel-Top Storage Coffee Table',
    category: 'Home Furniture',
    subCategory: 'Coffee Tables',
    description: 'A clever and contemporary coffee table with a rotating lift top that reveals a spacious hidden storage compartment. The dark walnut finish and clean geometric silhouette make it a functional yet refined centrepiece for modern living rooms.',
    price: '₦320,000',
    priceNum: 320000,
    image: swivelTop1,
    objectPos: 'center',
    gallery: [swivelTop1, swivelTop2],
    specs: ['Lift & swivel top mechanism', 'Concealed storage compartment', 'Dark walnut finish', 'Extendable side surface'],
  },
];
