import AntRadio from '../AntRadio.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Radio/Ant Radio',
  component: AntRadio,
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
