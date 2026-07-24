import type { Product } from '../../data/products';
import Reveal from '../ui/Reveal';

const SERIF = "'Playfair Display', Georgia, serif";

interface ProductCardGridProps {
  product: Product;
  delay?: number;
  onNavigate: (id: string) => void;
  onEnquire: (id: string) => void;
}

interface ProductCardListProps {
  product: Product;
  onNavigate: (id: string) => void;
  onEnquire: (id: string) => void;
}

export const ProductCardGrid = ({ product: p, delay = 0, onNavigate, onEnquire }: ProductCardGridProps) => (
  <Reveal delay={delay}>
    <div
      onClick={() => onNavigate(p.id)}
      className="bg-white overflow-hidden cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
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
              fontSize: '8px', letterSpacing: '0.06em',
              top: '13px', left: '-19px', width: '70px', padding: '3px 0',
              backgroundColor: '#F59E0B', transform: 'rotate(-45deg)',
            }}
          >
            NEW
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-[11.5px] uppercase tracking-[0.18em] text-gray-400 mb-1.5">{p.category}</p>
        <h3
          className="text-[16px] font-semibold text-gray-900 mb-2 leading-snug"
          style={{ fontFamily: SERIF }}
        >
          {p.name}
        </h3>
        <p className="text-[14.5px] text-gray-500 leading-[1.65] mb-4 line-clamp-2">{p.description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-[15px] font-bold text-gray-900" style={{ fontFamily: SERIF }}>{p.price}</span>
          <button
            type="button"
            onClick={e => { e.stopPropagation(); onEnquire(p.id); }}
            className="text-[12px] uppercase tracking-[0.14em] font-semibold text-gray-500 hover:text-[#5B50D6] transition-colors flex items-center gap-1"
          >
            Enquire <span className="text-[14px]">→</span>
          </button>
        </div>
      </div>
    </div>
  </Reveal>
);

export const ProductCardList = ({ product: p, onNavigate, onEnquire }: ProductCardListProps) => (
  <div
    onClick={() => onNavigate(p.id)}
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
      <h3 className="text-[16px] font-semibold text-gray-900 mb-1.5 leading-snug" style={{ fontFamily: SERIF }}>
        {p.name}
      </h3>
      <p className="text-[14.5px] text-gray-500 leading-[1.65] mb-3 line-clamp-2">{p.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-bold text-gray-900" style={{ fontFamily: SERIF }}>{p.price}</span>
        <button
          type="button"
          onClick={e => { e.stopPropagation(); onEnquire(p.id); }}
          className="text-[12px] uppercase tracking-[0.14em] font-semibold text-gray-500 hover:text-[#5B50D6] transition-colors flex items-center gap-1"
        >
          Enquire <span>→</span>
        </button>
      </div>
    </div>
  </div>
);
