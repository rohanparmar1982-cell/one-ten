import React from 'react';
import { Dish } from '../types';
import { Flame, Sparkles } from 'lucide-react';

interface FoodCardProps {
  dish: Dish;
  onAction?: (dish: Dish) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ dish, onAction }) => {
  return (
    <div
      id={`dish-card-${dish.id}`}
      className="group relative bg-[#13131a] rounded-2xl overflow-hidden border border-[#22222d] hover:border-[#e05326]/50 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Dish Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0d0d12]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Soft bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-black/30" />

        {/* Dietary Veg / Non-Veg Indicator Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <div
            className={`w-6 h-6 rounded bg-[#0b0b0e]/90 backdrop-blur-md flex items-center justify-center border ${
              dish.isVeg ? 'border-emerald-500/60' : 'border-rose-600/60'
            }`}
            title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            {dish.isVeg ? (
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            ) : (
              <div className="w-0 h-0 border-x-[5px] border-x-transparent border-b-[9px] border-b-rose-600" />
            )}
          </div>
        </div>

        {/* Chef Special Tag */}
        {dish.isChefSpecial && (
          <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0b0b0e]/85 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-[10px] uppercase tracking-wider font-semibold">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Signature</span>
          </div>
        )}

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3.5 z-10">
          <span className="font-serif text-lg font-bold text-[#f4efe4] bg-[#0b0b0e]/85 backdrop-blur-md px-3 py-1 rounded-lg border border-[#2b2b38] shadow-md">
            ₹{dish.price}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {dish.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-wider text-[#9d978a] bg-[#1a1a24] px-2 py-0.5 rounded border border-[#272733]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Dish Name */}
          <h3 className="font-serif text-xl sm:text-2xl text-[#f4efe4] group-hover:text-[#f89e5a] transition-colors leading-snug">
            {dish.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-[#a8a396] font-sans leading-relaxed line-clamp-2">
            {dish.description}
          </p>

          {/* Recommended Pairing if exists */}
          {dish.pairing && (
            <div className="mt-3 text-[11px] text-[#c5a059] flex items-center gap-1.5">
              <Flame className="w-3 h-3 text-[#e05326] shrink-0" />
              <span className="truncate">Pair with: {dish.pairing}</span>
            </div>
          )}
        </div>

        {/* Card Footer Action */}
        <div className="mt-5 pt-4 border-t border-[#20202b] flex items-center justify-between">
          <span className="text-[11px] tracking-wider uppercase text-[#7a766c] font-medium">
            {dish.category}
          </span>
          <button
            onClick={() => onAction && onAction(dish)}
            className="text-xs uppercase tracking-wider font-semibold text-[#f89e5a] hover:text-[#f4efe4] transition-colors flex items-center gap-1 group-hover:translate-x-0.5 transform duration-200"
          >
            <span>Explore Dish</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
