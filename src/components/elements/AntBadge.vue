<script lang="ts">
export default {
  name: 'AntBadge',
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { faX } from '@fortawesome/free-solid-svg-icons';

defineEmits(['remove']);
const props =
  defineProps<{
    mainBgColor: string;
    secondaryBgColor: string;
    textColor: string;
    size: string;
  }>();

const _mainBgColor = ref<string>(props.mainBgColor || 'primary-light');
const _secondaryBgColor = ref<string>(props.secondaryBgColor || 'primary');
const _textColor = ref<string>(props.textColor || 'white');
const _size = computed(() => {
  return props.size === 'medium'
    ? 'text-sm'
    : props.size === 'large'
    ? 'text-normal'
    : 'text-xs';
});
</script>

<template>
  <span
    class="inline-flex items-center py-0.5 pl-2 pr-0.5 rounded-full font-medium"
    :class="`bg-${_mainBgColor} text-${_textColor} ${_size}`"
  >
    <slot></slot>
    <slot name="closeButton">
      <button
        type="button"
        class="
          flex-shrink-0
          ml-0.5
          h-4
          w-4
          rounded-full
          inline-flex
          items-center
          justify-center
          transition-all
          duration-500
        "
        :class="`text-${_textColor} hover:bg-${_secondaryBgColor} focus:bg-${_secondaryBgColor} hover:text-gray-200`"
        @click="$emit('remove')"
      >
        <span class="sr-only">Remove badge</span>
        <slot name="closeIcon">
          <fa-icon :icon="faX" class="w-2 h-2" />
        </slot>
      </button>
    </slot>
  </span>
</template>
