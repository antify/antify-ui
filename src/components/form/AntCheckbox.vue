<script lang="ts">
export default {
  name: 'AntCheckbox',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import { uuid } from 'vue3-uuid';

const emit = defineEmits(['update:value']);

const {
  id = uuid.v4(),
  label,
  value,
} = defineProps<{
  id: string;
  label: string;
  value: boolean;
}>();

const _value = computed({
  get: () => {
    return value;
  },
  set: (val) => {
    emit('update:value', val);
  },
});
</script>

<template>
  <div class="flex items-center space-x-3">
    <input type="checkbox" :id="id" v-model="_value" />

    <label :for="id">{{ label }}</label>
  </div>
</template>
