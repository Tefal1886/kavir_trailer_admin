// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devServer: {
    host: "0.0.0.0",
    port: 2000,
  },
  app: {
    head: {
      title: "پنل مدیریت کویرتریلر",
      link: [{ rel: "icon", type: "x-icon", href: "/favicon.ico" }],
      viewport: "width=device-width, initial-scale=1.0",
      charset: "utf-8",
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-lucide-icons"],
});
