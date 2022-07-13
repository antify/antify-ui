import AntTextarea from '../AntTextarea.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Text area',
  component: AntTextarea,
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
