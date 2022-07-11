<script lang="ts">
export default {
  name: 'AntTextarea',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { uuid } from 'vue3-uuid';

const {
  id = uuid.v4(),
  label,
  placeholder,
  showLabel = true,
} = defineProps<{
  id?: string;
  label?: string;
  placeholder?: string;
  showLabel?: boolean;
}>();
</script>

<template>
  <label
    v-if="showLabel && label"
    :for="`textarea-${id}`"
    class="block text-sm font-medium text-gray-700"
  >
    <span>{{ label }}</span>
  </label>

  <div :class="{ 'mt-1': showLabel && label }">
    <textarea
      v-bind="$attrs"
      :id="`textarea-${id}`"
      :placeholder="placeholder || label"
      rows="4"
      class="
        shadow-sm
        focus:ring-indigo-500
        focus:border-indigo-500
        block
        w-full
        sm:text-sm
        border-gray-300
        rounded-md
      "
    />
  </div>
</template>
