export interface ApiConfig {
  name: string
  spec: string
  outputDir: string
}

export interface GeneratorConfig {
  name: string
  path: string
  templates: {
    path: string
    files: string[]
  }
  apis: ApiConfig[]
}
