/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      color1: "#fff",
      color2: "#242222",
      color3: "#E3B577",
      color4: "#331A15",
      color5: "#1B1A1A",
    },
    extend: {
      fontFamily: {
        raleway: '"Raleway", sans-serif',
        rancho: '"Rancho", cursive',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
