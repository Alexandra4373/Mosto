/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      backgroundImage: {
        hero: "url('/src/assets/header.png')",
      },

      colors: {
        blue: " rgba(31, 44, 115, 1)",
        secondary: "rgba(90, 108, 144, 0.8)",
        light: "rgba(246, 249, 252, 1)",
      },
    },
  },
  plugins: [],
};
