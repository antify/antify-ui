<script lang="ts">
export default {
  name: 'AntToast',
};
</script>

<script lang="ts" setup>
import {computed, onMounted, useSlots} from 'vue';
import {ToastColorType} from "../types/AntToast.type";
import {handleEnumValidation} from "../handler";
import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle, faXmark
} from "@fortawesome/free-solid-svg-icons";
import AntIcon from './AntIcon.vue';
import AntButton from './form/AntButton.vue';
import {ButtonColorType} from "./form/__types/AntButton.type";

const props = withDefaults(defineProps<{
  title: string,
  colorType?: ToastColorType,
  showUndo?: boolean,
  icon?: boolean
}>(), {
  colorType: ToastColorType.neutral,
  showUndo: false,
  icon: true
});

const icons = {};

icons[ToastColorType.neutral] = faInfoCircle;
icons[ToastColorType.info] = faInfoCircle;
icons[ToastColorType.danger] = faExclamationCircle;
icons[ToastColorType.warning] = faExclamationTriangle;
icons[ToastColorType.success] = faCheckCircle;

const _icon = computed(() => icons[props.colorType]);
const classes = computed(() => {
  const classes = {
    'inline-flex flex-col gap-2.5 rounded-md p-2.5 border transition-colors': true,
  };

  classes[`bg-${props.colorType}-lighter`] = true;
  classes[`border-${props.colorType}`] = true;
  classes[`text-${props.colorType}`] = true;

  return classes;
});
const hasDefaultSlot = computed(() => useSlots()['default'] || false);
onMounted(() => {
  handleEnumValidation(props.colorType, ToastColorType, 'ColorType');
});
</script>

<template>
  <div :class="classes">
    <div class="inline-flex items-center justify-between w-content gap-2.5">
      <div class="inline-flex items-center gap-2.5">
        <AntIcon v-if="icon" :icon="_icon"/>

        <div :class="{'font-semibold': hasDefaultSlot}">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
      </div>

      <AntIcon
          :icon="faXmark"
          class="cursor-pointer"
          @click="() => $emit('close')"
      />
    </div>

    <div v-if="hasDefaultSlot">
      <slot/>
    </div>

    <div v-if="showUndo" class="flex justify-end">
      <AntButton
          :color-type="props.colorType === ToastColorType.neutralLightest ? ButtonColorType.neutralDark : props.colorType"
          @click="() => $emit('undo')"
      >
        undo
      </AntButton>
    </div>
  </div>
</template>
