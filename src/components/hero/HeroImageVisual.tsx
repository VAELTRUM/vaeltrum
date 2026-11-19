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
      className="relative w-full flex flex-col items-center justify-center select-none perspective-1000 py-6"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      {/* Background radiant ambient atmospheric lighting */}
      <div 
        className="absolute w-[500px] h-[500px] sm:w-[580px] sm:h-[580px] rounded-full bg-gradient-to-tr from-[#FF7A59]/30 via-[#A855F7]/35 to-[#38BDF8]/30 dark:from-[#FF7A59]/35 dark:via-[#A855F7]/40 dark:to-[#38BDF8]/35 blur-[110px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Floating 3D Collaboration Character Composition */}
      <motion.div
        className="relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[700px] xl:max-w-[740px] flex flex-col items-center justify-center"
        style={{
          transform: isHovering 
            ? `rotateX(${mousePos.y * -12}deg) rotateY(${mousePos.x * 14}deg) scale(1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      >
        {/* Floating motion wrap */}
        <motion.div
          animate={isHovering ? undefined : {
            y: [-8, 8, -8],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full flex flex-col items-center"
        >
          {/* Main 3D Team PNG Illustration */}
          <img
            src="/images/hero-collaboration.png"
            alt="Vaeltrum software engineering and product team collaborating around ideas and digital architecture"
            loading="eager"
            className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out"
          />

          {/* Realistic ambient ground shadow underneath the table */}
          <div 
            className="w-[72%] h-7 bg-slate-900/[0.12] dark:bg-black/50 rounded-full blur-xl -mt-5 pointer-events-none transition-all duration-300"
            aria-hidden="true" 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
