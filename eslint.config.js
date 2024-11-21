import core from './core/eslint.config.js'
import apps from './apps/eslint.config.js'
import layers from './layers/eslint.config.js'
import opt from './opt/eslint.config.js'
import { config as prettier } from 'eslint-preset-prettier'
import { extendAndJoin, join, config } from '@ourloop/product-core-config/eslint'

const nuxt = extendAndJoin({ apps, layers }, 'nuxt')

const coreAndOpt = extendAndJoin({ core, opt })
const flatConfig = await config(join(coreAndOpt, nuxt, prettier))

export default flatConfig
