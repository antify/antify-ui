import AntCheckbox from '../AntCheckbox.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Checkbox/Ant Checkbox',
  component: AntCheckbox,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    args: {
      description:
        'Additional attributes will be forwarded to the checkbox field. This way you can access the default input-field events.',
    },
    id: {
      description: 'The ID for the checkbox and label combination',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    checked: {
      description: 'The reactive checked state of the checkbox',
    },
    value: {
      description: 'The value of the checkbox',
    },
    color: {
      control: 'text',
      table: { defaultValue: { summary: 'primary' } },
      description: 'A tailwind css color definition',
    },
    label: {
      description:
        'The main label for the checkbox<br>(can be a slot or a property)<br>as a slot it gets an {id} as param to use in for',
      table: { type: { summary: 'HTML|String' } },
    },
    description: {
      description:
        'Place for description<br>(can be a slot or a property)<br>as a slot it gets an {id} as param to use in id (for described-by prop)',
      table: { type: { summary: 'HTML|String' } },
    },
    legend: {
      description:
        'Place for a sr-only legend<br>(can be a slot or a property)',
      table: { type: { summary: 'HTML' } },
    },
    default: {
      description: 'Slot that contains both label and description gets an {id}',
      table: { type: { summary: 'HTML' } },
    },
  },
};

const Template = (args: any) => ({
  components: { AntCheckbox },
  setup() {
    const value = ref<boolean>(false);

    return { args, value };
  },
  template: `<div class="m-2">
    <AntCheckbox v-bind="args" v-model:checked="value"/>
    <span class="text-sm text-gray-500">Reactive value: {{value}}</span>
  </div>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  label: 'Checkbox',
};
