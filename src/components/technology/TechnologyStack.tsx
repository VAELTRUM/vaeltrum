import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TECH_CATEGORIES } from '../../data/content';
import { Terminal } from 'lucide-react';

export const TechnologyStack: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-border/40 bg-background-charcoal/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            label="TOOLING & INFRASTRUCTURE"
            title="The right tools for the right problem."
            description="We select battle-tested, maintainable technologies based on project scale, data model requirements, and team constraints."
            className="mb-0"
          />

          <div className="flex items-center gap-2.5 text-xs font-mono text-foreground-subtle self-end pb-3">
            <Terminal className="w-4 h-4 text-accent-sky" />
            <span>DEPENDABLE OPEN STACK</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              className="p-8 sm:p-9 rounded-2xl bg-background-card border border-border/80 flex flex-col justify-between shadow-sm hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-border-focus"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-border/60 mb-7">
                  <h3 className="text-sm sm:text-base font-mono uppercase tracking-widest text-accent-sky font-semibold">
                    {cat.category}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-foreground-subtle font-medium">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.technologies.map((tech) => (
                    <motion.div 
                      key={tech.name} 
                      className="p-4 rounded-xl bg-background-charcoal/70 border border-border/50 hover:border-accent-blue/40 transition-colors group cursor-default"
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-base font-semibold font-mono text-foreground group-hover:text-accent-sky transition-colors">
                          {tech.name}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-border group-hover:bg-accent-blue transition-colors" />
                      </div>
                      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-normal">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-border/50 text-xs font-mono text-foreground-subtle flex items-center justify-between font-medium">
                <span>STABILITY VERIFIED</span>
                <span className="text-accent-sky/80">PRODUCTION READY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
