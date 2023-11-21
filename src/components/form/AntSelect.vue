<script lang="ts">
export default {
  name: 'AntSelect',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
/**
 * This select is a custom component instead of a native <select> because the dropdown is not good
 * customizable with css.
 *
 * Known problem using a custom select instead of a native one:
 * - Label tags does not trigger the custom select by containing the select input or using the for attribute.
 * This means, this select is not usable in a custom field with multiple elements in there.
 * If the user clicks on the label, this select will not be focused.
 *
 * TODO:: add screen reader support
 * Fix overflow bug (See Ellipsis Text story)
 * TODO:: if the dropdown is open and the user types something, the element with a matching value should be focused.
 */
import AntField from "./Elements/AntField.vue";
import {SelectOption} from './__types/AntSelect.type';
import {computed, onMounted, ref, watch, nextTick} from 'vue';
import Size from "../../enums/Size.enum";
import {ColorType} from "../../enums/ColorType.enum";
import {Validator} from "@antify/validate";
import {handleEnumValidation} from "../../handler";
import Grouped from "../../enums/Grouped.enum";
import AntIcon from "../AntIcon.vue";
import {faChevronDown, faChevronUp, faMultiply} from "@fortawesome/free-solid-svg-icons";
import AntSkeleton from "../AntSkeleton.vue";
import {vOnClickOutside} from '@vueuse/components';
import AntButton from "./AntButton.vue";
import { useVModel } from "@vueuse/core";
import { Ref } from "react";

const emit = defineEmits(['update:value', 'update:focus', 'update:skeleton']);
const props = withDefaults(
    defineProps<{
      value: string | number | null;
      options?: SelectOption[];
      label?: string;
      description?: string;
      placeholder?: string;
      size?: Size;
      colorType?: ColorType;
      disabled?: boolean;
      skeleton?: boolean;
      validator?: Validator;
      nullable?: boolean;
      grouped?: Grouped;
      name?: string;
      wrapperClass?: string | Record<string, boolean>;
      showMessageOnError?: boolean;
      expanded?: boolean;
    }>(), {
      colorType: ColorType.base,
      grouped: Grouped.none,
      size: Size.md,
      disabled: false,
      skeleton: false,
      nullable: false,
      showMessageOnError: true,
      expanded: true
    }
);

const _skeleton: Ref<boolean> = useVModel(props, 'skeleton', emit);

const isOpen = ref(false);
const _value = computed({
  get: () => {
    return props.value;
  },
  set: (val: string) => {
    props.validator?.validate(val);
    emit('update:value', val);
  },
});
const valueLabel = computed(() => props.options.find(option => option.value === _value.value)?.label || null);
const inputClasses = computed(() => {
  const variants = {};
  const classes = {
    'flex items-center transition-colors border-none outline relative focus:z-10': true,
    'outline-offset-[-1px] outline-1 focus:outline-offset-[-1px] focus:outline-1': true,
    // Skeleton
    'invisible': _skeleton.value,
    // Disabled
    'disabled:opacity-50 disabled:cursor-not-allowed': true,
    // Size
    'focus:ring-2 p-1.5 gap-1.5 text-xs': props.size === Size.sm,
    'focus:ring-4 p-2.5 gap-2.5 text-sm': props.size === Size.md,
    // Grouped
    'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none': props.grouped === Grouped.left,
    'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md': props.grouped === Grouped.right,
    'rounded-none': props.grouped === Grouped.center,
    'rounded-md': props.grouped === Grouped.none,
    'rounded-tr-none rounded-br-none': props.nullable && _value.value !== null,
    'rounded-bl-none rounded-br-none': isOpen.value,
    // Open
    'shadow-md': isOpen.value,
    // Disabled
    'opacity-50 cursor-not-allowed': props.disabled,
    'invisible': _skeleton.value
  };

  variants[ColorType.base] = 'outline-neutral-light focus:outline-primary bg-neutral-lightest focus:ring-primary/25';
  variants[ColorType.primary] = 'outline-primary focus:outline-primary bg-primary-lighter focus:ring-primary/25';
  variants[ColorType.secondary] = 'outline-secondary focus:outline-secondary bg-secondary-lighter focus:ring-secondary/25';
  variants[ColorType.success] = 'outline-success focus:outline-success bg-success-lighter focus:ring-success/25';
  variants[ColorType.info] = 'outline-info focus:outline-info bg-info-lighter focus:ring-info/25';
  variants[ColorType.warning] = 'outline-warning focus:outline-warning bg-warning-lighter focus:ring-warning/25';
  variants[ColorType.danger] = 'outline-danger focus:outline-danger bg-danger-lighter focus:ring-danger/25';

  classes[variants[_colorType.value]] = true;

  return classes;
});
const dropdownClasses = computed(() => {
  const classes = {
    'absolute w-full border flex flex-col gap-px outline-none -mt-px overflow-hidden shadow-md z-40': true,
    'rounded-bl-md rounded-br-md': true,
    // Size
    'text-xs': props.size === Size.sm,
    'text-sm': props.size === Size.md,
  };
  const variants = {};

  variants[ColorType.base] = 'bg-neutral-light border-neutral-light';
  variants[ColorType.primary] = 'bg-primary border-primary';
  variants[ColorType.secondary] = 'bg-secondary border-secondary';
  variants[ColorType.success] = 'bg-success border-success';
  variants[ColorType.info] = 'bg-info border-info';
  variants[ColorType.warning] = 'bg-warning border-warning';
  variants[ColorType.danger] = 'bg-danger border-danger';

  classes[variants[_colorType.value]] = true;

  return classes;
});
const dropDownItemClasses = computed(() => {
  const classes = {
    'select-none text-ellipsis overflow-hidden whitespace-nowrap': true,
    // Size
    'p-1.5': props.size === Size.sm,
    'p-2.5': props.size === Size.md,
  };
  const variants = {};

  variants[ColorType.base] = 'bg-neutral-lightest text-neutral-lightest-font';
  variants[ColorType.primary] = 'bg-primary-lighter border-primary-lighter-font';
  variants[ColorType.secondary] = 'bg-secondary-lighter border-secondary-lighter-font';
  variants[ColorType.success] = 'bg-success-lighter border-success-lighter-font';
  variants[ColorType.info] = 'bg-info-lighter border-info-lighter-font';
  variants[ColorType.warning] = 'bg-warning-lighter border-warning-lighter-font';
  variants[ColorType.danger] = 'bg-danger-lighter border-danger-lighter-font';

  classes[variants[_colorType.value]] = true;

  return classes;
});
const placeholderClasses = computed(() => {
  const classes = {
    'select-none text-ellipsis overflow-hidden whitespace-nowrap w-full': true
  };
  const variants = {};

  variants[ColorType.base] = 'text-neutral';
  variants[ColorType.primary] = 'text-primary-dark';
  variants[ColorType.secondary] = 'text-secondary-dark';
  variants[ColorType.success] = 'text-success-dark';
  variants[ColorType.info] = 'text-info-dark';
  variants[ColorType.warning] = 'text-warning-dark';
  variants[ColorType.danger] = 'text-danger-dark';

  classes[variants[_colorType.value]] = true;

  return classes;
});
const inputValueClasses = computed(() => {
  const classes = {
    'select-none text-ellipsis overflow-hidden whitespace-nowrap w-full': true
  };
  const variants = {};

  variants[ColorType.base] = 'text-neutral-lightest-font';
  variants[ColorType.primary] = 'text-primary-lighter-font';
  variants[ColorType.secondary] = 'text-secondary-lighter-font';
  variants[ColorType.success] = 'text-success-lighter-font';
  variants[ColorType.info] = 'text-info-lighter-font';
  variants[ColorType.warning] = 'text-warning-lighter-font';
  variants[ColorType.danger] = 'text-danger-lighter-font';

  classes[variants[_colorType.value]] = true;

  return classes;
});
const arrowClasses = computed(() => {
  const classes = {},
      variants = {};

  variants[ColorType.base] = 'text-neutral-lightest-font';
  variants[ColorType.primary] = 'text-primary-lighter-font';
  variants[ColorType.secondary] = 'text-secondary-lighter-font';
  variants[ColorType.success] = 'text-success-lighter-font';
  variants[ColorType.info] = 'text-info-lighter-font';
  variants[ColorType.warning] = 'text-warning-lighter-font';
  variants[ColorType.danger] = 'text-danger-lighter-font';

  classes[variants[_colorType.value]] = true;

  return classes;
});
const _colorType = computed(() => props.validator?.hasErrors() ? ColorType.danger : props.colorType);
const skeletonGrouped = computed(() => {
  if (!props.nullable || (props.nullable && _value.value === null)) {
    return props.grouped;
  }

  if (props.grouped === Grouped.right || props.grouped === Grouped.center) {
    return Grouped.center;
  } else {
    return Grouped.left;
  }
});
const inputRef = ref<HTMLElement | null>(null);
const dropDownRef = ref<HTMLElement | null>(null);
const focusedDropDownItem = ref(null);

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, ColorType, 'ColorType');
  handleEnumValidation(props.grouped, Grouped, 'Grouped');

  props.validator?.validate(_value.value);

  focusedDropDownItem.value = _value.value;
});
watch(isOpen, (val) => {
  nextTick(() => {
    if (val) {
      dropDownRef.value?.focus();
    }
  });
});
watch(() => props.focus, (val) => {
  if (val) {
    inputRef.value?.focus();
    emit('update:focus', false);
  }
})

function getActiveDropDownItemClasses(option) {
  const classes = {},
      variants = {};

  variants[ColorType.base] = 'bg-neutral-lightest/25';
  variants[ColorType.primary] = 'bg-primary-lighter/25';
  variants[ColorType.secondary] = 'bg-secondary-lighter/25';
  variants[ColorType.success] = 'bg-success-lighter/25';
  variants[ColorType.info] = 'bg-info-lighter/25';
  variants[ColorType.warning] = 'bg-warning-lighter/25';
  variants[ColorType.danger] = 'bg-danger-lighter/25';

  if (option.value === focusedDropDownItem.value) {
    classes[variants[_colorType.value]] = true;
  }

  return classes;
}

function onClickOutside() {
  if (!isOpen.value) {
    return;
  }

  isOpen.value = false;
  inputRef.value?.focus();
}

function onKeyDownDropDown(e) {
  if (e.key === 'Enter') {
    isOpen.value = false;
    _value.value = focusedDropDownItem.value;
    inputRef.value?.focus();
  }

  if (e.key === 'Escape') {
    isOpen.value = false;
    inputRef.value?.focus();
  }

  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    const index = props.options.findIndex(option => option.value === focusedDropDownItem.value);

    if (index === -1) {
      focusedDropDownItem.value = props.options[0].value
    } else if (props.options[index + 1] !== undefined) {
      focusedDropDownItem.value = props.options[index + 1].value
    }
  }

  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    const index = props.options.findIndex(option => option.value === focusedDropDownItem.value);

    if (props.options[index - 1] !== undefined) {
      focusedDropDownItem.value = props.options[index - 1].value
    }
  }

  if (e.key === 'Tab') {
    isOpen.value = false;
  }
}

function onKeyDownInput(e) {
  if (e.key === 'Enter') {
    isOpen.value = true;
    inputRef.value?.blur();
  }

  if (e.key === 'Escape') {
    isOpen.value = false;
    inputRef.value?.focus();
  }

  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    const index = props.options.findIndex(option => option.value === _value.value);

    if (index === -1) {
      _value.value = props.options[0].value;
    } else if (props.options[index + 1] !== undefined) {
      _value.value = props.options[index + 1].value;
    }
  }

  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    const index = props.options.findIndex(option => option.value === _value.value);

    if (props.options[index - 1] !== undefined) {
      _value.value = props.options[index - 1].value;
    }
  }
}

function onFocusInInput() {
  inputRef.value?.addEventListener('keydown', onKeyDownInput);
}

function onFocusOutInput(e) {
  e.preventDefault();
  inputRef.value?.removeEventListener('keydown', onKeyDownInput);
}

function onClickSelectInput(e) {
  e.preventDefault();

  if (props.disabled) {
    return;
  }

  if (isOpen) {
    inputRef.value?.focus()
  }

  isOpen.value = !isOpen.value;
}

function onClickDropDownItem(e, value) {
  e.preventDefault();
  inputRef.value.focus();

  isOpen.value = false;
  _value.value = value;
}

function onClickRemoveButton() {
  inputRef.value?.focus();
  _value.value = null;
}
</script>

<template>
  <AntField
      :label="label"
      :size="size"
      :skeleton="_skeleton"
      :description="description"
      :color-type="colorType"
      :validator="validator"
      :class="wrapperClass"
      :show-message-on-error="showMessageOnError"
      :expanded="expanded"
      label-for="noop"
      @clickLabel="() => inputRef?.focus()"
  >
    <div
        class="h-fit flex flex-row w-full"
    >
      <div
          class="relative w-full"
          :class="{'cursor-pointer': !_skeleton}"
          v-on-click-outside="onClickOutside"
      >
        <AntSkeleton
            v-model="_skeleton"
            absolute
            rounded
            :grouped="skeletonGrouped"
        />

        <input type="hidden" :name="name" v-model="_value">

        <!-- Input -->
        <div
            :class="inputClasses"
            ref="inputRef"
            :tabindex="disabled ? undefined : 0"
            @mousedown="onClickSelectInput"
            @focusin="onFocusInInput"
            @focusout="onFocusOutInput"
            v-bind="$attrs"
        >
          <div
              v-if="_value === null && placeholder !== undefined"
              :class="placeholderClasses"
          >
            {{ placeholder }}
          </div>

          <div
              v-else-if="_value === null && label !== undefined"
              :class="placeholderClasses"
          >
            {{ label }}
          </div>

          <div
              v-else
              :class="inputValueClasses"
          >
            {{ valueLabel }}
          </div>

          <AntIcon
              v-if="isOpen"
              :icon="faChevronUp"
              :size="size"
              :class="arrowClasses"
          />

          <AntIcon
              v-else
              :icon="faChevronDown"
              :size="size"
              :class="arrowClasses"
          />
        </div>

        <!-- Dropdown -->
        <div
            v-if="isOpen"
            :class="dropdownClasses"
            ref="dropDownRef"
            @keydown="onKeyDownDropDown"
            tabindex="0"
        >
          <div
              v-for="(option) in options"
              :class="{...dropDownItemClasses, ...getActiveDropDownItemClasses(option)}"
              @mousedown="(e) => onClickDropDownItem(e, option.value)"
              @mouseover="() => focusedDropDownItem = option.value"
          >
            {{ option.label }}
          </div>
        </div>
      </div>

      <AntButton
          v-if="nullable && _value !== null"
          :icon-left="faMultiply"
          :color-type="_colorType"
          :grouped="[Grouped.left, Grouped.center].some(item => item === grouped) ? Grouped.center : Grouped.right"
          :size="size"
          :skeleton="_skeleton"
          @click="onClickRemoveButton"
      />
    </div>
  </AntField>
</template>
