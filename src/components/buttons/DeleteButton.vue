<script lang="ts">
export default {
  name: 'DeleteButton',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import AntButton from './AntButton.vue';

const { id, label, size, backgroundColor, icon } =
  defineProps<{
    id?: string;
    label?: string;
    size?: string;
    backgroundColor?: string;
    icon?: Object;
  }>();

const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};
</script>

<template>
  <div>
    <AntButton
      :id="id"
      :label="label"
      class="text-red-500 border-red-500"
      @click="onClick"
      :backgroundColor="backgroundColor"
      :size="size"
      :icon="icon"
    />
  </div>
</template>
