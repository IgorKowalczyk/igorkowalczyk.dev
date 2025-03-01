import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindTypography from "@tailwindcss/typography";
import tailwindGradientMaskImage from "tailwind-gradient-mask-image";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { spacing, fontFamily } from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";
import tailwindTextFill from "tailwindcss-text-fill";

/** @type {import('tailwindcss').Config} */
export default {
 darkMode: "class",
 content: [
  // Prettier
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./config.{js,ts,jsx,tsx}",
  "./content/**/*.mdx",
 ],
 theme: {
  extend: {
   fontFamily: {
    mono: ["var(--font-geist-mono)", ...fontFamily.mono],
   },
   typography: {
    DEFAULT: {
     css: {
      "h1,h2,h3,h4,h5": {
       "scroll-margin-top": spacing[28],
      },
      a: {
       color: colors.neutral[500],
       "text-decoration-color": colors.neutral[600],
       transition: "0.2s",
       "text-decoration-thickness": "1.5px",
       "text-underline-offset": "2px",
       "&:hover": {
        color: colors.black,
        "text-decoration-color": colors.black,
       },
      },
     },
    },
    dark: {
     css: {
      color: colors.neutral[300],
      "h1,h2,h3,h4,h5": {
       color: colors.neutral[100],
       "scroll-margin-top": spacing[28],
      },
      a: {
       color: colors.neutral[100],
       "text-decoration-color": colors.neutral[500],
       "&:hover": {
        color: colors.neutral[100],
        "text-decoration-color": colors.neutral[100],
       },
      },
      blockquote: {
       borderLeftColor: colors.neutral[700],
       color: colors.neutral[300],
      },
     },
    },
   },
   animation: {
    rays: "rotate-hue 20s ease-out infinite",
    scaleIn: "scaleIn 200ms ease",
    scaleOut: "scaleOut 200ms ease",
    fadeIn: "fadeIn 200ms ease",
    fadeOut: "fadeOut 200ms ease",
    enterFromLeft: "enterFromLeft 250ms ease",
    enterFromRight: "enterFromRight 250ms ease",
    exitToLeft: "exitToLeft 250ms ease",
    exitToRight: "exitToRight 250ms ease",
   },
   keyframes: {
    "rotate-hue": {
     "0%": {
      filter: "hue-rotate(540deg) saturate(5)",
     },
     to: {
      filter: "hue-rotate(180deg) saturate(5)",
     },
    },
    enterFromRight: {
     from: { opacity: "0", transform: "translateX(200px)" },
     to: { opacity: "1", transform: "translateX(0)" },
    },
    enterFromLeft: {
     from: { opacity: "0", transform: "translateX(-200px)" },
     to: { opacity: "1", transform: "translateX(0)" },
    },
    exitToRight: {
     from: { opacity: "1", transform: "translateX(0)" },
     to: { opacity: "0", transform: "translateX(200px)" },
    },
    exitToLeft: {
     from: { opacity: "1", transform: "translateX(0)" },
     to: { opacity: "0", transform: "translateX(-200px)" },
    },
    scaleIn: {
     from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
     to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
    },
    scaleOut: {
     from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
     to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
    },
    fadeIn: {
     from: { opacity: "0" },
     to: { opacity: "1" },
    },
    fadeOut: {
     from: { opacity: "1" },
     to: { opacity: "0" },
    },
   },
  },
 },
 variants: {
  typography: ["dark"],
 },
 plugins: [tailwindTextFill, tailwindGradientMaskImage, tailwindTypography, tailwindAspectRatio, tailwindAnimate],
} satisfies Config;
