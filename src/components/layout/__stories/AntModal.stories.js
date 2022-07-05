import AntModal from '../AntModal.vue';

export default {
  title: 'Components/Layout/Ant Modal',
  component: AntModal,
};

const Template = (args) => ({
  components: { AntModal },
  setup() {
    return { args };
  },
  template: `<AntModal v-bind="args" @close="() => args.active = false"/>`,
});

export const Primary = Template.bind({});
Primary.args = {
  active: true,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  active: true,
  fullscreen: true,
};
