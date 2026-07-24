import type { Category } from '../../data/products';

export type ActiveCat = 'All' | Category;

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

interface ProductCategoryTabsProps {
  activeTab: ActiveCat;
  onSelect: (tab: ActiveCat) => void;
  counts: Record<string, number>;
}

const ProductCategoryTabs = ({ activeTab, onSelect, counts }: ProductCategoryTabsProps) => (
  <div className="sticky top-[68px] z-30 bg-white border-b border-gray-200 shadow-sm">
    <div className="overflow-x-auto no-scrollbar px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
      <div className="flex w-max min-w-full">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
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
              {counts[key] ?? 0}
            </span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export { TABS };
export default ProductCategoryTabs;
