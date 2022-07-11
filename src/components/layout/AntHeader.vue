<script lang="ts">
export default {
  name: 'AntHeader',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { onMounted } from 'vue';

const { label, headerType } =
  defineProps<{
    label?: string;
    headerType: string;
  }>();

onMounted(() => {
  if (
    headerType &&
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(headerType) === -1
  ) {
    throw Error(`Header type ${headerType} is not defined.`);
  }
});

const classes = () => ({
  '': true,
  'text-xl font-medium': headerType === 'h1',
  'text-lg font-bold': headerType === 'h2',
  'text-lg font-semibold': headerType === 'h3',
  'text-lg font-medium': headerType === 'h4',
  'text-md font-bold': headerType === 'h5',
  'text-md font-semibold': headerType === 'h6',
});
</script>

<template>
  <component :is="headerType" :class="classes()">{{ label }}</component>
</template>
