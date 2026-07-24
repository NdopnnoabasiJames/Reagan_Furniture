interface ProductSearchProps {
  value: string;
  onChange: (v: string) => void;
  onSearch: () => void;
}

const ProductSearch = ({ value, onChange, onSearch }: ProductSearchProps) => (
  <div className="border-b border-gray-200 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4" style={{ backgroundColor: '#F5F4F1' }}>
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Search products, categories..."
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSearch()}
        className="flex-1 h-[42px] px-4 text-[15px] bg-white border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:border-[#5B50D6] transition-colors"
      />
      <button
        type="button"
        onClick={onSearch}
        className="shrink-0 h-[42px] px-7 text-white text-[13px] font-semibold uppercase tracking-[0.13em] hover:brightness-110 transition-all"
        style={{ backgroundColor: '#5B50D6' }}
      >
        Search
      </button>
    </div>
  </div>
);

export default ProductSearch;
