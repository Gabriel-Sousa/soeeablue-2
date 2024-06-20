import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sora: ['sora']
      },
      colors: {
        'soeeablue-green-500': '#36D086',
        'soeeablue-blue-500': '#03264F'
      }
    }
  },
  plugins: [],
};
export default config;
