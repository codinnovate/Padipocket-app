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
        'gray-100':'#edf2f6',
        'primary-100':'#062963',
        'primary-200':'#083e9d',
        'gray':'#667085',
        'green':'#3bb85d'
      },
    },
  },
  plugins: [],
};
export default config;
