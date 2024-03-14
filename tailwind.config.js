/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        layarBahtera: ["Layarbahtera-Doomsday", "sans-serif"],
        layarBahteralight: ["Layarbahtera-Doomsday-Light", "sans-serif"],
        layarBahteraBold: ["Layarbahtera-Doomsday-Bold", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        // 'pattern': "url('./upaychat.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
      screens: {
        "xs": "375px",
      }
    },
  },
  plugins: [],
};
