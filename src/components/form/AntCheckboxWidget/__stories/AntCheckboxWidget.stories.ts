import AntCheckboxWidget from '../AntCheckboxWidget.vue';
import { Checkbox } from '../../../../types/Checkbox.type';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Checkbox/Ant Checkbox Widget',
  component: AntCheckboxWidget,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    checkboxes: {
      description: 'List of checkboxes',
      table: {
        type: {
          summary: 'Checkbox[]',
          detail: `
            type Checkbox = {
              id?: string;
              value?: any;
              color?: string;
              label?: string;
              description?: string;
              legend?: string;
            }`,
        },
      },
    },
    value: {
      description:
        'Array of checked Checkbox values. Can be used to set default values in the widget.',
    },
    id: {
      description: 'Id for the checkbox list',
      table: {
        defaultValue: {
          summary: 'UUID',
          detail: 'A ramdomly generated uuid',
        },
      },
    },
    default: {
      description: 'Can be used to overwrite label and description',
      table: {
        type: {
          summary: 'HTML',
        },
      },
    },
    label: {
      description:
        'Can be used to set a label for the checkbox widget. Can also be a property.',
      table: {
        type: {
          summary: 'HTML|string',
        },
      },
    },
    description: {
      description:
        'Can be used to set a  description for the checkbox widget. Can also be a property.',
      table: {
        type: {
          summary: 'HTML|string',
        },
      },
    },
  },
};

export const Simple = (args: any) => ({
  components: { AntCheckboxWidget },
  setup() {
    const elems = ref([
      {
        id: '1',
        value: '1',
      },
      {
        id: '2',
        value: '2',
      },
      {
        id: '4',
        value: '4',
      },
      {
        id: '5',
        value: '5',
      },
    ]);
    const checkboxes = ref<Checkbox[]>([
      {
        value: { ...elems.value[0] },
        label: '1',
      },
      {
        value: { ...elems.value[1] },
        label: '2',
      },
      {
        value: {
          id: '3',
          value: '3',
        },
        label: '3',
      },
      {
        value: { ...elems.value[2] },
        label: '4',
      },
      {
        value: { ...elems.value[3] },
        label: '5',
      },
    ]);

    return { args, checkboxes, elems };
  },
  template: `
  <div>
    <AntCheckboxWidget label="Checkboxes" v-bind="args" v-model:value="elems" :checkboxes="checkboxes"/>

    <div class="text-xs text-gray-500 mt-8">
      <div>Reactive values:</div>
      <pre>
        {{elems}}
      </pre>
    </div>
  </div>
  `,
});
