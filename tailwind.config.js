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
        diff: {
          add: {
            bg: "#d1fae5",
            border: "#059669",
            line: "#059669",
          },
          remove: {
            bg: "#fee2e2",
            border: "#DC2626",
            line: "#DC2626",
          },
          neutral: {
            bg: "#f8fafc",
            border: "#e2e8f0",
            line: "#64748b",
          },
        },
        code: {
          bg: "#1e1e1e",
          header: "#252526",
          border: "#3c3c3c",
          lineNumber: "#858585",
          text: "#d4d4d4",
        },
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
      },
      borderRadius: {
        full: "999px",
      },
    },
  },
  plugins: [],
};
