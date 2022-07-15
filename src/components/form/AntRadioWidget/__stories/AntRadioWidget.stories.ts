import AntRadioWidget from '../AntRadioWidget.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Radio/Ant Radio Widget',
  component: AntRadioWidget,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    default: {
      description: 'Override for label and description',
      table: { type: { summary: 'HTML' } },
    },
    label: {
      description: 'Place for main label, can be a prop or a slot',
      table: { type: { summary: 'HTML|string' } },
    },
    description: {
      description: 'Place for description, can be a prop or a slot',
      table: { type: { summary: 'HTML|string' } },
    },
    legend: {
      description: 'Place for sr-only legend, can be a prop or a slot',
      table: { type: { summary: 'HTML|string' } },
    },
    radioButtons: {
      description: 'Array of RadioButton',
      table: {
        type: {
          summary: 'RadioButton[]',
          detail:
            'type RadioButton = { id: string; label: string; value: string; }',
        },
      },
    },
    radioGroupName: {
      description: 'Name for the radio group',
    },
    value: {
      description:
        'Reactive value, contains the currently selected radio-button value',
    },
  },
};

const Template = (args: any) => ({
  components: { AntRadioWidget },
  setup() {
    const value = ref<string>('');
    return { args, value };
  },
  template: `<div class="m-2">
  <AntRadioWidget v-bind="args" v-model:value="value"/>
  <span class="text-xs text-gray-500">Reactive value: {{value}}</span>
  </div>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  label: 'Radio-group test',
  radioButtons: [
    {
      id: 'radio-1',
      label: 'Radio 1',
      value: 'radio-1',
    },
    {
      id: 'radio-2',
      label: 'Radio 2',
      value: 'radio-2',
    },
    {
      id: 'radio-3',
      label: 'Radio 3',
      value: 'radio-3',
    },
  ],
  radioGroupName: 'radio-group',
};
