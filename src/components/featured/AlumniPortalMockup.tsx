import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Bell, 
  Search, 
  Award, 
  GraduationCap, 
  Building2, 
  ShieldCheck, 
  ChevronRight,
  Filter,
  ExternalLink
} from 'lucide-react';

export const AlumniPortalMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'directory' | 'announcements'>('dashboard');

  return (
    <div className="w-full rounded-2xl bg-[#0C0D11] border border-border/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden text-left font-sans">
      
      {/* OS / Browser Chrome Header */}
      <div className="px-4 py-3 bg-[#13151A] border-b border-border/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] font-mono text-foreground-muted hidden sm:inline">
            portal.ikgptu.ac.in/alumni-erp
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-foreground-subtle">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-sky" />
          <span className="hidden sm:inline">INSTITUTIONAL ERP GATEWAY</span>
        </div>
      </div>

      {/* Internal Portal App Layout */}
      <div className="flex flex-col lg:flex-row min-h-[480px]">
        
        {/* Left ERP Sidebar */}
        <div className="w-full lg:w-56 bg-[#101116] border-b lg:border-b-0 lg:border-r border-border/60 p-4 flex flex-col justify-between">
          <div className="space-y-4">
            {/* University Branding Unit */}
            <div className="flex items-center gap-2.5 pb-3 border-b border-border/50">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-sky">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground tracking-tight">IKGPTU Alumni</div>
                <div className="text-[10px] font-mono text-foreground-muted">Portal ERP v2.4</div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'dashboard'
                    ? 'bg-accent-blue/15 text-accent-sky border border-accent-blue/30'
                    : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.04]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('directory')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'directory'
                    ? 'bg-accent-blue/15 text-accent-sky border border-accent-blue/30'
                    : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.04]'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Alumni Directory</span>
              </button>

              <button
                onClick={() => setActiveTab('announcements')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'announcements'
                    ? 'bg-accent-blue/15 text-accent-sky border border-accent-blue/30'
                    : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.04]'
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Announcements</span>
              </button>
            </div>
          </div>

          {/* User profile preview footer */}
          <div className="pt-3 border-t border-border/50 hidden lg:block">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-border flex items-center justify-center text-[10px] font-mono text-foreground">
                AP
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-medium text-foreground truncate">Alumni Portal User</div>
                <div className="text-[10px] text-foreground-subtle truncate">Verified Graduate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Viewport */}
        <div className="flex-1 bg-[#090A0C] p-4 sm:p-6 flex flex-col justify-between">
          
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-5 border-b border-border/50">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 text-foreground-subtle absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder="Search alumni by name, branch, year..."
                className="w-full bg-[#13151A] border border-border/60 rounded-lg pl-8 pr-3 py-1.5 text-xs text-foreground placeholder:text-foreground-subtle cursor-default focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#13151A] border border-border/70 text-[10px] font-mono text-foreground-muted flex items-center gap-1.5">
                <Filter className="w-3 h-3 text-accent-sky" />
                All Batches
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Portal Active
              </span>
            </div>
          </div>

          {/* Dynamic Content based on active mock tab */}
          <div className="py-5">
            {activeTab === 'dashboard' && (
              <div className="space-y-5">
                {/* Highlighted Project Fact Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#141822] to-[#111319] border border-accent-blue/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-accent-sky tracking-wider uppercase mb-1">
                      Platform User Base
                    </div>
                    <div className="text-3xl font-semibold font-display text-white tracking-tight">
                      5,000+
                    </div>
                    <div className="text-xs text-foreground-muted mt-1">
                      Trusted alumni &amp; institutional records onboarded on the IKGPTU system.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-2 rounded-lg bg-background-charcoal border border-border/60 text-xs font-mono text-foreground-muted">
                    <Award className="w-4 h-4 text-accent-sky" />
                    <span>Verified Academic Institution</span>
                  </div>
                </div>

                {/* Split grid: Recent Records & University Bulletin */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Module 1: Alumni Directory Quick Feed */}
                  <div className="p-3.5 rounded-xl bg-[#12141A] border border-border/60">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-foreground">Alumni Directory Records</span>
                      <span className="text-[10px] font-mono text-accent-sky">Directory</span>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 rounded bg-[#171920] border border-border/40 flex items-center justify-between text-xs">
                        <div>
                          <div className="text-foreground font-medium">B.Tech — CSE Alumni</div>
                          <div className="text-[10px] text-foreground-muted">Batch 2018-2022 • Software Engineering</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">Verified</span>
                      </div>
                      <div className="p-2 rounded bg-[#171920] border border-border/40 flex items-center justify-between text-xs">
                        <div>
                          <div className="text-foreground font-medium">M.Tech — Systems &amp; Network</div>
                          <div className="text-[10px] text-foreground-muted">Batch 2019-2021 • Systems Lead</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Module 2: Institutional Announcements */}
                  <div className="p-3.5 rounded-xl bg-[#12141A] border border-border/60">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-foreground">Institutional Bulletin</span>
                      <Calendar className="w-3.5 h-3.5 text-foreground-subtle" />
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 rounded bg-[#171920] border border-border/40 text-xs">
                        <div className="text-foreground font-medium">Annual Alumni Engagement Initiative</div>
                        <div className="text-[10px] text-foreground-muted mt-0.5">IKGPTU Campus • Institutional Office</div>
                      </div>
                      <div className="p-2 rounded bg-[#171920] border border-border/40 text-xs">
                        <div className="text-foreground font-medium">University Mentorship Registry</div>
                        <div className="text-[10px] text-foreground-muted mt-0.5">Connecting undergraduates with industry seniors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'directory' && (
              <div className="space-y-3">
                <div className="text-xs font-medium text-foreground-muted pb-1">Sample Institutional Directory Records</div>
                {[
                  { name: 'Senior Software Engineer', dept: 'Computer Science & Engineering', role: 'Enterprise Systems' },
                  { name: 'Lead Infrastructure Architect', dept: 'Information Technology', role: 'Cloud Platform' },
                  { name: 'Engineering Project Manager', dept: 'Electronics & Communication', role: 'Operations' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#14161E] border border-border/50 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-foreground font-medium">{item.name}</div>
                      <div className="text-[10px] text-foreground-muted">{item.dept} • {item.role}</div>
                    </div>
                    <span className="text-[10px] font-mono text-accent-sky px-2 py-0.5 rounded bg-accent-blue/10 border border-accent-blue/20">
                      Profile Active
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'announcements' && (
              <div className="space-y-3">
                <div className="text-xs font-medium text-foreground-muted pb-1">University Institutional Announcements</div>
                <div className="p-3 rounded-lg bg-[#14161E] border border-border/50 text-xs">
                  <div className="font-medium text-foreground">Digital Institutional Verification Workflow</div>
                  <div className="text-[11px] text-foreground-muted mt-1">
                    Centralized verification of graduation credentials and professional records for university alumni.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#14161E] border border-border/50 text-xs">
                  <div className="font-medium text-foreground">Annual Institutional Conclave</div>
                  <div className="text-[11px] text-foreground-muted mt-1">
                    Connecting university alumni across engineering departments worldwide.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Authentic Interface Representation Note */}
          <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-foreground-subtle">
            <span>INTERFACE REPRESENTATION // IKGPTU ALUMNI ERP</span>
            <span className="text-accent-sky/80">AUTHENTICATED ERP ARCHITECTURE</span>
          </div>

        </div>
      </div>
    </div>
  );
};
