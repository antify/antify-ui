import AntInputGroup from '../AntInputGroup.vue';
import AntInput from '../AntInput.vue';

export default {
  title: 'Components/Forms/Ant Input Group',
  component: AntInputGroup,
  argTypes: {
    default: {
      description:
        'Used to set the input fields. Each input needs to be wrappet in a div with "width: 100%".',
    },
  },
};

export const Simple = (args: any) => ({
  components: { AntInputGroup, AntInput },
  setup() {
    const value = '';
    return { args, value };
  },
  template: `
  <div class="m-2">
    <AntInputGroup>
      <div class="w-full"><AntInput v-model:value="value" label="Input one"/></div>
      <div class="w-full"><AntInput v-model:value="value" label="Input two"/></div>
    </AntInputGroup>
  </div>
  `,
});
