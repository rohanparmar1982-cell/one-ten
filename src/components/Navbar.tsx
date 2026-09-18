import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Menu, X, Flame, Calendar, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Menu', page: 'menu' },
    { label: 'About', page: 'about' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Reservations', page: 'reservations' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d12]/95 backdrop-blur-md py-3.5 border-b border-[#24242e] shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-[#0b0b0e]/90 via-[#0b0b0e]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e05326] rounded p-1"
            aria-label="OneTen Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#e05326] to-[#9a2c08] flex items-center justify-center shadow-lg shadow-[#e05326]/20 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-5 h-5 text-[#f7f4eb]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-wider text-[#f4efe4] font-semibold group-hover:text-[#f89e5a] transition-colors">
                ONETEN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#c5a059] uppercase -mt-0.5">
                Fine Dining · Ahmedabad
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative text-sm tracking-widest uppercase transition-colors duration-200 py-1 font-medium ${
                    isActive
                      ? 'text-[#f4efe4] font-semibold'
                      : 'text-[#b8b3a8] hover:text-[#f4efe4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e05326] via-[#f89e5a] to-[#c5a059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Reserve Button & Phone Quick Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-xs text-[#b8b3a8] hover:text-[#f4efe4] transition-colors px-2 py-1"
              title="Call OneTen"
            >
              <Phone className="w-3.5 h-3.5 text-[#e05326]" />
              <span>{RESTAURANT_INFO.phoneFormatted}</span>
            </a>

            <button
              id="desktop-reserve-cta"
              onClick={() => handleLinkClick('reservations')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] active:scale-[0.98] text-[#f7f4eb] text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md shadow-[#e05326]/25 hover:shadow-lg hover:shadow-[#e05326]/40 border border-[#f89e5a]/30"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Right Controls: Reserve Button & Hamburger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              id="mobile-quick-reserve-btn"
              onClick={() => handleLinkClick('reservations')}
              className="px-3.5 py-1.5 rounded-full bg-[#e05326] text-[#f7f4eb] text-[11px] uppercase tracking-wider font-semibold shadow-sm"
            >
              Reserve
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#f4efe4] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#e05326]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#e05326]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0d0d12]/98 backdrop-blur-xl border-b border-[#272733] px-6 pt-4 pb-8 transition-all animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`mobile-nav-${link.page}`}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left py-3 px-3 rounded-lg text-base tracking-wider uppercase font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1a1a24] text-[#f89e5a] border-l-2 border-[#e05326]'
                      : 'text-[#d4cebe] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#e05326]"></span>}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#22222d] flex flex-col gap-3">
              <button
                id="mobile-drawer-reserve-btn"
                onClick={() => handleLinkClick('reservations')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#e05326] text-[#f7f4eb] text-sm uppercase tracking-widest font-semibold shadow-lg shadow-[#e05326]/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#9d978a] px-2 pt-2">
                <span>Direct Line:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-[#f4efe4] underline underline-offset-2"
                >
                  {RESTAURANT_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
