export type { Category, Product } from './types';

import { homeFurnitureProducts }    from './homeFurniture';
import { outdoorFurnitureProducts } from './outdoorFurniture';
import { officeFurnitureProducts }  from './officeFurniture';
import { electronicsProducts }      from './electronics';
import { winesProducts }            from './wines';
import { kitchenWaresProducts }     from './kitchenWares';
import { travelingBagsProducts }    from './travelingBags';
import type { Category }            from './types';

export const CATEGORIES: Category[] = [
  'Home Furniture',
  'Outdoor Furniture',
  'Office Furniture',
  'Electronics',
  'Wines',
  'Kitchen Wares',
  'Traveling Bags',
];

export const PRODUCTS = [
  ...homeFurnitureProducts,
  ...outdoorFurnitureProducts,
  ...officeFurnitureProducts,
  ...electronicsProducts,
  ...winesProducts,
  ...kitchenWaresProducts,
  ...travelingBagsProducts,
];

export const FEATURED = PRODUCTS.filter(p => p.featured);

export const getProduct = (id: string) => PRODUCTS.find(p => p.id === id);
