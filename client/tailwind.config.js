export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '0.25': '1px', // Adds a custom height class `h-0.25` that sets height to 1px
      },
    },
  },
  plugins: [],
}
