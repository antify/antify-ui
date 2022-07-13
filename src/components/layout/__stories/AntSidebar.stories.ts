import AntSidebar from '../AntSidebar.vue';
import AntButton from '../../buttons/AntButton.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Layout/Ant Sidebar',
  component: AntSidebar,
};

export const Primary = (args: any) => ({
  components: { AntSidebar, AntButton },
  setup() {
    const open = ref<boolean>(true);

    return { args, open };
  },
  template: `
  <AntButton @click="(open = true)" class="m-2">Open Sidebar</AntButton>

  <AntSidebar v-bind="args" v-model:open="open" ></AntSidebar>
  `,
});
