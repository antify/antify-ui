import {Meta, StoryObj} from '@storybook/vue3';
import AntTabs from '../AntTabs.vue';
import {computed, ref} from 'vue';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';

const meta: Meta<typeof AntTabs> = {
  title: 'Components/Tabs',
  component: AntTabs,
  parameters: {controls: {sort: 'requiredFirst'}},
  decorators: [() => ({template: '<div class="p-4 bg-neutral-light"><story /></div>'})],
  argTypes: {
    modelValue: {
      control: 'text',
      table: {
        type: {
          summary: 'string | undefined'
        }
      }
    }
  }
}

export default meta;

type Story = StoryObj<typeof AntTabs>;

export const Docs: Story = {
  render: (args) => ({
    components: {AntTabs},
    setup() {
      const modelValue = computed({
        // @ts-ignore
        get: () => args.modelValue,
        // @ts-ignore
        set: (val) => args.modelValue = val
      });

      return {args, modelValue};
    },
    template: `
      <AntTabs v-bind="args" v-model="modelValue"/>
    `
  }),
  args: {
    tabItems: [
      {
        id: '1',
        label: 'First tab',
      },
      {
        id: '2',
        label: 'Second tab',
      },
      {
        id: '3',
        label: 'Third tab',
      },
      {
        id: '4',
        label: 'Fourth tab',
      },
    ]
  }
}

export const Overview: Story = {
  render: (args) => ({
    components: {AntTabs},
    setup() {
      const value_1 = ref();
      const value_2 = ref();
      const value_3 = ref('2');

      const tabItems_1 = [
        {
          id: '1',
          label: 'My account',
        },
      ]

      const tabItems_2 = [
        {
          id: '1',
          appendIcon: faUserCircle,
          label: 'My account',
        },
        {
          id: '2',
          prependIcon: faUserCircle,
          label: 'Downloads',
        },
      ]

      const tabItems_3 = [
        {
          id: '1',
          appendIcon: faUserCircle,
          prependIcon: faUserCircle,
          label: 'My account',
          to: '/#'
        },
        {
          id: '2',
          prependIcon: faUserCircle,
          appendIcon: faUserCircle,
          label: 'Downloads',
          to: '/#'
        },
        {
          id: '3',
          appendIcon: faUserCircle,
          prependIcon: faUserCircle,
          label: 'Messages',
          to: '/#'
        },
      ]

      return {
        args,
        value_1,
        value_2,
        value_3,
        tabItems_1,
        tabItems_2,
        tabItems_3,
      }
    },
    template: `
      <div>Default:</div>
      <div class="flex flex-col gap-3 flex-nowrap">
        <AntTabs v-model="value_1" :tab-items="tabItems_1"/>
        <AntTabs v-model="value_2" :tab-items="tabItems_2"/>
        <AntTabs v-model="value_3" :tab-items="tabItems_3"/>
      </div>

      <div class="mt-8">Expanded:</div>
      <div class="flex flex-col gap-3 flex-nowrap">
        <AntTabs v-model="value_1" :tab-items="tabItems_1" expanded separators/>
        <AntTabs v-model="value_2" :tab-items="tabItems_2" expanded separators/>
        <AntTabs v-model="value_3" :tab-items="tabItems_3" expanded separators/>
      </div>

      <div class="mt-8">Larger container:</div>

      <div class="h-16 bg-primary">
        <AntTabs v-model="value_3" :tab-items="tabItems_3" expanded separators/>
      </div>
    `
  }),
  args: {}
}
