<script lang="ts">
export default {
  name: 'AntTextarea',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { uuid } from 'vue3-uuid';
import { ref, computed } from 'vue';

const emit = defineEmits(['update:value']);
const props =
  defineProps<{
    value: string;
    id?: string;
    label?: string;
    placeholder?: string;
  }>();

const _id = ref(props.id || uuid.v4());
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
  <slot>
    <label
      v-if="label"
      :for="`textarea-${id}`"
      class="block text-sm font-medium text-gray-700 mb-1"
    >
      <span>{{ label }}</span>
    </label>
  </slot>

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
      "
    />
  </div>
</template>
