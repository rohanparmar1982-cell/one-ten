import React from 'react';
import { Page } from '../types';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { FoodCard } from '../components/FoodCard';
import { FeatureCard } from '../components/FeatureCard';
import { TestimonialSection } from '../components/TestimonialSection';
import { SocialGallerySection } from '../components/SocialGallerySection';
import { SIGNATURE_DISHES, WHY_CHOOSE_US } from '../data/restaurantData';
import { ArrowRight, Sparkles, Calendar, UtensilsCrossed } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleDishAction = () => {
    onNavigate('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Restaurant Introduction (Two-column section) */}
      <section id="restaurant-intro-section" className="py-20 md:py-32 bg-[#0b0b0e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Restaurant Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#262635] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Ember & Spice interior ambience and dining room"
                  className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/70 via-transparent to-transparent" />
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#161622] border border-[#333344] p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md max-w-[220px]">
                <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold">Legacy & Craft</span>
                </div>
                <p className="text-xs text-[#d4cebe] leading-tight font-serif italic">
                  "Respecting the flame, honoring the heritage."
                </p>
              </div>
            </div>

            {/* Right: The One Ten Experience */}
            <div className="lg:col-span-6 lg:pl-4 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-px bg-[#e05326]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
                  The Journey
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe4] font-normal leading-tight">
                THE ONE TEN EXPERIENCE
              </h2>

              <p className="text-base sm:text-lg text-[#d4cebe] font-sans leading-relaxed text-balance">
                Located conveniently at Highway Mall, Chandkheda, One Ten Restaurant & Banquet brings together authentic North Indian delicacies, hearty Punjabi Thalis, and Indo-Chinese favorites with a spacious 1,700 sq. ft. event venue.
              </p>

              <p className="text-sm sm:text-base text-[#9d978a] leading-relaxed">
                Whether you are joining us for our famous Fixed Punjabi Thali lunch, savoring smoky Paneer Angara and Handi Paneer for dinner, or organizing a grand 50–500 guest family wedding or corporate function, we offer delicious vegetarian cuisine and attentive hospitality.
              </p>

              {/* Discover Our Story Button & Banquet Link */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  id="discover-story-btn"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#181822] hover:bg-[#252535] text-[#f4efe4] text-xs uppercase tracking-widest font-semibold border border-[#303042] hover:border-[#c5a059] transition-all duration-200 group shadow-lg shadow-black/40 cursor-pointer"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 text-[#e05326] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="explore-banquet-intro-btn"
                  onClick={() => {
                    onNavigate('banquet');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#222232] hover:bg-[#2a2a3f] text-[#c5a059] text-xs uppercase tracking-widest font-semibold border border-[#c5a059]/30 hover:border-[#c5a059] transition-all duration-200 cursor-pointer"
                >
                  <span>1,700 sq. ft. Banquet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Dishes Section */}
      <section id="signature-dishes-section" className="py-20 md:py-28 bg-[#0e0e13] relative border-t border-[#1a1a24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Culinary Highlights"
            title="OUR SIGNATURES"
            subtitle="Signature Paneer creations, clay tandoor roasts, and our famous Punjabi Thali."
          />

          {/* 6 Signature Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIGNATURE_DISHES.map((dish) => (
              <FoodCard key={dish.id} dish={dish} onAction={handleDishAction} />
            ))}
          </div>

          {/* View Full Menu CTA Button */}
          <div className="mt-14 text-center">
            <button
              id="view-full-menu-btn"
              onClick={() => {
                onNavigate('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-[#f7f4eb] text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-200 shadow-xl shadow-[#e05326]/30 border border-[#f89e5a]/30 group active:scale-95"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section id="why-choose-us-section" className="py-20 md:py-28 bg-[#0b0b0e] relative border-t border-[#181822]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Hallmarks"
            title="WHY CHOOSE US"
            subtitle="Four foundational pillars that elevate every meal and celebration at One Ten Restaurant & Banquet."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <FeatureCard
                key={item.title}
                iconName={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Special Experience Section (Full-width promotional banner) */}
      <section
        id="special-experience-section"
        className="relative py-24 sm:py-32 overflow-hidden bg-[#08080c] flex items-center justify-center border-y border-[#242433]"
      >
        {/* Background visual with rich dark overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1900&q=80"
            alt="Intimate dining atmosphere at Ember and Spice"
            className="w-full h-full object-cover filter brightness-[0.3] contrast-[1.1]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e]/95 via-[#0b0b0e]/80 to-[#0b0b0e]/95" />
          <div className="absolute inset-0 bg-radial from-transparent to-[#0b0b0e]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#c5a059]"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
              Bespoke Dining & Celebrations
            </span>
            <span className="w-6 h-px bg-[#c5a059]"></span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#f4efe4] font-normal tracking-tight mb-6">
            AN EVENING TO REMEMBER
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#d4cebe] font-sans leading-relaxed mb-10 text-balance">
            From intimate family dinners to grand 500-guest wedding and corporate functions, every detail at One Ten Restaurant & Banquet is designed to make your occasion extraordinary.
          </p>

          <button
            id="plan-your-visit-btn"
            onClick={() => {
              onNavigate('reservations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-[#f7f4eb] text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-200 shadow-2xl shadow-[#e05326]/40 border border-[#f89e5a]/40 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan Your Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. Customer Reviews (Testimonial Section) */}
      <TestimonialSection />

      {/* 7. Instagram / Social Gallery Section */}
      <SocialGallerySection />
    </div>
  );
};
