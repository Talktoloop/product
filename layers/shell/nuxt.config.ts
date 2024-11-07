// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@ourloop/product-layer-core", "@ourloop/product-layer-ui", "@ourloop/product-layer-design"]
})
