<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import AntRadio from './AntRadio.vue';
import { useVModel } from '@vueuse/core';
import { AntField } from '../Elements';
import { AntRadioType } from './__types/AntRadio.type';
import { InputColorType, Size } from '../../../enums';
import { Validator } from '@antify/validate';
import { computed, Ref, watch } from 'vue';

const emits = defineEmits([ 'update:modelValue', 'update:skeleton' ]);
const props = withDefaults(
  defineProps<{
    modelValue: string | null;
    radioButtons: AntRadioType[];

    label?: string;
    description?: string;
    direction?: 'COLUMN' | 'ROW';
    colorType?: InputColorType;
    size?: Size;
    skeleton?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    validator?: Validator;
  }>(), {
    direction: 'COLUMN',
    colorType: InputColorType.base,
    size: Size.md,
    skeleton: false,
    disabled: false,
    readonly: false
  });

const _value = useVModel(props, 'modelValue', emits);
const _skeleton = useVModel(props, 'skeleton', emits);

const _colorType: Ref<InputColorType | undefined> = computed(() => props.validator?.hasErrors() ? InputColorType.danger : undefined);

const containerClasses = computed(() => {
  const classes = {
    'flex gap-2.5 justify-start': true,
    'flex-row': props.direction === 'ROW',
    'flex-col': props.direction === 'COLUMN',
  };

  return classes;
})

watch(_value, () => {
  props.validator?.validate(_value.value);
}, {
  deep: true
});
</script>

<template>
  <AntField
    :label="label"
    :description="description"
    :color-type="colorType"
    :skeleton="_skeleton"
    :validator="validator"
  >
    <div
      :class="containerClasses"
    >
      <AntRadio
        v-model="_value"
        v-for="(radio, index) in radioButtons"
        :key="`radio-button-widget_${radio.value}-${index}`"
        :value="radio"
        :skeleton="_skeleton"
        :disabled="disabled || radio.disabled"
        :readonly="readonly || radio.readonly"
        :color-type="_colorType || radio.colorType || colorType"
      />
    </div>
  </AntField>
</template>
