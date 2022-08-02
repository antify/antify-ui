import AntRadioWidget from '../AntRadioWidget.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Radio/Ant Radio Widget',
  component: AntRadioWidget,
  decorators: [() => ({ template: '<div class="m-2"><story/></div>' })],
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    args: {
      description:
        'Additional attributes will be forwarded to all radio-buttons. This way you can access the default input-field events.',
    },
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

const simpleButtons = [
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
];

const Template = (args: any) => ({
  components: { AntRadioWidget },
  setup() {
    const value = ref<string>('');
    return { args, value };
  },
  template: `
  <AntRadioWidget v-bind="args" v-model:value="value"/>
  <span class="text-xs text-gray-500">Reactive value: {{value}}</span>
  `,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  label: 'Radio-group test',
  radioButtons: simpleButtons,
  radioGroupName: 'radio-group',
};

export const Underneath = (args: any) => ({
  components: { AntRadioWidget },
  setup() {
    const value = ref<string>('radio-1');

    args.label = 'Different style';
    args.radioButtons = [
      ...simpleButtons,
      {
        id: 'radio-4',
        label: 'Radio 4',
        description: 'I am disabled',
        value: 'radio-4',
        disabled: true,
      },
    ];
    args.radioGroupName = 'radio-group';
    args.underneath = true;

    return { args, value };
  },
  template: `
  <AntRadioWidget v-bind="args" v-model:value="value" />
  `,
});

export const Loading = (args: any) => ({
  components: { AntRadioWidget },
  setup() {
    const value = ref<string>('radio-1');

    args.label = 'This is loading';
    args.description =
      'Notice that label and description are still shown even while loading';
    args.radioButtons = [
      ...simpleButtons,
      {
        id: 'radio-4',
        label: 'Radio 4',
        description: 'I am disabled',
        value: 'radio-4',
        disabled: true,
      },
    ];
    args.radioGroupName = 'radio-group';
    args.underneath = true;
    args.loading = true;

    return { args, value };
  },
  template: `
  <AntRadioWidget v-bind="args" v-model:value="value" />
  `,
});
