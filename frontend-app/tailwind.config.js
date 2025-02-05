/** @type {import('tailwindcss').Config} */

import { withWebezeUI } from "./src/assets/styles/tailwind";

export default withWebezeUI({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
