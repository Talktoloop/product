import MoleculeMenuNavigation from '@ui/base/Molecule/Menu/Navigation.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HomeIcon } from 'lucide-vue-next'

const meta = {
  title: 'Base/Molecule/Menu/Navigation',
  component: MoleculeMenuNavigation,
  tags: ['autodocs'],
  ...withSlots(MoleculeMenuNavigation, 'navigation-content'),
  ...withDecorators(wrapContainer({ class: tw`h-52 relative` })),
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
      navigationItemMenu({
        label: 'Navigation Menu',
        menu: [
          navigationItemLink({
            label: 'Navigation Link 1',
            link: {
              href: '#',
            },
          }),
          navigationItemLink({
            label: 'Navigation Link 2',
            link: {
              href: '#',
            },
          }),
        ],
      }),
      navigationItemMenu(
        {
          label: 'Navigation Menu with content',
          rows: 3,
          menu: [
            navigationItemLink({
              label: 'Navigation Link 1',
              link: {
                href: '#',
              },
            }),
            navigationItemLink({
              label: 'Navigation Link 2',
              link: {
                href: '#',
              },
            }),
            navigationItemLink({
              label: 'Navigation Link 3',
              link: {
                href: '#',
              },
            }),
          ],
        },
        'navigation-content'
      ),
    ],
    'navigation-content': '<div class="p-4 h-20">Navigation Content</div>',
  },
}
