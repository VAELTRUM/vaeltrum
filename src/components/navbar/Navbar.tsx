import React, { useState, useEffect } from 'react';
import { VaeltrumLogo } from '../ui/VaeltrumLogo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NAV_LINKS } from '../../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 24);

      const sections = ['hero', 'services', 'work', 'approach', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#0B0A1E]/80 backdrop-blur-xl border-b border-slate-900/[0.06] dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] py-3.5 sm:py-4'
          : 'bg-transparent border-b border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between">
        {/* Left: Vaeltrum Brand Logo */}
        <VaeltrumLogo size="md" />

        {/* Center: Desktop Navigation Floating Pill */}
        <nav 
          className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2 py-1.5 rounded-full border border-slate-900/[0.08] dark:border-white/[0.1] bg-slate-900/[0.04] dark:bg-white/[0.06] backdrop-blur-md shadow-sm transition-colors"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-200 rounded-full cursor-pointer select-none ${
                  isActive
                    ? 'text-slate-950 dark:text-white font-semibold bg-white dark:bg-white/15 shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
                    : 'text-slate-600 dark:text-white/70 hover:text-slate-950 dark:hover:text-white hover:bg-slate-900/[0.03] dark:hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-accent-blue rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Harmonious Segmented Theme Switcher + Radiant Gradient CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle variant="segmented" />
          
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF7A59] via-[#FA709A] to-[#8B5CF6] shadow-sm hover:shadow-glow-coral hover:opacity-95 active:scale-[0.98] transition-all duration-200 cursor-pointer border border-white/20 select-none"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle variant="icon" />
          
          <a
            href="#contact"
            className="text-xs px-3.5 py-1.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#FF7A59] via-[#FA709A] to-[#8B5CF6] shadow-sm hover:opacity-95 active:scale-95 transition-transform"
          >
            Talk
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-700 dark:text-white/80 hover:text-slate-950 dark:hover:text-white hover:bg-slate-900/[0.08] dark:hover:bg-white/[0.1] focus:outline-none transition-colors border border-slate-900/[0.08] dark:border-white/[0.1] bg-slate-900/[0.04] dark:bg-white/[0.06]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-900/[0.08] dark:border-white/[0.08] bg-white/95 dark:bg-[#0B0A1E]/95 backdrop-blur-2xl px-6 py-6 transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-4 border-b border-slate-900/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-white/60 uppercase tracking-wider font-medium">Appearance</span>
                <ThemeToggle variant="segmented" />
              </div>
              
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-base font-medium text-slate-800 dark:text-white/90 hover:bg-slate-900/[0.04] dark:hover:bg-white/[0.06] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 dark:text-white/40 text-sm">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-900/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-3">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-base font-semibold py-3.5 rounded-full text-white bg-gradient-to-r from-[#FF7A59] via-[#FA709A] to-[#8B5CF6] shadow-sm hover:shadow-glow-coral active:scale-[0.98] transition-transform"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
