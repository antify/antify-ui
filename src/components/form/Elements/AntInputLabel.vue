<script lang="ts">
export default {
  name: 'AntInputLabel',
};
</script>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import Size from '../../../enums/Size.enum'
import AntSkeleton from "../../elements/AntSkeleton.vue";
import {handleEnumValidation} from "../../../handler";

const props = withDefaults(defineProps<{
  label?: string;
  size?: Size;
  skeleton?: boolean;
}>(), {
  skeleton: false,
  size: Size.md,
});

const classes = computed(() => ({
  'relative font-medium w-fit': true,
  'text-xs': props.size === Size.sm,
  'text-sm': props.size === Size.md,
}));
onMounted(() => {
  handleEnumValidation(props.size, Size, 'Size');
});
</script>

<template>
  <label
      class="flex flex-col gap-1.5 w-full"
  >
    <span :class="classes">
      <span :class="{'invisible': skeleton}">
        <slot name="label">
          {{ label }}
        </slot>
      </span>

      <AntSkeleton
          v-if="skeleton"
          :absolute="true"
      />
    </span>

    <slot/>
  </label>
</template>
