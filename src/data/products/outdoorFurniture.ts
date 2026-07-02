import type { Product } from './types';

import hf07 from '../../assets/products/Home_furniture/hf-07.jpeg';
import hf08 from '../../assets/products/Outdoors/hf-08.jpeg';
import hf28 from '../../assets/products/Outdoors/hf-28.jpeg';
import hf29 from '../../assets/products/Outdoors/hf-29.jpeg';
import hf30 from '../../assets/products/Outdoors/hf-30.jpeg';
import hf31 from '../../assets/products/Outdoors/hf-31.jpeg';

export const outdoorFurnitureProducts: Product[] = [
  {
    id: 'garden-swing-chair',
    name: 'Garden Swing Chair',
    category: 'Outdoor Furniture',
    description: 'A generously padded 2-seater garden swing in warm sand/beige with individual scalloped canopy shades and deep-buttoned seat cushions. The powder-coated black steel frame is built for all-weather outdoor use — perfect for gardens, verandas and terraces.',
    price: '₦450,000',
    priceNum: 450000,
    image: hf08,
    objectPos: 'center',
    featured: true,
    gallery: [hf08],
    specs: ['2-seater with individual canopy shades', 'Deep padded beige cushions', 'Powder-coated black steel frame', 'All-weather outdoor rated'],
  },
  {
    id: 'zero-gravity-recliner',
    name: 'Zero Gravity Recliner Chair',
    category: 'Outdoor Furniture',
    description: 'A folding zero-gravity recliner with breathable woven mesh fabric and padded headrest. Adjusts to any recline angle — perfect for outdoor terraces, sunrooms and poolside relaxation.',
    price: '₦140,000',
    priceNum: 140000,
    image: hf07,
    objectPos: 'center',
    gallery: [hf07],
    specs: ['Breathable mesh fabric', 'Multi-position recline lock', 'Padded headrest included', 'Powder-coated steel frame'],
  },
  {
    id: 'rattan-garden-lounge-set',
    name: 'Rattan Garden Lounge Set',
    category: 'Outdoor Furniture',
    description: 'A generously proportioned black PE rattan outdoor lounge set dressed in rich terracotta orange cushions. Includes a 3-seater sofa, two armchairs and a low-profile coffee table — ideal for Mediterranean-style gardens, terraces and poolside lounging.',
    price: '₦950,000',
    priceNum: 950000,
    image: hf28,
    objectPos: 'center',
    featured: true,
    gallery: [hf28, hf30],
    specs: ['4-piece set', 'Black PE rattan weave', 'Water-resistant terracotta cushions', 'Tempered glass coffee table top'],
  },
  {
    id: 'slatted-garden-sofa-set',
    name: 'Slatted Garden Sofa Set',
    category: 'Outdoor Furniture',
    description: 'A sleek black slatted-back garden sofa set with light grey all-weather cushions. The clean linear design suits modern outdoor spaces, rooftop terraces and covered garden areas. Durable, weatherproof and easy to clean.',
    price: '₦560,000',
    priceNum: 560000,
    image: hf29,
    objectPos: 'center',
    gallery: [hf29],
    specs: ['4-piece set (sofa + 2 armchairs + table)', 'Black slatted back design', 'UV-resistant grey cushions', 'All-weather weatherproof construction'],
  },
  {
    id: 'poolside-rattan-patio-set',
    name: 'Poolside Rattan Patio Set',
    category: 'Outdoor Furniture',
    description: 'A bold black rattan patio set with vibrant red and orange accent cushions, designed for pool decks and outdoor entertaining spaces. Resort-grade build with a glass-top coffee table and deep-set lounge seating.',
    price: '₦950,000',
    priceNum: 950000,
    image: hf30,
    objectPos: 'center',
    gallery: [hf30, hf28],
    specs: ['4-piece set', 'Black PE rattan weave', 'Red & orange reversible cushions', 'Glass-top coffee table'],
  },
  {
    id: 'hampton-garden-sofa-set',
    name: 'Hampton Garden Sofa Set',
    category: 'Outdoor Furniture',
    description: 'A timeless white slatted hardwood garden sofa set with deep charcoal cushions. The Hamptons-inspired design works beautifully in manicured gardens, covered pergolas and verandas — equally stunning year-round.',
    price: '₦445,000',
    priceNum: 445000,
    image: hf31,
    objectPos: 'center',
    featured: true,
    gallery: [hf31],
    specs: ['4-piece set', 'Solid hardwood frame', 'White lacquer finish', 'Charcoal weather-resistant cushions'],
  },
];
