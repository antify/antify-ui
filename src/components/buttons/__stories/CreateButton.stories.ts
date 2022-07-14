import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
