<script lang="ts">
export default {
  name: 'AntInputLimiter',
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import Size from '../../../enums/Size.enum'
import AntSkeleton from "../../AntSkeleton.vue";
import {handleEnumValidation} from "../../../handler";
import {InputLimiterColorType} from "./types/AntInputLimiter.type";
import { useVModel } from "@vueuse/core";

const emits = defineEmits(['update:skeleton']);
const props = withDefaults(defineProps<{
  value: number;
  maxValue: number;
  colorType?: InputLimiterColorType;
  size?: Size;
  skeleton?: boolean;
}>(), {
  skeleton: false,
  size: Size.md,
  colorType: InputLimiterColorType.base
});

const _skeleton = useVModel(props, 'skeleton', emits);

const classes = computed(() => {
  const classes = {
    'relative font-regular inline-block transition-color': true,
    'text-xs': props.size === Size.sm,
    'text-sm': props.size === Size.md,
  };

  classes[`text-${props.colorType}`] = true;

  return classes;
});

onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
  handleEnumValidation(props.colorType, InputLimiterColorType, 'InputLimiterColorType');
});
</script>

<template>
  <div :class="classes">
    <span :class="{'invisible': _skeleton}">
        {{ value }}/{{ maxValue }}
    </span>

    <AntSkeleton
        v-model="_skeleton"
        absolute
        rounded
    />
  </div>
</template>
