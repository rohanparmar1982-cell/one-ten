import React from 'react';
import { Flame, Leaf, ChefHat, Wine } from 'lucide-react';

interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ iconName, title, description, index }) => {
  const renderIcon = () => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#e05326]" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#4ade80]" />;
      case 'ChefHat':
        return <ChefHat className="w-6 h-6 text-[#c5a059]" />;
      case 'Wine':
        return <Wine className="w-6 h-6 text-[#f89e5a]" />;
      default:
        return <Flame className="w-6 h-6 text-[#e05326]" />;
    }
  };

  return (
    <div
      id={`feature-card-${index}`}
      className="group relative bg-[#121219] p-6 sm:p-8 rounded-2xl border border-[#232330] hover:border-[#e05326]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1"
    >
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#e05326]/5 rounded-full blur-2xl group-hover:bg-[#e05326]/10 transition-colors pointer-events-none" />

      {/* Icon frame */}
      <div className="w-12 h-12 rounded-xl bg-[#1a1a24] border border-[#2a2a38] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-[#c5a059]/40 transition-all">
        {renderIcon()}
      </div>

      <h3 className="font-serif text-xl sm:text-2xl text-[#f4efe4] group-hover:text-[#f89e5a] transition-colors mb-2">
        {title}
      </h3>

      <p className="text-sm text-[#aba597] font-sans leading-relaxed">
        {description}
      </p>

      {/* Subtle indicator bar */}
      <div className="mt-5 w-8 h-0.5 bg-[#292938] group-hover:w-16 group-hover:bg-[#e05326] transition-all duration-300" />
    </div>
  );
};
