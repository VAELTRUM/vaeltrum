import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Bell, 
  Search, 
  Award, 
  GraduationCap, 
  Building2, 
  ShieldCheck, 
  Filter,
} from 'lucide-react';

export const AlumniPortalMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'directory' | 'announcements'>('dashboard');

  return (
    <div className="w-full rounded-2xl bg-[#0C0D11] border border-border shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.65)] overflow-hidden text-left font-sans transition-all duration-300">
      
      {/* OS / Browser Chrome Header */}
      <div className="px-5 py-3.5 bg-[#13151A] border-b border-border/70 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-foreground-muted hidden sm:inline">
            portal.ikgptu.ac.in/alumni-erp
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-foreground-subtle">
          <ShieldCheck className="w-4 h-4 text-accent-sky" />
          <span className="hidden sm:inline">INSTITUTIONAL ERP GATEWAY</span>
        </div>
      </div>

      {/* Internal Portal App Layout */}
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        
        {/* Left ERP Sidebar */}
        <div className="w-full lg:w-60 bg-[#101116] border-b lg:border-b-0 lg:border-r border-border/70 p-5 flex flex-col justify-between">
          <div className="space-y-5">
            {/* University Branding Unit */}
            <div className="flex items-center gap-3 pb-4 border-b border-border/60">
              <div className="w-9 h-9 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-sky">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground tracking-tight">IKGPTU Alumni</div>
                <div className="text-[11px] font-mono text-foreground-muted">ERP Network v2.4</div>
              </div>
            </div>

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
                        ? 'bg-accent-blue/15 text-accent-sky border border-accent-blue/40 shadow-sm'
                        : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.04]'
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
          <div className="pt-4 border-t border-border/60 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs font-mono text-foreground font-semibold">
                AP
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-medium text-foreground truncate">Alumni Portal User</div>
                <div className="text-[11px] text-foreground-subtle truncate">Verified Graduate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Viewport */}
        <div className="flex-1 bg-[#090A0C] p-5 sm:p-7 flex flex-col justify-between">
          
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-5 border-b border-border/60">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-foreground-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder="Search alumni by name, branch, batch year..."
                className="w-full bg-[#13151A] border border-border/70 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-foreground placeholder:text-foreground-subtle cursor-default focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#13151A] border border-border/80 text-xs font-mono text-foreground-muted flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-accent-sky" />
                All Batches
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Portal Online
              </span>
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
                  <div className="p-5 rounded-xl bg-gradient-to-r from-[#141822] via-[#12151D] to-[#101217] border border-accent-blue/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-inner">
                    <div>
                      <div className="text-xs font-mono text-accent-sky tracking-wider uppercase mb-1.5 font-medium">
                        Platform User Base
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                        5,000+
                      </div>
                      <div className="text-xs sm:text-sm text-foreground-muted mt-1.5">
                        Trusted alumni &amp; institutional records onboarded on the IKGPTU platform.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-2.5 rounded-xl bg-background-charcoal border border-border/80 text-xs font-mono text-foreground-muted shadow-sm">
                      <Award className="w-4 h-4 text-accent-sky" />
                      <span>Verified Academic Institution</span>
                    </div>
                  </div>

                  {/* Split grid: Recent Records & University Bulletin */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Module 1: Alumni Directory Quick Feed */}
                    <div className="p-4 rounded-xl bg-[#12141A] border border-border/70 hover:border-border transition-colors">
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-xs sm:text-sm font-semibold text-foreground font-display">Alumni Directory Records</span>
                        <span className="text-[11px] font-mono text-accent-sky">Active DB</span>
                      </div>
                      <div className="space-y-2.5">
                        <div className="p-2.5 rounded-lg bg-[#171920] border border-border/50 flex items-center justify-between text-xs sm:text-sm">
                          <div>
                            <div className="text-foreground font-medium">B.Tech — CSE Alumni</div>
                            <div className="text-[11px] text-foreground-muted">Batch 2018-2022 • Software Engineering</div>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Verified</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#171920] border border-border/50 flex items-center justify-between text-xs sm:text-sm">
                          <div>
                            <div className="text-foreground font-medium">M.Tech — Systems &amp; Network</div>
                            <div className="text-[11px] text-foreground-muted">Batch 2019-2021 • Infrastructure Architect</div>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Module 2: Institutional Announcements */}
                    <div className="p-4 rounded-xl bg-[#12141A] border border-border/70 hover:border-border transition-colors">
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-xs sm:text-sm font-semibold text-foreground font-display">Institutional Bulletin</span>
                        <Calendar className="w-4 h-4 text-foreground-subtle" />
                      </div>
                      <div className="space-y-2.5">
                        <div className="p-2.5 rounded-lg bg-[#171920] border border-border/50 text-xs sm:text-sm">
                          <div className="text-foreground font-medium">Annual Alumni Engagement Initiative</div>
                          <div className="text-[11px] text-foreground-muted mt-0.5">IKGPTU Campus • Institutional Office</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#171920] border border-border/50 text-xs sm:text-sm">
                          <div className="text-foreground font-medium">University Mentorship Registry</div>
                          <div className="text-[11px] text-foreground-muted mt-0.5">Undergraduate industry mentoring network</div>
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
                  <div className="text-xs sm:text-sm font-medium text-foreground-muted pb-1">Sample Institutional Directory Records</div>
                  {[
                    { name: 'Senior Software Engineer', dept: 'Computer Science & Engineering', role: 'Enterprise Systems' },
                    { name: 'Lead Infrastructure Architect', dept: 'Information Technology', role: 'Cloud Platform' },
                    { name: 'Engineering Project Manager', dept: 'Electronics & Communication', role: 'Operations' },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-[#14161E] border border-border/60 flex items-center justify-between text-xs sm:text-sm hover:border-accent-blue/40 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <div>
                        <div className="text-foreground font-medium">{item.name}</div>
                        <div className="text-[11px] text-foreground-muted">{item.dept} • {item.role}</div>
                      </div>
                      <span className="text-[11px] font-mono text-accent-sky px-2.5 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/25">
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
                  <div className="text-xs sm:text-sm font-medium text-foreground-muted pb-1">University Institutional Announcements</div>
                  <div className="p-4 rounded-xl bg-[#14161E] border border-border/60 text-xs sm:text-sm space-y-1">
                    <div className="font-semibold text-foreground">Digital Institutional Verification Workflow</div>
                    <div className="text-xs text-foreground-muted leading-relaxed">
                      Centralized verification of graduation credentials and professional records for university alumni.
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#14161E] border border-border/60 text-xs sm:text-sm space-y-1">
                    <div className="font-semibold text-foreground">Annual Institutional Conclave</div>
                    <div className="text-xs text-foreground-muted leading-relaxed">
                      Connecting university alumni across engineering departments worldwide.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Authentic Interface Representation Note */}
          <div className="pt-4 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-foreground-subtle">
            <span>INTERFACE REPRESENTATION // IKGPTU ALUMNI ERP</span>
            <span className="text-accent-sky/90">AUTHENTICATED ERP ARCHITECTURE</span>
          </div>

        </div>
      </div>
    </div>
  );
};
