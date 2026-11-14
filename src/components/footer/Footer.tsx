import React from 'react';
import { Container } from '../ui/Container';
import { VaeltrumLogo } from '../ui/VaeltrumLogo';
import { COMPANY_EMAIL, COMPANY_TAGLINE, NAV_LINKS } from '../../data/content';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/70 bg-background-charcoal/50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 pb-16 border-b border-border/60">
          
          {/* Brand & Tagline */}
          <div className="max-w-md">
            <VaeltrumLogo size="md" />
            <p className="mt-5 text-base sm:text-lg text-foreground-muted leading-relaxed font-normal">
              {COMPANY_TAGLINE}
            </p>
            <p className="mt-3 text-xs sm:text-sm text-foreground-subtle leading-relaxed">
              Independent software engineering company focused on SaaS products, enterprise platforms, and custom digital solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-subtle block mb-5 font-medium">
                Navigation
              </span>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-foreground-subtle block mb-5 font-medium">
                Inquiries
              </span>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-sm text-foreground-muted hover:text-accent-sky transition-colors font-mono"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </li>
                <li className="text-sm text-foreground-subtle">
                  Custom Engineering &amp; SaaS
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Dynamic Copyright & Back-to-Top */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-foreground-subtle">
          <div>
            &copy; {currentYear} VAELTRUM. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with intention.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors group cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
