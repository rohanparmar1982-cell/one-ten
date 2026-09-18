import React from 'react';
import { MenuCategoryId } from '../types';
import { Search, X, Filter } from 'lucide-react';

interface MenuFilterProps {
  activeCategory: MenuCategoryId;
  onCategoryChange: (category: MenuCategoryId) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  vegOnly: boolean;
  onVegToggle: (val: boolean) => void;
  itemCount: number;
}

export const MenuFilter: React.FC<MenuFilterProps> = ({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  vegOnly,
  onVegToggle,
  itemCount,
}) => {
  const categories: { id: MenuCategoryId; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'thali', label: 'Punjabi Thalis' },
    { id: 'paneer-special', label: 'Paneer Specials' },
    { id: 'tandoor', label: 'Tandoor Starters' },
    { id: 'mains', label: 'Main Course & Dal' },
    { id: 'chinese', label: 'Indo-Chinese' },
    { id: 'breads', label: 'Tandoori Breads' },
    { id: 'rice', label: 'Rice & Biryani' },
    { id: 'desserts', label: 'Dessert & Ice Cream' },
    { id: 'beverages', label: 'Chaas & Beverages' },
  ];

  return (
    <div className="bg-[#111117] rounded-2xl p-4 sm:p-6 border border-[#22222d] shadow-xl mb-10 space-y-4">
      {/* Top row: Search and Veg Filter Toggle */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-grow max-w-md">
          <Search className="w-4 h-4 text-[#8a8579] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="dish-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search dishes by name, spice, or ingredient..."
            className="w-full bg-[#181822] border border-[#272733] text-sm text-[#f4efe4] placeholder-[#726d62] pl-10 pr-9 py-2.5 rounded-xl focus:outline-none focus:border-[#e05326] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8579] hover:text-[#f4efe4]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dietary toggles & count */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <button
            onClick={() => onVegToggle(!vegOnly)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 border ${
              vegOnly
                ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300 shadow-sm shadow-emerald-950'
                : 'bg-[#181822] border-[#292938] text-[#aba597] hover:text-[#f4efe4]'
            }`}
          >
            <div
              className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                vegOnly ? 'border-emerald-400 bg-emerald-500/20' : 'border-emerald-600'
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <span>Pure Veg Only</span>
          </button>

          <span className="text-xs text-[#7e796e] font-sans">
            {itemCount} {itemCount === 1 ? 'dish' : 'dishes'}
          </span>
        </div>
      </div>

      {/* Bottom row: Category Pills horizontal scrollable */}
      <div className="pt-2 border-t border-[#1e1e28]">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-[#e05326] shrink-0 mr-1" />
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`menu-category-btn-${cat.id}`}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#e05326] text-[#f7f4eb] shadow-md shadow-[#e05326]/20 font-semibold'
                    : 'bg-[#181822] text-[#9d978a] hover:text-[#f4efe4] hover:bg-[#20202c] border border-[#242430]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
