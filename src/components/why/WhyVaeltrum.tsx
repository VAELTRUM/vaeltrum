import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { WHY_PRINCIPLES } from '../../data/content';

export const WhyVaeltrum: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-border/40">
      <Container>
        <SectionHeading
          label="ENGINEERING CULTURE"
          title="Small details. Serious engineering."
          description="How we approach our work defines the longevity and dependability of the software we ship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {WHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              className="p-8 rounded-2xl bg-background-card border border-border/80 hover:border-border-focus transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div>
                <div className="font-mono text-xs sm:text-sm text-accent-sky mb-7 flex items-center justify-between font-medium">
                  <span>PRINCIPLE {principle.number}</span>
                  <span className="w-2 h-2 rounded-full bg-border" />
                </div>

                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground font-display mb-3.5 leading-snug">
                  {principle.title}
                </h3>

                <p className="text-sm sm:text-[0.95rem] text-foreground-muted leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-border/50 flex items-center justify-between text-xs font-mono text-foreground-subtle font-medium">
                <span>STANDARD</span>
                <span className="text-accent-blue font-semibold">NON-NEGOTIABLE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
