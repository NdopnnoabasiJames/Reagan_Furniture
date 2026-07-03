import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import reaganLogo from '../assets/Reagan_Logo_transparent.png';

const NAV_LINKS = [
  { label: 'Categories', href: '/categories' },
  { label: 'Products',   href: '/products' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
] as const;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-[#f4f3f3] border-b border-gray-200/70">

      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div className="mx-auto px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between h-[60px] md:h-[68px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <div className="w-[80px] md:w-[58px] overflow-hidden shrink-0 self-center flex items-center" style={{ height: '62px' }}>
            <img
              src={reaganLogo}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain object-left block"
            />
          </div>
          <span
            className="text-gray-900 font-bold text-[28px] md:text-[22px] leading-none self-center"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Reagan
          </span>
        </Link>

        {/* Nav links — desktop only */}
        <nav
          className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `text-[14.5px] uppercase tracking-[0.1em] font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-gray-900 underline underline-offset-4 decoration-gray-900 decoration-[1.5px]'
                    : 'text-gray-500 hover:text-gray-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Enquire button — only show alongside nav links */}
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="hidden md:inline-block text-white text-[14px] font-semibold uppercase tracking-[0.14em] px-6 py-[11px] hover:brightness-110 active:brightness-90 transition-all duration-150 cursor-pointer"
            style={{ backgroundColor: '#5B50D6' }}
          >
            Enquire
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden p-1.5 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f4f3f3] border-t border-gray-200/70 px-5 pt-4 pb-6">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink
                key={label}
                to={href}
                className={({ isActive }) =>
                  `text-[15px] uppercase tracking-[0.1em] font-medium py-3 border-b border-gray-200/60 transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => { navigate('/contact'); setMobileOpen(false); }}
            className="mt-5 block w-full text-center text-white text-[14px] font-semibold uppercase tracking-[0.14em] py-3.5 cursor-pointer"
            style={{ backgroundColor: '#5B50D6' }}
          >
            Enquire
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
