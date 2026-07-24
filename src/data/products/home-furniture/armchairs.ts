import type { Product } from '../types';

import eamesChair   from '../../../assets/products/home-furniture/armchairs/eames-lounge-chair.jpeg';
import rosewoodChair from '../../../assets/products/home-furniture/armchairs/rosewood-lounge-chair.jpeg';
import baroqueChair from '../../../assets/products/home-furniture/armchairs/royal-baroque-armchair.jpeg';

export const armchairsProducts: Product[] = [
  {
    id: 'eames-lounge-chair',
    name: 'Eames Lounge Chair & Ottoman',
    category: 'Home Furniture',
    subCategory: 'Armchairs',
    description: 'A timeless icon of modern design. Black premium leather over a walnut shell, with a matching ottoman — the ultimate reading and relaxation chair for any living room.',
    price: '₦380,000',
    priceNum: 380000,
    image: eamesChair,
    objectPos: 'center',
    imageVariant: 'portrait',
    featured: true,
    gallery: [eamesChair],
    specs: ['Premium black leather', 'Walnut wood shell', 'Matching ottoman included', '360° swivel base'],
  },
  {
    id: 'rosewood-lounge-chair',
    name: 'Rosewood Lounge Chair',
    category: 'Home Furniture',
    subCategory: 'Armchairs',
    description: 'The same iconic silhouette in rich rosewood and black leather. A striking lifestyle piece that commands attention in living rooms, studies, and reading corners.',
    price: '₦450,000',
    priceNum: 450000,
    image: rosewoodChair,
    objectPos: 'center',
    imageVariant: 'portrait',
    featured: true,
    gallery: [rosewoodChair],
    specs: ['Premium black leather', 'Rosewood shell finish', 'Matching ottoman included', 'Low-profile chrome base'],
  },
  {
    id: 'royal-baroque-armchair-gold',
    name: 'Royal Baroque Armchair',
    category: 'Home Furniture',
    subCategory: 'Armchairs',
    description: 'An opulent baroque armchair with a hand-carved gold-leaf frame and champagne silk jacquard upholstery. The tufted back, scrolled arms and tasselled lumbar cushion make it an instant centrepiece for any classic or eclectic interior.',
    price: '₦195,000',
    priceNum: 195000,
    image: baroqueChair,
    objectPos: 'center',
    imageVariant: 'portrait',
    gallery: [baroqueChair],
    specs: ['Hand-carved solid wood frame', 'Gold-leaf finish', 'Champagne jacquard upholstery', 'Tasselled lumbar cushion included'],
  },
];
