<script lang="ts">
export default {
  name: 'AntBaseInput',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {computed, onMounted, watch} from 'vue';
import Size from '../../../enums/Size.enum'
import AntSkeleton from "../../elements/AntSkeleton.vue";
import {Type} from "../../../types/AntBaseInput.type";
import Grouped from "../../../enums/Grouped.enum";
import {ColorType} from "../../../enums/ColorType.enum";
import {
  faExclamationTriangle,
  faExclamationCircle,
  faCircleCheck,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import {Validator} from '@antify/validate'
import {handleEnumValidation} from "../../../handler";

const emit = defineEmits(['update:value']);
const props = withDefaults(defineProps<{
  value: string | number | null;
  size?: Size;
  colorType?: ColorType;
  disabled?: boolean;
  placeholder?: string;
  skeleton?: boolean;
  type?: Type;
  grouped?: Grouped;
  wrapperClass?: string | Record<string, boolean>;
  showIcon?: boolean;
  validator?: Validator;
}>(), {
  colorType: ColorType.neutral,
  disabled: false,
  size: Size.md,
  skeleton: false,
  type: Type.text,
  grouped: Grouped.none,
  showIcon: true
});
const icons = {}

icons[ColorType.info] = faCircleInfo;
icons[ColorType.warning] = faExclamationTriangle;
icons[ColorType.danger] = faExclamationCircle;
icons[ColorType.success] = faCircleCheck;

const groupedClassList = computed(() => ({
  'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none': props.grouped === Grouped.left,
  'rounded-none': props.grouped === Grouped.center,
  'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md': props.grouped === Grouped.right,
  'rounded-md': props.grouped === Grouped.none,
}));
const inputClasses = computed(() => {
  const classes = {
    'transition-colors relative border-none outline w-full': true,
    'disabled:opacity-50 disabled:cursor-not-allowed': props.disabled,
    'focus:ring-2 p-1.5 text-xs': props.size === Size.sm,
    'focus:ring-4 p-2.5 text-sm': props.size === Size.md,
    'pr-7': props.size === Size.sm && props.showIcon && icon.value,
    'pr-10': props.size === Size.md && props.showIcon && icon.value,
    'text-right': props.type === Type.number,
    ...groupedClassList.value
  };

  classes[`outline-offset-[-1px] outline-neutral-light outline-1 focus:outline-neutral-light focus:outline-offset-[-1px] focus:outline-1`] = _colorType.value === ColorType.neutral;
  classes[`outline-offset-[-1px] outline-${_colorType.value} outline-1 focus:outline-${_colorType.value} focus:outline-offset-[-1px] focus:outline-1`] = _colorType.value !== ColorType.neutral;
  classes[`bg-neutral-lightest placeholder:text-neutral-base`] = _colorType.value === ColorType.neutral;
  classes[`bg-${_colorType.value}-lighter placeholder:text-${_colorType.value}-dark`] = _colorType.value !== ColorType.neutral;
  classes[`focus:ring-neutral-light/25`] = _colorType.value === ColorType.neutral;
  classes[`focus:ring-${_colorType.value}/25`] = _colorType.value !== ColorType.neutral;

  return classes;
});
const iconClasses = computed(() => {
  const classes = {
    'transition-[height]': true,
    'h-4': props.size === Size.sm,
    'h-5': props.size === Size.md,
  };

  classes[`text-${_colorType.value}`] = true;

  return classes;
});
const icon = computed(() => (icons[_colorType.value] || false))
const _value = computed<string | number | null>({
  get: () => props.value,
  set: (val: string | number | null) => {
    if (props.type === Type.number && typeof val !== 'number') {
      return emit('update:value', null);
    }

    emit('update:value', val);
  },
});
const _colorType = computed(() => props.validator?.hasErrors() ? ColorType.danger : props.colorType)

watch(_value, (val) => props.validator?.validate(val));

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, ColorType, 'ColorType');
  handleEnumValidation(props.type, Type, 'Type');

  props.validator?.validate(props.value);
});
</script>

<template>
  <div class="block relative" :class="wrapperClass">
    <input
        v-model="_value"
        :class="inputClasses"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled || skeleton"
        v-bind="$attrs"
    >

    <div
        v-if="showIcon && icon"
        class="absolute flex w-fit right-0 top-0 h-full transition-all"
        :class="{'p-1.5': size === Size.sm, 'p-2.5': size === Size.md}"
    >
      <fa-icon :icon="icon" :class="iconClasses"/>
    </div>

    <AntSkeleton
        v-if="skeleton"
        :absolute="true"
        :grouped="grouped"
    />
  </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

/* clears the "X" from Internet Explorer */
input[type=search]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input[type=search]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

/* clears the "X" from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
