/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d6f0ff',
          200: '#b3e4ff',
          300: '#7fd4ff',
          400: '#39baff',
          500: '#0a9fe9',
          600: '#007fc7',
          700: '#03649b',
          800: '#0a557d',
          900: '#0f4766',
        }
      }
    },
  },
  plugins: [],
}
