import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  Code2, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';

export const HeroDeckMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] h-[520px] sm:h-[580px] flex items-center justify-center select-none perspective-1000">
      
      {/* Background radial radiant atmospheric aura */}
      <div 
        className="absolute -top-10 -right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#FF7A59]/25 via-[#A855F7]/30 to-[#38BDF8]/25 blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Floating decorative geometric prisms */}
      <motion.div 
        className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF7A59] to-[#FA709A] shadow-glow-coral flex items-center justify-center text-white"
        animate={{ y: [-8, 8, -8], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Zap className="w-4 h-4 fill-white" />
      </motion.div>

      <motion.div 
        className="absolute bottom-12 -left-6 w-9 h-9 rounded-xl bg-gradient-to-tr from-[#38BDF8] to-[#6366F1] shadow-glow-cyan flex items-center justify-center text-white z-30"
        animate={{ y: [8, -8, 8], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      {/* 1. Main Background Dashboard Card (Angled in 3D Perspective) */}
      <motion.div
        className="absolute top-4 right-2 sm:right-6 w-[340px] sm:w-[420px] rounded-2xl bg-[#110F2B]/90 border border-white/15 p-5 shadow-[0_25px_60px_rgba(7,5,22,0.8)] backdrop-blur-xl z-10"
        style={{
          transform: 'rotateX(10deg) rotateY(-18deg) rotateZ(4deg)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [-6, 6, -6],
          rotateZ: [3.5, 4.5, 3.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Browser / Editor Top Bar */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[10px] font-mono text-white/50">vaeltrum.engine.ts</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            PROD READY
          </span>
        </div>

        {/* Code Snippet / Architecture Mock */}
        <div className="space-y-2 font-mono text-[11px] text-white/70">
          <div className="text-purple-400">export const <span className="text-sky-300">ArchitectureEngine</span> = &#123;</div>
          <div className="pl-4 text-emerald-300">platform: <span className="text-amber-200">"SaaS &amp; Enterprise"</span>,</div>
          <div className="pl-4 text-emerald-300">cluster: <span className="text-sky-300">"High Availability"</span>,</div>
          <div className="pl-4 text-emerald-300">scalability: <span className="text-indigo-300">true</span>,</div>
          <div className="text-purple-400">&#125;;</div>
        </div>

        {/* Mini telemetry meter */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Activity className="w-3 h-3" /> 0.12ms API latency
          </span>
          <span>Docker • Kubernetes</span>
        </div>
      </motion.div>

      {/* 2. Middle Floating Vivid Violet/Purple Card ("UI & Architecture") */}
      <motion.div
        className="absolute top-24 left-2 sm:left-4 w-[240px] sm:w-[270px] rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#6366F1] to-[#4338CA] p-5 shadow-glow-purple border border-white/25 z-20"
        style={{
          transform: 'rotateX(8deg) rotateY(-10deg) rotateZ(-4deg)',
        }}
        animate={{
          y: [6, -8, 6],
          rotateZ: [-5, -3, -5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30">
          <Layers className="w-5 h-5" />
        </div>

        <div className="text-xs font-mono uppercase tracking-wider text-purple-200 mb-1">
          01 / PRODUCT DESIGN
        </div>
        <div className="text-lg font-bold text-white tracking-tight leading-snug mb-2 font-display">
          SaaS Product Systems
        </div>
        <p className="text-xs text-white/80 leading-relaxed">
          From micro-interactions to complex data models.
        </p>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-white/90">
          <span>React • Next.js</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full">v4.0</span>
        </div>
      </motion.div>

      {/* 3. Front Floating Electric Cyan Card ("Cloud & APIs") */}
      <motion.div
        className="absolute bottom-6 right-6 sm:right-10 w-[240px] sm:w-[280px] rounded-2xl bg-gradient-to-br from-[#06B6D4] via-[#0284C7] to-[#1D4ED8] p-5 shadow-glow-cyan border border-white/25 z-25"
        style={{
          transform: 'rotateX(12deg) rotateY(-14deg) rotateZ(2deg)',
        }}
        animate={{
          y: [-8, 6, -8],
          rotateZ: [1, 3, 1]
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30">
          <Cpu className="w-5 h-5" />
        </div>

        <div className="text-xs font-mono uppercase tracking-wider text-cyan-100 mb-1">
          02 / ENTERPRISE PLATFORMS
        </div>
        <div className="text-lg font-bold text-white tracking-tight leading-snug mb-2 font-display">
          Backend &amp; API Scale
        </div>
        <p className="text-xs text-white/80 leading-relaxed">
          High-concurrency databases, Redis &amp; PostgreSQL.
        </p>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-white/90">
          <span>5,000+ Users</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full">Active</span>
        </div>
      </motion.div>

      {/* 4. Small Floating Glass Notification Badge */}
      <motion.div
        className="absolute top-2 right-12 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-glass text-xs font-mono text-white flex items-center gap-2 z-30"
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Vaeltrum Engine Active</span>
      </motion.div>

    </div>
  );
};
