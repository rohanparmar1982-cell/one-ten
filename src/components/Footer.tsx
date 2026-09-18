import React, { useState } from 'react';
import { Page } from '../types';
import { Flame, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';
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
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e05326] to-[#9a2c08] flex items-center justify-center shadow-lg shadow-[#e05326]/20">
                <Flame className="w-5 h-5 text-[#f7f4eb]" />
              </div>
              <span className="font-serif text-2xl tracking-widest text-[#f4efe4] font-semibold">
                ONETEN
              </span>
            </div>

            <p className="text-sm italic font-serif text-[#c5a059] tracking-wider text-base">
              "{RESTAURANT_INFO.tagline}"
            </p>

            <p className="text-sm text-[#9e998c] leading-relaxed pr-4">
              Contemporary Indian cuisine crafted over flame, spice, and centuries-old royal traditions. Located along the vibrant dining corridor of Ahmedabad, Gujarat.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#14141c] hover:bg-[#e05326] text-[#b8b3a8] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#242430]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#14141c] hover:bg-[#e05326] text-[#b8b3a8] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#242430]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#14141c] hover:bg-[#e05326] text-[#b8b3a8] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#242430]"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe4] border-b border-[#22222c] pb-2 font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {(['home', 'menu', 'about', 'gallery', 'reservations', 'contact'] as Page[]).map((p) => (
                <li key={p}>
                  <button
                    id={`footer-link-${p}`}
                    onClick={() => handleNav(p)}
                    className="capitalize hover:text-[#f89e5a] transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-[#e05326] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
                    <span className="capitalize">{p}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe4] border-b border-[#22222c] pb-2 font-sans flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#e05326]" />
              <span>Opening Hours</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-[#c5a059] uppercase tracking-wider font-medium">Monday – Thursday</p>
                <p className="text-[#e2ded2] mt-0.5">12:00 PM – 11:00 PM</p>
              </div>
              <div>
                <p className="text-xs text-[#c5a059] uppercase tracking-wider font-medium">Friday – Sunday</p>
                <p className="text-[#e2ded2] mt-0.5">12:00 PM – 12:00 AM</p>
              </div>
              <div className="pt-2 text-xs text-[#8c877b]">
                <p>Lunch Service: 12:00 PM – 3:30 PM</p>
                <p>Dinner Service: 7:00 PM onward</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe4] border-b border-[#22222c] pb-2 font-sans">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e05326] shrink-0 mt-0.5" />
                <span className="text-[#b8b3a8]">
                  {RESTAURANT_INFO.address.line2}, {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e05326] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-[#b8b3a8] hover:text-[#f4efe4] transition-colors"
                >
                  {RESTAURANT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e05326] shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-[#b8b3a8] hover:text-[#f4efe4] transition-colors"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </li>
            </ul>

            {/* Newsletter input */}
            <div className="pt-2">
              <p className="text-xs text-[#a09a8e] mb-2 font-medium">Receive Chef's seasonal invitations:</p>
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
                  className="bg-[#e05326] hover:bg-[#eb5d2f] text-white px-3 py-2 rounded text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
              {newsletterSent && (
                <p className="text-[11px] text-[#4ade80] mt-1.5">Thank you for joining our private registry.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1a24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e796e]">
          <p>© 2026 OneTen. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#d4cebe] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-[#33333f]">•</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#d4cebe] transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
