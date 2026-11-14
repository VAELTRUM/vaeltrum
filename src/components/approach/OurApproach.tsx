import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { PROCESS_STAGES } from '../../data/content';
import { Check } from 'lucide-react';

const stageGlows = [
  { border: 'border-[#FF7A59]/40', text: 'text-amber-300', bg: 'from-[#FF7A59] to-[#FA709A]', glow: 'shadow-glow-coral' },
  { border: 'border-[#8B5CF6]/40', text: 'text-purple-300', bg: 'from-[#8B5CF6] to-[#6366F1]', glow: 'shadow-glow-purple' },
  { border: 'border-[#06B6D4]/40', text: 'text-cyan-300', bg: 'from-[#06B6D4] to-[#3B82F6]', glow: 'shadow-glow-cyan' },
  { border: 'border-[#10B981]/40', text: 'text-emerald-300', bg: 'from-[#10B981] to-[#06B6D4]', glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]' },
];

export const OurApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="approach" className="relative py-28 sm:py-36 border-t border-white/10 bg-[#0A091A] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container>
        <SectionHeading
          label="METHODOLOGY"
          title="Built with intention. Engineered with precision."
          description="A disciplined 4-stage engineering lifecycle designed to minimize technical risk and deliver maintainable software."
        />

        {/* Desktop Horizontal Process Flow */}
        <div className="hidden lg:block relative mt-20">
          {/* Connecting gradient line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF7A59] via-[#8B5CF6] to-[#06B6D4] -translate-y-16 z-0 opacity-40" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STAGES.map((stage, index) => {
              const isActive = activeStep === index;
              const style = stageGlows[index % stageGlows.length];

              return (
                <motion.div
                  key={stage.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[390px] backdrop-blur-xl ${
                    isActive
                      ? `bg-[#191642] ${style.border} ${style.glow} scale-[1.02]`
                      : 'bg-[#12102E]/80 border-white/10 hover:border-white/25 hover:bg-[#151336]'
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
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-tr ${style.bg} text-white shadow-lg` 
                          : 'bg-white/10 text-white/80 border border-white/15'
                      }`}>
                        {stage.step}
                      </div>
                      <span className={`text-xs font-mono tracking-wider uppercase font-semibold ${style.text}`}>
                        STAGE {stage.step}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-2xl font-bold tracking-tight text-white font-display mb-2.5">
                      {stage.title}
                    </h3>

                    {/* Tagline */}
                    <div className={`text-xs sm:text-sm font-mono mb-4 font-medium ${style.text}`}>
                      {stage.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                      {stage.description}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="pt-5 border-t border-white/10">
                    <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-2.5 font-medium">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {stage.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-white/80">
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
        <div className="lg:hidden relative pl-6 border-l-2 border-purple-500/30 space-y-8 mt-14">
          {PROCESS_STAGES.map((stage, index) => {
            const style = stageGlows[index % stageGlows.length];
            return (
              <motion.div
                key={stage.step}
                className="relative p-7 rounded-3xl bg-[#131132] border border-white/15 backdrop-blur-xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {/* Timeline marker */}
                <div className={`absolute -left-[33px] top-7 w-4 h-4 rounded-full bg-gradient-to-tr ${style.bg} ring-4 ring-[#0A091A]`} />

                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-xs font-mono font-semibold ${style.text}`}>STAGE {stage.step}</span>
                  <span className="text-xs font-mono text-white/50">{stage.tagline}</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  {stage.title}
                </h3>

                <p className="text-base text-foreground-muted leading-relaxed mb-5">
                  {stage.description}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-mono text-white/50 uppercase mb-2.5 font-medium">Outputs</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stage.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="text-xs sm:text-sm text-white/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
