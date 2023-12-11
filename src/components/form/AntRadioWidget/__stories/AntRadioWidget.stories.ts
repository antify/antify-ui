import AntRadioWidget from '../AntRadioWidget.vue';
import { ref } from 'vue';
import { InputColorType, Size } from "../../../../enums";

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
    label: {
      description: 'The label for the radio widget',
    },
    description: {
      description: 'Description for the radio widget',
    },
    radioButtons: {
      description: 'Array of RadioButton',
      table: {
        type: {
          summary: 'AntRadioType[]',
          detail: `
{
  value: string;
  label?: string;
  disabled?: boolean;
  colorType?: InputColorType;
  validator?: Validator;
}
`
        },
      },
    },
    modelValue: {
      description:
        'Reactive value, contains the currently selected radio-button value',
    },
    direction: {
      control: 'select',
      options: ['COLUMN', 'ROW'],
      description: 'The direction for the radio-button widget',
      table: {
        type: {
          summary: 'COLUMN | ROW'
        }
      }
    },
    colorType: {
      control: { type: 'select' },
      options: Object.values(InputColorType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(Size),
    },

    // Events:
    'update:modelValue': {
      control: 'none',
      description: 'Event that is fired when the model value changes.'
    },
    'update:skeleton': {
      control: 'none',
      description: 'Event that is fired when the skeleton prop changes.'
    }
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
  <AntRadioWidget v-bind="args" v-model="value"/>
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

export const WithDisabledRadioButton = (args: any) => ({
  components: { AntRadioWidget },
  setup() {
    const value = ref<string>('radio-1');

    args.label = 'Different style';
    args.description = 'Message';
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

    return { args, value };
  },
  template: `
  <AntRadioWidget v-bind="args" v-model="value" />
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
    args.skeleton = true;

    return { args, value };
  },
  template: `
  <AntRadioWidget v-bind="args" v-model="value" />
  `,
});
