import { composer } from 'eslint-flat-config-utils'
import eslint from '@eslint/js'

export default composer({}).append(eslint.configs.recommended)
