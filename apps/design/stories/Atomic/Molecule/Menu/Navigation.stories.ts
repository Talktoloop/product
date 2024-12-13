import MoleculeMenuNavigation from '@ui/atomic/Molecule/Menu/Navigation.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HomeIcon } from 'lucide-vue-next'

const meta = {
  title: 'Atomic/Molecule/Menu/Navigation',
  component: MoleculeMenuNavigation,
  tags: ['autodocs'],
  ...withSlots(MoleculeMenuNavigation, 'navigation-content'),
  ...withDecorators(wrapContainer({ class: tw`h-20` })),
} satisfies Meta<typeof MoleculeMenuNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'items': [
      navigationItemLink({
        label: 'Navigation Link',
        link: {
          href: '#',
        },
      }),
      navigationItemLink({
        label: 'Navigation Link With Icon',
        icon: HomeIcon,
        link: {
          href: '#',
        },
      }),
      navigationItemContent('navigation-content', {
        label: 'Navigation with content',
      }),
    ],
    'navigation-content': 'Navigation Content',
  },
}
