/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          50: '#f8f5f4',
          100: '#efe7e4',
          200: '#e5d4ce',
          300: '#d2b5ad',
          400: '#b98e83',
          500: '#a87469',
          600: '#855a52',
          700: '#6b4a44',
          800: '#4b342f',
          900: '#2f201d'
        }
      }
    }
  },
  plugins: []
}
