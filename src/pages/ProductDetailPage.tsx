import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProduct, PRODUCTS } from '../data/products';

const SERIF = "'Playfair Display', Georgia, serif";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProduct(id ?? '');
  const [mainImg, setMainImg] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-8">
          <p className="text-gray-500 text-[15px]">Product not found.</p>
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="text-[13px] uppercase tracking-[0.15em] font-semibold text-[#5B50D6] hover:underline"
          >
            ← Back to collection
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const gallery = product.gallery ?? [product.image];
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handlePrev = () => setMainImg(i => (i === 0 ? gallery.length - 1 : i - 1));
  const handleNext = () => setMainImg(i => (i === gallery.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
    setTouchStartX(null);
  };

  return (
    <>
      <Navbar />

      <main className="bg-white py-10 md:py-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13.5px] text-gray-400 uppercase tracking-[0.12em] mb-10">
          <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-gray-700 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ── Left: image gallery ─────────────────────────────── */}
          <div className="lg:w-[58%] shrink-0">

            {/* Main image */}
            <div
              className="relative overflow-hidden mb-4 select-none"
              style={{ height: '480px', backgroundColor: product.imageVariant === 'portrait' ? '#F7F6F3' : '#F9FAFB' }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                key={mainImg}
                src={gallery[mainImg]}
                alt={product.name}
                className={`w-full h-full transition-opacity duration-300 ${product.imageVariant === 'portrait' ? 'object-contain' : 'object-cover'}`}
                style={{ objectPosition: product.objectPos ?? 'center' }}
              />

              {/* Prev / Next arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/85 hover:bg-white shadow-sm text-gray-700 text-xl font-light transition-all duration-150"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/85 hover:bg-white shadow-sm text-gray-700 text-xl font-light transition-all duration-150"
                  >
                    ›
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {gallery.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setMainImg(i)}
                        aria-label={`Image ${i + 1}`}
                        className={`rounded-full transition-all duration-200 ${
                          mainImg === i
                            ? 'w-4 h-1.5 bg-white'
                            : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails — horizontally scrollable */}
            {gallery.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setMainImg(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`overflow-hidden shrink-0 transition-all duration-150 border-2 ${
                      mainImg === i
                        ? 'border-[#5B50D6]'
                        : 'border-transparent opacity-55 hover:opacity-100'
                    }`}
                    style={{ width: '88px', height: '72px', ...(product.imageVariant === 'portrait' ? { backgroundColor: '#F7F6F3' } : {}) }}
                  >
                    <img
                      src={img}
                      alt={`View ${i + 1}`}
                      className={`w-full h-full ${product.imageVariant === 'portrait' ? 'object-contain' : 'object-cover'}`}
                      style={{ objectPosition: product.objectPos ?? 'center' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: product info ─────────────────────────────── */}
          <div className="flex-1 flex flex-col">

            {/* Category */}
            <p className="text-[12.5px] uppercase tracking-[0.18em] text-gray-400 mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              className="text-[32px] md:text-[40px] leading-[1.08] text-gray-900 mb-4"
              style={{ fontFamily: SERIF }}
            >
              {product.name}
            </h1>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="text-[14px] text-gray-400 ml-1">(5.0)</span>
            </div>

            {/* Price */}
            <div
              className="text-[28px] font-bold text-gray-900 mb-6"
              style={{ fontFamily: SERIF }}
            >
              {product.price}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-[16.5px] leading-[1.85] mb-8">
              {product.description}
            </p>

            {/* Specs */}
            {product.specs && (
              <div className="mb-8">
                <h3 className="text-[13px] uppercase tracking-[0.16em] font-semibold text-gray-700 mb-3">
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.specs.map(s => (
                    <li key={s} className="flex items-center gap-2.5 text-[15.5px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B50D6] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-gray-100 mb-8" />

            {/* Contact to Enquire */}
            <div className="bg-[#F5F5F3] p-6 mb-6">
              <p className="text-[13px] uppercase tracking-[0.15em] font-semibold text-gray-500 mb-1">
                Contact to Enquire
              </p>
              <p className="text-[15px] text-gray-500 leading-[1.7] mb-5">
                Interested in this product? Send us an enquiry and our team will get back to you within 24 hours.
              </p>
              <Link
                to={`/contact?pid=${product.id}`}
                className="block w-full text-center text-white text-[13.5px] font-semibold uppercase tracking-[0.16em] py-4 rounded-[8px] hover:brightness-110 active:brightness-90 transition-all duration-200"
                style={{ backgroundColor: '#5B50D6' }}
              >
                Send Enquiry →
              </Link>
            </div>

            {/* Back link */}
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="text-[13px] uppercase tracking-[0.14em] text-gray-400 hover:text-gray-700 transition-colors text-left flex items-center gap-1.5"
            >
              ← Back to collection
            </button>
          </div>
        </div>

        {/* ── Related products ───────────────────────────────────── */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-28 pt-10 border-t border-gray-100">
            <h2
              className="text-[24px] md:text-[30px] font-semibold text-gray-900 mb-8"
              style={{ fontFamily: SERIF }}
            >
              You may also like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map(p => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/products/${p.id}`)}
                  className="bg-white border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300 group"
                >
                  <div
                    className="overflow-hidden"
                    style={{ height: '180px', ...(p.imageVariant === 'portrait' ? { backgroundColor: '#F7F6F3' } : {}) }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className={`w-full h-full transition-transform duration-500 ${p.imageVariant === 'portrait' ? 'object-contain' : 'object-cover group-hover:scale-105'}`}
                      style={{ objectPosition: p.objectPos ?? 'center' }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11.5px] uppercase tracking-[0.16em] text-gray-400 mb-1">{p.category}</p>
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-2 leading-snug" style={{ fontFamily: SERIF }}>
                      {p.name}
                    </h4>
                    <p className="text-[16px] font-bold text-gray-900" style={{ fontFamily: SERIF }}>
                      {p.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
