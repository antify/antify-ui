<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { AntField } from '../Elements';
import { InputColorType, Size } from '../../../enums';
import { useVModel } from '@vueuse/core';
import AntSkeleton from '../../AntSkeleton.vue';
import { computed, Ref, watch } from 'vue';
import { Validator } from '@antify/validate';
import { AntRadioType } from './__types/AntRadio.type';

const emits = defineEmits([ 'update:modelValue', 'update:skeleton' ]);
const props = withDefaults(
  defineProps<{
    modelValue: string;
    value: AntRadioType;

    label?: string;
    description?: string;
    skeleton?: boolean;
    colorType?: InputColorType;
    size?: Size
    readonly?: boolean;
    disabled?: boolean;
  }>(), {
    colorType: InputColorType.base,
    size: Size.md,
    readonly: false,
    disabled: false,
  }
);

const _value = computed({
  get(): string | AntRadioType {
    return props.modelValue;
  },
  set(val: string | AntRadioType) {
    emits('update:modelValue', typeof val === 'string' ? val : val.value);
  }
});
const _skeleton = useVModel(props, 'skeleton', emits);

const hasAction = computed(() => (!_skeleton.value && !props.readonly && !props.disabled))
const _colorType: Ref<InputColorType> = computed(() => props.value.validator?.hasErrors() ? InputColorType.danger : props.colorType);
const isActive = computed(() => {
  return _value.value === props.value.value
});

const inputClasses = computed(() => {
  const classes: { [key: string]: boolean } = {
    'relative inline-flex flex-shrink-0': true,
    'outline outline-offset-[-1px] outline-1 focus:outline-offset-[-1px] focus:outline-1 rounded-full': true,
    'focus:ring-offset-0': true,
    'outline-neutral-light focus:outline-neutral-light': !isActive.value,
    'rounded-full transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed': true,
    'focus:ring-2': props.size === Size.sm && hasAction.value,
    'focus:ring-4': props.size === Size.md && hasAction.value,
    'h-5 w-5': props.size === Size.md,
  };

  const focusColorVariant = {
    [InputColorType.base]: 'focus:ring-primary-lighter',
    [InputColorType.danger]: 'focus:ring-danger-lighter',
    [InputColorType.info]: 'focus:ring-info-lighter',
    [InputColorType.success]: 'focus:ring-success-lighter',
    [InputColorType.warning]: 'focus:ring-warning-lighter',
  };

  const activeColorVariant = {
    [InputColorType.base]: 'text-primary outline-primary focus:outline-primary',
    [InputColorType.danger]: 'text-danger outline-danger focus:outline-danger',
    [InputColorType.info]: 'text-info outline-info focus:outline-info',
    [InputColorType.success]: 'text-success outline-success focus:outline-success',
    [InputColorType.warning]: 'text-warning outline-warning focus:outline-warning',
  }

  classes[focusColorVariant[_colorType.value]] = hasAction.value;
  classes[activeColorVariant[_colorType.value]] = isActive.value;

  return classes;
});

const valueClass= computed(() => {
  const classes = {
    'relative w-fit full-height': true,
    'cursor-not-allowed opacity-50': props.disabled
  }

  return classes;
});

watch(_value, () => {
  if (props.value.validator) {
    props.value.validator.validate(_value.value);
  }
});
</script>

<template>
  <AntField
    :label="label"
    :description="description"
    :color-type="colorType"
    class="cursor-pointer"
    :skeleton="_skeleton"
    :validator="value.validator"
  >
    <div class="flex items-center gap-1.5">
      <div class="relative full-height flex items-center">
        <input
          v-model="_value"
          :value="value.value"
          :class="inputClasses"
          type="radio"
          :aria-checked="isActive"
          :disabled="disabled"
        />

        <AntSkeleton
          v-model="_skeleton"
          absolute
          rounded-full
        />
      </div>

      <div :class="valueClass">
        {{ value.label }}

        <AntSkeleton
          v-model="_skeleton"
          absolute
          rounded
        />
      </div>
    </div>
  </AntField>
</template>

<style scoped>
input[type="radio"] {
  appearance: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 100%;
  transform: scale(0);
  transition: 120ms transform;
  background: currentColor;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}
</style>
