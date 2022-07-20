import AntRadio from '../AntRadio.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Radio/Ant Radio',
  component: AntRadio,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    args: {
      description:
        'Additional attributes will be forwarded to the radio-button. This way you can access the default input-field events.',
    },
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
    <span class="text-xs text-gray-500">Reactive Value: {{groupValue}}</span>
  </div>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  label: 'Test',
  name: 'radio-group',
  value: 'test',
};
