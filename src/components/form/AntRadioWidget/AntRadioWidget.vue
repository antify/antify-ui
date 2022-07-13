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
    radioButtons: RadioButton[];
    radioGroupName: string;
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
    <slot>
      <slot name="label">
        <label class="text-base font-medium text-gray-900">{{ label }}</label>
      </slot>

      <slot name="description">
        <p class="text-sm leading-5 text-gray-500">{{ description }}</p>
      </slot>
    </slot>

    <fieldset class="mt-4">
      <slot name="legend">
        <legend class="sr-only">Notification method</legend>
      </slot>

      <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        <AntRadio
          v-for="(radio, index) in radioButtons"
          v-bind="$attrs"
          v-model:group-value="_value"
          :value="radio.value"
          :key="`radio-button-${radio.id}-${index}`"
          :id="radio.id"
          :label="radio.label"
          :name="radioGroupName"
        />
      </div>
    </fieldset>
  </div>
</template>
