export const HOME_FURNITURE_SUBCATEGORIES = [
  'Sofas',
  'Beds',
  'Dining',
  'Tables',
  'TV Consoles',
  'Mattresses',
  'Armchairs',
  'Living Room Sets',
] as const;

export type HomeFurnitureSubCategory = typeof HOME_FURNITURE_SUBCATEGORIES[number];
