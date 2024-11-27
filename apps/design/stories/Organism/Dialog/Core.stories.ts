import OrganismDialogCore from '@ui/Organism/Dialog/Core'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Organism/Dialog/Core',
  component: OrganismDialogCore,
  tags: ['autodocs'],
} satisfies Meta<typeof OrganismDialogCore>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { OrganismDialogCore },
    template: `
      <OrganismDialogCore>
        <template #trigger>
          <button>Open Dialog</button>
        </template>
        <template #content>
          <div class="p-4">
            <h2 class="text-lg font-bold">Dialog Title</h2>
            <p>Dialog content goes here</p>
          </div>
        </template>
      </OrganismDialogCore>
    `,
  }),
}
