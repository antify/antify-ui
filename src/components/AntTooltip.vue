<script lang="ts">
export default {
  name: 'AntTooltip',
};
</script>

<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import {handleEnumValidation} from "../handler";
import {Position} from "../enums/PositionType.enum";
import {TooltipColorType} from "../types/AntTooltip.type";

const props = withDefaults(defineProps<{
  content?: string,
  position?: Position,
  tooltipClasses?: string | object,
  colorType?: TooltipColorType
}>(), {
  position: Position.left,
  tooltipClasses: {},
  colorType: TooltipColorType.neutral
});
const visible = ref(false);
const _tooltipClasses = computed(() => {
  let classes = {};

  if (typeof props.tooltipClasses === 'string') {
    classes[props.tooltipClasses] = true;
  } else {
    classes = {...props.tooltipClasses};
  }

  return {
    "absolute w-max inline-flex": true,

    // Position
    "bottom-0 mb-[50%] pb-3.5": props.position === Position.top,
    "top-0 mt-[50%] pt-3.5": props.position === Position.bottom,
    "right-0 mr-[100%] pr-3.5": props.position === Position.left,
    "left-0 ml-[100%] pl-3.5": props.position === Position.right,

    ...classes
  };
});
const classes = computed(() => {
  return {
    'z-10 absolute flex': true,
    'top-0 left-0 right-0 -m-[2px] justify-center': props.position === Position.bottom,
    'bottom-0 left-0 right-0 -m-[2px] justify-center': props.position === Position.top,
    'top-0 left-0 bottom-0 -ml-[2.2px] items-center': props.position === Position.right,
    'top-0 right-0 bottom-0 -mr-[2.2px] items-center': props.position === Position.left,
  };
});
const itemContainerClasses = computed(() => {
  return {
    'relative flex items-center': true,
    'justify-center': props.position === Position.bottom,
    'justify-center rotate-180': props.position === Position.top,
    'justify-center -rotate-90': props.position === Position.right,
    'justify-center rotate-90': props.position === Position.left,
  }
});
const contentClasses = computed(() => {
  const classes = {};

  if (props.colorType === TooltipColorType.neutral) {
    classes["text-neutral-lightest-font bg-neutral-lightest border-neutral-light"] = true;
  } else {
    classes[`text-${props.colorType}-font bg-${props.colorType} border-${props.colorType}`] = true;
  }

  return classes;
});
const svgPathClasses = computed(() => {
  const classes = {};

  if (props.colorType === TooltipColorType.neutral) {
    classes["fill-neutral-lightest stroke-neutral-lightest"] = true;
  } else {
    classes[`fill-${props.colorType} stroke-${props.colorType}`] = true;
  }

  return classes;
});
const arrowSvgPathClasses = computed(() => {
  const classes = {};

  if (props.colorType === TooltipColorType.neutral) {
    classes["stroke-neutral-light"] = true;
  } else {
    classes[`stroke-${props.colorType}`] = true;
  }

  return classes;
});

onMounted(() => {
  handleEnumValidation(props.position, Position, 'Position')
  handleEnumValidation(props.colorType, TooltipColorType, 'ColorType')
});

/**
 * To prevent a fliggering ux, add a delay on hover and leaving the hover target,
 * before showing the tooltip content.
 */
const delayVisible = ref(visible.value);
function onMouseOver() {
  delayVisible.value = true;

  setTimeout(() => {
    if (delayVisible.value) {
      visible.value = true
    }
  }, 300)
}
function onMouseLeave() {
  delayVisible.value = false
  visible.value = false
}
</script>

<template>
  <div class="relative inline-flex justify-center items-end"
       @mouseover="onMouseOver"
       @mouseleave="onMouseLeave"
  >
    <slot/>

    <div v-if="visible" :class="_tooltipClasses" class="bg-info">
      <div
          class="shadow-lg text-sm relative inline-flex flex-col relative"
      >
        <div
            :class="classes"
        >
          <div
              :class="itemContainerClasses"
          >
            <svg
                class="absolute mt-[.5px]"
                width="30"
                height="8"
                viewBox="0 0 35 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M20.3284 1.82843L23.1569 4.65685C24.6571 6.15715 26.692 7 28.8137 7L6.18629 7C8.30802 7 10.3429 6.15715 11.8431 4.65686L14.6716 1.82843C16.2337 0.266331 18.7663 0.266328 20.3284 1.82843Z"
                  :class="svgPathClasses"
              />

              <path
                  d="M34.5 7L28.8137 7C26.692 7 24.6571 6.15715 23.1569 4.65685L20.3284 1.82843C18.7663 0.266328 16.2337 0.266331 14.6716 1.82843L11.8431 4.65686C10.3429 6.15715 8.30802 7 6.18629 7L0.5 7L34.5 7Z"
                  :class="svgPathClasses"
              />
            </svg>

            <svg
                class="absolute"
                width="30"
                height="8"
                viewBox="0 0 35 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M34.5 7L28.8137 7C26.692 7 24.6571 6.15715 23.1569 4.65685L20.3284 1.82843C18.7663 0.266328 16.2337 0.266331 14.6716 1.82843L11.8431 4.65686C10.3429 6.15715 8.30802 7 6.18629 7L0.5 7"
                  :class="arrowSvgPathClasses"
              />
            </svg>
          </div>
        </div>

        <div
            class="p-2.5 rounded-md border"
            :class="contentClasses"
        >
          <slot name="content"/>
        </div>
      </div>
    </div>
  </div>
</template>
