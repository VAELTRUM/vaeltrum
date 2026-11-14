import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { COMPANY_EMAIL } from '../../data/content';
import { Mail, MessageSquare, ShieldCheck, Zap, Layers, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-white/10 bg-[#0A091C] overflow-hidden w-full">
      {/* Background ambient aurora glow */}
      <div 
        className="absolute bottom-0 right-1/4 w-[650px] h-[550px] bg-gradient-to-tr from-[#FF7A59]/15 via-[#A855F7]/20 to-[#06B6D4]/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container>
        {/* Engagement Models Row */}
        <div className="mb-20 w-full">
          <SectionHeading
            title="Ready to start?"
            description="Whether you need early architecture validation, a rapid MVP build, or an enterprise scale platform, we engineer for longevity."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto pt-6">
            
            {/* Card 1: Rapid MVP / Concept (Left with offset cyan backing card) */}
            <div className="relative group w-full">
              <div 
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                aria-hidden="true"
              />
              <motion.div 
                className="relative rounded-3xl bg-[#131130] border border-white/15 p-8 flex flex-col justify-between h-full backdrop-blur-xl shadow-xl w-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-5 border border-cyan-400/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-widest mb-1 font-semibold">
                    DISCIPLINE 01
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2.5 font-display">
                    Rapid MVP
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                    Core problem validation, responsive frontend, clean database schema, and live deployment.
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 text-xs font-mono text-white/80">
                  Target: 4 - 8 Weeks
                </div>
              </motion.div>
            </div>

            {/* Card 2: Full SaaS Platform (Center Featured with offset purple backing card) */}
            <div className="relative group w-full">
              <div 
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#FF7A59] via-[#FA709A] to-[#8B5CF6] opacity-80 blur-lg group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                aria-hidden="true"
              />
              <motion.div 
                className="relative rounded-3xl bg-[#17143B] border border-purple-400/40 p-8 flex flex-col justify-between h-full backdrop-blur-xl shadow-2xl w-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-5 border border-purple-400/30">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-mono text-purple-200 uppercase tracking-widest mb-1 font-semibold">
                    DISCIPLINE 02 • CORE
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2.5 font-display">
                    Full SaaS Product
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                    Multi-tenant architecture, billing integration, authentication, RBAC, and automated testing pipelines.
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 text-xs font-mono text-white/90">
                  Target: 8 - 16 Weeks
                </div>
              </motion.div>
            </div>

            {/* Card 3: Enterprise Platform (Right with offset dark blue backing card) */}
            <div className="relative group w-full">
              <div 
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                aria-hidden="true"
              />
              <motion.div 
                className="relative rounded-3xl bg-[#131130] border border-white/15 p-8 flex flex-col justify-between h-full backdrop-blur-xl shadow-xl w-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-5 border border-indigo-400/30">
                    <Server className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-mono text-indigo-300 uppercase tracking-widest mb-1 font-semibold">
                    DISCIPLINE 03
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2.5 font-display">
                    Enterprise Platform
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                    Complex workflow automation, institutional ERP portals, high concurrency, and data migration.
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 text-xs font-mono text-white/80">
                  Target: Custom Scope
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Main Contact Form & Channels Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* Left Column: Direct Call-To-Action Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeading
                title="Have something worth building?"
                description="Tell us what you're working on. Let's explore how we can turn it into a working product."
                className="mb-10"
              />

              {/* Direct Communication Channels */}
              <div className="space-y-5 mb-10">
                <motion.div 
                  className="p-6 rounded-3xl bg-[#141235]/90 border border-white/15 flex items-start gap-4 shadow-sm backdrop-blur-xl"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="p-3.5 rounded-2xl bg-white/[0.08] border border-white/15 text-accent-sky">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1 font-medium">
                      Direct Inquiries
                    </div>
                    <a 
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-lg font-semibold text-white hover:text-accent-sky transition-colors font-mono"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-6 rounded-3xl bg-[#141235]/90 border border-white/15 flex items-start gap-4 shadow-sm backdrop-blur-xl"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="p-3.5 rounded-2xl bg-white/[0.08] border border-white/15 text-accent-sky">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1 font-medium">
                      Consultation
                    </div>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      We discuss architecture choices, technical scope, and realistic production timelines upfront.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Quick Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('[Project Inquiry] Discussion Request')}`}
                  className="inline-flex items-center justify-center font-medium text-base px-8 py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 backdrop-blur-xl transition-all duration-200 gap-2.5 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-accent-sky" />
                  <span>Email Us Directly</span>
                </a>
              </div>
            </div>

            {/* Authenticity Guarantee Note */}
            <div className="mt-12 pt-7 border-t border-white/10 flex items-center gap-3 text-xs sm:text-sm font-mono text-white/60">
              <ShieldCheck className="w-5 h-5 text-accent-sky shrink-0" />
              <span>Direct correspondence. No marketing automation loops.</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="p-7 sm:p-12 lg:p-14 rounded-3xl bg-[#141235]/95 border border-white/15 shadow-[0_20px_60px_rgba(7,5,22,0.8)] backdrop-blur-2xl w-full">
              <div className="pb-7 border-b border-white/10 mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Project Inquiry
                </h3>
                <p className="text-sm sm:text-base text-foreground-muted mt-1.5">
                  Share your requirements to explore architecture and delivery options.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
