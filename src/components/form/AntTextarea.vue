<script lang="ts">
export default {
  name: 'AntTextarea',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { generateId } from '../../utils/helper';

const emit = defineEmits(['update:value']);
const props =
  defineProps<{
    value: string;
    id?: string;
    label?: string;
    placeholder?: string;
  }>();

const _id = ref(props.id || generateId(40));
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
  <label
    :for="`textarea-${id}`"
    class="block text-sm font-medium text-gray-700"
  >
    <slot>
      <span v-if="label" class="block mb-1">{{ label }}</span>
    </slot>
  </label>

  <div>
    <textarea
      v-model="_value"
      v-bind="$attrs"
      :id="`textarea-${_id}`"
      :placeholder="placeholder || label"
      rows="4"
      class="
        shadow-sm
        focus:ring-primary
        focus:border-primary
        block
        w-full
        sm:text-sm
        border-gray-300
        rounded-md
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    />
  </div>
</template>
