import React, { useEffect, useCallback } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="w-full flex items-center justify-between pb-3 text-xs text-[#a09a8e]">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#e05326]" />
            <span className="capitalize font-medium text-[#f4efe4]">{item.category}</span>
            <span>•</span>
            <span>{currentIndex + 1} of {totalCount}</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1e1e28] text-white flex items-center justify-center hover:bg-[#e05326] transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image viewer with side arrows */}
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl border border-[#2a2a38] bg-black/50">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
          />

          {/* Left Arrow Button */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#e05326] text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/10 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#e05326] text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/10 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption bar */}
        <div className="w-full pt-4 text-center">
          <h3 className="font-serif text-xl sm:text-2xl text-[#f4efe4] font-medium">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-[#b8b3a8] font-sans">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
