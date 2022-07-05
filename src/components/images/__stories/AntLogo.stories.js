import AntLogo from '../AntLogo.vue';

export default {
  title: 'Components/Images/Ant Logo',
  component: AntLogo,
};

const Template = (args) => ({
  components: { AntLogo },
  setup() {
    return { args };
  },
  template: `<AntLogo v-bind="args"/>`,
});

export const Primary = Template.bind({});
Primary.args = {
  logoUrl:
    'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg',
  alt: 'Logo',
};
