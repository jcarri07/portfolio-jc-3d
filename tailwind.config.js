/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00d2ff',
        'neon-purple': '#921aff',
      },
      backgroundImage: {
        'border-gradient': 'linear-gradient(to right, #00d2ff, #921aff)',
      }
    },
  },
  plugins: [],
}

