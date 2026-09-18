import React, { useState } from 'react';
import { Page } from '../types';
import { Flame, MapPin, Phone, Mail, Clock, Globe, Building2, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSent(false);
    }, 4000);
  };

  const footerLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Menu & Thalis', page: 'menu' },
    { label: 'Banquet & Events (1,700 sq. ft.)', page: 'banquet' },
    { label: 'About Us & Profile', page: 'about' },
    { label: 'Photo Gallery', page: 'gallery' },
    { label: 'Book Table / Event', page: 'reservations' },
    { label: 'Contact & Directions', page: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#08080a] text-[#d4cebe] border-t border-[#1c1c24] relative overflow-hidden">
      {/* Decorative subtle ambient fire glow in corner */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e05326]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e05326] to-[#9a2c08] flex items-center justify-center shadow-lg shadow-[#e05326]/20">
                <Flame className="w-5 h-5 text-[#f7f4eb]" />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-wider text-[#f4efe4] font-bold">
                  ONE TEN
                </span>
                <span className="block text-[11px] text-[#c5a059] font-medium tracking-wide">
                  {RESTAURANT_INFO.gujaratiName}
                </span>
              </div>
            </div>

            <p className="text-sm font-serif text-[#c5a059] tracking-wider">
              {RESTAURANT_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#9e998c] leading-relaxed pr-4">
              Authentic North Indian & Indo-Chinese dining, popular fixed Punjabi thalis, and a premier 1,700 sq. ft. banquet venue for 50–500 guests at Highway Mall, Chandkheda.
            </p>

            {/* Quick credentials badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded bg-[#151520] border border-[#272738] text-[#c5a059]">
                ★ 3.7 (1,704 Google Reviews)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#151520] border border-[#272738] text-[#4ade80]">
                ₹200–₹400 / person
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe4] border-b border-[#22222c] pb-2 font-sans">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.map((item) => (
                <li key={item.page}>
                  <button
                    id={`footer-link-${item.page}`}
                    onClick={() => handleNav(item.page)}
                    className="hover:text-[#f89e5a] transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#e05326] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours & Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe4] border-b border-[#22222c] pb-2 font-sans flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#e05326]" />
              <span>Timings</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <p className="text-xs text-[#c5a059] uppercase tracking-wider font-medium">Daily Hours</p>
                <p className="text-[#e2ded2] mt-0.5">11:00 AM – 11:00 PM</p>
              </div>
              <div className="pt-2 border-t border-[#1e1e28]">
                <p className="text-xs text-[#c5a059] uppercase tracking-wider font-medium">Fixed Thali</p>
                <p className="text-[#9e988c] mt-0.5">Lunch: 11:30 AM – 3:30 PM</p>
              </div>
              <div className="pt-2 border-t border-[#1e1e28] text-xs text-[#8c877b]">
                <p>• Dine-in</p>
                <p>• Takeaway</p>
                <p>• No-contact delivery</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe4] border-b border-[#22222c] pb-2 font-sans">
              Address & Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e05326] shrink-0 mt-0.5" />
                <span className="text-[#b8b3a8]">
                  {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.line2}, Chandkheda, Ahmedabad 382424
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e05326] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-[#b8b3a8] hover:text-[#f4efe4] transition-colors font-mono"
                >
                  {RESTAURANT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={`https://${RESTAURANT_INFO.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b8b3a8] hover:text-[#f4efe4] transition-colors"
                >
                  {RESTAURANT_INFO.website}
                </a>
              </li>
            </ul>

            {/* Newsletter input */}
            <div className="pt-2">
              <p className="text-xs text-[#a09a8e] mb-2 font-medium">Offers & Banquet Updates:</p>
              <form onSubmit={handleNewsletter} className="flex gap-1.5">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-[#13131a] border border-[#262633] text-xs px-3 py-2 rounded text-[#f4efe4] placeholder-[#66635c] focus:outline-none focus:border-[#e05326] w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#e05326] hover:bg-[#eb5d2f] text-white px-3 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </form>
              {newsletterSent && (
                <p className="text-[11px] text-[#4ade80] mt-1.5">Thank you for joining our newsletter.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1a24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e796e]">
          <p>© 2026 One Ten Restaurant & Banquet. All rights reserved. Chandkheda, Ahmedabad.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#d4cebe] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#33333f]">•</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#d4cebe] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
