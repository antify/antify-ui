import CreateButton from '../CreateButton.vue';

export default {
  title: 'Components/Buttons/Create Button',
  component: CreateButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { CreateButton },
  setup() {
    return { args };
  },
  template: '<CreateButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  id: 'create-button-123490',
  label: 'Create',
};