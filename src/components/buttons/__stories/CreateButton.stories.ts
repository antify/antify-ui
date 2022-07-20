import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateButton from '../CreateButton.vue';

export default {
  title: 'Components/Buttons/Create Button',
  component: CreateButton,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    args: {
      description:
        'Additional attributes will be forwarded to the button directly. This way you can access the default button events.',
    },
    backgroundColor: { control: 'color' },
    label: {
      description:
        'The main label of the button <br> You could also use the default slot.',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the button',
      table: { defaultValue: { summary: 'medium' } },
    },
    icon: {
      control: { type: 'none' },
      description:
        'Will be displayed behind the label or the default slot.<br>Use Font-awesome Icons.',
    },
  },
};

const Template = (args: any) => ({
  components: { CreateButton },
  setup() {
    return { args };
  },
  template: '<div class="m-2"><CreateButton v-bind="args" /></div>',
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  id: 'create-button-123490',
  label: 'Create',
};

export const UseSlots = (args: any) => ({
  components: { CreateButton },
  setup() {
    return { args, faPlus };
  },
  template: `
  <div class="m-2">
    <CreateButton v-bind="args">
      <fa-icon :icon="faPlus" class="mr-2 font-bold" />

      <span class="text-xl font-bold">Create</span>
    </CreateButton>
  </div>
  `,
});
