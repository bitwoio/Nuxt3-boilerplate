// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    config: {
      content: [
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.js",
        "./nuxt.config.ts",
      ],
      plugins: [require("daisyui")],
    },
    injectPosition: 0,
    viewer: true,
  },
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en-US.json" },
      { code: "es", name: "Español", file: "es-ES.json" },
      { code: "fr", name: "Français", file: "fr-FR.json" },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
  },
});
