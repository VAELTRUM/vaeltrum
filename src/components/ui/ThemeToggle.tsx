import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  variant?: 'segmented' | 'icon';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '',
  variant = 'segmented' 
}) => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`relative p-2 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.06] border border-slate-900/[0.08] dark:border-white/[0.1] text-slate-700 dark:text-white/80 hover:text-slate-950 dark:hover:text-white hover:bg-slate-900/[0.08] dark:hover:bg-white/[0.1] focus:outline-none transition-colors cursor-pointer shadow-sm ${className}`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="w-4 h-4 flex items-center justify-center">
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-slate-700" />
          )}
        </div>
      </button>
    );
  }

  return (
    <div 
      className={`inline-flex items-center p-1 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.06] border border-slate-900/[0.08] dark:border-white/[0.1] text-xs font-mono shadow-sm backdrop-blur-md transition-colors ${className}`}
      role="group"
      aria-label="Theme selector"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none font-medium ${
          !isDark
            ? 'bg-white text-slate-950 font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
            : 'text-slate-600 dark:text-white/60 hover:text-slate-950 dark:hover:text-white'
        }`}
        aria-pressed={!isDark}
      >
        <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-amber-500 fill-amber-500/20' : 'text-slate-400 dark:text-white/50'}`} />
        <span>Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none font-medium ${
          isDark
            ? 'bg-white/15 text-white font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.2)] border border-white/10'
            : 'text-slate-600 dark:text-white/60 hover:text-slate-950 dark:hover:text-white'
        }`}
        aria-pressed={isDark}
      >
        <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-sky-300 fill-sky-300/20' : 'text-slate-400 dark:text-white/50'}`} />
        <span>Dark</span>
      </button>
    </div>
  );
};
