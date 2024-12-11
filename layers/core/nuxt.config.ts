import { join } from 'node:path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-07',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/test-utils/module', '@nuxt/eslint'],
  watch: [join(__dirname, '../../core', 'config', 'tailwind', '**/*.js')],
})
