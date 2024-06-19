const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkblue: "#000E1A",
      blue: "#0061B2",
      lightblue: "#E8EEFF",
      darkgrey: "#0F0F0F",
      "light-blue": "#E8EEFF",
      "dark-blue": "#0061B2",
      "dark-color": "000E1A",
      darkgrey: "#0F0F0F",
      "light-blue": "#E8EEFF",
      "dark-blue": "#0061B2",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      dropShadow: {
        "3xl": "0 4px 20px 0 rgba(0, 0, 0, 0.71)",
      },
      spacing: {
        100: "25rem",
        128: "32rem", // 512px
        160: "40rem", // 640px
        175: "43.75rem",
        100: "25rem",
        128: "32rem", // 512px
        160: "40rem", // 640px
        175: "43.75rem",

        190: "60rem", //960px
        200: "64rem", //1024px
        220: "87.5rem", //1400px
        190: "60rem", //960px
        200: "64rem", //1024px
        220: "87.5rem", //1400px
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      xss: "400px",
      smm: "540px",
      mdd: "740px",
      lgg: "1000px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
});
