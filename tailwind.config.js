/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--bg-default)',
          charcoal: 'var(--bg-charcoal)',
          card: 'var(--bg-card)',
          cardHover: 'var(--bg-card-hover)',
          elevated: 'var(--bg-elevated)',
          deep: 'var(--bg-deep)',
        },
        foreground: {
          DEFAULT: 'var(--fg-default)',
          muted: 'var(--fg-muted)',
          subtle: 'var(--fg-subtle)',
          dim: 'var(--fg-dim)',
        },
        border: {
          DEFAULT: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
          focus: 'var(--border-focus)',
          highlight: 'var(--accent-blue)',
        },
        accent: {
          blue: 'var(--accent-blue)',
          sky: 'var(--accent-sky)',
          silver: 'var(--accent-silver)',
          coral: '#FF7A59',
          pink: '#F43F5E',
          purple: '#8B5CF6',
          violet: '#6366F1',
          cyan: '#06B6D4',
          glow: 'rgba(99, 102, 241, 0.25)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Geist', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.45)',
        'glow-coral': '0 0 40px -10px rgba(255, 122, 89, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-card': '0 20px 50px rgba(8, 7, 24, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        }
      }
    },
  },
  plugins: [],
}
