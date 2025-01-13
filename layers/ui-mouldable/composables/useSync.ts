export function useSync<T>(id: string, side: 'source' | 'target') {
  const state = useState<T | null>(id, () => null)

  return {
    ready: (value: T) => {
      if (side === 'source') {
        throw new Error('Source side cannot be set')
      }
      state.value = value
    },
    reset: () => {
      if (side === 'source') {
        throw new Error('Source side cannot be reset')
      }
      state.value = null
    },
    value: computed(() => state.value),
  }
}
