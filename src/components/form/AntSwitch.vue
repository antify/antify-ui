<script lang="ts">
export default {
  name: 'AntSwitch',
};
</script>

<script setup lang="ts">
import AntField from './Elements/AntField.vue';
import { useVModel } from '@vueuse/core';
import { computed } from 'vue';
import { SwitcherColorType } from './__types/AntSwitcher.type';
import Size from '../../enums/Size.enum';
import { Validator } from '@antify/validate';

const emits = defineEmits([ 'update:modelValue', 'update:skeleton' ]);
const props = withDefaults(defineProps<{
  modelValue: boolean;
  label?: string;
  description?: string;
  skeleton?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  validator?: Validator;
  size?: Size;
  colorType?: SwitcherColorType
}>(), {
  size: Size.md,
  colorType: SwitcherColorType.base
});

const _value = useVModel(props, 'modelValue', emits);
const _skeleton = useVModel(props, 'skeleton', emits);

const hasAction = computed(() => (!_skeleton.value && !props.readonly && !props.disabled))
const _colorType = computed(() => props.validator?.hasErrors() ? SwitcherColorType.danger : props.colorType);

const buttonClasses = computed(() => {
  const classes = {
    'relative inline-flex flex-shrink-0 h-5 w-9 cursor-pointer': true,
    'focus:outline-none': true,
    'rounded-full transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed': true,
    'focus-within:ring-2': props.size === Size.sm && hasAction.value,
    'focus-within:ring-4': props.size === Size.md && hasAction.value,
    'bg-neutral-light': !_value.value
  };

  const colorVariant = {
    [SwitcherColorType.base]: 'focus:ring-primary-lightest',
    [SwitcherColorType.danger]: 'focus:ring-danger-lightest',
    [SwitcherColorType.info]: 'focus:ring-info-lightest',
    [SwitcherColorType.success]: 'focus:ring-success-lightest',
    [SwitcherColorType.warning]: 'focus:ring-warning-lightest',
  };
  const activeColorVariant = {
    [SwitcherColorType.base]: 'bg-primary',
    [SwitcherColorType.danger]: 'bg-danger',
    [SwitcherColorType.info]: 'bg-info',
    [SwitcherColorType.success]: 'bg-success',
    [SwitcherColorType.warning]: 'bg-warning',
  };

  classes[colorVariant[_colorType.value]] = hasAction.value;
  classes[activeColorVariant[_colorType.value]] = _value.value;

  return classes;
})

const ballClasses = computed(() => {
  const classes = {
    'pointer-events-none inline-block h-4 w-4 rounded-full bg-neutral-lighter shadow transform ring-0 transition ease-in-out duration-200 translate-y-0.5': true,
    'translate-x-[1.125rem]': _value.value,
    'translate-x-0.5': !_value.value
  }

  return classes;
});
</script>

<template>
  <AntField
    :label="label"
    :description="description"
  >
    <button
      v-bind="$attrs"
      type="button"
      :class="buttonClasses"
      role="switch"
      :aria-checked="_value"
      :aria-labelledby="`${_id}-toggle`"
      @click="_value = !_value"
    >
      <span
        aria-hidden="true"
        :class="ballClasses"
      >
        <slot name="icon"></slot>
      </span>
    </button>
  </AntField>
</template>

<style scoped>

</style>
