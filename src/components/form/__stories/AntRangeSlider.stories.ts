import { Meta, StoryObj } from "@storybook/vue3";
import AntRangeSlider from "../AntRangeSlider.vue";
import { ref } from "vue";
import {InputColorType} from "../../../enums";

const meta: Meta<typeof AntRangeSlider> = {
  title: 'Components/Forms/Range Slider',
  component: AntRangeSlider,
  parameters: {
    docs: {
      description: {
        component: 'WIP: waiting for design to finish'
      },
    },
    controls: {
      sort: 'requiredFirst'
    }
  },
  argTypes: {
    modelValue: {
      control: 'number',
      description: 'Reactive value'
    },
    colorType: {
      control: { type: 'select' },
      options: Object.values(InputColorType)
    },
  }
};

export default meta;

type Story = StoryObj<typeof AntRangeSlider>;

export const Docs: Story = {
  render: (args) => ({
    components: { AntRangeSlider },
    setup() {
      const value = ref(1);

      return { args, value }
    },
    template: `
      <AntRangeSlider v-bind="args" v-model="value"/>
    `
  })
}
