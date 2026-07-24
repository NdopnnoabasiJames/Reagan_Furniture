import type { Product } from '../types';

import pillowTop    from '../../../assets/products/home-furniture/mattresses/luxury-pillow-top-mattress.jpeg';
import springMatt   from '../../../assets/products/home-furniture/mattresses/spring-mattress.jpeg';

export const mattressesProducts: Product[] = [
  {
    id: 'luxury-pillow-top-mattress',
    name: 'Luxury Pillow-Top Mattress',
    category: 'Home Furniture',
    subCategory: 'Mattresses',
    description: 'A hotel-grade pillow-top mattress finished in cream and gold damask jacquard fabric with deep tufted cushioning. Delivers exceptional pressure relief and a plush sleeping surface — the choice for five-star comfort at home.',
    price: '₦940,000',
    priceNum: 940000,
    image: pillowTop,
    objectPos: 'center',
    featured: true,
    gallery: [pillowTop],
    specs: ['Deep pillow-top construction', 'Cream & gold damask jacquard cover', 'Hotel-grade pressure relief', 'King size (183 × 203cm)'],
  },
  {
    id: 'orthopaedic-spring-mattress',
    name: 'Spring Mattress',
    category: 'Home Furniture',
    subCategory: 'Mattresses',
    description: 'A modern orthopaedic spring mattress with a high-density knit surface and diamond-pattern cushion zones. The navy border piping and low-profile design pair beautifully with contemporary bed frames. Built for long-lasting back support.',
    price: '₦245,000',
    priceNum: 245000,
    image: springMatt,
    objectPos: 'center',
    gallery: [springMatt],
    specs: ['High-density spring system', 'Orthopaedic lumbar support zones', 'Breathable knit surface fabric', 'King size (183 × 203cm)'],
  },
];
