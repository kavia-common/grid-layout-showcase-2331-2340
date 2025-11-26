/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#F59E0B",
        error: "#EF4444",
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#111827"
      },
      backgroundImage: {
        // Gradient utilities for the Ocean theme as needed
        "ocean-soft": "linear-gradient(to bottom right, rgba(59,130,246,0.1), #f9fafb)",
        "ocean-accent": "linear-gradient(to right, #3b82f6, #f59e0b)"
      }
    }
  },
  plugins: []
}
