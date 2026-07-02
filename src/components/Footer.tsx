import { Phone, Mail, MapPin } from 'lucide-react';
import reaganLogo from '../assets/Reagan_Logo_transparent.png';

const SERIF = "'Playfair Display', Georgia, serif";

const PRODUCTS = ['Home Furniture', 'Office Furniture', 'Electronic', 'Wines', 'Kitchen Wares'];
const COMPANY  = ['About Us', 'Our Story'];

const Footer = () => (
  <footer className="relative overflow-hidden" style={{ backgroundColor: '#ECEDF5' }}>

    {/* ── Background watermark — very large, very faint ─────────── */}
    <div
      className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <span
        className="font-bold leading-none"
        style={{
          fontFamily: SERIF,
          fontSize: 'clamp(200px, 28vw, 360px)',
          color: 'rgba(160,160,200,0.12)',
          whiteSpace: 'nowrap',
          paddingRight: '0px',
        }}
      >
        Reagan
      </span>
    </div>

    <div className="relative z-10 px-5 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-12 md:pt-16 pb-8">

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-14">

        {/* Brand — full width on mobile */}
        <div className="sm:col-span-2 md:col-span-1">

          {/* Logo + wordmark */}
          <a href="/" className="flex items-center gap-0.1 mb-5">
            <div className="shrink-0" style={{ width: '86px', height: '72px' }}>
              <img
                src={reaganLogo}
                alt=""
                aria-hidden
                className="w-full h-full object-contain block"
              />
            </div>
            <span
              className="text-gray-900 font-bold leading-none"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '42px' }}
            >
              Reagan
            </span>
          </a>

          {/* Description */}
          <p className="text-gray-500 text-[15.5px] leading-[1.8] mb-6" style={{ maxWidth: '260px' }}>
            Premium furniture and electronics for homes and offices in Akwa Ibom and beyond.
          </p>

          {/* Social icons — 32px, tight gap */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1EUTbYxcWn/?mibextid=wwXIfr"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-85 transition-opacity shrink-0"
              style={{ backgroundColor: '#1877F2' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/reagan_furniture_and_more"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-85 transition-opacity shrink-0"
              style={{
                background: 'radial-gradient(circle at 30% 110%, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/O3GJFBY44YQ2O1"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-85 transition-opacity shrink-0"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3
            className="text-gray-900 font-bold mb-6 md:mb-7"
            style={{ fontFamily: SERIF, fontSize: '24px' }}
          >
            Products
          </h3>
          <ul className="space-y-3 md:space-y-4">
            {PRODUCTS.map(item => (
              <li key={item}>
                <a href="#" className="text-gray-500 text-[16px] hover:text-gray-800 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3
            className="text-gray-900 font-bold uppercase mb-6 md:mb-7"
            style={{ fontFamily: SERIF, fontSize: '24px' }}
          >
            Company
          </h3>
          <ul className="space-y-3 md:space-y-4">
            {COMPANY.map(item => (
              <li key={item}>
                <a href="#" className="text-gray-500 text-[16px] hover:text-gray-800 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-gray-900 font-bold uppercase mb-6 md:mb-7"
            style={{ fontFamily: SERIF, fontSize: '24px' }}
          >
            Contact
          </h3>
          <ul className="space-y-4 md:space-y-5">
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-gray-500 shrink-0" />
              <span className="text-gray-500 text-[16px]">(+234)8 068 413 700</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-gray-500 shrink-0" />
              <span className="text-gray-500 text-[16px] break-all">reaganstoresng@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-gray-500 shrink-0 mt-0.5" />
              <span className="text-gray-500 text-[16px] leading-snug">
                # Aka road Uyo, Akwa Ibom State
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: 'rgba(100,100,140,0.2)' }} />

      {/* Copyright */}
      <div className="pt-5 md:pt-6">
        <p className="text-gray-500 text-[14.5px]">
          © 2024 Reagan Furniture &amp; Electronics. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
