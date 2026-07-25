export const HOME_FURNITURE_SUBCATEGORIES = [
  'Sofas',
  'Beds',
  'Dining',
  'Tables',
  'TV Consoles',
] as const;

export type HomeFurnitureSubCategory = typeof HOME_FURNITURE_SUBCATEGORIES[number];
