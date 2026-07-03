import type { Product } from './types';

import hf01 from '../../assets/products/Home_furniture/hf-01.jpeg';
import hf04 from '../../assets/products/Home_furniture/hf-04.jpeg';
import hf05 from '../../assets/products/Home_furniture/hf-05.jpeg';
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
import hf56 from '../../assets/products/Home_furniture/hf-56.jpeg';
import hf59 from '../../assets/products/Home_furniture/hf-59.jpeg';
import hf61 from '../../assets/products/Home_furniture/hf-61.jpeg';
import hf62 from '../../assets/products/Home_furniture/hf-62.jpeg';
import hf63 from '../../assets/products/Home_furniture/hf-63.jpeg';
import hf64 from '../../assets/products/Home_furniture/hf-64.jpeg';
import hf65 from '../../assets/products/Home_furniture/hf-65.jpeg';
import hf66 from '../../assets/products/Home_furniture/hf-66.jpeg';
import hf68 from '../../assets/products/Home_furniture/hf-68.jpeg';
import hf69 from '../../assets/products/Home_furniture/hf-69.jpeg';
import hf70 from '../../assets/products/Home_furniture/hf-70.jpeg';
import hf71 from '../../assets/products/Home_furniture/hf-71.jpeg';
import hf72 from '../../assets/products/Home_furniture/hf-72.jpeg';
import hf73 from '../../assets/products/Home_furniture/hf-73.jpeg';
import hf74 from '../../assets/products/Home_furniture/hf-74.jpeg';
import bg01 from '../../assets/products/Bags/bg-01.jpeg';

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
    gallery: [hf01],
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
    gallery: [hf05],
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
    image: hf43,
    objectPos: 'center',
    gallery: [hf43, hf49, hf48, hf44],
    specs: ['Available in cream or graphite', 'Geometric window-frame side panel', 'Smoked mirror inset detail', 'Gold lattice base'],
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
    imageVariant: 'portrait',
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
  {
    id: 'black-baroque-empire-sofa',
    name: 'Black Empire Baroque Sofa Suite',
    category: 'Home Furniture',
    description: 'A commanding baroque sofa suite in deep black velvet with a hand-carved silver frame. The ornate scrolled arms, cabriole legs and deep button-tufted back deliver maximum drama for formal sitting rooms, hotel lobbies and prestige reception areas.',
    price: '₦7,500,000',
    priceNum: 7500000,
    image: hf56,
    objectPos: 'center',
    gallery: [hf56],
    specs: ['3-piece set (sofa + 2 armchairs)', 'Deep black velvet upholstery', 'Hand-carved silver-leaf frame', 'Deep button-tufted back & seat'],
  },
  {
    id: 'taupe-luxury-sofa-set',
    name: 'Taupe Luxury Sofa Set with Gold Accents',
    category: 'Home Furniture',
    description: 'A plush taupe fabric sofa set with deep cushioning and brushed gold accent legs. The wide low-back silhouette and generous seat depth create an enveloping lounging experience — perfect for luxury apartments and contemporary villa interiors.',
    price: '₦4,800,000',
    priceNum: 4800000,
    image: hf59,
    objectPos: 'center',
    featured: true,
    gallery: [hf59],
    specs: ['3-seater sofa + 2 accent chairs', 'Premium taupe fabric upholstery', 'Brushed gold accent legs', 'Deep loose cushion seating'],
  },
  {
    id: 'marble-pedestal-coffee-table',
    name: 'Marble Top Pedestal Coffee Table',
    category: 'Home Furniture',
    description: 'A refined round coffee table with a genuine veined marble top on a sculptural ribbed grey concrete-look pedestal base. Equally at home in minimalist and luxury interiors — a sophisticated centrepiece for any living room.',
    price: '₦380,000',
    priceNum: 380000,
    image: hf61,
    objectPos: 'center',
    gallery: [hf61],
    specs: ['Round design', 'Genuine veined marble top', 'Ribbed concrete-effect pedestal', 'Diameter: 80cm'],
  },
  {
    id: 'walnut-gold-pedestal-side-tables',
    name: 'Walnut & Gold Pedestal Side Tables',
    category: 'Home Furniture',
    description: 'A pair of elegant nesting side tables with rich walnut-effect tops and slim brushed gold pedestal bases. Nest together when not in use — a versatile and stylish addition to any living room, bedroom or study.',
    price: '₦260,000',
    priceNum: 260000,
    image: hf62,
    objectPos: 'center',
    gallery: [hf62],
    specs: ['Set of 2 nesting tables', 'Walnut-effect top', 'Brushed gold pedestal base', 'Compact & stackable design'],
  },
  {
    id: 'gold-sphere-marble-table-set',
    name: 'Gold Sphere Marble Coffee & Side Table Set',
    category: 'Home Furniture',
    description: 'A striking 3-piece living room table set with white veined marble tops balanced on sculptural gold sphere bases. The varying heights add visual dynamism — use the larger piece as a coffee table and the smaller ones as side tables.',
    price: '₦480,000',
    priceNum: 480000,
    image: hf63,
    objectPos: 'center',
    gallery: [hf63],
    specs: ['3-piece set (1 coffee + 2 side tables)', 'White veined marble tops', 'Gold sphere sculptural bases', 'Multiple height configuration'],
  },
  {
    id: 'swivel-storage-coffee-table',
    name: 'Swivel-Top Storage Coffee Table',
    category: 'Home Furniture',
    description: 'A clever and contemporary coffee table with a rotating lift top that reveals a spacious hidden storage compartment. The dark walnut finish and clean geometric silhouette make it a functional yet refined centrepiece for modern living rooms.',
    price: '₦320,000',
    priceNum: 320000,
    image: hf64,
    objectPos: 'center',
    gallery: [hf64, hf65],
    specs: ['Lift & swivel top mechanism', 'Concealed storage compartment', 'Dark walnut finish', 'Extendable side surface'],
  },
  {
    id: 'slatted-multicolor-dining-set',
    name: 'Modern Slatted Multi-Color Dining Set',
    category: 'Home Furniture',
    description: 'A contemporary 4-seater dining set with a round pedestal table and sculptural slatted-back chairs in a vibrant mix of colours. The Scandinavian-influenced design brings energy and personality to kitchen diners, compact dining rooms and home offices.',
    price: '₦950,000',
    priceNum: 950000,
    image: hf66,
    objectPos: 'center',
    gallery: [hf66, hf68],
    specs: ['4-seater set', 'Multicolour slatted-back chairs', 'Round pedestal dining table', 'Contemporary Scandinavian design'],
  },
  {
    id: 'marble-tv-console-set',
    name: 'Marble Top Coffee Table & TV Console Set',
    category: 'Home Furniture',
    description: 'A coordinated 2-piece living room set featuring a white marble-top coffee table and a matching TV console unit with open shelving and concealed storage. The warm white and walnut finish combination works beautifully in contemporary, Japandi and transitional interiors.',
    price: '₦850,000',
    priceNum: 850000,
    image: hf69,
    objectPos: 'center',
    gallery: [hf69, hf73],
    specs: ['2-piece set (coffee table + TV console)', 'White marble-effect top', 'Walnut veneer open shelving', 'TV console: fits up to 65" TV'],
  },
  {
    id: 'white-gold-living-set',
    name: 'White & Gold Coffee Table + TV Stand',
    category: 'Home Furniture',
    description: 'A matching white gloss and brushed gold 2-piece living room set — a tempered glass-top coffee table with gold frame and a coordinated TV unit with open display shelves and a lower storage cabinet. A glamorous yet practical combination for modern interiors.',
    price: '₦680,000',
    priceNum: 680000,
    image: hf70,
    objectPos: 'center',
    gallery: [hf70],
    specs: ['2-piece set (coffee table + TV stand)', 'White gloss body with gold accents', 'Tempered glass coffee table top', 'TV unit fits up to 60" TV'],
  },
  {
    id: 'white-gold-console-sideboard',
    name: 'White & Gold Console Sideboard with Mirror',
    category: 'Home Furniture',
    description: 'An elegant white gloss console sideboard with brushed gold handles, finished with a large leaning mirror panel. The combination makes a versatile statement piece for hallways, living rooms and bedroom walls — adding light, space and glamour in equal measure.',
    price: '₦720,000',
    priceNum: 720000,
    image: hf71,
    objectPos: 'center',
    gallery: [hf71],
    specs: ['4-door console sideboard', 'White gloss finish with gold handles', 'Large leaning mirror included', 'Dimensions approx: W150 × D40 × H85cm'],
  },
  {
    id: 'white-arc-living-set',
    name: 'White Arc-Pattern Coffee Table + TV Stand',
    category: 'Home Furniture',
    description: 'A 2-piece white living room set with a distinctive arc/scallop pattern inset on cabinet doors. Includes a coffee table and a matching TV stand with open shelving and a drawer — a clean, contemporary choice for modern and coastal interiors.',
    price: '₦620,000',
    priceNum: 620000,
    image: hf72,
    objectPos: 'center',
    gallery: [hf72],
    specs: ['2-piece set (coffee table + TV stand)', 'White gloss with arc-pattern doors', 'Open shelving + drawer storage', 'TV stand fits up to 60" TV'],
  },
  {
    id: 'white-silver-living-set',
    name: 'White & Silver Coffee Table + TV Unit',
    category: 'Home Furniture',
    description: 'A coordinated white and brushed silver 2-piece living room collection. The lift-top coffee table offers hidden storage, while the TV unit features glass-panelled doors and an open central shelf. A refined, functional pairing for contemporary interiors.',
    price: '₦590,000',
    priceNum: 590000,
    image: hf74,
    objectPos: 'center',
    gallery: [hf74],
    specs: ['2-piece set (lift-top coffee table + TV unit)', 'White gloss with silver handles', 'Lift-top coffee table with hidden storage', 'Glass-door display storage'],
  },
  {
    id: 'modern-shell-bar-stools',
    name: 'Modern Shell Counter Bar Stools',
    category: 'Home Furniture',
    description: 'A set of contemporary shell-form counter stools with moulded polypropylene seats in a mix of red, grey and charcoal. The slim powder-coated black wire base adds an industrial-minimalist edge — equally at home at a kitchen island, home bar or creative studio.',
    price: '₦85,000',
    priceNum: 85000,
    image: bg01,
    objectPos: 'center',
    gallery: [bg01],
    specs: ['Available in red, grey and charcoal', 'Moulded polypropylene seat shell', 'Powder-coated black wire base', 'Counter height (65cm seat)'],
  },
];
