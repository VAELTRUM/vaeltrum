import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Code } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-border/40 bg-background-charcoal/20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Brand Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHeading
              label="ABOUT VAELTRUM"
              title="An engineering mindset, shaped around products."
              className="mb-8"
            />

            <div className="space-y-7 text-lg sm:text-xl md:text-2xl text-foreground-muted leading-relaxed font-normal">
              <p className="text-foreground/95 font-medium">
                Vaeltrum is built around a simple belief: useful technology begins with a well-understood problem.
              </p>
              <p>
                We bring together software engineering, product thinking, and practical execution to create digital products that serve real users.
              </p>
              <p>
                Whether it is a new SaaS platform, an enterprise application, or a custom software solution, our focus remains the same — build it thoughtfully and build it right.
              </p>
            </div>

            {/* Core Values / Engineering Tenets with Hover Motion */}
            <div className="mt-12 pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div 
                className="p-5 rounded-xl bg-background-card/70 border border-border/60 hover:border-accent-blue/40 transition-colors shadow-sm"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-2.5 text-foreground text-base font-semibold mb-1.5 font-display">
                  <Code className="w-5 h-5 text-accent-sky" />
                  <span>Production Craft</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Clean modular codebases designed for readability, test coverage, and continuous deployment.
                </p>
              </motion.div>

              <motion.div 
                className="p-5 rounded-xl bg-background-card/70 border border-border/60 hover:border-accent-blue/40 transition-colors shadow-sm"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-2.5 text-foreground text-base font-semibold mb-1.5 font-display">
                  <ShieldCheck className="w-5 h-5 text-accent-sky" />
                  <span>Honest Engineering</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Transparent architecture choices with clear trade-offs, realistic constraints, and dependable execution.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Abstract Architectural Visual Composition (5 cols) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-background-card border border-border/90 shadow-[0_16px_50px_rgba(0,0,0,0.45)] overflow-hidden">
              
              {/* Background blueprint grid */}
              <div className="absolute inset-0 bg-grid-subtle opacity-45 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Visual Architectural Hierarchy Card */}
                <div className="p-5 rounded-2xl bg-background-charcoal border border-border/70 shadow-sm">
                  <div className="text-xs font-mono text-accent-sky uppercase tracking-wider mb-2 font-medium">
                    System Paradigm
                  </div>
                  <div className="text-base font-semibold text-foreground mb-1 font-display">
                    Problem-Centric Architecture
                  </div>
                  <div className="text-xs sm:text-sm text-foreground-muted">
                    Engineered from root requirements upward to runtime execution.
                  </div>
                </div>

                {/* Isometric Layer Representation with interactive hover */}
                <div className="space-y-2.5 font-mono text-xs sm:text-sm">
                  <motion.div 
                    className="p-4 rounded-xl bg-[#141720] border border-accent-blue/40 flex items-center justify-between text-foreground shadow-sm"
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-sky" />
                      Product &amp; Domain Model
                    </span>
                    <span className="text-xs text-foreground-subtle font-medium">LAYER 03</span>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-xl bg-[#111319] border border-border/70 flex items-center justify-between text-foreground-muted"
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-border-focus" />
                      Core API &amp; Business Logic
                    </span>
                    <span className="text-xs text-foreground-subtle font-medium">LAYER 02</span>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-xl bg-[#0E1015] border border-border/50 flex items-center justify-between text-foreground-subtle"
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      Data Schema &amp; Infrastructure
                    </span>
                    <span className="text-xs text-foreground-subtle font-medium">LAYER 01</span>
                  </motion.div>
                </div>

                {/* Visual Telemetry */}
                <div className="pt-5 border-t border-border/50 flex items-center justify-between text-xs font-mono text-foreground-subtle font-medium">
                  <span>VAELTRUM // SPECIFICATION</span>
                  <span className="text-emerald-400">STABLE SPEC</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
