import { Meta, StoryObj } from "@storybook/vue3";
import AntSwitch from "../AntSwitch.vue";
import { computed } from "vue";

const meta: Meta<typeof AntSwitch> = {
  title: 'Components/Forms/Switch',
  component: AntSwitch
};

export default meta;

type Story = StoryObj<typeof AntSwitch>;

export const Docs: Story = {
  render: (args) => ({
    components: {AntSwitch},
    setup() {
      const value = computed({
        get() {
          return args.modelValue
        },
        set(val)  {
          args.modelValue = val;
        }
      })

      return {args, value}
    },
    template: `
      <AntSwitch v-bind="args" v-model="value"/>
    `
  })
}