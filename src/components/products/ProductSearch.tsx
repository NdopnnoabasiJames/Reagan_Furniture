interface ProductSearchProps {
  value: string;
  onChange: (v: string) => void;
}

const ProductSearch = ({ value, onChange }: ProductSearchProps) => (
  <div className="border-b border-gray-200 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4" style={{ backgroundColor: '#F5F4F1' }}>
    <input
      type="text"
      placeholder="Search products, categories..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full h-[42px] px-4 text-[15px] lg:text-[16px] bg-white border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:border-[#5B50D6] transition-colors"
    />
  </div>
);

export default ProductSearch;
