<script lang="ts">
export default {
  name: 'AntRadioWidget',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import AntRadio from './AntRadio.vue';
import type { RadioButton } from '../../../types/RadioButton.type';
import { computed } from 'vue';

const emit = defineEmits(['update:value']);
const props =
  defineProps<{
    value: string;
    label?: string;
    description?: string;
    legend?: string;
    radioButtons: RadioButton[];
    radioGroupName: string;
    underneath?: boolean;
    loading?: boolean;
  }>();

const _value = computed({
  get: () => {
    return props.value;
  },
  set: (val) => {
    emit('update:value', val);
  },
});
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">
      <slot name="label">{{ label }} </slot>
    </label>

    <fieldset class="">
      <slot name="legend">
        <legend class="sr-only">{{ legend }}</legend>
      </slot>

      <div
        class="space-y-4 sm:flex"
        :class="{
          'flex-col items-start justify-start space-y-2 w-full': underneath,
          'sm:items-center sm:space-y-0  sm:space-x-10': !underneath,
        }"
        v-bind="$attrs"
      >
        <AntRadio
          v-for="(radio, index) in radioButtons"
          v-bind="radio"
          v-model:group-value="_value"
          :value="radio.value"
          :key="`radio-button-${radio.id}-${index}`"
          :id="radio.id"
          :label="radio.label"
          :name="radioGroupName"
          :loading="loading"
        />
      </div>
    </fieldset>

    <slot name="description">
      <p class="text-sm leading-5 text-gray-500">{{ description }}</p>
    </slot>
  </div>
</template>
