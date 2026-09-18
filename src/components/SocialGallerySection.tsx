import React, { useState } from 'react';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';
import { Instagram, Heart, MessageCircle, ExternalLink, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const SocialGallerySection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<(typeof INSTAGRAM_POSTS)[0] | null>(null);

  return (
    <section id="social-gallery-section" className="py-20 md:py-24 bg-[#0b0b0e] border-t border-[#1a1a24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Social Moments"
          title="FOLLOW THE FLAVOR"
          subtitle={RESTAURANT_INFO.social.handle}
        />

        {/* Image Grid 6 items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#14141c] cursor-pointer border border-[#22222d] hover:border-[#e05326]/60 transition-all duration-300"
            >
              <img
                src={post.image}
                alt="Ember & Spice visual journal"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover overlay with Instagram icon and engagement counts */}
              <div className="absolute inset-0 bg-[#0d0d12]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-[#f89e5a] mb-2 transform group-hover:scale-110 transition-transform" />
                <div className="flex items-center gap-3 text-xs text-[#f4efe4] font-medium mb-2">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#e05326] fill-[#e05326]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-[#c5a059]" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-[#b8b3a8] line-clamp-2 italic font-serif">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-12 text-center">
          <a
            href={RESTAURANT_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#161622] hover:bg-[#e05326] text-[#f4efe4] text-xs uppercase tracking-widest font-semibold transition-all duration-300 border border-[#2a2a38] hover:border-transparent shadow-lg shadow-black/40 group"
          >
            <Instagram className="w-4 h-4 text-[#e05326] group-hover:text-white transition-colors" />
            <span>Follow Us on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#888] group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Quick Instagram Post Preview Lightbox */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-[#14141c] max-w-lg w-full rounded-2xl overflow-hidden border border-[#2d2d3d] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#e05326] transition-colors"
              aria-label="Close preview"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-square w-full">
              <img
                src={selectedPost.image}
                alt="Instagram story preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-3 text-xs text-[#9d978a]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e05326]" />
                  <span className="font-medium text-[#f4efe4]">@emberandspice</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#e05326]">
                    <Heart className="w-3.5 h-3.5 fill-[#e05326]" /> {selectedPost.likes}
                  </span>
                  <span className="flex items-center gap-1 text-[#c5a059]">
                    <MessageCircle className="w-3.5 h-3.5" /> {selectedPost.comments}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#d4cebe] leading-relaxed font-sans">
                {selectedPost.caption}
              </p>
              <div className="mt-4 pt-3 border-t border-[#22222d] flex justify-end">
                <a
                  href={RESTAURANT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-[#f89e5a] hover:text-white flex items-center gap-1.5"
                >
                  <span>Open on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
