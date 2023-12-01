import AntSwitcher from "../AntSwitcher.vue";
import { Meta, StoryObj } from "@storybook/vue3";
import { computed, ref } from "vue";
import Size from "../../../enums/Size.enum";
import { useValidator } from "@antify/validate";
import { SwitcherColorType, SwitcherOption } from "../__types/AntSwitcher.type";

const meta: Meta<typeof AntSwitcher> = {
  title: 'Components/Forms/Switcher',
  component: AntSwitcher,
  argTypes: {
    modelValue: {
      control: 'text',
    },
    options: {
      table: {
        type: {
          summary: 'string | SwitcherOption[]',
          detail: `
type SwitcherOption = {
  label: string;
  value: string | number;
  [key: string]: unknown;
}
          `
        }
      }
    },
    colorType: {
      control: { type: 'select' },
      options: Object.values(SwitcherColorType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(Size),
    },
  }
}

export default meta;

type Story = StoryObj<typeof AntSwitcher>;

export const Docs: Story = {
  render: (args) => ({
    components: { AntSwitcher },
    setup() {
      const value = computed({
        get() {
          return args.modelValue;
        },
        set(val) {
          args.modelValue = val;
        }
      })

      return { args, value }
    },
    template: `
      <AntSwitcher v-bind="args" v-model="value"/>

      {{value}}
    `
  }),
  args: {
    options: [
      {
        label: 'Entry 1',
        value: 'entry-1'
      },
      {
        label: 'Entry 2',
        value: 'entry-2'
      },
      {
        label: 'Entry 3',
        value: 'entry-3'
      },
      {
        label: 'Entry 4',
        value: 'entry-4'
      }
    ],
    modelValue: 'entry-1'
  }
};

export const withValidator: Story = {
  render: Docs.render,
  args: {
    ...Docs.args,
    validator: useValidator([
      (val: SwitcherOption) => {
        return val !== 'entry-1' || 'Select something else'
      }
    ])
  },
};

export const Summary: Story = {
  render: (args) => ({
    components: { AntSwitcher },
    setup() {
      const value = computed({
        get() {
          return args.modelValue;
        },
        set(val) {
          args.modelValue = val;
        }
      })

      const skeleton = ref(true);

      return { args, value, SwitcherColorType, skeleton }
    },
    template: `
      <div class="flex flex-col gap-5 ">
      <div class="flex gap-2.5">
        <AntSwitcher v-bind="args" v-model="value" :color-type="SwitcherColorType.base"/>
        <AntSwitcher v-bind="args" v-model="value" :color-type="SwitcherColorType.info"/>
        <AntSwitcher v-bind="args" v-model="value" :color-type="SwitcherColorType.success"/>
        <AntSwitcher v-bind="args" v-model="value" :color-type="SwitcherColorType.warning"/>
        <AntSwitcher v-bind="args" v-model="value" :color-type="SwitcherColorType.danger"/>
      </div>
      <div class="flex gap-2.5">
        <AntSwitcher v-bind="args" v-model="value" label="Label" :color-type="SwitcherColorType.base"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" :color-type="SwitcherColorType.info"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" :color-type="SwitcherColorType.success"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" :color-type="SwitcherColorType.warning"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" :color-type="SwitcherColorType.danger"/>
      </div>
      <div class="flex gap-2.5">
        <AntSwitcher v-bind="args" v-model="value" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.base"/>
        <AntSwitcher v-bind="args" v-model="value" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.info"/>
        <AntSwitcher v-bind="args" v-model="value" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.success"/>
        <AntSwitcher v-bind="args" v-model="value" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.warning"/>
        <AntSwitcher v-bind="args" v-model="value" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.danger"/>
      </div>
      <div class="flex gap-2.5">
        <AntSwitcher v-bind="args" v-model="value" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.base"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.info"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.success"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.warning"/>
        <AntSwitcher v-bind="args" v-model="value" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.danger"/>
      </div>
      <div class="flex gap-2.5">
        <AntSwitcher v-bind="args" v-model="value" :skeleton="true" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.base"/>
        <AntSwitcher v-bind="args" v-model="value" :skeleton="true" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.info"/>
        <AntSwitcher v-bind="args" v-model="value" :skeleton="true" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.success"/>
        <AntSwitcher v-bind="args" v-model="value" :skeleton="true" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.warning"/>
        <AntSwitcher v-bind="args" v-model="value" :skeleton="true" label="Label" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" :color-type="SwitcherColorType.danger"/>
      </div>
      </div>
    `
  }),
  args: {
    options: [
      {
        label: 'Entry 1',
        value: 'entry-1'
      },
      {
        label: 'Entry 2',
        value: 'entry-2'
      },
      {
        label: 'Entry 3',
        value: 'entry-3'
      },
      {
        label: 'Entry 4',
        value: 'entry-4'
      }
    ],
    modelValue: 'entry-1'
  }
}