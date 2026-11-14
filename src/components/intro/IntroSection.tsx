import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border/40 overflow-hidden bg-background-charcoal/30">
      {/* Subtle background technical grid line */}
      <div 
        className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative vertical guide line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-border/50 via-border/20 to-transparent pointer-events-none hidden lg:block" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement (5 cols) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-foreground-muted">
                PERSPECTIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.15]">
              Technology should solve something.
            </h2>

            {/* Subtle interactive accent line */}
            <div className="mt-8 relative h-[1px] w-24 bg-border overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-accent-blue"
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Thoughtful Editorial Narrative (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6 text-foreground-muted text-lg sm:text-xl font-normal leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-foreground/90 font-normal">
              Good software is more than code. It starts with understanding a problem, designing the right solution, and engineering a product that people can actually depend on.
            </p>
            <p>
              At Vaeltrum, we work across the entire product development process — from early concepts and system architecture to implementation and deployment.
            </p>

            {/* Architectural Pillars Pill */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/60 mt-4">
              <div className="p-4 rounded-lg bg-background-card/50 border border-border/40">
                <span className="text-[10px] font-mono text-accent-sky block mb-1">01 / DISCOVERY</span>
                <span className="text-sm font-medium text-foreground block">Root Problem Analysis</span>
              </div>
              <div className="p-4 rounded-lg bg-background-card/50 border border-border/40">
                <span className="text-[10px] font-mono text-accent-sky block mb-1">02 / ARCHITECTURE</span>
                <span className="text-sm font-medium text-foreground block">Resilient Systems</span>
              </div>
              <div className="p-4 rounded-lg bg-background-card/50 border border-border/40">
                <span className="text-[10px] font-mono text-accent-sky block mb-1">03 / EXECUTION</span>
                <span className="text-sm font-medium text-foreground block">Production Dependability</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
