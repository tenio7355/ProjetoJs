/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      keyframes: {
        slideInBottom: {
          "0%": {
            transform: "translateY(100px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1"
          },
        }
      },
      animation: {
        "in": "slideInBottom 0.3s ease-in-out both",
        "out": "slideInBottom 0.3s ease-in-out reverse both"
      },
      colors: {
        cor: {
          primaria: "var(--primaria)",
          secundaria: "var(--secundaria)",
          terciaria: "var(--terciaria)",
          wrong: "var(--wrong)"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
}

