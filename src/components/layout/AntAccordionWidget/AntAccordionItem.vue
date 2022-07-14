<script lang="ts">
export default {
  name: 'AntAccordionItem',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

defineProps<{
  label?: string;
}>();

const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="border-b select-none cursor-pointer" @click="isOpen = !isOpen">
    <slot name="label" v-bind="{ isOpen }">
      <div
        class="
          text-gray-600
          hover:text-gray-800
          flex
          justify-between
          items-center
        "
      >
        <span class="mx-2 my-3 text-sm font-bold transition-all duration-500">
          {{ label }}
        </span>

        <fa-icon
          :icon="faAngleDown"
          class="mx-2 transform transition-all duration-500"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </slot>
  </div>

  <div
    class="transform transition-all duration-500 max-h-0 h-0 overflow-hidden"
    :class="{ 'h-full max-h-full border-b': isOpen }"
  >
    <slot></slot>
  </div>
</template>
