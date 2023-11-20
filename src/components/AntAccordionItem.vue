<script lang="ts">
export default {
  name: 'AntAccordionItem',
};
</script>

<script lang="ts" setup>
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import AntIcon from "./AntIcon.vue";
import {computed, ref, watch} from "vue";

const props = defineProps<{
  isOpen: boolean;
  label?: string;
}>()
const emit = defineEmits(['close', 'open']);
// TODO:: Stehengeblieben: delays machen
function onClick() {
  if (props.isOpen) {
    emit('close');
  } else {
    emit('open');
  }
}
</script>

<template>
  <div
      class="p-2.5 select-none cursor-pointer transition-colors"
      :class="{'bg-primary text-primary-font': isOpen, 'bg-neutral-lightest text-neutral-lightest-font': !isOpen}"
      @click="onClick"
  >
    <slot name="label" v-bind="{ isOpen: isOpen }">
      <div
          class="hover:text-gray-800 flex justify-between items-center"
      >
        <span class="text-sm font-semibold">
          {{ label }}
        </span>

        <AntIcon
            :icon="isOpen ? faAngleDown : faAngleUp"
            :class="{'text-primary-font': isOpen}"
        />
      </div>
    </slot>
  </div>

  <div
      v-if="isOpen"
      class="bg-white overflow-hidden"
  >
    <transition name="bounce">
      <div
          v-if="isOpen"
          class="p-2.5 bg-neutral-lightest"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .4s;
}

.bounce-leave-active {
  animation: bounce-in .4s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    transform: translateY(5%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
