import AntModal from '../AntModal.vue';
import AntButton from '../../buttons/AntButton.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Layout/Ant Modal',
  component: AntModal,
};

const Template = (args: any) => ({
  components: { AntModal, AntButton },
  setup() {
    const active = ref<boolean>(true);

    return { args, active };
  },
  template: `
  <div class="m-2">
    <AntButton label="Open modal" :primary="true" @click="() => active = true"/>
    <AntModal v-bind="args" v-model:active="active"/>
  </div>
  `,
});

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  title: 'Title',
};

export const Fullscreen = Template.bind({});
// @ts-ignore
Fullscreen.args = {
  fullscreen: true,
  title: 'Title Fullscreen',
};
