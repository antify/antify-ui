import AntCheckbox from '../AntCheckbox.vue';
import { ref } from 'vue';
import { Meta, StoryObj } from "@storybook/vue3";
import { InputColorType, Size } from "../../../../enums";

const meta: Meta<typeof AntCheckbox> = {
  title: 'Components/Forms/Checkbox/Ant Checkbox',
  component: AntCheckbox,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    colorType: {
      control: { type: 'select' },
      options: Object.values(InputColorType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(Size),
    },
  },
};

export default meta;

type Story = StoryObj<typeof AntCheckbox>;

export const Docs: Story = {
  render: (args: any) => ({
    components: { AntCheckbox },
    setup() {
      const value = ref<boolean>(args.value || false);

      return { args, value };
    },
    template: `
      <div class="m-2">
        <AntCheckbox v-bind="args" v-model="value"/>
        <span class="text-sm text-gray-500">Reactive value: {{ value }}</span>
      </div>
    `,
  }),
}
