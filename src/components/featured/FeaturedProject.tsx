import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { FEATURED_PROJECT } from '../../data/content';
import { AlumniPortalMockup } from './AlumniPortalMockup';
import { ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="work" className="relative py-28 sm:py-36 border-t border-border/40 bg-background-charcoal/20">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            label="FEATURED CASE STUDY"
            title="Real systems. Real users."
            description="Our work focuses on building robust digital platforms designed for operational longevity and demanding institutional workflows."
            className="mb-0"
          />

          <div className="flex items-center gap-2.5 text-xs font-mono text-foreground-subtle self-end pb-3">
            <Shield className="w-4 h-4 text-accent-sky" />
            <span>VERIFIED INSTITUTIONAL ENGAGEMENT</span>
          </div>
        </div>

        {/* Featured Case Study Hero Container with Hover Depth */}
        <motion.div 
          className="relative rounded-3xl bg-background-card border border-border p-7 sm:p-11 lg:p-14 overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.35)]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Ambient Accent Glow */}
          <div 
            className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-accent-blue/10 blur-[130px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Contextual Project Narrative (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Category & Institution Metadata */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-background-charcoal border border-border text-accent-sky font-medium">
                    {FEATURED_PROJECT.category}
                  </span>
                </div>

                {/* Project Title - Scaled up */}
                <h3 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-foreground font-display mb-3 leading-[1.15]">
                  {FEATURED_PROJECT.title}
                </h3>

                {/* Institution Name */}
                <div className="text-base sm:text-lg font-medium text-foreground-muted mb-7 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-accent-blue" />
                  <span>{FEATURED_PROJECT.client}</span>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8">
                  {FEATURED_PROJECT.description}
                </p>

                {/* Strictly Contextualized Project Fact: 5,000+ Trusted Users */}
                <motion.div 
                  className="p-6 rounded-2xl bg-background-charcoal border border-border/90 mb-8 shadow-sm"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-baseline gap-3.5 mb-1.5">
                    <span className="text-4xl sm:text-5xl font-bold font-display text-foreground tracking-tight">
                      {FEATURED_PROJECT.highlightMetric.value}
                    </span>
                    <span className="text-base font-semibold text-accent-sky">
                      {FEATURED_PROJECT.highlightMetric.label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-subtle leading-relaxed">
                    {FEATURED_PROJECT.highlightMetric.context}
                  </p>
                </motion.div>

                {/* Verified Architectural Scope Items */}
                <div className="space-y-3.5 mb-9">
                  <div className="text-xs font-mono text-foreground-subtle uppercase tracking-wider mb-2 font-medium">
                    Delivered Capabilities
                  </div>
                  {FEATURED_PROJECT.scopeItems.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 text-xs sm:text-sm text-foreground-muted"
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
              <div className="pt-7 border-t border-border/70">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="text-base px-7 py-3.5"
                >
                  Discuss a Similar Project
                </Button>

                <p className="mt-4 text-xs text-foreground-subtle leading-relaxed font-mono">
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
      </Container>
    </section>
  );
};
