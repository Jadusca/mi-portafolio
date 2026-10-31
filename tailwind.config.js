import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: '#fdf8fd',
          100: '#f6eef8',
          200: '#eadcec',
          300: '#e3d3e6',
          400: '#cdb6d0',
          500: '#9c7fa0',
          600: '#7a6080',
          700: '#5b4a5e',
          800: '#3d2a42',
          900: '#261330',
          950: '#1b0b1f',
        },
        brand: {
          50: '#fff0f8',
          100: '#ffe0f2',
          200: '#ffc2e6',
          300: '#ff9ad6',
          400: '#ff7bd0',
          500: '#f0479f',
          600: '#c92a80',
          700: '#a0206a',
          800: '#7d1a52',
          900: '#52102f',
        },
        lavender: {
          50: '#f7f2ff',
          100: '#ece3ff',
          200: '#dccbff',
          300: '#c3aaf5',
          400: '#a98ae6',
          500: '#8c6bd1',
          600: '#7254b5',
          700: '#5c4292',
          800: '#4a3577',
          900: '#33255a',
        },
        accent: {
          50: '#effdfb',
          100: '#d2faf5',
          200: '#a6f2ea',
          300: '#6fe4d8',
          400: '#3ccfc2',
          500: '#17b0a4',
          600: '#0e8c83',
          700: '#0d6f69',
          800: '#0f5853',
          900: '#0f4a46',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Quicksand', ...defaultTheme.fontFamily.sans],
        pixel: ['"Press Start 2P"', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-soft': 'floatSoft 5s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'fade-down': 'fadeDown 0.25s ease-out',
      },
    },
  },
  plugins: [],
};
