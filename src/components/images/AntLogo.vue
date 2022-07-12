<script lang="ts">
export default {
  name: 'AntLogo',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';

const {
  logoUrl,
  alt = 'logo',
  size = 'medium',
} = defineProps<{
  logoUrl: string;
  alt?: string;
  size?: string;
}>();

const classes = computed(() => ({
  'block overflow-hidden': true,
  'h-6': size === 'small',
  'h-8': size === 'medium',
  'h-12': size === 'large',
}));

onMounted(() => {
  if (size && ['small', 'medium', 'large'].indexOf(size) === -1) {
    throw Error(`Size ${size} is not defined`);
  }
});
</script>

<template>
  <div :class="classes">
    <img class="h-full" :src="logoUrl" :alt="alt" />
  </div>
</template>
