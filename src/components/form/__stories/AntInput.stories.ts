import AntInput from '../AntInput.vue';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Input',
  component: AntInput,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    id: {
      description: 'The ID for the input and label combination',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    value: {
      description: 'The reactive value of the input',
    },
    description: {
      description: 'The description for the input',
    },
    label: {
      description:
        'The main label for the input<br>can also be set via the named "label" slot',
      table: {
        type: {
          summary: 'HTML|String',
        },
      },
    },
    overlappingLabel: {
      description:
        'Changes the display style for the label to overlap the input field',
      table: { defaultValue: { summary: false } },
    },
    placeholder: {
      description:
        'Placeholder for the input field, "label" will be used if not provieded',
    },
    validator: {
      description:
        'A function that provides a validator. The function gets the current value from the input and expects back an array of strings. Those strings will then be displayed as errors.',
    },
    type: {
      description: 'The input type',
      table: { defaultValue: { summary: '"text"' } },
    },
    errorIcon: {
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
    leadingIcon: {
      description: 'Will be displayed inside of the input at the start.',
      table: {
        type: {
          summary: 'HTML',
        },
      },
    },
  },
};

const Template = (args: any) => ({
  components: { AntInput },
  setup() {
    const value = ref<string>('');

    return { args, value };
  },
  template: `<div class="m-2">
    <AntInput v-bind="args" v-model:value="value"/>
    <span class="text-xs text-gray-500">Reactive value: {{value}}</span>
  </div>`,
});

/**
 * Primary use of input field.
 */
export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  id: 'input-id-123456789',
  value: '',
  label: 'Input',
};

/**
 * use with description.
 */
export const WithDescription = Template.bind({});
// @ts-ignore
WithDescription.args = {
  id: 'input-id-123456789',
  value: '',
  description: 'This is an input field.',
  label: 'Input',
};

/**
 * use without label.
 */
export const NoLabel = Template.bind({});
// @ts-ignore
NoLabel.args = {
  id: 'input-id-123456789',
  value: '',
  placeholder: 'Placeholder',
};

/**
 * use with leading icon.
 */
export const LeadingIcon = Template.bind({});
// @ts-ignore
LeadingIcon.args = {
  id: 'email-123456789',
  value: '',
  label: 'E-Mail',
  placeholder: 'you@example.com',
  leadingIcon: faEnvelope,
};

/**
 * use with overlapping label.
 */
export const OverlappingLabel = Template.bind({});
// @ts-ignore
OverlappingLabel.args = {
  id: 'email-123456789',
  value: '',
  label: 'E-Mail',
  placeholder: 'you@example.com',
  overlappingLabel: true,
};

/**
 * use with leading Icon and overlapping label.
 */
export const LeadingIconAndOverlappingLabel = Template.bind({});
// @ts-ignore
LeadingIconAndOverlappingLabel.args = {
  id: 'email-123456789',
  value: '',
  label: 'E-Mail',
  placeholder: 'you@example.com',
  overlappingLabel: true,
  leadingIcon: faEnvelope,
};

/**
 * Validation Icon.
 */
export const Validated = Template.bind({});
// @ts-ignore
Validated.args = {
  id: 'input-id-987654321',
  value: 'test@test.de',
  label: 'Validated',
  validator: (value: any) => {
    console.log('value', value);
    if (!value) return ['value can not be empty'];
    if (value.length < 3) return ['value is to short'];
  },
};
