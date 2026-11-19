import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { WHY_PRINCIPLES } from '../../data/content';
import { ShieldCheck, Compass, Code, RefreshCw } from 'lucide-react';

const principleIcons = [
  <Compass className="w-5 h-5 text-amber-500 dark:text-amber-300" />,
  <Code className="w-5 h-5 text-purple-600 dark:text-purple-300" />,
  <RefreshCw className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />,
  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-300" />
];

const principleBorders = [
  'hover:border-amber-400/50 hover:shadow-glow-coral',
  'hover:border-purple-400/50 hover:shadow-glow-purple',
  'hover:border-cyan-400/50 hover:shadow-glow-cyan',
  'hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
];

export const WhyVaeltrum: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0A091A] overflow-hidden w-full transition-colors duration-300">
      <Container>
        <div className="mb-16">
          <SectionHeading
            title="Small details. Serious engineering."
            description="How we approach our work defines the longevity and dependability of the software we ship."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {WHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              className={`metallic-card group relative p-8 sm:p-9 rounded-3xl transition-all duration-300 flex flex-col justify-between backdrop-blur-xl w-full ${principleBorders[index % principleBorders.length]}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Metallic Shimmer Sweep Glint */}
              <div className="metallic-shimmer" />

              {/* Milled Metallic Specular Top Edge */}
              <div className="metallic-edge absolute top-0 left-0 right-0" />

              <div>
                <div className="flex items-center justify-between mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-white/[0.08] border border-slate-900/[0.08] dark:border-white/15 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {principleIcons[index]}
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-400 dark:text-white/40">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display mb-3.5 leading-snug">
                  {principle.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-foreground-muted leading-relaxed font-normal">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-900/[0.08] dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 dark:text-white/50 font-medium">
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
