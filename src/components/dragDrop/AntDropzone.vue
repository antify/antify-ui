import { onMounted, ref } from 'vue';
<script lang="ts">
export default {
  name: 'AntDropzone',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { onMounted } from 'vue';

const emit = defineEmits(['dropped']);

const props =
  defineProps<{
    id: string;
    dropzoneType?: string;
  }>();

onMounted(() => {
  if (
    props.dropzoneType &&
    ['copy', 'move', 'link'].indexOf(props.dropzoneType) === -1
  ) {
    throw Error(`Dropzone type ${props.dropzoneType} is not allowed`);
  }
});

const onDrop = (event: DragEvent) => {
  if (event && event.dataTransfer) {
    emit('dropped', event.dataTransfer.getData(`${props.id}-data`));
  }
};
</script>

<template>
  <div
    :dropzone="dropzoneType || 'copy'"
    class="
      w-full
      h-48
      border-dashed border-4
      text-2xl text-gray-300
      italic
      font-semibold
      flex
      justify-center
      items-center
      hover:text-gray-500
      hover:border-gray-500
      transition-all
      rounded-xl
      select-none
    "
    @drop="onDrop"
  >
    <slot>Dropzone</slot>
  </div>
</template>
