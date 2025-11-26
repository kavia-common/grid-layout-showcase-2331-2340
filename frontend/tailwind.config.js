/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Ocean palette with semantic tokens mapped to accessible scales
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb", // brand primary
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        amberAccent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // brand secondary
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f"
        },
        success: "#16a34a",
        error: "#ef4444",
        background: "#f9fafb",
        surface: "#ffffff",
        text: {
          DEFAULT: "#111827",
          subtle: "#4b5563",
          muted: "#6b7280"
        },
        border: {
          subtle: "#e5e7eb",
          strong: "#d1d5db"
        }
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "14px",
        xl: "16px"
      },
      boxShadow: {
        // Subtle, AA-friendly shadows
        xs: "0 1px 2px 0 rgba(0,0,0,0.04)",
        sm: "0 1px 3px 0 rgba(0,0,0,0.07), 0 1px 2px -1px rgba(0,0,0,0.06)",
        md: "0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.06)",
        lg: "0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.06)",
        focus: "0 0 0 3px rgba(37, 99, 235, 0.35)" // consistent blue focus
      },
      ringColor: {
        DEFAULT: "rgba(37, 99, 235, 0.4)"
      },
      ringOffsetColor: {
        DEFAULT: "#ffffff"
      },
      backgroundImage: {
        "ocean-soft": "linear-gradient(to bottom right, rgba(59,130,246,0.08), #f9fafb)",
        "ocean-accent": "linear-gradient(to right, #2563eb, #f59e0b)"
      }
    }
  },
  plugins: []
}
