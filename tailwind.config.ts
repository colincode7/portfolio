import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}' // Added this line for the new component
  ],
  darkMode: "class", // Added this line for the new component
  theme: {
    extend: {
      colors: {
        light: '#e6e3dd',
        midlight: '#84a98c',
        mid: '#52796f',
        middark: '#354f52',
        dark: '#111827',
        'custom-orange': '#e06a48',
        darkWave: '#90c0f',

        // Light theme
        'light-bg': '#e6e3dd',
        'light-text': '#2f3e46',
        'light-accent': '#e06a48',

        // Forest theme
        'forest-bg': '#52796f',
        'forest-text': '#e6e3dd',
        'forest-accent': '#e06a48',
        'forest-floral-bg': 'url("/floral_background.svg")',

        // Fractal theme
        'fractal-bg': '#2f3e46',
        'fractal-text': '#e6e3dd',
        'fractal-accent': '#e06a48',

        // Vector theme
        'vector-bg': '#354f52',
        'vector-text': '#e6e3dd',
        'vector-accent': '#e06a48',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'forest-bg': 'url("/woods_background.svg")',
      },
    },
  },
  plugins: [
    addVariablesForColors, // Added this line for the new component
  ],
};

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
