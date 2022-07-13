import AntRadioWidget from '../AntRadioWidget.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Radio/Ant Radio Widget',
  component: AntRadioWidget,
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
