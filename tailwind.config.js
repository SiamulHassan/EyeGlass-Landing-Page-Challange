/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        12: "repeat(12, minmax(1fr, 95px))",
      },
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
  },
  plugins: [],
};
