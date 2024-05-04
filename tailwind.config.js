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
      },
      spacing: {
        "nav-height": "4rem",
        "view-height": `calc(100vh - 4rem)`,
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
