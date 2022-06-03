import AntTabs from '../Tabs.vue';

export default {
  title: 'Tabs',
  component: AntTabs,
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

const Template = (args) => ({
  components: {AntTabs},
  setup() {
    return {args};
  },
  template: '<AntTabs v-bind="args"/>'
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  tabs: [
    {name: 'My Account', href: '#', current: false},
    {name: 'Company', href: '#', current: false},
    {name: 'Team Members', href: '#', current: true},
    {name: 'Billing', href: '#', current: false}
  ]
};


export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Empty.args = {
  tabs: []
};
