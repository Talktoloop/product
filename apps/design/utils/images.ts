export const images = {
  avatar: {
    placeholder: 'https://avatar.iran.liara.run/public/1',
    john: 'https://avatar.iran.liara.run/public/2',
    jane: 'https://avatar.iran.liara.run/public/3',
    mike: 'https://avatar.iran.liara.run/public/4',
    sarah: 'https://avatar.iran.liara.run/public/5',
  },
  photos: {
    landscape: 'https://picsum.photos/1280/720',
    portrait: 'https://picsum.photos/720/1280',
    square: 'https://picsum.photos/800/800',
  },
  placeholders: {
    default: 'https://placehold.co/600x400',
    primary: 'https://placehold.co/600x400/1a73e8/ffffff',
    secondary: 'https://placehold.co/600x400/666666/ffffff',
    error: 'https://placehold.co/600x400/dc3545/ffffff',
  },
  logos: {
    placeholder: 'https://dummyimage.com/200x60/e3e3e3/666666.png&text=Logo',
    dark: 'https://dummyimage.com/200x60/1a1a1a/ffffff.png&text=Logo',
    light: 'https://dummyimage.com/200x60/ffffff/1a1a1a.png&text=Logo',
  },
} as const

export type Images = typeof images

// Utility type for getting image paths
export type ImagePath = {
  [K in keyof Images]: {
    [P in keyof Images[K]]: string
  }
}[keyof Images][keyof Images[keyof Images]]

// Export individual categories for convenience
export const { avatar, photos, placeholders, logos } = images
