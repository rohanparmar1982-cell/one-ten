import React from 'react';
import { Dish } from '../types';
import { Flame, Sparkles } from 'lucide-react';

interface MenuCardProps {
  dish: Dish;
  onReserveClick?: () => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ dish, onReserveClick }) => {
  return (
    <div
      id={`menu-item-${dish.id}`}
      className="group bg-[#121218] rounded-xl overflow-hidden border border-[#22222d] hover:border-[#e05326]/40 transition-all duration-300 flex flex-col sm:flex-row hover:shadow-xl hover:shadow-black/50"
    >
      {/* Image container on side for desktop/tablet, top on mobile */}
      <div className="relative w-full sm:w-48 md:w-56 h-48 sm:h-auto shrink-0 overflow-hidden bg-[#0a0a0d]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />

        {/* Veg/Non-veg badge floating on image */}
        <div className="absolute top-3 left-3 z-10">
          <div
            className={`w-5 h-5 rounded bg-[#0b0b0e]/90 backdrop-blur-md flex items-center justify-center border ${
              dish.isVeg ? 'border-emerald-500' : 'border-rose-600'
            }`}
            title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            {dish.isVeg ? (
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            ) : (
              <div className="w-0 h-0 border-x-[4px] border-x-transparent border-b-[8px] border-b-rose-600" />
            )}
          </div>
        </div>

        {dish.isChefSpecial && (
          <div className="absolute bottom-3 left-3 sm:top-3 sm:bottom-auto sm:left-10 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0b0b0e]/85 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-[9px] uppercase tracking-wider font-semibold">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Chef's Choice</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="font-serif text-xl sm:text-2xl text-[#f4efe4] group-hover:text-[#f89e5a] transition-colors leading-snug">
                  {dish.name}
                </h3>
              </div>
              {/* Category indicator & spice level */}
              <div className="flex items-center gap-3 text-xs text-[#8e887c]">
                <span className="capitalize text-[#c5a059] font-medium">{dish.category}</span>
                {dish.spiceLevel && (
                  <span className="flex items-center gap-0.5 text-xs text-[#e05326]" title={`Spice level: ${dish.spiceLevel} of 3`}>
                    {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                      <Flame key={i} className="w-3 h-3 fill-[#e05326]" />
                    ))}
                  </span>
                )}
              </div>
            </div>

            {/* Price */}
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#f4efe4] shrink-0">
              ₹{dish.price}
            </span>
          </div>

          <p className="mt-2 text-sm text-[#aba597] leading-relaxed">
            {dish.description}
          </p>

          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {dish.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-wider text-[#918c81] bg-[#181822] px-2 py-0.5 rounded border border-[#242430]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pairing Note & Reserve Quick CTA */}
        <div className="mt-4 pt-3 border-t border-[#1e1e28] flex items-center justify-between gap-2 text-xs">
          {dish.pairing ? (
            <span className="text-[#c5a059] italic text-xs truncate">
              Ideal with: {dish.pairing}
            </span>
          ) : (
            <span className="text-[#6d695f] text-[11px]">Cooked to order over live fire</span>
          )}

          {onReserveClick && (
            <button
              onClick={onReserveClick}
              className="text-[11px] uppercase tracking-wider text-[#e05326] hover:text-[#f89e5a] font-semibold transition-colors shrink-0"
            >
              Order for table →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
