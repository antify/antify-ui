import AntTabs from './Tabs.vue';

export default {
  title: 'Tabs',
  component: AntTabs
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: {},
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
};

export const Primary = (args) => ({
  components: {AntTabs},
  setup() {
    return { args };
  },
  template: '<AntTabs v-bind="$props" />'
});
