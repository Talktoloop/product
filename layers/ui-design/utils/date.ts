export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
}

export function formatDate(date: Date): string {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (date.toDateString() === today.toDateString()) {
    return 'Today'
  }
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  }
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined,
  })
}

// Helper to create timestamps
export function getTimestamp(daysAgo: number, time: string = '12:34 AM'): Date {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  const [hours, minutes, period] = time.match(/(\d+):(\d+)\s*(AM|PM)/)?.slice(1) || []
  date.setHours(
    period === 'PM' ? (parseInt(hours) % 12) + 12 : parseInt(hours) % 12,
    parseInt(minutes),
    0,
    0
  )
  return date
}
