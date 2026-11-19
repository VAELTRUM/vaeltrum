import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { TECH_CATEGORIES } from '../../data/content';

const categoryGradients = [
  'from-[#0284C7] to-[#6366F1] dark:from-[#38BDF8] dark:to-[#818CF8]',
  'from-[#8B5CF6] to-[#EC4899] dark:from-[#A855F7] dark:to-[#EC4899]',
  'from-[#FF7A59] to-[#F59E0B] dark:from-[#FF7A59] dark:to-[#F59E0B]'
];

export const TechnologyStack: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#0B0920] overflow-hidden w-full transition-colors duration-300">
      {/* Subtle ambient lighting */}
      <div 
        className="absolute bottom-10 left-1/3 w-[550px] h-[550px] bg-[#A855F7]/5 dark:bg-[#A855F7]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container>
        <div className="mb-16">
          <SectionHeading
            title="The right tools for the right problem."
            description="We select battle-tested, maintainable technologies based on project scale, data model requirements, and team constraints."
            className="mb-0"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              className="metallic-card group relative p-8 sm:p-10 rounded-3xl flex flex-col justify-between backdrop-blur-xl transition-all duration-300 w-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Metallic Shimmer Sweep Glint */}
              <div className="metallic-shimmer" />

              {/* Milled Metallic Specular Top Edge */}
              <div className="metallic-edge absolute top-0 left-0 right-0" />

              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-900/[0.08] dark:border-white/10 mb-7">
                  <h3 className={`text-lg font-mono uppercase tracking-widest bg-gradient-to-r ${categoryGradients[idx]} bg-clip-text text-transparent font-bold`}>
                    {cat.category}
                  </h3>
                  <span className="metallic-badge text-xs font-bold px-3 py-1">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.technologies.map((tech) => (
                    <motion.div 
                      key={tech.name} 
                      className="p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.04] border border-slate-900/[0.06] dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/[0.08] transition-all group/tech cursor-default shadow-xs"
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-base font-semibold font-mono text-slate-900 dark:text-white group-hover/tech:text-accent-sky transition-colors">
                          {tech.name}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-accent-sky group-hover/tech:animate-ping transition-colors" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-foreground-muted leading-relaxed font-normal">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-900/[0.08] dark:border-white/10 text-xs font-mono text-slate-400 dark:text-white/50 flex items-center justify-between font-medium">
                <span>STABILITY VERIFIED</span>
                <span className="metallic-badge text-[10px] py-0.5 px-2">ENTERPRISE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
