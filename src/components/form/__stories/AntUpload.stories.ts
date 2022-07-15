import { faCamera } from '@fortawesome/free-solid-svg-icons';
import AntUpload from '../AntUpload.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Upload',
  component: AntUpload,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    icon: {
      description:
        'Slot to add icon to the upload field, can also be set as property',
      table: { type: { summary: 'HTML|IconDefinition' } },
    },
    label: {
      description: 'Slot to set the label, can also be set as property',
      table: { type: { summary: 'HTML|String' } },
    },
    preview: {
      description:
        'Slot to override the default preview behaviour.<br> Gets the fileName and imageSrc (if there is one) as prop.',
      table: { type: { summary: 'HTML' } },
    },
    value: {
      description:
        'The reactive value of the upload field. Will be set as the UploadEvent containing the file.',
    },
    acceptType: {
      description: 'Defines what filetypes can be uploaded.',
      table: { defaultValue: { summary: '"*"' } },
    },
    iconClass: {
      description:
        'Is set as the classList for the icon if the icon is defined via prop.',
    },
    id: {
      description: 'Id for upload area and label.',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    showPreview: {
      description: '',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
};

const Template = (args: any) => ({
  components: { AntUpload },
  setup() {
    return { args };
  },
  template: `<div class="m-2"><AntUpload v-bind="args"/></div>`,
});

export const Simple = Template.bind({});
// @ts-ignore
Simple.args = {
  label: 'Simple Upload',
};

export const ImageUpload = (args: any) => ({
  components: { AntUpload },
  setup() {
    const image = ref({});

    return {
      label: 'Image Upload',
      acceptType: 'image/*',
      icon: faCamera,
      value: image,
      args,
    };
  },
  template: `
  <div class="m-2">
    <AntUpload 
      v-bind="args"
      v-model:value="value"
      accept-type="acceptType"
      :icon="icon"
      :label="label"
      :show-preview="true"
    />
    <span class="text-xs text-gray-400">Reactive value: {{value}}</span>
  </div>`,
});
