import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SERIF = "'Playfair Display', Georgia, serif";
const CATS  = ['Home Furniture', 'Office Furniture', 'Electronics', 'Wines', 'Kitchen Wares'];

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', category: '', message: '',
  });
//Testing vercel deployment
  const set = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const field =
    'w-full border border-gray-300 rounded-lg px-4 py-3.5 text-[16px] text-gray-700 ' +
    'placeholder:text-gray-400 focus:outline-none focus:border-[#5B50D6] transition-colors bg-white';

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
                    className={field}
                    placeholder="Raph"
                    value={form.firstName}
                    onChange={set('firstName')}
                  />
                </div>
                <div>
                  <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    className={field}
                    placeholder="Dan"
                    value={form.lastName}
                    onChange={set('lastName')}
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
                  className={field}
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={set('email')}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={field}
                  placeholder="(+234) xxx xxx xxx"
                  value={form.phone}
                  onChange={set('phone')}
                />
              </div>

              {/* Category */}
              <div className="relative">
                <label className="block text-[12.5px] font-semibold uppercase tracking-[0.13em] text-gray-500 mb-2">
                  Category
                </label>
                <select
                  className={`${field} appearance-none pr-10`}
                  value={form.category}
                  onChange={set('category')}
                >
                  <option value="" disabled>Select a  category</option>
                  {CATS.map(c => <option key={c} value={c}>{c}</option>)}
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
                  className={`${field} resize-none`}
                  placeholder="Tell us what you're looking for"
                  value={form.message}
                  onChange={set('message')}
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
