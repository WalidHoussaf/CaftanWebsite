/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'amiri': ['var(--font-amiri)'],
        'scheherazade': ['Scheherazade New', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        pattaya: ['var(--font-pattaya)'],
      },
      colors: {
        'cream': '#FAF7F0',
        'taupe': '#B2A59B',
        'navy': '#183661',
        'noir': '#222222',
        'sapphire': '#123458',
        'emerald': '#D4C9BE',
        'sand': '#F1EFEC',
        'gold': '#D4C9BE',
        'ruby': '#123458',
        'copper': '#D4C9BE',
        'terracotta': '#D4C9BE',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out 0.5s forwards',
        'slide-up-delay': 'slideUp 0.8s ease-out 1.2s forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
        'float': 'float 7s ease-in-out infinite',
        'float-delay': 'float 9s ease-in-out infinite 2s',
        'scroll-down': 'scrollDown 1.5s ease infinite',
        'bounce': 'bounce 3s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse': 'pulse 3s infinite',
        'scale': 'scale 12s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        scale: {
          '0%': { transform: 'scale(0)', opacity: '0.7' },
          '50%': { transform: 'scale(3)', opacity: '0' },
          '51%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(6px)', opacity: '0.2' },
          '100%': { transform: 'translateY(0)', opacity: '0.6' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'text-gradient': 'linear-gradient(to right, #123458, #030303)',
      },
      zIndex: {
        '-1': '-1',
      },
      transitionDuration: {
        '15000': '15000ms',
      },
    },
  },
  plugins: [],
} 