import AntPasswordWidget from '../AntPasswordWidget.vue';

export default {
  title: 'Components/Froms/Ant Password Widget',
  component: AntPasswordWidget,
};

const Template = (args) => ({
  components: { AntPasswordWidget },
  setup() {
    return { args };
  },
  template: '<AntPasswordWidget v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  id: 'input-id-123456789',
  value: '',
  label: 'Password',
  repeatLabel: 'Repeat password',
  placeholder: 'Password placeholder',
  repeatPlaceholder: 'Repeat password placeholder',
  showPassword: true,
};
