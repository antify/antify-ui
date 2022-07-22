import AntSelect from '../AntSelect.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Select',
  component: AntSelect,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    args: {
      description:
        'Additional attributes will be forwarded to the select field. This way you can access the default select-field events.',
    },
    id: {
      description: 'Id for select-field and label.',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    label: {
      description:
        'The main label for the select-field<br>can also be set via the default slot.',
    },
    options: {
      description: 'List of SelectOptions',
      table: {
        type: {
          summary: 'SelectOption[]',
          detail: 'type SelectOption = {label: string; value: string;}',
        },
      },
    },
    value: {
      description: 'The reactive value of the select-field',
    },
  },
};

const Template = (args: any) => ({
  components: { AntSelect },
  setup() {
    const value = ref<string>('2');

    return { args, value };
  },
  template: `<div class="m-2">
    <AntSelect v-bind="args" v-model:value="value"/>
    <span class="text-xs text-gray-400">Selected: {{value}}</span>
    </div>`,
});

/**
 * Primary use of input field.
 */
export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  id: 'select-id-123456789',
  label: 'Select',
  options: [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
    {
      label: 'Option 3',
      value: '3',
    },
    {
      label: 'Option 4',
      value: '4',
    },
  ],
};

/**
 * Primary use of input field.
 */
export const NoLabel = Template.bind({});
// @ts-ignore
NoLabel.args = {
  id: 'select-id-1234567891',
  options: [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
    {
      label: 'Option 3',
      value: '3',
    },
    {
      label: 'Option 4',
      value: '4',
    },
  ],
};
