import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { Button } from '../ui/Button';
import { COMPANY_EMAIL } from '../../data/content';
import { Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-border/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Call-To-Action Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeading
                label="INITIATE CONVERSATION"
                title="Have something worth building?"
                description="Tell us what you're working on. Let's explore how we can turn it into a working product."
                className="mb-10"
              />

              {/* Direct Communication Channels */}
              <div className="space-y-5 mb-10">
                <motion.div 
                  className="p-5 rounded-2xl bg-background-card border border-border/80 flex items-start gap-4 shadow-sm"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="p-3 rounded-xl bg-background-charcoal border border-border text-accent-sky">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-foreground-subtle uppercase tracking-wider mb-1 font-medium">
                      Direct Inquiries
                    </div>
                    <a 
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-base font-semibold text-foreground hover:text-accent-sky transition-colors font-mono"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-5 rounded-2xl bg-background-card border border-border/80 flex items-start gap-4 shadow-sm"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="p-3 rounded-xl bg-background-charcoal border border-border text-accent-sky">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-foreground-subtle uppercase tracking-wider mb-1 font-medium">
                      Consultation
                    </div>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      We discuss architecture choices, technical scope, and realistic production timelines upfront.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('[Project Inquiry] Discussion Request')}`}
                  variant="secondary"
                  size="lg"
                  icon={<Mail className="w-4 h-4" />}
                  className="text-base px-7 py-3.5"
                >
                  Email Us Directly
                </Button>
              </div>
            </div>

            {/* Authenticity Guarantee Note */}
            <div className="mt-12 pt-7 border-t border-border/50 flex items-center gap-3 text-xs sm:text-sm font-mono text-foreground-subtle">
              <ShieldCheck className="w-5 h-5 text-accent-sky shrink-0" />
              <span>Direct correspondence. No marketing automation loops.</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-12 rounded-3xl bg-background-card border border-border/90 shadow-[0_16px_50px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between pb-7 border-b border-border/70 mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-foreground font-display">
                    Project Inquiry
                  </h3>
                  <p className="text-sm text-foreground-muted mt-1">
                    Share your requirements to explore architecture and delivery options.
                  </p>
                </div>
                <span className="text-xs font-mono text-accent-sky bg-accent-blue/10 px-3 py-1.5 rounded-lg border border-accent-blue/25 font-medium">
                  CONFIDENTIAL
                </span>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
