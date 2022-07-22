<script lang="ts">
export default {
  name: 'AntRadio',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { generateId } from '../../../utils/helper';

const emit = defineEmits(['update:groupValue']);
const props =
  defineProps<{
    id?: string;
    label?: string;
    name?: string;
    color?: string;
    groupValue: string;
    value: string;
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
  <div class="flex items-center space-x-3">
    <input
      v-model="_groupValue"
      v-bind="$attrs"
      :value="value"
      :id="_id"
      :name="name"
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

    <label :for="_id" class="ml-3 block text-sm font-medium">
      {{ label }}
    </label>
  </div>
</template>
