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
        'gray-500':'#f3f3f5',
        'yellow-500':'#b4661e',
        'yellow':'#e0c1a5',
        'gray-100':'#edf2f6',
        'primary-100':'#062963',
        'primary-200':'#083e9d',
        'gray':'#4a5568',
        'green':'#3bb85d'
      },
    },
  },
  plugins: [],
};
export default config;
