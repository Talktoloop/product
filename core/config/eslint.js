import { composer, extend as extendFlat } from 'eslint-flat-config-utils'

export const presets = {
  default: {
    config: {},
    overrides: {},
  },
  defaultJoin: {
    config: {},
    overrides: {},
  },
  nuxtJoin: {
    config: {},
    overrides: {},
  },
  nuxt: {
    config: {},
    ignores: ['**/.nuxt'],
    overrides: {
      'nuxt/vue/rules': {
        rules: {
          'vue/multi-word-component-names': 'off',
        },
      },
    },
  },
}

export function override(config, overrides) {
  if (!overrides) {
    return config
  }
  config = composer().append(config)
  return Object.entries(overrides).reduce((config, [key, value]) => config.override(key, value), config)
}

export async function config(flatConfig, preset = 'default') {
  flatConfig = await flatConfig
  if (!presets[preset]) {
    throw new Error(`preset ${preset} not found choose from: ${Object.keys(presets).join(', ')}`)
  }
  const { overrides, config: presetConfig } = presets[preset]
  const config = await composer(presetConfig).append(override(flatConfig, overrides))
  const configs = await mergeFlatConfig(config)
  return join(...configs)
}

export function join(...configs) {
  const config = composer()
  return configs.reduce((config, next) => config.append(next), config)
}

export async function joinWithPreset(preset, ...configs) {
  const joinPreset = `${preset}Join`
  if (presets[joinPreset]) {
    preset = joinPreset
  }
  const { overrides } = presets[preset]
  return await config(await join(...configs.map(async (config) => await override(config, overrides))), preset)
}

export async function extend(configs) {
  const flatConfigs = await Promise.all(Object.entries(configs).map(async ([key, config]) => {
    config = await config
    config = await composer().append(config).toConfigs()
    return [key, config]
  }))
  return await Promise.all(flatConfigs.map(async ([key, config]) => await extendFlat(config, `./${key}/`)))
}

export async function extendAndJoin(configs, preset = 'default') {
  return await config(await joinWithPreset(preset, ...(await extend(configs))), preset)
}

export async function mergeFlatConfig(flatConfig) {
  const index = {}
  const newConfig = []

  const flatConfigs = await composer().append(flatConfig).toConfigs()
  for (const flatConfig of flatConfigs) {
    if (Array.isArray(flatConfig)) {
      throw new Error('flatConfig is array expected object')
    }
    const { name } = flatConfig
    if (!name) {
      if (Object.keys(flatConfig).length) {
        newConfig.push(flatConfig)
      }
    } else if (index[name]) {
      index[name].push(flatConfig)
    } else {
      index[name] = [flatConfig]
    }
  }

  function unique(a, b) {
    if (!Array.isArray(a)) {
      return b
    }
    if (!Array.isArray(b)) {
      return a
    }
    return [...new Set([...a, ...b])]
  }
  async function merge(configA, configB) {
    if (!configA) {
      return configB
    }
    if (Array.isArray(configA)) {
      throw new Error('configA is array expected object')
    }
    if (Array.isArray(configB)) {
      throw new Error('configB is array expected object')
    }
    const { name } = configA
    const { files: filesA, ...restA } = configA
    const { files: filesB, ...restB } = configB
    const files = unique(filesA, filesB)

    let config = composer().append(restA).override(name, restB)
    if (files && files.length) {
      config = config.override(name, { files })
    }
    const [newConfig] = await config.toConfigs()
    return newConfig
  }

  for (const flatConfigs of Object.values(index)) {
    newConfig.push(await flatConfigs.reduce(async (acc, config) => await merge(await acc, config), undefined))
  }
  return newConfig
}
