import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeChatInput from '@ui/design/Molecule/Chat/Input.vue'

const meta = {
  title: 'Design/Molecule/Chat/Input',
  component: MoleculeChatInput,
  tags: ['autodocs'],
  ...withDecorators(wrapContainer({ class: tw`max-w-md` })),
} satisfies Meta<typeof MoleculeChatInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
