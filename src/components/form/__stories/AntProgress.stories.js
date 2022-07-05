import AntProgress from '../AntProgress.vue';

export default {
  title: 'Components/Froms/Ant Progress',
  component: AntProgress,
};

const Template = (args) => ({
  components: { AntProgress },
  setup() {
    return { args };
  },
  template: '<AntProgress v-bind="args"/>',
});

/**
 * Primary use of input field.
 */
export const Primary = Template.bind({});
Primary.args = {
  id: 'progress-id-123456789',
  value: 3700,
  fullValue: 15000,
  label: 'EUR',
};
