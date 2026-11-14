import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TECH_CATEGORIES } from '../../data/content';
import { Terminal } from 'lucide-react';

export const TechnologyStack: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border/40 bg-background-charcoal/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            label="TOOLING & INFRASTRUCTURE"
            title="The right tools for the right problem."
            description="We select battle-tested, maintainable technologies based on project scale, data model requirements, and team constraints."
            className="mb-0"
          />

          <div className="flex items-center gap-2 text-xs font-mono text-foreground-subtle self-end pb-2">
            <Terminal className="w-3.5 h-3.5 text-accent-sky" />
            <span>DEPENDABLE OPEN STACK</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              className="p-7 rounded-xl bg-background-card border border-border/70 flex flex-col justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border/60 mb-6">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-accent-sky font-medium">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono text-foreground-subtle">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.technologies.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="p-3 rounded-lg bg-background-charcoal/60 border border-border/40 hover:border-border transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold font-mono text-foreground group-hover:text-accent-sky transition-colors">
                          {tech.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent-blue transition-colors" />
                      </div>
                      <p className="text-xs text-foreground-muted leading-relaxed font-normal">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/40 text-[10px] font-mono text-foreground-subtle flex items-center justify-between">
                <span>STABILITY VERIFIED</span>
                <span>PRODUCTION READY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
