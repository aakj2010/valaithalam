import type { Config } from "tailwindcss";
const globalColors = {
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#eaeaed",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
  base: {
    black: "#000000",
    white: "#ffffff",
  },
};
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        menu_text_light: globalColors.zinc[900],
        menu_text_dark: globalColors.zinc[50],
        button_text_light: globalColors.zinc[50],
        button_text_dark: globalColors.zinc[900], 
        text_secondary_light: globalColors.zinc[600],
        text_secondary_dark: globalColors.zinc[400],
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundColor: {
        website_light: globalColors.zinc[50],
        website_dark: globalColors.zinc[950],
        menu_bg_light: globalColors.zinc[50],
        menu_bg_dark: globalColors.zinc[900],
        menu_hover_light: globalColors.zinc[200],
        menu_hover_dark: globalColors.zinc[700],
        button_bg_light: globalColors.zinc[800], 
        button_bg_dark: globalColors.zinc[50],
      },
      borderColor: {
        menu_border_light: globalColors.zinc[300],
        menu_border_dark: globalColors.zinc[600],
        button_secondary_dark: globalColors.zinc[600],
        button_secondary_light: globalColors.zinc[800],
      },
      backgroundImage: {
        primary_h1_gradient_light: 'linear-gradient(180deg, #A1A1AA 0%, #09090B 100%)',
        primary_h1_gradient_dark: 'linear-gradient(180deg, #FAFAFA 0%, #71717A 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
