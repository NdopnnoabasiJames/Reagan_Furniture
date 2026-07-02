import { useState } from 'react';
import reviewBg from '../assets/products/Home_furniture/hf-11.jpeg';

const SERIF = "'Playfair Display', Georgia, serif";

const REVIEWS = [
  {
    text: "The attention to detail and product quality exceeded my expectations. From the furniture to the overall customer experience, everything felt premium and well-organized. I'll definitely be purchasing again.",
    author: 'Johnson',
  },
  {
    text: "Reagan truly delivers on their promise. My living room has never looked this good. The sofa is exactly as described — solid, comfortable, and strikingly elegant.",
    author: 'Amara O.',
  },
  {
    text: "Fast delivery, great packaging, and the quality speaks for itself. Will definitely be ordering again for our office fit-out.",
    author: 'Tunde K.',
  },
];

const MARQUEE_ITEMS = Array(10).fill('what  are clients says');

/* Circular person silhouette — closest approximation to a profile photo */
const PersonAvatar = () => (
  <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
    <circle cx="20" cy="20" r="20" fill="#7C6248" />
    <circle cx="20" cy="15" r="7.5" fill="rgba(255,255,255,0.88)" />
    <ellipse cx="20" cy="33" rx="12" ry="9" fill="rgba(255,255,255,0.88)" />
  </svg>
);

const TestimonialSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIdx(i => (i + 1) % REVIEWS.length);
  const r = REVIEWS[idx];

  return (
    <div>
      {/* ── Marquee strip ──────────────────────────────────────── */}
      <div
        className="overflow-hidden py-[14px]"
        style={{ backgroundColor: '#ECEAF8' }}
        aria-hidden="true"
      >
        <div
          className="flex items-center"
          style={{
            width: 'max-content',
            animation: 'marquee-scroll 32s linear infinite',
            willChange: 'transform',
          }}
        >
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center shrink-0">
              {MARQUEE_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span
                    className="text-[15px] font-medium tracking-wide whitespace-nowrap"
                    style={{ color: '#2D2870' }}
                  >
                    {item}
                  </span>
                  <span className="mx-6 text-[13px] leading-none" style={{ color: '#2D2870' }}>
                    {i % 2 === 0 ? '✦' : '✧'}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Review section ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden h-[460px] sm:h-[520px] md:h-[560px] lg:h-[580px]"
      >
        {/* Background — repositioned to show sofa/lower area */}
        <img
          src={reviewBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 75%' }}
        />

        {/* Minimal overlay to slightly boost card contrast */}
        <div className="absolute inset-0 bg-black/8" />

        {/* Left arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="absolute left-3 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/75 bg-transparent flex items-center justify-center text-white text-[16px] hover:bg-white/10 transition-colors cursor-pointer"
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="absolute right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/75 bg-transparent flex items-center justify-center text-white text-[16px] hover:bg-white/10 transition-colors cursor-pointer"
        >
          →
        </button>

        {/* Review card — vertically and horizontally centered */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-[60px] sm:px-[80px] md:px-[110px] lg:px-[140px]">
          <div
            className="bg-white w-full rounded-xl shadow-xl"
            style={{ maxWidth: '560px', padding: '28px 32px 26px' }}
          >
            {/* Stars */}
            <div className="flex items-center gap-[7px] mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#F2A900">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Opening quote mark */}
            <div
              className="leading-none mb-3 select-none"
              style={{ fontFamily: SERIF, fontSize: '38px', color: '#111', fontWeight: 900 }}
              aria-hidden
            >
              ❝
            </div>

            {/* Review text */}
            <p
              className="leading-[1.72] mb-5"
              style={{ fontSize: '15px', color: '#222' }}
            >
              {r.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="shrink-0 rounded-full overflow-hidden w-10 h-10">
                <PersonAvatar />
              </div>
              <span
                className="font-semibold"
                style={{ fontSize: '15px', color: '#111' }}
              >
                {r.author}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
