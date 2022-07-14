<script lang="ts">
export default {
  name: 'CreateButton',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import AntButton from './AntButton.vue';
import { onMounted } from 'vue';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

const emit = defineEmits(['click']);

const props =
  defineProps<{
    id?: string;
    label?: string;
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
      class="text-green-500 border-green-500 focus:ring-green-500"
      @click="onClick"
    >
      <slot></slot>
    </AntButton>
  </div>
</template>
