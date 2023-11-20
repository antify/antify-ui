<script lang="ts">
export default {
  name: 'AntSkeleton'
}
</script>

<script lang="ts" setup>
import Grouped from "../enums/Grouped.enum";
import {computed} from "vue";

const props = withDefaults(defineProps<{
  grouped?: Grouped,
  rounded?: boolean,
  absolute?: boolean
}>(), {
  grouped: Grouped.none,
  rounded: false,
  absolute: false
});
const groupedClassList = computed(() => ({
  'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none': props.grouped === Grouped.left,
  'rounded-none': props.grouped === Grouped.center,
  'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md': props.grouped === Grouped.right,
}));
const classList = computed(() => ({
  "animate-skeleton min-h-[1px] min-w-[1px] inline-block": true,
  "absolute inset-0 w-full h-full z-40": props.absolute,
  "rounded-md": props.rounded && props.grouped === Grouped.none,
  ...groupedClassList.value
}));
</script>

<template>
  <div :class="classList"></div>
</template>
