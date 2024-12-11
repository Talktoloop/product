import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeDrawer from '@ui/atomic/Molecule/Drawer.vue'

const meta = {
  title: 'Atomic/Molecule/Drawer',
  component: MoleculeDrawer,
  tags: ['autodocs'],
  argTypes: {
    direction: control.drawerDirection,
    default: { control: 'text' },
    trigger: { control: 'text' },
    header: { control: 'text' },
    footer: { control: 'text' },
    close: { control: 'text' },
  },
  args: {
    direction: defaultValue.drawerDirection,
  },
} satisfies Meta<typeof MoleculeDrawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    direction: 'right',
    trigger: '<button>Open Drawer</button>',
    header: '<h2 class="text-lg font-bold">Drawer Title</h2>',
    default: '<div class="p-4"><p>This is the drawer content</p></div>',
    footer: '<div class="flex justify-end">Footer content</div>',
  },
}

export const LeftSide: Story = {
  args: {
    direction: 'left',
    trigger: '<button>Open Left Drawer</button>',
    header: '<h2 class="text-lg font-bold">Left Drawer</h2>',
    default: '<div class="p-4"><p>This drawer opens from the left</p></div>',
  },
}
