<script lang="ts">
export default {
  name: 'AntRadio',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { generateId } from '../../../utils/helper';
import AntSkeleton from '../../AntSkeleton.vue';

const emit = defineEmits(['update:groupValue']);
const props =
  defineProps<{
    id?: string;
    label?: string;
    description?: string;
    name?: string;
    color?: string;
    groupValue: string;
    value: string;
    loading?: boolean;
  }>();

const _id = ref(props.id ? props.id : generateId(40));
const _color = ref(props.color ? props.color : 'primary');

const _groupValue = computed({
  get: () => {
    return props.groupValue;
  },
  set: (val) => {
    console.log('', val);
    emit('update:groupValue', val);
  },
});
</script>

<template>
  <div v-if="!loading" class="w-full">
    <div class="flex items-center space-x-3">
      <input
        v-model="_groupValue"
        v-bind="$attrs"
        :value="value"
        :id="_id"
        :name="name"
        :described-by="`${_id}-description`"
        class="
          h-4
          w-4
          border-gray-300
          transition-all
          duration-500
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
        :class="`focus:ring-${_color} text-${_color}`"
        type="radio"
      />

      <div class="ml-3 relative w-full">
        <label :for="_id" class="block text-sm font-medium">
          <slot name="label">{{ label }}</slot>
        </label>

        <div
          v-if="description || $slots['description']"
          class="absolute mt-1 text-sm text-gray-500"
          :id="`${_id}-description`"
        >
          <slot name="description">
            {{ description }}
          </slot>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="w-full">
    <slot name="skeleton">
      <div class="flex justify-start w-full mb-1">
        <AntSkeleton class="w-4 h-4 rounded-full" />

        <div class="w-full ml-3">
          <AntSkeleton
            v-if="label || $slots['label']"
            class="w-2/6 h-4 rounded-md"
          />

          <AntSkeleton
            v-if="description || $slots['description']"
            class="w-4/6 h-4 rounded-md mt-1"
          />
        </div>
      </div>
    </slot>
  </div>
</template>
