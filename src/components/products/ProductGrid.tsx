import type { Product } from '../../data/products';
import { ProductCardGrid, ProductCardList } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onClear: () => void;
  totalFiltered: number;
  onNavigate: (id: string) => void;
  onEnquire: (id: string) => void;
}

const ProductGrid = ({
  products,
  viewMode,
  onViewModeChange,
  onClear,
  totalFiltered,
  onNavigate,
  onEnquire,
}: ProductGridProps) => (
  <>
    {/* View toggle */}
    <div className="flex justify-end mb-5">
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => onViewModeChange('grid')}
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
          onClick={() => onViewModeChange('list')}
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
    {totalFiltered === 0 && (
      <div className="py-20 text-center">
        <p className="text-[16px] text-gray-500">No products match your search.</p>
        <button
          type="button"
          onClick={onClear}
          className="mt-3 text-[13px] text-[#5B50D6] font-semibold hover:underline uppercase tracking-[0.1em]"
        >
          Clear search
        </button>
      </div>
    )}

    {/* Grid view */}
    {totalFiltered > 0 && viewMode === 'grid' && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p, i) => (
          <ProductCardGrid
            key={p.id}
            product={p}
            delay={(i % 3) * 40}
            onNavigate={onNavigate}
            onEnquire={onEnquire}
          />
        ))}
      </div>
    )}

    {/* List view */}
    {totalFiltered > 0 && viewMode === 'list' && (
      <div className="flex flex-col gap-4">
        {products.map(p => (
          <ProductCardList key={p.id} product={p} onNavigate={onNavigate} onEnquire={onEnquire} />
        ))}
      </div>
    )}
  </>
);

export default ProductGrid;
