import { useMemo } from 'react';

interface ProductPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (n: number) => void;
}

const ProductPagination = ({ page, totalPages, onPageChange }: ProductPaginationProps) => {
  const nums = useMemo((): (number | '...')[] => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 3)               return [1, 2, 3, 4, '...', totalPages];
    if (page >= totalPages - 2)  return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', page - 1, page, page + 1, '...', totalPages];
  }, [page, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1.5 mt-12">
      {nums.map((n, i) =>
        n === '...' ? (
          <span key={`e${i}`} className="px-1.5 text-[15px] text-gray-400 select-none">...</span>
        ) : (
          <button
            key={n}
            type="button"
            onClick={() => onPageChange(n as number)}
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
  );
};

export default ProductPagination;
