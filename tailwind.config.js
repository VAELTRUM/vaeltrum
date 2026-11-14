/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#090A0C',
          charcoal: '#101114',
          card: '#121418',
          cardHover: '#171920',
          elevated: '#1a1d24'
        },
        foreground: {
          DEFAULT: '#F7F7F5',
          muted: '#85868C',
          subtle: '#62646A',
          dim: '#40424A',
        },
        border: {
          DEFAULT: '#27292E',
          subtle: '#1C1E23',
          focus: '#3F424B',
          highlight: '#3B82F6',
        },
        accent: {
          blue: '#3B82F6',
          sky: '#60A5FA',
          silver: '#C5C8D1',
          cyan: '#38BDF8',
          glow: 'rgba(59, 130, 246, 0.15)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Geist', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
