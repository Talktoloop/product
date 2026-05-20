export interface ApiConfig {
  name: string
  spec: string
  outputDir: string
  options?: {
    httpClient?: 'fetch' | 'xhr' | 'node' | 'axios' | 'angular'
    clientName?: string
    useOptions?: boolean
    useUnionTypes?: boolean
    exportCore?: boolean
    exportServices?: boolean
    exportModels?: boolean
  }
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
