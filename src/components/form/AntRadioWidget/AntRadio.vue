<script lang="ts">
export default {
  name: 'AntRadio',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { v4 } from 'uuid';
import { ref, computed } from 'vue';

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

const _id = ref(props.id ? props.id : v4());
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
      :class="`focus:ring-${_color} h-4 w-4 text-${_color} border-gray-300 transition-all duration-500`"
      type="radio"
    />

    <label :for="_id" class="ml-3 block text-sm font-medium">
      {{ label }}
    </label>
  </div>
</template>
