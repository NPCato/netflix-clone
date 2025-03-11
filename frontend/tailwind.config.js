/** @type {import('tailwindcss').Config} */
import tailwww from 'tailwind-scrollbar-hide'
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwww],
}