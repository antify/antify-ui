<script lang="ts">
export default {
  name: 'DeleteButton',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import AntButton from './AntButton.vue';

const emit = defineEmits(['click']);

defineProps<{
  id?: string;
  label?: string;
  size?: string;
  backgroundColor?: string;
  icon?: Object;
}>();

const onClick = () => {
  emit('click');
};
</script>

<template>
  <div>
    <AntButton
      v-bind="$attrs"
      :id="id"
      :label="label"
      :backgroundColor="backgroundColor"
      :size="size"
      :icon="icon"
      class="text-red-500 border-red-500"
      @click="onClick"
    />
  </div>
</template>
