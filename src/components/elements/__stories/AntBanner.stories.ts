import AntBanner from '../AntBanner.vue';

export default {
  title: 'Components/Elements/Ant Banner',
  component: AntBanner,
};

export const Simple = (args: any) => ({
  components: { AntBanner },
  setup() {
    return {
      args
    };
  },
  template: `<AntBanner />`,
});
