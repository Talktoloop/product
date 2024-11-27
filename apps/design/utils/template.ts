export function propList(props: Record<string, unknown>) {
  return Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${key}='${value}'`
      }
      return `:${key}="${JSON.stringify(value)}"`
    })
    .join(' ')
}
