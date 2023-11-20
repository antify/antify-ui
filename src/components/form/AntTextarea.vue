<script lang="ts">
export default {
  name: 'AntTextarea',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {computed, onMounted, watch} from 'vue';
import Size from '../../enums/Size.enum'
import AntSkeleton from "../AntSkeleton.vue";
import AntIcon from "../AntIcon.vue";
import {TextareaColorType} from "./__types/AntTextarea.type";
import Grouped from "../../enums/Grouped.enum";
import {
  faExclamationTriangle,
  faExclamationCircle,
  faCircleCheck,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import {Validator} from '@antify/validate'
import {handleEnumValidation} from "../../handler";
import {classesToObjectSyntax} from "../../utils";
import AntField from "./Elements/AntField.vue";

const emit = defineEmits(['update:value']);
const props = withDefaults(defineProps<{
  value: string | null;
  size?: Size;
  colorType?: TextareaColorType;
  disabled?: boolean;
  skeleton?: boolean;
  grouped?: Grouped;
  wrapperClass?: string | Record<string, boolean>;
  showIcon?: boolean;
  validator?: Validator;
  label?: string;
  placeholder?: string;
  description?: string;
  limiter?: boolean;
  max?: number;
}>(), {
  colorType: TextareaColorType.base,
  disabled: false,
  size: Size.md,
  skeleton: false,
  grouped: Grouped.none,
  showIcon: true,
  limiter: false
});
const icons = {};

icons[TextareaColorType.info] = faCircleInfo;
icons[TextareaColorType.warning] = faExclamationTriangle;
icons[TextareaColorType.danger] = faExclamationCircle;
icons[TextareaColorType.success] = faCircleCheck;

const inputClasses = computed(() => {
  const classes = {
    'block transition-colors relative border-none outline w-full focus:z-10': true,
    'outline-offset-[-1px] outline-1 focus:outline-offset-[-1px] focus:outline-1': true,
    'disabled:opacity-50 disabled:cursor-not-allowed': props.disabled,
    // Size
    'focus:ring-2 p-1.5 text-xs': props.size === Size.sm,
    'focus:ring-4 p-2.5 text-sm': props.size === Size.md,
    // Icon right
    'pr-7': props.size === Size.sm && props.showIcon && icon.value,
    'pr-10': props.size === Size.md && props.showIcon && icon.value,
    // Grouped
    'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none': props.grouped === Grouped.left,
    'rounded-none': props.grouped === Grouped.center,
    'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md': props.grouped === Grouped.right,
    'rounded-md': props.grouped === Grouped.none,
  };
  const variants = {}

  variants[TextareaColorType.base] = 'outline-neutral-light focus:outline-primary focus:ring-primary/25 bg-neutral-lightest placeholder:text-neutral';
  variants[TextareaColorType.danger] = 'outline-danger focus:outline-danger focus:ring-danger/25 bg-danger-lighter placeholder:text-danger-dark';
  variants[TextareaColorType.info] = 'outline-info focus:outline-info focus:ring-info/25 bg-info-lighter placeholder:text-info-dark';
  variants[TextareaColorType.success] = 'outline-success focus:outline-success focus:ring-success/25 bg-success-lighter placeholder:text-success-dark';
  variants[TextareaColorType.warning] = 'outline-warning focus:outline-warning focus:ring-warning/25 bg-warning-lighter placeholder:text-warning-dark';
  classes[variants[_colorType.value]] = true;

  return classes;
});
const _wrapperClass = computed(() => classesToObjectSyntax(props.wrapperClass));
const icon = computed(() => (icons[_colorType.value] || false));
const _value = computed<string | null>({
  get: () => props.value,
  set: (val: string | null) => {
    emit('update:value', val);
  },
});
const _colorType = computed(() => props.validator?.hasErrors() ? TextareaColorType.danger : props.colorType);

watch(_value, (val) => props.validator?.validate(val));

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, TextareaColorType, 'TextareaColorType');
  handleEnumValidation(props.grouped, Grouped, 'Grouped');

  props.validator?.validate(props.value);
});
</script>

<template>
  <AntField
      :label="label"
      :size="size"
      :skeleton="skeleton"
      :description="description"
      :colorType="colorType"
      :validator="validator"
      :limiter-max-value="limiter && max !== undefined ? max : undefined"
      :limiter-value="limiter ? _value.length : undefined"
  >
    <div class="block relative w-full" :class="{...{'-mr-px': grouped !== Grouped.none}, ..._wrapperClass}">
      <textarea
          v-model="_value"
          :class="inputClasses"
          :placeholder="placeholder !== undefined ? placeholder : label"
          :disabled="disabled || skeleton"
          v-bind="$attrs"
      />

      <div
          v-if="showIcon && icon"
          class="absolute flex w-fit right-0 top-0 transition-all z-20"
          :class="{'p-1.5': size === Size.sm, 'p-2.5': size === Size.md}"
      >
        <AntIcon
            :icon="icon"
            :size="size"
            :color-type="_colorType"
        />
      </div>

      <AntSkeleton
          v-if="skeleton"
          absolute
          :grouped="grouped"
          rounded
      />
    </div>
  </AntField>
</template>
