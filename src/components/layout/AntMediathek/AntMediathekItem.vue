<script lang="ts">
export default {
  name: 'AntMediathekItem',
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';
const active = ref<boolean>(false);
</script>

<template>
  <div
    class="
      flex flex-col
      border
      min-w-32
      h-40
      transition-all
      duration-500
      overflow-hidden
    "
    :class="{ 'ring-offset-2 ring-2 ring-primary': active }"
    @click="active = !active"
  >
    <div
      class="
        bg-gray-200
        flex
        justify-center
        items-center
        text-4xl
        h-full
        overflow-hidden
      "
    >
      <slot name="icon"></slot>
    </div>

    <div
      v-if="$slots['title']"
      class="
        bg-white
        border-t
        text-xs text-gray-500
        flex
        justify-center
        text-center
        p-2
        max-h-20
        whitespace-nowrap
      "
    >
      <div class="overflow-hidden overflow-ellipsis h-full">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>
