<script lang="ts">
export default {
  name: 'AntProgress',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { v4 } from 'uuid';

const props =
  defineProps<{
    id?: string;
    value?: number;
    fullValue?: number;
    label?: string;
    color?: string;
  }>();

const _id = ref<string>(props.id ? props.id : v4());
const _value = ref<number>(props.value || 0);
const _fullValue = ref<number>(props.fullValue || 100);
const _color = ref<string>(props.color || 'primary');
const current = computed<number>(() => (_value.value * 100) / _fullValue.value);
</script>

<template>
  <div class="text-xs text-gray-500 flex justify-between">
    <slot name="label">
      <span>{{ label }}</span>
    </slot>

    <span>
      {{ _value.toLocaleString(undefined, {}) }}/{{
        _fullValue.toLocaleString(undefined, {})
      }}
    </span>
  </div>

  <div
    :id="_id"
    class="
      w-full
      bg-gray-400
      min-h-2
      flex
      justify-center
      items-center
      relative
      overflow-hidden
      rounded-full
    "
  >
    <div
      :style="`width: ${current}%`"
      :class="`bg-${_color} h-full absolute left-0 transition-all rounded-full`"
    />

    <div class="z-10 flex items-center"><slot></slot></div>
  </div>
</template>
