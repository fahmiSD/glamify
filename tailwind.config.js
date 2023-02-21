/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    fontFamily: {
<<<<<<< HEAD
      poppins: ['Poppins'],
      inter: ['Inter'],
      montserrat: ['Montserrat'],
=======
      poppins: ["Poppins"],
      inter: ["Inter"],
>>>>>>> 45899d2 (add detail-product)
    },
    extend: {
      colors: {
        green: "#164D4D",
      },
    },
  },
  plugins: [require("flowbite")],
};
