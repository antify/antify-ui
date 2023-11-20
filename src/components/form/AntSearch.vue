<script lang="ts">
export default {
  name: 'AntSearch'
};
</script>

<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import AntBaseInput from './Elements/AntBaseInput.vue'
import Size from '../../enums/Size.enum'
import {Validator} from '@antify/validate'
import {handleEnumValidation} from "../../handler";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits(['update:value']);
const props = withDefaults(defineProps<{
  value: string | null;
  placeholder?: string;
  size?: Size;
  disabled?: boolean;
  skeleton?: boolean;
  validator?: Validator;
  inputTimeout?: number;
  query?: string;
}>(), {
  disabled: false,
  skeleton: false,
  size: Size.md,
  inputTimeout: 300,
  placeholder: "Search"
});
const timeout = ref<number>(0);
// TODO:: implement query prop. Find a way to use vue router in Storybook.
const _value = computed<number | null>({
  get: () => props.value,
  set: (val: number | null) => {
    if (val === null) {
      return emit('update:value', val);
    }

    if (timeout.value) {
      clearTimeout(timeout.value);
    }

    timeout.value = setTimeout(() => {
      emit('update:value', val);
    }, props.inputTimeout);
  },
});

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
});
</script>

<template>
  <AntBaseInput
    v-model:value="_value"
    type="search"
    :size="size"
    :skeleton="skeleton"
    :disabled="disabled"
    :placeholder="placeholder"
    :validator="validator"
    :icon-left="faSearch"
    nullable
    v-bind="$attrs"
  />
</template>
