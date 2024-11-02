/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luckin: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#baddff',
          300: '#7cc3ff',
          400: '#38a8ff',
          500: '#4080ff',  // Primary color
          600: '#3575ff',  // Darker shade
          700: '#1c4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
