<script lang="ts">
export default {
  name: 'AntSwitcher'
}
</script>

<script setup lang="ts">

import AntField from "./Elements/AntField.vue";
import AntButton from "./AntButton.vue";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Size from "../../enums/Size.enum";
import { computed, onMounted, ref, watch } from "vue";
import { useVModel } from "@vueuse/core";
import AntSkeleton from "../AntSkeleton.vue";
import { Validator } from "@antify/validate";
import { SwitcherColorType, SwitcherOption } from "./__types/AntSwitcher.type";

const emits = defineEmits(['update:modelValue', 'update:skeleton'])
const props = withDefaults(defineProps<{
  modelValue: string;
  options: string[] | SwitcherOption[];
  label?: string;
  description?: string;
  skeleton?: boolean;
  colorType?: SwitcherColorType,
  validator?: Validator;
  size?: Size,
}>(), {
  colorType: SwitcherColorType.base,
  size: Size.md
});

const _skeleton = useVModel(props, 'skeleton', emits);

const model: ComputedRef<string | SwitcherOption> = computed({
  get() {
    const found = props.options.find((option: string | SwitcherOption) => typeof option === 'string' ? option === props.modelValue : option.value === props.modelValue);

    if (!found) {
      return props.options[0];
    }

    return found;
  },
  set(val: string | SwitcherOption) {
    emits('update:modelValue', typeof val === 'string' ? val : val.value);
  }
});

const hasAction = computed(() => (!_skeleton.value && !props.readonly && !props.disabled))

const _colorType = computed(() => props.validator?.hasErrors() ? SwitcherColorType.danger : props.colorType);

watch(model, () => props.validator?.validate(model.value.value));

onMounted(() => {
  props.validator?.validate(model.value.value);
});

const containerClasses = computed(() => {
  const classes =  {
    'flex relative ring-primary/25 rounded-md outline-none': true,
    'focus-within:ring-2': props.size === Size.sm && hasAction.value,
    'focus-within:ring-4': props.size === Size.md && hasAction.value,
  };
  const colorVariant = {
    [SwitcherColorType.base]: 'focus-within:ring-primary-lightest',
    [SwitcherColorType.danger]: 'focus-within:ring-danger-lightest',
    [SwitcherColorType.info]: 'focus-within:ring-info-lightest',
    [SwitcherColorType.success]: 'focus-within:ring-success-lightest',
    [SwitcherColorType.warning]: 'focus-within:ring-warning-lightest',
  };

  classes[colorVariant[_colorType.value]] = hasAction.value;

  return classes;
});

const itemClasses = computed(() => {
  const classes = {
    'grow text-center': true,
    'p-2.5 text-sm ': props.size === Size.md,
    'p-1.5 text-xs ': props.size === Size.sm,
    'invisible': _skeleton.value
  };

  const colorVariant = {
    'base': 'border-neutral-light bg-neutral-lightest text-neutral-lightest-font',
    'danger': 'border-danger bg-danger-lighter text-danger-lighter-font',
    'info': 'border-info bg-info-lighter text-info-lighter-font',
    'success': 'border-success bg-success-lighter text-success-lighter-font',
    'warning': 'border-warning bg-warning-lighter text-warning-lighter-font',
  };

  classes[colorVariant[_colorType.value]] = hasAction.value;

  return classes;
});

function prevOption() {
  const index = props.options.findIndex((option) => option === model.value);

  if (index !== -1 && props.options[index - 1]) {
    model.value = props.options[index - 1];
  } else {
    model.value = props.options[props.options.length - 1];
  }
}

function nextOption() {
  const index = props.options.findIndex((option) => option === model.value);

  if (index !== -1 && props.options[index + 1]) {
    model.value = props.options[index + 1];
  } else {
    model.value = props.options[0];
  }
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
    label-for="noop"
  >
    <div
      :class="containerClasses"
      tabindex="0"
      @keydown.left.prevent="prevOption()"
      @keydown.right.prevent="nextOption()"
    >
      <AntButton
        :icon-left="faChevronLeft"
        grouped="left"
        no-focus
        @click="prevOption"
        :color-type="_colorType"
        :size="size"
        :skeleton="_skeleton"
      />

      <div class="grow relative">
        <div
          :class="itemClasses"
          class="switcher-content"
        >
          {{ typeof model === 'string' ? model : model.label }}
        </div>

        <AntSkeleton
          v-model="_skeleton"
          absolute
          grouped="center"
          rounded
        />
      </div>

      <AntButton
        :icon-left="faChevronRight"
        grouped="right"
        no-focus
        @click="nextOption"
        :color-type="_colorType"
        :size="size"
        :skeleton="_skeleton"
      />
    </div>
  </AntField>
</template>

<style scoped lang="scss">
.switcher-content {
  position: relative;

  &:before {
    content: '';

    position: absolute;

    inset: 0;

    border-top: 1px;
    border-bottom: 1px;
    border-style: solid;

    border-color: inherit;
  }
}
</style>