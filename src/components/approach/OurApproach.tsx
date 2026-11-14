import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { PROCESS_STAGES } from '../../data/content';
import { ArrowRight, Check } from 'lucide-react';

export const OurApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="relative py-24 sm:py-32 border-t border-border/40">
      <Container>
        <SectionHeading
          label="METHODOLOGY"
          title="Built with intention. Engineered with precision."
          description="A disciplined 4-stage engineering lifecycle designed to minimize technical risk and deliver maintainable software."
        />

        {/* Desktop Horizontal Process Flow */}
        <div className="hidden lg:block relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border/80 -translate-y-12 z-0" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STAGES.map((stage, index) => {
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={stage.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[340px] ${
                    isActive
                      ? 'bg-background-card border-accent-blue/50 shadow-[0_8px_30px_rgba(59,130,246,0.12)]'
                      : 'bg-background-card/50 border-border/60 hover:border-border-focus hover:bg-background-card'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div>
                    {/* Step indicator node */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-colors ${
                        isActive 
                          ? 'bg-accent-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                          : 'bg-background-charcoal text-foreground-muted border border-border'
                      }`}>
                        {stage.step}
                      </div>
                      <span className="text-[11px] font-mono text-foreground-subtle tracking-wider uppercase">
                        STAGE {stage.step}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-xl font-medium tracking-tight text-foreground font-display mb-2">
                      {stage.title}
                    </h3>

                    {/* Tagline */}
                    <div className="text-xs font-mono text-accent-sky mb-3">
                      {stage.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-foreground-muted leading-relaxed mb-6 font-normal">
                      {stage.description}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="pt-4 border-t border-border/50">
                    <span className="text-[10px] font-mono text-foreground-subtle uppercase tracking-wider block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {stage.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5 text-[11px] text-foreground-muted">
                          <Check className="w-3 h-3 text-accent-sky shrink-0" />
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
        <div className="lg:hidden relative pl-6 border-l border-border/70 space-y-8 mt-12">
          {PROCESS_STAGES.map((stage, index) => (
            <motion.div
              key={stage.step}
              className="relative p-6 rounded-xl bg-background-card border border-border/70"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-accent-blue ring-4 ring-background" />

              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-accent-sky">STAGE {stage.step}</span>
                <span className="text-[11px] font-mono text-foreground-subtle">{stage.tagline}</span>
              </div>

              <h3 className="text-xl font-medium text-foreground font-display mb-2">
                {stage.title}
              </h3>

              <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                {stage.description}
              </p>

              <div className="pt-3 border-t border-border/50">
                <div className="text-[11px] font-mono text-foreground-subtle uppercase mb-2">Outputs</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {stage.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs text-foreground-muted flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent-sky" />
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
