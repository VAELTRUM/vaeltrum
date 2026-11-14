import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES_DATA } from '../../data/content';
import { 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Server, 
  Globe, 
  Database, 
  Compass,
} from 'lucide-react';

const cardStyleVariants = [
  {
    iconBg: 'bg-gradient-to-tr from-[#FF7A59] to-[#FA709A]',
    glow: 'rgba(255, 122, 89, 0.2)',
  },
  {
    iconBg: 'bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1]',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
  {
    iconBg: 'bg-gradient-to-tr from-[#06B6D4] to-[#3B82F6]',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  {
    iconBg: 'bg-gradient-to-tr from-[#3B82F6] to-[#6366F1]',
    glow: 'rgba(59, 130, 246, 0.2)',
  },
  {
    iconBg: 'bg-gradient-to-tr from-[#F43F5E] to-[#FB7185]',
    glow: 'rgba(244, 63, 94, 0.2)',
  },
  {
    iconBg: 'bg-gradient-to-tr from-[#10B981] to-[#06B6D4]',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  'saas-dev': <Layers className="w-6 h-6 text-white" />,
  'custom-software': <Cpu className="w-6 h-6 text-white" />,
  'enterprise-platforms': <Server className="w-6 h-6 text-white" />,
  'web-apps': <Globe className="w-6 h-6 text-white" />,
  'backend-api': <Database className="w-6 h-6 text-white" />,
  'product-design': <Compass className="w-6 h-6 text-white" />,
};

interface ServiceCardProps {
  service: typeof SERVICES_DATA[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const style = cardStyleVariants[index % cardStyleVariants.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-8 sm:p-10 rounded-3xl bg-[#12112C]/85 border border-white/10 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_12px_40px_rgba(7,5,22,0.6)] backdrop-blur-xl hover:border-white/25 w-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, ${style.glow}, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Top ambient color accent line */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      <div className="relative z-10">
        {/* Card Header: Floating Icon & Clean Monospace Number */}
        <div className="flex items-center justify-between mb-8">
          <div className={`w-14 h-14 rounded-2xl ${style.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
            {iconMap[service.id]}
          </div>

          <span className="text-sm font-mono tracking-widest text-white/50 font-semibold">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-[1.75rem] font-bold tracking-tight text-white font-display mb-4 group-hover:text-white transition-colors leading-[1.2]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-[1.1rem] text-foreground-muted leading-relaxed mb-8 font-normal">
          {service.description}
        </p>
      </div>

      {/* Technical Focus Items & Arrow */}
      <div className="relative z-10">
        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
          {service.focus.map((tag) => (
            <span
              key={tag}
              className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl bg-white/[0.05] text-white/90 border border-white/10 transition-colors group-hover:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Directional arrow cue */}
        <div className="mt-7 flex items-center justify-between text-xs sm:text-sm text-foreground-subtle font-mono group-hover:text-white transition-colors">
          <span className="tracking-wider">ENGINEERED ARCHITECTURE</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-accent-sky" />
        </div>
      </div>
    </motion.div>
  );
};

export const WhatWeBuild: React.FC = () => {
  return (
    <section id="services" className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <Container>
        <div className="mb-16">
          <SectionHeading
            title="From product vision to working software."
            description="We partner with organizations to architect, engineer, and deploy robust software systems engineered around actual operational needs."
            className="mb-0"
          />
        </div>

        {/* 3-Column Responsive Grid covering full container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
