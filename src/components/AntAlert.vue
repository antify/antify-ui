<script lang="ts">
export default {
  name: 'AntAlert',
};
</script>

<script lang="ts" setup>
import {computed, onMounted, useSlots} from 'vue';
import {AlertColorType} from "../types/AntAlert.type";
import {handleEnumValidation} from "../handler";
import {
  faCheckCircle, faCircleQuestion,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle, faXmark
} from "@fortawesome/free-solid-svg-icons";
import AntIcon from './AntIcon.vue';
import AntTooltip from "./AntTooltip.vue";
import {Position} from "../enums/PositionType.enum";
import AntSkeleton from "./AntSkeleton.vue";
import { useVModel } from "@vueuse/core";

const emits = defineEmits(['update:skeleton']);
const props = withDefaults(defineProps<{
  title: string,
  colorType?: AlertColorType,
  icon?: boolean,
  expanded?: boolean,
  questionMarkText?: string,
  skeleton?: boolean
}>(), {
  colorType: AlertColorType.neutral,
  icon: true,
  expanded: false,
  skeleton: false
});

const _skeleton = useVModel(props, 'skeleton', emits);

const icons = {};

icons[AlertColorType.neutral] = faInfoCircle;
icons[AlertColorType.info] = faInfoCircle;
icons[AlertColorType.danger] = faExclamationCircle;
icons[AlertColorType.warning] = faExclamationTriangle;
icons[AlertColorType.success] = faCheckCircle;

const _icon = computed(() => icons[props.colorType]);
const classes = computed(() => {
  const classes = {
    'inline-flex flex-col gap-2.5 rounded-md p-2.5 transition-colors text-sm relative': true,
    'w-full': props.expanded
  };
  const variants = {}

  variants[AlertColorType.danger] = 'bg-danger-lighter text-danger';
  variants[AlertColorType.info] = 'bg-info-lighter text-info';
  variants[AlertColorType.neutral] = 'bg-neutral-lighter text-neutral';
  variants[AlertColorType.success] = 'bg-success-lighter text-success';
  variants[AlertColorType.warning] = 'bg-warning-lighter text-warning';
  classes[variants[props.colorType]] = true;

  return classes;
});
const hasDefaultSlot = computed(() => useSlots()['default'] || false);
const hasQuestionMark = computed(() => (useSlots()['question-mark-text'] || false) || props.questionMarkText);

onMounted(() => {
  handleEnumValidation(props.colorType, AlertColorType, 'ColorType');
});
</script>

<template>
  <div :class="classes">
    <AntSkeleton v-model="_skeleton" absolute rounded/>

    <div
        class="inline-flex items-center justify-between w-content gap-2.5"
        :class="{'invisible': _skeleton}"
    >
      <div class="inline-flex items-center gap-2.5">
        <AntIcon
            v-if="icon"
            :icon="_icon"
            :color-type="colorType"
        />

        <div :class="{'font-semibold': hasDefaultSlot}">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
      </div>

      <div class="flex gap-2.5">
        <div v-if="hasQuestionMark">
          <slot name="questionMarkText">
            <AntTooltip :position="Position.bottom">
              <AntIcon
                  :icon="faCircleQuestion"
                  :color-type="colorType"
              />

              <template #content>
                {{ questionMarkText }}
              </template>
            </AntTooltip>
          </slot>
        </div>

        <AntIcon
            :icon="faXmark"
            class="cursor-pointer"
            :color-type="colorType"
            @click="() => $emit('close')"
        />
      </div>
    </div>

    <div v-if="hasDefaultSlot">
      <slot/>
    </div>
  </div>
</template>
