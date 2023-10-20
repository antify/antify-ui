<script lang="ts">
export default {
  name: 'AntUnitInput',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import AntButton from './AntButton.vue'
import AntField from './Elements/AntField.vue'
import AntBaseInput from './Elements/AntBaseInput.vue'
import Size from '../../enums/Size.enum'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {ColorType} from "../../enums/ColorType.enum";
import {ButtonColorType} from "../../types/AntButton.type";

const emit = defineEmits(['update:value']);
const props = withDefaults(defineProps<{
  value: number;
  unit: string | IconDefinition;
  label?: string;
  placeholder?: string;
  description?: string;
  size?: Size;
  colorType?: ColorType;
  disabled?: boolean;
  skeleton?: boolean;
  wrapperClass?: string | Record<string, boolean>;
}>(), {
  colorType: ColorType.neutral,
  disabled: false,
  skeleton: false,
  size: Size.md,
});
const content = computed<string>({
  get: () => {
    return props.value as string;
  },
  set: (val: string) => {
    emit('update:value', val);
  },
});

onMounted(() => {
  const allowedSizes = Object.values(Size);
  const allowedColorTypes = Object.values(ColorType);

  if (allowedSizes.indexOf(props.size) === -1) {
    throw Error(`Size ${props.size} not allowed. Use one of ${allowedSizes.join(' | ')}`);
  }

  if (allowedColorTypes.indexOf(props.colorType) === -1) {
    throw Error(`ColorType ${props.colorType} not allowed. Use one of ${allowedColorTypes.join(' | ')}`);
  }
});
</script>

<template>
  <AntField
      :label="label"
      :size="size"
      :skeleton="skeleton"
      :description="description"
      :colorType="colorType"
      :class="wrapperClass"
  >
    <div
        class="flex relative"
    >
      <AntBaseInput
          v-model:value="content"
          type="number"
          grouped="left"
          wrapper-class="flex-grow"
          :colorType="colorType"
          :size="size"
          :skeleton="skeleton"
          :disabled="disabled"
          :placeholder="placeholder || label"
          :show-icon="false"
          v-bind="$attrs"
      />

      <AntButton
          :icon-left="typeof unit === 'object' ? unit : undefined"
          grouped="right"
          :color-type="colorType === ColorType.neutral ? ButtonColorType.neutralLight : colorType"
          :size="size"
          :skeleton="skeleton"
          :readonly="true"
      >
        <span v-if="typeof unit === 'string'">
          {{unit}}
        </span>
      </AntButton>
    </div>
  </AntField>
</template>
