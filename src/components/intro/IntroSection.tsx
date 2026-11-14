import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-border/40 overflow-hidden bg-background-charcoal/30">
      {/* Subtle background technical grid line */}
      <div 
        className="absolute inset-0 bg-grid-subtle opacity-35 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative vertical guide line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-border/50 via-border/20 to-transparent pointer-events-none hidden lg:block" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement (5 cols) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-background-card/80 border border-border/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-mono tracking-[0.22em] uppercase text-foreground-muted font-medium">
                PERSPECTIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground font-display leading-[1.12]">
              Technology should solve something.
            </h2>

            {/* Subtle interactive accent line */}
            <div className="mt-8 relative h-[2px] w-28 bg-border overflow-hidden rounded-full">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-sky"
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Thoughtful Editorial Narrative (7 cols) - Larger typography */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-8 text-foreground-muted text-xl sm:text-2xl lg:text-[1.6rem] font-normal leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-foreground/95 font-medium leading-relaxed">
              Good software is more than code. It starts with understanding a problem, designing the right solution, and engineering a product that people can actually depend on.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              At Vaeltrum, we work across the entire product development process — from early concepts and system architecture to implementation and deployment.
            </p>

            {/* Architectural Pillars Cards with Hover Motion */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/60 mt-2">
              {[
                { tag: '01 / DISCOVERY', title: 'Root Problem Analysis', desc: 'Requirements analysis before architecture.' },
                { tag: '02 / ARCHITECTURE', title: 'Resilient Systems', desc: 'Built for scalability and maintenance.' },
                { tag: '03 / EXECUTION', title: 'Production Dependability', desc: 'Tested, documented, and shipped.' }
              ].map((pillar, pIdx) => (
                <motion.div 
                  key={pillar.tag}
                  className="p-5 rounded-xl bg-background-card border border-border/70 hover:border-accent-blue/50 transition-colors shadow-sm"
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + pIdx * 0.1 }}
                >
                  <span className="text-[11px] font-mono text-accent-sky font-medium block mb-2">{pillar.tag}</span>
                  <span className="text-base font-semibold text-foreground block mb-1 font-display">{pillar.title}</span>
                  <span className="text-xs text-foreground-muted leading-relaxed block">{pillar.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
