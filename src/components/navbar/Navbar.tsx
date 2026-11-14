import React, { useState, useEffect } from 'react';
import { VaeltrumLogo } from '../ui/VaeltrumLogo';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 24);

      // Track active section for indicator
      const sections = ['hero', 'services', 'work', 'approach', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
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
          ? 'bg-background-charcoal/85 backdrop-blur-md border-b border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.35)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <VaeltrumLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-border/40 bg-background-card/40 backdrop-blur-sm">
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
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-foreground font-semibold bg-white/[0.08]'
                    : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-accent-blue rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            className="tracking-wide"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            className="text-xs px-3 py-1.5"
          >
            Talk
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-white/[0.05] focus:outline-none transition-colors border border-border"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background-charcoal/95 backdrop-blur-xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-white/[0.05] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-foreground-muted text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border/60">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowUpRight className="w-4 h-4" />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
