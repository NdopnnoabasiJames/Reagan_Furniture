import { useNavigate } from 'react-router-dom';
import { FEATURED } from '../data/products';

const SERIF = "'Playfair Display', Georgia, serif";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 md:py-24 px-5 sm:px-12 md:px-16 lg:px-20 xl:px-24">

      {/* Header */}
      <div className="flex items-end justify-between mb-7 md:mb-16">
        <h2
          className="text-[32px] md:text-[52px] lg:text-[58px] font-bold uppercase leading-[0.92] tracking-[-0.01em] text-gray-900"
          style={{ fontFamily: SERIF }}
        >
          Feature<br />Products
        </h2>
        <button
          type="button"
          onClick={() => navigate('/products')}
          className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.15em] text-gray-700 hover:text-[#5B50D6] transition-colors flex items-center gap-1 shrink-0 pb-1"
        >
          See All <span>→</span>
        </button>
      </div>

      {/* Cards — horizontal on mobile, grid on sm+ */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {FEATURED.map(p => (
          <div
            key={p.id}
            onClick={() => navigate(`/products/${p.id}`)}
            className="flex flex-row sm:flex-col border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-[130px] sm:h-auto"
          >
            {/* Image */}
            <div
              className="relative overflow-hidden shrink-0 w-[36%] sm:w-full h-full sm:h-[220px]"
              style={p.imageVariant === 'portrait' ? { backgroundColor: '#F7F6F3' } : undefined}
            >
              <img
                src={p.image}
                alt={p.name}
                className={`w-full h-full transition-transform duration-500 ${p.imageVariant === 'portrait' ? 'object-contain' : 'object-cover group-hover:scale-105'}`}
                style={{ objectPosition: p.objectPos ?? 'center' }}
              />
              {/* NEW ribbon */}
              <div className="absolute top-0 left-0 overflow-hidden" style={{ width: 48, height: 48 }}>
                <div
                  className="absolute flex items-center justify-center text-white font-bold uppercase"
                  style={{
                    fontSize: '7px',
                    letterSpacing: '0.05em',
                    top: '11px',
                    left: '-17px',
                    width: '64px',
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
            <div className="px-3 py-2.5 sm:p-5 flex flex-col flex-1 justify-between min-w-0 overflow-hidden">
              <div className="min-w-0">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] text-gray-400 mb-0.5 sm:mb-1.5 truncate">
                  {p.category}
                </p>
                <h3
                  className="text-[15px] sm:text-[17px] font-semibold text-gray-900 mb-0.5 sm:mb-2.5 leading-snug line-clamp-2"
                  style={{ fontFamily: SERIF }}
                >
                  {p.name}
                </h3>
                <p className="text-[13px] sm:text-[15px] text-gray-500 leading-[1.55] line-clamp-1 sm:line-clamp-2 hidden xs:block sm:block">
                  {p.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2 sm:mt-0">
                <span
                  className="text-[14px] sm:text-[15px] font-bold text-gray-900"
                  style={{ fontFamily: SERIF }}
                >
                  {p.price}
                </span>
                <button
                  type="button"
                  onClick={e => { e.stopPropagation(); navigate(`/contact?pid=${p.id}`); }}
                  className="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] font-semibold text-gray-500 hover:text-[#5B50D6] transition-colors flex items-center gap-0.5"
                >
                  Enquire <span className="text-[12px]">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
