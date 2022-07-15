import AntDatePicker from '../AntDatePicker.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Forms/Ant Date Picker',
  component: AntDatePicker,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    id: {
      description: 'The ID for the Datepicker and label combination',
      table: {
        defaultValue: { summary: 'UUID', detail: 'A randomly generated UUID' },
      },
    },
    value: {
      control: 'none',
      description: 'The reactive value of the date picker',
    },
    label: {
      description:
        'The main label for the checkbox<br>can also be set via the default slot',
    },
  },
};

export const Simple = (args: any) => ({
  components: { AntDatePicker },
  setup() {
    const value = ref(new Date());

    return { value };
  },
  template: `
  <div class="m-2">
    <AntDatePicker label="Datepicker" v-model:value="value"/>
  </div>`,
});

export const Localized = (args: any) => ({
  components: { AntDatePicker },
  setup() {
    const value = ref(new Date());

    return { value };
  },
  template: `
  <div class="m-2">
    <AntDatePicker
      v-model:value="value"
      label="Datepicker"
      locale="de" 
      cancelText="Abbrechen"
      selectText="Auswählen"
      format="dd.MM.yyyy"
     />
  </div>`,
});
