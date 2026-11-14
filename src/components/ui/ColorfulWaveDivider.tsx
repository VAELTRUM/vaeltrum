import React from 'react';

export const ColorfulWaveDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none select-none py-10 pointer-events-none -my-8 sm:-my-12 z-20">
      <svg
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[140px] max-h-[220px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveCyan" x1="0" y1="0" x2="1440" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" stopOpacity="0.85" />
            <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.9" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="waveCoral" x1="0" y1="0" x2="1440" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F43F5E" stopOpacity="0.9" />
            <stop offset="0.4" stopColor="#FF7A59" stopOpacity="0.95" />
            <stop offset="0.8" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="1" stopColor="#E11D48" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="waveAmber" x1="0" y1="0" x2="1440" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="0.6" stopColor="#FF6B4A" stopOpacity="0.85" />
            <stop offset="1" stopColor="#D97706" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="wavePurple" x1="0" y1="0" x2="1440" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" stopOpacity="0.75" />
            <stop offset="0.5" stopColor="#A855F7" stopOpacity="0.7" />
            <stop offset="1" stopColor="#6366F1" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* Layer 1: Background Soft Purple Wave */}
        <path
          d="M0 60C320 120 480 20 800 80C1120 140 1280 40 1440 90V220H0V60Z"
          fill="url(#wavePurple)"
        />

        {/* Layer 2: Vivid Royal Cyan Wave */}
        <path
          d="M0 90C280 150 560 30 840 110C1120 180 1320 70 1440 120V220H0V90Z"
          fill="url(#waveCyan)"
        />

        {/* Layer 3: Radiant Coral-Red & Amber Wave */}
        <path
          d="M0 130C360 60 680 170 1020 100C1240 50 1380 120 1440 150V220H0V130Z"
          fill="url(#waveCoral)"
        />

        {/* Layer 4: Bright Golden Amber Ribbon */}
        <path
          d="M0 170C340 120 720 190 1060 140C1260 110 1380 150 1440 180V220H0V170Z"
          fill="url(#waveAmber)"
        />
      </svg>
    </div>
  );
};
