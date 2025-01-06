/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.8s ease-in forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        sm: "4px",
      },
      colors: {
        primary: "ffffff",
        secondary: "#2dd4bf",
        text_primary: "#334155",
        text_secondary: "#64748b",
        heading_color: "#333333",
        description_color: "#666666",
        icon_color: "#54ca95",
        accent: "#0f172a",
        text: {
          primary: "#334155",
          secondary: "#64748b",
        },
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
