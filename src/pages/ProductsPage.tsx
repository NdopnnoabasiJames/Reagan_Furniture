import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PRODUCTS, CATEGORIES, type Category } from '../data/products';

import heroImg1 from '../assets/products/Home_furniture/hf-03.jpeg';
import heroImg2 from '../assets/products/Home_furniture/hf-09.jpeg';
import heroImg3 from '../assets/products/Home_furniture/hf-32.jpeg';

const SERIF = "'Playfair Display', Georgia, serif";
const PAGE_SIZE = 30;

type ActiveCat = 'All' | Category;

const COUNTS = (() => {
  const c: Record<string, number> = { All: PRODUCTS.length };
  CATEGORIES.forEach(cat => { c[cat] = PRODUCTS.filter(p => p.category === cat).length; });
  return c;
})();

const TABS: { key: ActiveCat; label: string }[] = [
  { key: 'All',               label: 'ALL PRODUCTS' },
  { key: 'Home Furniture',    label: 'HOME FURNITURE' },
  { key: 'Outdoor Furniture', label: 'OUTDOOR FURNITURE' },
  { key: 'Office Furniture',  label: 'OFFICE FURNITURE' },
  { key: 'Electronics',       label: 'ELECTRONICS' },
  { key: 'Wines',             label: 'WINES' },
  { key: 'Kitchen Wares',     label: 'KITCHEN WARES' },
  { key: 'Traveling Bags',    label: 'TRAVELING BAGS' },
];

const SUB_CATS: Record<string, string[]> = {
  'All':               ['All Items'],
  'Home Furniture':    ['All Items', 'Sofas & Chairs', 'Beds & Bedroom', 'Dining', 'Tables'],
  'Outdoor Furniture': ['All Items', 'Garden Seating', 'Lounge Sets', 'Garden Swings'],
  'Office Furniture':  ['All Items', 'Desks', 'Chairs', 'Tables'],
  'Electronics':       ['All Items', 'TVs', 'Fridges', 'Fans', 'Coolers'],
  'Wines':             ['All Items', 'Red Wines', 'Sparkling', 'Rosé', 'Alcohol-Free'],
  'Kitchen Wares':     ['All Items', 'Cutlery', 'Cookware', 'Appliances'],
  'Traveling Bags':    ['All Items', 'Cabin Bags', 'Checked Luggage', 'Sets'],
};

const SORT_OPTIONS = ['Default', 'Price: Low to High', 'Price: High to Low', 'Name: A–Z'];

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [activeTab, setActiveTab]         = useState<ActiveCat>(() => {
    const cat = searchParams.get('cat') as Category | null;
    return cat && (CATEGORIES as readonly string[]).includes(cat) ? cat : 'All';
  });
  const [searchInput, setSearchInput]     = useState('');
  const [searchActive, setSearchActive]   = useState('');
  const [subCat, setSubCat]               = useState('All Items');
  const [minPrice, setMinPrice]           = useState('');
  const [maxPrice, setMaxPrice]           = useState('');
  const [sortVal, setSortVal]             = useState('Default');
  const [appliedMin, setAppliedMin]       = useState('');
  const [appliedMax, setAppliedMax]       = useState('');
  const [appliedSort, setAppliedSort]     = useState('Default');
  const [page, setPage]                   = useState(1);
  const [viewMode, setViewMode]           = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const cat = searchParams.get('cat') as Category | null;
    if (cat && (CATEGORIES as readonly string[]).includes(cat)) {
      setActiveTab(cat);
      setPage(1);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = activeTab === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeTab);
    if (searchActive) {
      const q = searchActive.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    if (appliedMin) list = list.filter(p => p.priceNum >= Number(appliedMin));
    if (appliedMax) list = list.filter(p => p.priceNum <= Number(appliedMax));
    if (appliedSort === 'Price: Low to High') list = [...list].sort((a, b) => a.priceNum - b.priceNum);
    else if (appliedSort === 'Price: High to Low') list = [...list].sort((a, b) => b.priceNum - a.priceNum);
    else if (appliedSort === 'Name: A–Z') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeTab, searchActive, appliedMin, appliedMax, appliedSort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible    = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleTabSelect = (tab: ActiveCat) => {
    setActiveTab(tab);
    setSubCat('All Items');
    setPage(1);
  };

  const handleSearch = () => {
    setSearchActive(searchInput);
    setPage(1);
  };

  const handleApply = () => {
    setAppliedMin(minPrice);
    setAppliedMax(maxPrice);
    setAppliedSort(sortVal);
    setPage(1);
  };

  const handleClear = () => {
    setSubCat('All Items');
    setMinPrice(''); setMaxPrice(''); setSortVal('Default');
    setAppliedMin(''); setAppliedMax(''); setAppliedSort('Default');
    setSearchInput(''); setSearchActive('');
    setPage(1);
  };

  const paginationNums = useMemo((): (number | '...')[] => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3)               return [1, 2, 3, 4, '...', totalPages];
    if (page >= totalPages - 2)  return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', page - 1, page, page + 1, '...', totalPages];
  }, [page, totalPages]);

  return (
    <>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#EEE9F6', minHeight: '300px' }}>
        {/* Reagan watermark */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-bold select-none pointer-events-none leading-none"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(96px, 15vw, 210px)',
            color: 'rgba(91,80,214,0.09)',
          }}
        >
          Reagan
        </span>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 lg:py-14">
          {/* Left text */}
          <div className="flex-1">
            <h1
              className="text-[38px] md:text-[48px] lg:text-[54px] text-gray-900 leading-[1.06] mb-5"
              style={{ fontFamily: SERIF }}
            >
              Our Collection
            </h1>
            <p className="text-[15.5px] text-gray-500 leading-[1.85]" style={{ maxWidth: '360px' }}>
              Reagan carefully curates furniture and electronics to bring quality,
              comfort and modern style to every home and office across Nigeria.
            </p>
          </div>

          {/* Right: image collage */}
          <div className="relative hidden lg:block shrink-0" style={{ width: '500px', height: '260px' }}>
            {/* Image 1 – large, left-center */}
            <div
              className="absolute overflow-hidden shadow-lg"
              style={{ left: 0, top: '22px', width: '52%', height: '210px', zIndex: 2 }}
            >
              <img src={heroImg1} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Image 2 – upper right */}
            <div
              className="absolute overflow-hidden shadow-lg"
              style={{ right: 0, top: 0, width: '45%', height: '182px', zIndex: 3 }}
            >
              <img src={heroImg2} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Image 3 – lower right */}
            <div
              className="absolute overflow-hidden shadow-md"
              style={{ right: '6%', bottom: 0, width: '34%', height: '120px', zIndex: 1 }}
            >
              <img src={heroImg3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Tabs ─────────────────────────────────────────────── */}
      <div className="sticky top-[68px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="overflow-x-auto no-scrollbar px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="flex w-max min-w-full">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => handleTabSelect(key)}
                className={`shrink-0 flex items-center gap-2 px-4 xl:px-5 py-[14px] text-[12.5px] font-semibold uppercase tracking-[0.11em] whitespace-nowrap border-b-2 transition-colors duration-150 ${
                  activeTab === key
                    ? 'border-[#5B50D6] text-[#5B50D6]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {label}
                <span
                  className={`inline-flex items-center justify-center rounded-full text-[11.5px] font-bold leading-none px-[5px] h-[18px] min-w-[18px] ${
                    activeTab === key ? 'bg-[#5B50D6] text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {COUNTS[key]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Search bar ────────────────────────────────────────────────── */}
      <div className="border-b border-gray-200 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4" style={{ backgroundColor: '#F5F4F1' }}>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search products, categories..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="flex-1 h-[42px] px-4 text-[15px] bg-white border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:border-[#5B50D6] transition-colors"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="shrink-0 h-[42px] px-7 text-white text-[13px] font-semibold uppercase tracking-[0.13em] hover:brightness-110 transition-all"
            style={{ backgroundColor: '#5B50D6' }}
          >
            Search
          </button>
        </div>
      </div>

      {/* ── Main: sidebar + grid ──────────────────────────────────────── */}
      <div className="min-h-[60vh]" style={{ backgroundColor: '#F5F4F1' }}>
        <div className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 flex gap-8">

          {/* ── Sidebar ─────────────────────────────────────────────── */}
          <aside className="hidden lg:flex flex-col shrink-0" style={{ width: '210px' }}>

            <div className="flex items-center justify-between mb-5">
              <span className="text-[15px] font-semibold text-gray-800">Filters</span>
              <button
                type="button"
                onClick={handleClear}
                className="text-[13px] text-[#5B50D6] font-medium hover:underline"
              >
                Clear all
              </button>
            </div>

            {/* Sub Categories */}
            <div className="mb-4">
              <p className="text-[12px] uppercase tracking-[0.13em] font-semibold text-gray-500 mb-1.5">
                Sub Categories
              </p>
              <div className="relative">
                <select
                  value={subCat}
                  onChange={e => setSubCat(e.target.value)}
                  className="w-full h-[38px] pl-3 pr-8 text-[14.5px] text-gray-700 bg-white border border-gray-300 outline-none appearance-none focus:border-[#5B50D6] transition-colors cursor-pointer"
                >
                  {(SUB_CATS[activeTab] ?? SUB_CATS['All']).map(s => <option key={s}>{s}</option>)}
                </select>
                <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <p className="text-[12px] uppercase tracking-[0.13em] font-semibold text-gray-500 mb-1.5">
                Price Range
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  className="w-full h-[38px] px-2.5 text-[14px] text-gray-700 bg-white border border-gray-300 outline-none focus:border-[#5B50D6] transition-colors"
                />
                <span className="text-gray-400 text-[13px] shrink-0">–</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  className="w-full h-[38px] px-2.5 text-[14px] text-gray-700 bg-white border border-gray-300 outline-none focus:border-[#5B50D6] transition-colors"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="mb-6">
              <p className="text-[12px] uppercase tracking-[0.13em] font-semibold text-gray-500 mb-1.5">
                Sort
              </p>
              <div className="relative">
                <select
                  value={sortVal}
                  onChange={e => setSortVal(e.target.value)}
                  className="w-full h-[38px] pl-3 pr-8 text-[14.5px] text-gray-700 bg-white border border-gray-300 outline-none appearance-none focus:border-[#5B50D6] transition-colors cursor-pointer"
                >
                  {SORT_OPTIONS.map(s => <option key={s}>{s}</option>)}
                </select>
                <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Apply Filter */}
            <button
              type="button"
              onClick={handleApply}
              className="w-full py-[11px] text-white text-[13px] font-semibold uppercase tracking-[0.15em] hover:brightness-110 transition-all"
              style={{ backgroundColor: '#5B50D6' }}
            >
              Apply Filter
            </button>
          </aside>

          {/* ── Product grid area ───────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Controls row */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-[14px] text-gray-500">
                Showing{' '}
                <span className="font-semibold text-gray-800">{visible.length}</span>
                {' '}of{' '}
                <span className="font-semibold text-gray-800">{filtered.length}</span>
                {' '}products
              </p>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  title="Grid view"
                  className={`w-8 h-8 flex items-center justify-center border transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#5B50D6] border-[#5B50D6] text-white'
                      : 'border-gray-200 bg-white text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <rect x="0" y="0" width="5" height="5"/>
                    <rect x="7" y="0" width="5" height="5"/>
                    <rect x="0" y="7" width="5" height="5"/>
                    <rect x="7" y="7" width="5" height="5"/>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  title="List view"
                  className={`w-8 h-8 flex items-center justify-center border transition-colors ${
                    viewMode === 'list'
                      ? 'bg-[#5B50D6] border-[#5B50D6] text-white'
                      : 'border-gray-200 bg-white text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor">
                    <rect x="0" y="0" width="12" height="2"/>
                    <rect x="0" y="4" width="12" height="2"/>
                    <rect x="0" y="8" width="12" height="2"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-[16px] text-gray-500">No products match your search.</p>
                <button
                  type="button"
                  onClick={handleClear}
                  className="mt-3 text-[13px] text-[#5B50D6] font-semibold hover:underline uppercase tracking-[0.1em]"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Grid view */}
            {filtered.length > 0 && viewMode === 'grid' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {visible.map(p => (
                  <div
                    key={p.id}
                    onClick={() => navigate(`/products/${p.id}`)}
                    className="bg-white overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Image */}
                    <div
                      className="relative overflow-hidden"
                      style={{ height: '240px', ...(p.imageVariant === 'portrait' ? { backgroundColor: '#F7F6F3' } : {}) }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className={`w-full h-full transition-transform duration-500 ${p.imageVariant === 'portrait' ? 'object-contain' : 'object-cover group-hover:scale-105'}`}
                        style={{ objectPosition: p.objectPos ?? 'center' }}
                      />
                      {/* NEW ribbon */}
                      <div className="absolute top-0 left-0 overflow-hidden" style={{ width: 56, height: 56 }}>
                        <div
                          className="absolute flex items-center justify-center text-white font-bold uppercase"
                          style={{
                            fontSize: '8px',
                            letterSpacing: '0.06em',
                            top: '13px',
                            left: '-19px',
                            width: '70px',
                            padding: '3px 0',
                            backgroundColor: '#F59E0B',
                            transform: 'rotate(-45deg)',
                          }}
                        >
                          NEW
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <p className="text-[11.5px] uppercase tracking-[0.18em] text-gray-400 mb-1.5">
                        {p.category}
                      </p>
                      <h3
                        className="text-[16px] font-semibold text-gray-900 mb-2 leading-snug"
                        style={{ fontFamily: SERIF }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-[14.5px] text-gray-500 leading-[1.65] mb-4 line-clamp-2">
                        {p.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-[15px] font-bold text-gray-900" style={{ fontFamily: SERIF }}>
                          {p.price}
                        </span>
                        <button
                          type="button"
                          onClick={e => { e.stopPropagation(); navigate(`/contact?pid=${p.id}`); }}
                          className="text-[12px] uppercase tracking-[0.14em] font-semibold text-gray-500 hover:text-[#5B50D6] transition-colors flex items-center gap-1"
                        >
                          Enquire <span className="text-[14px]">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List view */}
            {filtered.length > 0 && viewMode === 'list' && (
              <div className="flex flex-col gap-4">
                {visible.map(p => (
                  <div
                    key={p.id}
                    onClick={() => navigate(`/products/${p.id}`)}
                    className="bg-white flex overflow-hidden cursor-pointer group hover:shadow-md transition-shadow duration-300"
                  >
                    <div
                      className="relative shrink-0 overflow-hidden"
                      style={{ width: '180px', height: '140px', ...(p.imageVariant === 'portrait' ? { backgroundColor: '#F7F6F3' } : {}) }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className={`w-full h-full ${p.imageVariant === 'portrait' ? 'object-contain' : 'object-cover'}`}
                        style={{ objectPosition: p.objectPos ?? 'center' }}
                      />
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-center">
                      <p className="text-[11.5px] uppercase tracking-[0.18em] text-gray-400 mb-1">{p.category}</p>
                      <h3
                        className="text-[16px] font-semibold text-gray-900 mb-1.5 leading-snug"
                        style={{ fontFamily: SERIF }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-[14.5px] text-gray-500 leading-[1.65] mb-3 line-clamp-2">{p.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[15px] font-bold text-gray-900" style={{ fontFamily: SERIF }}>
                          {p.price}
                        </span>
                        <button
                          type="button"
                          onClick={e => { e.stopPropagation(); navigate(`/contact?pid=${p.id}`); }}
                          className="text-[12px] uppercase tracking-[0.14em] font-semibold text-gray-500 hover:text-[#5B50D6] transition-colors flex items-center gap-1"
                        >
                          Enquire <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-12">
                {paginationNums.map((n, i) =>
                  n === '...' ? (
                    <span key={`e${i}`} className="px-1.5 text-[15px] text-gray-400 select-none">...</span>
                  ) : (
                    <button
                      key={n}
                      type="button"
                      onClick={() => { setPage(n as number); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`w-9 h-9 text-[15px] font-medium transition-colors ${
                        page === n
                          ? 'bg-[#5B50D6] text-white'
                          : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {n}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;
