import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const AlumniPortalMockup: React.FC = () => {
  return (
    <div className="w-full metallic-card group relative rounded-[28px] overflow-hidden shadow-2xl text-left font-sans transition-all duration-300">
      {/* Specular Glint Shimmer Sweep */}
      <div className="metallic-shimmer" />

      {/* Top Chamfered Milled Specular Line */}
      <div className="metallic-edge absolute top-0 left-0 right-0" />

      {/* Browser Chrome Header */}
      <div className="px-6 py-4 bg-slate-100/95 dark:bg-[#13151A] border-b border-slate-200/90 dark:border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-xs" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-xs" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-xs" />
          
          <a
            href="https://alumni.ptu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-xs sm:text-sm font-mono text-slate-600 dark:text-foreground-muted hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 group/url font-medium"
          >
            <span>https://alumni.ptu.ac.in</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-600 dark:text-accent-sky group-hover/url:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-foreground-subtle">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span className="hidden sm:inline font-medium tracking-wide">LIVE INSTITUTIONAL ERP</span>
        </div>
      </div>

      {/* Real Live PTU Alumni Portal Screenshot - Covers Full Container Width */}
      <a
        href="https://alumni.ptu.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full overflow-hidden bg-slate-900/10 dark:bg-black/50 cursor-pointer group/portal"
        aria-label="Open live IKGPTU Alumni ERP Portal at alumni.ptu.ac.in"
      >
        <motion.img
          src="/images/ptu-alumni-portal.jpg"
          alt="IKGPTU Alumni ERP Portal live interface showing alumni network, university convocations, and institutional workflows"
          loading="lazy"
          className="w-full h-auto object-cover object-top transition-transform duration-700 ease-out group-hover/portal:scale-[1.01]"
        />

        {/* Hover overlay hint */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/portal:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 sm:p-8 pointer-events-none"
        >
          <span className="text-xs sm:text-sm font-mono text-white flex items-center gap-2 drop-shadow-md font-medium">
            <span>Visit Live Institutional Portal (alumni.ptu.ac.in)</span>
            <ExternalLink className="w-4 h-4" />
          </span>
          <span className="text-xs font-mono text-white/80 hidden sm:inline">
            5,000+ Trusted Users Active
          </span>
        </div>
      </a>
    </div>
  );
};
