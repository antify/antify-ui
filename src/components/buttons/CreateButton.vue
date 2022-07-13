<script lang="ts">
export default {
  name: 'CreateButton',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import AntButton from './AntButton.vue';
import { onMounted } from 'vue';

const emit = defineEmits(['click']);

const props =
  defineProps<{
    id?: string;
    label?: string;
    size?: string;
    backgroundColor?: string;
    icon?: Object;
  }>();

onMounted(() => {
  if (props.size) {
    if (['small', 'medium', 'large'].indexOf(props.size) === -1) {
      throw Error(`Size ${props.size} not allowed`);
    }
  }
});

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
      class="text-green-500 border-green-500"
      @click="onClick"
    />
  </div>
</template>
