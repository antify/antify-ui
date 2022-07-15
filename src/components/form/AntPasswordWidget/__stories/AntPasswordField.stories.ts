import AntPasswordField from '../AntPasswordField.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Password/Ant Password Field',
  component: AntPasswordField,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    password: {
      description: 'Reactive value for password field',
    },
    showPassword: {
      description:
        'Defines if the eye to show or hide the password should be displayed.',
      table: { defaultValue: { summary: 'false' } },
    },
    description: {
      description: 'Description text',
    },
    id: {
      description: 'The ID for the input and label combination',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    label: {
      description:
        'The main label of the password field, can also be set via the "passwordLabel" slot.',
    },
    leadingIcon: {
      description: 'Can be used to display an Icon inside the password field.',
      table: {
        type: {
          summary: 'IconDefinition',
          detail: 'A fontAwesome icon definition',
        },
      },
    },
    overlappingLabel: {
      description: 'Changes the style of the label',
      table: {
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      description:
        'Placeholder for the password field, "label" will be used if not provieded',
    },
    rules: {
      description:
        'Array of rule functions that will be called on blur, they should return an error message to be displayed',
    },
    passwordErrorIcon: {
      description:
        'Will be displayed if the rules give back false or a string.<br><a href="https://fontawesome.com/icons/circle-exclamation?s=solid" target="_blank">Link to default</a>',
      table: {
        defaultValue: {
          summary: 'faCircleExclamation',
        },
        type: {
          summary: 'HTML',
        },
      },
    },
    passwordLabel: {
      description:
        'Slot to set the main label, can also be set via "label" prop',
      table: {
        type: {
          summary: 'HTML',
        },
      },
    },
    showPasswordIcon: {
      description:
        'Override for the showPassword Icon.<br><a href="https://fontawesome.com/icons/eye?s=solid" target="_blank">Link to default</a>',
      table: {
        defaultValue: {
          summary: 'faEye',
        },
        type: {
          summary: 'HTML',
        },
      },
    },
  },
};

const Template = (args: any) => ({
  components: { AntPasswordField },
  setup() {
    const password = ref<string>('');

    return { args, password };
  },
  template: `
  <form class="m-2">
    <AntPasswordField v-bind="args" v-model:password="password"/>
  </form>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  showPassword: true,
};

export const Rules = Template.bind({});
// @ts-ignore
Rules.args = {
  showPassword: true,
  label: 'Password with rules',
  placeholder: 'Enter password',
  rules: [
    (value: any) => !!value || 'Password can not be empty.',
    (value: any) => value?.length >= 8 || 'Min password length is 8 symbols',
  ],
};
