import AntRadio from '../AntRadio.vue';
import { ref } from 'vue';
import { InputColorType, Size } from "../../../../enums";
import { AntRadioType } from "../__types/AntRadio.type";

export default {
  title: 'Components/Forms/Radio/Ant Radio',
  component: AntRadio,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    args: {
      description:
        'Additional attributes will be forwarded to the radio-button. This way you can access the default input-field events.',
    },
    colorType: {
      control: { type: 'select' },
      options: Object.values(InputColorType),
    },
    size: {
      control: { type: 'select' },
      options: Object.values(Size),
    },

    // Events
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

const Template = (args: any) => ({
  components: { AntRadio },
  setup() {
    const groupValue = ref<string>('t3');

    const radioValues = ref<AntRadioType[]>([
      {
        value: 't1',
        label: 'Test 1'
      }, {
        value: 't2',
        label: 'Test 2'
      }, {
        value: 't3',
        label: 'Test 3'
      }, {
        value: 't4',
        label: 'Test 4'
      }, {
        value: 't5',
        label: 'Test 5'
      }
    ]);

    return { args, groupValue, radioValues };
  },
  template: `
    <div class="m-2 flex gap-2">
      <AntRadio v-for="value in radioValues" v-bind="args" :value="value" v-model="groupValue"/>
    </div>
  `,
});

export const WithDescription = Template.bind({});
// @ts-ignore
WithDescription.args = {
  label: 'Test',
  description: 'This is a description, that describes this radio-button.',
  name: 'radio-group',
  value: 'test',
};

export const Disabled = Template.bind({});
// @ts-ignore
Disabled.args = {
  label: 'Disabled',
  name: 'radio-group',
  value: 'disabled',
  disabled: true,
};

export const Loading = Template.bind({});
// @ts-ignore
Loading.args = {
  label: 'Loading',
  name: 'radio-group',
  value: 'loading',
  description: 'This is a description, that describes this radio-button.',
  skeleton: true,
};
