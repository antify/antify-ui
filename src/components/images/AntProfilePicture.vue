<script lang="ts">
export default {
  name: 'AntProfilePicture',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { reactive, computed, onMounted } from 'vue';
const {
  imageUrl,
  alt = '',
  size = 'medium',
} = defineProps<{
  imageUrl: string;
  alt?: string;
  size?: string;
}>();

const classes = computed(() => ({
  'rounded-full block overflow-hidden': true,
  'w-8': size === 'small',
  'w-12': !size || size === 'medium',
  'w-16': size === 'large',
}));

onMounted(() => {
  if (size && ['small', 'medium', 'large'].indexOf(size) === -1) {
    throw Error(`Size ${size} is not defined.`);
  }
});
</script>

<template>
  <div :class="classes">
    <img :src="imageUrl" :alt="alt" />
  </div>
</template>
