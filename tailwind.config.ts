import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6F4F2',
          dark: '#EDE4DB',
        },
        sage: {
          DEFAULT: '#7E8A56',
          light: '#9BA574',
          dark: '#5E6A3E',
        },
        charcoal: {
          DEFAULT: '#2B2B2B',
          light: '#6F6F6F',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'leaf-drift': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'leaf-rotate': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'leaf-drift': 'leaf-drift 4s ease-in-out infinite',
        'leaf-rotate': 'leaf-rotate 5s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 18px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
