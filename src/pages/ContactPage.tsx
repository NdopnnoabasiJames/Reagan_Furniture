import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PRODUCTS, CATEGORIES, getProduct } from '../data/products';

const SERIF = "'Playfair Display', Georgia, serif";

// Products grouped by category, sorted A–Z within each group.
// Computed once at module load — stays in sync automatically as the catalog grows.
const PRODUCTS_BY_CAT = CATEGORIES.map(cat => ({
  cat,
  items: PRODUCTS.filter(p => p.category === cat).sort((a, b) =>
    a.name.localeCompare(b.name)
  ),
})).filter(g => g.items.length > 0);

const ContactPage = () => {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    productId: '', productName: '', category: '', message: '',
  });

  // Pre-fill product + category when arriving from ?pid=<product-id>
  useEffect(() => {
    const pid = searchParams.get('pid');
    if (!pid) return;
    const p = getProduct(pid);
    if (!p) return;
    setForm(prev => ({ ...prev, productId: p.id, productName: p.name, category: p.category }));
  }, [searchParams]);

  const setField = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  // Changing the product dropdown always derives category from that product.
  // Clearing the selection resets both product and category.
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (!id) {
      setForm(prev => ({ ...prev, productId: '', productName: '', category: '' }));
      return;
    }
    const p = getProduct(id);
    if (!p) return;
    setForm(prev => ({ ...prev, productId: p.id, productName: p.name, category: p.category }));
  };

  const fieldCls =
    'w-full border border-gray-300 rounded-lg px-4 py-3.5 text-[16px] text-gray-700 ' +
    'placeholder:text-gray-400 focus:outline-none focus:border-[#5B50D6] transition-colors bg-white';

  const isCatLocked = !!form.productId;

  return (
    <>
      <Navbar />

      <main
        className="min-h-[80vh] py-16 md:py-20 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24"
        style={{ backgroundColor: '#F5F5F3' }}
      >
        <div className="max-w-[1060px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-14">

          {/* ── Left: copy ──────────────────────────────────────────── */}
          <div className="lg:pt-6 w-full lg:w-[42%] shrink-0">
            <h1
              className="text-[40px] md:text-[48px] leading-[1.08] text-gray-900 mb-6"
              style={{ fontFamily: SERIF }}
            >
              Let's talk about<br />your space
            </h1>
            <p className="text-gray-500 text-[16.5px] leading-[1.8]">
              Whether you're furnishing your home, upgrading your office, or
              looking for the perfect lifestyle essentials, we're here to help
              bring your vision to life.
            </p>
          </div>

          {/* ── Right: form card ────────────────────────────────────── */}
          <div className="flex-1 w-full bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <h2
              className="text-gray-800 text-[18px] font-medium mb-8"
              style={{ fontFamily: SERIF }}
            >
              Send an Enquiry
            </h2>

            <div className="space-y-5">

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                    First Name
                  </label>
                  <input
                    className={fieldCls}
                    placeholder="Raph"
                    value={form.firstName}
                    onChange={setField('firstName')}
                  />
                </div>
                <div>
                  <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    className={fieldCls}
                    placeholder="Dan"
                    value={form.lastName}
                    onChange={setField('lastName')}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className={fieldCls}
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={setField('email')}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={fieldCls}
                  placeholder="(+234) xxx xxx xxx"
                  value={form.phone}
                  onChange={setField('phone')}
                />
              </div>

              {/* Product — grouped by category, sorted A–Z within each group */}
              <div className="relative">
                <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                  Product
                </label>
                <select
                  className={`${fieldCls} appearance-none pr-10`}
                  value={form.productId}
                  onChange={handleProductChange}
                >
                  <option value="">Select a product</option>
                  {PRODUCTS_BY_CAT.map(({ cat, items }) => (
                    <optgroup key={cat} label={cat}>
                      {items.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="absolute right-4 text-gray-400 pointer-events-none"
                  style={{ bottom: '15px' }}
                />
              </div>

              {/* Category — derived from the selected product; freely editable otherwise */}
              <div className="relative">
                <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                  Category
                  {isCatLocked && (
                    <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5B50D6] bg-[#EEE9F6] px-1.5 py-0.5 rounded-sm">
                      Auto-filled
                    </span>
                  )}
                </label>
                <select
                  className={`${fieldCls} appearance-none pr-10 ${isCatLocked ? 'bg-gray-50 text-gray-500 cursor-default' : ''}`}
                  value={form.category}
                  onChange={setField('category')}
                  disabled={isCatLocked}
                >
                  <option value="" disabled>Select a category</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown
                  size={15}
                  className="absolute right-4 text-gray-400 pointer-events-none"
                  style={{ bottom: '15px' }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className={`${fieldCls} resize-none`}
                  placeholder="Tell us what you're looking for"
                  value={form.message}
                  onChange={setField('message')}
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full py-4 text-white text-[13.5px] font-semibold uppercase tracking-[0.16em] hover:brightness-110 active:brightness-90 transition-all duration-200"
                style={{ backgroundColor: '#5B50D6' }}
              >
                Send Enquiry
              </button>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
