import AntButton from '../AntButton.vue';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons/Ant Button',
  component: AntButton,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
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

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AntButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div class="m-2"><AntButton v-bind="args" /></div>',
});

export const Primary = Template.bind({});
// @ts-ignore More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
// @ts-ignore
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
// @ts-ignore
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
// @ts-ignore
Small.args = {
  size: 'small',
  label: 'Button',
};

export const WithIcon = Template.bind({});
// @ts-ignore
WithIcon.args = {
  label: 'Button',
  icon: faCaretRight,
};
