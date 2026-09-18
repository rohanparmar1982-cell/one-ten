import React from 'react';
import { Page } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { Flame, Sparkles, Award, Utensils, HeartHandshake, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* 1. Page Hero: "OUR STORY" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Flame className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
            The Heritage & Vision
          </span>
          <Flame className="w-4 h-4 text-[#e05326]" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#f4efe4] font-normal tracking-tight mb-6">
          OUR STORY
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#d4cebe] font-sans leading-relaxed text-balance">
          Born from a deep reverence for the sacred hearth, Ember & Spice was conceived to celebrate the primal relationship between open fire, hand-pounded spices, and refined contemporary dining.
        </p>
      </div>

      {/* Editorial Feature Image with Quote */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-3xl overflow-hidden border border-[#242433] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=80"
            alt="The blazing clay tandoor at Ember and Spice"
            className="w-full h-[380px] sm:h-[500px] object-cover filter brightness-[0.55]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/40 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium font-sans">
              Culinary Ethos
            </span>
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#f4efe4] mt-2 leading-tight">
              "Fire is not merely a heat source; it is the most honest seasoning known to mankind."
            </blockquote>
          </div>
        </div>
      </div>

      {/* 2. Section: "Our Philosophy" */}
      <section id="our-philosophy" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe4] font-normal leading-tight">
              OUR PHILOSOPHY
            </h2>
            <div className="w-12 h-0.5 bg-[#c5a059]" />
            <p className="text-sm sm:text-base text-[#d4cebe] leading-relaxed">
              We believe Indian cuisine is one of the world's most sophisticated culinary architectures. However, true luxury is not about masking ingredients in heavy gravies; it is about precision balance, temperature control, and honoring each terroir.
            </p>
            <p className="text-xs sm:text-sm text-[#9e988c] leading-relaxed">
              Every dish at Ember & Spice tells a regional narrative: the royal Awadhi dum pukht methods of Lucknow, the rustic frontier marinades of Punjab, the delicate saffron coastal sauces of Kerala, and Gujarat's deep appreciation for textures and sweet-savory harmony.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <Flame className="w-7 h-7 text-[#e05326] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">Sacred Charcoal Flame</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                We shun gas-assisted compromises. Our custom hand-crafted clay ovens burn aged hickory wood and hardwood lump charcoal at 420°C.
              </p>
            </div>
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <Sparkles className="w-7 h-7 text-[#c5a059] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">Stone-Ground Terroirs</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                Whole spices are sourced directly from single-estate growers in Wayanad, Kashmir, and Guntur, roasted and stone-milled weekly.
              </p>
            </div>
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <Utensils className="w-7 h-7 text-[#f89e5a] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">36-Hour Patience</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                Our signature Truffle Dal Makhani and braised lamb shanks are slow-simmered across two full sun cycles over diminishing embers.
              </p>
            </div>
            <div className="bg-[#121219] p-6 rounded-2xl border border-[#232332]">
              <HeartHandshake className="w-7 h-7 text-[#4ade80] mb-3" />
              <h4 className="font-serif text-xl text-[#f4efe4] mb-1.5">Guest Warmth (Atithi)</h4>
              <p className="text-xs text-[#a09b8e] leading-relaxed">
                Fine dining should inspire wonder, never intimidation. We welcome families, celebratory gatherings, and curious connoisseurs equally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: "From Tradition to Table" */}
      <section id="tradition-to-table" className="py-20 bg-[#0e0e14] border-y border-[#1a1a24] mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Culinary Continuum"
            title="FROM TRADITION TO TABLE"
            subtitle="Bridging 500 years of royal Indian feasts with the finesse of 21st-century culinary artistry."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#13131b] rounded-2xl overflow-hidden border border-[#22222f] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
                  alt="Ancient tandoor preparation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-wider text-[#e05326] font-semibold">Phase 01</span>
                <h4 className="font-serif text-xl text-[#f4efe4] mt-1 mb-2">The Flame & Marinade</h4>
                <p className="text-xs text-[#9e988c] leading-relaxed">
                  Protein and paneer are subjected to two rounds of infusion: first with mustard oil, lime, and crushed ginger, followed by saffron yogurt and aged garam masala.
                </p>
              </div>
            </div>

            <div className="bg-[#13131b] rounded-2xl overflow-hidden border border-[#22222f] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                  alt="Slow simmering pot over charcoal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-wider text-[#c5a059] font-semibold">Phase 02</span>
                <h4 className="font-serif text-xl text-[#f4efe4] mt-1 mb-2">The Alchemy of Simmer</h4>
                <p className="text-xs text-[#9e988c] leading-relaxed">
                  Heavy brass Degs and hammered copper handis retain constant radiant warmth, ensuring sauces marry seamlessly without scorching natural dairy fats.
                </p>
              </div>
            </div>

            <div className="bg-[#13131b] rounded-2xl overflow-hidden border border-[#22222f] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
                  alt="Modern fine dining plating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-wider text-[#f89e5a] font-semibold">Phase 03</span>
                <h4 className="font-serif text-xl text-[#f4efe4] mt-1 mb-2">The Contemporary Plate</h4>
                <p className="text-xs text-[#9e988c] leading-relaxed">
                  Dishes arrive in custom stoneware with theatrical tableside moments — aromatic rosemary smoke bell jars, whole-wheat pastry seal openings, and warm truffle drizzles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: "Meet Our Chef" */}
      <section id="meet-our-chef" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#13131c] rounded-3xl border border-[#272737] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Chef Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#333345] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
                  alt="Executive Chef Kabir Sengupta at Ember & Spice"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0d0d12] border border-[#c5a059]/40 py-2.5 px-4 rounded-xl shadow-xl flex items-center gap-2">
                <Award className="w-4 h-4 text-[#c5a059]" />
                <span className="text-xs text-[#f4efe4] font-semibold">Michelin-Trained Mentor</span>
              </div>
            </div>

            {/* Chef Bio */}
            <div className="lg:col-span-7 space-y-5 lg:pl-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-semibold">
                Culinary Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe4] leading-tight">
                MEET OUR CHEF
              </h2>
              <h3 className="font-serif text-xl sm:text-2xl text-[#c5a059] italic -mt-2">
                Executive Chef Kabir Sengupta
              </h3>

              <p className="text-sm sm:text-base text-[#d4cebe] leading-relaxed">
                Having apprenticed under venerable Lucknowi Ustaads before leading acclaimed contemporary Indian dining rooms across New Delhi, London, and Dubai, Chef Kabir Sengupta returned to Ahmedabad with a single dream: to create Gujarat’s preeminent temple of smoke and spice.
              </p>

              <p className="text-xs sm:text-sm text-[#9e988c] leading-relaxed">
                "Our food does not compete with your grandmother's cooking; it pays homage to it through the lens of modern precision, lighter textures, and dramatic temperature contrasts."
              </p>

              <div className="pt-4 border-t border-[#242433] flex flex-wrap gap-6 text-xs text-[#aba598]">
                <div>
                  <p className="font-serif text-lg text-[#f4efe4] font-semibold">18+ Years</p>
                  <p className="text-[11px] text-[#736f66]">Culinary Mastery</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-[#f4efe4] font-semibold">Awadh & Frontier</p>
                  <p className="text-[11px] text-[#736f66]">Heritage Specialization</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-[#f4efe4] font-semibold">Zero Preservatives</p>
                  <p className="text-[11px] text-[#736f66]">100% Scratch Kitchen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: "Crafted With Passion" */}
      <section id="crafted-with-passion" className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
          Atmosphere & Hospitality
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe4] mt-2 mb-6">
          CRAFTED WITH PASSION
        </h2>
        <p className="text-base text-[#b8b3a8] leading-relaxed mb-8">
          The Ember & Spice sanctuary blends deep charcoal stones, warm brushed brass, natural linen, and acoustically insulated dining alcoves. Whether you join us for a romantic anniversary or a lively multi-generational family banquet, we treat your evening as a sacred ritual of enjoyment.
        </p>

        <button
          onClick={() => {
            onNavigate('reservations');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-xl shadow-[#e05326]/30 border border-[#f89e5a]/30"
        >
          <span>Reserve Your Table Experience</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
