import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { HeroVisual } from './HeroVisual';
import { ArrowDown, ArrowUpRight, ChevronRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-32 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Background subtle radial gradient */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-accent-blue/[0.05] rounded-full blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center z-20"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Introductory Label */}
            <motion.div 
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-background-card/90 backdrop-blur-md w-fit mb-6 sm:mb-8 shadow-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-mono tracking-[0.24em] uppercase text-foreground-muted font-medium">
                INDEPENDENT SOFTWARE ENGINEERING COMPANY
              </span>
            </motion.div>

            {/* Main Editorial Heading - Scaled up for prominent impact */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.4rem] font-medium tracking-tight text-foreground font-display leading-[1.05] mb-6 sm:mb-8">
              Building software <br className="hidden sm:inline" />
              that moves ideas <br className="hidden sm:inline" />
              into <span className="text-foreground relative inline-block">
                reality
                <span className="absolute bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-sky to-transparent rounded-full opacity-90" />
              </span>.
            </h1>

            {/* Supporting Paragraph - Scaled up */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-foreground-muted font-normal max-w-2xl leading-relaxed mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              From SaaS products to enterprise platforms, we design and engineer digital solutions built around real business needs.
            </motion.p>

            {/* CTAs with enhanced motion */}
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <Button
                href="#work"
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-4 h-4" />}
                className="justify-center text-base px-7 py-3.5"
              >
                Explore Our Work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="justify-center text-base px-7 py-3.5"
              >
                Start a Conversation
              </Button>
            </motion.div>

            {/* Subtle engineering telemetry footnote */}
            <motion.div 
              className="mt-12 sm:mt-16 pt-8 border-t border-border/50 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-foreground-subtle font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-foreground-muted">Architecture-first engineering</span>
              </div>
              <span className="text-border hidden sm:inline">•</span>
              <div className="text-foreground-muted">SaaS &amp; Enterprise Platforms</div>
              <span className="text-border hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-accent-sky/90">
                <Terminal className="w-3.5 h-3.5" />
                <span>Zero Compromise</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Original 3D Geometric Architectural Composition (5 cols) */}
          <motion.div 
            className="lg:col-span-5 relative w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground-subtle/80 pointer-events-none">
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-foreground-muted" />
        </motion.div>
      </div>
    </section>
  );
};
