<script lang="ts">
export default {
  name: 'AntCheckbox',
};
</script>

<script lang="ts" setup>
// @ts-nocheck
import { computed, ref } from 'vue';
import { generateId } from '../../../utils/helper';
import AntSkeleton from '../../AntSkeleton.vue';

const emit = defineEmits(['update:checked']);

const props =
  defineProps<{
    checked: boolean | any[];
    value?: string;
    id?: string;
    label?: string;
    description?: string;
    legend?: string;
    color?: string;
    loading?: boolean;
  }>();

const _id = ref(props.id ? props.id : generateId(40));
const _color = ref(props.color ? props.color : 'primary');

const _checked = computed({
  get: () => {
    return props.checked;
  },
  set: (val) => {
    emit('update:checked', val);
  },
});
</script>

<template>
  <fieldset v-if="!loading">
    <slot name="legend">
      <legend class="sr-only">{{ legend }}</legend>
    </slot>

    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          type="checkbox"
          v-bind="$attrs"
          :id="_id"
          :aria-describedby="`${_id}-description`"
          v-model="_checked"
          :value="value"
          :class="`focus:ring-${_color} h-4 w-4 text-${_color} border-gray-300 rounded transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed`"
        />
      </div>

      <slot v-bind="{ id: _id }">
        <div class="ml-3 text-sm">
          <slot name="label" v-bind="{ id: _id }">
            <label class="font-medium text-gray-700 select-none" :for="_id">
              {{ label }}
            </label>
          </slot>

          <slot name="description" v-bind="{ id: `${_id}-description` }">
            <p
              v-if="description"
              :id="`${_id}-description`"
              class="text-gray-500"
            >
              {{ description }}
            </p>
          </slot>
        </div>
      </slot>
    </div>
  </fieldset>

  <div v-else>
    <div class="flex justify-start w-full mb-1">
      <AntSkeleton :model-value="loading" class="w-4 h-4 rounded-md" />

      <AntSkeleton
        :model-value="label || $slots['label']"
        class="w-2/6 h-4 rounded-md ml-4"
      />
    </div>

    <AntSkeleton
        :model-value="description || $slots['description']"
      class="w-4/6 h-4 rounded-md mt-1"
    />
  </div>
</template>
