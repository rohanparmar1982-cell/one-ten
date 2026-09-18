import React from 'react';
import { Page } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { Flame, Sparkles, Building2, Utensils, HeartHandshake, ArrowRight, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO, VENUE_VISUAL_REFERENCES } from '../data/restaurantData';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* 1. Page Hero: "OUR STORY" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171724] border border-[#c5a059]/30 mb-4">
          <Flame className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e3ded2] font-medium font-sans">
            One Ten Restaurant & Banquet · Chandkheda
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
        </div>

        <p className="text-lg sm:text-xl font-medium text-[#c5a059] tracking-wider mb-2">
          {RESTAURANT_INFO.gujaratiName}
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#f4efe4] font-normal tracking-tight mb-6">
          OUR PROFILE & STORY
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#d4cebe] font-sans leading-relaxed text-balance">
          Situated at Highway Mall on GJ SH 41, Chandkheda, One Ten Restaurant & Banquet has grown into a landmark venue for rich North Indian dining, value-packed Punjabi thalis, and spacious celebrations.
        </p>
      </div>

      {/* Editorial Feature Image with Quote */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-3xl overflow-hidden border border-[#242433] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
            alt="One Ten Restaurant dining hall and banquet setup"
            className="w-full h-[380px] sm:h-[500px] object-cover filter brightness-[0.55]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/40 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium font-sans">
              Google Maps Verified Sentiment
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#f4efe4] mt-2 leading-tight">
              "Very good option for tasty and delicious vegetarian food, polite staff, and value-for-money feasts."
            </blockquote>
          </div>
        </div>
      </div>

      {/* 2. Section: "Our Philosophy & Core Pillars" */}
      <section id="our-philosophy" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium">
              Restaurant & Banquet Hall
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe4] font-normal leading-tight">
              THE ONE TEN PROMISE
            </h2>
            <div className="w-12 h-0.5 bg-[#c5a059]" />
            <p className="text-sm sm:text-base text-[#d4cebe] leading-relaxed">
              We bridge authentic North Indian culinary heritage with honest hospitality and practical banquet solutions. From our everyday diners enjoying hot tandoori rotis with Paneer Angara to 300+ guests attending weddings, our focus remains unwavering: flavor, cleanliness, and value.
            </p>
            <p className="text-xs sm:text-sm text-[#9e988c] leading-relaxed">
              Serving Chandkheda, Motera, Sabarmati, and Gandhinagar highway travelers, our venue is designed with ample parking at Highway Mall, full air conditioning, and professional kitchen setups.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <Utensils className="w-7 h-7 text-[#e05326] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">Signature Paneer & Tandoor</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                Known across Chandkheda for Paneer Angara, Paneer Butter Masala, Handi Paneer, and sizzling Paneer Tikka Dry roasted in clay tandoors.
              </p>
            </div>
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <Building2 className="w-7 h-7 text-[#c5a059] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">1,700 sq. ft. Banquet</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                Two halls with combined seating of ~200 seated / 300 maximum capacity, supporting 50 to 500 guests with catering from ₹245–₹300+ per plate.
              </p>
            </div>
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <Sparkles className="w-7 h-7 text-[#f89e5a] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">Fixed & Unlimited Thalis</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                Fulfilling lunches and dinners starting at ₹220, praised by thousands of Google reviewers for value, taste, and speed.
              </p>
            </div>
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <HeartHandshake className="w-7 h-7 text-[#4ade80] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">Attentive Hospitality</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                Courteous and polite staff dedicated to making family dinners, wedding receptions, engagements, and corporate meetings completely stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: Banquet Specifications & Capabilities */}
      <section id="banquet-capabilities" className="py-20 bg-[#0e0e14] border-y border-[#1a1a24] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Event & Celebration Spaces"
            title="BANQUET INFRASTRUCTURE"
            subtitle="Details and capacities for hosting your dream celebrations at Highway Mall."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#13131b] rounded-2xl overflow-hidden border border-[#22222f] p-6 space-y-4">
              <span className="text-[10px] uppercase tracking-wider text-[#e05326] font-semibold">Dimensions</span>
              <h4 className="font-serif text-2xl text-[#f4efe4]">1,700 Sq. Ft. Hall Space</h4>
              <p className="text-xs text-[#9e988c] leading-relaxed">
                Featuring two halls that can be merged or partitioned. Third-party verified listings report ~200 seated guests and 300 maximum capacity, with flexible layouts supporting 50 to 500 guests.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1b1b26] text-[11px] text-[#c5a059] border border-[#2a2a3a]">
                  Central AC & Stage Options
                </span>
              </div>
            </div>

            <div className="bg-[#13131b] rounded-2xl overflow-hidden border border-[#22222f] p-6 space-y-4">
              <span className="text-[10px] uppercase tracking-wider text-[#c5a059] font-semibold">Catering & Menus</span>
              <h4 className="font-serif text-2xl text-[#f4efe4]">₹245–₹300+ / Plate</h4>
              <p className="text-xs text-[#9e988c] leading-relaxed">
                Pure vegetarian catering with multi-course North Indian, Indo-Chinese, live chaat, freshly baked tandoor breads, and traditional Indian sweets. Custom Jain food preparation available.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1b1b26] text-[11px] text-[#c5a059] border border-[#2a2a3a]">
                  Vegetarian-Focused Venue
                </span>
              </div>
            </div>

            <div className="bg-[#13131b] rounded-2xl overflow-hidden border border-[#22222f] p-6 space-y-4">
              <span className="text-[10px] uppercase tracking-wider text-[#f89e5a] font-semibold">Events Supported</span>
              <h4 className="font-serif text-2xl text-[#f4efe4]">Versatile Celebrations</h4>
              <p className="text-xs text-[#9e988c] leading-relaxed">
                Weddings, engagements, receptions, birthday parties, baby showers, anniversaries, and corporate seminars. Full audio/PA support and banquet setup.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1b1b26] text-[11px] text-[#c5a059] border border-[#2a2a3a]">
                  Highway Mall Parking
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. External Visual References mention from PDF Page 4 */}
      <section id="visual-references" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#13131c] rounded-3xl border border-[#272737] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-semibold">
              Authentic Visual Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#f4efe4] mt-2 mb-3">
              VERIFIED PHOTO ARCHIVES & PROFILES
            </h2>
            <p className="text-xs sm:text-sm text-[#9e988c]">
              Explore photo galleries, reviews, and event setups as referenced in our venue documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VENUE_VISUAL_REFERENCES.map((ref) => (
              <a
                key={ref.source}
                href={ref.url}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl bg-[#181824] border border-[#2a2a3b] hover:border-[#c5a059]/60 hover:bg-[#1f1f2e] transition-all group block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059]">
                    {ref.source}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#8a8579] group-hover:text-[#f4efe4] transition-colors" />
                </div>
                <h4 className="font-serif text-lg text-[#f4efe4] mb-2">{ref.title}</h4>
                <p className="text-xs text-[#9d978a] leading-relaxed">{ref.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: "Location & Visit" */}
      <section id="visit-us-cta" className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
          Visit Us in Chandkheda
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe4] mt-2 mb-6">
          EXPERIENCE ONE TEN
        </h2>
        <p className="text-base text-[#b8b3a8] leading-relaxed mb-8">
          Located at Highway Mall on GJ SH 41, opposite Satyamave Hospital, Chandkheda, Ahmedabad. Open daily 11:00 AM – 11:00 PM for dine-in, takeaway, delivery, and banquet reservations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              onNavigate('reservations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-xl shadow-[#e05326]/30 border border-[#f89e5a]/30 cursor-pointer"
          >
            <span>Book Table</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onNavigate('banquet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1b1b28] hover:bg-[#252538] text-[#c5a059] text-xs uppercase tracking-widest font-semibold border border-[#c5a059]/40 hover:border-[#c5a059] transition-all cursor-pointer"
          >
            <span>Inquire for Banquet</span>
          </button>
        </div>
      </section>
    </div>
  );
};
