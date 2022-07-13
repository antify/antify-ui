import AntCheckbox from '../AntCheckbox.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Checkbox',
  component: AntCheckbox,
};

const Template = (args: any) => ({
  components: { AntCheckbox },
  setup() {
    const value = ref<boolean>(false);

    return { args, value };
  },
  template: `<div class="m-2">
    <AntCheckbox v-bind="args" v-model:value="value"/>
    <span class="text-sm text-gray-500">Reactive value: {{value}}</span>
  </div>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  label: 'Checkbox',
};
