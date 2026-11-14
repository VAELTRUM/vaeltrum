import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { WHY_PRINCIPLES } from '../../data/content';
import { ShieldCheck, Compass, Code, RefreshCw } from 'lucide-react';

const principleIcons = [
  <Compass className="w-5 h-5 text-amber-300" />,
  <Code className="w-5 h-5 text-purple-300" />,
  <RefreshCw className="w-5 h-5 text-cyan-300" />,
  <ShieldCheck className="w-5 h-5 text-emerald-300" />
];

const principleBorders = [
  'hover:border-amber-400/50 hover:shadow-glow-coral',
  'hover:border-purple-400/50 hover:shadow-glow-purple',
  'hover:border-cyan-400/50 hover:shadow-glow-cyan',
  'hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
];

export const WhyVaeltrum: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-white/10 bg-[#0A091A] overflow-hidden">
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
              className={`p-8 rounded-3xl bg-[#131132]/90 border border-white/15 transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-xl ${principleBorders[index % principleBorders.length]}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div>
                <div className="flex items-center justify-between mb-7">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center">
                    {principleIcons[index]}
                  </div>
                  <span className="font-mono text-xs font-semibold text-white/50 px-2.5 py-1 rounded-full bg-white/[0.05]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display mb-3.5 leading-snug">
                  {principle.title}
                </h3>

                <p className="text-sm sm:text-[0.95rem] text-foreground-muted leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50 font-medium">
                <span>STANDARD</span>
                <span className="text-accent-sky font-semibold">NON-NEGOTIABLE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
