/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e0e0f',
        bg2: '#141416',
        bg3: '#1a1a1d',
        bg4: '#222226',
        gold: '#d4a853',
        gold2: '#e8c17a',
        text1: '#f0ede8',
        text2: '#a8a49e',
        text3: '#6a665f',
        success: '#6fcf97',
        danger: '#eb5757',
        info: '#56b4d3',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'pulse-gold': 'pulseGold 2s infinite',
        'fade-up': 'fadeUp 0.4s ease both',
        'spin-slow': 'spin 0.8s linear infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
