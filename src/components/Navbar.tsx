import { useState, useEffect } from 'react';
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

  // Body scroll lock while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Escape key closes the drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <>
      {/* Backdrop — sits just below the sticky header, covers page content */}
      <div
        className="lg:hidden fixed inset-0 z-[49]"
        style={{
          backgroundColor: 'rgba(0,0,0,0.35)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
        onClick={() => setMobileOpen(false)}
      />

      <header className="sticky top-0 z-50 bg-[#f4f3f3] border-b border-gray-200/70">

        {/* ── Top bar ─────────────────────────────────────────────── */}
        <div className="mx-auto px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between h-[60px] md:h-[68px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={reaganLogo}
              alt=""
              aria-hidden="true"
              className="h-[44px] w-auto block shrink-0"
            />
            <span
              className="text-gray-900 font-bold text-[22px] leading-none"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Reagan
            </span>
          </Link>

          {/* Nav links — desktop only (lg+) */}
          <nav
            className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2"
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
            {/* Enquire button — tablet and desktop */}
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="hidden md:inline-block text-white text-[14px] font-semibold uppercase tracking-[0.14em] px-6 py-[11px] hover:brightness-110 active:brightness-90 transition-all duration-150 cursor-pointer"
              style={{ backgroundColor: '#5B50D6' }}
            >
              Enquire
            </button>

            {/* Hamburger — mobile + tablet */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden p-1.5 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile + Tablet drawer — always rendered, animated via CSS grid ── */}
        <div
          className="lg:hidden"
          style={{
            display: 'grid',
            gridTemplateRows: mobileOpen ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div
            className="overflow-hidden"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            <div className="bg-[#f4f3f3] border-t border-gray-200/70 px-5 pt-4 pb-6">
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

              {/* Enquire in drawer — mobile only (tablet shows it in the header) */}
              <button
                type="button"
                onClick={() => { navigate('/contact'); setMobileOpen(false); }}
                className="md:hidden mt-5 block w-full text-center text-white text-[14px] font-semibold uppercase tracking-[0.14em] py-3.5 cursor-pointer"
                style={{ backgroundColor: '#5B50D6' }}
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
