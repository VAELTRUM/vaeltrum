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
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.24em]',
  };

  return (
    <a 
      href="#hero" 
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      aria-label="Vaeltrum — Home"
    >
      {/* Precision Geometric SVG Symbol */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        >
          {/* Subtle outer bounding guide line */}
          <rect
            x="1"
            y="1"
            width="34"
            height="34"
            rx="8"
            className="stroke-border/70 group-hover:stroke-border transition-colors duration-300"
            strokeWidth="1"
          />

          {/* Left engineered wing of the 'V' */}
          <path
            d="M8 10L18 28L15 28L6 10H8Z"
            fill="currentColor"
            className="text-foreground transition-colors duration-300"
          />

          {/* Right engineered wing */}
          <path
            d="M28 10L18 28L21 28L30 10H28Z"
            fill="currentColor"
            className="text-foreground-muted transition-colors duration-300"
          />

          {/* Central geometric convergence point / core node */}
          <path
            d="M18 13L22 20H14L18 13Z"
            fill="var(--accent-blue)"
            className="opacity-95 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Horizontal stabilizer beam */}
          <line
            x1="11"
            y1="16"
            x2="25"
            y2="16"
            stroke="var(--accent-sky)"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-semibold font-display text-foreground leading-none ${textSizes[size]}`}>
            VAELTRUM
          </span>
          <span className="text-[9px] font-mono tracking-widest text-foreground-muted uppercase mt-1">
            Engineering
          </span>
        </div>
      )}
    </a>
  );
};
