/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionDuration: {
        1500: "1500ms",
      },
      backgroundImage: {
        hero: `
        linear-gradient(rgba(0,105,181, 0.5),rgba(0,105,181, 0.5)),
        url('/hero.jpg')`,
        "cube-face": `linear-gradient(
  45deg,
  hsl(197deg 66% 59%) 0%,
  hsl(201deg 71% 64%) 11%,
  hsl(207deg 74% 69%) 22%,
  hsl(213deg 77% 74%) 33%,
  hsl(221deg 79% 79%) 44%,
  hsl(232deg 78% 82%) 56%,
  hsl(248deg 75% 84%) 67%,
  hsl(265deg 71% 84%) 78%,
  hsl(283deg 65% 84%) 89%,
  hsl(303deg 62% 84%) 100%
)`,
      },
      colors: {
        "primary-light": "#F5E1C6",
        "primary-medium": "#DEB887",
        "primary-dark": "#845415",
        "primary-very-dark": "#502D00",
        "secondary-1-light": "#A9DFF4",
        "secondary-1-medium": "#52B5DC",
        "secondary-1-dark": "#408AA8",
        "secondary-1-very-dark": "#285263",
        "secondary-2-light": "#FCD5FA",
        "secondary-2-medium": "#EFBBEC",
        "secondary-2-dark": "#9F489A",
        "secondary-2-very-dark": "#682B65",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
