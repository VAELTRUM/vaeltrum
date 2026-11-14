import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FEATURED_PROJECT } from '../../data/content';
import { AlumniPortalMockup } from './AlumniPortalMockup';
import { ArrowUpRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="work" className="relative py-28 sm:py-36 border-t border-white/10 bg-[#0A091B] overflow-hidden">
      {/* Background ambient glowing mesh */}
      <div 
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#818CF8]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            label="FEATURED CASE STUDY"
            title="Real systems. Real users."
            description="Our work focuses on building robust digital platforms designed for operational longevity and demanding institutional workflows."
            className="mb-0"
          />

          <div className="flex items-center gap-2.5 text-xs font-mono text-accent-sky self-end pb-3">
            <Shield className="w-4 h-4" />
            <span>VERIFIED INSTITUTIONAL ENGAGEMENT</span>
          </div>
        </div>

        {/* Featured Case Study Hero Container with Layered Offset Glow */}
        <div className="relative">
          
          {/* Offset Colored Backing Card (Signature DesignCode Layered Shadow Card) */}
          <div 
            className="absolute -inset-2 sm:-inset-3 rounded-[32px] bg-gradient-to-r from-[#FF7A59]/40 via-[#A855F7]/40 to-[#06B6D4]/40 blur-xl opacity-70 pointer-events-none -z-10"
            aria-hidden="true"
          />

          <motion.div 
            className="relative rounded-[28px] bg-[#12102E]/90 border border-white/15 p-7 sm:p-11 lg:p-14 overflow-hidden shadow-2xl backdrop-blur-2xl"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Contextual Project Narrative (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Category & Institution Metadata */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF7A59]/20 to-[#FA709A]/20 border border-[#FF7A59]/40 text-amber-300 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {FEATURED_PROJECT.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white font-display mb-3 leading-[1.15]">
                    {FEATURED_PROJECT.title}
                  </h3>

                  {/* Institution Name */}
                  <div className="text-base sm:text-lg font-medium text-white/80 mb-7 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-sky" />
                    <span>{FEATURED_PROJECT.client}</span>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8">
                    {FEATURED_PROJECT.description}
                  </p>

                  {/* Strictly Contextualized Project Fact: 5,000+ Trusted Users */}
                  <motion.div 
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#1C1844] to-[#141235] border border-white/15 mb-8 shadow-inner"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-baseline gap-3.5 mb-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold font-display gradient-text-cyan tracking-tight">
                        {FEATURED_PROJECT.highlightMetric.value}
                      </span>
                      <span className="text-base font-semibold text-white">
                        {FEATURED_PROJECT.highlightMetric.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                      {FEATURED_PROJECT.highlightMetric.context}
                    </p>
                  </motion.div>

                  {/* Verified Architectural Scope Items */}
                  <div className="space-y-3.5 mb-9">
                    <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-2 font-medium">
                      Delivered Capabilities
                    </div>
                    {FEATURED_PROJECT.scopeItems.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3 text-xs sm:text-sm text-white/90"
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

                {/* Action Button & Disclaimer */}
                <div className="pt-7 border-t border-white/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center font-semibold text-base px-8 py-4 rounded-2xl bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] text-white shadow-glow-cyan hover:opacity-95 active:scale-[0.98] transition-all duration-200 gap-2.5 group cursor-pointer"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <p className="mt-4 text-xs text-white/50 leading-relaxed font-mono">
                    * Dashboard visual represents the interface created for IKGPTU digital institutional engagement.
                  </p>
                </div>
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
