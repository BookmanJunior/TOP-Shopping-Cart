import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#101010",
        "primary-bg": "#f2f2f5",
        "accent-clr": "#d87d4a",
        "primary-product-bg": "#ffffff",
        "main-text-clr": "#000000",
        "secondary-text-clr": "#ffffff",
        "dark-gray": "#fafafa80",
      },
      spacing: {
        "nav-height": "4rem",
        "view-height": `calc(100vh - 4rem)`,
      },
      boxShadow: {
        "outline-box-accent": "0 0 0 2px #ffffff, 0 0 0 4px #d87d4a",
        "outline-box-gray": "0 0 0 2px #ffffff, 0 0 0 4px #f2f2f5",
        "light-dark": "0 2px 2px rgba(0, 0, 0, 0.2);",
      },
      keyframes: {
        slideIn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideOut: {
          from: { transform: "translateX(0)" },
          to: { transform: "translate(100%)", opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 300ms ease-in-out forwards",
        slideOut: "slideOut 300ms ease-in-out forwards",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
