/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luckin: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0087ff',
          600: '#006ccc',
          700: '#005199',
          800: '#003666',
          900: '#001b33',
        }
      },
      animation: {
        'steam-1': 'steam 2s ease-out infinite',
        'steam-2': 'steam 2s ease-out infinite',
        'steam-3': 'steam 2s ease-out infinite',
        'fill-up': 'fillUp 2s ease-out forwards',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '50%': { transform: 'translateY(-10px) scale(1.2)', opacity: '0.5' },
          '100%': { transform: 'translateY(-20px) scale(1)', opacity: '0' },
        },
        fillUp: {
          '0%': { height: '0%' },
          '100%': { height: '30%' },
        },
      },
    },
  },
  plugins: [],
};