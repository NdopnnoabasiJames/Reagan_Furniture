import { useState } from 'react';
import { Link } from 'react-router-dom';
import sideImg from '../assets/products/Home_furniture/hf-35.jpeg';

const SERIF  = "'Playfair Display', Georgia, serif";
const ITALIC = "'Cormorant Garamond', Georgia, serif";

const FEATURES = [
  { title: 'Premium Quality',  detail: 'Every product is curated for durability and design excellence.' },
  { title: 'Flexible Orders',  detail: 'We accommodate custom orders, sizes and configurations to suit any space.' },
  { title: 'Fast Delivery',    detail: 'Reliable delivery across Akwa Ibom and surrounding states.' },
  { title: 'Trusted Brand',    detail: 'Thousands of satisfied customers trust Reagan in their homes and offices.' },
];

const Star = ({ active }: { active: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 13 13" className="shrink-0">
    <path
      d="M6.5 0 L7.9 4.8 L13 6.5 L7.9 8.2 L6.5 13 L5.1 8.2 L0 6.5 L5.1 4.8 Z"
      fill={active ? '#7B73E5' : 'rgba(123,115,229,0.42)'}
    />
  </svg>
);

const QualitySection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="flex flex-col lg:flex-row"
      style={{ backgroundColor: '#181820' }}
    >
      {/* ── Left: text + accordion ──────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-12 lg:py-16">

        <h2
          className="text-white leading-[1.05] mb-4 md:mb-5"
          style={{ fontFamily: SERIF, fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Quality you can feel
        </h2>

        <p
          className="text-white/80 text-[15.5px] md:text-[16px] leading-[1.85] mb-5 md:mb-6"
        >
          Reagan brings together premium furniture and electronics under one
          roof. Based in Akwa Ibom, we serve homes and businesses across
          Nigeria helping people build spaces that inspire, comfort, and
          endure.
        </p>

        <Link
          to="/contact"
          className="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-white font-semibold hover:text-white/70 transition-colors mb-7 md:mb-8 w-fit"
        >
          Get in Touch
        </Link>

        {/* Accordion — slightly narrower than the heading text above */}
        <div style={{ maxWidth: '500px' }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="border-t last:border-b"
              style={{ borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between py-[17px] text-left"
              >
                <span
                  className={`flex items-center gap-3 text-[15.5px] md:text-[16px] transition-colors duration-150 ${
                    open === i ? 'text-white font-bold' : 'text-white/65 font-medium'
                  }`}
                >
                  <Star active={open === i} />
                  {f.title}
                </span>
                <span className="text-white/50 text-[15px] leading-none shrink-0 ml-4">
                  {open === i ? '∧' : '∨'}
                </span>
              </button>

              {open === i && (
                <p className="text-white/60 text-[15px] md:text-[15.5px] leading-[1.8] pb-5 pl-[23px]">
                  {f.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: sofa image (fixed height) + overlapping quote card ── */}
      {/*
        Layout:
          flex-col, relative — section bg (#181820) shows through
            ├─ flex-1 spacer   → grows on desktop, pushing image into lower portion
            ├─ image (fixed h) → rounded-[12px], does NOT fill whole column
            ├─ dark spacer     → quote card "lands" here
            └─ quote card      → absolute, straddles bottom of image + dark spacer
      */}
      <div
        className="lg:w-[50%] shrink-0 relative flex flex-col"
        style={{ backgroundColor: '#181820', minHeight: '420px' }}
      >
        {/* Sofa image — grows to fill available column height */}
        <div
          className="flex-1 overflow-hidden mx-4 md:mx-5"
          style={{ borderRadius: '12px', minHeight: '290px' }}
        >
          <img
            src={sideImg}
            alt="Premium interior showcase"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Bottom spacer — quote card overlaps both image above and this area */}
        <div className="shrink-0" style={{ height: '96px' }} />

        {/* Floating quote card — bottom-right, overlaps image bottom + dark area below */}
        <div
          className="absolute bottom-5 left-4 right-4 lg:left-auto lg:w-[60%] lg:right-5 rounded-[13px] backdrop-blur-md"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.74) 100%)',
            padding: '16px 20px 18px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          }}
        >
          <p
            className="text-white text-[16px] md:text-[16px] leading-[1.58] mb-2.5"
            style={{ fontFamily: ITALIC, fontStyle: 'italic' }}
          >
            "Every piece in our collection is chosen with one question in mind:
            would we put this in our own home?"
          </p>
          <p className="text-white/55 text-[13px] md:text-[13.5px] tracking-[0.08em]">
            - Reagan, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
