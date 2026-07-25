import type { Product } from '../types';

import marbleConsole1 from '../../../assets/products/home-furniture/tv-consoles/marble-top-coffee-table-tv-console-1.jpeg';
import marbleConsole2 from '../../../assets/products/home-furniture/tv-consoles/marble-top-coffee-table-tv-console-2.jpeg';
import whiteGold      from '../../../assets/products/home-furniture/tv-consoles/white-gold-coffee-table-tv-stand.jpeg';
import whiteGold2     from '../../../assets/products/home-furniture/tv-consoles/white-gold-coffee-table-tv-stand-2.jpeg';
import whiteArc       from '../../../assets/products/home-furniture/tv-consoles/white-arc-coffee-table-tv-stand.jpeg';
import whiteSilver    from '../../../assets/products/home-furniture/tv-consoles/white-silver-coffee-table-tv-unit.jpeg';

import hf85 from '../../../assets/products/home-furniture/tv-consoles/hf-85.jpeg';
import hf86 from '../../../assets/products/home-furniture/tv-consoles/hf-86.jpeg';
import hf88 from '../../../assets/products/home-furniture/tv-consoles/hf-88.jpeg';
import hf89 from '../../../assets/products/home-furniture/tv-consoles/hf-89.jpeg';
import hf90 from '../../../assets/products/home-furniture/tv-consoles/hf-90.jpeg';

export const tvConsolesProducts: Product[] = [
  {
    id: 'marble-tv-console-set',
    name: 'Marble Top Coffee Table & TV Console Set',
    category: 'Home Furniture',
    subCategory: 'TV Consoles',
    description: 'A coordinated 2-piece living room set featuring a white marble-top coffee table and a matching TV console unit with open shelving and concealed storage. The warm white and walnut finish combination works beautifully in contemporary, Japandi and transitional interiors.',
    price: '₦850,000',
    priceNum: 850000,
    image: marbleConsole1,
    objectPos: 'center',
    gallery: [marbleConsole1, marbleConsole2],
    specs: ['2-piece set (coffee table + TV console)', 'White marble-effect top', 'Walnut veneer open shelving', 'TV console: fits up to 65" TV'],
  },
  {
    id: 'white-gold-living-set',
    name: 'White & Gold Coffee Table + TV Stand',
    category: 'Home Furniture',
    subCategory: 'TV Consoles',
    description: 'A matching white gloss and brushed gold 2-piece living room set — a tempered glass-top coffee table with gold frame and a coordinated TV unit with open display shelves and a lower storage cabinet. A glamorous yet practical combination for modern interiors.',
    price: '₦680,000',
    priceNum: 680000,
    image: whiteGold,
    objectPos: 'center',
    gallery: [whiteGold, whiteGold2],
    specs: ['2-piece set (coffee table + TV stand)', 'White gloss body with gold accents', 'Tempered glass coffee table top', 'TV unit fits up to 60" TV'],
  },
  {
    id: 'white-arc-living-set',
    name: 'White Arc-Pattern Coffee Table + TV Stand',
    category: 'Home Furniture',
    subCategory: 'TV Consoles',
    description: 'A 2-piece white living room set with a distinctive arc/scallop pattern inset on cabinet doors. Includes a coffee table and a matching TV stand with open shelving and a drawer — a clean, contemporary choice for modern and coastal interiors.',
    price: '₦620,000',
    priceNum: 620000,
    image: whiteArc,
    objectPos: 'center',
    gallery: [whiteArc, hf88],
    specs: ['2-piece set (coffee table + TV stand)', 'White gloss with arc-pattern doors', 'Open shelving + drawer storage', 'TV stand fits up to 60" TV'],
  },
  {
    id: 'white-silver-living-set',
    name: 'White & Silver Coffee Table + TV Unit',
    category: 'Home Furniture',
    subCategory: 'TV Consoles',
    description: 'A coordinated white and brushed silver 2-piece living room collection. The lift-top coffee table offers hidden storage, while the TV unit features glass-panelled doors and an open central shelf. A refined, functional pairing for contemporary interiors.',
    price: '₦590,000',
    priceNum: 590000,
    image: whiteSilver,
    objectPos: 'center',
    gallery: [whiteSilver],
    specs: ['2-piece set (lift-top coffee table + TV unit)', 'White gloss with silver handles', 'Lift-top coffee table with hidden storage', 'Glass-door display storage'],
  },
  {
    id: 'white-gloss-marble-tv-coffee-set',
    name: 'White Gloss & Dark Marble TV Console Set',
    category: 'Home Furniture',
    subCategory: 'TV Consoles',
    description: 'A matching 2-piece living room set featuring a white gloss coffee table and TV console with a dark marble effect top and arc-wave textured front panels. The combination of high-gloss white and dark stone creates a striking contemporary contrast.',
    price: '₦680,000',
    priceNum: 680000,
    image: hf85,
    objectPos: 'center',
    gallery: [hf85, hf89],
    specs: ['2-piece set (coffee table + TV console)', 'White gloss with dark marble-effect top', 'Arc-wave textured front panels', 'TV console fits up to 65" TV'],
  },
  {
    id: 'white-gold-bar-accent-tv-set',
    name: 'White & Gold Vertical Bar Accent TV Set',
    category: 'Home Furniture',
    subCategory: 'TV Consoles',
    description: 'A refined 2-piece living room set with a white gloss coffee table and matching TV console unit, both featuring a signature gold vertical-bar accent panel. The clean white body and gold detail create a luxurious yet understated look for contemporary interiors.',
    price: '₦720,000',
    priceNum: 720000,
    image: hf86,
    objectPos: 'center',
    gallery: [hf86, hf90],
    specs: ['2-piece set (coffee table + TV console)', 'White gloss body', 'Gold vertical-bar accent panel', 'TV console fits up to 65" TV'],
  },
];
