import MoleculeCard from '@ui/Molecule/Card'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Molecule/Card',
  component: MoleculeCard,
  tags: ['autodocs'],
} satisfies Meta<typeof MoleculeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MoleculeCard },
    template: `
      <MoleculeCard>
        <div class="p-4">Card Content</div>
      </MoleculeCard>
    `,
  }),
}

export const WithHeaderAndFooter: Story = {
  render: () => ({
    components: { MoleculeCard },
    template: `
      <MoleculeCard>
        <template #header>
          <div class="p-4">Card Header</div>
        </template>
        <div class="p-4">Card Content</div>
        <template #footer>
          <div class="p-4">Card Footer</div>
        </template>
      </MoleculeCard>
    `,
  }),
}
