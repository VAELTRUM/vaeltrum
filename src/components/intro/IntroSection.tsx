import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden bg-[#0A091B] w-full min-h-[80vh] flex items-center">
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#38BDF8]/10 via-[#818CF8]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" 
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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.12]">
              Technology should <span className="gradient-text-hero">solve something</span>.
            </h2>

            {/* Radiant gradient accent line */}
            <div className="mt-8 relative h-[3px] w-32 bg-white/10 overflow-hidden rounded-full">
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
            className="lg:col-span-7 flex flex-col gap-8 text-foreground-muted text-xl sm:text-2xl lg:text-[1.6rem] font-normal leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white font-medium leading-relaxed">
              Good software is more than code. It starts with understanding a problem, designing the right solution, and engineering a product that people can actually depend on.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              At Vaeltrum, we work across the entire product development process — from early concepts and system architecture to implementation and deployment.
            </p>

            {/* Architectural Pillars Cards */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-white/10 mt-2">
              {[
                { title: 'Root Problem Analysis', desc: 'Requirements analysis before architecture.', icon: <Sparkles className="w-5 h-5 text-amber-300" />, border: 'hover:border-amber-400/50' },
                { title: 'Resilient Systems', desc: 'Built for scalability and maintenance.', icon: <Layers className="w-5 h-5 text-purple-300" />, border: 'hover:border-purple-400/50' },
                { title: 'Production Dependability', desc: 'Tested, documented, and shipped.', icon: <ShieldCheck className="w-5 h-5 text-cyan-300" />, border: 'hover:border-cyan-400/50' }
              ].map((pillar, pIdx) => (
                <motion.div 
                  key={pillar.title}
                  className={`p-6 rounded-2xl bg-[#131130]/90 border border-white/15 transition-all shadow-lg backdrop-blur-xl ${pillar.border}`}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + pIdx * 0.1 }}
                >
                  <div className="mb-4">
                    {pillar.icon}
                  </div>
                  <span className="text-lg font-bold text-white block mb-1.5 font-display">{pillar.title}</span>
                  <span className="text-sm text-foreground-muted leading-relaxed block">{pillar.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
