import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Code, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-border/40 bg-background-charcoal/20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Brand Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHeading
              label="ABOUT VAELTRUM"
              title="An engineering mindset, shaped around products."
              className="mb-8"
            />

            <div className="space-y-6 text-base sm:text-lg text-foreground-muted leading-relaxed font-normal">
              <p className="text-foreground/90 font-medium">
                Vaeltrum is built around a simple belief: useful technology begins with a well-understood problem.
              </p>
              <p>
                We bring together software engineering, product thinking, and practical execution to create digital products that serve real users.
              </p>
              <p>
                Whether it is a new SaaS platform, an enterprise application, or a custom software solution, our focus remains the same — build it thoughtfully and build it right.
              </p>
            </div>

            {/* Core Values / Engineering Tenets */}
            <div className="mt-10 pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background-card/60 border border-border/50">
                <div className="flex items-center gap-2 text-foreground text-sm font-medium mb-1">
                  <Code className="w-4 h-4 text-accent-sky" />
                  <span>Production Craft</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Clean modular codebases designed for readability, test coverage, and continuous deployment.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-background-card/60 border border-border/50">
                <div className="flex items-center gap-2 text-foreground text-sm font-medium mb-1">
                  <ShieldCheck className="w-4 h-4 text-accent-sky" />
                  <span>Honest Engineering</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Transparent architecture choices with clear trade-offs, realistic constraints, and dependable execution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Architectural Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-8 rounded-2xl bg-background-card border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden">
              
              {/* Background blueprint grid */}
              <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Visual Architectural Hierarchy Card */}
                <div className="p-4 rounded-xl bg-background-charcoal border border-border/60">
                  <div className="text-[10px] font-mono text-accent-sky uppercase tracking-wider mb-2">
                    System Paradigm
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    Problem-Centric Architecture
                  </div>
                  <div className="text-xs text-foreground-muted">
                    Engineered from root requirements upward to runtime execution.
                  </div>
                </div>

                {/* Isometric Layer Representation */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#141720] border border-accent-blue/30 flex items-center justify-between text-foreground">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-sky" />
                      Product &amp; Domain Model
                    </span>
                    <span className="text-[10px] text-foreground-subtle">LAYER 03</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#111319] border border-border/60 flex items-center justify-between text-foreground-muted">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-border-focus" />
                      Core API &amp; Business Logic
                    </span>
                    <span className="text-[10px] text-foreground-subtle">LAYER 02</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E1015] border border-border/40 flex items-center justify-between text-foreground-subtle">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-border" />
                      Data Schema &amp; Cloud Infrastructure
                    </span>
                    <span className="text-[10px] text-foreground-subtle">LAYER 01</span>
                  </div>
                </div>

                {/* Visual Telemetry */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between text-[10px] font-mono text-foreground-subtle">
                  <span>VAELTRUM // SPECIFICATION</span>
                  <span className="text-emerald-400">STABLE SPEC</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
