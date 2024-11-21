import withNuxt from './.playground/.nuxt/eslint.config.mjs'
import { config, join } from '@ourloop/product-core-config/eslint'

export default join(config(withNuxt(), 'nuxt'), {
  ignores: ['./components/shadcn/**'],
})
