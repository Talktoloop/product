// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-07',
  devtools: { enabled: true },
  extends: ['@ourloop/product-layer-shell', '@ourloop/product-layer-ui-design'],
  modules: ['@nuxtjs/storybook', '@nuxt/eslint'],
  vite: {
    plugins: [],
    optimizeDeps: {
      include: ['jsdoc-type-pratt-parser'],
    },
  },
  watch: ['./stories/**/*.stories.ts'],
  vue: {
    runtimeCompiler: true,
  },
})
