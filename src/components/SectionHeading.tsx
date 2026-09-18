import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#e05326]"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#e05326] font-medium font-sans">
            {badge}
          </span>
          <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#e05326]"></span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f4efe4] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#b8b3a8] font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : ''}`}>
        <div className="w-10 h-px bg-[#c5a059]/40"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#e05326]"></div>
        <div className="w-10 h-px bg-[#c5a059]/40"></div>
      </div>
    </div>
  );
};
