import { useState, useRef } from 'react';
import {
  Home, Building2, Monitor, Wine, Utensils, Sofa,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif";

const CATEGORIES = [
  { label: 'Home Furniture',   Icon: Home },
  { label: 'Office Furniture', Icon: Building2 },
  { label: 'Electronics',      Icon: Monitor },
  { label: 'Wines',            Icon: Wine },
  { label: 'Kitchen Wares',    Icon: Utensils },
  { label: 'Home Decor',       Icon: Sofa },
] as const;

const SCROLL_STEP = 200;

const CategorySection = () => {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (delta: number) =>
    trackRef.current?.scrollBy({ left: delta, behavior: 'smooth' });

  return (
    <section className="bg-[#F7F7F5] py-10 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-12 px-5 sm:px-12 md:px-16 lg:px-20 xl:px-24">

        {/* ── Left: heading + arrows ──────────────────────────────── */}
        <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-7 shrink-0">
          <h2
            className="text-[13px] md:text-[13.5px] font-bold uppercase tracking-[0.22em] text-gray-900 leading-snug"
            style={{ fontFamily: SERIF }}
          >
            Shop By<br className="hidden md:block" /> Category
          </h2>

          <div className="flex items-center gap-2.5 md:gap-3">
            <button
              type="button"
              aria-label="Previous categories"
              onClick={() => scrollTrack(-SCROLL_STEP)}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              aria-label="Next categories"
              onClick={() => scrollTrack(SCROLL_STEP)}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-900 transition-colors duration-150"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* ── Right: scrollable card track ──────────────────────── */}
        <div
          ref={trackRef}
          className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {CATEGORIES.map(({ label, Icon }, i) => {
            const isActive = i === active;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                className={[
                  'relative shrink-0 snap-start flex flex-col items-center justify-center gap-2.5 md:gap-3',
                  'rounded-xl transition-all duration-200 cursor-pointer',
                  isActive
                    ? 'bg-[#3D3898] text-white shadow-md'
                    : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300 hover:shadow-sm',
                ].join(' ')}
                style={{ width: '155px', height: '138px', padding: '16px 14px' }}
              >
                {isActive && (
                  <span className="absolute top-2.5 right-3 text-[14px] text-white/75 leading-none">
                    →
                  </span>
                )}
                <Icon size={32} strokeWidth={1.3} className="md:hidden" />
                <Icon size={38} strokeWidth={1.3} className="hidden md:block" />
                <span className="text-[13.5px] md:text-[14.5px] font-medium text-center leading-tight whitespace-nowrap">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
