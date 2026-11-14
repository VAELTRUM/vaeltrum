import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { Button } from '../ui/Button';
import { COMPANY_EMAIL } from '../../data/content';
import { Mail, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Call-To-Action Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeading
                label="INITIATE CONVERSATION"
                title="Have something worth building?"
                description="Tell us what you're working on. Let's explore how we can turn it into a working product."
                className="mb-8"
              />

              {/* Direct Communication Channels */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-background-card border border-border/70 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-background-charcoal border border-border text-accent-sky">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-foreground-subtle uppercase tracking-wider mb-1">
                      Direct Inquiries
                    </div>
                    <a 
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-sm font-medium text-foreground hover:text-accent-sky transition-colors font-mono"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-background-card border border-border/70 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-background-charcoal border border-border text-accent-sky">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-foreground-subtle uppercase tracking-wider mb-1">
                      Consultation
                    </div>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      We discuss scope, architecture choices, and realistic timelines upfront.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('[Project Inquiry] Discussion Request')}`}
                  variant="secondary"
                  size="md"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Email Us Directly
                </Button>
              </div>
            </div>

            {/* Authenticity Guarantee Note */}
            <div className="mt-10 pt-6 border-t border-border/40 flex items-center gap-2 text-xs font-mono text-foreground-subtle">
              <ShieldCheck className="w-4 h-4 text-accent-sky" />
              <span>Direct correspondence. No marketing automation loops.</span>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-background-card border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between pb-6 border-b border-border/60 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground font-display">
                    Project Inquiry
                  </h3>
                  <p className="text-xs text-foreground-muted mt-0.5">
                    Share your requirements to explore architecture and delivery options.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-accent-sky bg-accent-blue/10 px-2 py-1 rounded border border-accent-blue/20">
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
