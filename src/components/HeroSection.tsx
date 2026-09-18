import React from 'react';
import { Page } from '../types';
import { ChevronDown, Sparkles, Flame, Calendar, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const scrollToNext = () => {
    const intro = document.getElementById('restaurant-intro-section');
    if (intro) {
      intro.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0e]"
    >
      {/* Background Image with Cinematic Pan/Zoom */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Ember and Spice contemporary dining atmosphere"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_14s_ease-in-out_infinite] filter brightness-[0.45] contrast-[1.08]"
          loading="eager"
        />
        {/* Multi-tier Dark Gradients for contrast and luxury atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/60 to-[#0b0b0e]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0b0e]/50 to-[#0b0b0e]" />
        {/* Ember tint accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e05326]/10 via-transparent to-[#c5a059]/10 mix-blend-screen pointer-events-none" />
      </div>

      {/* Floating subtle ember decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#e05326] opacity-60 animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#f89e5a] opacity-40 blur-[1px] animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-[#c5a059] opacity-70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Eyebrow / Region Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#171722]/80 border border-[#c5a059]/30 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
          <Flame className="w-3.5 h-3.5 text-[#e05326] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e3ded2] font-medium font-sans">
            North Indian Restaurant & Banquet · Chandkheda, Ahmedabad
          </span>
          <Sparkles className="w-3 h-3 text-[#c5a059]" />
        </div>

        {/* Gujarati Name Display */}
        <p className="text-lg sm:text-xl font-medium text-[#c5a059] tracking-wider mb-2">
          વન ટેન રેસ્ટોરન્ટ એન્ડ બેન્ક્વેટ
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#f4efe4] font-normal tracking-tight leading-[1.08] mb-6 drop-shadow-2xl">
          ONE TEN <br className="hidden sm:inline" />
          <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f89e5a] via-[#f4efe4] to-[#c5a059]">
            RESTAURANT & BANQUET
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#d4cebe] font-sans font-normal leading-relaxed mb-8 text-balance drop-shadow">
          Vegetarian North Indian & Indo-Chinese dining, famous fixed Punjabi thalis, and a premier 1,700 sq. ft. banquet venue for unforgettable celebrations.
        </p>

        {/* Services pill */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#a09b8e] mb-8 font-medium">
          <span className="px-3 py-1 rounded-full bg-[#181824] border border-[#2c2c3e]">Dine-in</span>
          <span>•</span>
          <span className="px-3 py-1 rounded-full bg-[#181824] border border-[#2c2c3e]">Takeaway</span>
          <span>•</span>
          <span className="px-3 py-1 rounded-full bg-[#181824] border border-[#2c2c3e]">No-contact delivery</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-explore-menu-btn"
            onClick={() => {
              onNavigate('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#181822] hover:bg-[#222230] text-[#f4efe4] text-xs sm:text-sm uppercase tracking-widest font-semibold border border-[#383849] hover:border-[#c5a059] transition-all duration-300 group shadow-lg shadow-black/50 active:scale-95 cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4 text-[#e05326] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-explore-banquet-btn"
            onClick={() => {
              onNavigate('banquet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#20202e] hover:bg-[#2a2a3e] text-[#c5a059] text-xs sm:text-sm uppercase tracking-widest font-semibold border border-[#c5a059]/40 hover:border-[#c5a059] transition-all duration-300 shadow-lg shadow-black/50 active:scale-95 cursor-pointer"
          >
            <span>Banquet Halls (50–500)</span>
          </button>

          <button
            id="hero-reserve-table-btn"
            onClick={() => {
              onNavigate('reservations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-[#f7f4eb] text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl shadow-[#e05326]/30 hover:shadow-2xl hover:shadow-[#e05326]/50 border border-[#f89e5a]/40 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Table</span>
          </button>
        </div>

        {/* Key credentials bar from PDF */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-3xl text-center">
          <div>
            <p className="text-xl sm:text-2xl font-serif text-[#f4efe4]">3.7 ★</p>
            <p className="text-[11px] uppercase tracking-wider text-[#9d978a] mt-0.5">1,704 Google Reviews</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-serif text-[#f4efe4]">₹200–₹400</p>
            <p className="text-[11px] uppercase tracking-wider text-[#9d978a] mt-0.5">Approx. Per Person</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-serif text-[#f4efe4]">1,700 sq. ft.</p>
            <p className="text-[11px] uppercase tracking-wider text-[#9d978a] mt-0.5">Banquet Hall Space</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-serif text-[#f4efe4]">Chandkheda</p>
            <p className="text-[11px] uppercase tracking-wider text-[#9d978a] mt-0.5">Highway Mall · Ahmedabad</p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll-Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#9d978a] hover:text-[#f4efe4] transition-colors group cursor-pointer focus:outline-none"
        aria-label="Scroll down to restaurant introduction"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium opacity-80 group-hover:opacity-100">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-[#e05326] animate-bounce" />
        </div>
        <ChevronDown className="w-4 h-4 -mt-1 text-[#e05326] animate-pulse" />
      </button>
    </section>
  );
};
