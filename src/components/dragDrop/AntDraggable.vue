<script lang="ts">
export default {
  name: 'AntDraggable',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { onMounted } from 'vue';

const {
  id,
  data,
  showGrabber,
  dragType = 'copy',
} = defineProps<{
  id: string;
  data: string;
  showGrabber?: boolean;
  dragType?: string;
}>();

onMounted(() => {
  if (dragType && ['copy', 'move', 'link', 'none'].indexOf(dragType) === -1) {
    throw Error(`Drag type ${dragType} is not allowed`);
  }
});

const dragstartEvent = (event: DragEvent) => {
  if (event && event.dataTransfer) {
    event.dataTransfer.dropEffect = dragType as
      | 'copy'
      | 'move'
      | 'link'
      | 'none';
    event.dataTransfer.effectAllowed = dragType as
      | 'copy'
      | 'move'
      | 'link'
      | 'none';
    event.dataTransfer.setData(`${id}-data`, data);
  }
};
</script>

<template>
  <div
    draggable="true"
    class="cursor-pointer select-none flex items-center"
    @dragstart="dragstartEvent($event)"
  >
    <div
      v-if="showGrabber"
      class="
        grabber
        inline-block
        px-2
        py-1
        text-gray-400
        hover:text-gray-600
        transition-all
        duration-500
        h-full
      "
    >
      <fa-icon :icon="faEllipsisVertical" />
    </div>

    <slot></slot>
  </div>
</template>
