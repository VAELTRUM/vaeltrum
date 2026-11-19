import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Activity, 
  Sparkles,
  Zap
} from 'lucide-react';

export const HeroDeckMockup: React.FC = () => {
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
      className="relative w-full max-w-[560px] h-[520px] sm:h-[580px] flex items-center justify-center select-none perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
    >
      {/* Background radial radiant atmospheric aura */}
      <div 
        className="absolute -top-10 -right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#FF7A59]/20 via-[#A855F7]/25 to-[#38BDF8]/20 dark:from-[#FF7A59]/25 dark:via-[#A855F7]/30 dark:to-[#38BDF8]/25 blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Floating decorative metallic geometric prisms */}
      <motion.div 
        className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF7A59] to-[#FA709A] shadow-glow-coral flex items-center justify-center text-white border border-white/30"
        animate={{ y: [-8, 8, -8], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15, rotate: 45 }}
      >
        <Zap className="w-4 h-4 fill-white" />
      </motion.div>

      <motion.div 
        className="absolute bottom-12 -left-6 w-9 h-9 rounded-xl bg-gradient-to-tr from-[#38BDF8] to-[#6366F1] shadow-glow-cyan flex items-center justify-center text-white z-30 border border-white/30"
        animate={{ y: [8, -8, 8], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15, rotate: -45 }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      {/* 1. Main Background Dashboard Card: Milled Metallic Finish */}
      <motion.div
        className="metallic-card absolute top-4 right-2 sm:right-6 w-[340px] sm:w-[420px] rounded-2xl p-5 backdrop-blur-xl z-10 transition-colors duration-300"
        style={{
          transform: `rotateX(${10 + mousePos.y * -14}deg) rotateY(${-18 + mousePos.x * 16}deg) rotateZ(4deg)`,
          transformStyle: 'preserve-3d',
        }}
        animate={isHovering ? undefined : {
          y: [-6, 6, -6],
          rotateZ: [3.5, 4.5, 3.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Specular Glint Shimmer Sweep */}
        <div className="metallic-shimmer" />

        {/* Top Metallic Specular Chamfer Line */}
        <div className="metallic-edge absolute top-0 left-0 right-0" />

        {/* Browser / Editor Top Bar */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-900/[0.08] dark:border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-xs" />
            <span className="ml-2 text-[10px] font-mono text-slate-500 dark:text-white/50 tracking-wide">vaeltrum.engine.ts</span>
          </div>
          <span className="metallic-badge text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold px-2.5 py-0.5">
            PROD READY
          </span>
        </div>

        {/* Code Snippet / Architecture Mock */}
        <div className="space-y-2 font-mono text-[11px] text-slate-700 dark:text-white/70">
          <div>
            <span className="text-indigo-600 dark:text-purple-400 font-semibold">export const </span>
            <span className="text-sky-600 dark:text-sky-300 font-semibold">ArchitectureEngine</span> = &#123;
          </div>
          <div className="pl-4">
            <span className="text-emerald-700 dark:text-emerald-300">platform: </span>
            <span className="text-amber-700 dark:text-amber-200">"SaaS &amp; Enterprise"</span>,
          </div>
          <div className="pl-4">
            <span className="text-emerald-700 dark:text-emerald-300">cluster: </span>
            <span className="text-sky-600 dark:text-sky-300">"High Availability"</span>,
          </div>
          <div className="pl-4">
            <span className="text-emerald-700 dark:text-emerald-300">scalability: </span>
            <span className="text-indigo-600 dark:text-indigo-300 font-semibold">true</span>,
          </div>
          <div>&#125;;</div>
        </div>

        {/* Mini telemetry meter */}
        <div className="mt-4 pt-3 border-t border-slate-900/[0.08] dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-white/50">
          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
            <Activity className="w-3 h-3" /> 0.12ms API latency
          </span>
          <span className="metallic-badge text-[9px] px-2 py-0.5">Docker • K8s</span>
        </div>
      </motion.div>

      {/* 2. Middle Floating Vivid Violet/Purple Card ("UI & Architecture") */}
      <motion.div
        className="absolute top-24 left-2 sm:left-4 w-[240px] sm:w-[270px] rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#6366F1] to-[#4338CA] p-5 shadow-glow-purple border border-white/30 z-20 overflow-hidden"
        style={{
          transform: `rotateX(${8 + mousePos.y * -10}deg) rotateY(${-10 + mousePos.x * 12}deg) rotateZ(-4deg)`,
        }}
        animate={isHovering ? undefined : {
          y: [6, -8, 6],
          rotateZ: [-5, -3, -5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Specular Metallic Bevel */}
        <div className="metallic-edge absolute top-0 left-0 right-0 opacity-40" />

        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30 shadow-xs">
          <Layers className="w-5 h-5" />
        </div>

        <div className="text-xs font-mono uppercase tracking-wider text-purple-200 mb-1 font-semibold">
          01 / PRODUCT DESIGN
        </div>
        <div className="text-lg font-bold text-white tracking-tight leading-snug mb-2 font-display">
          SaaS Product Systems
        </div>
        <p className="text-xs text-white/80 leading-relaxed font-normal">
          From micro-interactions to complex data models.
        </p>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-white/90">
          <span>React • Next.js</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full font-semibold border border-white/30">v4.0</span>
        </div>
      </motion.div>

      {/* 3. Front Floating Electric Cyan Card ("Cloud & APIs") */}
      <motion.div
        className="absolute bottom-6 right-6 sm:right-10 w-[240px] sm:w-[280px] rounded-2xl bg-gradient-to-br from-[#06B6D4] via-[#0284C7] to-[#1D4ED8] p-5 shadow-glow-cyan border border-white/30 z-25 overflow-hidden"
        style={{
          transform: `rotateX(${12 + mousePos.y * -8}deg) rotateY(${-14 + mousePos.x * 10}deg) rotateZ(2deg)`,
        }}
        animate={isHovering ? undefined : {
          y: [-8, 6, -8],
          rotateZ: [1, 3, 1]
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Specular Metallic Bevel */}
        <div className="metallic-edge absolute top-0 left-0 right-0 opacity-40" />

        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30 shadow-xs">
          <Cpu className="w-5 h-5" />
        </div>

        <div className="text-xs font-mono uppercase tracking-wider text-cyan-100 mb-1 font-semibold">
          02 / ENTERPRISE PLATFORMS
        </div>
        <div className="text-lg font-bold text-white tracking-tight leading-snug mb-2 font-display">
          Backend &amp; API Scale
        </div>
        <p className="text-xs text-white/80 leading-relaxed font-normal">
          High-concurrency databases, Redis &amp; PostgreSQL.
        </p>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-white/90">
          <span>5,000+ Users</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full font-semibold border border-white/30">Active</span>
        </div>
      </motion.div>

      {/* 4. Small Floating Metallic Notification Badge */}
      <motion.div
        className="metallic-badge absolute top-2 right-12 px-3.5 py-1.5 shadow-md text-xs font-mono flex items-center gap-2 z-30 font-medium"
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Vaeltrum Engine Active</span>
      </motion.div>

    </div>
  );
};
