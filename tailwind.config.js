/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "ffffff",
        secondary: "#54ca95",
        text_primary: "#a6a6a6",
        text_secondary: "#b7b7b7",
        heading_color: "##333333",
        description_color: "#666666",
        icon_color: "#54ca95",
      },
      fontFamily: {
        sans: ["poppins", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        add_full: "0 4px 15px rgba(0, 0, 0, 0.3)", // A full shadow around the element
      },
    },
  },
  plugins: [],
};
