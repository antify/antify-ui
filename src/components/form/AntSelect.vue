<script lang="ts">
export default {
  name: 'AntSelect',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { v4 } from 'uuid';
import { SelectOption } from '../../types/SelectOption.type';
import { ref, computed } from 'vue';

const emit = defineEmits(['update:value']);
const props =
  defineProps<{
    id?: string;
    label?: string;
    options?: SelectOption[];
    value: string;
  }>();

const _id = ref(props.id || v4());
const _value = computed({
  get: () => {
    return props.value;
  },
  set: (val: string) => {
    emit('update:value', val);
  },
});
</script>

<template>
  <div>
    <label :for="_id">
      <slot>
        <span class="block text-sm font-medium text-gray-700">{{ label }}</span>
      </slot>
    </label>

    <select
      :id="_id"
      v-model="_value"
      class="
        mt-1
        block
        w-full
        pl-3
        pr-10
        py-2
        text-base
        border-gray-300
        focus:outline-none
        focus:ring-indigo-500
        focus:border-indigo-500
        sm:text-sm
        rounded-md
      "
      v-bind="$attrs"
    >
      <option
        v-for="(option, index) in options"
        :key="`${id}-${index}`"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
