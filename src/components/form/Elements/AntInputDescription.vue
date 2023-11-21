<script lang="ts">
export default {
  name: 'AntInputDescription',
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import Size from '../../../enums/Size.enum'
import AntSkeleton from "../../AntSkeleton.vue";
import {handleEnumValidation} from "../../../handler";
import {InputDescriptionColorType} from "./types/AntInputDescription.type";
import { useVModel } from "@vueuse/core";

const emits = defineEmits(['update:skeleton']);
const props = withDefaults(defineProps<{
  colorType?: InputDescriptionColorType,
  size?: Size;
  skeleton?: boolean;
}>(), {
  skeleton: false,
  size: Size.md,
  colorType: InputDescriptionColorType.base
});

const _skeleton = useVModel(props, 'skeleton', emits);

const classes = computed(() => {
  const classes = {
    'relative font-regular inline-block transition-color': true,
    'text-xs': props.size === Size.sm,
    'text-sm': props.size === Size.md,
  }, variants = {};

  variants[InputDescriptionColorType.base] = 'text-neutral';
  variants[InputDescriptionColorType.primary] = 'text-primary';
  variants[InputDescriptionColorType.secondary] = 'text-secondary';
  variants[InputDescriptionColorType.danger] = 'text-danger';
  variants[InputDescriptionColorType.info] = 'text-info';
  variants[InputDescriptionColorType.success] = 'text-success';
  variants[InputDescriptionColorType.warning] = 'text-warning';

  classes[variants[props.colorType]] = true;

  return classes;
});
onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, InputDescriptionColorType, 'InputDescriptionColorType');
});
</script>

<template>
  <div
      :class="classes"
  >
    <span :class="{'invisible': _skeleton}">
      <slot/>
    </span>

    <AntSkeleton
        v-model="_skeleton"
        absolute
        rounded
    />
  </div>
</template>
