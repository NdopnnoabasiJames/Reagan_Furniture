import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, Monitor, Wine, Utensils, Leaf, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
        className="min-h-[60vh] flex items-center py-20 md:py-28 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24"
        style={{ backgroundColor: '#F7F7F5' }}
      >
        <div className="w-full flex flex-col md:flex-row md:items-center gap-8 md:gap-14">

          {/* Left: heading + arrows */}
          <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-5 md:gap-8 shrink-0">
            <h1
              className="text-[15px] font-bold uppercase tracking-[0.22em] text-gray-900 leading-[1.5]"
              style={{ fontFamily: SERIF }}
            >
              Shop By<br className="hidden md:block" /> Category
            </h1>
            <div className="flex items-center gap-3">
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
          </div>

          {/* Scrollable card track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {CATS.map(({ key, label, Icon }, i) => {
              const isActive = i === active;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelect(i, key)}
                  className={[
                    'relative shrink-0 snap-start flex flex-col items-center justify-center gap-3',
                    'rounded-xl transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-[#3D3898] text-white shadow-md'
                      : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300 hover:shadow-sm',
                  ].join(' ')}
                  style={{ width: '188px', height: '164px', padding: '22px 18px' }}
                >
                  {isActive && (
                    <span className="absolute top-3 right-3.5 text-[15px] text-white/75 leading-none">
                      →
                    </span>
                  )}
                  <Icon size={38} strokeWidth={1.3} />
                  <span className="text-[14.5px] font-medium text-center leading-tight whitespace-nowrap">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CategoriesPage;
