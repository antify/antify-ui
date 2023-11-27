import AntDialog from "../AntDialog.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { computed } from "vue";
import AntButton from "../form/AntButton.vue";
import { DialogColorTypes } from "../__types/AntDialog.types";

const meta: Meta<typeof  AntDialog> = {
  title: 'Components/Dialog',
  component: AntDialog,
  parameters: {controls: {sort: 'requiredFirst'}},
  argTypes: {
    colorType: {
      control: {type: 'select'},
      options: Object.values(DialogColorTypes),
    },
    title: {
      control: 'text'
    }
  }
}

export default meta;

type Story = StoryObj<typeof AntDialog>

export const Docs: Story = {
  render: (args) => ({
    components: {AntDialog, AntButton},
    setup() {
      const open = computed({
        get() {
          return args.open;
        },
        set(val) {
          args.open = val;
        }
      });

      args.buttonText = args.buttonText || 'Text';

      return {args, open}
    },
    template:`
      <div
        class="h-96 flex items-center justify-center relative"
      >
        <AntButton @click="open = true" color-type="primary">Open Dialog</AntButton>

        <AntDialog v-bind="args" v-model:open="open">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
        </AntDialog>
      </div>
    `
  })
}