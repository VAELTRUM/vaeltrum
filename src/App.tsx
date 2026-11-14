import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { IntroSection } from './components/intro/IntroSection';
import { WhatWeBuild } from './components/services/WhatWeBuild';
import { FeaturedProject } from './components/featured/FeaturedProject';
import { OurApproach } from './components/approach/OurApproach';
import { TechnologyStack } from './components/technology/TechnologyStack';
import { WhyVaeltrum } from './components/why/WhyVaeltrum';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent-blue/30 selection:text-white">
      {/* SECTION 01 — NAVIGATION */}
      <Navbar />

      <main className="flex-1">
        {/* SECTION 02 — HERO */}
        <Hero />

        {/* SECTION 03 — INTRODUCTION */}
        <IntroSection />

        {/* SECTION 04 — WHAT WE BUILD */}
        <WhatWeBuild />

        {/* SECTION 05 — FEATURED PROJECT */}
        <FeaturedProject />

        {/* SECTION 06 — OUR APPROACH */}
        <OurApproach />

        {/* SECTION 07 — TECHNOLOGY */}
        <TechnologyStack />

        {/* SECTION 08 — WHY VAELTRUM */}
        <WhyVaeltrum />

        {/* SECTION 09 — ABOUT */}
        <AboutSection />

        {/* SECTION 10 — CONTACT / CTA */}
        <ContactSection />
      </main>

      {/* SECTION 11 — FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
