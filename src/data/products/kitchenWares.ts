import type { Product } from './types';

import goldCutleryImg from '../../assets/products/gold-cutlery.jpg';
import platesImg      from '../../assets/products/plates.jpg';
import castIronImg    from '../../assets/products/cast-iron-pot.jpg';
import cookwareImg    from '../../assets/products/cookware.jpg';
import rangeImg       from '../../assets/products/range-cooker.jpg';
import gasHobImg      from '../../assets/products/gas-hob.jpg';
import kitchenModImg  from '../../assets/products/kitchen-modern.jpg';

import kit06 from '../../assets/products/Kitchen/kit-06.jpeg';
import kit07 from '../../assets/products/Kitchen/kit-07.jpeg';
import kit09 from '../../assets/products/Kitchen/kit-09.jpeg';
import kit10 from '../../assets/products/Kitchen/kit-10.jpeg';
import kit11 from '../../assets/products/Kitchen/kit-11.jpeg';
import kit12 from '../../assets/products/Kitchen/kit-12.jpeg';
import kit13 from '../../assets/products/Kitchen/kit-13.jpeg';
import kit14 from '../../assets/products/Kitchen/kit-14.jpeg';
import kit15 from '../../assets/products/Kitchen/kit-15.jpeg';

import kit16 from '../../assets/products/Kitchen/kit-16.jpeg';
import kit17 from '../../assets/products/Kitchen/kit-17.jpeg';
import kit18 from '../../assets/products/Kitchen/kit-18.jpeg';
import kit19 from '../../assets/products/Kitchen/kit-19.jpeg';
import kit20 from '../../assets/products/Kitchen/kit-20.jpeg';
import kit21 from '../../assets/products/Kitchen/kit-21.jpeg';
import kit22 from '../../assets/products/Kitchen/kit-22.jpeg';
import kit23 from '../../assets/products/Kitchen/kit-23.jpeg';
import kit24 from '../../assets/products/Kitchen/kit-24.jpeg';
import kit25 from '../../assets/products/Kitchen/kit-25.jpeg';
import kit26 from '../../assets/products/Kitchen/kit-26.jpeg';
import kit27 from '../../assets/products/Kitchen/kit-27.jpeg';

export const kitchenWaresProducts: Product[] = [
  {
    id: 'gold-cutlery-set',
    name: 'Gold Cutlery Set (24pc)',
    category: 'Kitchen Wares',
    description: 'Brushed gold stainless steel cutlery in a 24-piece set. Timeless elegance for everyday dining or special occasions.',
    price: '₦85,000',
    priceNum: 85000,
    image: goldCutleryImg,
    objectPos: 'center',
    gallery: [goldCutleryImg, platesImg],
    specs: ['24-piece set', 'Brushed gold finish', '18/10 stainless steel', 'Gift box included'],
  },
  {
    id: 'ceramic-plate-set',
    name: 'Ceramic Plate Set (12pc)',
    category: 'Kitchen Wares',
    description: 'Hand-finished ceramic dinner plates in natural tones. Microwave and dishwasher safe, stackable for easy storage.',
    price: '₦42,000',
    priceNum: 42000,
    image: platesImg,
    objectPos: 'center',
    gallery: [platesImg, goldCutleryImg],
    specs: ['12-piece set', 'Microwave safe', 'Dishwasher safe', 'Diameter: 28cm'],
  },
  {
    id: 'cast-iron-dutch-oven',
    name: 'Cast Iron Dutch Oven',
    category: 'Kitchen Wares',
    description: 'Enamelled cast iron Dutch oven in a soft blush finish. Exceptional heat retention for slow cooking, braising and baking.',
    price: '₦58,000',
    priceNum: 58000,
    image: castIronImg,
    objectPos: 'center',
    gallery: [castIronImg, cookwareImg],
    specs: ['5.5L capacity', 'Enamelled cast iron', 'Oven safe to 260°C', 'Induction compatible'],
  },
  {
    id: 'stainless-cookware-set',
    name: 'Stainless Cookware Set',
    category: 'Kitchen Wares',
    description: 'Professional-grade stainless steel cookware set. Tri-ply construction for even heat distribution and restaurant-quality results.',
    price: '₦95,000',
    priceNum: 95000,
    image: cookwareImg,
    objectPos: 'center',
    gallery: [cookwareImg, castIronImg],
    specs: ['10-piece set', 'Tri-ply stainless steel', 'Induction compatible', 'Oven safe to 300°C'],
  },
  {
    id: 'professional-range',
    name: 'Professional Range Cooker',
    category: 'Kitchen Wares',
    description: 'A commercial-style 6-burner range cooker with dual ovens. The centrepiece of any serious kitchen, built for precision cooking.',
    price: '₦685,000',
    priceNum: 685000,
    image: rangeImg,
    objectPos: 'center',
    featured: true,
    gallery: [rangeImg, gasHobImg, kitchenModImg],
    specs: ['6 gas burners', 'Dual oven capacity', 'Stainless steel body', 'Pot filler included'],
  },
  {
    id: 'gas-hob',
    name: 'Built-in Gas Hob',
    category: 'Kitchen Wares',
    description: 'A 5-burner built-in gas hob with auto-ignition and cast iron pan supports. Sleek tempered glass surface for easy cleaning.',
    price: '₦120,000',
    priceNum: 120000,
    image: gasHobImg,
    objectPos: 'center',
    gallery: [gasHobImg, kitchenModImg],
    specs: ['5 burners', 'Auto-ignition', 'Tempered glass surface', 'Cast iron pan supports'],
  },
  {
    id: 'royal-dessini-arc-cookware',
    name: 'Royal Dessini ARC Die-Cast Cookware Set',
    category: 'Kitchen Wares',
    description: 'A premium 10-piece die-cast aluminium cookware set by Royal Dessini, featuring a scratch-resistant ARC granite coating in charcoal black. The serrated bottom edge improves heat distribution on all hob types — gas, electric and induction. PFOA-free and eco-friendly.',
    price: '₦95,000',
    priceNum: 95000,
    image: kit11,
    objectPos: 'center',
    featured: true,
    gallery: [kit11, kit07, kit12, kit20, kit23, kit24],
    specs: ['10-piece set', 'Die-cast aluminium with ARC granite coating', 'PFOA-free, eco-friendly', 'Compatible with gas, electric & induction hobs'],
  },
  {
    id: 'itel-blender-m6s',
    name: 'Itel Multi-Function Blender M6S',
    category: 'Kitchen Wares',
    description: 'An 800W multi-function blender by Itel with a 1.5L glass jar and a detachable grinding cup. The pure copper rotor motor, 6-leaf blade and 20,000RPM speed deliver smooth blends, juices, smoothies and dry grinding in seconds.',
    price: '₦35,000',
    priceNum: 35000,
    image: kit09,
    objectPos: 'center',
    imageVariant: 'portrait',
    gallery: [kit09, kit10, kit21, kit22],
    specs: ['800W pure copper motor', '1.5L glass blending jar', '6-leaf blade system, 20,000 RPM', 'Detachable dry grinding cup included'],
  },
  {
    id: 'smart-portable-juicing-cup',
    name: 'Smart Portable Juicing Cup',
    category: 'Kitchen Wares',
    description: 'A cordless USB-rechargeable smart juicing cup with an LED display showing battery level and selected mode. Blends juice, ice crush and baby food on the go — no cables, no countertop needed. Available in white and black.',
    price: '₦28,000',
    priceNum: 28000,
    image: kit15,
    objectPos: 'center',
    imageVariant: 'portrait',
    gallery: [kit15, kit06, kit19, kit27],
    specs: ['USB-C rechargeable', 'LED digital display', 'Juice / ice crush / baby food modes', 'Available in white and black'],
  },
  {
    id: 'electric-self-heating-lunchbox',
    name: 'Electric Self-Heating Lunch Box',
    category: 'Kitchen Wares',
    description: 'A 3.5L electric self-heating lunch box that warms your food anywhere — plug into a wall socket or car adapter. The leak-proof design with secure clip locks is ideal for office workers, commuters and on-site workers who want a hot meal on demand.',
    price: '₦18,000',
    priceNum: 18000,
    image: kit13,
    imageVariant: 'portrait',
    objectPos: 'center',
    gallery: [kit13, kit25],
    specs: ['3.5L capacity', 'Self-heating with wall & car socket adapters', 'Leak-proof with secure clip locks', 'Removable inner container'],
  },
  {
    id: 'ceramic-wood-handle-cookware',
    name: 'Ceramic Non-Stick Cookware Set',
    category: 'Kitchen Wares',
    description: 'A 4-piece ceramic non-stick cookware set in a warm cream/beige finish with elegant wood-effect handles. Includes a frying pan, saucepan, casserole and wok — each with a tempered glass lid. The healthy coating is PFOA-free and compatible with all hob types.',
    price: '₦75,000',
    priceNum: 75000,
    image: kit14,
    objectPos: 'center',
    gallery: [kit14, kit26],
    specs: ['4-piece set (frying pan + saucepan + casserole + wok)', 'PFOA-free ceramic non-stick coating', 'Wood-effect soft-grip handles', 'Induction & oven compatible'],
  },
  {
    id: 'red-granite-cookware-set',
    name: 'Red Granite Speckled Cookware Set',
    category: 'Kitchen Wares',
    description: 'A premium 3-piece non-stick cookware set with a striking red granite-speckle coating on heavy-gauge die-cast aluminium. Includes a saucepan, deep casserole and frying pan — each with a tempered glass lid and soft-grip handles. PFOA-free and induction compatible.',
    price: '₦65,000',
    priceNum: 65000,
    image: kit16,
    objectPos: 'center',
    gallery: [kit16],
    specs: ['3-piece set (saucepan + casserole + frying pan)', 'Red granite-speckle non-stick coating', 'Die-cast aluminium construction', 'Induction, gas & electric compatible'],
  },
  {
    id: 'stainless-bento-lunch-box',
    name: 'Light Food 3-Tier Stainless Bento Box',
    category: 'Kitchen Wares',
    description: 'A compact 3-tier stainless steel bento lunch box with individually sealed compartments for separating meals, snacks and sides. Leak-proof, microwave-safe inner trays and a sturdy carry handle make it ideal for office workers, students and on-the-go lifestyles.',
    price: '₦15,000',
    priceNum: 15000,
    image: kit17,
    objectPos: 'center',
    gallery: [kit17],
    specs: ['3 individual sealed compartments', '18/8 stainless steel construction', 'Leak-proof with secure clip locks', 'Microwave-safe inner containers'],
  },
  {
    id: 'pink-granite-cookware-set',
    name: 'Pink Granite Non-Stick Cookware Set',
    category: 'Kitchen Wares',
    description: 'A 5-piece non-stick cookware set in a pretty pink granite-speckle finish on die-cast aluminium. Includes two saucepans, a deep casserole, a frying pan and a milk pan — each with a glass lid. PFOA-free coating compatible with gas, electric and induction hobs.',
    price: '₦85,000',
    priceNum: 85000,
    featured: true,
    image: kit18,
    objectPos: 'center',
    gallery: [kit18],
    specs: ['5-piece set (2 saucepans + casserole + frying pan + milk pan)', 'Pink granite-speckle non-stick coating', 'Die-cast aluminium', 'Compatible with all hob types including induction'],
  },
];
