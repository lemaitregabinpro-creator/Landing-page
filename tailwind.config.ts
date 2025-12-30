import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0a0e27',
        'dark-purple': '#1a0d2e',
        'neon-green': '#00ff88',
        'neon-cyan': '#00ccff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
        'bg-main': 'linear-gradient(135deg, #0a0e27 0%, #1a0d2e 50%, #000 100%)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'neon': '0 0 20px rgba(0, 255, 136, 0.3)',
        'neon-lg': '0 0 30px rgba(0, 255, 136, 0.5)',
        'neon-xl': '0 0 40px rgba(0, 255, 136, 0.7)',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config

