import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES_DATA } from '../../data/content';
import { ArrowUpRight, Layers, Cpu, Server, Globe, Database, Compass } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'saas-dev': <Layers className="w-6 h-6 text-accent-sky" />,
  'custom-software': <Cpu className="w-6 h-6 text-accent-sky" />,
  'enterprise-platforms': <Server className="w-6 h-6 text-accent-sky" />,
  'web-apps': <Globe className="w-6 h-6 text-accent-sky" />,
  'backend-api': <Database className="w-6 h-6 text-accent-sky" />,
  'product-design': <Compass className="w-6 h-6 text-accent-sky" />,
};

interface ServiceCardProps {
  service: typeof SERVICES_DATA[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      className="group relative p-8 sm:p-9 rounded-2xl bg-background-card border border-border/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle top indicator bar */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-sky to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      <div className="relative z-10">
        {/* Card Header: Number & Minimal Icon */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-sm text-foreground-subtle tracking-widest font-medium">
            {service.number}
          </span>
          <div className="w-12 h-12 rounded-xl bg-background-charcoal border border-border/80 flex items-center justify-center transition-all duration-300 group-hover:border-accent-blue/60 group-hover:bg-accent-blue/10">
            {iconMap[service.id]}
          </div>
        </div>

        {/* Title - Scaled up for clarity and presence */}
        <h3 className="text-2xl sm:text-[1.65rem] font-medium tracking-tight text-foreground font-display mb-4 group-hover:text-white transition-colors leading-[1.2]">
          {service.title}
        </h3>

        {/* Description - Scaled up for readability */}
        <p className="text-base sm:text-[1.05rem] text-foreground-muted leading-relaxed mb-8 font-normal">
          {service.description}
        </p>
      </div>

      {/* Technical Focus Tags & Indicator */}
      <div className="relative z-10">
        <div className="pt-6 border-t border-border/50 flex flex-wrap gap-2.5">
          {service.focus.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-md bg-background-charcoal/90 text-foreground-muted/95 border border-border/60 transition-colors group-hover:border-border-focus"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Directional arrow cue */}
        <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-foreground-subtle font-mono group-hover:text-accent-sky transition-colors">
          <span className="tracking-wider">SPECIFICATION</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.div>
  );
};

export const WhatWeBuild: React.FC = () => {
  return (
    <section id="services" className="relative py-28 sm:py-36 border-t border-border/40">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            label="CAPABILITIES"
            title="From product vision to working software."
            description="We partner with organizations to architect, engineer, and deploy robust software systems engineered around actual operational needs."
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2.5 text-xs font-mono text-foreground-subtle self-end pb-3">
            <span className="w-2 h-2 rounded-full bg-accent-blue" />
            <span>[ 06 DISCIPLINES ]</span>
            <span>•</span>
            <span>SYSTEMATIC ARCHITECTURE</span>
          </div>
        </div>

        {/* Refined 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
