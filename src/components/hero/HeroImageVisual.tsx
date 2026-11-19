import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const HeroImageVisual: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="relative w-full max-w-[620px] select-none perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      {/* Background radial radiant atmospheric aura (Signature DesignCode Glow) */}
      <div 
        className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-tr from-[#FF7A59]/30 via-[#A855F7]/35 to-[#38BDF8]/30 dark:from-[#FF7A59]/35 dark:via-[#A855F7]/40 dark:to-[#38BDF8]/35 blur-2xl opacity-80 pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Metallic Framed Photo Card with 3D Tilt */}
      <motion.div
        className="metallic-card group relative rounded-3xl p-3 sm:p-4.5 backdrop-blur-2xl transition-all duration-300 w-full overflow-hidden shadow-2xl"
        style={{
          transform: isHovering 
            ? `rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 12}deg) scale(1.01)` 
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Specular Glint Shimmer Sweep */}
        <div className="metallic-shimmer" />

        {/* Top Metallic Specular Chamfer Line */}
        <div className="metallic-edge absolute top-0 left-0 right-0" />

        {/* Minimal Window Header Bar */}
        <div className="flex items-center justify-between px-3 py-2.5 mb-2.5 border-b border-slate-900/[0.08] dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
            <span className="ml-2 text-xs font-mono text-slate-500 dark:text-white/50 tracking-wider">
              vaeltrum // engineering
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-white/40">
            src/production
          </span>
        </div>

        {/* Engineering Team Photograph Container */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-900/10 dark:bg-black/30 border border-slate-900/[0.06] dark:border-white/10">
          <img
            src="/images/team-collaboration.jpg"
            alt="Vaeltrum software engineering team collaborating on product architecture, code review, and cloud deployments"
            loading="eager"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          
          {/* Subtle inner shadow overlay */}
          <div 
            className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" 
            aria-hidden="true"
          />
        </div>

        {/* Bottom Clean Editorial Caption without tags */}
        <div className="pt-3.5 px-3 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-white/60">
          <span className="font-medium text-slate-700 dark:text-white/80">
            ENGINEERING IDEAS INTO PRODUCTS
          </span>
          <span className="text-slate-400 dark:text-white/40">
            SYSTEMS &bull; ARCHITECTURE
          </span>
        </div>
      </motion.div>
    </div>
  );
};
