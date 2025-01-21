import { generate } from 'openapi-typescript-codegen'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs/promises'
import Ajv from 'ajv'
import Handlebars from 'handlebars'
import ST from 'stjs'
import type { GeneratorConfig } from './types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PROJECT_ROOT = dirname(dirname(dirname(dirname(__dirname))))

// Get config path from CLI args
const configPath = process.argv[2]
if (!configPath) {
  console.error('Please provide a config path as a CLI argument')
  process.exit(1)
}

// Load config and schema
async function loadConfig() {
  try {
    const [configModule, schemaModule] = await Promise.all([
      import(configPath),
      import('@ourloop/product-core-config/schema/api-types.schema.json', {
        assert: { type: 'json' },
      }),
    ])
    return { config: configModule.default as GeneratorConfig, schema: schemaModule.default }
  } catch (error) {
    console.error('Failed to load config or schema:', error)
    process.exit(1)
  }
}

// Validate config against schema
const { config, schema } = await loadConfig()
const ajv = new Ajv()
const validate = ajv.compile(schema)
if (!validate(config)) {
  console.error('Invalid API types configuration:', validate.errors)
  process.exit(1)
}

function processEntries<T extends object>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => processEntries(item)) as T
  }

  const keys = Object.keys(obj)
  if (keys.length === 1 && keys[0] === '{$entries}') {
    return Object.fromEntries(processEntries(obj['{$entries}'])) as T
  }

  const result = { ...obj }
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      result[key] = processEntries(value)
    }
  }
  return result as T
}

async function copyTemplate(
  templateFile: string,
  outputFile: string,
  templatePath: string,
  data: object
) {
  const template = await fs.readFile(join(PROJECT_ROOT, templatePath, templateFile), 'utf-8')

  if (templateFile.endsWith('.template.json')) {
    // Use ST.js for JSON templates
    let result = ST.select(JSON.parse(template)).transform(data).root()
    // Process #entries directives
    result = processEntries(result)
    await fs.writeFile(outputFile, JSON.stringify(result, null, 2))
    return
  }

  if (templateFile.endsWith('.hbs')) {
    // Use Handlebars for .hbs templates
    const compiled = Handlebars.compile(template)
    const processed = processEntries(data)
    const result = compiled(processed)
    await fs.writeFile(outputFile, result)
    return
  }

  // For other files, just copy as-is
  await fs.writeFile(outputFile, template)
}

async function generatePackage(config: GeneratorConfig) {
  const outputRoot = join(PROJECT_ROOT, config.path)

  // Clean up old output but preserve package.json
  try {
    const packageJsonPath = join(outputRoot, 'package.json')
    let packageJson: string | undefined
    try {
      packageJson = await fs.readFile(packageJsonPath, 'utf-8')
    } catch {
      // Ignore if package.json doesn't exist
    }

    await fs.rm(outputRoot, { recursive: true, force: true })
    console.log(`🧹 Cleaned up old output directory: ${config.path}`)

    // Recreate directory and restore package.json if it existed
    await fs.mkdir(outputRoot, { recursive: true })
    if (packageJson) {
      await fs.writeFile(packageJsonPath, packageJson)
      console.log('📦 Restored package.json')
    }
  } catch (error) {
    // Ignore errors if directory doesn't exist
  }

  await fs.mkdir(outputRoot, { recursive: true })

  // Copy root templates
  for (const templateFile of config.templates.files) {
    await copyTemplate(
      templateFile,
      join(outputRoot, templateFile.replace('.template.', '.')),
      config.templates.path,
      config
    )
  }

  for (const api of config.apis) {
    const outputPath = join(outputRoot, 'src', api.outputDir)
    const specModule = await import(api.spec, { assert: { type: 'json' } })
    const spec = specModule.default

    try {
      // Ensure output directory exists
      await fs.mkdir(outputPath, { recursive: true })

      // Generate types
      await generate({
        input: spec,
        output: outputPath,
        ...api.options,
      })

      console.log(`✅ Successfully generated types for ${api.name}`)
    } catch (error) {
      console.error(`❌ Failed to generate types for ${api.name}:`, error)
      process.exit(1)
    }
  }
}

generatePackage(config)
