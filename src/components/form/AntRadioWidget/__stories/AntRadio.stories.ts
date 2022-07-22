import AntRadio from '../AntRadio.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Radio/Ant Radio',
  component: AntRadio,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    groupValue: {
      description: 'Reactive value for the radio group',
    },
    value: {
      description: 'Value of the radio button, will be used by groupValue.',
    },
    color: {
      control: 'text',
      table: { defaultValue: { summary: 'primary' } },
      description: 'A tailwind css color definition',
    },
    id: {
      description: 'The ID for the radio and label combination',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    label: {
      description: 'Main label for the radio button',
    },
    name: {
      description: 'Name for the radio group',
    },
  },
};

const Template = (args: any) => ({
  components: { AntRadio },
  setup() {
    const groupValue = ref<string>('');

    return { args, groupValue };
  },
  template: `
  <div class="m-2">
    <AntRadio v-bind="args" v-model:group-value="groupValue"/>
  </div>`,
});

export const Checked = Template.bind({});
// @ts-ignore
Checked.args = {
  label: 'Test',
  name: 'radio-group',
  value: 'test',
  checked: true,
};

export const UnChecked = Template.bind({});
// @ts-ignore
UnChecked.args = {
  label: 'Test',
  name: 'radio-group',
  value: 'test',
};

export const Disabled = Template.bind({});
// @ts-ignore
Disabled.args = {
  label: 'Disabled',
  name: 'radio-group',
  value: 'disabled',
  checked: true,
  disabled: true,
};
