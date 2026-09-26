/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        navy: "#06111f",
        bluebrand: "#145eff",
        cyanbrand: "#20c7ff",
      },
      boxShadow: {
        blueglow: "0 20px 70px rgba(20,94,255,.20)",
      },
    },
  },
  plugins: [],
};