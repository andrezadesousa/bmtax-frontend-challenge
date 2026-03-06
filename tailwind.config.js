/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#391B64",
          dark: "#391B64",
          medium: "#50268C",
          light: "#6D28D9",
        },
        surface: {
          light: "#F5F3FF",
          white: "#FFFFFF",
        },
        text: {
          dark: "#111827",
          white: "#FFFFFF",
        },
      },
      borderRadius: {
        full: "999px",
      },
    },
  },
  plugins: [],
};
