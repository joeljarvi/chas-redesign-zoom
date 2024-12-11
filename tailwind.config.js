/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Almaden Sans"],
      display: ["Happy Display"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        zoomTheme: {
          primary: "#0B5CFF",
          secondary: "#00053D",
          accent: "#00EF90",

          neutral: "#00001A",

          base: "#ffffff",

          info: "#00DEEF",

          success: "#9A67FB",

          warning: "#FF7900",

          error: "F7F2E3",
        },
      },
    ],
  },
};
