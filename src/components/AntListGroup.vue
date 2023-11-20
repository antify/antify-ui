<script lang="ts">
export default {
  name: 'AntListGroup',
};
</script>

<script lang="ts" setup>
import AntSkeleton from "./AntSkeleton.vue";

const props = withDefaults(
    defineProps<{
      skeleton?: boolean
    }>(), {
      skeleton: false
    }
)
</script>

<template>
  <div class="relative">
    <AntSkeleton v-if="skeleton" absolute rounded/>

    <div
        class="flex flex-col rounded-md bg-neutral-light gap-px relative border border-neutral-light overflow-hidden"
        :class="{'invisible': skeleton}"
    >
      <slot/>
    </div>
  </div>
</template>
