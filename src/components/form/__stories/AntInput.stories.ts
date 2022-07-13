import AntInput from '../AntInput.vue';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Input',
  component: AntInput,
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
  rules: [
    (value: any) => !!value || 'value can not be empty',
    (value: any) => value.length > 3 || 'value is to short',
  ],
};
