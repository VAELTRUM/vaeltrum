import React from 'react';
import { motion } from 'framer-motion';
import { HeroImageVisual } from './HeroImageVisual';
import { ArrowDown, ArrowUpRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-28 pb-20 sm:pb-28 overflow-hidden w-full bg-white dark:bg-[#0B0A1E] transition-colors duration-300"
    >
      {/* 1. Atmospheric Horizon Nebula Glow (Signature DesignCode Sunrise Glow) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#FF7A59]/15 via-[#A855F7]/20 to-transparent dark:from-[#FF7A59]/20 dark:via-[#A855F7]/25 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      {/* Secondary cyan ambient fill */}
      <div 
        className="absolute top-1/3 -right-24 w-[550px] h-[550px] bg-[#06B6D4]/10 dark:bg-[#06B6D4]/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center z-20"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Editorial Heading with Radiant Gradient Text */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.6rem] font-bold tracking-tight text-slate-900 dark:text-white font-display leading-[1.04] mb-6 sm:mb-8">
              Building software <br className="hidden sm:inline" />
              that moves ideas <br className="hidden sm:inline" />
              into <span className="gradient-text-hero">
                reality
              </span>.
            </h1>

            {/* Supporting Paragraph */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-foreground-muted font-normal max-w-2xl leading-relaxed mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              From SaaS products to enterprise platforms, we design and engineer digital solutions built around real business needs.
            </motion.p>

            {/* CTAs with Glowing Gradient Backdrops */}
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF7A59] via-[#FA709A] to-[#8B5CF6] text-white shadow-glow-coral hover:opacity-95 active:scale-[0.98] transition-all duration-200 gap-2.5 group cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="metallic-card group relative inline-flex items-center justify-center font-semibold text-base sm:text-lg px-7 py-4 rounded-2xl active:scale-[0.98] transition-all duration-200 gap-2.5 cursor-pointer shadow-sm overflow-hidden text-slate-900 dark:text-white"
              >
                <div className="metallic-shimmer" />
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Engineering Team Hero Visual (5 cols) */}
          <motion.div 
            className="lg:col-span-5 relative w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroImageVisual />
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 dark:text-foreground-muted pointer-events-none">
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-accent-sky" />
        </motion.div>
      </div>
    </section>
  );
};
