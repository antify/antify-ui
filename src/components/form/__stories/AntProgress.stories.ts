import AntProgress from '../AntProgress.vue';

export default {
  title: 'Components/Forms/Ant Progress',
  component: AntProgress,
};

export const Simple = (args: any) => ({
  components: { AntProgress },
  setup() {
    return {
      id: 'progress-id-123456789',
      value: 3700,
      fullValue: 15000,
      label: 'EUR',
      color: 'blue-500',
    };
  },
  template: `
  <div class="m-2">
    <AntProgress :id="id" :value="value" :fullValue="fullValue" :label="label" :color="color"/>
  </div>
  `,
});

export const WithDefaultContent = (args: any) => ({
  components: { AntProgress },
  setup() {
    return { args, value: 50 };
  },
  template: `
  <div class="m-2">
    <AntProgress :value="value">
      <template #label>
        <span class="text-primary font-bold">Label in template</span>
      </template>

      <span class="text-xs my-0.5">Almost there</span>
    </AntProgress>
  </div>
  `,
});
