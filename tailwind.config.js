/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1018px",
      // => @media (min-width: 1018px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
