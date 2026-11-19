import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FEATURED_PROJECT } from '../../data/content';
import { AlumniPortalMockup } from './AlumniPortalMockup';
import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="work" className="relative py-28 sm:py-36 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#0A091B] overflow-hidden w-full transition-colors duration-300">
      {/* Background ambient glowing mesh */}
      <div 
        className="absolute top-1/4 -left-32 w-[650px] h-[650px] bg-gradient-to-tr from-[#38BDF8]/10 via-[#818CF8]/10 to-transparent dark:from-[#38BDF8]/15 dark:via-[#818CF8]/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container>
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeading
            title="Real systems. Real users."
            description="Our work focuses on building robust digital platforms designed for operational longevity and demanding institutional workflows."
            className="mb-0"
          />
        </div>

        {/* Featured Case Study Hero Container with Layered Offset Glow */}
        <div className="relative w-full">
          
          {/* Offset Colored Backing Card */}
          <div 
            className="absolute -inset-2 sm:-inset-3 rounded-[32px] bg-gradient-to-r from-[#FF7A59]/25 via-[#A855F7]/30 to-[#06B6D4]/25 dark:from-[#FF7A59]/40 dark:via-[#A855F7]/40 dark:to-[#06B6D4]/40 blur-xl opacity-70 pointer-events-none -z-10"
            aria-hidden="true"
          />

          <motion.div 
            className="metallic-card group relative rounded-[28px] p-7 sm:p-12 lg:p-16 overflow-hidden backdrop-blur-2xl w-full"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Metallic Specular Shimmer Sweep */}
            <div className="metallic-shimmer" />

            {/* Milled Metallic Specular Top Edge */}
            <div className="metallic-edge absolute top-0 left-0 right-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
              
              {/* Left Column: Contextual Project Narrative (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Category */}
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-300 font-bold mb-3">
                    {FEATURED_PROJECT.category}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 dark:text-white font-display mb-3 leading-[1.12]">
                    {FEATURED_PROJECT.title}
                  </h3>

                  {/* Institution Name & Live Link */}
                  <div className="text-base sm:text-lg font-medium text-slate-700 dark:text-white/80 mb-7 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-sky" />
                    <span>{FEATURED_PROJECT.client}</span>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-600 dark:text-foreground-muted leading-relaxed mb-8">
                    {FEATURED_PROJECT.description}
                  </p>

                  {/* Strictly Contextualized Project Fact: 5,000+ Trusted Users with Metallic Finish */}
                  <motion.div 
                    className="metallic-card relative p-6 rounded-2xl mb-8 overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="metallic-edge absolute top-0 left-0 right-0" />
                    <div className="flex items-baseline gap-3.5 mb-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold font-display gradient-text-cyan tracking-tight">
                        {FEATURED_PROJECT.highlightMetric.value}
                      </span>
                      <span className="text-base font-semibold text-slate-900 dark:text-white">
                        {FEATURED_PROJECT.highlightMetric.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-foreground-muted leading-relaxed font-normal">
                      {FEATURED_PROJECT.highlightMetric.context}
                    </p>
                  </motion.div>

                  {/* Verified Architectural Scope Items */}
                  <div className="space-y-3.5 mb-9">
                    <div className="text-xs font-mono text-slate-500 dark:text-white/50 uppercase tracking-wider mb-2 font-medium">
                      Delivered Capabilities
                    </div>
                    {FEATURED_PROJECT.scopeItems.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-white/90"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.08 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-sky shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Live ERP link + Contact */}
                <div className="pt-7 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href="https://alumni.ptu.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-semibold text-base px-7 py-4 rounded-2xl bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] text-white shadow-glow-cyan hover:opacity-95 active:scale-[0.98] transition-all duration-200 gap-2.5 group cursor-pointer"
                  >
                    <span>Visit Live ERP (alumni.ptu.ac.in)</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center font-medium text-base px-6 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-white border border-slate-300 dark:border-white/15 backdrop-blur-xl transition-all duration-200 gap-2 group cursor-pointer"
                  >
                    <span>Discuss Similar</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <p className="mt-4 text-xs text-slate-500 dark:text-white/50 leading-relaxed font-mono">
                  * Live institutional portal deployed for I.K. Gujral Punjab Technical University at <a href="https://alumni.ptu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-accent-sky underline">alumni.ptu.ac.in</a>.
                </p>
              </div>

              {/* Right Column: High Fidelity UI Representation (7 cols) */}
              <div className="lg:col-span-7 w-full">
                <AlumniPortalMockup />
              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
