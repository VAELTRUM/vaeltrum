import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-slate-900/[0.06] dark:border-white/[0.08] overflow-hidden bg-slate-50/70 dark:bg-[#0A091B] w-full min-h-[80vh] flex items-center transition-colors duration-300">
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#38BDF8]/10 via-[#818CF8]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-[1.12]">
              Technology should <span className="gradient-text-hero">solve something</span>.
            </h2>

            {/* Radiant gradient accent line with metallic glint */}
            <div className="mt-8 relative h-[3px] w-36 bg-slate-200 dark:bg-white/10 overflow-hidden rounded-full">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FF7A59] via-[#FA709A] to-[#8B5CF6]"
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Thoughtful Editorial Narrative (7 cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-8 text-slate-600 dark:text-foreground-muted text-xl sm:text-2xl lg:text-[1.6rem] font-normal leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-slate-900 dark:text-white font-medium leading-relaxed">
              Good software is more than code. It starts with understanding a problem, designing the right solution, and engineering a product that people can actually depend on.
            </p>
            <p className="text-slate-600 dark:text-foreground-muted leading-relaxed">
              At Vaeltrum, we work across the entire product development process — from early concepts and system architecture to implementation and deployment.
            </p>

            {/* Architectural Pillars Cards with Metallic Finish */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-900/[0.08] dark:border-white/10 mt-2">
              {[
                { 
                  tag: '01 / DISCOVERY',
                  title: 'Root Problem Analysis', 
                  desc: 'Requirements analysis before architecture.', 
                  icon: <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-300" />, 
                  accent: 'from-amber-500/20 to-orange-500/10'
                },
                { 
                  tag: '02 / ARCHITECTURE',
                  title: 'Resilient Systems', 
                  desc: 'Built for scalability and maintenance.', 
                  icon: <Layers className="w-5 h-5 text-purple-600 dark:text-purple-300" />, 
                  accent: 'from-purple-500/20 to-indigo-500/10'
                },
                { 
                  tag: '03 / RELIABILITY',
                  title: 'Production Dependability', 
                  desc: 'Tested, documented, and shipped.', 
                  icon: <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />, 
                  accent: 'from-cyan-500/20 to-sky-500/10'
                }
              ].map((pillar, pIdx) => (
                <motion.div 
                  key={pillar.title}
                  className="metallic-card group relative p-6 rounded-2xl flex flex-col justify-between"
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + pIdx * 0.1 }}
                >
                  {/* Metallic Shimmer Sweep Glint */}
                  <div className="metallic-shimmer" />

                  {/* Chamfered Top Metallic Edge Line */}
                  <div className="metallic-edge absolute top-0 left-0 right-0" />

                  <div>
                    {/* Top Row: Icon with metallic bevel */}
                    <div className="mb-5">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.accent} border border-slate-900/[0.08] dark:border-white/15 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                        {pillar.icon}
                      </div>
                    </div>

                    <span className="text-lg font-bold text-slate-900 dark:text-white block mb-1.5 font-display transition-colors">
                      {pillar.title}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-foreground-muted leading-relaxed block font-normal">
                      {pillar.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
