<script lang="ts">
export default {
  name: 'AntForm',
};
</script>

<script lang="ts" setup></script>

<template>
  <form class="px-4 py-4 space-y-4">
    <div
      v-if="$slots['header']"
      class="w-full h-14 border-b flex justify-between items-center"
    >
      <slot name="header"> </slot>
    </div>

    <slot default></slot>

    <div
      v-if="$slots['footer']"
      class="px-4 py-4 space-x-4 border-t flex justify-end"
    >
      <slot name="footer"></slot>
    </div>
  </form>
</template>
