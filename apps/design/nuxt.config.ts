// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-07',
  devtools: { enabled: true },
  extends: ["@ourloop/product-layer-shell", "@ourloop/product-layer-ui"],
  modules: ["@nuxtjs/storybook"],
    vite: {
    plugins: [
    ],
    optimizeDeps: {
      include: ['jsdoc-type-pratt-parser']
    }
  },
  vue: {
    runtimeCompiler: true,
  },
})