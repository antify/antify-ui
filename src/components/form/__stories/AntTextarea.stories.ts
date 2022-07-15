import AntTextarea from '../AntTextarea.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Text area',
  component: AntTextarea,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    value: {
      description: 'The reactive value of the textarea',
    },
    id: {
      description: 'Id for textarea and label.',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    label: {
      description:
        'The main label for the select-field<br>can also be set via the default slot.',
    },
    placeholder: {
      description:
        'Placeholder for the input field, "label" will be used if not provieded',
    },
  },
};

const Template = (args: any) => ({
  components: { AntTextarea },
  setup() {
    const value = ref<string>('');

    return { args, value };
  },
  template: `<div class="m-2">
    <AntTextarea v-bind="args" v-model:value="value"/>
    <span class="text-xs text-gray-500">Reactive value: {{value}}</span>
  </div>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  id: 'textarea-12341887',
  label: 'Textarea',
};
