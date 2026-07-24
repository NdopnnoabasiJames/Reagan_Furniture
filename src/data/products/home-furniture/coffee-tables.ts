import type { Product } from '../types';

import liftTop          from '../../../assets/products/home-furniture/coffee-tables/designer-lift-top-coffee-table.jpeg';
import marblePed        from '../../../assets/products/home-furniture/coffee-tables/marble-pedestal-coffee-table.jpeg';
import goldSphere       from '../../../assets/products/home-furniture/coffee-tables/gold-sphere-marble-table-set.jpeg';
import swivelTop1       from '../../../assets/products/home-furniture/coffee-tables/swivel-storage-coffee-table-1.jpeg';
import swivelTop2       from '../../../assets/products/home-furniture/coffee-tables/swivel-storage-coffee-table-2.jpeg';
import roundBlack1      from '../../../assets/products/home-furniture/coffee-tables/round-black-storage-coffee-table-1.jpeg';
import roundBlack2      from '../../../assets/products/home-furniture/coffee-tables/round-black-storage-coffee-table-2.jpeg';
import walnutParquet1   from '../../../assets/products/home-furniture/coffee-tables/walnut-parquet-nesting-tables-1.jpeg';
import walnutParquet2   from '../../../assets/products/home-furniture/coffee-tables/walnut-parquet-nesting-tables-2.jpeg';
import walnutRound      from '../../../assets/products/home-furniture/coffee-tables/walnut-round-coffee-table-set.jpeg';
import arcTaupe         from '../../../assets/products/home-furniture/coffee-tables/sculptural-arc-coffee-table-taupe.jpeg';
import arcGrey          from '../../../assets/products/home-furniture/coffee-tables/sculptural-arc-coffee-table-grey.jpeg';

export const coffeeTablesProducts: Product[] = [
  {
    id: 'designer-lift-top-coffee-table',
    name: 'Designer Lift-Top Coffee Table',
    category: 'Home Furniture',
    subCategory: 'Tables',
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
    subCategory: 'Tables',
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
    subCategory: 'Tables',
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
    subCategory: 'Tables',
    description: 'A clever and contemporary coffee table with a rotating lift top that reveals a spacious hidden storage compartment. The dark walnut finish and clean geometric silhouette make it a functional yet refined centrepiece for modern living rooms.',
    price: '₦320,000',
    priceNum: 320000,
    image: swivelTop1,
    objectPos: 'center',
    gallery: [swivelTop1, swivelTop2],
    specs: ['Lift & swivel top mechanism', 'Concealed storage compartment', 'Dark walnut finish', 'Extendable side surface'],
  },
  {
    id: 'round-black-storage-coffee-table',
    name: 'Round Black Storage Coffee Table',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A bold round coffee table with a black tempered glass top on a two-tone leatherette and lacquered body with a pull-out drawer for concealed storage. A sophisticated centrepiece for dark, contemporary and masculine interiors.',
    price: '₦480,000',
    priceNum: 480000,
    image: roundBlack1,
    objectPos: 'center',
    gallery: [roundBlack1, roundBlack2],
    specs: ['Round glass top', 'Pull-out storage drawer', 'Two-tone leatherette & lacquer body', 'Suits 65"+ TV consoles'],
  },
  {
    id: 'walnut-parquet-nesting-coffee-tables',
    name: 'Walnut Parquet Nesting Coffee Tables',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A set of two square nesting coffee tables with a distinctive starburst walnut parquet inlay top and a cream/ivory curved edge. Stack or stagger them for a dynamic yet warm centrepiece suited to contemporary, Japandi and transitional living rooms.',
    price: '₦550,000',
    priceNum: 550000,
    image: walnutParquet1,
    objectPos: 'center',
    gallery: [walnutParquet1, walnutParquet2],
    specs: ['Set of 2 nesting tables', 'Walnut starburst parquet inlay top', 'Cream/ivory curved edge', 'Square form — stackable design'],
  },
  {
    id: 'walnut-round-coffee-table-set',
    name: 'Walnut & Cream Round Coffee Table Set',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A coordinated set of two round coffee tables with warm walnut veneer tops and a wide cream/ivory rimmed edge on chunky solid drum bases. The organic, low-profile silhouette works beautifully alongside curved sofas and organic-form furniture.',
    price: '₦420,000',
    priceNum: 420000,
    image: walnutRound,
    objectPos: 'center',
    gallery: [walnutRound],
    specs: ['Set of 2 round tables (large + small)', 'Walnut veneer top with cream rim', 'Solid wood drum base', 'Low-profile organic silhouette'],
  },
  {
    id: 'sculptural-arc-coffee-table',
    name: 'Sculptural Arc Coffee Table',
    category: 'Home Furniture',
    subCategory: 'Tables',
    description: 'A sculptural accent coffee table with a smooth round top and a tapered drum base with elegant arch cut-outs. Available in warm taupe and cool slate grey — a versatile statement piece for contemporary, minimalist and Japandi living rooms.',
    price: '₦280,000',
    priceNum: 280000,
    image: arcTaupe,
    objectPos: 'center',
    gallery: [arcTaupe, arcGrey],
    specs: ['Round top', 'Arched cut-out drum base', 'Available in taupe & slate grey', 'Matte lacquer finish'],
  },
];
