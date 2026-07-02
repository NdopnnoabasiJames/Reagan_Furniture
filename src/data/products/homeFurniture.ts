import type { Product } from './types';

import hf01 from '../../assets/products/Home_furniture/hf-01.jpeg';
import hf02 from '../../assets/products/Home_furniture/hf-02.jpeg';
import hf03 from '../../assets/products/Home_furniture/hf-03.jpeg';
import hf04 from '../../assets/products/Home_furniture/hf-04.jpeg';
import hf05 from '../../assets/products/Home_furniture/hf-05.jpeg';
import hf06 from '../../assets/products/Home_furniture/hf-06.jpeg';
import hf09 from '../../assets/products/Home_furniture/hf-09.jpeg';
import hf10 from '../../assets/products/Home_furniture/hf-10.jpeg';
import hf11 from '../../assets/products/Home_furniture/hf-11.jpeg';
import hf12 from '../../assets/products/Home_furniture/hf-12.jpeg';
import hf13 from '../../assets/products/Home_furniture/hf-13.jpeg';
import hf14 from '../../assets/products/Home_furniture/hf-14.jpeg';
import hf15 from '../../assets/products/Home_furniture/hf-15.jpeg';
import hf16 from '../../assets/products/Home_furniture/hf-16.jpeg';
import hf17 from '../../assets/products/Home_furniture/hf-17.jpeg';
import hf18 from '../../assets/products/Home_furniture/hf-18.jpeg';
import hf19 from '../../assets/products/Home_furniture/hf-19.jpeg';
import hf20 from '../../assets/products/Home_furniture/hf-20.jpeg';
import hf21 from '../../assets/products/Home_furniture/hf-21.jpeg';
import hf22 from '../../assets/products/Home_furniture/hf-22.jpeg';
import hf23 from '../../assets/products/Home_furniture/hf-23.jpeg';
import hf24 from '../../assets/products/Home_furniture/hf-24.jpeg';
import hf25 from '../../assets/products/Home_furniture/hf-25.jpeg';
import hf26 from '../../assets/products/Home_furniture/hf-26.jpeg';
import hf27 from '../../assets/products/Home_furniture/hf-27.jpeg';
import hf32 from '../../assets/products/Home_furniture/hf-32.jpeg';
import hf33 from '../../assets/products/Home_furniture/hf-33.jpeg';
import hf34 from '../../assets/products/Home_furniture/hf-34.jpeg';
import hf35 from '../../assets/products/Home_furniture/hf-35.jpeg';
import hf36 from '../../assets/products/Home_furniture/hf-36.jpeg';
import hf37 from '../../assets/products/Home_furniture/hf-37.jpeg';
import hf38 from '../../assets/products/Home_furniture/hf-38.jpeg';
import hf39 from '../../assets/products/Home_furniture/hf-39.jpeg';
import hf40 from '../../assets/products/Home_furniture/hf-40.jpeg';
import hf41 from '../../assets/products/Home_furniture/hf-41.jpeg';
import hf42 from '../../assets/products/Home_furniture/hf-42.jpeg';
import hf43 from '../../assets/products/Home_furniture/hf-43.jpeg';
import hf44 from '../../assets/products/Home_furniture/hf-44.jpeg';
import hf45 from '../../assets/products/Home_furniture/hf-45.jpeg';
import hf46 from '../../assets/products/Home_furniture/hf-46.jpeg';
import hf47 from '../../assets/products/Home_furniture/hf-47.jpeg';
import hf48 from '../../assets/products/Home_furniture/hf-48.jpeg';
import hf49 from '../../assets/products/Home_furniture/hf-49.jpeg';
import hf50 from '../../assets/products/Home_furniture/hf-50.jpeg';
import hf51 from '../../assets/products/Home_furniture/hf-51.jpeg';
import hf52 from '../../assets/products/Home_furniture/hf-52.jpeg';
import hf53 from '../../assets/products/Home_furniture/hf-53.jpeg';
import hf54 from '../../assets/products/Home_furniture/hf-54.jpeg';
import hf55 from '../../assets/products/Home_furniture/hf-55.jpeg';

export const homeFurnitureProducts: Product[] = [
  {
    id: 'eames-lounge-chair',
    name: 'Eames Lounge Chair & Ottoman',
    category: 'Home Furniture',
    description: 'A timeless icon of modern design. Black premium leather over a walnut shell, with a matching ottoman — the ultimate reading and relaxation chair for any living room.',
    price: '₦380,000',
    priceNum: 380000,
    image: hf01,
    objectPos: 'center',
    imageVariant: 'portrait',
    featured: true,
    gallery: [hf01, hf02, hf03],
    specs: ['Premium black leather', 'Walnut wood shell', 'Matching ottoman included', '360° swivel base'],
  },
  {
    id: 'luxury-tufted-bed',
    name: 'Luxury Tufted King Bed',
    category: 'Home Furniture',
    description: 'A bold statement headboard in deep tufted leather with solid walnut side rails and matching nightstands. Brings warmth and grandeur to any master bedroom.',
    price: '₦1,900,000',
    priceNum: 1900000,
    image: hf04,
    objectPos: 'center',
    gallery: [hf04],
    specs: ['King size (183 × 203cm)', 'Deep button-tufted headboard', 'Solid walnut side rails', 'Matching nightstands optional'],
  },
  {
    id: 'rosewood-lounge-chair',
    name: 'Rosewood Lounge Chair',
    category: 'Home Furniture',
    description: 'The same iconic silhouette in rich rosewood and black leather. A striking lifestyle piece that commands attention in living rooms, studies, and reading corners.',
    price: '₦450,000',
    priceNum: 450000,
    image: hf05,
    objectPos: 'center',
    imageVariant: 'portrait',
    featured: true,
    gallery: [hf05, hf06],
    specs: ['Premium black leather', 'Rosewood shell finish', 'Matching ottoman included', 'Low-profile chrome base'],
  },
  {
    id: 'diamond-platform-bed',
    name: 'Diamond Channel King Bed',
    category: 'Home Furniture',
    description: 'A contemporary king bed with a diamond-quilted upholstered headboard in soft steel-blue, trimmed with brushed gold accents and matching nightstands.',
    price: '₦2,500,000',
    priceNum: 2500000,
    image: hf09,
    objectPos: 'center',
    featured: true,
    gallery: [hf09, hf10, hf11],
    specs: ['King size (183 × 203cm)', 'Diamond-quilted headboard', 'Brushed gold accent legs', 'Matching nightstands included'],
  },
  {
    id: 'grand-wingback-bed',
    name: 'Grand Wingback Bed',
    category: 'Home Furniture',
    description: 'A hotel-grade wingback bed in cool grey velvet with a geometric diamond headboard and gold brushed feet. Designed for penthouse and executive bedroom settings.',
    price: '₦2,500,000',
    priceNum: 2500000,
    image: hf12,
    objectPos: 'center',
    gallery: [hf12, hf13, hf14, hf15],
    specs: ['King size (183 × 203cm)', 'Winged velvet headboard', 'Geometric diamond quilting', 'Brushed gold feet'],
  },
  {
    id: 'velvet-arched-bed',
    name: 'Velvet Arched Headboard Bed',
    category: 'Home Furniture',
    description: 'A soft taupe velvet bed with an elegant arched headboard, button-tufted cushioning and dark wood feet. Brings understated luxury to any bedroom retreat.',
    price: '₦1,800,000',
    priceNum: 320000,
    image: hf16,
    objectPos: 'center',
    gallery: [hf16, hf17, hf18],
    specs: ['King size (183 × 203cm)', 'Taupe velvet upholstery', 'Arched button-tufted headboard', 'Solid dark wood feet'],
  },
  {
    id: 'classic-dining-set',
    name: 'Classic Ornate Dining Set',
    category: 'Home Furniture',
    description: 'An elegant white dining set with hand-carved ornate chairs and a marble-effect table surface. A grand centrepiece for formal dining rooms and event spaces.',
    price: '₦1,450,000',
    priceNum: 1450000,
    image: hf19,
    objectPos: 'center',
    featured: true,
    gallery: [hf19, hf20, hf21, hf22],
    specs: ['6-seater', 'Hand-carved ornate chairs', 'Floral fabric seat cushions', 'Table: 180 × 90cm'],
  },
  {
    id: 'marble-dining-set',
    name: 'Marble Top Dining Set',
    category: 'Home Furniture',
    description: 'A premium Italian-marble-top dining table paired with saddle-leather barrel chairs on solid walnut legs. Built for elegance, designed to entertain.',
    price: '₦1,800,000',
    priceNum: 1800000,
    image: hf23,
    objectPos: 'center',
    gallery: [hf23, hf24, hf25, hf26, hf27],
    specs: ['6-seater', 'Italian marble table top', 'Leather barrel chairs', 'Solid walnut chair legs'],
  },
  {
    id: 'grey-chesterfield-sofa-set',
    name: 'Grey Velvet Chesterfield Set',
    category: 'Home Furniture',
    description: 'A full Chesterfield living room set in premium grey velvet — two deep-buttoned sofas and two matching wingback armchairs on polished chrome legs. Styled for penthouse and high-end residential interiors where understated luxury is everything.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: hf33,
    objectPos: 'center',
    featured: true,
    gallery: [hf33, hf35, hf32],
    specs: ['4-piece set (2 sofas + 2 armchairs)', 'Premium grey velvet upholstery', 'Deep diamond button-tufting', 'Polished chrome legs'],
  },
  {
    id: 'modular-sofa-collection',
    name: 'Modern Modular Sofa Collection',
    category: 'Home Furniture',
    description: 'A designer modular sofa collection with contrasting cream and charcoal sectional pieces paired with sculptural grey barrel accent chairs. Ideal for open-plan living spaces, showrooms and luxury apartments with a Japanese-minimalist sensibility.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: hf34,
    objectPos: 'top',
    gallery: [hf34],
    specs: ['Modular sectional configuration', 'Cream & charcoal contrast colourways', 'Sintered stone coffee table included', 'Custom configurations available'],
  },
  {
    id: 'royal-baroque-armchair-gold',
    name: 'Royal Baroque Armchair',
    category: 'Home Furniture',
    description: 'An opulent baroque armchair with a hand-carved gold-leaf frame and champagne silk jacquard upholstery. The tufted back, scrolled arms and tasselled lumbar cushion make it an instant centrepiece for any classic or eclectic interior.',
    price: '₦195,000',
    priceNum: 195000,
    image: hf36,
    objectPos: 'center',
    imageVariant: 'portrait',
    gallery: [hf36],
    specs: ['Hand-carved solid wood frame', 'Gold-leaf finish', 'Champagne jacquard upholstery', 'Tasselled lumbar cushion included'],
  },
  {
    id: 'brown-leather-ribbed-sofa-set',
    name: 'Brown Leather Ribbed Sofa Set',
    category: 'Home Furniture',
    description: 'A refined three-piece leather sofa set in rich chocolate brown with a signature horizontal ribbed backrest and solid oak legs with brushed gold accents. Includes a 3-seater, loveseat and curved accent chair — perfect for luxury living rooms and penthouses.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: hf37,
    objectPos: 'center',
    featured: true,
    gallery: [hf37, hf38, hf39],
    specs: ['3-piece set (sofa + loveseat + armchair)', 'Chocolate brown genuine leather', 'Horizontal ribbed backrest', 'Solid oak & brushed gold legs'],
  },
  {
    id: 'cream-channel-tufted-sofa-set',
    name: 'Cream Channel-Tufted Sofa Set',
    category: 'Home Furniture',
    description: 'A sculptural cream velvet sofa set with distinctive vertical channel tufting and a gently curved silhouette. Includes two sofas and two matching barrel accent chairs on brushed gold bases — a showstopping centrepiece for luxury villa and penthouse living rooms.',
    price: '₦5,400,000',
    priceNum: 5400000,
    image: hf42,
    objectPos: 'center',
    gallery: [hf42, hf40, hf41],
    specs: ['4-piece set (2 sofas + 2 accent chairs)', 'Cream velvet upholstery', 'Vertical channel tufting', 'Brushed gold base legs'],
  },
  {
    id: 'artdeco-panel-sofa',
    name: 'Art Deco Panel Sofa',
    category: 'Home Furniture',
    description: 'A striking Art Deco sofa with a geometric window-frame side panel in cream relief and a smoked mirror inset, raised on a gold lattice base. Available in ivory cream or graphite charcoal — each a bold statement in any contemporary luxury interior.',
    price: '₦6,500,000',
    priceNum: 6500000,
    image: hf49,
    objectPos: 'center',
    gallery: [hf43, hf49, hf48],
    specs: ['Available in cream or graphite', 'Geometric window-frame side panel', 'Smoked mirror inset detail', 'Gold lattice base'],
  },
  {
    id: 'modern-accent-tub-chair',
    name: 'Modern Accent Tub Chair',
    category: 'Home Furniture',
    description: 'A clean-lined modern tub/barrel accent chair in cream textured fabric with gently curved arms and a polished gold plinth base. The perfect accent piece for living rooms, reading corners and luxury hotel lobbies.',
    price: '₦145,000',
    priceNum: 145000,
    image: hf44,
    objectPos: 'center',
    imageVariant: 'portrait',
    gallery: [hf44],
    specs: ['Barrel/tub silhouette', 'Cream textured fabric', 'Polished gold plinth base', 'Suitable for indoor use'],
  },
  {
    id: 'baroque-sofa-set-blue',
    name: 'Royal Baroque Sofa Suite',
    category: 'Home Furniture',
    description: 'A magnificent French baroque sofa suite in powder blue and gold. Includes a grand 3-seater sofa and four matching tufted armchairs, all with hand-carved gold frames and damask-pattern upholstery. The definitive statement set for palatial interiors and grand reception rooms.',
    price: '₦6,000,000',
    priceNum: 6000000,
    image: hf45,
    objectPos: 'center',
    featured: true,
    gallery: [hf45, hf46, hf47],
    specs: ['5-piece set (sofa + 4 armchairs)', 'Powder blue damask upholstery', 'Hand-carved gold-leaf frame', 'Marble-top coffee table included'],
  },
  {
    id: 'silver-baroque-sofa-suite',
    name: 'Silver Neo-Baroque Sofa Suite',
    category: 'Home Furniture',
    description: 'A sophisticated neo-baroque living room suite in silver-grey jacquard, featuring a tufted 3-seater sofa, a 2-seater loveseat and two wingback armchairs. The silver carved frame and mirrored side panel accents deliver maximum grandeur for formal sitting rooms and luxury showrooms.',
    price: '₦12,000,000',
    priceNum: 12000000,
    image: hf50,
    objectPos: 'center',
    gallery: [hf50, hf51, hf52],
    specs: ['4-piece set (sofa + loveseat + 2 armchairs)', 'Silver-grey jacquard upholstery', 'Silver carved wood frame', 'Mirrored side panel accents'],
  },
  {
    id: 'designer-lift-top-coffee-table',
    name: 'Designer Lift-Top Coffee Table',
    category: 'Home Furniture',
    description: 'A sculptural designer coffee table with a pivoting white marble-effect glass top and a taupe lacquered body in an organic curved form. The lift mechanism rotates the top to reveal concealed storage — a statement centrepiece for contemporary and luxury living rooms.',
    price: '₦750,000',
    priceNum: 750000,
    image: hf53,
    objectPos: 'center',
    gallery: [hf53],
    specs: ['Lift-and-swivel marble-effect glass top', 'Taupe lacquered curved body', 'Dark wood platform base', 'Concealed storage compartment'],
  },
  {
    id: 'luxury-pillow-top-mattress',
    name: 'Luxury Pillow-Top Mattress',
    category: 'Home Furniture',
    description: 'A hotel-grade pillow-top mattress finished in cream and gold damask jacquard fabric with deep tufted cushioning. Delivers exceptional pressure relief and a plush sleeping surface — the choice for five-star comfort at home.',
    price: '₦940,000',
    priceNum: 940000,
    image: hf54,
    objectPos: 'center',
    featured: true,
    gallery: [hf54],
    specs: ['Deep pillow-top construction', 'Cream & gold damask jacquard cover', 'Hotel-grade pressure relief', 'King size (183 × 203cm)'],
  },
  {
    id: 'orthopaedic-spring-mattress',
    name: 'Spring Mattress',
    category: 'Home Furniture',
    description: 'A modern orthopaedic spring mattress with a high-density knit surface and diamond-pattern cushion zones. The navy border piping and low-profile design pair beautifully with contemporary bed frames. Built for long-lasting back support.',
    price: '₦245,000',
    priceNum: 245000,
    image: hf55,
    objectPos: 'center',
    gallery: [hf55],
    specs: ['High-density spring system', 'Orthopaedic lumbar support zones', 'Breathable knit surface fabric', 'King size (183 × 203cm)'],
  },
];
