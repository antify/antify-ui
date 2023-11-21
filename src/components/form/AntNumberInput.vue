<script lang="ts">
export default {
  name: 'AntNumberInput',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import AntButton from './AntButton.vue'
import AntField from './Elements/AntField.vue'
import AntBaseInput from './Elements/AntBaseInput.vue'
import Size from '../../enums/Size.enum'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {ColorType} from "../../enums/ColorType.enum";
import {Validator} from '@antify/validate'
import {handleEnumValidation} from "../../handler";
import { useVModel } from "@vueuse/core";

const emits = defineEmits(['update:modelValue', 'update:skeleton']);
const props = withDefaults(defineProps<{
  modelValue: number | null;
  label?: string;
  placeholder?: string;
  description?: string;
  size?: Size;
  colorType?: ColorType;
  disabled?: boolean;
  skeleton?: boolean;
  steps?: number;
  min?: number;
  max?: number;
  validator?: Validator;
  limiter?: boolean;
}>(), {
  colorType: ColorType.base,
  disabled: false,
  skeleton: false,
  size: Size.md,
  steps: 1,
  limiter: false
});

const _skeleton = useVModel(props, 'skeleton', emits)
const content = useVModel(props, 'modelValue', emits);

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, ColorType, 'ColorType');
});

function subtract() {
  if (content.value - props.steps > props.max) {
    content.value = props.max;
  }

  content.value -= props.steps;
}
function add() {
  if (content.value + props.steps < props.min) {
    content.value = props.min;
  }

  content.value += props.steps;
}
</script>

<template>
  <AntField
      :label="label"
      :size="size"
      :skeleton="_skeleton"
      :description="description"
      :colorType="colorType"
      :validator="validator"
      :limiter-max-value="limiter && max !== undefined ? max : undefined"
      :limiter-value="limiter && value !== undefined ? value : undefined"
  >
    <div
        class="flex relative"
    >
      <AntButton
          :icon-left="faMinus"
          grouped="left"
          :colorType="colorType"
          :size="size"
          :skeleton="_skeleton"
          :disabled="disabled || (min !== undefined ? content <= min : false)"
          @click="subtract"
      />

      <AntBaseInput
          v-model:value.number="content"
          type="number"
          grouped="center"
          wrapper-class="flex-grow"
          :colorType="colorType"
          :size="size"
          :skeleton="_skeleton"
          :min="min"
          :max="max"
          :disabled="disabled"
          :placeholder="placeholder || label"
          :show-icon="false"
          :validator="validator"
          v-bind="$attrs"
      />

      <AntButton
          :icon-left="faPlus"
          grouped="right"
          :color-type="colorType"
          :size="size"
          :skeleton="_skeleton"
          :disabled="disabled || (max !== undefined ? content >= max : false)"
          @click="add"
      />
    </div>
  </AntField>
</template>
