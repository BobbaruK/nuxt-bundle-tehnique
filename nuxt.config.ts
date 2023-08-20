// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Nuxt Bundling",
      link: [
        // { rel: "dns-prefetch", href: `http://localhost:3000/` },
        // { rel: "preconnect", href: `http://localhost:3000/` },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    /* module options */
  },
});
