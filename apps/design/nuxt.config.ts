// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: ["@ourloop/product-layer-shell", "@ourloop/product-layer-ui"],
  modules: ["@nuxtjs/storybook"]
})