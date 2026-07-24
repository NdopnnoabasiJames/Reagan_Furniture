import type { Product } from '../types';

import ornate1    from '../../../assets/products/home-furniture/dining/classic-ornate-dining-set-1.jpeg';
import ornate2    from '../../../assets/products/home-furniture/dining/classic-ornate-dining-set-2.jpeg';
import ornate3    from '../../../assets/products/home-furniture/dining/classic-ornate-dining-set-3.jpeg';
import ornate4    from '../../../assets/products/home-furniture/dining/classic-ornate-dining-set-4.jpeg';
import marble1    from '../../../assets/products/home-furniture/dining/marble-top-dining-set-1.jpeg';
import marble2    from '../../../assets/products/home-furniture/dining/marble-top-dining-set-2.jpeg';
import marble3    from '../../../assets/products/home-furniture/dining/marble-top-dining-set-3.jpeg';
import marble4    from '../../../assets/products/home-furniture/dining/marble-top-dining-set-4.jpeg';
import marble5    from '../../../assets/products/home-furniture/dining/marble-top-dining-set-5.jpeg';
import slatted1   from '../../../assets/products/home-furniture/dining/modern-slatted-multicolor-dining-set-1.jpeg';
import slatted2   from '../../../assets/products/home-furniture/dining/modern-slatted-multicolor-dining-set-2.jpeg';
import barStools  from '../../../assets/products/home-furniture/dining/modern-shell-bar-stools.jpeg';

export const diningProducts: Product[] = [
  {
    id: 'classic-dining-set',
    name: 'Classic Ornate Dining Set',
    category: 'Home Furniture',
    subCategory: 'Dining',
    description: 'An elegant white dining set with hand-carved ornate chairs and a marble-effect table surface. A grand centrepiece for formal dining rooms and event spaces.',
    price: '₦1,450,000',
    priceNum: 1450000,
    image: ornate1,
    objectPos: 'center',
    featured: true,
    gallery: [ornate1, ornate2, ornate3, ornate4],
    specs: ['6-seater', 'Hand-carved ornate chairs', 'Floral fabric seat cushions', 'Table: 180 × 90cm'],
  },
  {
    id: 'marble-dining-set',
    name: 'Marble Top Dining Set',
    category: 'Home Furniture',
    subCategory: 'Dining',
    description: 'A premium Italian-marble-top dining table paired with saddle-leather barrel chairs on solid walnut legs. Built for elegance, designed to entertain.',
    price: '₦1,800,000',
    priceNum: 1800000,
    image: marble1,
    objectPos: 'center',
    gallery: [marble1, marble2, marble3, marble4, marble5],
    specs: ['6-seater', 'Italian marble table top', 'Leather barrel chairs', 'Solid walnut chair legs'],
  },
  {
    id: 'slatted-multicolor-dining-set',
    name: 'Modern Slatted Multi-Color Dining Set',
    category: 'Home Furniture',
    subCategory: 'Dining',
    description: 'A contemporary 4-seater dining set with a round pedestal table and sculptural slatted-back chairs in a vibrant mix of colours. The Scandinavian-influenced design brings energy and personality to kitchen diners, compact dining rooms and home offices.',
    price: '₦950,000',
    priceNum: 950000,
    image: slatted1,
    objectPos: 'center',
    gallery: [slatted1, slatted2],
    specs: ['4-seater set', 'Multicolour slatted-back chairs', 'Round pedestal dining table', 'Contemporary Scandinavian design'],
  },
  {
    id: 'modern-shell-bar-stools',
    name: 'Modern Shell Counter Bar Stools',
    category: 'Home Furniture',
    subCategory: 'Dining',
    description: 'A set of contemporary shell-form counter stools with moulded polypropylene seats in a mix of red, grey and charcoal. The slim powder-coated black wire base adds an industrial-minimalist edge — equally at home at a kitchen island, home bar or creative studio.',
    price: '₦85,000',
    priceNum: 85000,
    image: barStools,
    objectPos: 'center',
    gallery: [barStools],
    specs: ['Available in red, grey and charcoal', 'Moulded polypropylene seat shell', 'Powder-coated black wire base', 'Counter height (65cm seat)'],
  },
];
