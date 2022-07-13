import AntPasswordField from '../AntPasswordField.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Password/Ant Password Field',
  component: AntPasswordField,
};

const Template = (args: any) => ({
  components: { AntPasswordField },
  setup() {
    const password = ref<string>('');

    return { args, password };
  },
  template: `
  <form class="m-2">
    <AntPasswordField v-bind="args" v-model:password="password"/>
  </form>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  showPassword: true,
};

export const Rules = Template.bind({});
// @ts-ignore
Rules.args = {
  showPassword: true,
  label: 'Password with rules',
  placeholder: 'Enter password',
  rules: [
    (value: any) => !!value || 'Password can not be empty.',
    (value: any) => value?.length >= 8 || 'Min password length is 8 symbols',
  ],
};
