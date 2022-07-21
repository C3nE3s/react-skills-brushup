module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'app-layout':  'fit-content(20ch) minmax(min(50vw, 30ch), 1fr)'
      }
    },
  },
  plugins: [],
}