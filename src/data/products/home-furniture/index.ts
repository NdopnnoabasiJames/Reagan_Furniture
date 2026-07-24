export { HOME_FURNITURE_SUBCATEGORIES } from './subcategories';
export type { HomeFurnitureSubCategory } from './subcategories';

import { sofasProducts }        from './sofas';
import { bedsProducts }         from './beds';
import { diningProducts }       from './dining';
import { coffeeTablesProducts } from './coffee-tables';
import { sideTablesProducts }   from './side-tables';
import { tvConsolesProducts }   from './tv-consoles';
import { armchairsProducts }    from './armchairs';
import { mattressesProducts }   from './mattresses';
import { livingRoomSetsProducts } from './living-room-sets';

export const homeFurnitureProducts = [
  ...armchairsProducts,
  ...bedsProducts,
  ...sofasProducts,
  ...diningProducts,
  ...coffeeTablesProducts,
  ...sideTablesProducts,
  ...tvConsolesProducts,
  ...mattressesProducts,
  ...livingRoomSetsProducts,
];
