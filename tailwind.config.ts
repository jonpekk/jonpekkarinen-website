import type { Config } from "tailwindcss";

// Colors for later - https://tailwindcss.com/docs/customizing-colors
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['outfit'],
      },
      boxShadow: {
        'b-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'b-default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'b-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'b-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'b-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'b-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'b-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      }
    }
  },
  plugins: [],
  safelist: [
    'sr-only',
    'h1-style',
    'h2-style',
    'h3-style',
    'h4-style',
    'h5-style',
    'h6-style',
  ],
} satisfies Config;
