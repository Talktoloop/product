#!/usr/bin/env node
import { generate } from 'openapi-typescript-codegen';
import { join } from 'path';
import fs from 'fs/promises';
import AjvModule from 'ajv';
import Handlebars from 'handlebars';
import ST from 'stjs';
const Ajv = AjvModule.default;
if (!('PROJECT_CWD' in process.env)) {
    console.error('PROJECT_CWD environment variable is not set');
    process.exit(1);
}
const PROJECT_ROOT = process.env['PROJECT_CWD'];
// Get config path from CLI args
const configPath = process.argv[2];
console.log('configPath', configPath);
if (!configPath) {
    console.error('Please provide a config path as a CLI argument');
    process.exit(1);
}
// Load config and schema
async function loadConfig() {
    try {
        const [configModule, schemaModule] = await Promise.all([
            import(configPath, { assert: { type: 'json' } }),
            import('@ourloop/product-core-config/schema/generate-package.schema.json', {
                assert: { type: 'json' },
            }),
        ]);
        return { config: configModule.default, schema: schemaModule.default };
    }
    catch (error) {
        console.error('Failed to load config or schema:', error);
        process.exit(1);
    }
}
// Validate config against schema
const { config, schema } = await loadConfig();
const ajv = new Ajv();
const validate = ajv.compile(schema);
if (!validate(config)) {
    console.error('Invalid API types configuration:', validate.errors);
    process.exit(1);
}
function processEntries(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => processEntries(item));
    }
    const keys = Object.keys(obj);
    if (keys.length === 1 && '{$entries}' in obj) {
        return Object.fromEntries(processEntries(obj['{$entries}']));
    }
    const result = { ...obj };
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null) {
            result[key] = processEntries(value);
        }
    }
    return result;
}
async function copyTemplate(templateFile, outputFile, templatePath, data) {
    const template = await fs.readFile(join(PROJECT_ROOT, templatePath, templateFile), 'utf-8');
    if (templateFile.endsWith('.template.json')) {
        // Use ST.js for JSON templates
        let result = ST.select(JSON.parse(template)).transform(data).root();
        // Process #entries directives
        result = processEntries(result);
        await fs.writeFile(outputFile, JSON.stringify(result, null, 2));
        return;
    }
    if (templateFile.endsWith('.hbs')) {
        // Use Handlebars for .hbs templates
        const compiled = Handlebars.compile(template);
        const processed = processEntries(data);
        const result = compiled(processed);
        await fs.writeFile(outputFile, result);
        return;
    }
    // For other files, just copy as-is
    await fs.writeFile(outputFile, template);
}
async function generatePackage(config) {
    const outputRoot = join(PROJECT_ROOT, config.path);
    console.log(`Generating package ${config.name} in ${outputRoot}`);
    // Clean up old output but preserve package.json
    try {
        const packageJsonPath = join(outputRoot, 'package.json');
        let packageJson;
        try {
            packageJson = await fs.readFile(packageJsonPath, 'utf-8');
        }
        catch {
            // Ignore if package.json doesn't exist
        }
        await fs.rm(outputRoot, { recursive: true, force: true });
        console.log(`🧹 Cleaned up old output directory: ${config.path}`);
        // Recreate directory and restore package.json if it existed
        await fs.mkdir(outputRoot, { recursive: true });
        if (packageJson) {
            await fs.writeFile(packageJsonPath, packageJson);
            console.log('📦 Restored package.json');
        }
    } finally {
        // Ignore errors if directory doesn't exist
    }
    await fs.mkdir(outputRoot, { recursive: true });
    // Copy root templates
    for (const templateFile of config.templates.files) {
        await copyTemplate(templateFile, join(outputRoot, templateFile.replace('.template.', '.')), config.templates.path, config);
    }
    for (const api of config.apis) {
        const outputPath = join(outputRoot, 'src', api.outputDir);
        const specModule = await import(api.spec, { assert: { type: 'json' } });
        const spec = specModule.default;
        try {
            // Ensure output directory exists
            await fs.mkdir(outputPath, { recursive: true });
            // Generate types
            await generate({
                input: spec,
                output: outputPath,
                ...api.options,
            });
            console.log(`✅ Successfully generated types for ${api.name}`);
        }
        catch (error) {
            console.error(`❌ Failed to generate types for ${api.name}:`, error);
            process.exit(1);
        }
    }
}
generatePackage(config);
