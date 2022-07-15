import DeleteButton from '../DeleteButton.vue';

export default {
  title: 'Components/Buttons/Delete Button',
  component: DeleteButton,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: {
      description:
        'The main label of the button <br> You could also use the default slot.',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the button',
      defaultValue: 'medium',
    },
    icon: {
      control: { type: 'none' },
      description:
        'Will be displayed behind the label or the default slot.<br>Use Font-awesome Icons.',
    },
  },
};

const Template = (args: any) => ({
  components: { DeleteButton },
  setup() {
    return { args };
  },
  template: '<div class="m-2"><DeleteButton v-bind="args" /></div>',
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  id: 'delete-button-123490',
  label: 'Delete',
};
