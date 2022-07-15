<script lang="ts">
export default {
  name: 'AntButton',
};
</script>

<script lang="ts" setup>
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { computed, onMounted } from 'vue';

const emit = defineEmits(['click']);
const props =
  defineProps<{
    label?: string;
    primary?: boolean;
    size?: string;
    backgroundColor?: string;
    icon?: IconDefinition;
  }>();

onMounted(() => {
  if (props.size) {
    if (['small', 'medium', 'large'].indexOf(props.size) === -1) {
      throw Error(`Size ${props.size} not allowed`);
    }
  }
});

const classes = computed(() => ({
  'inline-flex items-center px-2.5 py-1.5 border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all':
    true,
  'text-white bg-primary hover:bg-primary focus:ring-primary': props.primary,
  'border-gray-300 text-gray-700 bg-white hover:bg-gray-50': !props.primary,
  'text-xs': props.size === 'small',
  'text-xl': props.size === 'large',
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit('click');
};
</script>

<template>
  <button
    v-bind="$attrs"
    :class="classes"
    :style="style"
    type="button"
    @click="onClick"
  >
    <slot>{{ label }}</slot>

    <fa-icon v-if="icon" class="pl-2" :icon="icon" />
  </button>
</template>
