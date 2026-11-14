import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { WHY_PRINCIPLES } from '../../data/content';

export const WhyVaeltrum: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border/40">
      <Container>
        <SectionHeading
          label="ENGINEERING CULTURE"
          title="Small details. Serious engineering."
          description="How we approach our work defines the longevity and dependability of the software we ship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              className="p-7 rounded-xl bg-background-card border border-border/70 hover:border-border-focus transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div>
                <div className="font-mono text-xs text-accent-sky mb-6 flex items-center justify-between">
                  <span>PRINCIPLE {principle.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border" />
                </div>

                <h3 className="text-lg font-medium tracking-tight text-foreground font-display mb-3">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-foreground-subtle">
                <span>STANDARD</span>
                <span className="text-accent-blue/80">NON-NEGOTIABLE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
