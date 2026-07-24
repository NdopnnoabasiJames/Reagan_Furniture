import type { Product } from '../types';

import chesterfield1 from '../../../assets/products/home-furniture/sofas/grey-velvet-chesterfield-set-1.jpeg';
import chesterfield2 from '../../../assets/products/home-furniture/sofas/grey-velvet-chesterfield-set-2.jpeg';
import chesterfield3 from '../../../assets/products/home-furniture/sofas/grey-velvet-chesterfield-set-3.jpeg';
import modularSofa   from '../../../assets/products/home-furniture/sofas/modern-modular-sofa-collection.jpeg';
import ribbed1       from '../../../assets/products/home-furniture/sofas/brown-leather-ribbed-sofa-set-1.jpeg';
import ribbed2       from '../../../assets/products/home-furniture/sofas/brown-leather-ribbed-sofa-set-2.jpeg';
import ribbed3       from '../../../assets/products/home-furniture/sofas/brown-leather-ribbed-sofa-set-3.jpeg';
import channelTufted1 from '../../../assets/products/home-furniture/sofas/cream-channel-tufted-sofa-set-1.jpeg';
import channelTufted2 from '../../../assets/products/home-furniture/sofas/cream-channel-tufted-sofa-set-2.jpeg';
import channelTufted3 from '../../../assets/products/home-furniture/sofas/cream-channel-tufted-sofa-set-3.jpeg';
import artDeco1      from '../../../assets/products/home-furniture/sofas/art-deco-panel-sofa-1.jpeg';
import artDeco2      from '../../../assets/products/home-furniture/sofas/art-deco-panel-sofa-2.jpeg';
import artDeco3      from '../../../assets/products/home-furniture/sofas/art-deco-panel-sofa-3.jpeg';
import artDeco4      from '../../../assets/products/home-furniture/sofas/art-deco-panel-sofa-4.jpeg';
import baroque1      from '../../../assets/products/home-furniture/sofas/royal-baroque-sofa-suite-1.jpeg';
import baroque2      from '../../../assets/products/home-furniture/sofas/royal-baroque-sofa-suite-2.jpeg';
import baroque3      from '../../../assets/products/home-furniture/sofas/royal-baroque-sofa-suite-3.jpeg';
import silverBaroque1 from '../../../assets/products/home-furniture/sofas/silver-neo-baroque-sofa-suite-1.jpeg';
import silverBaroque2 from '../../../assets/products/home-furniture/sofas/silver-neo-baroque-sofa-suite-2.jpeg';
import silverBaroque3 from '../../../assets/products/home-furniture/sofas/silver-neo-baroque-sofa-suite-3.jpeg';
import blackEmpire   from '../../../assets/products/home-furniture/sofas/black-empire-baroque-sofa-suite.jpeg';
import taupeSofa     from '../../../assets/products/home-furniture/sofas/taupe-luxury-sofa-set.jpeg';

export const sofasProducts: Product[] = [
  {
    id: 'grey-chesterfield-sofa-set',
    name: 'Grey Velvet Chesterfield Set',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A full Chesterfield living room set in premium grey velvet — two deep-buttoned sofas and two matching wingback armchairs on polished chrome legs. Styled for penthouse and high-end residential interiors where understated luxury is everything.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: chesterfield1,
    objectPos: 'center',
    featured: true,
    gallery: [chesterfield1, chesterfield2, chesterfield3],
    specs: ['4-piece set (2 sofas + 2 armchairs)', 'Premium grey velvet upholstery', 'Deep diamond button-tufting', 'Polished chrome legs'],
  },
  {
    id: 'modular-sofa-collection',
    name: 'Modern Modular Sofa Collection',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A designer modular sofa collection with contrasting cream and charcoal sectional pieces paired with sculptural grey barrel accent chairs. Ideal for open-plan living spaces, showrooms and luxury apartments with a Japanese-minimalist sensibility.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: modularSofa,
    objectPos: 'top',
    gallery: [modularSofa],
    specs: ['Modular sectional configuration', 'Cream & charcoal contrast colourways', 'Sintered stone coffee table included', 'Custom configurations available'],
  },
  {
    id: 'brown-leather-ribbed-sofa-set',
    name: 'Brown Leather Ribbed Sofa Set',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A refined three-piece leather sofa set in rich chocolate brown with a signature horizontal ribbed backrest and solid oak legs with brushed gold accents. Includes a 3-seater, loveseat and curved accent chair — perfect for luxury living rooms and penthouses.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: ribbed1,
    objectPos: 'center',
    featured: true,
    gallery: [ribbed1, ribbed2, ribbed3],
    specs: ['3-piece set (sofa + loveseat + armchair)', 'Chocolate brown genuine leather', 'Horizontal ribbed backrest', 'Solid oak & brushed gold legs'],
  },
  {
    id: 'cream-channel-tufted-sofa-set',
    name: 'Cream Channel-Tufted Sofa Set',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A sculptural cream velvet sofa set with distinctive vertical channel tufting and a gently curved silhouette. Includes two sofas and two matching barrel accent chairs on brushed gold bases — a showstopping centrepiece for luxury villa and penthouse living rooms.',
    price: '₦5,400,000',
    priceNum: 5400000,
    image: channelTufted1,
    objectPos: 'center',
    gallery: [channelTufted1, channelTufted2, channelTufted3],
    specs: ['4-piece set (2 sofas + 2 accent chairs)', 'Cream velvet upholstery', 'Vertical channel tufting', 'Brushed gold base legs'],
  },
  {
    id: 'artdeco-panel-sofa',
    name: 'Art Deco Panel Sofa',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A striking Art Deco sofa with a geometric window-frame side panel in cream relief and a smoked mirror inset, raised on a gold lattice base. Available in ivory cream or graphite charcoal — each a bold statement in any contemporary luxury interior.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: artDeco1,
    objectPos: 'center',
    gallery: [artDeco1, artDeco2, artDeco3, artDeco4],
    specs: ['Available in cream or graphite', 'Geometric window-frame side panel', 'Smoked mirror inset detail', 'Gold lattice base'],
  },
  {
    id: 'baroque-sofa-set-blue',
    name: 'Royal Baroque Sofa Suite',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A magnificent French baroque sofa suite in powder blue and gold. Includes a grand 3-seater sofa and four matching tufted armchairs, all with hand-carved gold frames and damask-pattern upholstery. The definitive statement set for palatial interiors and grand reception rooms.',
    price: '₦6,000,000',
    priceNum: 6000000,
    image: baroque1,
    objectPos: 'center',
    featured: true,
    gallery: [baroque1, baroque2, baroque3],
    specs: ['5-piece set (sofa + 4 armchairs)', 'Powder blue damask upholstery', 'Hand-carved gold-leaf frame', 'Marble-top coffee table included'],
  },
  {
    id: 'silver-baroque-sofa-suite',
    name: 'Silver Neo-Baroque Sofa Suite',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A sophisticated neo-baroque living room suite in silver-grey jacquard, featuring a tufted 3-seater sofa, a 2-seater loveseat and two wingback armchairs. The silver carved frame and mirrored side panel accents deliver maximum grandeur for formal sitting rooms and luxury showrooms.',
    price: '₦12,000,000',
    priceNum: 12000000,
    image: silverBaroque1,
    objectPos: 'center',
    gallery: [silverBaroque1, silverBaroque2, silverBaroque3],
    specs: ['4-piece set (sofa + loveseat + 2 armchairs)', 'Silver-grey jacquard upholstery', 'Silver carved wood frame', 'Mirrored side panel accents'],
  },
  {
    id: 'black-baroque-empire-sofa',
    name: 'Black Empire Baroque Sofa Suite',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A commanding baroque sofa suite in deep black velvet with a hand-carved silver frame. The ornate scrolled arms, cabriole legs and deep button-tufted back deliver maximum drama for formal sitting rooms, hotel lobbies and prestige reception areas.',
    price: '₦7,500,000',
    priceNum: 7500000,
    image: blackEmpire,
    objectPos: 'center',
    gallery: [blackEmpire],
    specs: ['3-piece set (sofa + 2 armchairs)', 'Deep black velvet upholstery', 'Hand-carved silver-leaf frame', 'Deep button-tufted back & seat'],
  },
  {
    id: 'taupe-luxury-sofa-set',
    name: 'Taupe Luxury Sofa Set with Gold Accents',
    category: 'Home Furniture',
    subCategory: 'Sofas',
    description: 'A plush taupe fabric sofa set with deep cushioning and brushed gold accent legs. The wide low-back silhouette and generous seat depth create an enveloping lounging experience — perfect for luxury apartments and contemporary villa interiors.',
    price: '₦4,800,000',
    priceNum: 4800000,
    image: taupeSofa,
    objectPos: 'center',
    featured: true,
    gallery: [taupeSofa],
    specs: ['3-seater sofa + 2 accent chairs', 'Premium taupe fabric upholstery', 'Brushed gold accent legs', 'Deep loose cushion seating'],
  },
];
