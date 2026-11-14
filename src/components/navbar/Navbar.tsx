import React, { useState, useEffect } from 'react';
import { VaeltrumLogo } from '../ui/VaeltrumLogo';
import { Button } from '../ui/Button';
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
          ? 'bg-background-charcoal/85 backdrop-blur-md border-b border-border/80 shadow-[0_8px_30px_rgba(0,0,0,0.15)] py-4'
          : 'bg-transparent border-b border-transparent py-6 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <VaeltrumLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5 px-3.5 py-1.5 rounded-full border border-border/50 bg-background-card/60 backdrop-blur-md shadow-sm">
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
                className={`relative px-4 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? 'text-foreground font-semibold bg-foreground/10'
                    : 'text-foreground-muted hover:text-foreground hover:bg-foreground/[0.04]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent-blue rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Controls: Theme Toggle + CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            href="#contact"
            variant="primary"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
            className="tracking-wide text-xs sm:text-sm font-semibold px-5 py-2.5"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            className="text-xs px-3.5 py-1.5"
          >
            Talk
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-foreground-muted hover:text-foreground hover:bg-foreground/[0.05] focus:outline-none transition-colors border border-border/80 bg-background-card"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden border-b border-border bg-background-charcoal/95 backdrop-blur-xl px-6 py-6 transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3.5 text-base font-medium text-foreground hover:bg-foreground/[0.05] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-foreground-muted text-sm">→</span>
                </a>
              ))}
              <div className="pt-5 mt-2 border-t border-border/60 flex items-center justify-between gap-3">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="flex-1 justify-center text-base py-3.5"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
