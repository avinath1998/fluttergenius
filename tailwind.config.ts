import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF6ED",
        navy: "#001D44",
        lilac: "#E8E1FD",
      },
      fontFamily: {
        display: ["var(--font-ovo)", "serif"],
        sans: ["var(--font-almarai)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
