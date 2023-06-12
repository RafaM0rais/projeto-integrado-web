/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/line-clamp"), require("@tailwindcss/aspect-ratio")],
};
