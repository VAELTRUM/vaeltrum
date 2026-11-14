import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { PROCESS_STAGES } from '../../data/content';
import { Check } from 'lucide-react';

export const OurApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="relative py-28 sm:py-36 border-t border-border/40">
      <Container>
        <SectionHeading
          label="METHODOLOGY"
          title="Built with intention. Engineered with precision."
          description="A disciplined 4-stage engineering lifecycle designed to minimize technical risk and deliver maintainable software."
        />

        {/* Desktop Horizontal Process Flow */}
        <div className="hidden lg:block relative mt-20">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border/80 -translate-y-16 z-0" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STAGES.map((stage, index) => {
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={stage.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[380px] shadow-sm ${
                    isActive
                      ? 'bg-background-card border-accent-blue/60 shadow-[0_12px_36px_rgba(59,130,246,0.15)] ring-1 ring-accent-blue/30'
                      : 'bg-background-card/60 border-border/70 hover:border-border-focus hover:bg-background-card'
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div>
                    {/* Step indicator node */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-semibold transition-all duration-300 ${
                        isActive 
                          ? 'bg-accent-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-110' 
                          : 'bg-background-charcoal text-foreground-muted border border-border'
                      }`}>
                        {stage.step}
                      </div>
                      <span className="text-xs font-mono text-foreground-subtle tracking-wider uppercase font-medium">
                        STAGE {stage.step}
                      </span>
                    </div>

                    {/* Stage Title - Scaled up */}
                    <h3 className="text-2xl font-medium tracking-tight text-foreground font-display mb-2.5">
                      {stage.title}
                    </h3>

                    {/* Tagline */}
                    <div className="text-xs sm:text-sm font-mono text-accent-sky mb-4 font-medium">
                      {stage.tagline}
                    </div>

                    {/* Description - Scaled up */}
                    <p className="text-sm sm:text-[0.95rem] text-foreground-muted leading-relaxed mb-6 font-normal">
                      {stage.description}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="pt-5 border-t border-border/50">
                    <span className="text-xs font-mono text-foreground-subtle uppercase tracking-wider block mb-2.5 font-medium">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {stage.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-foreground-muted">
                          <Check className="w-3.5 h-3.5 text-accent-sky shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l border-border/70 space-y-8 mt-14">
          {PROCESS_STAGES.map((stage, index) => (
            <motion.div
              key={stage.step}
              className="relative p-7 rounded-2xl bg-background-card border border-border/80"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
            >
              {/* Timeline marker */}
              <div className="absolute -left-[33px] top-7 w-3.5 h-3.5 rounded-full bg-accent-blue ring-4 ring-background" />

              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-mono text-accent-sky font-medium">STAGE {stage.step}</span>
                <span className="text-xs font-mono text-foreground-subtle">{stage.tagline}</span>
              </div>

              <h3 className="text-2xl font-medium text-foreground font-display mb-2">
                {stage.title}
              </h3>

              <p className="text-base text-foreground-muted leading-relaxed mb-5">
                {stage.description}
              </p>

              <div className="pt-4 border-t border-border/50">
                <div className="text-xs font-mono text-foreground-subtle uppercase mb-2.5 font-medium">Outputs</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {stage.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs sm:text-sm text-foreground-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
