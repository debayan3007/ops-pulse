import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import {
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
} from 'reka-ui'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroupRoot,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator },
    setup() {
      const value = ref('always')
      const options = [
        {
          value: 'always',
          label: 'Always',
          description: 'Send a notification every time activity occurs.',
        },
        {
          value: 'daily',
          label: 'Daily Digest',
          description: 'Get a summary email once per day.',
        },
        {
          value: 'never',
          label: 'Never',
          description: 'Disable notifications entirely.',
        },
      ]
      return { value, options }
    },
    template: `
      <div class="space-y-4">
        <RadioGroupRoot
          v-model="value"
          class="flex flex-col gap-3"
          aria-label="Notification frequency"
        >
          <RadioGroupItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            class="flex items-start gap-3 rounded-lg border border-border bg-background p-3 text-left transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:border-primary data-[state=checked]:bg-primary/10"
          >
            <span class="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-background">
              <RadioGroupIndicator class="h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span class="space-y-1">
              <span class="block text-sm font-medium leading-none text-foreground">{{ option.label }}</span>
              <span class="block text-sm text-muted-foreground">{{ option.description }}</span>
            </span>
          </RadioGroupItem>
        </RadioGroupRoot>
        <p class="text-sm text-muted-foreground">
          Selected preference:
          <span class="font-medium text-foreground">{{ value }}</span>
        </p>
      </div>
    `,
  }),
}

