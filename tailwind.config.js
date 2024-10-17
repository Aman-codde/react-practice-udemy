/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '2p': '2%',
        '20p': '20%',
      }
    },
  },
  plugins: [],
}

