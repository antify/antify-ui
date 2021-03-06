import AntPagination from '../AntPagination.vue';
import AntButton from '../../buttons/AntButton.vue';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Table/Ant Pagination',
  component: AntPagination,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    buttons: {
      description: 'Slot space for buttons (next, prev)',
      table: { type: { summary: 'HTML' } },
    },
    position: {
      description: 'Slot space for current position (Page 1 from 20)',
      table: { type: { summary: 'HTML' } },
    },
  },
};

const Template = (args: any) => ({
  components: { AntPagination, AntButton },
  setup() {
    return { args, faAngleRight };
  },
  template: `
  <AntPagination v-bind="args" >
    <template #position>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">1</span>
        to
        <span class="font-medium">10</span>
        of
        <span class="font-medium">20</span>
        results
      </p>
    </template>
    
    <template #buttons>
      <div class="space-x-3">
        <AntButton label="Previous" :primary="true" />
        <AntButton label="Next" :primary="true" :icon="faAngleRight" />
      </div>
    </template>
  </AntPagination>
  `,
});

/**
 * Primary use of Table.
 */
export const Primary = Template.bind({});
