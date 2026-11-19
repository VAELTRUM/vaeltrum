import React from 'react';

interface VaeltrumLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const VaeltrumLogo: React.FC<VaeltrumLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const symbolSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.18em]',
    md: 'text-lg sm:text-xl tracking-[0.2em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.22em]',
  };

  const taglineSizes = {
    sm: 'text-[7px] tracking-[0.14em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.16em]',
    lg: 'text-[11px] sm:text-[12px] tracking-[0.18em]',
  };

  return (
    <a 
      href="#hero" 
      className={`inline-flex items-center gap-3 sm:gap-3.5 group select-none ${className}`}
      aria-label="Vaeltrum — Home"
    >
      {/* Official Vaeltrum Arrow-Circuit Geometric Symbol */}
      <div className={`relative ${symbolSizes[size]} shrink-0 flex items-center justify-center`}>
        <img
          src="/images/vaeltrum-symbol.png"
          alt="Vaeltrum Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Official Wordmark & Tagline */}
      {showWordmark && (
        <div className="flex flex-col justify-center">
          <span className={`font-bold font-display text-slate-900 dark:text-white leading-none ${textSizes[size]}`}>
            VAELTRUM
          </span>
          <span className={`font-mono text-slate-500 dark:text-white/60 uppercase mt-1 font-medium ${taglineSizes[size]}`}>
            INNOVATION | TECHNOLOGY | SOLUTIONS
          </span>
        </div>
      )}
    </a>
  );
};
