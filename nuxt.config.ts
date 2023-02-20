// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    display: "swap",
    families: {
      Poppins: { wght: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
      Inter: { wght: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
