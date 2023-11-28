<script lang="ts">
export default {
  name: 'AntIcon',
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import {handleEnumValidation} from "../handler";
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { IconColorType, IconSize } from "./__types/AntIcon.types";

const props = withDefaults(defineProps<{
  icon: IconDefinition;
  size?: IconSize;
  colorType?: IconColorType;
}>(), {
  size: IconSize.md,
  colorType: IconColorType.base
});

const containerClasses = computed(() => {
  const classes = {
    'inline-flex items-center justify-center': true,
    'w-4 h-4': props.size === IconSize.sm,
    'w-5 h-5': props.size === IconSize.md,
    'w-9 h-9': props.size === IconSize.xl3,
  }, variants = {};

  variants[IconColorType.base] = 'text-neutral-lightest-font';
  variants[IconColorType.neutral] = 'text-neutral';
  variants[IconColorType.primary] = 'text-primary';
  variants[IconColorType.secondary] = 'text-secondary';
  variants[IconColorType.danger] = 'text-danger';
  variants[IconColorType.info] = 'text-info';
  variants[IconColorType.success] = 'text-success';
  variants[IconColorType.warning] = 'text-warning';
  classes[variants[props.colorType]] = true;

  return classes;
});

// TODO:: replace with/height with font-size
const iconClasses = computed(() => ({
  'transition-colors': true,
  'h-3 w-3': props.size === IconSize.sm,
  'h-4 w-4': props.size === IconSize.md,
  'text-3xl': props.size === IconSize.xl3,
}));

onMounted(() => {
  handleEnumValidation(props.size, IconSize, 'Size');
  handleEnumValidation(props.colorType, IconColorType, 'IconColorType');
});
</script>

<template>
  <span
      v-if="icon"
      :class="containerClasses"
  >
    <fa-icon
        :icon="icon"
        :class="iconClasses"
    />
  </span>
</template>
