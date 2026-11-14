import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { FEATURED_PROJECT } from '../../data/content';
import { AlumniPortalMockup } from './AlumniPortalMockup';
import { ArrowUpRight, CheckCircle2, Shield, Users } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="work" className="relative py-24 sm:py-32 border-t border-border/40 bg-background-charcoal/20">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            label="FEATURED CASE STUDY"
            title="Real systems. Real users."
            description="Our work focuses on building robust digital platforms designed for operational longevity and demanding institutional workflows."
            className="mb-0"
          />

          <div className="flex items-center gap-2 text-xs font-mono text-foreground-subtle self-end pb-2">
            <Shield className="w-3.5 h-3.5 text-accent-sky" />
            <span>VERIFIED INSTITUTIONAL ENGAGEMENT</span>
          </div>
        </div>

        {/* Featured Case Study Hero Container */}
        <div className="relative rounded-2xl bg-background-card border border-border p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
          
          {/* Subtle Ambient Accent Glow */}
          <div 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Contextual Project Narrative (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Category & Institution Metadata */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-background-charcoal border border-border text-accent-sky">
                    {FEATURED_PROJECT.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-foreground font-display mb-3">
                  {FEATURED_PROJECT.title}
                </h3>

                {/* Institution Name */}
                <div className="text-sm font-medium text-foreground-muted mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span>{FEATURED_PROJECT.client}</span>
                </div>

                {/* Description */}
                <p className="text-base text-foreground-muted leading-relaxed mb-8">
                  {FEATURED_PROJECT.description}
                </p>

                {/* Strictly Contextualized Project Fact: 5,000+ Trusted Users */}
                <div className="p-5 rounded-xl bg-background-charcoal border border-border/80 mb-8">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl sm:text-4xl font-semibold font-display text-foreground tracking-tight">
                      {FEATURED_PROJECT.highlightMetric.value}
                    </span>
                    <span className="text-sm font-medium text-accent-sky">
                      {FEATURED_PROJECT.highlightMetric.label}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-subtle leading-relaxed">
                    {FEATURED_PROJECT.highlightMetric.context}
                  </p>
                </div>

                {/* Verified Architectural Scope Items */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-foreground-subtle uppercase tracking-wider mb-2">
                    Delivered Capabilities
                  </div>
                  {FEATURED_PROJECT.scopeItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-foreground-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-sky shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Disclaimer */}
              <div className="pt-6 border-t border-border/60">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Discuss a Similar Project
                </Button>

                <p className="mt-4 text-[11px] text-foreground-subtle leading-relaxed font-mono">
                  * Dashboard visual represents the interface created for IKGPTU digital institutional engagement.
                </p>
              </div>
            </div>

            {/* Right Column: High Fidelity UI Representation (7 cols) */}
            <div className="lg:col-span-7 w-full">
              <AlumniPortalMockup />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
