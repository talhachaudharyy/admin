/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#fbe6cb',
        customOrange: '#fa9002',
      },
    },
  },
  plugins: [],
}