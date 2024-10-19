/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryThemeColor: '#39DB4A',
        secondary: '#f1c40f',
        danger: '#e74c3c',
      },
    },
  },
  plugins: [],
}

