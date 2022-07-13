import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import AntBadge from '../AntBadge.vue';

export default {
  title: 'Components/Elements/Ant Badge',
  component: AntBadge,
  argTypes: {
    mainBgColor: { type: 'text' },
    secondaryBgColor: { type: 'text' },
    textColor: { type: 'text' },
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

export const WithDefault = (args: any) => ({
  components: { AntBadge },
  setup() {
    args.mainBgColor = args.mainBgColor || 'indigo-100';
    args.secondaryBgColor = args.secondaryBgColor || 'indigo-200';
    args.textColor = args.textColor || 'indigo-700';
    args.size = args.size || 'small';

    return { args, faBullhorn };
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
