<script lang="ts">
export default {
  name: 'AntTag',
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import Size from '../enums/Size.enum'
import {TagColorType} from "../types/AntTag.type";
import {handleEnumValidation} from "../handler";
import {ColorType} from "../enums/ColorType.enum";
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const props = withDefaults(defineProps<{
  colorType?: TagColorType,
  size?: Size;
  iconLeft?: IconDefinition;
  dismiss?: boolean
}>(), {
  size: Size.md,
  colorType: TagColorType.neutralLight,
  dismiss: false
});

const classes = computed(() => {
  const classes = {
    "rounded-md inline-flex items-center": true,
    "px-1.5 py-1 text-sm gap-1.5": props.size === Size.md,
    "px-1 py-0.5 text-xs  gap-1": props.size === Size.sm,
  };

  classes[`bg-${props.colorType} text-${props.colorType}-font`] = true

  return classes;
});
const iconClasses = computed(() => ({
  'h-3': props.size === Size.sm,
  'h-4': props.size === Size.md,
}));

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, TagColorType, 'ColorType');
});
</script>

<template>
  <span :class="classes">
    <span
        v-if="iconLeft"
        class="inline-flex items-center justify-center"
        :class="{'w-4 h-4': props.size === Size.sm, 'w-5 h-5': props.size === Size.md}"
    >
      <fa-icon
          :icon="iconLeft"
          :class="iconClasses"
      />
    </span>

    <slot/>

    <span
        v-if="dismiss"
        class="inline-flex items-center justify-center"
        :class="{'w-4 h-4': props.size === Size.sm, 'w-5 h-5': props.size === Size.md}"
    >
      <fa-icon
          :icon="faCircleXmark"
          :class="iconClasses"
          class="cursor-pointer"
          @click="() => $emit('close')"
      />
    </span>
  </span>
</template>
