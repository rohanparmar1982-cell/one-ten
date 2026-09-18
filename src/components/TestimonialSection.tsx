import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials-section" className="py-20 md:py-28 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#e05326]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Guest Impressions"
          title="WHAT OUR GUESTS SAY"
          subtitle="Honest reflections from connoisseurs and patrons dining with us in Ahmedabad."
        />

        {/* Desktop Grid Layout (hidden on small mobile, visible sm/md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#121218] p-6 rounded-2xl border border-[#20202a] flex flex-col justify-between hover:border-[#c5a059]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#c5a059]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                  ))}
                </div>

                <p className="text-xs uppercase tracking-wider text-[#e05326] font-semibold mb-2 font-sans">
                  {review.highlight}
                </p>

                <p className="text-sm text-[#d4cebe] leading-relaxed italic font-serif text-base mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1c1c24] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#f4efe4] font-semibold">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#8c867b]">{review.role}</p>
                </div>
                <span className="text-[10px] text-[#6d685d] font-sans">{review.location.split(',')[0]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Layout (visible on mobile screens) */}
        <div className="md:hidden relative">
          <div className="bg-[#121218] p-6 sm:p-8 rounded-2xl border border-[#20202a] relative">
            <Quote className="w-8 h-8 text-[#e05326]/20 absolute top-5 right-5" />

            <div className="flex items-center gap-1 mb-4 text-[#c5a059]">
              {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
              ))}
            </div>

            <p className="text-xs uppercase tracking-wider text-[#e05326] font-semibold mb-2 font-sans">
              {TESTIMONIALS[currentIndex].highlight}
            </p>

            <p className="text-base text-[#d4cebe] leading-relaxed italic font-serif mb-6 min-h-[110px]">
              "{TESTIMONIALS[currentIndex].quote}"
            </p>

            <div className="pt-4 border-t border-[#1c1c24] flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg text-[#f4efe4] font-semibold">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-xs text-[#8c867b]">{TESTIMONIALS[currentIndex].role}</p>
              </div>
              <span className="text-xs text-[#c5a059]">{TESTIMONIALS[currentIndex].location}</span>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-[#e05326]' : 'w-2 bg-[#2a2a38]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-[#181822] border border-[#272733] flex items-center justify-center text-[#f4efe4] active:bg-[#e05326]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-[#181822] border border-[#272733] flex items-center justify-center text-[#f4efe4] active:bg-[#e05326]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
