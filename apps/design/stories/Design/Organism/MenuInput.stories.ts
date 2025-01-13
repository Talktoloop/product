import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'
import OrganismMenuInput from '@ui/design/Organism/MenuInput.vue'

const meta = {
  title: 'Design/Organism/MenuInput',
  component: OrganismMenuInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OrganismMenuInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    menu: [
      inputMenuItemMenu({
        label: 'Preset Filters',
        menu: [
          inputMenuItemMenuItem({
            label: 'Save current filters as a new preset',
            action: fn(),
          }),
          menuItemSeparator(),
          inputMenuItemMenuItem({
            label: 'Preset 1',
            action: fn(),
          }),
        ],
      }),
      inputMenuChoice({
        label: 'Type of Feedback',
        value: 'feedback-type',
        multiple: true,
        items: [],
      }),
      inputMenuChoice({
        label: 'Demographics',
        value: 'demographics',
        multiple: true,
        items: [],
      }),
      inputMenuChoice({
        label: 'Location',
        value: 'location',
        multiple: true,
        items: [],
      }),
      inputMenuChoice({
        label: 'Thematic Area',
        value: 'thematic-area',
        multiple: true,
        items: [],
      }),
      inputMenuChoice({
        label: 'Organization',
        value: 'organization',
        multiple: true,
        items: [],
      }),
      inputMenuChoice({
        label: 'Date',
        value: 'date',
        multiple: true,
        items: [],
      }),
      inputMenuChoice({
        label: 'Project Name',
        value: 'project',
        multiple: true,
        items: [
          {
            label: 'CHASP',
            value: 'chasp',
            checked: true,
          },
          {
            label: 'CESA',
            value: 'cesa',
            checked: true,
          },
          {
            label: 'SIRA',
            value: 'sira',
            checked: false,
          },
          {
            label: 'FRAP',
            value: 'frap',
            checked: false,
          },
          {
            label: 'HIPS',
            value: 'hips',
            checked: false,
          },
          {
            label: 'JPLG',
            value: 'jplg',
            checked: false,
          },
        ],
      }),
      inputMenuChoice({
        label: 'Replied To',
        value: 'replied-to',
        multiple: true,
        items: [],
      }),
    ],
  },
}
