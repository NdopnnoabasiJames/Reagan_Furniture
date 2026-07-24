import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCategoryTabs  from '../components/products/ProductCategoryTabs';
import ProductSubcategoryChips from '../components/products/ProductSubcategoryChips';
import ProductSearch        from '../components/products/ProductSearch';
import ProductGrid          from '../components/products/ProductGrid';
import ProductPagination    from '../components/products/ProductPagination';
import { PRODUCTS, CATEGORIES } from '../data/products';
import type { Category, HomeFurnitureSubCategory } from '../data/products';
import type { ActiveCat }   from '../components/products/ProductCategoryTabs';

const SERIF    = "'Playfair Display', Georgia, serif";
const PAGE_SIZE = 30;

const COUNTS = (() => {
  const c: Record<string, number> = { All: PRODUCTS.length };
  CATEGORIES.forEach(cat => { c[cat] = PRODUCTS.filter(p => p.category === cat).length; });
  return c;
})();

const ProductsPage = () => {
  const navigate     = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL is the single source of truth for filter state
  const activeTab: ActiveCat = (() => {
    const cat = searchParams.get('cat');
    return cat && (CATEGORIES as readonly string[]).includes(cat as Category)
      ? (cat as Category)
      : 'All';
  })();

  const page         = Math.max(1, Number(searchParams.get('page')) || 1);
  const searchActive = searchParams.get('q') ?? '';
  const selectedSubs: HomeFurnitureSubCategory[] = useMemo(() => {
    const raw = searchParams.get('sub');
    if (!raw || activeTab !== 'Home Furniture') return [];
    return raw.split(',').filter(Boolean) as HomeFurnitureSubCategory[];
  }, [searchParams, activeTab]);

  // Pending search input — resynced on URL navigation
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
    if (activeTab === 'Home Furniture' && selectedSubs.length > 0) {
      list = list.filter(p => p.subCategory && selectedSubs.includes(p.subCategory));
    }
    if (searchActive) {
      const q = searchActive.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, selectedSubs, searchActive]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible    = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleTabSelect = (tab: ActiveCat) => {
    patchParams({ cat: tab === 'All' ? '' : tab, page: '', sub: '' });
  };

  const handleSubToggle = (sub: HomeFurnitureSubCategory) => {
    const next = selectedSubs.includes(sub)
      ? selectedSubs.filter(s => s !== sub)
      : [...selectedSubs, sub];
    patchParams({ sub: next.join(','), page: '' });
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
      <ProductCategoryTabs activeTab={activeTab} onSelect={handleTabSelect} counts={COUNTS} />

      {/* ── Subcategory Chips (Home Furniture only) ────────────────────── */}
      {activeTab === 'Home Furniture' && (
        <ProductSubcategoryChips selected={selectedSubs} onToggle={handleSubToggle} />
      )}

      {/* ── Search bar ────────────────────────────────────────────────── */}
      <ProductSearch value={searchInput} onChange={setSearchInput} onSearch={handleSearch} />

      {/* ── Product grid ──────────────────────────────────────────────── */}
      <div className="min-h-[60vh] px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8" style={{ backgroundColor: '#F5F4F1' }}>
        <ProductGrid
          products={visible}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onClear={handleClear}
          totalFiltered={filtered.length}
          onNavigate={id => navigate(`/products/${id}`)}
          onEnquire={id => navigate(`/contact?pid=${id}`)}
        />
        <ProductPagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;
