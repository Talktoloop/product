import { extendAndJoin } from '@ourloop/product-core-config/eslint'
import core from './core/eslint.config.js'
import shell from './shell/eslint.config.js'
import ui from './ui/eslint.config.js'

export default extendAndJoin({ core, shell, ui }, 'nuxt')
