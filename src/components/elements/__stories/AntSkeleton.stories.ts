import AntSkeleton from '../AntSkeleton.vue';

export default {
  title: 'Components/Elements/Ant Skeleton',
  component: AntSkeleton,
  parameters: { controls: { sort: 'requiredFirst' } },
  decorators: [() => ({ template: '<div class="m-2"><story/></div>' })],
};

export const Simple = (args: any) => ({
  components: { AntSkeleton },
  setup() {
    return { args };
  },
  template: `<AntSkeleton v-bind="args" class="h-8 min-h-4 max-h-16 w-full "/>`,
});

export const Form = (args: any) => ({
  components: { AntSkeleton },
  setup() {
    return { args };
  },
  template: `
  <div class="flex space-x-8">
    <AntSkeleton v-bind="args" class="h-12 w-12 "/>

    <div class="w-full space-y-2">
      <AntSkeleton v-bind="args" class="h-6"/>
      <AntSkeleton v-bind="args" class="h-4 w-1/2"/>
      <AntSkeleton v-bind="args" class="h-4 w-1/6"/>
      <AntSkeleton v-bind="args" class="h-6 w-8/12"/>
    </div>
  </div>`,
});
