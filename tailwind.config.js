/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(10 20 40)",        // deep midnight blue (background)
        golden: "rgb(0 255 255)",     // neon cyan (highlight)
        slate: "rgb(255 0 150)",      // magenta (ACCENT only)
      },
      fontFamily: {
        sans: ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        spinRev: "spinRev 1s linear infinite",
      },
      keyframes: {
        spinRev: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
