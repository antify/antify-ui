import { uuid } from 'vue3-uuid'; import { ref } from 'vue';
<script lang="ts">
export default {
  name: 'AntProgress',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import { uuid } from 'vue3-uuid';

const {
  id = uuid.v4(),
  value = 0,
  fullValue = 100,
  label,
} = defineProps<{
  id?: string;
  value?: number;
  fullValue?: number;
  label?: string;
}>();

const current = ref<number>((value * 100) / fullValue);
</script>

<template>
  <div class="text-xs text-gray-500 flex justify-between">
    <span>{{ label }}</span>
    <span>
      {{ value.toLocaleString(undefined, {}) }}/{{
        fullValue.toLocaleString(undefined, {})
      }}
    </span>
  </div>

  <div
    :id="id"
    class="
      w-full
      bg-gray-400
      h-2
      flex
      justify-center
      items-center
      relative
      overflow-hidden
      rounded
    "
  >
    <div
      :style="`width: ${current}%`"
      class="bg-blue-600 h-full absolute left-0 transition-all rounded"
    />

    <slot />
  </div>
</template>
