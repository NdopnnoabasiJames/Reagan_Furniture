import type { Product } from '../types';

import luxuryTufted1 from '../../../assets/products/home-furniture/beds/luxury-tufted-king-bed-1.jpeg';
import diamond1      from '../../../assets/products/home-furniture/beds/diamond-channel-king-bed-1.jpeg';
import diamond2      from '../../../assets/products/home-furniture/beds/diamond-channel-king-bed-2.jpeg';
import diamond3      from '../../../assets/products/home-furniture/beds/diamond-channel-king-bed-3.jpeg';
import wingback1     from '../../../assets/products/home-furniture/beds/grand-wingback-bed-1.jpeg';
import wingback2     from '../../../assets/products/home-furniture/beds/grand-wingback-bed-2.jpeg';
import wingback3     from '../../../assets/products/home-furniture/beds/grand-wingback-bed-3.jpeg';
import wingback4     from '../../../assets/products/home-furniture/beds/grand-wingback-bed-4.jpeg';
import velvetArched1 from '../../../assets/products/home-furniture/beds/velvet-arched-headboard-bed-1.jpeg';
import velvetArched2 from '../../../assets/products/home-furniture/beds/velvet-arched-headboard-bed-2.jpeg';
import velvetArched3 from '../../../assets/products/home-furniture/beds/velvet-arched-headboard-bed-3.jpeg';

import pinkPillow    from '../../../assets/products/home-furniture/beds/pink-quilted-pillow-pair.jpeg';
import whitePillow1  from '../../../assets/products/home-furniture/beds/white-hotel-pillow-pair-1.jpeg';
import whitePillow2  from '../../../assets/products/home-furniture/beds/white-hotel-pillow-pair-2.jpeg';
import whitePillow3  from '../../../assets/products/home-furniture/beds/white-hotel-pillow-pair-3.jpeg';

export const bedsProducts: Product[] = [
  {
    id: 'luxury-tufted-bed',
    name: 'Luxury Tufted King Bed',
    category: 'Home Furniture',
    subCategory: 'Beds',
    description: 'A bold statement headboard in deep tufted leather with solid walnut side rails and matching nightstands. Brings warmth and grandeur to any master bedroom.',
    price: '₦1,900,000',
    priceNum: 1900000,
    image: luxuryTufted1,
    objectPos: 'center',
    gallery: [luxuryTufted1],
    specs: ['King size (183 × 203cm)', 'Deep button-tufted headboard', 'Solid walnut side rails', 'Matching nightstands optional'],
  },
  {
    id: 'diamond-platform-bed',
    name: 'Diamond Channel King Bed',
    category: 'Home Furniture',
    subCategory: 'Beds',
    description: 'A contemporary king bed with a diamond-quilted upholstered headboard in soft steel-blue, trimmed with brushed gold accents and matching nightstands.',
    price: '₦2,500,000',
    priceNum: 2500000,
    image: diamond1,
    objectPos: 'center',
    featured: true,
    gallery: [diamond1, diamond2, diamond3],
    specs: ['King size (183 × 203cm)', 'Diamond-quilted headboard', 'Brushed gold accent legs', 'Matching nightstands included'],
  },
  {
    id: 'grand-wingback-bed',
    name: 'Grand Wingback Bed',
    category: 'Home Furniture',
    subCategory: 'Beds',
    description: 'A hotel-grade wingback bed in cool grey velvet with a geometric diamond headboard and gold brushed feet. Designed for penthouse and executive bedroom settings.',
    price: '₦2,500,000',
    priceNum: 2500000,
    image: wingback1,
    objectPos: 'center',
    gallery: [wingback1, wingback2, wingback3, wingback4],
    specs: ['King size (183 × 203cm)', 'Winged velvet headboard', 'Geometric diamond quilting', 'Brushed gold feet'],
  },
  {
    id: 'velvet-arched-bed',
    name: 'Velvet Arched Headboard Bed',
    category: 'Home Furniture',
    subCategory: 'Beds',
    description: 'A soft taupe velvet bed with an elegant arched headboard, button-tufted cushioning and dark wood feet. Brings understated luxury to any bedroom retreat.',
    price: '₦1,800,000',
    priceNum: 320000,
    image: velvetArched1,
    objectPos: 'center',
    gallery: [velvetArched1, velvetArched2, velvetArched3],
    specs: ['King size (183 × 203cm)', 'Taupe velvet upholstery', 'Arched button-tufted headboard', 'Solid dark wood feet'],
  },
  {
    id: 'pink-quilted-pillow-pair',
    name: 'Pink Quilted Pillow Pair',
    category: 'Home Furniture',
    subCategory: 'Beds',
    description: 'A pair of premium pink/mauve quilted pillows with a soft diamond-stitch pattern and a plush fill for a hotel-quality sleep experience. The warm dusty-rose colourway adds an elegant accent to any bedroom, from contemporary minimalist to luxury boudoir.',
    price: '₦32,000',
    priceNum: 32000,
    image: pinkPillow,
    objectPos: 'center',
    gallery: [pinkPillow],
    specs: ['Pair of 2 pillows', 'Diamond-quilted fabric cover', 'Plush fill — medium support', 'Standard size (50 × 70cm)'],
  },
  {
    id: 'white-hotel-pillow-pair',
    name: 'White Hotel Pillow Pair',
    category: 'Home Furniture',
    subCategory: 'Beds',
    description: 'A pair of hotel-grade white pillows with a soft, breathable cotton cover and a generous down-alternative fill. Sold in hygienic sealed packaging — the same quality you find in 5-star hotels, now for your bedroom.',
    price: '₦28,000',
    priceNum: 28000,
    image: whitePillow2,
    objectPos: 'center',
    gallery: [whitePillow2, whitePillow1, whitePillow3],
    specs: ['Pair of 2 pillows', 'Breathable cotton cover', 'Down-alternative plush fill', 'Sealed hygienic packaging'],
  },
];
