/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'algo-green': '#00D4AA',
        'algo-green-dark': '#00A882',
        'algo-blue': '#0066FF',
        'bg-dark': '#050A14',
        'bg-card': '#0D1626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-green': 'pulse-green 2s infinite',
      },
    },
  },
  plugins: [],
}
