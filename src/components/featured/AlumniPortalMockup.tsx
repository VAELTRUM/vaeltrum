import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const AlumniPortalMockup: React.FC = () => {
  return (
    <div className="w-full metallic-card group relative rounded-2xl overflow-hidden shadow-2xl text-left font-sans transition-all duration-300">
      {/* Specular Glint Shimmer Sweep */}
      <div className="metallic-shimmer" />

      {/* Top Chamfered Milled Specular Line */}
      <div className="metallic-edge absolute top-0 left-0 right-0" />

      {/* Browser Chrome Header */}
      <div className="px-5 py-3.5 bg-slate-100/95 dark:bg-[#13151A] border-b border-slate-200/90 dark:border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-xs" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-xs" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-xs" />
          
          <a
            href="https://alumni.ptu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-xs font-mono text-slate-600 dark:text-foreground-muted hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 group/url font-medium"
          >
            <span>alumni.ptu.ac.in</span>
            <ExternalLink className="w-3 h-3 text-sky-600 dark:text-accent-sky group-hover/url:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-foreground-subtle">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span className="hidden sm:inline font-medium">LIVE INSTITUTIONAL PLATFORM</span>
        </div>
      </div>

      {/* Real Live PTU Alumni Portal Screenshot Viewport */}
      <a
        href="https://alumni.ptu.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden bg-slate-900/10 dark:bg-black/40 cursor-pointer group/portal"
        aria-label="Open live IKGPTU Alumni ERP Portal at alumni.ptu.ac.in"
      >
        <motion.img
          src="/images/ptu-alumni-portal.jpg"
          alt="IKGPTU Alumni ERP Portal live interface showing alumni network, university convocations, and institutional workflows"
          loading="lazy"
          className="w-full h-auto object-cover object-top transition-transform duration-700 ease-out group-hover/portal:scale-[1.02]"
        />

        {/* Subtle hover specular overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/portal:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 pointer-events-none"
        >
          <span className="text-xs font-mono text-white flex items-center gap-1.5 drop-shadow-md">
            <span>Click to visit live portal (alumni.ptu.ac.in)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </a>

      {/* Authentic Portal Telemetry Bar */}
      <div className="px-5 py-3.5 bg-slate-50/90 dark:bg-[#101116] border-t border-slate-200/90 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-foreground-subtle">
        <a 
          href="https://alumni.ptu.ac.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-sky-600 dark:hover:text-accent-sky transition-colors flex items-center gap-1.5 font-semibold"
        >
          <span>ALUMNI.PTU.AC.IN</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <span className="text-slate-600 dark:text-white/70 font-medium">
          VERIFIED INSTITUTIONAL DEPLOYMENT
        </span>
      </div>
    </div>
  );
};
