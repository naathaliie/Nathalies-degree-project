import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: [
              'Roboto',
              'ui-sans-serif',
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Helvetica Neue',
              'Arial',
              'Noto Sans',
              'sans-serif',
              'Apple Color Emoji',
              'Segoe UI Emoji',
              'Segoe UI Symbol',
              'Noto Color Emoji',
              ...defaultTheme.fontFamily.sans
            ],
            saira: ['Saira ExtraCondensed'],
            roboto: ['Roboto']
          },
      screens: {
        "3xl": "2000px", // Ny breakpoint vid 2000px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        petCare: {
          myWhite: "var(--petCare-myWhite)",
          coal: "var(--petCare-coal)",
          sapphireTeal: {
            dark: "var(--petCare-sapphireTeal-dark)",
            main: "var(--petCare-sapphireTeal-main)",
            light: "var(--petCare-sapphireTeal-light)",
            superLight: "var(--petCare-sapphireTeal-superLight)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],

} satisfies Config;
