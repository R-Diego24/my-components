/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0F172A",
        "surface-alt": "#1E293B",
        border: "#1E293B",
        text: "#FFFFFF",
        "text-muted": "#CBD5F5",
        primary: {
          DEFAULT: "#4ADE80",
          soft: "rgba(74, 222, 128, 0.1)",
          hover: "#5FF08D",
          active: "#3CCF6E",
        },
        secondary: {
          DEFAULT: "#38BDF8",
          soft: "rgba(56, 189, 248, 0.1)",
        },
        accent: {
          purple: "#A78BFA",
        },
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        pill: "999px",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "neon-green": "0 0 15px rgba(74, 222, 128, 0.45)",
        "neon-blue": "0 0 15px rgba(56, 189, 248, 0.45)",
        "neon-purple": "0 0 15px rgba(167, 139, 250, 0.45)",
      },
    },
  },
  plugins: [],
}
