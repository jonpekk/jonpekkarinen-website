import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['outfit'],
      },
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
    'h6-style'

  ],
} satisfies Config;
