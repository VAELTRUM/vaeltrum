import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Bell, 
  Search, 
  Award, 
  GraduationCap, 
  Building2, 
  ShieldCheck, 
  Filter,
  ExternalLink
} from 'lucide-react';

export const AlumniPortalMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'directory' | 'announcements'>('dashboard');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-[#0C0D11] border border-slate-200 dark:border-border shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.65)] overflow-hidden text-left font-sans transition-all duration-300">
      
      {/* OS / Browser Chrome Header */}
      <div className="px-5 py-3.5 bg-slate-100/90 dark:bg-[#13151A] border-b border-slate-200/90 dark:border-border/70 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <a
            href="https://alumni.ptu.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-xs font-mono text-slate-600 dark:text-foreground-muted hover:text-slate-900 dark:hover:text-white transition-colors hidden sm:flex items-center gap-1.5 group cursor-pointer font-medium"
          >
            <span>alumni.ptu.ac.in</span>
            <ExternalLink className="w-3 h-3 text-sky-600 dark:text-accent-sky group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-foreground-subtle">
          <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-accent-sky" />
          <span className="hidden sm:inline font-medium">LIVE INSTITUTIONAL ERP</span>
        </div>
      </div>

      {/* Internal Portal App Layout */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        
        {/* Left ERP Sidebar */}
        <div className="w-full lg:w-60 bg-slate-50/80 dark:bg-[#101116] border-b lg:border-b-0 lg:border-r border-slate-200/90 dark:border-border/70 p-5 flex flex-col justify-between">
          <div className="space-y-5">
            {/* University Branding Unit */}
            <a 
              href="https://alumni.ptu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-border/60 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-accent-blue/15 border border-indigo-500/20 dark:border-accent-blue/30 flex items-center justify-center text-indigo-600 dark:text-accent-sky group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-foreground tracking-tight group-hover:text-indigo-600 dark:group-hover:text-accent-sky transition-colors flex items-center gap-1">
                  <span>PTU Alumni</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-foreground-muted">IKGPTU ERP Portal</div>
              </div>
            </a>

            {/* Navigation Tabs with Active Indicator */}
            <div className="space-y-1.5">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: <Building2 className="w-4 h-4" /> },
                { id: 'directory', label: 'Alumni Directory', icon: <Users className="w-4 h-4" /> },
                { id: 'announcements', label: 'Announcements', icon: <Bell className="w-4 h-4" /> },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-accent-blue/15 text-indigo-700 dark:text-accent-sky border border-indigo-200/90 dark:border-accent-blue/40 shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-foreground-muted hover:text-slate-900 dark:hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* User profile preview footer */}
          <div className="pt-4 border-t border-slate-200 dark:border-border/60 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-border flex items-center justify-center text-xs font-mono text-slate-700 dark:text-foreground font-semibold">
                AP
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-medium text-slate-900 dark:text-foreground truncate">PTU Alumni User</div>
                <div className="text-[11px] text-slate-500 dark:text-foreground-subtle truncate">Verified Graduate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Viewport */}
        <div className="flex-1 bg-white dark:bg-[#090A0C] p-5 sm:p-7 flex flex-col justify-between">
          
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-border/60">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 dark:text-foreground-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder="Search alumni by name, branch, batch year..."
                className="w-full bg-slate-100/80 dark:bg-[#13151A] border border-slate-200 dark:border-border/70 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-foreground placeholder:text-slate-400 dark:placeholder:text-foreground-subtle cursor-default focus:outline-none font-normal"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#13151A] border border-slate-200 dark:border-border/80 text-xs font-mono text-slate-600 dark:text-foreground-muted flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-sky-600 dark:text-accent-sky" />
                All Batches
              </span>
              <a
                href="https://alumni.ptu.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2 hover:bg-emerald-500/20 transition-colors font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Portal Live ↗</span>
              </a>
            </div>
          </div>

          {/* Dynamic Animated Content Viewport */}
          <div className="py-6 min-h-[280px]">
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && (
                <motion.div 
                  key="dashboard"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Highlighted Project Fact Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-indigo-50/60 to-purple-50/60 dark:from-[#141822] dark:via-[#12151D] dark:to-[#101217] border border-sky-200/80 dark:border-accent-blue/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-sm">
                    <div>
                      <div className="text-xs font-mono text-sky-700 dark:text-accent-sky tracking-wider uppercase mb-1.5 font-semibold">
                        Platform User Base
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                        5,000+
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-foreground-muted mt-1.5 font-normal">
                        Trusted alumni &amp; institutional records onboarded on the PTU system.
                      </div>
                    </div>
                    <a
                      href="https://alumni.ptu.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-xl bg-white dark:bg-background-charcoal border border-slate-200 dark:border-border/80 text-xs font-mono text-sky-700 dark:text-accent-sky hover:border-sky-400 dark:hover:border-accent-sky/50 transition-colors shadow-sm font-semibold"
                    >
                      <Award className="w-4 h-4 text-sky-600 dark:text-accent-sky" />
                      <span>alumni.ptu.ac.in ↗</span>
                    </a>
                  </div>

                  {/* Split grid: Recent Records & University Bulletin */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Module 1: Alumni Directory Quick Feed */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12141A] border border-slate-200 dark:border-border/70 hover:border-slate-300 dark:hover:border-border transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-slate-700 dark:text-foreground">Recent Verified Records</span>
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Synced</span>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#171920] border border-slate-200/80 dark:border-border/50 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-slate-800 dark:text-foreground font-medium truncate">M.Tech (CSE) — Batch 2021</span>
                          <span className="text-[11px] text-slate-500 dark:text-foreground-muted font-mono shrink-0 ml-2">Jalandhar</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#171920] border border-slate-200/80 dark:border-border/50 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-slate-800 dark:text-foreground font-medium truncate">B.Tech (ECE) — Batch 2019</span>
                          <span className="text-[11px] text-slate-500 dark:text-foreground-muted font-mono shrink-0 ml-2">Mohali</span>
                        </div>
                      </div>
                    </div>

                    {/* Module 2: Institutional Announcements */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#12141A] border border-slate-200 dark:border-border/70 hover:border-slate-300 dark:hover:border-border transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-slate-700 dark:text-foreground">Institutional Bulletin</span>
                        <span className="text-[10px] font-mono text-sky-700 dark:text-accent-sky">Live</span>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#171920] border border-slate-200/80 dark:border-border/50 text-xs sm:text-sm text-slate-700 dark:text-foreground-muted leading-relaxed">
                          Centralized alumni verification workflows active for 2024 academic cycle.
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#171920] border border-slate-200/80 dark:border-border/50 text-xs sm:text-sm text-slate-700 dark:text-foreground-muted leading-relaxed">
                          Annual institutional convocations &amp; alumni digital services updated.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'directory' && (
                <motion.div 
                  key="directory"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-foreground-muted pb-1">Sample Institutional Directory Records</div>
                  {[
                    { name: 'Senior Software Engineer', dept: 'Computer Science & Engineering', role: 'Enterprise Systems' },
                    { name: 'Lead Infrastructure Architect', dept: 'Information Technology', role: 'Cloud Platform' },
                    { name: 'Engineering Project Manager', dept: 'Electronics & Communication', role: 'Operations' },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#14161E] border border-slate-200 dark:border-border/60 flex items-center justify-between text-xs sm:text-sm hover:border-indigo-400 dark:hover:border-accent-blue/40 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <div>
                        <div className="text-slate-900 dark:text-foreground font-medium">{item.name}</div>
                        <div className="text-[11px] text-slate-500 dark:text-foreground-muted">{item.dept} • {item.role}</div>
                      </div>
                      <span className="text-[11px] font-mono text-sky-700 dark:text-accent-sky px-2.5 py-1 rounded-md bg-sky-50 dark:bg-accent-blue/10 border border-sky-200 dark:border-accent-blue/25 font-semibold">
                        Profile Active
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'announcements' && (
                <motion.div 
                  key="announcements"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-foreground-muted pb-1">University Institutional Announcements</div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#14161E] border border-slate-200 dark:border-border/60 text-xs sm:text-sm space-y-1">
                    <div className="font-semibold text-slate-900 dark:text-foreground">Digital Institutional Verification Workflow</div>
                    <div className="text-xs text-slate-600 dark:text-foreground-muted leading-relaxed font-normal">
                      Centralized verification of graduation credentials and professional records for university alumni.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#14161E] border border-slate-200 dark:border-border/60 text-xs sm:text-sm space-y-1">
                    <div className="font-semibold text-slate-900 dark:text-foreground">Annual Institutional Conclave</div>
                    <div className="text-xs text-slate-600 dark:text-foreground-muted leading-relaxed font-normal">
                      Connecting university alumni across engineering departments worldwide.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Authentic Interface Representation Note */}
          <div className="pt-4 border-t border-slate-200 dark:border-border/50 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-foreground-subtle">
            <a href="https://alumni.ptu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-accent-sky transition-colors flex items-center gap-1 font-semibold">
              <span>ALUMNI.PTU.AC.IN</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-sky-600 dark:text-accent-sky/90 font-medium">AUTHENTICATED ERP ARCHITECTURE</span>
          </div>

        </div>
      </div>
    </div>
  );
};
