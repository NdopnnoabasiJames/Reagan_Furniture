import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/ui/Reveal';
import { PRODUCTS, CATEGORIES, type Category } from '../data/products';


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

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL is the single source of truth for applied state
  const activeTab: ActiveCat = (() => {
    const cat = searchParams.get('cat');
    return cat && (CATEGORIES as readonly string[]).includes(cat as Category)
      ? (cat as Category)
      : 'All';
  })();
  const page         = Math.max(1, Number(searchParams.get('page')) || 1);
  const searchActive = searchParams.get('q') ?? '';

  // Pending input state — resynced from URL on back/forward navigation
  const [searchInput, setSearchInput] = useState(searchActive);
  const [viewMode, setViewMode]       = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setSearchInput(searchParams.get('q') ?? '');
  }, [searchParams]);

  const patchParams = (updates: Record<string, string>) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([k, v]) => {
        if (v) next.set(k, v); else next.delete(k);
      });
      return next;
    });
  };

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
    return list;
  }, [activeTab, searchActive]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible    = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleTabSelect = (tab: ActiveCat) => {
    patchParams({ cat: tab === 'All' ? '' : tab, page: '' });
  };

  const handleSearch = () => {
    patchParams({ q: searchInput, page: '' });
  };

  const handleClear = () => {
    setSearchParams({});
    setSearchInput('');
  };

  const handlePageChange = (n: number) => {
    patchParams({ page: String(n) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <section className="page-enter relative overflow-hidden" style={{ backgroundColor: '#EEE9F6', minHeight: '300px' }}>
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

        <div className="relative z-10 px-5 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-10 md:py-14 lg:py-14">
          <h1
            className="text-[38px] md:text-[48px] lg:text-[54px] text-gray-900 leading-[1.06] mb-5"
            style={{ fontFamily: SERIF }}
          >
            Our Collection
          </h1>
          <p className="text-[15.5px] text-gray-500 leading-[1.85]" style={{ maxWidth: '420px' }}>
            Reagan carefully curates furniture and electronics to bring quality,
            comfort and modern style to every home and office across Nigeria.
          </p>
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

      {/* ── Product grid ──────────────────────────────────────────────── */}
      <div className="min-h-[60vh] px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8" style={{ backgroundColor: '#F5F4F1' }}>

        {/* View toggle */}
        <div className="flex justify-end mb-5">
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
              Clear search
            </button>
          </div>
        )}

        {/* Grid view — 1 col mobile / 2 col tablet / 3 col desktop */}
        {filtered.length > 0 && viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 40}>
              <div
                onClick={() => navigate(`/products/${p.id}`)}
                className="bg-white overflow-hidden cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '220px', ...(p.imageVariant === 'portrait' ? { backgroundColor: '#F7F6F3' } : {}) }}
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
              </Reveal>
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
                  onClick={() => handlePageChange(n as number)}
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

      <Footer />
    </>
  );
};

export default ProductsPage;
