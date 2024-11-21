import withNuxt from './.nuxt/eslint.config.mjs'
import { config } from '@ourloop/product-core-config/eslint'

export default config(withNuxt(), 'nuxt')
