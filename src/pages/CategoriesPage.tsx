import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, Monitor, Wine, Utensils, Leaf, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/ui/Reveal';

const SERIF = "'Playfair Display', Georgia, serif";
const SCROLL_STEP = 210;

const CATS = [
  { key: 'Home Furniture',    label: 'Home Furniture',    Icon: Home },
  { key: 'Outdoor Furniture', label: 'Outdoor Furniture', Icon: Leaf },
  { key: 'Office Furniture',  label: 'Office Furniture',  Icon: Building2 },
  { key: 'Electronics',       label: 'Electronics',       Icon: Monitor },
  { key: 'Wines',             label: 'Wines',             Icon: Wine },
  { key: 'Kitchen Wares',     label: 'Kitchen Wares',     Icon: Utensils },
  { key: 'Traveling Bags',    label: 'Traveling Bags',    Icon: ShoppingBag },
] as const;

const CategoriesPage = () => {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollTrack = (delta: number) =>
    trackRef.current?.scrollBy({ left: delta, behavior: 'smooth' });

  const handleSelect = (i: number, key: string) => {
    setActive(i);
    navigate(`/products?cat=${encodeURIComponent(key)}`);
  };

  return (
    <>
      <Navbar />

      <main
        className="page-enter min-h-[60vh] py-16 md:py-24 px-5 sm:px-12 md:px-16 lg:px-20 xl:px-24"
        style={{ backgroundColor: '#F7F7F5' }}
      >
        {/* Page heading */}
        <h1
          className="text-[15px] font-bold uppercase tracking-[0.22em] text-gray-900 mb-10 md:mb-14"
          style={{ fontFamily: SERIF }}
        >
          Shop By Category
        </h1>

        {/* ── Desktop (lg+): carousel with arrows ──────────────────── */}
        <div className="hidden lg:flex items-center gap-14">

          {/* Arrows */}
          <div className="flex flex-col items-start gap-4 shrink-0">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollTrack(-SCROLL_STEP)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollTrack(SCROLL_STEP)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-900 transition-colors"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory flex-1"
          >
            {CATS.map(({ key, label, Icon }, i) => {
              const isActive = i === active;
              return (
                <Reveal key={key} delay={i * 60} className="shrink-0 snap-start">
                <button
                  type="button"
                  onClick={() => handleSelect(i, key)}
                  className={[
                    'relative flex flex-col items-center justify-center gap-3',
                    'rounded-xl cursor-pointer',
                    isActive
                      ? 'bg-[#3D3898] text-white shadow-md transition-all duration-300'
                      : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
                  ].join(' ')}
                  style={{ width: '188px', height: '164px', padding: '22px 18px' }}
                >
                  {isActive && (
                    <span className="absolute top-3 right-3.5 text-[15px] text-white/75 leading-none">→</span>
                  )}
                  <Icon size={38} strokeWidth={1.3} />
                  <span className="text-[14.5px] font-medium text-center leading-tight whitespace-nowrap">
                    {label}
                  </span>
                </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── Tablet + Mobile (<lg): responsive grid ───────────────── */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {CATS.map(({ key, label, Icon }, i) => {
            const isActive = i === active;
            return (
              <Reveal key={key} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => handleSelect(i, key)}
                className={[
                  'relative w-full flex flex-col items-center justify-center gap-3 rounded-xl cursor-pointer py-8',
                  isActive
                    ? 'bg-[#3D3898] text-white shadow-md transition-all duration-300'
                    : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300',
                ].join(' ')}
              >
                {isActive && (
                  <span className="absolute top-3 right-3.5 text-[15px] text-white/75 leading-none">→</span>
                )}
                <Icon size={34} strokeWidth={1.3} />
                <span className="text-[13.5px] font-medium text-center leading-tight px-3">
                  {label}
                </span>
              </button>
              </Reveal>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CategoriesPage;
