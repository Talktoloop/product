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

async function copyTemplate(
  templateName: string,
  targetPath: string,
  templatesPath: string,
  vars: Record<string, any> = {}
) {
  let templateContent = await fs.readFile(join(PROJECT_ROOT, templatesPath, templateName), 'utf-8')

  if (templateName.endsWith('.template.json')) {
    // Use ST.js for JSON templates
    const template = JSON.parse(templateContent)
    const result = ST.select(vars).transform(template).root()
    await fs.writeFile(targetPath, JSON.stringify(result, null, 2))
    return
  }

  if (templateName.endsWith('.hbs')) {
    // Use Handlebars for .hbs templates
    const template = Handlebars.compile(templateContent)
    const result = template(vars)
    await fs.writeFile(targetPath, result)
    return
  }

  // For other files, just copy as-is
  await fs.writeFile(targetPath, templateContent)
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
      join(outputRoot, templateFile.replace(/\.(hbs|template)$/, '')),
      config.templates.path,
      {
        name: config.name,
        apis: config.apis,
      }
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
        useUnionTypes: true,
        exportCore: true,
        exportServices: false,
        exportModels: true,
      })

      console.log(`✅ Successfully generated types for ${api.name}`)
    } catch (error) {
      console.error(`❌ Failed to generate types for ${api.name}:`, error)
      process.exit(1)
    }
  }
}

generatePackage(config)
