<script lang="ts">
// TODO:: Fix typo KeyCap with upperchar C
export default {
  name: 'AntKeycap',
};
</script>

<script lang="ts" setup>
import AntIcon from './AntIcon.vue';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {IconSize} from './__types';

defineProps<{
  icon?: IconDefinition
}>();
</script>

<template>
  <span
    class="inline-block py-0.5 px-1.5 bg-neutral-light rounded-md text-sm min-w-[1.5rem] text-center text-neutral-font font-medium"
  >
    <AntIcon
      v-if="icon"
      :icon="icon"
      :size="IconSize.sm"
    />

    <slot v-else/>
  </span>
</template>
