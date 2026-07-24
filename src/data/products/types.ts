import type { HomeFurnitureSubCategory } from './home-furniture/subcategories';

export type { HomeFurnitureSubCategory };

export type Category =
  | 'Home Furniture'
  | 'Outdoor Furniture'
  | 'Office Furniture'
  | 'Electronics'
  | 'Wines'
  | 'Kitchen Wares'
  | 'Traveling Bags';

export interface Product {
  id: string;
  name: string;
  category: Category;
  subCategory?: HomeFurnitureSubCategory;
  description: string;
  price: string;
  priceNum: number;
  image: string;
  objectPos?: string;
  imageVariant?: 'landscape' | 'portrait';
  featured?: boolean;
  gallery?: string[];
  specs?: string[];
}
