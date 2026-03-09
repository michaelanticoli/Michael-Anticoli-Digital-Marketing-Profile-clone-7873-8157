/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#080E1E',
          secondary: '#0C1426',
          card: '#111C30',
          text: '#E2E8F0',
          muted: '#94A3B8',
          accent: '#14B8A6',
          cobalt: '#14B8A6',
          aquamarine: '#2DD4BF',
          border: 'rgba(20, 184, 166, 0.14)',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Be Vietnam Pro', 'sans-serif'],
        custom: ['Surgena', 'sans-serif'],
      },
      animation: {
        'bobbing': 'bobbing 3s ease-in-out infinite',
      },
      keyframes: {
        bobbing: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}