import React, { useState, useMemo } from 'react';
import { GalleryCategory, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Lightbox } from '../components/Lightbox';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Photographs' },
    { id: 'food', label: 'Culinary Art' },
    { id: 'interior', label: 'Dining Sanctuary' },
    { id: 'chef', label: 'Chef & Tandoor' },
    { id: 'events', label: 'Evening & Terrace' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Camera className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
            Visual Storytelling
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f4efe4] font-normal tracking-tight mb-4">
          THE VISUAL GALLERY
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#b8b3a8] font-sans leading-relaxed">
          Glimpses into our live charcoal tandoor ovens, the serene charcoal architecture, and culinary moments captured over flame.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#e05326] text-white shadow-lg shadow-[#e05326]/30'
                    : 'bg-[#15151f] text-[#a09b8e] hover:text-[#f4efe4] hover:bg-[#1f1f2d] border border-[#252535]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-[#14141c] border border-[#22222f] hover:border-[#e05326]/50 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-end"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Expand icon floating top-right */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Category Pill floating top-left */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#c5a059] font-medium border border-white/10">
                    {item.category}
                  </div>

                  {/* Bottom title & description */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                    <h3 className="font-serif text-lg sm:text-xl text-[#f4efe4] group-hover:text-[#f89e5a] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#b8b3a8] line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <Lightbox
          item={currentLightboxItem}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={lightboxIndex!}
          totalCount={filteredItems.length}
        />
      )}
    </div>
  );
};
