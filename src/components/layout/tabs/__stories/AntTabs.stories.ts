import AntTabs from '../AntTabs.vue';

export default {
  title: 'Components/Layout/Ant Tabs',
  component: AntTabs,
};

const Template = (args: any) => ({
  components: { AntTabs },
  setup() {
    return { args };
  },
  template: '<AntTabs v-bind="args"/>',
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  tabs: [
    { name: 'My Account', to: '#', current: false },
    { name: 'Company', to: '#', current: false },
    { name: 'Team Members', to: '#', current: true },
    { name: 'Billing', to: '#', current: false },
  ],
};

export const Empty = Template.bind({});
// @ts-ignore
Empty.args = {
  tabs: [],
};
