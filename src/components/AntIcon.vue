<script lang="ts">
export default {
  name: 'AntIcon',
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import Size from '../enums/Size.enum'
import {handleEnumValidation} from "../handler";
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {IconColorType} from "./__types/AntIcon.types";

const props = withDefaults(defineProps<{
  icon: IconDefinition;
  size?: Size;
  colorType?: IconColorType;
}>(), {
  size: Size.md,
  colorType: IconColorType.base
});

const containerClasses = computed(() => {
  const classes = {
    'inline-flex items-center justify-center': true,
    'w-4 h-4': props.size === Size.sm,
    'w-5 h-5': props.size === Size.md
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

const iconClasses = computed(() => ({
  'transition-colors': true,
  'h-3 w-3': props.size === Size.sm,
  'h-4 w-4': props.size === Size.md,
}));

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
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
