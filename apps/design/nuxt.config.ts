import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const basePath = dirname(fileURLToPath(import.meta.url))
function resolve(path: string) {
  return join(basePath, path)
}

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
    server: {
      watch: {
        useFsEvents: true,
        usePolling: true,
      },
    },
  },
  watch: [resolve('./stories/**/*.stories.ts')],
  vue: {
    runtimeCompiler: true,
  },
})
