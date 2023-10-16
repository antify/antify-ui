<script lang="ts">
export default {
  name: 'AntButton',
};
</script>

<script lang="ts" setup>
/**
 * Notes:
 * If skeleton is true, the whole content of the button get rendered and the skeleton just overlays about it.
 * This gives the ability to show the correct size of the button but just in skeleton state.
 */
import type {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {computed, onMounted} from 'vue';
import {LocationAsRelativeRaw} from 'vue-router';
import AntSkeleton from '../elements/AntSkeleton.vue'
import Grouped from '../../enums/Grouped.enum'
import Size from '../../enums/Size.enum'

enum Color {
  danger = 'danger',
  info = 'info',
  neutralDark = 'neutral-dark',
  neutralLight = 'neutral-light',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
}

const emit = defineEmits(['click']);
const props = withDefaults(defineProps<{
  outline?: boolean;
  size?: Size;
  color?: Color;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  to?: LocationAsRelativeRaw | string;
  disabled?: boolean;
  grouped?: Grouped;
  skeleton?: false;
}>(), {
  color: 'neutral-light',
  disabled: false,
  outline: false,
  skeleton: false,
  size: Size.md,
  grouped: Grouped.none
});

const groupedClassList = computed(() => ({
  'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none': props.grouped === Grouped.left,
  'rounded-none': props.grouped === Grouped.center,
  'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md': props.grouped === Grouped.right,
  'rounded-md': props.grouped === Grouped.none,
}))
const classes = computed(() => {
  const classes = {
    'transition-all duration-300 inline-flex items-center relative': true,
    'disabled:opacity-50 disabled:cursor-not-allowed': true,
    'focus:ring-2': props.size === Size.sm,
    'focus:ring-4': props.size === Size.md,
    ...groupedClassList.value
  };

  classes[`focus:ring-${props.color}/25`] = true;
  classes[`text-${props.color}-font bg-${props.color}`] = !props.outline;
  classes[`bg-neutral-lightest`] = props.outline;
  classes[`text-${props.color}`] = props.outline && props.color !== Color.neutralLight;
  // The neutral light version would have text-neutral-light but this its to bright. Use text-neutral instead.
  classes[`text-neutral`] = props.outline && props.color === Color.neutralLight;
  classes[`hover:bg-${props.color}`] = props.outline && !props.disabled;

  return classes;
});
const skeletonClasses = computed(() => ({
  'w-full h-full absolute': true,
  ...groupedClassList.value
}));
const buttonContentClasses = computed(() => {
  const classes = {
    'd-block w-full inline-flex items-center justify-center transition-colors duration-300 font-medium': true,
    'py-1.5 px-2.5 text-xs gap-1': props.size === Size.sm,
    'py-2.5 px-3.5 text-sm gap-2.5': props.size === Size.md,
    'active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]': !props.disabled,
    'hover:bg-white/75': props.outline && !props.disabled,
    'hover:bg-black/25': !props.outline && !props.disabled,
    // Make sure, nothing shimmer through the skeleton
    'invisible': props.skeleton,
    ...groupedClassList.value
  }

  // Using outline instead of borders, because border are added to the size of the button. This makes the
  // outline button variant 2px bigger thant the not outlined one.
  classes[`outline outline-offset-[-1px] outline-${props.color}`] = props.outline;

  return classes;
});
const iconClasses = computed(() => ({
  'h-4': props.size === Size.sm,
  'h-5': props.size === Size.md,
}));
const attrs = computed(() => {
  const _attrs = {};

  if (!props.to) {
    _attrs.type = 'button';
  }

  if (props.disabled || props.skeleton) {
    _attrs.disabled = true;
  }

  return _attrs;
});

onMounted(() => {
  const allowedSizes = Object.values(Size);
  const allowedColors = Object.values(Color);

  if (props.size && allowedSizes.indexOf(props.size) === -1) {
    throw Error(`Size ${props.size} not allowed. Use one of ${allowedSizes.join(' | ')}`);
  }

  if (props.color && allowedColors.indexOf(props.color) === -1) {
    throw Error(`Color ${props.color} not allowed. Use one of ${allowedColors.join(' | ')}`);
  }
});
</script>

<template>
  <component
      :is="to ? 'router-link' : 'button'"
      v-bind="{...$attrs, ...attrs}"
      :class="classes"
      :to="to"
      @click="() => $emit('click')"
  >
    <AntSkeleton v-if="skeleton" :class="skeletonClasses"/>

    <span
        :class="buttonContentClasses"
    >
      <slot name="icon-left">
        <fa-icon v-if="iconLeft" :icon="iconLeft" :class="iconClasses"/>
      </slot>

      <slot/>

      <slot name="icon-right">
        <fa-icon v-if="iconRight" :icon="iconRight" :class="iconClasses"/>
      </slot>
    </span>
  </component>
</template>
