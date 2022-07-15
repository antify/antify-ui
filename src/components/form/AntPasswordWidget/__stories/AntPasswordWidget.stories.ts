import AntPasswordWidget from '../AntPasswordWidget.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Password/Ant Password Widget',
  component: AntPasswordWidget,
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
      description: 'The main label of the password field',
    },
    repeatLabel: {
      description: 'The main label of the repeat password field',
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
    repeatPlaceholder: {
      description:
        'Placeholder for the repeat password field, "repeatLabel" will be used if not provieded',
    },
    passwordValidator: {
      description:
        'A function that provides a validator. The function gets the current value from the input and expects back an array of strings. Those strings will then be displayed as errors.',
      table: {
        defaultValue: {
          summary: 'Function',
          detail:
            'Default rules contain a "must not be empty"-Rule and a "Min password length is 8 symbols"-Rule',
        },
      },
    },
    passwordRepeatValidator: {
      description:
        'A function that provides a validator. The function gets the current value from the input and expects back an array of strings. Those strings will then be displayed as errors.',
      table: {
        defaultValue: {
          summary: 'Function',
          detail:
            'Default rules contain a "must not be empty"-Rule and a "Passwords need to be equal"-Rule',
        },
      },
    },
  },
};

const Template = (args: any) => ({
  components: { AntPasswordWidget },
  setup() {
    const password = ref<string>('');

    return { args, password };
  },
  template:
    '<div class="m-2"><AntPasswordWidget v-bind="args" v-model:password="password"/></div>',
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  id: 'input-id-123456789',
  label: 'Password',
  repeatLabel: 'Repeat password',
  placeholder: 'Password placeholder',
  repeatPlaceholder: 'Repeat password placeholder',
  showPassword: true,
};
