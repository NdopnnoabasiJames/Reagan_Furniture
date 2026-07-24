import { HOME_FURNITURE_SUBCATEGORIES } from '../../data/products';
import type { HomeFurnitureSubCategory } from '../../data/products';

interface ProductSubcategoryChipsProps {
  selected: HomeFurnitureSubCategory[];
  onToggle: (sub: HomeFurnitureSubCategory) => void;
}

const ProductSubcategoryChips = ({ selected, onToggle }: ProductSubcategoryChipsProps) => (
  <div className="border-b border-gray-200 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-3 bg-white">
    <div className="flex flex-wrap gap-2">
      {HOME_FURNITURE_SUBCATEGORIES.map(sub => {
        const active = selected.includes(sub);
        return (
          <button
            key={sub}
            type="button"
            onClick={() => onToggle(sub)}
            className={`text-[12px] font-semibold uppercase tracking-[0.1em] px-4 py-[7px] rounded-full border transition-all duration-150 ${
              active
                ? 'bg-[#5B50D6] border-[#5B50D6] text-white'
                : 'bg-white border-gray-300 text-gray-500 hover:border-[#5B50D6] hover:text-[#5B50D6]'
            }`}
          >
            {sub}
          </button>
        );
      })}
    </div>
  </div>
);

export default ProductSubcategoryChips;
