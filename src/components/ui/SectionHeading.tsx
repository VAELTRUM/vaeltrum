import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.div 
      className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center mx-auto max-w-4xl' : 'max-w-3xl'} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <motion.div 
          className="inline-flex items-center gap-2.5 mb-4 px-3 py-1 rounded-full bg-background-card/80 border border-border/80 w-fit"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
          <span className="text-xs font-mono tracking-[0.22em] uppercase text-foreground-muted font-medium">
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2 
        className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground font-display leading-[1.1] mb-5"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-foreground-muted leading-relaxed font-normal"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
