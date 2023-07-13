/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "color-54F": "#00A54F",
        "color-921": "#F57921",
        "color-693": "#7EB693",
        "color-4D4": "#D4D4D4",
        "color-8F8": "#F9F8F8",
        "color-6F1": "#EFF6F1",
        "color-C60": "#525C60",
        "color-C5B": "#274C5B",
      },
    },
    screens: {
      xxs: "380px",
      // => @media (min-width: 380px) { ... }

      xs: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
