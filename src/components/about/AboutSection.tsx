import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, Code, Sparkles, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-white/10 bg-[#0B0A1E] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-gradient-to-tr from-[#FF7A59]/15 via-[#8B5CF6]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

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
              <p className="text-white font-medium">
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
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div 
                className="p-6 rounded-2xl bg-[#141235]/90 border border-white/15 hover:border-purple-400/50 transition-colors shadow-lg backdrop-blur-xl"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-2.5 text-white text-base font-bold mb-2 font-display">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
                    <Code className="w-4 h-4" />
                  </div>
                  <span>Production Craft</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Clean modular codebases designed for readability, test coverage, and continuous deployment.
                </p>
              </motion.div>

              <motion.div 
                className="p-6 rounded-2xl bg-[#141235]/90 border border-white/15 hover:border-cyan-400/50 transition-colors shadow-lg backdrop-blur-xl"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-2.5 text-white text-base font-bold mb-2 font-display">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
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
            {/* Offset glowing background card */}
            <div 
              className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#A855F7]/30 via-[#38BDF8]/30 to-[#FF7A59]/30 blur-xl opacity-60 -z-10"
              aria-hidden="true" 
            />

            <div className="relative p-8 sm:p-10 rounded-3xl bg-[#131132]/95 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-2xl">
              <div className="relative z-10 space-y-6">
                
                {/* Visual Architectural Hierarchy Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1C1844] to-[#151336] border border-white/15 shadow-inner">
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-semibold">
                    System Paradigm
                  </div>
                  <div className="text-lg font-bold text-white mb-1 font-display">
                    Problem-Centric Architecture
                  </div>
                  <div className="text-xs sm:text-sm text-foreground-muted">
                    Engineered from root requirements upward to runtime execution.
                  </div>
                </div>

                {/* Isometric Layer Representation with interactive hover */}
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <motion.div 
                    className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/15 to-indigo-500/10 border border-purple-400/30 flex items-center justify-between text-white shadow-sm"
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <span className="flex items-center gap-2.5 font-medium">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                      Product &amp; Domain Model
                    </span>
                    <span className="text-xs text-purple-300 font-semibold">LAYER 03</span>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 flex items-center justify-between text-white shadow-sm"
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <span className="flex items-center gap-2.5 font-medium">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      Core API &amp; Business Logic
                    </span>
                    <span className="text-xs text-cyan-300 font-semibold">LAYER 02</span>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-teal-500/10 border border-emerald-400/30 flex items-center justify-between text-white shadow-sm"
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <span className="flex items-center gap-2.5 font-medium">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      Data Schema &amp; Infrastructure
                    </span>
                    <span className="text-xs text-emerald-300 font-semibold">LAYER 01</span>
                  </motion.div>
                </div>

                {/* Visual Telemetry */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50 font-medium">
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
