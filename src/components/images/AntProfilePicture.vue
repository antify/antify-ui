<script lang="ts">
export default {
  name: 'AntProfilePicture',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';

const props =
  defineProps<{
    imageUrl: string;
    alt?: string;
    size?: string;
  }>();

const classes = computed(() => ({
  'rounded-full block overflow-hidden': true,
  'w-8': props.size === 'small',
  'w-12': !props.size || props.size === 'medium',
  'w-16': props.size === 'large',
}));

onMounted(() => {
  if (props.size && ['small', 'medium', 'large'].indexOf(props.size) === -1) {
    throw Error(`Size ${props.size} is not defined.`);
  }
});
</script>

<template>
  <div :class="classes">
    <img :src="imageUrl" :alt="alt" />
  </div>
</template>
