import { extendAndJoin } from '@ourloop/product-core-config/eslint'
import config from './config/eslint.config.js'
import types from './types/eslint.config.js'

export default extendAndJoin({ config, types })
