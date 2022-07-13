import AntPasswordWidget from '../AntPasswordWidget.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Password/Ant Password Widget',
  component: AntPasswordWidget,
};

const Template = (args: any) => ({
  components: { AntPasswordWidget },
  setup() {
    const password = ref<string>('');

    return { args, password };
  },
  template:
    '<div class="m-2"><AntPasswordWidget v-bind="args" v-model:password="password"/></div>',
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  id: 'input-id-123456789',
  label: 'Password',
  repeatLabel: 'Repeat password',
  placeholder: 'Password placeholder',
  repeatPlaceholder: 'Repeat password placeholder',
  showPassword: true,
};
