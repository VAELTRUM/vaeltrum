import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES_DATA } from '../../data/content';
import { ArrowUpRight, Layers, Cpu, Server, Globe, Database, Compass } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'saas-dev': <Layers className="w-5 h-5 text-accent-sky" />,
  'custom-software': <Cpu className="w-5 h-5 text-accent-sky" />,
  'enterprise-platforms': <Server className="w-5 h-5 text-accent-sky" />,
  'web-apps': <Globe className="w-5 h-5 text-accent-sky" />,
  'backend-api': <Database className="w-5 h-5 text-accent-sky" />,
  'product-design': <Compass className="w-5 h-5 text-accent-sky" />,
};

export const WhatWeBuild: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-border/40">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            label="CAPABILITIES"
            title="From product vision to working software."
            description="We partner with organizations to architect, engineer, and deploy robust software systems engineered around actual operational needs."
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-foreground-subtle self-end pb-2">
            <span>[ 06 DISCIPLINES ]</span>
            <span>•</span>
            <span>SYSTEMATIC EXECUTION</span>
          </div>
        </div>

        {/* Refined 2-Column / 3-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative p-7 sm:p-8 rounded-xl bg-background-card border border-border/70 hover:border-border-focus transition-all duration-300 flex flex-col justify-between overflow-hidden hover:bg-background-cardHover/70 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Subtle top indicator bar on hover */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-sky to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />

                <div>
                  {/* Card Header: Number & Minimal Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-foreground-subtle tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-background-charcoal border border-border/80 flex items-center justify-center transition-colors group-hover:border-accent-blue/40">
                      {iconMap[service.id]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium tracking-tight text-foreground font-display mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Technical Focus Tags */}
                <div>
                  <div className="pt-5 border-t border-border/50 flex flex-wrap gap-2">
                    {service.focus.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-background-charcoal/80 text-foreground-muted/90 border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Minimal directional arrow cue */}
                  <div className="mt-5 flex items-center justify-between text-xs text-foreground-subtle font-mono group-hover:text-accent-sky transition-colors">
                    <span>SPECIFICATION</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
