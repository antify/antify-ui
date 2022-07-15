import AntLoginWidget from '../AntLoginWidget.vue';

export default {
  title: 'Components/Forms/Ant Login Widget',
  component: AntLoginWidget,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    emailField: {
      description: 'Slot for Login/Name Input',
      table: { type: { summary: 'HTML' } },
    },
    beforeSubmit: {
      description:
        'Slot between form and button (can be used for "Forgot password" link)',
      table: { type: { summary: 'HTML' } },
    },
    passwordField: {
      description: 'Slot for password input',
      table: { type: { summary: 'HTML' } },
    },
    submitButton: {
      description: 'Slot for button',
      table: { type: { summary: 'HTML' } },
    },
  },
};

export const Simple = (args: any) => ({
  components: { AntLoginWidget },
  setup() {
    return { args };
  },
  template: `
  <AntLoginWidget v-bind="args">
    <template #emailField>

    </template>
  </AntLoginWidget>`,
});
