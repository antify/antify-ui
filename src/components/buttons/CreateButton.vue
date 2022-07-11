<script lang="ts">
export default {
  name: 'CreateButton',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import AntButton from './AntButton.vue';
import { onMounted } from 'vue';

const { id, label, size, backgroundColor, icon } =
  defineProps<{
    id?: string;
    label?: string;
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

const onClick = () => {
  emit('click');
};
</script>

<template>
  <div>
    <AntButton
      :id="id"
      :label="label"
      class="text-green-500 border-green-500"
      @click="onClick"
      :backgroundColor="backgroundColor"
      :size="size"
      :icon="icon"
    />
  </div>
</template>
