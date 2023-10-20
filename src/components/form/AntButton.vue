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
import AntSkeleton from '../elements/AntSkeleton.vue';
import AntSpinner from '../elements/AntSpinner.vue';
import Grouped from '../../enums/Grouped.enum';
import Size from '../../enums/Size.enum';
import {ButtonColorType, ButtonType} from "../../types/AntButton.type";
import {handleEnumValidation} from "../../handler";

const emit = defineEmits(['click']);
const props = withDefaults(defineProps<{
  outlined?: boolean;
  size?: Size;
  colorType?: ButtonColorType;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  to?: LocationAsRelativeRaw | string;
  disabled?: boolean;
  grouped?: Grouped;
  skeleton?: boolean;
  spinner?: boolean;
  readonly?: boolean;
  expanded?: boolean;
  submit?: boolean;
}>(), {
  colorType: ButtonColorType.neutralLight,
  disabled: false,
  outlined: false,
  skeleton: false,
  spinner: false,
  size: Size.md,
  grouped: Grouped.none,
  readonly: false,
  expanded: false,
  submit: false
});

const hasAction = computed(() => (!props.skeleton && !props.readonly && !props.disabled))
const groupedClassList = computed(() => ({
  'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none': props.grouped === Grouped.left,
  'rounded-none': props.grouped === Grouped.center,
  'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md': props.grouped === Grouped.right,
  'rounded-md': props.grouped === Grouped.none,
}));
const classes = computed(() => {
  const classes = {
    'transition-all inline-flex items-center relative': true,
    'disabled:opacity-50 disabled:cursor-not-allowed': props.disabled && !props.skeleton,
    'cursor-default': props.skeleton || props.readonly,
    'focus:ring-2': props.size === Size.sm && hasAction.value,
    'focus:ring-4': props.size === Size.md && hasAction.value,
    'w-full': props.expanded,
    ...groupedClassList.value
  };

  classes[`focus:ring-${props.colorType}/25`] = hasAction.value;
  classes[`text-${props.colorType}-font bg-${props.colorType}`] = !props.outlined;
  classes[`bg-neutral-lightest`] = props.outlined;
  classes[`text-${props.colorType}`] = props.outlined && props.colorType !== ButtonColorType.neutralLight;
  // The neutral light version would have text-neutral-light but this its to bright. Use text-neutral instead.
  classes[`text-neutral`] = props.outlined && props.colorType === ButtonColorType.neutralLight;
  classes[`hover:bg-${props.colorType}`] = props.outlined && hasAction.value;

  return classes;
});
const buttonContentClasses = computed(() => {
  const classes = {
    'd-block w-full inline-flex items-center justify-center transition-colors font-medium': true,
    'py-1.5 px-2.5 text-xs gap-1': props.size === Size.sm,
    'py-2.5 px-3.5 text-sm gap-2.5': props.size === Size.md,
    'active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]': hasAction.value,
    'hover:bg-white/75': props.outlined && hasAction.value,
    'hover:bg-black/25': !props.outlined && hasAction.value,
    // Make sure, nothing shimmer through the skeleton
    'invisible': props.skeleton,
    ...groupedClassList.value
  }

  // Using outline instead of borders, because border are added to the size of the button. This makes the
  // outline button variant 2px bigger thant the not outlined one.
  classes[`outline outline-offset-[-1px] outline-${props.colorType}`] = props.outlined;

  return classes;
});
const iconClasses = computed(() => ({
  'h-4': props.size === Size.sm,
  'h-5': props.size === Size.md,
}));
const type = computed(() => {
  if (props.to !== undefined) {
    return undefined;
  }

  return props.submit ? ButtonType.submit : ButtonType.button;
});

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, ButtonColorType, 'ColorType');
});
</script>

<template>
  <component
      :is="to ? 'router-link' : 'button'"
      :class="classes"
      :type="type"
      :to="to"
      :disabled="disabled || undefined"
      @click="() => !props.readonly ? $emit('click') : null"
  >
    <AntSkeleton
        v-if="skeleton"
        :absolute="true"
        :grouped="grouped"
    />

    <span
        :class="buttonContentClasses"
    >
      <AntSpinner
          v-if="spinner"
          :size="size"
          :color-type="colorType"
          :inverted="!outline"
      />

      <slot
          v-if="!spinner"
          name="icon-left"
      >
        <fa-icon v-if="iconLeft" :icon="iconLeft" :class="iconClasses"/>
      </slot>

      <slot
          v-if="!spinner"
      />

      <slot
          v-if="!spinner"
          name="icon-right"
      >
        <fa-icon v-if="iconRight" :icon="iconRight" :class="iconClasses"/>
      </slot>
    </span>
  </component>
</template>
