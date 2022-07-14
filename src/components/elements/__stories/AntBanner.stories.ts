import AntBanner from '../AntBanner.vue';

export default {
  title: 'Components/Elements/Ant Banner',
  component: AntBanner,
  argTypes: {
    mainColor: { control: 'text' },
    secondaryColor: { control: 'text' },
    textColor: { control: 'text' },
  },
};

export const Simple = (args: any) => ({
  components: { AntBanner },
  setup() {
    return {
      args,
    };
  },
  template: `<AntBanner />`,
});
