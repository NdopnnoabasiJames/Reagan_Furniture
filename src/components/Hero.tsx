import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import bg1 from '../assets/products/Home_furniture/hf-33.jpeg';
import bg2 from '../assets/products/Home_furniture/hf-04.jpeg';
import bg3 from '../assets/products/Home_furniture/hf-45.jpeg';

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif";
const SLIDE_DURATION = 5000;

const slides = [
  { bg: bg1, cardPosition: 'center center' },
  { bg: bg2, cardPosition: 'center 40%' },
  { bg: bg3, cardPosition: 'center center' },
];

const stats = [
  { value: '200+', label: 'products' },
  { value: '4',    label: 'Categories' },
  { value: 'Fast', label: 'Delivery' },
];

const pad = (n: number) => String(n).padStart(2, '0');

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(
      () => setCurrent(c => (c + 1) % slides.length),
      SLIDE_DURATION,
    );
    return () => clearTimeout(id);
  }, [current]);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero carousel">

      {/* ── Slide backgrounds ──────────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* ── Overlays ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/30" />
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 100%)' }}
      />

      {/* ── Mobile nav arrows — absolute, flanking the hero ──────── */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="lg:hidden absolute left-4 top-[45%] -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/55 bg-black/20 flex items-center justify-center text-white text-[17px] hover:bg-black/40 transition-colors cursor-pointer"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="lg:hidden absolute right-4 top-[45%] -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/55 bg-black/20 flex items-center justify-center text-white text-[17px] hover:bg-black/40 transition-colors cursor-pointer"
      >
        →
      </button>

      {/* ── Page shell ───────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-20 md:pt-24 pb-10 md:pb-14">

        {/* ── HEADING ──────────────────────────────────────────────── */}
        <h1
          className="w-full text-center font-normal text-white leading-[1.05] tracking-[-0.02em]"
          style={{ fontFamily: SERIF, fontSize: 'clamp(44px, 11vw, 84px)' }}
        >
          Transform Your{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Space</em>
          {/* Force 3-line break on mobile: "Transform Your Space" / "With Timeless" / "Comfort" */}
          <br className="sm:hidden" />{' '}
          With Timeless{' '}
          <br className="sm:hidden" />
          Comfort
        </h1>

        {/* Spacer */}
        <div className="min-h-[48px] flex-1" />

        {/* ── BOTTOM SECTION — column on mobile, row on desktop ───── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">

          {/* ── LEFT: description · buttons · stats ─────────────── */}
          <div className="flex flex-col gap-7 lg:gap-0 lg:justify-between flex-1 min-w-0 lg:min-h-[310px]">

            {/* Description */}
            <p
              className="text-white/90 leading-[1.85] font-light text-center lg:text-left mx-auto lg:mx-0"
              style={{ fontSize: '17px', maxWidth: '660px' }}
            >
              <span
                className="text-white font-bold"
                style={{ fontFamily: SERIF, fontSize: '20px' }}
              >
                Reagan
              </span>{' '}
              was founded to provide premium furniture, electronics, and
              lifestyle essentials that bring comfort and style to everyday
              living.
            </p>

            {/* CTA Buttons — stacked on mobile, side-by-side on sm+ */}
            <div
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full mx-auto lg:mx-0"
              style={{ maxWidth: '660px' }}
            >
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="w-full sm:flex-1 text-white text-[14px] font-semibold uppercase tracking-[0.15em] py-[18px] hover:brightness-110 active:brightness-90 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: '#5B50D6' }}
              >
                Browse Collections
              </button>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full sm:flex-1 border border-white/60 bg-white/5 text-white text-[14px] font-semibold uppercase tracking-[0.15em] py-[18px] hover:bg-white/15 active:bg-white/20 transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer"
              >
                Enquire Now
                <span className="text-[20px] leading-none font-light">→</span>
              </button>
            </div>

            {/* Statistics */}
            <div className="flex items-stretch justify-center lg:justify-start">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-stretch">
                  {i > 0 && (
                    <div className="w-px bg-white/30 mx-5 md:mx-8 self-stretch" />
                  )}
                  <div className="flex flex-col">
                    <span
                      className="text-white font-bold leading-none mb-[6px]"
                      style={{ fontFamily: SERIF, fontSize: '38px' }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-white/65 font-light" style={{ fontSize: '13px' }}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: nav arrows · preview card · caption (desktop only) */}
          <div className="hidden lg:flex flex-col items-end gap-3 shrink-0" style={{ width: '360px' }}>

            {/* Navigation arrows + slide counter */}
            <div className="flex items-center gap-5 mb-1 self-end">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={prev}
                className="w-9 h-9 rounded-full border border-white/45 text-white/75 flex items-center justify-center text-sm hover:bg-white/10 hover:border-white/65 transition-all duration-200 cursor-pointer"
              >
                ←
              </button>

              <span
                className="text-white/60 font-light tracking-[0.18em]"
                style={{ fontSize: '13px', minWidth: '48px', textAlign: 'center' }}
                aria-live="polite"
                aria-label={`Slide ${current + 1} of ${slides.length}`}
              >
                {pad(current + 1)}&nbsp;/&nbsp;{pad(slides.length)}
              </span>

              <button
                type="button"
                aria-label="Next slide"
                onClick={next}
                className="w-9 h-9 rounded-full border border-white/45 text-white/75 flex items-center justify-center text-sm hover:bg-white/10 hover:border-white/65 transition-all duration-200 cursor-pointer"
              >
                →
              </button>
            </div>

            {/* Preview card */}
            <div
              className="w-full relative overflow-hidden shadow-2xl"
              style={{ height: '270px' }}
            >
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.bg}
                  alt={`Room preview ${i + 1}`}
                  aria-hidden={i !== current}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  style={{
                    objectPosition: slide.cardPosition,
                    opacity: i === current ? 1 : 0,
                  }}
                />
              ))}
            </div>

            {/* Caption */}
            <p className="text-white/60 font-light w-full" style={{ fontSize: '14px', lineHeight: '1.7' }}>
              Discover premium furniture, electronics, and lifestyle essentials
              designed to elevate every part of your home and workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
