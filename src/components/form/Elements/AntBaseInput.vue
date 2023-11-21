<script lang="ts">
export default {
  name: 'AntBaseInput',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {computed, onMounted, watch} from 'vue';
import Size from '../../../enums/Size.enum'
import AntSkeleton from "../../AntSkeleton.vue";
import AntIcon from "../../AntIcon.vue";
import {BaseInputColorType, Type} from "./types/AntBaseInput.type";
import Grouped from "../../../enums/Grouped.enum";
import {
  faExclamationTriangle,
  faExclamationCircle,
  faCircleCheck,
  faCircleInfo, faXmark
} from "@fortawesome/free-solid-svg-icons";
import {Validator} from '@antify/validate'
import {handleEnumValidation} from "../../../handler";
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {classesToObjectSyntax} from "../../../utils";
import { useVModel } from "@vueuse/core";

const emit = defineEmits(['update:value', 'update:skeleton']);
const props = withDefaults(defineProps<{
  value: string | number | null;
  size?: Size;
  colorType?: BaseInputColorType;
  disabled?: boolean;
  placeholder?: string;
  skeleton?: boolean;
  type?: Type;
  grouped?: Grouped;
  wrapperClass?: string | Record<string, boolean>;
  showIcon?: boolean;
  validator?: Validator;
  iconLeft?: IconDefinition;
  nullable?: boolean;
}>(), {
  colorType: BaseInputColorType.base,
  disabled: false,
  size: Size.md,
  skeleton: false,
  type: Type.text,
  grouped: Grouped.none,
  showIcon: true,
  default: false,
  nullable: false
});

const _skeleton = useVModel(props, 'skeleton', emit);

const icons = {};

icons[BaseInputColorType.info] = faCircleInfo;
icons[BaseInputColorType.warning] = faExclamationTriangle;
icons[BaseInputColorType.danger] = faExclamationCircle;
icons[BaseInputColorType.success] = faCircleCheck;

const inputClasses = computed(() => {
  const classes = {
    'transition-colors relative border-none outline w-full focus:z-10': true,
    'outline-offset-[-1px] outline-1 focus:outline-offset-[-1px] focus:outline-1': true,
    'disabled:opacity-50 disabled:cursor-not-allowed': props.disabled,
    'text-right': props.type === Type.number,
    // Size
    'focus:ring-2 p-1.5 text-xs': props.size === Size.sm,
    'focus:ring-4 p-2.5 text-sm': props.size === Size.md,
    // Icon left
    'pl-7': props.size === Size.sm && props.iconLeft,
    'pl-10': props.size === Size.md && props.iconLeft,
    // Icon right
    'pr-7': props.size === Size.sm && props.showIcon && icon.value,
    'pr-10': props.size === Size.md && props.showIcon && icon.value,
    // Grouped
    'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none': props.grouped === Grouped.left,
    'rounded-none': props.grouped === Grouped.center,
    'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md': props.grouped === Grouped.right,
    'rounded-md': props.grouped === Grouped.none,
    'invisible': _skeleton.value
  };
  const variants = {}

  variants[BaseInputColorType.base] = 'outline-neutral-light focus:outline-primary focus:ring-primary/25 bg-neutral-lightest placeholder:text-neutral';
  variants[BaseInputColorType.danger] = 'outline-danger focus:outline-danger focus:ring-danger/25 bg-danger-lighter placeholder:text-danger-dark';
  variants[BaseInputColorType.info] = 'outline-info focus:outline-info focus:ring-info/25 bg-info-lighter placeholder:text-info-dark';
  variants[BaseInputColorType.success] = 'outline-success focus:outline-success focus:ring-success/25 bg-success-lighter placeholder:text-success-dark';
  variants[BaseInputColorType.warning] = 'outline-warning focus:outline-warning focus:ring-warning/25 bg-warning-lighter placeholder:text-warning-dark';
  classes[variants[_colorType.value]] = true;

  return classes;
});
const iconClasses = computed(() => ({
  'transition-[height]': true,
  'h-4': props.size === Size.sm,
  'h-5': props.size === Size.md,
}));
const iconColorClasses = computed(() => {
  const classes = {}, variants = {};

  variants[BaseInputColorType.base] = 'text-neutral';
  variants[BaseInputColorType.danger] = 'text-danger';
  variants[BaseInputColorType.info] = 'text-info';
  variants[BaseInputColorType.success] = 'text-success';
  variants[BaseInputColorType.warning] = 'text-warning';
  classes[variants[_colorType.value]] = true;

  return classes;
});
const _wrapperClass = computed(() => classesToObjectSyntax(props.wrapperClass));
const icon = computed(() => (icons[_colorType.value] || false));
const _value = computed<string | number | null>({
  get: () => props.value,
  set: (val: string | number | null) => {
    if (props.type === Type.number && typeof val !== 'number') {
      return emit('update:value', null);
    }

    emit('update:value', val);
  },
});
const _colorType = computed(() => props.validator?.hasErrors() ? BaseInputColorType.danger : props.colorType);

watch(_value, (val) => props.validator?.validate(val));

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, BaseInputColorType, 'BaseInputColorType');
  handleEnumValidation(props.type, Type, 'Type');
  handleEnumValidation(props.grouped, Grouped, 'Grouped');

  props.validator?.validate(props.value);
});
</script>

<template>
  <div class="block relative w-full" :class="{...{'-mr-px': grouped !== Grouped.none}, ..._wrapperClass}">
    <div
        v-if="iconLeft"
        class="absolute h-full flex items-center justify-center z-20"
        :class="{'w-7': size === Size.sm, 'w-10': size === Size.md}"
    >
      <AntIcon
          :icon="iconLeft"
          :size="size"
          class="text-neutral-lightest-font"
      />
    </div>

    <input
        v-model="_value"
        :class="inputClasses"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled || _skeleton"
        v-bind="$attrs"
    >

    <div
        v-if="nullable && _value !== null && _value !== ''"
        class="absolute flex w-fit right-0 top-0 h-full transition-all z-20"
        :class="{'p-1.5': size === Size.sm, 'p-2.5': size === Size.md}"
    >
      <fa-icon
          :icon="faXmark"
          :class="iconClasses"
          class="text-neutral-font cursor-pointer"
          @click="() => _value = null"
      />
    </div>

    <div
        v-else-if="showIcon && icon"
        class="absolute flex w-fit right-0 top-0 h-full transition-all z-20"
        :class="{'p-1.5': size === Size.sm, 'p-2.5': size === Size.md}"
    >
      <fa-icon :icon="icon" :class="{...iconClasses, ...iconColorClasses}"/>
    </div>

    <AntSkeleton
        v-model="_skeleton"
        absolute
        :grouped="grouped"
        rounded
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
