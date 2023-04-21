/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1260px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
