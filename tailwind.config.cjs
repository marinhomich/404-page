/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'octo': "url('/octo.png')",
      }
    },
    fontFamily: {
      'mono': ['JetBrains Mono', 'monospace']
      
    }
  },
  plugins: [],
}