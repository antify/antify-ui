<script lang="ts">
export default {
  name: 'AntRadioWidget',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import AntRadio from './AntRadio.vue';
import type { RadioButton } from '../../../types/RadioButton.type';

const { label, radioButtons, radioGroupName } =
  defineProps<{
    label?: string;
    radioButtons: RadioButton[];
    radioGroupName: string;
  }>();
</script>

<template>
  <div class="flex space-x-6">
    <label>{{ label }}</label>

    <AntRadio
      v-for="(radio, index) in radioButtons"
      :key="`radio-button-${radio.id}-${index}`"
      :id="radio.id"
      :label="radio.label"
      :name="radioGroupName"
    />
  </div>
</template>
