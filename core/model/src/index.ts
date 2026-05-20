export { Client } from './Client'

// Re-export all types
export type * from './types'

// Re-export utility functions directly
export * from './utils'

// Group implementation details under namespaces
export * as impl from './clients'
export { ModelClient as BaseClient } from './ModelClient'
