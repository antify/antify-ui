import AntModal from '../AntModal.vue';
import AntButton from '../../buttons/AntButton.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Layout/Ant Modal',
  component: AntModal,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    buttons: {
      description: 'Slot area for buttons (footer area)',
      table: {
        type: { summary: 'HTML' },
        defaultValue: { summary: 'HTML', detail: 'Contains a close button' },
      },
    },
    closeIcon: {
      description:
        'Override for the close icon<br><a href="https://fontawesome.com/icons/x?s=solid">Link to default</a>',
      table: {
        type: { summary: 'HTML' },
        defaultValue: {
          summary: 'faX',
          detail: 'Contains logic to close the modal',
        },
      },
    },
    default: {
      description: 'Default content area of the modal',
      table: { type: { summary: 'HTML' } },
    },
    header: {
      description: 'Header area of the modal',
      table: {
        type: { summary: 'HTML' },
        defaultValue: {
          summary: 'HTML',
          detail: 'contains both the title slot and the closeIcon slot',
        },
      },
    },
    title: {
      description: 'Header title text, can also be set via "title" prop',
      table: {
        type: { summary: 'HTML|string' },
      },
    },
    active: {
      description: 'Defines if the modal is currently open or closed.',
    },
    fullscreen: {
      description: 'Changes the modal to fullscreen mode.',
    },
  },
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
