import AntInput from '../AntInput.vue';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Ant Input',
  component: AntInput,
};

const Template = (args) => ({
  components: { AntInput },
  setup() {
    return { args };
  },
  template: '<AntInput v-bind="args"/>',
});

/**
 * Primary use of input field.
 */
export const Primary = Template.bind({});
Primary.args = {
  id: 'input-id-123456789',
  value: '',
  label: 'Input',
};

/**
 * use with description.
 */
export const WithDescription = Template.bind({});
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
NoLabel.args = {
  id: 'input-id-123456789',
  value: '',
  placeholder: 'Placeholder',
};

/**
 * use with leading icon.
 */
export const LeadingIcon = Template.bind({});
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
Validated.args = {
  id: 'input-id-987654321',
  value: 'test@test.de',
  label: 'Validated',
  rules: [
    (value) => !!value || 'value can not be empty',
    (value) => value.length > 3 || 'value is to short',
  ],
};
