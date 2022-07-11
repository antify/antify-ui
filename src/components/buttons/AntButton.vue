<script lang="ts">
export default {
  name: 'AntButton',
};
</script>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';

const {
  label,
  primary = false,
  size,
  backgroundColor,
  icon,
} = defineProps<{
  label?: string;
  primary?: boolean;
  size?: string;
  backgroundColor?: string;
  icon?: Object;
}>();

onMounted(() => {
  if (size) {
    if (['small', 'medium', 'large'].indexOf(size) === -1) {
      throw Error(`Size ${size} not allowed`);
    }
  }
});

const emit = defineEmits(['click']);

const classes = computed(() => ({
  'inline-flex items-center px-2.5 py-1.5 border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all':
    true,
  'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500': primary,
  'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500':
    !primary,
  'text-xs': size === 'small',
  'text-xl': size === 'large',
}));

const style = computed(() => ({
  backgroundColor: backgroundColor,
}));

const onClick = () => {
  emit('click');
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <slot name="label">{{ label }}</slot>

    <fa-icon v-if="icon" class="pl-2" :icon="icon" />
  </button>
</template>
