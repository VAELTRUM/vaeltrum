import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {label && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-foreground-muted">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
