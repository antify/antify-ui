<script lang="ts">
export default {
  name: 'AntTextarea',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { generateId } from '../../utils/helper';
import AntSkeleton from '../elements/AntSkeleton.vue';

const emit = defineEmits(['update:value']);
const props =
  defineProps<{
    value: string;
    id?: string;
    label?: string;
    description?: string;
    placeholder?: string;
    loading?: boolean;
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
  <div v-if="!loading">
    <label
      :for="`textarea-${id}`"
      class="block text-sm font-medium text-gray-700"
    >
      <slot>
        <span v-if="label">{{ label }}</span>
      </slot>
    </label>

    <div>
      <textarea
        v-model="_value"
        v-bind="$attrs"
        :id="`textarea-${_id}`"
        :described-by="`textarea-${_id}-description`"
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

    <div
      v-if="description || $slots['description']"
      :id="`textarea-${_id}-description`"
      class="mt-1 text-sm text-gray-500"
    >
      <slot name="description">
        {{ description }}
      </slot>
    </div>
  </div>

  <div v-else>
    <AntSkeleton
      v-if="label || $slots['label']"
      class="w-2/6 h-4 rounded-md mb-1"
    />

    <AntSkeleton class="w-full h-24 rounded-md" />

    <AntSkeleton
      v-if="description || $slots['description']"
      class="w-4/6 h-4 rounded-md mt-1"
    />
  </div>
</template>
