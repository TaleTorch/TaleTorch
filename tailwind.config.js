/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0D1117',
        'oxford-blue': '#0F1527',
        'claret': '#710024',
        'tomato': '#FA6244',
        'dark-orange': '#FF8A0E',
        'gray-1': '#9ca3af'
      },
    },
  },
  plugins: [],
}

