
<script lang="ts">
export default {
  name: 'AntRangeSlider',
  inheritAttrs: false,
};
</script>

<script setup lang="ts">

import AntField from "./Elements/AntField.vue";
import { Validator } from "@antify/validate";
import { useVModel } from "@vueuse/core";
import { RangeColorType } from "./__types/AntRangeSlider.type";
import { computed } from "vue";

const emits = defineEmits(['update:modelValue', 'update:skeleton'])
const props = withDefaults(defineProps<{
  modelValue: number | number[] | undefined;
  label?: string;
  description?: string;
  colorType?: RangeColorType;
  disabled?: boolean;
  skeleton?: boolean;
  validator?: Validator;
  min?: number;
  max?: number;
}>(), {
  colorType: RangeColorType.base,
  disabled: false,
  skeleton: false,
  limiter: false
});

const value = useVModel(props, 'modelValue', emits);
const _skeleton = useVModel(props, 'skeleton', emits);

const _colorType = computed(() => props.validator?.hasErrors() ? RangeColorType.danger : props.colorType);

const inputClasses = computed(() => {
  const classes = {
    'ant-range-slider transition-colors relative border-none w-full focus:z-10 h-2 bg-neutral-light rounded-md outline-none': true,
    'disabled:opacity-50 disabled:cursor-not-allowed': props.disabled,

    'invisible': _skeleton.value
  };
  const variants = {}

  variants[RangeColorType.base] = ' text-neutral-base';
  variants[RangeColorType.danger] = ' text-danger-base';
  variants[RangeColorType.info] = ' text-info-base';
  variants[RangeColorType.success] = ' text-success-base';
  variants[RangeColorType.warning] = ' text-warning-base';
  classes[variants[_colorType.value]] = true;

  return classes;
});
</script>

<template>
  <AntField
    :label="label"
    :size="size"
    :skeleton="_skeleton"
    :description="description"
    :color-type="colorType"
    :validator="validator"
  >
    <input
      v-model="value"
      :class="inputClasses"
      type="range"
      :disabled="disabled || _skeleton"
      :min="min"
      :max="max"
      v-bind="$attrs"
    >
  </AntField>
</template>

<style lang="scss" scoped>
.ant-range-slider {
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 100%;
    appearance: none;
    width: 14px;
    height: 14px;
    background: #fff;
    border: 1px solid #CBD5E1;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04AA6D;
    cursor: pointer;
  }

}
</style>
