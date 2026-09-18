import React, { useState, useMemo } from 'react';
import { Page, MenuCategoryId } from '../types';
import { FULL_MENU } from '../data/restaurantData';
import { MenuCard } from '../components/MenuCard';
import { MenuFilter } from '../components/MenuFilter';
import { SectionHeading } from '../components/SectionHeading';
import { Calendar, SearchX, Flame, Sparkles } from 'lucide-react';

interface MenuPageProps {
  onNavigate: (page: Page) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  // Filter logic
  const filteredDishes = useMemo(() => {
    return FULL_MENU.filter((dish) => {
      // Category filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'vegetarian' && !dish.isVeg) return false;
        if (activeCategory === 'non-vegetarian' && dish.isVeg) return false;
        if (activeCategory !== 'vegetarian' && activeCategory !== 'non-vegetarian' && dish.category !== activeCategory) {
          return false;
        }
      }

      // Veg only toggle
      if (vegOnly && !dish.isVeg) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesTags = dish.tags?.some((t) => t.toLowerCase().includes(query));
        const matchesCategory = dish.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesTags && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, vegOnly]);

  const handleReserveClick = () => {
    onNavigate('reservations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0b0e]">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Flame className="w-4 h-4 text-[#e05326]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
            A La Carte & Signatures
          </span>
          <Flame className="w-4 h-4 text-[#e05326]" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f4efe4] font-normal tracking-tight mb-4">
          OUR CULINARY REPERTOIRE
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#b8b3a8] font-sans leading-relaxed">
          Rooted in ancient charcoal tandoor methods, refined through contemporary gastronomic craft. All marinades prepared in-house daily with organic Himalayan spices.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Filter Bar */}
        <MenuFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          vegOnly={vegOnly}
          onVegToggle={setVegOnly}
          itemCount={filteredDishes.length}
        />

        {/* Dish List */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDishes.map((dish) => (
              <MenuCard
                key={dish.id}
                dish={dish}
                onReserveClick={handleReserveClick}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-[#121219] rounded-2xl border border-[#242433] p-12 text-center max-w-md mx-auto my-12">
            <SearchX className="w-12 h-12 text-[#e05326]/60 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#f4efe4] mb-2">No Matching Dishes Found</h3>
            <p className="text-sm text-[#9e988c] mb-6">
              We couldn't find any dishes matching "{searchQuery}". Try modifying your search or clearing category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setVegOnly(false);
              }}
              className="px-6 py-2.5 rounded-full bg-[#1e1e2b] hover:bg-[#e05326] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Dietary and Chef consultation banner */}
        <div className="mt-16 bg-[#13131b] border border-[#262635] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-[#c5a059]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Special Dietaries & Jain Menu</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#f4efe4]">
              Bespoke Culinary Preparations Available
            </h4>
            <p className="text-xs sm:text-sm text-[#9e988c] max-w-xl">
              We gladly prepare Jain variants (without root vegetables), vegan adaptations, and gluten-conscious courses upon advance notice to our concierge.
            </p>
          </div>

          <button
            id="menu-reserve-table-cta"
            onClick={handleReserveClick}
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#e05326] hover:bg-[#eb5d2f] text-[#f7f4eb] text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-xl shadow-[#e05326]/30 border border-[#f89e5a]/30"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table & Pre-order</span>
          </button>
        </div>
      </div>
    </div>
  );
};
