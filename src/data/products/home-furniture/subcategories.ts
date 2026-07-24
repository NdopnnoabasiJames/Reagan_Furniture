export const HOME_FURNITURE_SUBCATEGORIES = [
  'Sofas',
  'Beds',
  'Dining',
  'Coffee Tables',
  'TV Consoles',
  'Side Tables',
  'Mattresses',
  'Armchairs',
  'Living Room Sets',
] as const;

export type HomeFurnitureSubCategory = typeof HOME_FURNITURE_SUBCATEGORIES[number];
