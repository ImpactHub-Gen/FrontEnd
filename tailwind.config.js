/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'gray': '#f0f2f5',
        'gray-hl': '#9ca3af',
        'black': '#0a0a0a',
        'orange-normal': '#fab982',
        'orange-hl': '#f89e51',
        'blue-normal': '#2075c0',
        'blue-hl': '#195a94',
      },
    },
  },
  variants: {},
  plugins: [],
}