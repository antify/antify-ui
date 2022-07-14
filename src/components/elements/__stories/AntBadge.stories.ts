import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import AntBadge from '../AntBadge.vue';

export default {
  title: 'Components/Elements/Ant Badge',
  component: AntBadge,
  argTypes: {
    mainBgColor: { control: 'text' },
    secondaryBgColor: { control: 'text' },
    textColor: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Simple = (args: any) => ({
  components: { AntBadge },
  setup() {
    const remove = () => {
      console.log('Remove called');
    };

    return { args, remove };
  },
  template: `
  <div class="m-2">
    <AntBadge v-bind="args" @remove="remove()">
      Test
    </AntBadge>
  </div>`,
});

const WithDefaultTemplate = (args: any) => ({
  components: { AntBadge },
  setup() {
    console.log('args', args);
    return {
      args,
      faBullhorn,
    };
  },
  template: `
  <div class="m-2">
    <AntBadge v-bind="args">
      <fa-icon :icon="faBullhorn" class="mr-2"/>
      Test
      <template #closeButton><span class="mx-1"/></template>
    </AntBadge>
  </div>`,
});

export const WithDefault = WithDefaultTemplate.bind({});
// @ts-ignore
WithDefault.args = {
  mainBgColor: 'indigo-100',
  secondaryBgColor: 'indigo-200',
  textColor: 'indigo-700',
  size: 'small',
};
