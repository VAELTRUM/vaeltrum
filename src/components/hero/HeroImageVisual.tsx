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
      className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] select-none perspective-1000 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      {/* Background radial radiant atmospheric aura */}
      <div 
        className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-tr from-[#FF7A59]/30 via-[#A855F7]/35 to-[#38BDF8]/30 dark:from-[#FF7A59]/35 dark:via-[#A855F7]/40 dark:to-[#38BDF8]/35 blur-2xl opacity-80 pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Metallic Framed Photo Card with 3D Tilt - Covers Full Container */}
      <motion.div
        className="metallic-card group relative rounded-3xl w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] overflow-hidden shadow-2xl backdrop-blur-2xl flex flex-col justify-between"
        style={{
          transform: isHovering 
            ? `rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 10}deg) scale(1.01)` 
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Specular Glint Shimmer Sweep */}
        <div className="metallic-shimmer" />

        {/* Top Metallic Specular Chamfer Line */}
        <div className="metallic-edge absolute top-0 left-0 right-0 z-20" />

        {/* Minimal Floating Window Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 px-4 py-3 bg-white/70 dark:bg-black/60 backdrop-blur-md border-b border-slate-900/[0.08] dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
            <span className="ml-2 text-xs font-mono text-slate-700 dark:text-white/80 tracking-wider font-medium">
              vaeltrum // engineering
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-white/50">
            production
          </span>
        </div>

        {/* Engineering Team Photograph - Fully Covers Container */}
        <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] overflow-hidden">
          <img
            src="/images/team-collaboration.jpg"
            alt="Vaeltrum software engineering team collaborating on product architecture, code review, and cloud deployments"
            loading="eager"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          
          {/* Subtle inner shadow / bottom vignette overlay */}
          <div 
            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20" 
            aria-hidden="true"
          />

          {/* Bottom Floating Clean Editorial Caption without tags */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between text-xs font-mono text-white/90 z-10 drop-shadow-md">
            <span className="font-semibold tracking-wider">
              ENGINEERING IDEAS INTO PRODUCTS
            </span>
            <span className="text-white/70 hidden sm:inline">
              SYSTEMS &bull; ARCHITECTURE
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
