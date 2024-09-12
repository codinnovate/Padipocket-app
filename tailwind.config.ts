import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#023047',
        'gray-500':'#ebf8ff',
        'primary-100':'#062963',
        'gray':'#667085'
      },
    },
  },
  plugins: [],
};
export default config;
