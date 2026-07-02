import type { Product } from './types';

import tvUnitImg       from '../../assets/products/tv-unit.jpg';
import wallTvImg       from '../../assets/products/wall-tv.jpg';
import ceilingFanImg   from '../../assets/products/ceiling-fan.jpg';
import doubleFridgeImg from '../../assets/products/double-fridge.jpg';
import wineCoolerImg   from '../../assets/products/wine-cooler.jpg';

export const electronicsProducts: Product[] = [
  {
    id: 'smart-television',
    name: 'Smart Television 65"',
    category: 'Electronics',
    description: 'Ultra-thin bezel 4K Smart TV with vibrant HDR display and built-in streaming apps. Available in 43" to 75" sizes.',
    price: '₦888,000',
    priceNum: 888000,
    image: tvUnitImg,
    objectPos: 'center',
    featured: true,
    gallery: [tvUnitImg, wallTvImg],
    specs: ['65" 4K UHD display', 'HDR10+ support', 'Built-in Wi-Fi & Bluetooth', 'Includes wall bracket'],
  },
  {
    id: 'wall-mount-tv',
    name: 'Wall Mount TV 55"',
    category: 'Electronics',
    description: 'Slim wall-mounted 4K Smart TV perfect for modern living rooms. Ultra-thin profile with a frameless design.',
    price: '₦650,000',
    priceNum: 650000,
    image: wallTvImg,
    objectPos: 'center',
    gallery: [wallTvImg, tvUnitImg],
    specs: ['55" 4K UHD display', 'Frameless bezel', 'Smart OS built-in', 'HDMI × 3, USB × 2'],
  },
  {
    id: 'ceiling-fan',
    name: 'Premium Ceiling Fan',
    category: 'Electronics',
    description: 'A powerful 5-blade ceiling fan with silent motor technology. Elegant design with integrated lighting for any room.',
    price: '₦78,000',
    priceNum: 78000,
    image: ceilingFanImg,
    objectPos: 'center',
    imageVariant: 'portrait',
    gallery: [ceilingFanImg],
    specs: ['5 reversible blades', 'Silent DC motor', '3 speed settings', 'Remote control included'],
  },
  {
    id: 'double-door-fridge',
    name: 'Double Door Fridge',
    category: 'Electronics',
    description: 'Energy-efficient side-by-side refrigerator with frost-free technology, smart cooling zones, and a sleek stainless finish.',
    price: '₦1,850,00',
    priceNum: 1850000,
    image: doubleFridgeImg,
    objectPos: 'center',
    imageVariant: 'portrait',
    featured: true,
    gallery: [doubleFridgeImg, wineCoolerImg],
    specs: ['Side-by-side 600L capacity', 'Frost-free technology', 'Smart cooling zones', 'A++ energy rating'],
  },
  {
    id: 'wine-cooler',
    name: 'Wine Cooler Display',
    category: 'Electronics',
    description: 'Commercial-grade wine cooler with glass door display. Temperature zones for both red and white wines — ideal for home bars and restaurants.',
    price: '₦380,000',
    priceNum: 380000,
    image: wineCoolerImg,
    objectPos: 'center',
    imageVariant: 'portrait',
    gallery: [wineCoolerImg, doubleFridgeImg],
    specs: ['Dual temperature zones', 'Glass door display', 'UV-protected glass', 'Holds up to 120 bottles'],
  },
];
