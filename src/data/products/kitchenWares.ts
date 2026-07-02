import type { Product } from './types';

import goldCutleryImg from '../../assets/products/gold-cutlery.jpg';
import platesImg      from '../../assets/products/plates.jpg';
import castIronImg    from '../../assets/products/cast-iron-pot.jpg';
import cookwareImg    from '../../assets/products/cookware.jpg';
import rangeImg       from '../../assets/products/range-cooker.jpg';
import gasHobImg      from '../../assets/products/gas-hob.jpg';
import kitchenModImg  from '../../assets/products/kitchen-modern.jpg';

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
];
